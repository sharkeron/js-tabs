$(function () {

	$(document).on('click', '.tabs li', function (e) {

		e.preventDefault();
		var tabID = $(this).attr('data-tab');
		$('.active[data-tab]').removeClass('active');
		$('[data-tab="' + tabID + '"]').addClass('active');

	});

});

$(window).load(function () {

	var tabs_max_height = 0;
	$('.info-block__tabs .tab-content').css('display', 'block');

	$('.info-block__tabs .tab-content').each(function () {
		var height = $(this).outerHeight(true);
		if (height > tabs_max_height) {
			tabs_max_height = height;
		}
	});

	$('.tab-content').css('height', tabs_max_height + 'px');
	$('.tab-content').css('display', '');

});
