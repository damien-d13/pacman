console.log("This is PACMAN");
var pacmanGame = document.getElementById("pacman");

var pacmanImage = new Image();
pacmanImage.src = "img/pacman4.gif"

var divScore = document.getElementById("score");
var pSCore = document.createElement("p");

// Table tiles map size 19/22
var imgArray = new Array();

imgArray = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2], /* milieu */
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
// Initialise information of pacman
let pacmanPosition = {
    x: 10,
    y: -1,
    direction: 3
};
var score = 0;
var candyScore = 0;
var nbCandy = 0;

console.log(imgArray);

// Execute the code when the page is already load.
window.addEventListener("load", (event) => {
    function displayTray() {
        // Add image to Array cell    
        for (let i = 0; i < imgArray.length; i++) {
            for (let j = 0; j < imgArray[i].length; j++) {
                if (imgArray[i][j] === 0) {
                    imgArray[i][j] = new Image();
                    imgArray[i][j].style.gridArea = (i + 1) + " / " + (j + 1);
                    imgArray[i][j].src = "img/mur.gif";
                    imgArray[i][j].classList.add("0");
                    pacmanGame.appendChild(imgArray[i][j]);
                } else if (imgArray[i][j] === 1) {
                    imgArray[i][j] = new Image();
                    imgArray[i][j].style.gridArea = (i + 1) + " / " + (j + 1);
                    imgArray[i][j].src = "img/sol.gif";
                    imgArray[i][j].classList.add("1");
                    pacmanGame.appendChild(imgArray[i][j]);
                } else if (imgArray[i][j] === 2) {
                    imgArray[i][j] = new Image();
                    imgArray[i][j].style.gridArea = (i + 1) + " / " + (j + 1);
                    imgArray[i][j].src = "img/bonbon.gif";
                    imgArray[i][j].classList.add("2");
                    pacmanGame.appendChild(imgArray[i][j]);
                }


            }

        }
    };
    displayTray();
    calculCandy();
    //Event Keyboard
    document.body.addEventListener("keydown", keyPackman);
    //Call function  
    function gameSequence() {

        movePacman();
        wallCollision();
        eatCandy();
        displayScore();
        displayPacman();

    };
    //Add the interval for initiate the pacman postion and changing element
    var intervalGame = setInterval(gameSequence, 500);

    //Function for add pacman on the tray
    function displayPacman() {
        pacmanImage.style.gridArea = (pacmanPosition.x + 1) + " / " + (pacmanPosition.y + 1);
        pacmanGame.appendChild(pacmanImage);

    };
    //make pacman move automaticly to the direction
    function movePacman() {
        switch (pacmanPosition.direction) {
            case 1:
                pacmanPosition.x++;
                break;
            case 2:
                pacmanPosition.x--;
                break;
            case 3:
                pacmanPosition.y++;
                break;
            case 4:
                pacmanPosition.y--;
                break;

            default:
                break;
        };
    };
    //add keyboard keys 
    function keyPackman(key) {
        // alert(key.code);
        switch (key.code) {
            case "ArrowUp":
                pacmanPosition.direction = 2;
                break;
            case "ArrowDown":
                pacmanPosition.direction = 1;
                break;
            case "ArrowLeft":
                pacmanPosition.direction = 4;
                break;
            case "ArrowRight":
                pacmanPosition.direction = 3;
                break;

            default:
                break;
        }
    }
    //Test the next tiles for move 
    function wallCollision() {

        if (pacmanPosition.x >= imgArray.length ||
            pacmanPosition.y >= imgArray[pacmanPosition.x].length ||
            pacmanPosition.x < 0 || pacmanPosition.y < 0 || imgArray[pacmanPosition.x][pacmanPosition.y].className == 0) {
            //On wall
            switch (pacmanPosition.direction) {
                case 1:
                    pacmanPosition.x--;
                    break;
                case 2:
                    pacmanPosition.x++;
                    break;
                case 3:
                    pacmanPosition.y--;
                    break;
                case 4:
                    pacmanPosition.y++;
                    break;

                default:
                    break;
            };

        } else {/**console.log(imgArray[pacmanPosition.x][pacmanPosition.y]);*/ };

    };
    //Delete candy when pacman is on it
    function eatCandy() {
        if (imgArray[pacmanPosition.x][pacmanPosition.y].className == 2) {
            imgArray[pacmanPosition.x][pacmanPosition.y].src = "img/sol.gif";
            imgArray[pacmanPosition.x][pacmanPosition.y].classList.add("1");
            candyScore++;
        }
    };
    // display the score on the html document
    function displayScore() {
        pSCore.innerHTML = "Votre score est de : " + candyScore;
        divScore.appendChild(pSCore);
        if (candyScore == nbCandy) {
            clearInterval(intervalGame);
            alert("Vous avez gagné");
        }
    }
    //Calcul number of candy at the start 
    function calculCandy() {
        for (let i = 0; i < imgArray.length; i++) {
            for (let j = 0; j < imgArray[i].length; j++) {
                if (imgArray[i][j].className == 2) {
                    nbCandy++;
                    console.log(nbCandy);
                }
            }
        }
    }
});