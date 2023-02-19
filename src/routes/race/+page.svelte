<script lang="ts">
	import pokemon from '$lib/json/speeds.json';
	import { shuffle } from '$lib/utils/array';

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

	const h = diameter / (count + 1);

	const size = radius / (2 * top.length);
	const halfSize = size / 2;

	let race = false;
	let finished = 0;
	$: if (finished === count) {
		race = false;
		finished = 0;
	}
</script>

<div>
	<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {diameter} {diameter}">
		{#each top as { id, name, speed }, i}
			{@const y = h * (i + 1) - halfSize}
			<image
				{y}
				class:race
				style:--duration={`${(max / speed) * 5}s`}
				style:--size="{size}px"
				width={size}
				height={size}
				href={`pokemon/${id}.svg`}
				on:animationend={() => {
					finished += 1;
				}}
			>
				<title>{name}</title>
			</image>
		{/each}
	</svg>

	<button
		class="btn-wide btn"
		disabled={race}
		on:click={() => {
			finished = 0;
			race = true;
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

	.race {
		animation-name: translate;
		animation-duration: var(--duration, 1s);
		animation-timing-function: ease-in-out;
	}
</style>
