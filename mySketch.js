/*
joao espanca bacelar @2015 - 2021
Demo for an art instalation about time and heritage.
Picture @Evora - Portugal (A Barbosa 1910 - J E Bacelar 2015). UNESCO World Heritage.
*/

let pic;
let posx = 1;
let posy = 1;
let speedx = 1;
let speedy = 1;
let sizex = 290;
let sizey = 200;

function preload() {
	pic = loadImage("jinhee.jpeg");
	pic_old = loadImage("jinhee2.jpeg");
}

function setup() {
	createCanvas(916, 615);
	background(60);
}

function draw() {
	blend(pic_old, 0, 0, 916, 615, 0, 0, 916, 615, DARKEST);
  image(pic, 0, 0);
	
  let c = pic_old.get(posx, posy, sizex, sizey);
  image(c, posx, posy, sizex, sizey);
	if (posx + sizex == width | posx == 0) {
		speedx = - speedx;
	}
	if (posy + sizey == height | posy == 0) {
		speedy = - speedy;
	}
	posx = posx + speedx;
	posy = posy + speedy;
}