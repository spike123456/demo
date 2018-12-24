var currentAngle=Math.floor(Math.random() * 44) + 1;

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
    'drawMode'     : 'image',
    'imageOverlay' : true,
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

var loadedImg = new Image();

// Create callback to execute once the image has finished loading.
loadedImg.onload = function()
{
    theWheel.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
    theWheel.draw();                    // Also call draw function to render the wheel.
}

// Set the image source, once complete this will trigger the onLoad callback (above).
loadedImg.src = "https://spike123456.github.io/demo/tnm/ahihi.png";


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

var app = angular.module('SinglePage', []);