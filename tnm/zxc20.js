var currentAngle=Math.floor(Math.random() * 44) + 1;

AccountKit_OnInteractive = function(){
    AccountKit.init(
        {
            appId:"1999638293635187",
            version:"v1.0",
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
        'segments'     :        // Define segments including colour and text.
            [
                {'fillStyle' : '#ff834e', 'text' : '10.000 VND'},
                {'fillStyle' : '#aaff3e', 'text' : '300.000 VND'},
                {'fillStyle' : '#fcffb6', 'text' : '30.000 VND'},
                {'fillStyle' : '#ff90a9', 'text' : '500.000 VND'},
                {'fillStyle' : '#97a5ff', 'text' : '100.000 VND'},
                {'fillStyle' : '#53fff6', 'text' : '50.000 VND'},
                {'fillStyle' : '#b559ff', 'text' : '20.000 VND'},
                {'fillStyle' : '#b1ff11', 'text' : '200.000 VND'}
            ],
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

function startSpin()
{
    if (!wheelSpinning)
    {
        $('#random-wheel').css('display',"none");
        $('#result-gift').css('display',"block");
        theWheel.animation.spins = 3;
        theWheel.startAnimation();
        wheelSpinning = true;
    }
}

function loginCallback(res) {
    if (response.status === "PARTIALLY_AUTHENTICATED") {
        var code = response.code;
        var csrf = response.state;
        console.log('success');
        console.log(code);
        console.log(csrf);
    }
    else if (response.status === "NOT_AUTHENTICATED") {
        console.log('NOT_AUTHENTICATED');
    }
    else if (response.status === "BAD_PARAMS") {
        console.log('BAD_PARAMS');
    }
}

function verifyPhone() {
    AccountKit.login(
        'PHONE',
        {countryCode: "+84", phoneNumber: "0907007620"}, // will use default values if not specified
        loginCallback
    );
}

var app = angular.module('SinglePage', []);