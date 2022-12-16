canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

rover_width = 100;
rover_hight = 100;

rover_x = 200;
rover_y = 200;

Image_Array = ["mars153.jpg","mars.jpg","image4.jpg","mars52145.jpg","mars0jpg"]
random_number = Math.floor(Math.random() * 5)



background_image = Image_Array[random_number]

rover_image = "rover.png"


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_hight)
}


window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed)


    if (keyPressed == '38') {
        up();
        console.log("up");
    }


    if (keyPressed == '40') {
        down();
        console.log("down");
    }


    if (keyPressed == '39') {
        right();
        console.log("right");
    }


    if (keyPressed == '37') {
        left();
        console.log("left");
    }
}

function up() {
    console.log("up is pressed")
    if (rover_y >= 0) {
        rover_y = rover_y - 10
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10

        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10

        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10

        uploadBackground();
        uploadrover();
    }
}





