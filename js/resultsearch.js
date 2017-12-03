$('.collapse').on('show.bs.collapse', function () {
	$('#' + $(this).attr('id') + '-arrow').removeClass("fa-chevron-down").addClass("fa-chevron-up");
}).on('hide.bs.collapse', function () {
	$('#' + $(this).attr('id') + '-arrow').removeClass("fa-chevron-up").addClass("fa-chevron-down");
});