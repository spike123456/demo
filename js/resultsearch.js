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


function generatePagingArr(totalPages,currentPage) {
	var arr=[];
	if (totalPages<=5) {
		for (var i = 1; i <=totalPages; i++) {
			arr.push(i);
		}
	}
	else if (totalPages-currentPage<=1) {
		for (var i = totalPages-4; i <=totalPages; i++) {
			arr.push(i);
		}
	}
	else {
		var startIndex=currentPage-2<=0?1:currentPage-2;
		for (var i = startIndex; i <=startIndex+4; i++) {
			arr.push(i);
		}
	}

	return arr;
}

var app = angular.module('SinglePage', []);
app.controller('pagingController', function($scope) {
    // init paging list
    $scope.totalPages=10;
    $scope.currentPage=1;
    $scope.pagingArr=generatePagingArr($scope.totalPages,$scope.currentPage);

    $scope.updatePaging = function(currentPage) {
    	$scope.currentPage=currentPage;
    	$scope.pagingArr=generatePagingArr($scope.totalPages,$scope.currentPage);        
    };

    $scope.back = function() {
    	if ($scope.currentPage!=1) {
    		$scope.updatePaging($scope.currentPage-1);
    	}
    };

    $scope.next = function() {
    	if ($scope.currentPage!=$scope.totalPages) {
    		$scope.updatePaging($scope.currentPage+1);
    	}
    };
});


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
	var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
	s1.async=true;
	s1.src='https://embed.tawk.to/5a1fb2e6bb0c3f433d4cc206/default';
	s1.charset='UTF-8';
	s1.setAttribute('crossorigin','*');
	s0.parentNode.insertBefore(s1,s0);
})();