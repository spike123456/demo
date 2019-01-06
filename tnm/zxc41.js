var app = angular.module('SinglePage', []);
var currentAngle=Math.floor(Math.random() * 44) + 1;

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function handleScroll(enabled) {
    if (enabled) {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
        $('body').css('overflow','visible');
    }
    else {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
        $('body').css('overflow','hidden');
    }
}

AccountKit_OnInteractive = function(){
    AccountKit.init(
        {
            appId:"1999638293635187",
            version:"v1.0",
            state:"gwegw222",
            fbAppEventsEnabled:true
        }
    );
};

var segments=[
    {'fillStyle' : '#ff834e', 'text' : '10.000 VND'},
    {'fillStyle' : '#aaff3e', 'text' : '300.000 VND'},
    {'fillStyle' : '#fcffb6', 'text' : '30.000 VND'},
    {'fillStyle' : '#ff90a9', 'text' : '500.000 VND'},
    {'fillStyle' : '#97a5ff', 'text' : '100.000 VND'},
    {'fillStyle' : '#53fff6', 'text' : '50.000 VND'},
    {'fillStyle' : '#b559ff', 'text' : '20.000 VND'},
    {'fillStyle' : '#b1ff11', 'text' : '200.000 VND'}
];

var theWheel = new Winwheel({
    'rotationAngle': Math.floor(Math.random() * 359),
    'numSegments'  : 8,     // Specify number of segments.
    'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
    'textFontSize' : 28,    // Set font size as desired.
    'segments'     : segments,        // Define segments including colour and text.
    'animation' :           // Specify the animation to use.
        {
            'stopAngle': currentAngle,
            'type'     : 'spinToStop',
            'duration' : 5,     // Duration in seconds.
            'spins'    : 8,     // Number of complete spins.
            'callbackFinished' : alertPrize,
            'callbackSound': segmentChanged
        }
});


function segmentChanged() {
    $('#result-gift').text("Giải thưởng của bạn: "+segments[theWheel.getIndicatedSegmentNumber()-1].text);
}

var wheelSpinning = false;

function alertPrize(indicatedSegment) {
    wheelSpinning=false;

    var oldAngle=-currentAngle;
    currentAngle=Math.floor(Math.random() * 44) + 1;
    theWheel = new Winwheel({
        'rotationAngle': oldAngle,
        'numSegments'  : 8,     // Specify number of segments.
        'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
        'textFontSize' : 28,    // Set font size as desired.
        'segments'     : segments,       // Define segments including colour and text.,
        'animation' :           // Specify the animation to use.
            {
                'stopAngle': currentAngle,
                'type'     : 'spinToStop',
                'duration' : 5,     // Duration in seconds.
                'spins'    : 8,     // Number of complete spins.
                'callbackFinished' : alertPrize
            }
    });
}

function startSpin() {
    if (!wheelSpinning)
    {
        $('#random-wheel').css('display',"none");
        $('#result-gift').css('display',"block");
        theWheel.animation.spins = 3;
        theWheel.startAnimation();
        wheelSpinning = true;
    }
}

function reorder(list) {
    var left=list.filter(item => item.used===false).sort(function(a, b){return a.time > b.time });
    var right=list.filter(item => item.used===true).sort(function(a, b){return a.time > b.time });
    return left.concat(right);
}

function updateGiftList(data) {
    $('#main-gift-loading').css('display','none');
    if (data) {
        $('#phone-input-form').css('display','none');
        $('#grid-content').css('display','block');
        $('#phone-title').text(data.phoneNumber);
        if (data.orders.length==0) {
            $('#gift-list').css('display','none');
            $('#empty-order').css('display','block');
        }
        else {
            $('#gift-list').css('display','block');
            $('#empty-order').css('display','none');
            return reorder(data.orders);
        }
    }
    else {
        $('#phone-input-form').css('display','block');
        $('#grid-content').css('display','none');
        localStorage.removeItem("giftToken");
    }

    return [];
}

app.controller('giftController', function($scope,$http) {
    $scope.reload = function() {
        var token=localStorage.giftToken;
        if (token) {
            $('#main-gift-loading').css('display','block');
            $('#phone-input-form').css('display','none');
            $('#grid-content').css('display','none');
            $http({
                method: 'GET',
                url: "https://api.doraeshop.vn/v1/gift-of-phone",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': token
                }
            })
                .then(function (response) {
                    $scope.orders=updateGiftList(response.data.data);
                }, function (err) {
                    updateGiftList(null);
                });
        }
        else {
            updateGiftList(null);
        }
    };

    $scope.logout = function() {
        var token=localStorage.giftToken;
        updateGiftList(null);
        $http({
            method: 'POST',
            url: "https://api.doraeshop.vn/v1/use-other-phone",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            }
        })
            .then(function (response) {

            }, function (err) {

            });
    };

    $scope.openDetail = function(id,used) {
        if (!used) {
            $("#wheel-content").css('display','block');
            handleScroll(false);
            $("#key-detail").text(id);
            $("#random-wheel").css('display','block');
            $("#result-gift").css('display','none');
        }
    };

    $scope.verifyPhone = function() {
        var phone=$('#phone-input').val();
        if (phone) {
            if (AccountKit) {
                AccountKit.login(
                    'PHONE',
                    { countryCode: "+84", phoneNumber: phone },
                    function (response) {
                        if (response.status === "PARTIALLY_AUTHENTICATED") {
                            $('#main-gift-loading').css('display','block');
                            $('#phone-input-form').css('display','none');
                            $('#grid-content').css('display','none');
                            $http({
                                method: 'POST',
                                url: "https://api.doraeshop.vn/v1/phone-authenticate",
                                data: {
                                    code: response.code
                                },
                                headers: {
                                    'Content-Type': 'text/plain; charset=utf-8'
                                }
                            })
                                .then(function (response) {
                                    if (response.data.code==200) {
                                        localStorage.giftToken=response.data.data.token;
                                        $scope.orders=updateGiftList(response.data.data.gift);
                                    }
                                    else {
                                        showToast("error","Lỗi","Xác thực thất bại");
                                    }
                                });
                        }
                    }
                );
            }
            else {
                showToast("error","Lỗi","Vui lòng tải lại trang web này hoặc bấm F5");
            }
        }
        else {
            showToast("error","Lỗi","Vui lòng điền số điện thoại của bạn");
        }
    };

    $scope.reload();
});

function closeGift() {
    console.log('here');
    handleScroll(true);
    $("#wheel-content").css('display','none');
}

function eventGift(ev)
{
    if (ev.originalEvent.key=='giftToken') {
        var scope = angular.element(document.getElementById('gift-content-controller')).scope();
        scope.reload();
    }
}

$(window).on('storage', eventGift);