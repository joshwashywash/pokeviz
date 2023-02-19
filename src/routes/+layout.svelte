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
		<div class="grow flex flex-col items-center justify-center h-5/6">
			<slot>:o</slot>
		</div>
	</div>
	<aside class="drawer-side">
		<label for="drawer" class="drawer-overlay" />
		<div class="w-80 flex flex-col gap-4 p-4 bg-base-100">
			<ul class="menu text-base-content">
				<!-- Sidebar content here -->
				{#each hrefs as href}
					<li>
						<a href={`${base}/${href}`}>{href}</a>
					</li>
				{/each}
			</ul>
			<div class="alert alert-warning shadow-md">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
					<span
						>svgs are difficult to scale properly. if you can't see the entire visualization, try
						viewing it on a smaller or larger screen</span
					>
				</div>
			</div>
			<a class="grow link text-center" href="https://josho.dev">josho.dev</a>
		</div>
	</aside>
</div>
