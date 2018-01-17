$('.collapse').on('show.bs.collapse', function () {
	$('#' + $(this).attr('id') + '-arrow').removeClass("fa-chevron-down").addClass("fa-chevron-up");
}).on('hide.bs.collapse', function () {
	$('#' + $(this).attr('id') + '-arrow').removeClass("fa-chevron-up").addClass("fa-chevron-down");
});


function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


$("#price-bar").slider({}).on('change', function(e) {
	var mainValue=e.value.newValue;
	$("#display-price").html("Từ "+numberWithCommas(mainValue[0])+".000<sup>đ</sup> đến "+numberWithCommas(mainValue[1])+".000<sup>đ</sup>");
});


var app = angular.module('SinglePage', []);