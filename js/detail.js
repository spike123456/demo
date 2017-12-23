var app = angular.module('SinglePage', []);
app.controller('thumbnailController', function($scope) {
    // init paging list
    $scope.currentGallery=0;

    $scope.thumbnailArr=[{
    	src: 'http://lotteshop.vn/wp-content/uploads/2015/09/Natural-Esences-Mask-9-600x600.jpg',
    	w:600,
    	h:600
    },
    {
    	src: 'http://myphambo.com/wp-content/uploads/2014/11/ep-mt-n-3D-natural-esences-Foodaholic.jpg',
    	w:550,
    	h:550
    },
    {
    	src: 'http://xinhcangay.com/content/images/thumbs/0011966.jpg',
    	w:800,
    	h:800
    },
    {
    	src: 'https://thefaceshop360.com/wp-content/uploads/kem-chong-nang-natural-sun-eco-super-perfect-sun-cream-spf50-pa-the-face-shop.jpg',
    	w:500,
    	h:500
    },
    {
    	src: 'http://www.giaydantuong.vn/uploaded/images/sanpham/natural-2017-79-folder/natural-2017-79-image-9100.jpg',
    	w:500,
    	h:500
    }];

    $scope.handleThumbnailClick = function(pos,link) {
    	$scope.currentGallery=pos;
    	$("#main-product-image").attr("src",link);
    };

    $scope.handleThumbnailMiniClick = function() {
    	var pswpElement = document.querySelectorAll('.pswp')[0];
    
    	// define options (if needed)
    	var options = {
            index:$scope.currentGallery,
            history: false,
            focus: false,

            showAnimationDuration: 0,
            hideAnimationDuration: 0

        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, $scope.thumbnailArr, options);
        gallery.init();
     };

     $scope.handleThumbnailClick(0,$scope.thumbnailArr[0].src);
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