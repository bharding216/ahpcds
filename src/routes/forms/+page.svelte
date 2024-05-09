<script>
    const cal23_24Link = 'https://ahpcds.s3.amazonaws.com/23-24-calendar.webp';
    const cal24_25Link = 'https://ahpcds.s3.amazonaws.com/24-25-calendar.pdf';
</script>

<svelte:head>
	<title>AHPCDS - Forms</title>
    <meta name="description" content="AHPCDS Forms" />
</svelte:head>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h1>Forms</h1>
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
            <div class="col-12 col-sm-6">
                <p>
                    We provide child care Monday through Friday every week except for the days which we are closed as indicated here.
                    A daily routine gives young children the stability and confidence they crave. We strive to provide a stable framework that adds structure to our daily lives but also leaves plenty of room for spontaneous and additional activities.
                </p>
                <p>
                    <strong>OVERVIEW OF THE DAILY ROUTINE</strong>
                    <br>
                    Time & Activity:
                </p>
                <table style="width: 100%;">
                    <tbody>
                        <tr>
                            <td style="width: 30%;">7:30 – 9:00 am</td>
                            <td style="width: 70%;">Arrival</td>
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


<section class="pb-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Enrollment Forms</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6">
                <p>links over here</p>
            </div>
            <div class="col-12 col-sm-6">
                <p>links over here</p>
            </div>
        </div>
    </div>
</section>


<section class="pb-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Tuition & Handbook</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6">
                <p>handbook link</p>
            </div>
            <div class="col-12 col-sm-6">
                <p>some text</p>
            </div>
        </div>
    </div>
</section>

<style>

    h1 {
        text-align: center;
    }

</style>