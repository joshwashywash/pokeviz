<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { beforeNavigate } from '$app/navigation';

	const hrefs = ['race', 'types'];

	let checked = false;

	beforeNavigate(() => {
		checked = false;
	});
</script>

<div class="drawer drawer-mobile">
	<input bind:checked id="drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-base-300 gap-4 flex-col flex p-4">
		<label for="drawer" class="btn btn-primary btn-square drawer-button lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</label>
		<article class="container prose dark:prose-invert grow">
			<slot>:o</slot>
		</article>
	</div>
	<aside class="drawer-side">
		<label for="drawer" class="drawer-overlay" />
		<div class="w-80 flex flex-col gap-4 p-4 bg-base-100">
			<ul class="menu text-base-content grow">
				<!-- Sidebar content here -->
				{#each hrefs as href}
					<li>
						<a href={`${base}/${href}`}>{href}</a>
					</li>
				{/each}
			</ul>
			<a class="link text-center" href="https://josho.dev">josho.dev</a>
		</div>
	</aside>
</div>
