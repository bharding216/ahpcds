<script>
    // Updated documents
    const calendar25_26Link = 'https://ahpcds.s3.us-east-2.amazonaws.com/2025-2026+Calendar.pdf';
    const enrollmentFormTxHhsLink = 'https://ahpcds.s3.us-east-2.amazonaws.com/Enrollment+Form+-+TX+Health+and+Human+Services.pdf';

    // Existing documents (left as-is)
    const admissionForm = 'https://ahpcds.s3.amazonaws.com/Admission-Information-Form.pdf';
    const handbook = 'https://ahpcds.s3.amazonaws.com/Parent-Handbook.pdf';
</script>

<svelte:head>
	<title>AHPCDS - Forms</title>
    <meta name="description" content="AHPCDS forms, calendar, enrollment documents, and handbook." />
</svelte:head>

<section class="hero py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-9 text-center">
                <h1 class="display-6 fw-semibold mb-2">Forms & School Info</h1>
                <p class="lead text-muted mb-0">
                    Quick access to our calendar, enrollment paperwork, and family resources.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-12 col-lg-7">
                <div class="card card-soft h-100">
                    <div class="card-body p-4 p-md-5">
                        <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
                            <div>
                                <h2 class="h4 mb-1">Calendar & Schedule</h2>
                                <p class="text-muted mb-0">
                                    We provide child care Monday through Friday, except for closure days shown on the calendar.
                                </p>
                            </div>
                            <a
                                href={calendar25_26Link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary btn-lg btn-pill flex-shrink-0"
                                aria-label="Open Calendar 2025–2026 PDF"
                            >
                                Calendar 2025–2026
                            </a>
                        </div>

                        <div class="mt-4">
                            <p class="fw-semibold mb-2">Our Daily Schedule</p>
                            <div class="table-responsive rounded-3 border">
                                <table class="table table-striped mb-0 align-middle">
                                    <tbody>
                                        <tr>
                                            <td class="time-col">7:30 – 9:00 am</td>
                                            <td>Arrival</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">7:30 – 8:00 am</td>
                                            <td>Breakfast if needed (brought from home)</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">8:45 am</td>
                                            <td>Clean up for Chapel</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">9:00 – 9:30 am</td>
                                            <td>Chapel</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">9:30 – 11:30 am</td>
                                            <td>Snack / Lesson / Circle Time / Playground</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">11:30 – 12:15 pm</td>
                                            <td>Lunch / Restroom</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">12:30 – 2:30 pm</td>
                                            <td>Rest time</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">2:30 – 3:00 pm</td>
                                            <td>Restroom / Snack</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">3:00 – 4:30 pm</td>
                                            <td>Circle Time / Playground / Centers</td>
                                        </tr>
                                        <tr>
                                            <td class="time-col">4:30 – 5:30 pm</td>
                                            <td>Table toys / Clean up / Going home</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="small text-muted mt-3 mb-0">
                                Times may vary slightly by class and special events.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-5">
                <div class="card card-soft h-100">
                    <div class="card-body p-4 p-md-5">
                        <h2 class="h4 mb-1">Enrollment</h2>
                        <p class="text-muted mb-4">
                            Download and complete the required enrollment paperwork.
                        </p>

                        <div class="d-grid gap-2">
                            <a
                                href={enrollmentFormTxHhsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary btn-lg btn-pill"
                                aria-label="Open Enrollment Form (TX Health and Human Services) PDF"
                            >
                                Enrollment Form (TX HHS)
                            </a>
                        </div>

                        <hr class="my-4" />

                        <h3 class="h6 text-uppercase text-muted mb-3">Other resources</h3>
                        <div class="d-grid gap-2">
                            <a
                                href={handbook}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary btn-lg btn-pill"
                                aria-label="Open Parent Handbook PDF"
                            >
                                Parent Handbook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="bg-light py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
                <div class="card card-soft">
                    <div class="card-body p-4 p-md-5">
                        <div class="row g-4 align-items-start">
                            <div class="col-12 col-md-5">
                                <h2 class="h4 mb-1">Tuition & Policies</h2>
                                <p class="text-muted mb-3">
                                    Enrollment options, pickup policy, and contact information.
                                </p>
                                <a href="/contact" class="btn btn-primary btn-lg btn-pill">Contact us</a>
                            </div>

                            <div class="col-12 col-md-7">
                                <ul class="list-unstyled mb-0 text-muted">
                                    <li class="mb-2">
                                        We offer both full- and part-time enrollment. Tuition is due at the beginning of every month.
                                    </li>
                                    <li class="mb-2">
                                        Our School Age (After School Program) is an additional $75 per day when AHISD is closed (we follow the AHISD calendar).
                                    </li>
                                    <li class="mb-2">
                                        Pick up is no later than 5:30 pm or a $5/minute is charged to your account.
                                    </li>
                                    <li class="mb-2">
                                        All registration fees are due when you register and are non-refundable.
                                    </li>
                                    <li>
                                        Questions? Call +1 (210) 822-3213.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>

    .hero {
        background:
            radial-gradient(1200px 600px at 10% 10%, rgba(13, 110, 253, 0.12), transparent 60%),
            radial-gradient(900px 500px at 90% 30%, rgba(25, 135, 84, 0.10), transparent 55%),
            linear-gradient(180deg, rgba(248, 249, 250, 1), rgba(248, 249, 250, 0.6));
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    }

    .card-soft {
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 1rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        background: #fff;
    }

    .btn-pill {
        border-radius: 999px;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .time-col {
        width: 38%;
        white-space: nowrap;
        font-weight: 600;
        color: rgba(33, 37, 41, 0.9);
    }

    :global(.table) {
        background-color: white !important;
    }

</style>