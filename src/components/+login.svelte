<script lang="ts">
	import { auth } from '../firebase';
	import {
		GoogleAuthProvider,
		signInWithPopup,
		signInAnonymously,
		linkWithPopup,
		signOut,
		onAuthStateChanged,
		type User
	} from 'firebase/auth';
	import { onMount } from 'svelte';

	let signLoading = $state(false);
	let loading = $state(true);
	let user = $state<User | null>(null);
	let userId = $derived(user?.uid ?? null);
	let userName = $derived(user?.displayName ?? null);
	let isAnonymous = $derived(user?.isAnonymous ?? false);

	onMount(() => {
		const unsubscribe = onAuthStateChanged(auth, (newUser) => {
			user = newUser;
			loading = false;
		});

		return () => unsubscribe();
	});

	async function handleGuestSignIn() {
		signLoading = true;
		try {
			await signInAnonymously(auth);
		} catch (error: any) {
			console.error(error);
		}
		signLoading = false;
	}

	async function handleGoogleSignIn() {
		signLoading = true;
		try {
			const provider = new GoogleAuthProvider();
			if (isAnonymous && auth.currentUser) {
				// Sign out guest first, then sign in with Google
				await signOut(auth);
			}
			// Regular Google sign in
			const result = await signInWithPopup(auth, provider);
			user = result.user;
		} catch (error: any) {
			console.error(error);
		}
		signLoading = false;
	}

	async function handleSignOut() {
		signLoading = true;
		try {
			await signOut(auth);
		} catch (error: any) {
			console.error(error);
		}
		signLoading = false;
	}
</script>

<div class="flex flex-col items-center gap-4 p-4">
	<p class="text-gray-600">Loading = {loading || signLoading}</p>
	{#if !userId}
		<p class="text-gray-600">Not signed in</p>
		<div class="flex flex-col gap-2">
			<button
				onclick={handleGuestSignIn}
				class="rounded bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
				disabled={signLoading}
			>
				Play as Guest
			</button>
			<button
				onclick={handleGoogleSignIn}
				class="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
				disabled={signLoading}
			>
				Sign in with Google
			</button>
		</div>
	{:else}
		<p class="font-medium text-gray-800">Welcome, {userName ?? 'Guest'}</p>
		<div class="flex flex-col gap-2">
			{#if isAnonymous}
				<button
					onclick={handleGoogleSignIn}
					class="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
					disabled={signLoading}
				>
					Link to Google Account
				</button>
			{/if}
			<button
				onclick={handleSignOut}
				class="rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
				disabled={signLoading}
			>
				Sign out
			</button>
		</div>
	{/if}
</div>
