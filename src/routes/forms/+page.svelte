<script>
    const cal23_24Link = 'https://ahpcds.s3.amazonaws.com/23-24-calendar.webp';
    const cal24_25Link = 'https://ahpcds.s3.amazonaws.com/24-25-calendar.pdf';
    const summerCamp24 = 'https://ahpcds.s3.amazonaws.com/2024-Summer-Camp-Registration.pdf';
    const admissionForm = 'https://ahpcds.s3.amazonaws.com/Admission-Information-Form.pdf';
    const registrationForm24_25 = 'https://ahpcds.s3.amazonaws.com/Registration-Form-2024-to-2025.pdf';
    const handbook = 'https://ahpcds.s3.amazonaws.com/Parent-Handbook.pdf';
</script>

<svelte:head>
	<title>AHPCDS - Forms</title>
    <meta name="description" content="AHPCDS Forms" />
</svelte:head>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h1>Forms & Info</h1>
            </div>
        </div>
    </div>
</section>

<section class="pb-5">
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1>Calendar & Schedule</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 mb-5 mb-sm-0">
                <p>We provide child care Monday through Friday every week except for the days which we are closed as indicated here.</p>
                <p>A daily routine gives young children the stability and confidence they crave. We strive to provide a stable framework that adds structure to our daily lives but also leaves plenty of room for spontaneous and additional activities.</p>
                <p><strong>Our Daily Schedule</strong></p>
                <table style="width: 100%;" class="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td style="width: 40%;">7:30 – 9:00 am</td>
                            <td style="width: 60%;">Arrival</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">7:30-8:00 am</td>
                            <td style="width: 70%;">Breakfast if needed (brought from home)</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">8:45 am</td>
                            <td style="width: 70%;">Clean Up for Chapel</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">9:00-9:30 am</td>
                            <td style="width: 70%;">Chapel</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">9:30-11:30 am</td>
                            <td style="width: 70%;">Snack/Lesson/Circle Time/Playground</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">11:30-12:15 pm</td>
                            <td style="width: 70%;">Lunch/Restroom</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">12:30-2:30 pm</td>
                            <td style="width: 70%;">Rest time</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">2:30-3:00 pm</td>
                            <td style="width: 70%;">Restroom/Snack</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">3:00-4:30 pm</td>
                            <td style="width: 70%;">Circle Time/Playground/Centers</td>
                        </tr>
                        <tr>
                            <td style="width: 30%;">4:30-5:30pm</td>
                            <td style="width: 70%;">Table Toys/Clean Up/Going Home</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center">
                <a href={cal23_24Link} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-3">Calendar 2023-2024</a>
                <a href={cal24_25Link} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Calendar 2024-2025</a>
            </div>
        </div>
    </div>
</section>


<section class="py-5">
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1>Enrollment Forms</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 mb-3 mb-sm-0 d-flex flex-column align-items-center justify-content-center">
                <a href={registrationForm24_25} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-3">Enrollment Form 2024-2025</a>
                <a href={admissionForm} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Admission Form 2024-2025</a>
            </div>
            <div class="col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center">
                <a href={summerCamp24} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-3">Summer Camp 2024</a>
            </div>
        </div>
    </div>
</section>


<section class="py-5">
    <div class="container">
        <div class="row pb-4">
            <div class="col">
                <h1>Tuition & Handbook</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 d-flex flex-column align-items-center justify-content-center">
                <a href={handbook} target="_blank" rel="noopener noreferrer" class="btn btn-primary mb-3">Parent Handbook</a>
            </div>
            <div class="col-12 col-sm-6">
                <p>
                    The Day School offers both full- and part-time enrollment.
                    The tuition listed below is due at the beginning of every month. If you have questions or need further information regarding the cost of childcare at Alamo Heights Presbyterian Church, please <a href="/contact">contact us</a>.
                </p>
                <p>
                    School Age (After School Program) Full Day of Care - $75 Additional fee per day when AHISD is closed. AHPCDS After School Care program follows AHISD calendar.
                </p>
                <p>After the 5th day of each month, your account will be charged a $5/day late fee.</p>
                <p>Pick up is no later than 5:30 pm or a $5/minute is charged to your account.</p>
                <p>All fees are due at registration and are non-refundable.</p>
                <p>For Any Question Please Call +1(210) 822-3213</p>
            </div>
        </div>
    </div>
</section>

<style>

    h1 {
        text-align: center;
    }

</style>