function viewport() {
	let e = window, a = 'inner';
	if (!('innerWidth' in window )) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}


$(function() {

	// header scroll

	const header = $('.header');

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 0) {
			header.addClass('is-scroll');
		} else {
			header.removeClass('is-scroll');
		}
	});


	// sidebar

	function sidebarBurger() {
		const htmlBox = $('html');
		htmlBox.toggleClass('no-scroll is-sidebar');
		setTimeout(function () {
			$('.sidebar-scroll').stop().animate({
				scrollTop: 0
			}, 450);
		}, 450);
	}

	$('.sidebar-burger').on('click', function () {
		sidebarBurger();
	});

	$('.sidebar-backdrop').on('click', function () {
		sidebarBurger();
	});


	// scroll target

	$(document).on('click', 'a[href^="#target-"], [data-href^="#target-"]', function(e) {
		e.preventDefault();

		const thisEl = $(this);
		let thisAttrHref;

		if (thisEl.attr('data-href')) {
			thisAttrHref = thisEl.attr('data-href');
		}else {
			thisAttrHref = thisEl.attr('href');
		}

		sidebarBurger();

		$('html, body').animate({
			scrollTop: $(thisAttrHref).offset().top - 80
		}, 450);
	});

});