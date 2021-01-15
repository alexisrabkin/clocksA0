function setup() {
	storedMin = minute();
	createCanvas(600,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(255);
	var h = hour();
	var m = minute();
	var s = second();
	if(m != storedMin) {
		console.log(m);
		storedMin = m;
	}
	
	var transparency1 = 20;
	var transparency2 = 40;
	var transparency3 = 150;

	fill(255,0,0, transparency1);
	stroke(255,0,0, transparency3);		
	for (var i = 0; i <= 60; i++) {
		if (i > s) {
			fill(255, 255, 255, 0)
			stroke(255,0,0, transparency2);	
		}
		var sRadius = map(i, 0, 60, 0, 1200);
		ellipse(0, 0, sRadius, sRadius)
	}

	fill(0,100,255, transparency1);
	stroke(0,100,255, transparency3);
	for (var i = 0; i <= 60; i++) {
		if (i > m) {
			fill(255, 255, 255, 0)
			stroke(0,100,255, transparency2);
		}
		var mRadius = map(i, 0, 60, 0, 1200);
		ellipse(600, 0, mRadius, mRadius)
	}

	fill(255,200,0, transparency1);
	stroke(255, 200, 0, transparency3);
	for (var i = 0; i <= 24; i++) {
		if (i > h) {
			fill(255, 255, 255, 0)
			stroke(255, 200, 0, transparency2);
		}
		var hRadius = map(i, 0, 24, 0, 1200);
		ellipse(300, 600, hRadius, hRadius)
	}
}
