<script>
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    export let form;

    let formElement;
    let showOverlay = false;
    let formSuccess = false;
    let showFormSubmissionMessage = false;
    let formSubmissionMessage = "";
    let response_data = "";

    let recaptcha_site_key='6LdIHNcpAAAAAN1t9VWk_Wt_N_NmjaxDchGbe__u';

    onMount(async () => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;

        script.addEventListener('load', () => {
            // Google reCAPTCHA script has loaded
        });

        document.body.appendChild(script);
    });

</script>

<svelte:head>
	<title>AHPCDS - Contact us</title>
	<meta name="description" content="AHPCDS Contact us" />
</svelte:head>

{#if showOverlay}
    <div id="formOverlay">
        <div class="overlay-content" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
            <div class="spinner-grow text-light" role="status" style="width: 2rem; height: 2rem;">
                <span class="sr-only">Sending your message...</span>
            </div>
            <p id="loading-label">Sending your message...</p>
        </div>
    </div>
{/if}


<div class="container">
    <div class="text-center py-5">
        <h1>Looking forward to hearing from you!</h1>
    </div>
</div>

{#if showFormSubmissionMessage}
    <div class="container pb-3 px-5">
        <div class={formSuccess ? 'alert alert-success' : 'alert alert-danger'} role="alert">
            {formSubmissionMessage}
        </div>
    </div>
{/if}

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<div class="container form-container">
    <div class="row justify-content-center pb-5">
        <div class="col-12 col-md-10 col-lg-6 form-border">
            <form 
                bind:this={formElement}
                method="POST" 
                use:enhance={() => {
                    showOverlay = true

                    return async ({ result }) => {
                        const response_data = result.data || {};
                        showOverlay = false;
                        showFormSubmissionMessage = true;
                        formSuccess = response_data.success !== false;
                        formSubmissionMessage = formSuccess ?
                            "Your message has been sent! We'll get back to you as soon as possible." :
                            "Please mark the reCaptcha checkbox before submitting.";
                        if (formSuccess) formElement.reset();
                        window.scrollTo(0, 0);
                    }
                }}
            >
                <p class="text-muted">*All fields are required*</p>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="username" name="username"
                                placeholder="Name" required>
                            <label for="username">Name</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" name="email" 
                                placeholder="Email" required>
                            <label for="email">Email</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control" name="phone" id="phone" placeholder="Phone" 
                                maxlength="15" required/> 
                            <label for="phone">Phone</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="dob" name="dob"
                                placeholder="Child's Date of Birth" required>
                            <label for="dob">Child's Date of Birth</label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="form-floating mb-3">
                            <textarea class="form-control" id="message" name="message"
                                placeholder="What's on your mind?" style="height: 150px" required></textarea>
                            <label for="message">What's on your mind?</label>
                        </div>
                    </div>
                </div>

                <div class="g-recaptcha mb-3" data-sitekey={recaptcha_site_key} style="transform:scale(0.8); transform-origin:0 0"></div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    </div>
</div>


<style>
	.form-border {
		border-radius: 20px; 
		border: 1px solid black;
		box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
        padding: 40px;
        background-color: rgb(249, 248, 255);
	}

    @media (max-width: 768px) {
        .form-container {
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    #formOverlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1080;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #loading-label {
        color: #fff;
        font-size: 2em;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }


</style>