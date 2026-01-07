<script>
	const scheduleTourUrl =
		'https://www.toddly.app/school-profile/Alamo-Heights-Presbyterian-Church-Day-School-San-Antonio-TX-5299?open_schedule_tour_modal=true';
</script>

<svelte:head>
	<title>AHPCDS - Schedule a Tour</title>
	<meta name="description" content="AHPCDS - Schedule a Tour" />
</svelte:head>

<section class="py-5">
	<div class="container">
		<div class="row pb-4">
			<div class="col text-center">
				<h1>Schedule a tour</h1>
				<p class="mt-3">
					This opens our scheduling page on Toddly in a new tab.
				</p>
			</div>
		</div>

		<div class="row">
			<div class="col text-center">
				<a
					href={scheduleTourUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-primary"
				>
					Open scheduling page
				</a>
				<div class="mt-3">
					<small>
						If the button doesn’t work, use this link:
						<a href={scheduleTourUrl} target="_blank" rel="noopener noreferrer">
							{scheduleTourUrl}
						</a>
					</small>
				</div>
			</div>
		</div>
	</div>
</section>