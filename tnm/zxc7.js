var theWheel = new Winwheel({
    'rotationAngle': Math.floor(Math.random() * 359),
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
            'stopAngle': Math.floor(Math.random() * 44) + 1,
            'type'     : 'spinToStop',
            'duration' : 5,     // Duration in seconds.
            'spins'    : 8,     // Number of complete spins.
            'callbackFinished' : alertPrize
        }
});

var wheelSpinning = false;

function alertPrize(indicatedSegment) {
    wheelSpinning=false;
}

function startSpin()
{
    if (!wheelSpinning)
    {
        theWheel.animation.spins = 3;
        theWheel.startAnimation();
        wheelSpinning = true;
    }
}

var app = angular.module('SinglePage', []);