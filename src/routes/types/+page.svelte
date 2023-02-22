<script lang="ts">
	import types from '$lib/json/types.json';
	import {
		forceX,
		forceY,
		forceLink,
		forceManyBody,
		forceSimulation,
		type SimulationLinkDatum,
		type SimulationNodeDatum
	} from 'd3-force';

	const angle = (2 * Math.PI) / types.length;

	type Node = SimulationNodeDatum & { id: string };

	type Link = SimulationLinkDatum<Node>;

	const radius = 1;
	const r = radius / 25;
	const diameter = 2 * radius;
	const viewBox = [-radius, diameter].flatMap((i) => [i, i]).join(' ');

	let nodes: Node[] = types.map(({ name }, i) => {
		const theta = i * angle;
		return { id: name, x: Math.cos(theta), y: Math.sin(theta) };
	});

	const links: Link[] = types.flatMap(({ name, twiceEffectiveAgainst }) =>
		twiceEffectiveAgainst.map((target) => {
			return { source: name, target };
		})
	);

	type ForcedLink = { source: Node; target: Node; id: string };
	let linkies: ForcedLink[] = [];

	const sim = forceSimulation<Node, Link>(nodes)
		.force('x', forceX().strength(radius / 2))
		.force('y', forceY().strength(radius / 2))
		.force('charge', forceManyBody().strength(-r))
		.force(
			'links',
			forceLink<Node, Link>(links)
				.id((d) => d.id)
				.distance(radius / 3)
		)
		.on('tick', () => {
			nodes = nodes;
			// d3 mutates the links by converting the source and target from a string to a Node. it also adds the id prop
			linkies = links as ForcedLink[];
		});

	const createLoopPath = (x: number, y: number, diameter: number) => {
		const l = Math.hypot(x, y);
		const [tx, ty] = [x, y].map((s) => (diameter * s) / l);

		const r = Math.max(tx, ty) / 2;

		const prefix = `${r} ${r} 0 0 0`;
		return `M${x} ${y} a${prefix} ${tx} ${ty} ${prefix} ${-tx} ${-ty}`;
	};

	const circlePath = (sx: number, sy: number, dx: number, dy: number) => {
		const diffX = dx - sx;
		const diffY = dy - sy;
		const r = Math.hypot(diffX, diffY);
		return `M${sx} ${sy}a${r} ${r} 0 0 0 ${diffX} ${diffY}`;
	};

	let heldNode: Node | null = null;
</script>

<h1>
	{#if heldNode}
		{@const { name, color } = types[heldNode.index ?? 0]}
		you're holding
		<span style:color>{name}</span>
	{:else}
		drag around the nodes
	{/if}
</h1>

<svg
	class:cursor-grabbing={heldNode !== null}
	on:pointermove={(e) => {
		if (heldNode) {
			const { currentTarget, pointerId, x, y } = e;
			currentTarget.setPointerCapture(pointerId);

			const point = new DOMPoint(x, y).matrixTransform(currentTarget.getScreenCTM()?.inverse());

			heldNode.fx = point.x;
			heldNode.fy = point.y;
		}
	}}
	on:pointerup={() => {
		if (heldNode) {
			heldNode.fx = null;
			heldNode.fy = null;
			heldNode = null;
			sim.alphaTarget(0);
		}
	}}
	fill="none"
	stroke-linecap="round"
	{viewBox}
	xmlns="http://www.w3.org/2000/svg"
>
	<g stroke-width="1%">
		{#each linkies as { source, target }}
			{@const { x: sx, y: sy, id: sID, index } = source}
			{@const { x: tx, y: ty, id: tID } = target}
			{#if sx !== undefined && sy !== undefined && tx !== undefined && ty !== undefined}
				{@const d = sID === tID ? createLoopPath(sx, sy, 2 * r) : circlePath(sx, sy, tx, ty)}
				<path
					stroke-opacity={sID === heldNode?.id ? 1 : 0.3}
					stroke={index !== undefined ? types[index].color : 'none'}
					{d}
				/>
			{/if}
		{/each}
	</g>
	{#each nodes as node, i}
		<circle
			class:cursor-grab={heldNode === null}
			on:pointerdown={() => {
				heldNode = node;
				sim.alphaTarget(0.3).restart();
			}}
			on:touchstart|preventDefault
			fill={types[i].color}
			cx={node.x}
			cy={node.y}
			{r}
		/>
	{/each}
</svg>
