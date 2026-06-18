(function () {

	'use strict'


	AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});


	if (document.querySelector('.rellax')) { var rellax = new Rellax('.rellax'); }

	var preloader = function() {

		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= .1) < 0) {
					el.style.display = "none";
				} else {
					requestAnimationFrame(fade);
				}
			})();
		};

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	



	


	var countdown = function() {
		var el = document.querySelectorAll('.js-countdown');




		if ( el.length > 0 ) {

			const finaleDate = new Date("March 22, 2022 00:00:00").getTime();

			const timer = () =>{
				const now = new Date().getTime();
				let diff = finaleDate - now;

				if(diff < 0){

					document.querySelector('.custom-alert').style.display = 'block';
					document.querySelector('.counter-wrap').style.display = 'none';
				}

				let days = Math.floor(diff / (1000*60*60*24));
				let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
				let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
				let seconds = Math.floor(diff % (1000*60) / 1000);

				days <= 99 ? days = `0${days}` : days;
				days <= 9 ? days = `00${days}` : days;
				hours <= 9 ? hours = `0${hours}` : hours;
				minutes <= 9 ? minutes = `0${minutes}` : minutes;
				seconds <= 9 ? seconds = `0${seconds}` : seconds;   

				document.querySelector('#days').textContent = days;
				document.querySelector('#hours').textContent = hours;
				document.querySelector('#minutes').textContent = minutes;
				document.querySelector('#seconds').textContent = seconds;

			}
			timer();
			setInterval(timer,1000);
		}
	}

	countdown();

	



	var tinyslier = function() {
		var el = document.querySelectorAll('#testimonial');
		if ( el.length > 0 ) {
			var slider = tns({
				container: "#testimonial",
				items: 1,
				axis: "horizontal",
				swipeAngle: false,
				speed: 400,

				nav: true,
				controls: false,
				controlsPosition: "bottom",
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false,
				"responsive": {
			    "350": {
			      "items": 1
			    },
			    "500": {
			      "items": 1,
			      "gutter": 30,
			    },
			    "768": {
			      "items": 2,
			      "gutter": 30,
			    }
			  },
			});
		}
	}
	tinyslier();

	
	var lightbox = function() {
		if (typeof GLightbox === 'undefined') return;
		var lightboxVideo = GLightbox({
			selector: '.glightbox'
		});
	};
	lightbox();


	// Fixed header — solid dark bar once the page is scrolled
	var stickyNav = function() {
		var nav = document.querySelector('.site-nav');
		if (!nav) return;
		var onScroll = function() {
			if (window.scrollY > 60) {
				nav.classList.add('nav-scrolled');
			} else {
				nav.classList.remove('nav-scrolled');
			}
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	};
	stickyNav();


	// Back to top
	var backToTop = function() {
		var btn = document.querySelector('.back-to-top');
		if (!btn) return;
		var onScroll = function() {
			if (window.scrollY > 400) {
				btn.classList.add('show');
			} else {
				btn.classList.remove('show');
			}
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	};
	backToTop();


	// WhatsApp — open the conversation directly (app on mobile, WhatsApp Web chat on desktop)
	// Skips the wa.me "Continue to Chat / Download" landing page.
	var whatsappDirect = function() {
		var isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
		document.addEventListener('click', function(e) {
			if (!e.target.closest) return;
			var link = e.target.closest('a[href*="wa.me"], a[href*="api.whatsapp"], a[href*="web.whatsapp"]');
			if (!link) return;
			e.preventDefault();

			var phoneMatch = link.href.match(/wa\.me\/\+?(\d+)/) || link.href.match(/[?&]phone=\+?(\d+)/);
			var phone = phoneMatch ? phoneMatch[1] : '2347026550798';

			var textMatch = link.href.match(/[?&]text=([^&]+)/);
			var text = textMatch ? '&text=' + textMatch[1] : '';

			if (isMobile) {
				window.location.href = 'whatsapp://send?phone=' + phone + text;
			} else {
				window.open('https://web.whatsapp.com/send?phone=' + phone + text, '_blank');
			}
		});
	};
	whatsappDirect();


	var navDropdown = function() {
		// Show on hover, stay open until click/focus elsewhere
		document.querySelectorAll('.site-menu li.dropdown').forEach(function(li) {
			li.addEventListener('mouseenter', function() {
				this.classList.add('dropdown-open');
			});
		});
		document.addEventListener('click', function(e) {
			if (!e.target.closest('.site-menu li.dropdown')) {
				document.querySelectorAll('.site-menu li.dropdown').forEach(function(d) {
					d.classList.remove('dropdown-open');
				});
			}
		});
		document.addEventListener('focusin', function(e) {
			if (!e.target.closest('.site-menu li.dropdown')) {
				document.querySelectorAll('.site-menu li.dropdown').forEach(function(d) {
					d.classList.remove('dropdown-open');
				});
			}
		});
	};
	navDropdown();


})()