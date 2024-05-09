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

</script>

<section class="py-5">
    <div class="container text-center">
        <h1>Our Holistic Approach to Child Development</h1>
    </div>
</section>


<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={fun1} alt="fun1" class="img-fluid rounded-img" />
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <p class="px-1 px-sm-5">
                    Our committed and experienced staff bring fun, creative, and challenging activities into every classroom.
                    AHPCDS serves children aged six weeks to five years old. We are open from 7:30 a.m. – 5:30 p.m. 
                    Monday through Friday, and we offer pick-up and an after-school program for children from Howard 
                    Early Childhood Center, Cambridge and Woodridge Elementary Schools. We also offer a summer camp 
                    program for elementary school children.
                </p>
            </div>
        </div>

    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row pb-5">
            <div class="col text-center">
                <h1>Our classes</h1>
            </div>

        </div>
        <div class="row pb-5">
            <div class="col-12 col-md-4 text-center">
                <h2>Infants</h2>
                <img src={child7} alt="child7" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 text-center">
                <h2>Ones</h2>
                <img src={child2} alt="child2" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 text-center">
                <h2>Twos</h2>
                <img src={child3} alt="child3" class="img-fluid rounded-img" />
            </div>
        </div>

        <div class="row pb-5">
            <div class="col-12 col-md-4 text-center">
                <h2>Pre-K-3</h2>
                <img src={child4} alt="child4" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 text-center">
                <h2>Pre-K-4</h2>
                <img src={child5} alt="child5" class="img-fluid rounded-img" />
            </div>

            <div class="col-12 col-md-4 text-center">
                <h2>School Age</h2>
                <img src={child6} alt="child6" class="img-fluid rounded-img">
            </div>
        </div>

    </div>
</section>


<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h1 class="pb-4">Come see our school!</h1>
                <button class="btn btn-primary">Book a tour</button>
            </div>

            <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <img src={child1} alt="child1" class="img-fluid rounded-img" />
            </div>
        </div>

    </div>
</section>


<style>
    h2 {
        font-size: 2.0rem;
        padding-bottom: 30px;
        text-align: center;
    }

    .rounded-img {
        border-radius: 30px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    }
</style>