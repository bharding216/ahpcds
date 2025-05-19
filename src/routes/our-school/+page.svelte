<script>
    import fun1 from '$lib/images/fun1.webp';
    import child1 from '$lib/images/child1.jpg';
    import child2 from '$lib/images/child2.jpg';
    import child3 from '$lib/images/child3.jpg';
    import child4 from '$lib/images/child4.jpg';
    import child5 from '$lib/images/child5.jpg';
    import child6 from '$lib/images/child6.jpg';
    import child7 from '$lib/images/child7.jpg';
    import child8 from '$lib/images/child8.jpg';
    import infantPhoto from '$lib/images/infant.jpg';
	import { page } from '$app/stores';

</script>

<svelte:head>
	<title>AHPCDS - Our School</title>
    <meta name="description" content="AHPCDS - Our School" />
</svelte:head>

<section class="bg-light py-5">
    <div class="container text-center pb-5 mb-4">
        <h1>Our Holistic Approach to Child Development</h1>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mb-5 mb-sm-0 d-flex align-items-center justify-content-center">
                <img src={fun1} alt="fun1" class="img-fluid rounded-img" />
            </div>
            <div class="col-12 col-md-6 d-flex flex-column align-items-center">
                <p>In our work, we put great focus on one thing - the welfare and education of your child. In order to properly encourage your child's personal and academic development, 
                    our professional educators follow a unique pedagogic approach that combines academic excellence with a free-spirited and playful atmosphere for learning.</p>
                    
                <p>Our teachers regularly participate in educational seminars and always bring new ideas and input to their daily tasks.</p>

                <p>AHPCDS serves children aged six weeks to five years old.
                We are open from 7:30 a.m. - 5:30 p.m. Monday through Friday, and we offer pick-up and an after-school program for children from Howard Early Childhood Center, Cambridge and Woodridge Elementary Schools.</p>
                <p>We also offer a summer camp program for elementary school children.</p>
            </div>
        </div>

    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row pb-5">
            <div class="col text-center">
                <h1>Our Classes</h1>
            </div>

        </div>
        <div class="row pb-5">
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <h2>Infants</h2>
                <img src={child7} alt="child7" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <h2>Ones</h2>
                <img src={child2} alt="child2" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <h2>Twos</h2>
                <img src={child3} alt="child3" class="img-fluid rounded-img" />
            </div>
        </div>

        <div class="row pb-5">
            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <h2>Pre-K-3</h2>
                <img src={child4} alt="child4" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <h2>Pre-K-4</h2>
                <img src={child5} alt="child5" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 mb-5 mb-sm-0 text-center">
                <h2>School Age</h2>
                <img src={child6} alt="child6" class="img-fluid rounded-img">
            </div>
        </div>

    </div>
</section>

<section style="position: relative; background: url({infantPhoto}) no-repeat center center/cover; color: white;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: white; opacity: 0.5; z-index: 1;"></div>
    <div class="container pb-5" style="position: relative; z-index: 2; padding-top: 75px;">
        <div class="row mb-5 justify-content-center">   
            <div class="col-12 col-md-8">
                <div class="text-center">
                    <h1 style="color:black; font-weight: bold; letter-spacing: 2px;" class="pb-4">Robinson House: A Nurturing Home for Infants</h1>

                    <h4 style="color:black; font-weight: 500; letter-spacing: 1px;">
                        Nestled within our infant program, the Robinson House offers a warm, home-like environment designed specifically for our youngest learners.
                    </h4>

                    <h4 style="color:black; font-weight: 500; letter-spacing: 1px;">
                        Named in honor of long-time church members Iris and Robby Robinson, this dedicated space provides exceptional care for up to 18 infants, ensuring each child receives personalized attention and support during their critical early developmental stages.
                    </h4>
                </div>
            </div>
        </div>
        <div class="text-center pt-5">
            <a href="/robinson-house" class="btn btn-primary" aria-current={$page.url.pathname === '/robinson-house' ? 'page' : undefined}>Read more</a>
        </div>
    </div>
</section>

<section class="bg-light py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mb-5 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
                <div class="row">
                    <div class="col-12 mb-0 mb-md-4 text-center">
                        <h1 class="pb-4 text-center">Step into a World of Wonder at AHPCDS</h1>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <a href="/schedule-tour" class="btn btn-primary" aria-current={$page.url.pathname === '/schedule-tour' ? 'page' : undefined}>Schedule a tour</a>
                    </div>
                    <div class="col-12 col-md-6 mb-4 mb-md-0 text-center">
                        <a href="https://www.toddly.app/school-profile/Alamo-Heights-Presbyterian-Church-Day-School-San-Antonio-TX-5299?open_enrollment_modal=true" 
                            target="_blank"
                            class="btn btn-primary">
                            Join our waitlist
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <img src={child1} alt="child1" class="img-fluid rounded-img" />
            </div>
        </div>
    </div>
</section>

<style>
    h2 {
        font-size: 1.5rem;
        padding-bottom: 30px;
        text-align: center;
    }

    .rounded-img {
        border-radius: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
        height: 300px;
    }

</style>