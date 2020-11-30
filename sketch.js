let facemesh;
let video;
let predictions = [];

function setup() {
	createCanvas(640, 480);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	video = createCapture(VIDEO);
	video.size(width, height);

	facemesh = ml5.facemesh(video, modelReady);
	facemesh.on("predict", results => {
		predictions = results;
	});

	video.hide();
}

function modelReady() {
	console.log("Model ready!");
}

function draw() {
	blendMode(BLEND);
	image(video, 0, 0, width, height);

	blendMode(ADD);
	drawingContext.shadowColor = color(0, 0, 100);
	drawingContext.shadowBlur = 30;
	drawKeypoints();
}

function drawKeypoints() {
	for (let i = 0; i < predictions.length; i += 1) {
		const keypoints = predictions[i].scaledMesh;

		// Draw facial keypoints.
		for (let j = 0; j < keypoints.length; j += 1) {
			const [x, y] = keypoints[j];

			let n = j*5 + frameCount * 3;
			let d = map(sin(j * 15 + frameCount * 10), -1, 1, 0, 15);
			fill(n % 360, 80, 100,33);

			noStroke();
			ellipse(x, y, d, d);
		}
	}
}