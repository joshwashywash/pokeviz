<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import pokemon from '$lib/json/speeds.json';
	import { shuffle } from '$lib/utils/array';

	const count = 5;

	const racers = pokemon
		.map((p, i) => ({ ...p, id: i + 1 }))
		.sort((a, b) => b.speed - a.speed)
		.slice(0, count);

	const radius = 2 * count;
	const diameter = 2 * radius;

	shuffle(racers);

	const durations = racers.map((poke) => poke.speed);
	const time = 3;
	const max = Math.max(...durations);

	const h = diameter / (count + 1);

	const size = radius / (2 * racers.length);
	const halfSize = size / 2;

	let racing = false;
	let finished: string[] = [];
	$: if (finished.length === count) {
		racing = false;
		finished = [];
	}

	const leftLineX = 3 * halfSize;
	const onePercent = diameter / 100;
	const rightLineX = 95 * onePercent - halfSize;
</script>

<Head
	title="Racing Pokemon"
	description="A visualization of how fast some pokemon are compared to others."
/>

<div>
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
		{#each racers as { id, name, speed }, i}
			{@const y = h * (i + 1) - halfSize}
			<image
				{y}
				class:racing
				style:--duration={`${(max / speed) * time}s`}
				style:--size="{size}px"
				width={size}
				height={size}
				href={`pokemon/${id}.svg`}
				on:animationend={() => {
					finished = [...finished, name];
				}}
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

	<button
		class="btn-wide btn"
		disabled={racing}
		on:click={() => {
			finished.length === 0;
			racing = true;
		}}
	>
		race
	</button>
</div>

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
