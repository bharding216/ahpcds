<script>
    // import schoolPhoto from '$lib/images/ahpcds-school.jpg';
    import schoolPhoto from '$lib/images/kids-playing.jpg';
    import teacherPhoto from '$lib/images/teachers.jpg';
    import { page } from '$app/stores';

    import child1 from '$lib/images/child1.jpg';
    import child2 from '$lib/images/child2.jpg';
    import child3 from '$lib/images/child3.jpg';
    import child4 from '$lib/images/child4.jpg';
    import child5 from '$lib/images/child5.jpg';
    import child6 from '$lib/images/child6.jpg';
    import child7 from '$lib/images/child7.jpg';
    import child8 from '$lib/images/child8.jpg';

</script>

<svelte:head>
	<title>Alamo Heights Presbyterian Church Day School in San Antonio, TX</title>
	<meta name="description" content="Alamo Heights Presbyterian Church Day School in San Antonio, TX" />
</svelte:head>

<section class="pb-5">
    <div class="pt-5 pb-5" style="min-height: 700px; position: relative;">
        <div class="background-image" style="background: url({schoolPhoto}) no-repeat center center fixed; 
                    background-size: cover; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0;"></div>
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1;
                    background: white; opacity: 0.6;"></div>
        <div class="container pb-5" style="position: relative; z-index: 2; padding-top: 75px;">
            <div class="row mb-5 justify-content-center">   
                <div class="col-12 col-md-8">
                    <div class="text-center">
                        <h1 style="color:black; font-weight: bold; letter-spacing: 2px;" class="pb-4">Inspiring Children to Believe and Achieve</h1>
                        <h4 style="color:black; font-weight: 500; letter-spacing: 1px;">
                            Welcome to Alamo Heights Presbyterian Church Day School! We are dedicated to providing a nurturing, faith-based environment where children can grow academically, emotionally, and spiritually. 
                        </h4>

                        <h4 style="color:black; font-weight: 500; letter-spacing: 1px;">
                            With a low child-to-staff ratio, our experienced educators create engaging, creative, and challenging experiences tailored to each child's unique needs. We proudly serve children from six weeks to four years old, offer after-school programs for local elementary students, and provide an exciting summer camp.
                        </h4>
                    </div>
                </div>
            </div>
            <div class="text-center pt-5">
                <a href="/schedule-tour" class="btn btn-primary" aria-current={$page.url.pathname === '/schedule-tour' ? 'page' : undefined}>Schedule a tour today</a>
            </div>
        </div>
    </div>
</section>

<section class="py-5">
    <div class="container pt-5" data-aos="fade-up" data-aos-duration="750">
        <div class="row mb-5 text-center">
            <h1 style="color: black;">
                Our Approach to Early Childhood Education
            </h1>
        </div>
    </div>

    <div class="container pb-5">
        <div class="row mb-3 px-5 px-sm-0">
            <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                <a href="/our-school" class="interactive-card">
                    <div class="text-center homepage-card">
                        <h4 class="mb-4 mt-3">About Us</h4>
                        <i class="fa-solid fa-school" style="color: black; font-size: 60px;"></i>
                        <p class="mt-4">
                            AHPCDS is a faith-based, non-profit ministry providing a loving and secure environment for children's growth and learning.                    
                        </p>
                        <button class="btn btn-primary">Learn More</button>
                    </div>
                </a>
            </div>

            <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                <a href="/our-school" class="interactive-card">
                    <div class="text-center homepage-card">
                        <h4 class="mb-4 mt-3">Our Classes</h4>
                        <i class="fa-solid fa-children" style="color: black; font-size: 60px;"></i>
                        <p class="mt-4">
                            We offer engaging, age-appropriate programs for children from six weeks to four years, plus after-school care and summer camp.
                        </p>
                        <button class="btn btn-primary">View Classes</button>
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
                        <button class="btn btn-primary">Explore Resources</button>                   
                    </div>
                </a>
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
                <img src={child7} alt="child7" class="img-fluid rounded-img" />
            </div>
    
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <img src={child2} alt="child2" class="img-fluid rounded-img" />
            </div>
    
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <img src={child3} alt="child3" class="img-fluid rounded-img" />
            </div>
        </div>
    </div>
</section>


<section style="position: relative; background: url({teacherPhoto}) no-repeat center center/cover; color: white;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 1;"></div>
    <div class="py-5 container" style="position: relative; z-index: 2;" data-aos="fade-up" data-aos-duration="1000">
        <div class="pt-5">
            <div class="row mb-5 text-center">
                <h1>What Parents Are Saying</h1>
            </div>
        </div>

        <div class="pb-5">
            <div class="row mb-3 px-5 px-sm-0">
                <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                    <div class="text-center testimonial-card">
                        <p class="m-0">"This school has been an absolute blessing! Our child is not only learning but truly loves going every day. The teachers are caring, and the environment is so warm and welcoming."</p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                    <div class="text-center testimonial-card">
                        <p class="m-0">"The moment we stepped in for a tour, we knew this was the right place. The staff is so kind and attentive, and we’ve seen incredible growth in our child both academically and socially."</p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-4 justify-content-center homepage-cols mb-4">
                    <div class="text-center testimonial-card">
                        <p class="m-0">"We love how engaged the teachers are! Getting daily updates and photos makes us feel so connected to our child’s day. It truly feels like a second home."</p>                    
                    </div>
                </div>
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

    .testimonial-card {
		padding: 60px 20px;
		background-color: var(--light-purple); 
		border-radius: 20px; 
		height: 100%;
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        align-items: center;
        justify-content: center;
        display: flex;
        color: black;
        font-size: 1.1rem;
	}

</style>