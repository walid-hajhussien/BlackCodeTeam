angular.module('app').component('aboutus', {

  controller: function() {

    this.aboutus = function() {

    }

    //NOTE : variable

  },

  bindings: {},

  // Establish a mission statement. ...
  // Outline your company story. ...
  // Reveal how you've evolved. ...
  // State your "aha!" ...
  // Explain who you serve. ...
  // Explain what you're offering them. ...
  // Cite examples of who you've served.
  template: `
	<section id="what-we-do">
		<div class="container-fluid">
			<h2 class="section-title mb-2 h1">What we do</h2>
			<p class="text-center text-muted h5">Hearts and Hands</p>
			<div class="row mt-5">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-1">
							<h3 class="card-title">Our Mission</h3>
							<p class="card-text">To transform communities through helping children,
              youth and their families who need support,
              and to attract volunteers and partners who care about helping others.</p>
							</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-2">
							<h3 class="card-title">Our Story</h3>
							<p class="card-text">we started our volunteering from this place ,
              deciding to help people to get a chance to help others through this website.</p>
              </br>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-3">
							<h3 class="card-title">Community Services</h3>
							<p class="card-text">this website is our gift to the community , it gives a services for better society.</p>
							</br>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-4">
							<h3 class="card-title">Our Duties</h3>
							<p class="card-text">For who really want to help others but they don't know where to go or from where to start,
              our duty is to put you in the right path.</p>
              </br>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-5">
							<h3 class="card-title">Who Are We</h3>
							<p class="card-text">A group of warm Hearts who were gathered by RBK institution to spread hope and love for people in need.</p>
							</br>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div class="card">
						<div class="card-block block-6">
							<h3 class="card-title">Contact Us</h3>
							<p class="card-text">we'll love to hear from you , if you have any ideas or comments , weather you need a help or going to help just hit the button.</p>
              <a href="javascript:void();" title="Read more" class="read-more" >Contact Us<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- /Services section -->
`
})
