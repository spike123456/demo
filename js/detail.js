var app = angular.module('SinglePage', []);
app.controller('thumbnailController', function($scope) {
    // init paging list
    $scope.currentGallery=0;

    $scope.thumbnailArr=[
    	"http://lotteshop.vn/wp-content/uploads/2015/09/Natural-Esences-Mask-9-600x600.jpg",
    	"http://myphambo.com/wp-content/uploads/2014/11/ep-mt-n-3D-natural-esences-Foodaholic.jpg",
    	"http://xinhcangay.com/content/images/thumbs/0011966.jpg",
    	"https://thefaceshop360.com/wp-content/uploads/kem-chong-nang-natural-sun-eco-super-perfect-sun-cream-spf50-pa-the-face-shop.jpg",
    	"http://www.giaydantuong.vn/uploaded/images/sanpham/natural-2017-79-folder/natural-2017-79-image-9100.jpg"
    ];


    $scope.handleThumbnailClick = function(pos,link) {
    	$scope.currentGallery=pos;
    	$("#main-product-image").attr("src",link);
    };

    $scope.handleThumbnailMiniClick = function() {
    	var pswpElement = document.querySelectorAll('.pswp')[0];

    	var items=[];
    	for (var i = 0; i <$scope.thumbnailArr.length; i++) {
    		items.push({
    			src:$scope.thumbnailArr[i],
    			w:600,
    			h:600
    		});
    	}
    
    	// define options (if needed)
    	var options = {
            index:$scope.currentGallery,
            history: false,
            focus: false,

            showAnimationDuration: 0,
            hideAnimationDuration: 0

        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
     };

     $scope.handleThumbnailClick(0,$scope.thumbnailArr[0]);
});


app.controller('optionController', function($scope) {
    $scope.currentOption=0;

    $scope.optionList=[
        "Size S",
        "Size M",
        "Size L",
        "Size XL",
        "Size XXL",
        "Size 2XXL"
    ];

    $scope.handleOptionClick = function(pos) {
        $scope.currentOption=pos;
    };
});

app.controller('quantityController', function($scope) {
    var arr=[];
    for (var i = 0; i <50; i++) {
        arr.push(i+1);
    }
    $scope.quantity=arr;
});