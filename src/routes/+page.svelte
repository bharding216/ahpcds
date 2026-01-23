<script>
    // import schoolPhoto from '$lib/images/ahpcds-school.jpg';
    import schoolPhoto from '$lib/images/kids-playing.jpg';
    import teacherPhoto from '$lib/images/teachers.jpg';
    import soccerPhoto from '$lib/images/soccer.jpg';
    import gymPhoto from '$lib/images/gym.png';
    import engPhoto from '$lib/images/eng.png';
    import child2 from '$lib/images/child2.jpg';
    import child3 from '$lib/images/child3.jpg';
    import child7 from '$lib/images/child7.jpg';
	import { SCHEDULE_TOUR_URL } from '$lib/links';

	const testimonials = [
		{
			quote:
				'This school has been an absolute blessing! Our child is not only learning but truly loves going every day. The teachers are caring, and the environment is so warm and welcoming.',
			name: 'AHPCDS Parent',
			context: 'Toddler program'
		},
		{
			quote:
				'The moment we stepped in for a tour, we knew this was the right place. The staff is so kind and attentive, and we’ve seen incredible growth in our child both academically and socially.',
			name: 'AHPCDS Parent',
			context: 'Preschool program'
		},
		{
			quote:
				'We love how engaged the teachers are! Getting daily updates and photos makes us feel so connected to our child’s day. It truly feels like a second home.',
			name: 'AHPCDS Parent',
			context: 'Infant room'
		}
	];
</script>

<svelte:head>
	<title>Alamo Heights Presbyterian Church Day School in San Antonio, TX</title>
	<meta name="description" content="Alamo Heights Presbyterian Church Day School in San Antonio, TX" />
</svelte:head>

<section class="hero">
	<div class="hero__bg background-image" style="background-image: url({schoolPhoto});" aria-hidden="true"></div>
	<div class="hero__overlay" aria-hidden="true"></div>
	<div class="container hero__content">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="text-center">
					<p class="hero__eyebrow mb-3">Faith-based early childhood education in San Antonio</p>
					<h1 class="hero__title mb-4">Inspiring Children to Believe and Achieve</h1>
					<p class="hero__lead mb-3">
						Welcome to Alamo Heights Presbyterian Church Day School — a nurturing environment where children grow
						academically, emotionally, and spiritually.
					</p>
					<p class="hero__lead mb-0">
						Small class sizes, a low child-to-staff ratio, and experienced educators from <strong>eight weeks to four years</strong>,
						plus after-school care and summer camp.
					</p>

					<div class="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
						<a
							href={SCHEDULE_TOUR_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-primary btn-lg px-4"
						>
							Schedule a tour
						</a>
						<a
							href="https://www.toddly.app/school-profile/Alamo-Heights-Presbyterian-Church-Day-School-San-Antonio-TX-5299?open_enrollment_modal=true"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-outline-dark btn-lg px-4 hero__secondary"
						>
							Join the waitlist
						</a>
					</div>

					<div class="hero__highlights mt-4">
						<div class="hero__pill"><i class="fa-solid fa-user-group me-2" aria-hidden="true"></i>Low child-to-staff ratio</div>
						<div class="hero__pill"><i class="fa-solid fa-church me-2" aria-hidden="true"></i>Faith-based & welcoming</div>
						<div class="hero__pill"><i class="fa-solid fa-shield-heart me-2" aria-hidden="true"></i>Safe, nurturing environment</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="testimonials testimonials--top">
	<div class="testimonials__bg" style="background-image: url({teacherPhoto});" aria-hidden="true"></div>
	<div class="testimonials__overlay" aria-hidden="true"></div>
	<div class="container testimonials__inner" data-aos="fade-up" data-aos-duration="750">
		<div class="row align-items-end mb-4 testimonials__header">
			<div class="col-12 col-lg-8">
				<p class="section-kicker mb-2">Trusted by local families</p>
				<h2 class="mb-0 text-white">What Parents Are Saying</h2>
			</div>
			<div class="col-12 col-lg-4 text-lg-end mt-3 mt-lg-0">
				<a href={SCHEDULE_TOUR_URL} target="_blank" rel="noopener noreferrer" class="btn btn-light btn-sm px-3">
					See if we’re the right fit
				</a>
			</div>
		</div>

		<div class="testimonial-grid">
			{#each testimonials as t}
				<figure class="testimonial-card">
					<div class="testimonial-card__stars" aria-label="5 out of 5 stars">
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
						<i class="fa-solid fa-star"></i>
					</div>
					<blockquote class="testimonial-card__quote">“{t.quote}”</blockquote>
					<figcaption class="testimonial-card__meta">
						<div class="testimonial-card__avatar" aria-hidden="true"></div>
						<div>
							<div class="testimonial-card__name">{t.name}</div>
							<div class="testimonial-card__context">{t.context}</div>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>

<section class="py-1 py-sm-5">
    <div class="container pt-5" data-aos="fade-up" data-aos-duration="750">
        <div class="row mb-5 text-center">
            <h1 style="color: black;">
                Our Approach to Early Childhood Education
            </h1>
        </div>
    </div>

    <div class="container pb-1 pb-sm-5">
        <div class="row mb-3 px-5 px-sm-0">
            <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                <a href="/our-school" class="interactive-card">
                    <div class="text-center homepage-card">
                        <h4 class="mb-4 mt-3">About Us</h4>
                        <i class="fa-solid fa-school" style="color: black; font-size: 60px;"></i>
                        <p class="mt-4">
                            AHPCDS is a faith-based, non-profit ministry providing a loving and secure environment for children's growth and learning.                    
                        </p>
                        <span class="btn btn-primary">Learn More</span>
                    </div>
                </a>
            </div>

            <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                <a href="/our-school" class="interactive-card">
                    <div class="text-center homepage-card">
                        <h4 class="mb-4 mt-3">Our Classes</h4>
                        <i class="fa-solid fa-children" style="color: black; font-size: 60px;"></i>
                        <p class="mt-4">
                            We offer engaging, age-appropriate programs for children from eight weeks to four years, plus after-school care and summer camp.
                        </p>
                        <span class="btn btn-primary">View Classes</span>
                    </div>
                </a>
            </div>

            <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                <a href="/forms" class="interactive-card">
                    <div class="text-center homepage-card">
                        <h4 class="mb-4 mt-3">Our Resources</h4>
                        <i class="fa-solid fa-book-open" style="color: black; font-size: 60px;"></i>
                        <p class="mt-4">
                            Our school provides a safe, enriching space with dedicated teachers, small class sizes, and a curriculum that nurtures every child's development.
                        </p> 
                        <span class="btn btn-primary">Explore Resources</span>                   
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

<section class="extracurriculars py-5 bg-light">
    <div class="container my-5">
        <div class="text-center mb-5">
            <h2 class="display-5 fw-bold mb-4">Enriching Extracurricular Experiences</h2>
            <p class="lead text-muted mb-4">Discover the exciting learning opportunities beyond the classroom</p>
            <a href="/our-school" class="btn btn-primary btn-lg px-4 py-2">Explore All Activities</a>
        </div>
        
        <div class="row g-4">
            <div class="col-12 col-md-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src={soccerPhoto} alt="Soccer Shots" class="card-img-top rounded-top" />
                    <div class="card-body text-center">
                        <h3 class="card-title h4 mb-3">Soccer Shots</h3>
                        <p class="card-text text-muted">
                            Develop athletic skills, teamwork, and confidence through engaging soccer programs designed specifically for young learners.
                        </p>
                        <div class="mt-3">
                            <span class="badge bg-success me-2">Physical Development</span>
                            <span class="badge bg-primary">Teamwork</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-12 col-md-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src={gymPhoto} alt="Gymnastics" class="card-img-top rounded-top" />
                    <div class="card-body text-center">
                        <h3 class="card-title h4 mb-3">Gymnastics</h3>
                        <p class="card-text text-muted">
                            Build strength, flexibility, and body awareness through fun and structured gymnastics classes tailored for children.
                        </p>
                        <div class="mt-3">
                            <span class="badge bg-warning me-2">Coordination</span>
                            <span class="badge bg-info">Flexibility</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-12 col-md-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src={engPhoto} alt="Bricks Bots & Breaks" class="card-img-top rounded-top" />
                    <div class="card-body text-center">
                        <h3 class="card-title h4 mb-3">Bricks Bots & Beakers</h3>
                        <p class="card-text text-muted">
                            Explore the world of STEM through hands-on robotics, building challenges, and creative problem-solving activities.
                        </p>
                        <div class="mt-3">
                            <span class="badge bg-primary me-2">STEM</span>
                            <span class="badge bg-secondary">Innovation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section class="pb-5 mb-5">
    <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center py-5">
            <h1 class="mb-5 px-3">Tailored Programs for All Ages</h1>
            <a href="/our-school" class="btn btn-primary mb-5">Check out our classes</a>
        </div>
        <div class="row pb-5">
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <img src={child7} alt="Child playing and learning at AHPCDS" class="img-fluid rounded-img" />
            </div>
    
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <img src={child2} alt="Student exploring activities at AHPCDS" class="img-fluid rounded-img" />
            </div>
    
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <img src={child3} alt="Child enjoying classroom time at AHPCDS" class="img-fluid rounded-img" />
            </div>
        </div>
    </div>
</section>

<style>
    .rounded-img {
        border-radius: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
        height: 300px
    }

    @media (max-width: 768px) {
        .background-image {
            background-attachment: scroll !important;
        }
    }

    .homepage-cols {
        padding: 20px;
    }

    .interactive-card {
        text-decoration: none;
        display: block;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .interactive-card:hover .homepage-card {
        transform: scale(1.05);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
        background-color: rgba(255, 255, 255, 0.9);
    }

    .interactive-card:active .homepage-card {
        transform: scale(0.97);
        transition: transform 0.1s ease;
    }


    .homepage-card {
        padding: 20px;
        background-color: var(--light-purple);
        border-radius: 20px;
        height: 100%;
        /* border: 1px solid black; */
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        color: black;
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    }

	.hero {
		position: relative;
		min-height: 720px;
		padding: 90px 0 80px;
		display: flex;
		align-items: center;
	}

	.hero__bg {
		position: absolute;
		inset: 0;
		background: no-repeat center center;
		background-size: cover;
		background-attachment: fixed;
		z-index: 0;
	}

	.hero__overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.86) 0%, rgba(255, 255, 255, 0.72) 55%, rgba(255, 255, 255, 0.88) 100%),
			radial-gradient(900px circle at 50% 0%, rgba(124, 58, 237, 0.12), rgba(255, 255, 255, 0) 55%);
	}

	.hero__content {
		position: relative;
		z-index: 2;
	}

	.hero__eyebrow {
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.7);
		font-size: 0.9rem;
	}

	.hero__title {
		color: #111;
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.1;
		font-size: clamp(2.2rem, 4vw, 3.4rem);
	}

	.hero__lead {
		color: rgba(0, 0, 0, 0.8);
		font-size: 1.1rem;
		max-width: 58ch;
		margin-left: auto;
		margin-right: auto;
	}

	.hero__secondary {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(8px);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: rgba(0, 0, 0, 0.88) !important;
		border-color: rgba(0, 0, 0, 0.55) !important;
	}

	.hero__secondary:hover,
	.hero__secondary:focus,
	.hero__secondary:focus-visible {
		background: rgba(255, 255, 255, 0.92) !important;
		color: rgba(0, 0, 0, 0.92) !important;
		border-color: rgba(0, 0, 0, 0.78) !important;
	}

	.hero__highlights {
		display: flex;
		gap: 12px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.hero__pill {
		display: inline-flex;
		align-items: center;
		padding: 10px 14px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.65);
		border: 1px solid rgba(0, 0, 0, 0.08);
		color: rgba(0, 0, 0, 0.78);
		font-weight: 600;
		font-size: 0.95rem;
	}

	.testimonials {
		position: relative;
		color: white;
		overflow: hidden;
	}

	.testimonials__inner {
		padding: 3.25rem 0;
	}

	@media (min-width: 992px) {
		.testimonials__inner {
			padding: 12rem 0;
		}
	}

	.testimonials__bg {
		position: absolute;
		inset: 0;
		background: no-repeat center center/cover;
		filter: saturate(1.05);
		transform: scale(1.02);
		z-index: 0;
	}

	.testimonials__overlay {
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(120deg, rgba(17, 24, 39, 0.82), rgba(17, 24, 39, 0.55)),
			radial-gradient(900px circle at 15% 30%, rgba(124, 58, 237, 0.28), rgba(17, 24, 39, 0) 60%);
	}

	.testimonials .container {
		position: relative;
		z-index: 2;
	}

	.section-kicker {
		color: rgba(255, 255, 255, 0.85);
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		font-size: 0.85rem;
	}

	.testimonial-grid {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		.testimonial-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 18px;
		}
	}

	@media (max-width: 767px) {
		.testimonials__header {
			padding-left: 1rem;
			padding-right: 1rem;
		}

		.testimonial-grid {
			/* Use flex for consistent card widths across mobile browsers */
			display: flex;
			overflow-x: auto;
			padding: 0 1rem 14px;
			gap: 16px;
			scroll-snap-type: x mandatory;
			scroll-padding: 1rem;
			-webkit-overflow-scrolling: touch;
		}

		.testimonial-grid > * {
			flex: 0 0 calc(100% - 2rem);
			scroll-snap-align: start;
		}

		.testimonial-card {
			padding: 20px 18px;
			min-height: 420px;
			width: 100%;
		}

		.testimonial-card__quote {
			font-size: 1rem;
			line-height: 1.55;
			display: -webkit-box;
			line-clamp: 9;
			-webkit-line-clamp: 9;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}

		.testimonial-card__meta {
			margin-top: auto;
		}
	}

	.testimonial-card {
		padding: 22px 20px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 18px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.28);
		backdrop-filter: blur(10px);
		min-height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0;
	}

	.testimonial-card__stars {
		color: rgba(250, 204, 21, 0.95);
		letter-spacing: 2px;
		font-size: 0.95rem;
	}

	.testimonial-card__quote {
		margin: 14px 0 0;
		color: rgba(255, 255, 255, 0.95);
		font-size: 1.05rem;
		line-height: 1.55;
	}

	.testimonial-card__meta {
		display: flex;
		gap: 12px;
		align-items: center;
		margin-top: 18px;
	}

	.testimonial-card__avatar {
		width: 40px;
		height: 40px;
		border-radius: 999px;
		background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.2));
		border: 1px solid rgba(255, 255, 255, 0.35);
	}

	.testimonial-card__name {
		font-weight: 800;
		line-height: 1.2;
	}

	.testimonial-card__context {
		color: rgba(255, 255, 255, 0.78);
		font-size: 0.95rem;
	}

</style>