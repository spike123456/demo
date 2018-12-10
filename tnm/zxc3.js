var theWheel = new Winwheel({
    'numSegments'  : 8,     // Specify number of segments.
    'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
    'textFontSize' : 28,    // Set font size as desired.
    'segments'     :        // Define segments including colour and text.
        [
            {'fillStyle' : '#ff834e', 'text' : '10.000 VND'},
            {'fillStyle' : '#aaff3e', 'text' : '20.000 VND'},
            {'fillStyle' : '#fcffb6', 'text' : '30.000 VND'},
            {'fillStyle' : '#ff90a9', 'text' : '50.000 VND'},
            {'fillStyle' : '#97a5ff', 'text' : '100.000 VND'},
            {'fillStyle' : '#53fff6', 'text' : '200.000 VND'},
            {'fillStyle' : '#b559ff', 'text' : '300.000 VND'},
            {'fillStyle' : '#b1ff11', 'text' : '500.000 VND'}
        ],
    'animation' :           // Specify the animation to use.
        {
            'type'     : 'spinToStop',
            'duration' : 5,     // Duration in seconds.
            'spins'    : 8,     // Number of complete spins.
            'callbackFinished' : alertPrize
        }
});

function alertPrize(indicatedSegment) {
	
}

var app = angular.module('SinglePage', []);