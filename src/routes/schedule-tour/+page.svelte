<script>
    let isLoading = true;

    function handleLoad() {
        isLoading = false;
    }
</script>

<svelte:head>
	<title>AHPCDS - Schedule a Tour</title>
    <meta name="description" content="AHPCDS - Schedule a Tour" />
</svelte:head>

<section class="py-5">
    <div class="container">
        <div class="row pb-5">
            <div class="col text-center">
                <h1>We're ready to show you around!</h1>
            </div>
        </div>

        <div class="row">
            <div class="col iframe-column">
                <iframe 
                    src="https://www.toddly.app/school-profile/Alamo-Heights-Presbyterian-Church-Day-School-San-Antonio-TX-5299?open_schedule_tour_modal=true" 
                    title="Schedule a tour" 
                    width="100%" 
                    height="100%"
                    on:load={handleLoad}
                ></iframe>

                {#if isLoading}
                    <div id="loadingOverlay">
                        <div class="overlay-content" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
                            <div class="spinner-grow text-light" role="status" style="width: 2rem; height: 2rem;">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <p id="loading-label">Loading...</p>
                        </div>
                    </div> 
                {/if}
            </div>
        </div>
    </div>
</section>



<style>
    #loadingOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1080;
        display: flex;
        justify-content: center;
        text-align: center;
    }

    #loading-label {
        color: #fff;
        font-size: 2em;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .overlay-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .iframe-column {
        position: relative;
        width: 100%;
        height: 700px;
        overflow: hidden;
    }
</style>