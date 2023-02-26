<script lang="ts">
	import { createClamp } from '$lib/utils/number';
	import { circlePath, createLoopPath } from '$lib/utils/svg';
	import {
		forceX,
		forceY,
		forceLink,
		forceManyBody,
		forceSimulation,
		type SimulationLinkDatum,
		type SimulationNodeDatum
	} from 'd3-force';
	import { createEventDispatcher } from 'svelte';

	type $$Events = {
		grab: CustomEvent<number>;
		drop: CustomEvent;
	};

	const dispatch = createEventDispatcher();

	type Node = SimulationNodeDatum & { id: string };

	type Link = SimulationLinkDatum<Node>;

	export let nodes: Node[];
	export let links: Link[];
	export let colors: string[];
	export let linkInactiveOpacity = 0.3;

	const clamp = createClamp(0, 1);
	linkInactiveOpacity = clamp(linkInactiveOpacity);

	const radius = 1;
	const r = radius / 25;
	const diameter = 2 * radius;
	const viewBox = [-radius, diameter].flatMap((i) => [i, i]).join(' ');

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

	export let heldNode: Node | null = null;
</script>

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
			dispatch('drop');
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
					stroke-opacity={sID === heldNode?.id ? 1 : linkInactiveOpacity}
					stroke={index === undefined ? 'none' : colors[index]}
					{d}
				/>
			{/if}
		{/each}
	</g>
	{#each nodes as node}
		{@const { index } = node}
		<circle
			class:cursor-grab={heldNode === null}
			on:pointerdown={() => {
				heldNode = node;
				sim.alphaTarget(0.3).restart();
				dispatch('grab', heldNode.index);
			}}
			on:touchstart|preventDefault
			fill={index === undefined ? 'none' : colors[index]}
			cx={node.x}
			cy={node.y}
			{r}
		/>
	{/each}
</svg>
