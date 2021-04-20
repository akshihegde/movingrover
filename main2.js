canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
images_array=["mars1.jpeg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number=Math.floor(Math.random()*4);
rover_width = 100;
rover_height = 90;

background_image = images_array[random_number];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_img = new Image(); //defining a variable with a new image
	background_img.onload = uploadBackground; // setting a function, onloading this variable
	background_img.src = background_image; // load image

	rover_img = new Image(); //defining a variable with a new image
	rover_img.onload = uploadrover; // setting a function, onloading this variable
	rover_img.src = rover_image; // load image
}

function uploadBackground() {
	ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keypressed = e.keyCode;
	console.log(keypressed);
	if (keypressed == '38') {
		up();
		console.log("up");
	}
	if (keypressed == '39') {
		right();
		console.log("right");
	}
	if (keypressed == '40') {
		down();
		console.log("down");
	}
	if (keypressed == '37') {
		left();
		console.log("left");
	}
}

function up() {
	if (rover_y >= 0) {
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
		uploadBackground();
		uploadrover();
	}
}
function down() {
	if (rover_y <= 500) {
		rover_y = rover_y + 10;
		console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
		uploadBackground();
		uploadrover();
	}
}
function left() {
	if (rover_x >= 0) {
		rover_x = rover_x - 10;
		console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
		uploadBackground();
		uploadrover();
	}
}
function right() {
	if (rover_x <= 700) {
		rover_x = rover_x + 10;
		console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
		uploadBackground();
		uploadrover();
	}
}