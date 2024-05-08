<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';

	var currentYear = new Date().getFullYear();
</script>

<div>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>

</style>