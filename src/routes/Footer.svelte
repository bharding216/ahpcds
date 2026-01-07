<script>
	import './styles.css';
    const instagramLink = 'https://www.instagram.com/ahpcds/';
	import { SCHEDULE_TOUR_URL } from '$lib/links';

	var currentYear = new Date().getFullYear();

</script>

<footer class="site-footer">
	<div class="container site-footer__container">
		<div class="row g-4 align-items-start">
			<div class="col-12 col-lg-5">
				<p class="site-footer__title mb-2">Alamo Heights Presbyterian Church Day School</p>
				<p class="site-footer__muted mb-3">
					A nurturing, faith-based environment where children grow academically, emotionally, and spiritually.
				</p>

				<ul class="site-footer__list">
					<li>
						<a
							class="site-footer__link"
							href="https://www.google.com/maps?q=6201%20Broadway,%20San%20Antonio,%20TX%2078209"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fa-solid fa-location-dot me-2" aria-hidden="true"></i>
							6201 Broadway, San Antonio, TX 78209
						</a>
					</li>
					<li>
						<a class="site-footer__link" href="tel:+12108223213">
							<i class="fa-solid fa-phone me-2" aria-hidden="true"></i>
							(210) 822-3213
						</a>
					</li>
				</ul>
			</div>

			<div class="col-12 col-sm-6 col-lg-3">
				<p class="site-footer__eyebrow mb-3">Quick links</p>
				<ul class="site-footer__list">
					<li><a href="/our-school" class="site-footer__link">Our School</a></li>
					<li>
						<a href={SCHEDULE_TOUR_URL} class="site-footer__link" target="_blank" rel="noopener noreferrer">
							Schedule Tour
						</a>
					</li>
					<li><a href="/forms" class="site-footer__link">Forms & Info</a></li>
					<li><a href="/contact" class="site-footer__link">Contact</a></li>
				</ul>
			</div>

			<div class="col-12 col-sm-6 col-lg-4">
				<p class="site-footer__eyebrow mb-3">Connect</p>
				<div class="d-flex flex-column gap-3">
					<a
						href={SCHEDULE_TOUR_URL}
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary site-footer__cta"
					>
						Schedule a tour
					</a>

					<a
						href={instagramLink}
						target="_blank"
						rel="noopener noreferrer"
						class="site-footer__social"
					>
						<span class="site-footer__social-icon" aria-hidden="true">
							<i class="fa-brands fa-instagram"></i>
						</span>
						<span>
							<span class="site-footer__social-label">Instagram</span>
							<span class="site-footer__muted d-block">Follow photos & updates</span>
						</span>
					</a>
				</div>
			</div>
		</div>

		<hr class="site-footer__divider" />

		<div class="site-footer__bottom">
			<p class="mb-0 site-footer__muted">&copy; {currentYear} Alamo Heights Presbyterian Church Day School</p>
			<p class="mb-0 site-footer__muted">
				Site created by
				<a class="site-footer__link" href="https://www.toddly.app/" target="_blank" rel="noopener noreferrer">Toddly</a>
			</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background: linear-gradient(180deg, var(--light-purple), rgba(242, 235, 255, 0.6));
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	.site-footer__container {
		padding: 2.75rem 1rem 2rem;
	}

	@media (min-width: 576px) {
		.site-footer__container {
			padding: 3rem 0 2rem;
		}
	}

	.site-footer__title {
		font-weight: 900;
		letter-spacing: -0.01em;
	}

	.site-footer__eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-weight: 800;
		font-size: 0.85rem;
		color: rgba(0, 0, 0, 0.7);
	}

	.site-footer__muted {
		color: rgba(0, 0, 0, 0.65);
	}

	.site-footer__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 10px;
	}

	.site-footer__link {
		color: rgba(0, 0, 0, 0.82);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		border-radius: 10px;
		padding: 4px 6px;
		margin-left: -6px; /* keeps text aligned while still giving hover padding */
		transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
	}

	.site-footer__link:hover {
		color: rgba(0, 0, 0, 0.95);
		background: rgba(255, 255, 255, 0.7);
		transform: translateY(-1px);
	}

	.site-footer__link:focus-visible {
		outline: 3px solid rgba(124, 58, 237, 0.35);
		outline-offset: 2px;
		background: rgba(255, 255, 255, 0.7);
	}

	.site-footer__cta {
		border-radius: 14px !important;
		padding: 14px 16px !important;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.site-footer__social {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		border-radius: 16px;
		padding: 12px 14px;
		border: 1px solid rgba(0, 0, 0, 0.08);
		background: rgba(255, 255, 255, 0.55);
		transition: background-color 160ms ease, transform 160ms ease, box-shadow 160ms ease;
	}

	.site-footer__social:hover {
		background: rgba(255, 255, 255, 0.8);
		transform: translateY(-1px);
		box-shadow: 0px 10px 22px rgba(0, 0, 0, 0.12);
	}

	.site-footer__social:focus-visible {
		outline: 3px solid rgba(124, 58, 237, 0.35);
		outline-offset: 2px;
	}

	.site-footer__social-icon {
		width: 42px;
		height: 42px;
		border-radius: 14px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.08);
		color: rgba(0, 0, 0, 0.8);
		font-size: 1.1rem;
	}

	.site-footer__social-label {
		color: rgba(0, 0, 0, 0.88);
		font-weight: 900;
	}

	.site-footer__divider {
		margin: 2rem 0 1.25rem;
		opacity: 0.12;
	}

	.site-footer__bottom {
		display: flex;
		flex-direction: column;
		gap: 8px;
		justify-content: space-between;
	}

	@media (min-width: 768px) {
		.site-footer__bottom {
			flex-direction: row;
			align-items: center;
		}
	}
</style>