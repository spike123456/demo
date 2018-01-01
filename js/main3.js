var cartStep=1;

function goToStep() {
    $(".checkout-cart-step").css("display","none");
    $(".current-step").removeClass("current-step");
    $(".current-step-label").removeClass("current-step-label");
    $(".checkout-cart-step").get(cartStep-1).style.display="block";
    $(".checkout-step").get(cartStep-1).className += " current-step";
    $(".step-label").get(cartStep-1).className += " current-step-label";
}

function goNextStep(e) {
    var name=$("#name-address");
    var phone=$("#phone-address");
    var city=$("#city-address");
    var district=$("#district-address");
    var ward=$("#ward-address");
    var main=$("#main-address");
    var note=$("#note-address");

    switch (cartStep) {
        case 1:
            name.val("");
            phone.val("");
            city.val("");
            district.val("");
            ward.val("");
            main.val("");
            note.val("");
            break;
        case 2:
            if (!name.val()) {
                showToast("error","Lỗi","Tên không hợp lệ");
                return;
            }

            if (!phone.val() || !isNumeric(phone.val())) {
                showToast("error","Lỗi","Số điện thoại không hợp lệ");
                return;
            }

            if (!city.val()) {
                showToast("error","Lỗi","Tỉnh/Thành phố không hợp lệ");
                return;
            }

            if (!district.val()) {
                showToast("error","Lỗi","Quận/Huyện không hợp lệ");
                return;
            }

            if (!ward.val()) {
                showToast("error","Lỗi","Phường/Xã không hợp lệ");
                return;
            }

            if (!main.val()) {
                showToast("error","Lỗi","Địa chỉ không hợp lệ");
                return;
            }
            break;
        case 3:
            return;
        default:
            break;
    }

    cartStep++;
    goToStep();
    e.innerHTML=cartStep===3?"THANH TOÁN":"TIẾP TỤC";
}

function isNumeric(num){
    return !isNaN(num);
}

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

	toastr[type](message,title);
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
    	cartStep=0;
        goNextStep(document.getElementsByClassName("confirm-modal")[0]);
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