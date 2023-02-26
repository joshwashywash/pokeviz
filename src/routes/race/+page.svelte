<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Race from '$lib/components/Race.svelte';
	import pokemon from '$lib/json/speeds.json';
	import { shuffle } from '$lib/utils/array';
	import { difference } from '$lib/utils/set';

	const count = 5;

	const racers = pokemon
		.map((p, i) => ({ ...p, href: `pokemon/${i + 1}.svg` }))
		.sort((a, b) => b.speed - a.speed)
		.slice(0, count);

	const names = racers.map(({ name }) => name);

	shuffle(racers);

	let finishedRacers = new Set();
	let racingRacers = new Set();

	const onFinish = (event: CustomEvent<string>) => {
		finishedRacers = finishedRacers.add(event.detail);
		racingRacers = difference(racingRacers, finishedRacers);
	};

	$: racing = racingRacers.size > 0;
</script>

<Head
	title="Racing Pokemon"
	description="A visualization of how fast some pokemon are compared to others."
/>

<div>
	<Race bind:racing {racers} on:finish={onFinish} time={1} />
	<button
		class="btn-wide btn"
		disabled={racing}
		on:click={() => {
			finishedRacers = new Set();
			racingRacers = new Set(names);
		}}
	>
		race
	</button>
</div>
