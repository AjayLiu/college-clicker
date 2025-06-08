<script lang="ts">
	import { onMount } from 'svelte';

	let clicks = $state(0);
	let isTouchDevice = $state(false);

	onMount(() => {
		isTouchDevice = 'ontouchstart' in window;
	});

	function handleClick(event: MouseEvent | TouchEvent | KeyboardEvent): void {
		event.preventDefault();
		clicks++;
	}
</script>

<div class="flex min-h-[50vh] flex-col items-center justify-center select-none">
	<div class="mb-4 text-4xl font-bold">Clicks: {clicks}</div>
	<button
		class="relative h-48 w-48 overflow-hidden rounded-full bg-amber-500 shadow-lg transition-all hover:bg-amber-400 active:scale-95 active:bg-amber-600"
		style="touch-action: manipulation; -webkit-tap-highlight-color: transparent;"
		onclick={isTouchDevice ? undefined : handleClick}
		ontouchstart={handleClick}
		onkeydown={handleClick}
		tabindex="0"
	>
		<!-- Cookie texture -->
		<div class="absolute inset-0 rounded-full bg-amber-700 opacity-30"></div>
		<!-- Chocolate chips -->
		<div class="absolute top-8 left-8 h-6 w-6 rounded-full bg-[#3E2723]"></div>
		<div class="absolute top-12 right-12 h-5 w-5 rounded-full bg-[#3E2723]"></div>
		<div class="absolute bottom-12 left-12 h-6 w-6 rounded-full bg-[#3E2723]"></div>
		<div class="absolute right-8 bottom-8 h-5 w-5 rounded-full bg-[#3E2723]"></div>
		<div
			class="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E2723]"
		></div>
	</button>
</div>

<style>
	/* Prevent text selection during rapid clicking */
	button {
		user-select: none;
		-webkit-user-select: none;
		outline: none;
	}
</style>
