<script lang="ts">
	import pokemon from '$lib/json/speeds.json';
	import { derived } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import { shuffle } from '$lib/utils/array';
	import { sineInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const count = 5;

	const top = pokemon
		.map((p, i) => ({ ...p, id: i + 1 }))
		.sort((a, b) => a.speed - b.speed)
		.slice(0, count);

	const radius = 2 * count;
	const diameter = 2 * radius;

	shuffle(top);

	const durations = top.map((poke) => poke.speed);
	const max = Math.max(...durations);
	const scaled = durations.map((d) => (1000 * max) / d);
	const racers = scaled.map((duration) => tweened(0, { duration, easing: sineInOut }));

	const d = derived(racers, ($racers) => $racers);
	const h = diameter / (count + 1);

	const size = radius / (2 * top.length);
	const halfSize = size / 2;
	const race = () => racers.map((racer) => racer.set(diameter - size).then(() => racer.set(0)));

	let disabled = false;
</script>

<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {diameter} {diameter}">
	{#each $d as x, i}
		{@const { id, name } = top[i]}
		{@const y = h * (i + 1) - halfSize}
		<image {y} {x} width={size} height={size} href={`pokemon/${id}.svg`}>
			<title>{name}</title>
		</image>
	{/each}
</svg>

<button
	class="btn-wide btn"
	transition:fade
	{disabled}
	on:click={() => {
		disabled = true;
		Promise.all(race()).then(() => {
			disabled = false;
		});
	}}
>
	race
</button>
