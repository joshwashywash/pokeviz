<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import TypeNetwork from '$lib/components/TypeNetwork.svelte';

	import types from '$lib/json/types.json';

	const angle = (2 * Math.PI) / types.length;

	const nodes = types.map(({ name }, i) => {
		const theta = i * angle;
		return { id: name, x: Math.cos(theta), y: Math.sin(theta) };
	});

	const links = types.flatMap(({ name, twiceEffectiveAgainst }) =>
		twiceEffectiveAgainst.map((target) => {
			return { source: name, target };
		})
	);

	const colors = types.map(({ color }) => color);
	let _index: number = -1;

	const onGrab = (event: CustomEvent<number>) => {
		_index = event.detail;
	};

	const onDrop = () => {
		_index = -1;
	};
</script>

<Head
	title="A Pokemon Type Advantage Network"
	description="A network visualization of how strong certain pokemon types are against others. Drag around each node to get a better view of the network."
/>

<h1>
	{#if _index < 0}
		drag around the nodes
	{:else}
		{@const { name, color } = types[_index]}
		you're holding
		<span style:color>{name}</span>
	{/if}
</h1>
<TypeNetwork {nodes} {links} {colors} on:grab={onGrab} on:drop={onDrop} />
