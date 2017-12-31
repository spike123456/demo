

function showToast(type,title,message) {
	toastr.options = {
		"closeButton": true,
		"debug": false,
		"newestOnTop": false,
		"progressBar": false,
		"positionClass": "toast-bottom-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	};

	toastr[type](title,message);
}


app.controller('cartController', function($scope) {
    $scope.cacheCart=[
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	},
    	{
    		"title":"Loa Di Động Bluetooth JBL Trip (Đen) - Hàng Chính Hãng",
    		"price":1000,
    		"quantity":3,
    		"img":"https://static.hotdeal.vn/images/647/646698/280x280/133288-thuc-pham-chuc-nang-trinh-nu-hoang-cung.jpg"
    	}
    ];

    $('#cart-modal').on('show.bs.modal', function (e) {
    	
	});

    $scope.formatPrice = function(num) {
    	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    var arr=[];
    for (var i = 0; i <50; i++) {
        arr.push(i+1);
    }
    $scope.quantity=arr;
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