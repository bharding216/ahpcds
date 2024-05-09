<script>
	import './styles.css';
    const instagramLink = 'https://www.instagram.com/ahpcds/';

	var currentYear = new Date().getFullYear();

</script>

<footer>
    <div class="py-5 mb-4 text-center container">

        <div class="row d-flex align-items-center">
            <div class="col-12 col-sm-6">
              <p class="fw-bold">Quick Links</p>
              <p class="mb-2"><a href="/our-school" class="unstyled-link">Our School</a></p>
              <p class="mb-2"><a href="/schedule-tour" class="unstyled-link">Schedule Tour</a></p>              
              <p class="mb-2"><a href="/forms" class="unstyled-link">Forms & Info</a></p>
              <p><a href="/contact" class="unstyled-link">Contact</a></p>
            </div>
            <div class="col-12 col-sm-6">
                <p class="fw-bold">&copy; {currentYear} Alamo Heights Presbyterian Church Day School</p>
                <p>6201 Broadway, San Antonio, TX 78209</p>
                <p>Phone: (210) 822-3213</p>
                <p><a href={instagramLink} target="_blank" rel="noopener noreferrer" class="social-link">Follow us <i class="fab fa-instagram"></i></a></p>
                <p>Site created by <a class="unstyled-link" href="https://www.toddly.app/" target="_blank" rel="noopener noreferrer">Toddly</a></p>
            </div>
        </div>
    </div>

</footer>

<style>

    .social-link {
        color: #000;
        
    }
  
</style>