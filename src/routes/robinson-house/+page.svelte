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
	<title>AHPCDS - Robonsion House</title>
    <meta name="description" content="AHPCDS - Robinson House" />
</svelte:head>

<section class="bg-light py-5">
    <div class="container text-center pb-5 mb-4">
        <h1>Robinson House Infant Program</h1>
        <h2>A Special Place of Care and Growth</h2>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-column align-items-center">
                <p>At Alamo Heights Presbyterian Church Day School, the Robinson House represents our commitment to providing the highest quality infant care. Established in June 2007, this unique program offers a nurturing, home-like environment where every child is cherished and supported.</p>
            </div>
        </div>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <h3>Our Philosophy of Care</h3>
        <p>Our infant program is built on three fundamental principles:</p>
        <ul>
            <li><strong>Individual Attention</strong>: With low caregiver-to-infant ratios, we ensure each child receives personalized, one-on-one care.</li>
            <li><strong>Holistic Development</strong>: We focus on nurturing physical, social, and cognitive growth through thoughtful interactions and age-appropriate activities.</li>
            <li><strong>Family Partnership</strong>: We believe in open, consistent communication with parents to support your child's unique needs and development.</li>
        </ul>
    </div>
</section>


<section class="bg-light py-5">
    <div class="container">
        <h3>What Makes Robinson House Special</h3>
    
        <div class="highlight">
            <h4>A Homelike Environment</h4>
            <p>The Robinson House isn't just a daycare—it's a home away from home. Our dedicated space is designed to make infants feel secure, comfortable, and loved. Caregivers spend quality time:</p>
            <ul>
                <li>Holding and comforting</li>
                <li>Singing and reading</li>
                <li>Playing and exploring</li>
                <li>Supporting motor skill development</li>
            </ul>
        </div>
    
        <div class="highlight">
            <h4>Commitment to Safety and Health</h4>
            <p>We prioritize your infant's well-being through:</p>
            <ul>
                <li>Twice-daily sanitization of toys and play areas</li>
                <li>Strict adherence to child care licensing standards</li>
                <li>Compliance with current SIDS prevention research</li>
                <li>Clean, carefully maintained environment</li>
            </ul>
        </div>
    
        <div class="highlight">
            <h4>Feeding and Nutrition</h4>
            <p>We support your infant's nutritional needs with:</p>
            <ul>
                <li>Comfortable breastfeeding spaces for mothers</li>
                <li>Acceptance of breast milk and prepared bottles</li>
                <li>Personal attention during feeding times</li>
                <li>No bottle propping</li>
                <li>Age-appropriate feeding positions (high chairs, small tables)</li>
            </ul>
        </div>
    
        <div class="highlight">
            <h4>Daily Communication</h4>
            <p>Our transparent approach keeps you connected:</p>
            <ul>
                <li>Daily activity sheets tracking feeding, sleep, and play</li>
                <li>HiMama communication application</li>
                <li>Detailed schedule boards</li>
                <li>Encouragement of parent-caregiver dialogue</li>
            </ul>
        </div>
    </div>
</section>


<section class="py-5">
    <div class="container">
        <h3>Preparing for Robinson House</h3>
    
        <h4>What to Bring</h4>
        <p>Parents should provide:</p>
        <ul>
            <li>Pre-made bottles</li>
            <li>Prepared food</li>
            <li>Suction bowl</li>
            <li>Diapers and wipes</li>
            <li>Multiple clothing changes</li>
            <li>Bottled water (if applicable)</li>
            <li>Pacifiers (if used)</li>
        </ul>
    
        <h4>Important Notes</h4>
        <ul>
            <li>All items must be clearly labeled</li>
            <li>Medications cannot be added to bottles</li>
            <li>We provide crib sheets twice weekly</li>
        </ul>
    </div>
</section>


<section class="bg-light py-5">
    <div class="container">
        <h3>Our Promise</h3>
        <p>The Robinson House team is dedicated to creating a loving, secure environment where your infant can thrive. We view each day as an opportunity to support their unique journey of growth, learning, and discovery.</p>
        
        <p><em>Inspired by the legacy of Iris and Robby Robinson, we continue their commitment to nurturing young lives.</em></p>

        <div class="text-center pt-3">
            <a href="/schedule-tour" class="btn btn-primary" aria-current={$page.url.pathname === '/schedule-tour' ? 'page' : undefined}>Schedule a tour</a>
        </div>
    </div>
</section>


<style>


</style>