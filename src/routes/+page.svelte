<script>
    import schoolPhoto from '$lib/images/ahpcds-school.jpg';
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
        <div style="background: url({schoolPhoto}) no-repeat center center fixed; 
                    background-size: cover; position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 0;"></div>
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1;
                    background: black; opacity: 0.2;"></div>
        <div class="container pb-5" style="position: relative; z-index: 2; padding-top: 75px;">
            <div class="row mb-5 justify-content-center">   
                <div class="col-12 col-md-8">
                    <div class="text-center">
                        <h1 style="color:white; font-weight: bold; letter-spacing: 2px;" class="pb-4">Inspiring Children to Believe and Achieve</h1>
                        <h4 style="color:white; font-weight: 300; letter-spacing: 1px;">Celebrating over 40 years of early childhood education excellence</h4>
                    </div>
                </div>
            </div>
            <div class="text-center pt-5">
                <a href="/schedule-tour" class="btn btn-primary" aria-current={$page.url.pathname === '/schedule-tour' ? 'page' : undefined}>Schedule a tour today</a>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="text-center py-5">
            <h1 class="mb-5">Tailored Programs for All Ages</h1>
            <a href="/our-school" class="btn btn-primary">Check out our classes</a>
        </div>
        <div class="row pb-5">
            <div class="col-12 col-md-4 text-center">
                <img src={child7} alt="child7" class="img-fluid rounded-img" />
            </div>
    
            <div class="col-12 col-md-4 text-center">
                <img src={child2} alt="child2" class="img-fluid rounded-img" />
            </div>
    
            <div class="col-12 col-md-4 text-center">
                <img src={child3} alt="child3" class="img-fluid rounded-img" />
            </div>
        </div>
    </div>
</section>



<style>
    .rounded-img {
        border-radius: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    }
</style>