<script lang="ts">
	let clicks = $state(0);

	function handleClick(event: MouseEvent | TouchEvent | KeyboardEvent): void {
		event.preventDefault();
		clicks++;
	}
</script>

<div class="flex min-h-[50vh] flex-col items-center justify-center select-none">
	<div class="mb-4 text-4xl font-bold">Clicks: {clicks}</div>
	<button
		class="relative h-32 w-32 overflow-hidden rounded-full bg-amber-500 shadow-lg transition-all hover:bg-amber-400 active:scale-95 active:bg-amber-600"
		style="touch-action: manipulation; -webkit-tap-highlight-color: transparent;"
		onclick={handleClick}
		ontouchstart={handleClick}
		onkeydown={handleClick}
		role="button"
		tabindex="0"
	>
		<!-- Cookie texture -->
		<div class="absolute inset-0 rounded-full bg-amber-700 opacity-30"></div>
		<!-- Chocolate chips -->
		<div class="absolute top-6 left-6 h-4 w-4 rounded-full bg-[#3E2723]"></div>
		<div class="absolute top-8 right-8 h-3 w-3 rounded-full bg-[#3E2723]"></div>
		<div class="absolute bottom-8 left-8 h-4 w-4 rounded-full bg-[#3E2723]"></div>
		<div class="absolute right-6 bottom-6 h-3 w-3 rounded-full bg-[#3E2723]"></div>
		<div
			class="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3E2723]"
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
