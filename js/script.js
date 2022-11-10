$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
  });
	$('.slick-prev').text('>');
	$('.slick-next').text('>');
})
