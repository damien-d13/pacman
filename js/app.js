/** Pacman game full javascript with the use of gridArea
 * Author : Damien Devoti
 */
/** Element HTML */
var pacmanGame = document.getElementById("pacman");
var divScore = document.getElementById("score");
//Create element paragraphe for display the score
var pSCore = document.createElement("p");
//Create element button for restart the game
var btnRestart = document.createElement("button");
btnRestart.innerHTML = "Restart";
divScore.appendChild(btnRestart);
/** Add variable image */
//Add variable image Pacman
var pacmanImage = new Image();
pacmanImage.src = "img/pacman4.gif";
//Add variable image Ghost
var ghostImage1 = new Image();
ghostImage1.src = "img/fantome_bleu1.gif";
var ghostImage2 = new Image();
ghostImage2.src = "img/fantome_rouge1.gif";
var ghostImage3 = new Image();
ghostImage3.src = "img/fantome_vert1.gif";
var ghostImage4 = new Image();
ghostImage4.src = "img/fantome_orange1.gif";
//Add ghost image in array
var ghostArray = new Array();
ghostArray = [ghostImage1, ghostImage2, ghostImage3, ghostImage4];

/**  Create table tiles map (size : 19/22) */
var originalArray = new Array();
//Duplicate the table for not erase the original value
var imgArray = new Array();

originalArray = [
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
  [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2] /* milieu */,
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
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
// Initialise information of pacman
let originalPacmanPosition = new Array();
originalPacmanPosition = {
  x: 10,
  y: -1,
  direction: 3,
};
//initialise information of ghost
let originalGhostPosition = new Array();
originalGhostPosition = [
  {
    x: 10,
    y: 9,
    direction: 1,
  },
  {
    x: 10,
    y: 9,
    direction: 2,
  },
  {
    x: 10,
    y: 9,
    direction: 1,
  },
  {
    x: 10,
    y: 9,
    direction: 2,
  },
];
//Initialise score information
var score = 0;
var candyScore = 0;
var nbCandy = 0;
//initialisation of map tiles, pacman and ghost Clone array
function initialisation() {
  imgArray = new Array();
  pacmanPosition = new Array();
  ghostPosition = [];
  for (let i in originalArray) {
    imgArray.push([...originalArray[i]]);
  }

  pacmanPosition = { ...originalPacmanPosition };

  for (let j in originalGhostPosition) {
    ghostPosition.push({ ...originalGhostPosition[j] });
  }
}
/** Start initilisation */
initialisation();

// Execute the code when the page is already load.
window.addEventListener("load", (event) => {
  //Display the tiles maps in the html document
  function displayTray() {
    // Add image to Array cell
    for (let i = 0; i < imgArray.length; i++) {
      for (let j = 0; j < imgArray[i].length; j++) {
        if (originalArray[i][j] === 0) {
          imgArray[i][j] = new Image();
          imgArray[i][j].style.gridArea = i + 1 + " / " + (j + 1);
          imgArray[i][j].src = "img/mur.gif";
          imgArray[i][j].classList.add("0");
          pacmanGame.appendChild(imgArray[i][j]);
        } else if (originalArray[i][j] === 1) {
          imgArray[i][j] = new Image();
          imgArray[i][j].style.gridArea = i + 1 + " / " + (j + 1);
          imgArray[i][j].src = "img/sol.gif";
          imgArray[i][j].classList.add("1");
          pacmanGame.appendChild(imgArray[i][j]);
        } else if (originalArray[i][j] === 2) {
          imgArray[i][j] = new Image();
          imgArray[i][j].style.gridArea = i + 1 + " / " + (j + 1);
          imgArray[i][j].src = "img/bonbon.gif";
          imgArray[i][j].classList.add("2");
          pacmanGame.appendChild(imgArray[i][j]);
        }
      }
    }
  }

  displayTray();
  calculCandy();

  //Button restart game
  btnRestart.addEventListener("click", () => {
    //Initialise score information
    score = 0;
    candyScore = 0;
    initialisation();
    displayTray();
    gameSequence();
    intervalGame = setInterval(gameSequence, 200);
  });
  //Event Keyboard
  document.body.addEventListener("keydown", keyPackman);
  //Call function in sequence
  function gameSequence() {
    movePacman();
    wallCollision();
    pacmanEatByGhost();
    moveGhost();
    pacmanEatByGhost();
    ghostWallCollision();
    eatCandy();
    displayScore();
    displayPacman();
    displayGhost();
  }
  //Add the interval for initiate the pacman postion and changing element
  var intervalGame = setInterval(gameSequence, 200);

  //Function for add pacman on the tray
  function displayPacman() {
    pacmanImage.style.gridArea =
      pacmanPosition.x + 1 + " / " + (pacmanPosition.y + 1);
    pacmanGame.appendChild(pacmanImage);
  }
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
    }
  }
  //add keyboard keys
  function keyPackman(key) {
    switch (key.code) {
      case "ArrowUp":
        pacmanPosition.direction = 2;
        pacmanImage.style.transform = "rotate(270deg)";
        break;
      case "ArrowDown":
        pacmanPosition.direction = 1;
        pacmanImage.style.transform = "rotate(90deg)";
        break;
      case "ArrowLeft":
        pacmanPosition.direction = 4;
        pacmanImage.style.transform = "rotate(180deg)";
        break;
      case "ArrowRight":
        pacmanPosition.direction = 3;
        pacmanImage.style.transform = "rotate(360deg)";
        break;

      default:
        break;
    }
  }
  //Test the next tiles for move
  function wallCollision() {
    if (
      pacmanPosition.x >= imgArray.length ||
      pacmanPosition.y >= imgArray[pacmanPosition.x].length ||
      pacmanPosition.x < 0 ||
      pacmanPosition.y < 0 ||
      imgArray[pacmanPosition.x][pacmanPosition.y].className == 0
    ) {
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
      }
    }
  }
  //Delete candy when pacman is on it
  function eatCandy() {
    if (imgArray[pacmanPosition.x][pacmanPosition.y].className == 2) {
      imgArray[pacmanPosition.x][pacmanPosition.y].src = "img/sol.gif";
      imgArray[pacmanPosition.x][pacmanPosition.y].classList.add("1");
      candyScore++;
    }
  }
  //Display the score on the html document
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
        }
      }
    }
  }
  //Display ghost on the HTML document
  function displayGhost() {
    for (let i = 0; i < 4; i++) {
      ghostArray[i].style.gridArea =
        ghostPosition[i].x + 1 + " / " + (ghostPosition[i].y + 1);
      pacmanGame.appendChild(ghostArray[i]);
    }
  }
  //Make ghost move alone
  function moveGhost() {
    for (let i = 0; i < ghostPosition.length; i++) {
      switch (ghostPosition[i].direction) {
        case 1:
          ghostPosition[i].x++;
          break;
        case 2:
          ghostPosition[i].x--;
          break;
        case 3:
          ghostPosition[i].y++;
          break;
        case 4:
          ghostPosition[i].y--;
          break;

        default:
          break;
      }
    }
  }
  //Ghost wall collision
  function ghostWallCollision() {
    for (let i = 0; i < 4; i++) {
      if (
        ghostPosition[i].x >= imgArray.length ||
        ghostPosition[i].y >= imgArray[ghostPosition[i].x].length ||
        ghostPosition[i].x < 0 ||
        ghostPosition[i].y < 0 ||
        imgArray[ghostPosition[i].x][ghostPosition[i].y].className == 0
      ) {
        switch (ghostPosition[i].direction) {
          case 1:
            ghostPosition[i].x--;
            break;
          case 2:
            ghostPosition[i].x++;
            break;
          case 3:
            ghostPosition[i].y--;
            break;
          case 4:
            ghostPosition[i].y++;
            break;

          default:
            break;
        }
        //Make Ghost change direct when meet wall
        ghostPosition[i].direction = (Math.round(Math.random() * 3) % 4) + 1;
      }
    }
  }
  //Test collision to pacman and ghost
  function pacmanEatByGhost() {
    for (let i = 0; i < 4; i++) {
      if (
        ghostPosition[i].x == pacmanPosition.x &&
        ghostPosition[i].y == pacmanPosition.y
      ) {
        clearInterval(intervalGame);
        alert("Vous avez perdu");
      }
    }
  }
});
