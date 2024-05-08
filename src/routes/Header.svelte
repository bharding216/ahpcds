<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/ahpcds-logo.png';
</script>

<header>
	<nav class="navbar sticky-top navbar-expand-lg navbar-custom static-top">
		<div class="container">

			<!--Logo to the left-->
			<a class="navbar-brand" href="/">
				<img alt="Company logo" src={logo} class="logo align-top">
			</a>

			<button class="navbar-toggler" 
				type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" 
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<!--Links to the right-->
			<div class="navbar-collapse collapse mb-3" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto me-5">
					<li aria-current={$page.url.pathname === '/portfolio' ? 'page' : undefined} class="nav-item">
						<a href="/portfolio" class="nav-link">Portfolio</a>
					</li>

					<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined} class="nav-item">
						<a href="/about" class="nav-link">About</a>
					</li>

					<li aria-current={$page.url.pathname === '/pricing' ? 'page' : undefined} class="nav-item">
						<a href="/pricing" class="nav-link">Pricing</a>
					</li>

					<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined} class="nav-item">
						<a href="/contact" class="nav-link">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar-nav a {
		text-transform: uppercase;
	}

	.nav-link {
		font-size: 12px;
	}

	.navbar-custom {
		background-color: var(--primary-color);
	}

	@media (max-width: 768px) { 
		.nav-link {
			font-size: 14px;
		}

        .logo {
			width: 200px;
			height: auto;
		}
	}

	@media (min-width: 768px) {
		.logo {
			width: 300px;
			height: auto;
		}
	}
</style>