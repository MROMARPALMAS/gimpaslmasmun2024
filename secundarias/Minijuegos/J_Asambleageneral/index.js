const gamebord  = document.querySelector("#gamebord");
const ctx = gamebord.getContext("2d");
const txtpuntaje = document.querySelector("#txtpuntaje");
const resetB = document.querySelector("#resetB");
const gamewidth = gamebord.width;
const gameheight = gamebord.height;
const boardBlackground = "white";
const snakecolor = "lightgreen";
const snakeborder = "black";
const foodcolor = "red";  
const unitsize = 25;
let running = false;
let xvelocity = unitsize;
let yvelocity = 0;
let foodx;
let foody;
let score = 0;
let snake = [
    {x: unitsize * 4, y: 0},
    {x: unitsize * 3, y: 0},
    {x: unitsize * 2, y: 0},
    {x: unitsize, y: 0},
    {x: 0, y: 0}
];


window.addEventListener("keydown", changeDirection);
resetB.addEventListener("click", resetgame);

gamestart();

function gamestart() {
    running = true;
    txtpuntaje.textContent = score;
    createfoood();
    drawfood();
    nextic();
}

function nextic() {
    if (running) {
        setTimeout(() => {
            clearBord();  
            drawfood();
            movesnake();
            drawsnake();
            checkgameover();
            nextic();
        }, 75);
    } else {
        displaygameover();
    }
}

function clearBord() {
    ctx.fillStyle = boardBlackground;  
    ctx.fillRect(0, 0, gamewidth, gameheight);
}

function createfoood() {
    function randomnumber(min, max) {
        const randnum = Math.round((Math.random() * (max - min) + min) / unitsize) * unitsize;
        return randnum;
    }
    foodx = randomnumber(0, gamewidth - unitsize);
    foody = randomnumber(0, gameheight - unitsize);  

}

function drawfood() {
    ctx.fillStyle = foodcolor;  
    ctx.fillRect(foodx, foody, unitsize, unitsize);

}

function movesnake() {
    const head = {
        x: snake[0].x + xvelocity,
        y: snake[0].y + yvelocity
    };
    snake.unshift(head);

   
    if (snake[0].x == foodx && snake[0].y == foody) {
        score += 1;  
        txtpuntaje.textContent = score;
        createfoood();
    } else {
        snake.pop();
    }
}

function drawsnake() {
    ctx.fillStyle = snakecolor;  
    ctx.strokeStyle = snakeborder;  
    snake.forEach(snakepart => {
        ctx.fillRect(snakepart.x, snakepart.y, unitsize, unitsize);
        ctx.strokeRect(snakepart.x, snakepart.y, unitsize, unitsize);
    });
}

function changeDirection(event) {
    const keypressed = event.keyCode; 
    const left = 37;
    const right = 39;
    const up = 38;
    const down = 40;
    const reseting = 32;

    const goingUp = (yvelocity == -unitsize);
    const goingDown = (yvelocity == unitsize);
    const goingRight = (xvelocity == unitsize);
    const goingLeft = (xvelocity == -unitsize);

    switch (true) {
        case (keypressed == left && !goingRight):
            xvelocity = -unitsize;
            yvelocity = 0;
            break;
        case (keypressed == up && !goingDown):
            xvelocity = 0;
            yvelocity = -unitsize;
            break;
        case (keypressed == right && !goingLeft):
            xvelocity = unitsize;
            yvelocity = 0;
            break;
        case (keypressed == down && !goingUp):
            xvelocity = 0;
            yvelocity = unitsize;  
            break;
        case(keypressed == reseting):
            resetgame();
            break;
    }
}

function checkgameover() {
    switch(true){
        case(snake[0].x < 0):
        running=false;
        break;
        case(snake[0].x >= gamewidth):
        running=false;
        break;
        case(snake[0].y < 0):
        running=false;
        break;
        case(snake[0].y >= gameheight):
        running=false;
        break;
        }
    

    }

function displaygameover() {
    ctx.font="cursive";
    ctx.fillStyle="red";
    ctx.fillText("Paila tilin :( presione espacio" ,gamewidth /2 ,gameheight /2);
    running=false
}

function resetgame() {
    location.reload();
}