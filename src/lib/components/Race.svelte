<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	type $$Events = {
		finish: CustomEvent<string>;
	};

	type Racer = {
		name: string;
		href: string;
		speed: number;
	};

	const dispatch = createEventDispatcher();

	export let racers: Racer[];
	export let racing: boolean;
	export let time = 3;

	const radius = 2 * racers.length;
	const diameter = 2 * radius;

	const durations = racers.map((poke) => poke.speed);
	const max = Math.max(...durations);

	const h = diameter / (racers.length + 1);

	const size = radius / (2 * racers.length);
	const halfSize = size / 2;

	const leftLineX = 3 * halfSize;
	const onePercent = diameter / 100;
	const rightLineX = 95 * onePercent - halfSize;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {diameter} {diameter}">
	<line
		x1={leftLineX}
		y1={5 * onePercent}
		x2={leftLineX}
		y2={95 * onePercent}
		stroke-dasharray={0.5}
		stroke-width={onePercent}
		class="stroke-primary-content"
	/>
	{#each racers as { href, name, speed }, i}
		{@const y = h * (i + 1) - halfSize}
		<image
			{y}
			class:racing
			style:--duration={`${(max / speed) * time}s`}
			style:--size="{size}px"
			width={size}
			height={size}
			{href}
			on:animationend={() => dispatch('finish', name)}
		>
			<title>{name}</title>
		</image>
	{/each}
	<line
		x1={rightLineX}
		y1={5 * onePercent}
		x2={rightLineX}
		y2={95 * onePercent}
		stroke-dasharray={0.5}
		stroke-width={onePercent}
		class="stroke-primary-content"
	/>
</svg>

<style>
	@keyframes translate {
		0% {
			transform: translateX(0%);
		}
		50% {
			transform: translateX(calc(100% - var(--size, 0px)));
		}
		100% {
			transform: translateX(0%);
		}
	}

	.racing {
		animation-name: translate;
		animation-duration: var(--duration, 1s);
		animation-timing-function: ease-in-out;
	}
</style>
