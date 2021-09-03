/** Pacman game full javascript with the use of gridArea and SVG image
 * Author : Damien Devoti
 */
/** Element HTML */
var pacmanGame = document.getElementById("pacman");
pacmanGame.style.display = "grid";
pacmanGame.style.gridTemplateColumns = "repeat(19, 40px)";
var divScore = document.getElementById("score");
//Create element paragraphe for display the score
var pSCore = document.createElement("p");
//Create element button for restart the game
var btnRestart = document.createElement("button");
btnRestart.innerHTML = "Restart";
divScore.appendChild(btnRestart);

//Pacman SVG
var imgPacman = document.getElementById("img-pacman");

var pacmanImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var groupeSvg = document.createElementNS("http://www.w3.org/2000/svg", "g");
let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
var animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");

pacmanImage.setAttribute("width", "40");
pacmanImage.setAttribute("height", "40");
pacmanImage.setAttribute("version", "1.1");
pacmanImage.setAttribute("viewBox", "0 0 101.6 101.6");

groupeSvg.setAttributeNS(null, "transform", "translate(-66.716 -94.378)");

path.setAttribute("fill", "yellow");
path.setAttribute("stroke", "#000");
path.setAttribute("stroke-width", ".697");
path.setAttribute(
  "d",
  "m167.38 145.18c0.26499-1e-3 -2e-3 0.5295-6e-3 0.79352-0.42395 27.248-22.645 49.206-49.994 49.206-27.614 0-50-22.386-50-50-2e-6 -27.614 22.386-50 50-50 27.43 0 49.701 21.934 49.997 49.294 2e-3 0.18402-49.527 0.89533-49.343 0.89462z"
);

animate.setAttribute("attributeName", "d");
animate.setAttribute("attributeType", "XML");
animate.setAttribute(
  "values",
  "m167.38 145.18c0.26499-1e-3 -2e-3 0.5295-6e-3 0.79352-0.42395 27.248-22.645 49.206-49.994 49.206-27.614 0-50-22.386-50-50-2e-6 -27.614 22.386-50 50-50 27.43 0 49.701 21.934 49.997 49.294 2e-3 0.18402-49.527 0.89533-49.343 0.89462z;m163.81 164.57c0.24437 0.10251 0.0584 0.53743-6e-3 0.79352-3.9291 15.632-19.073 29.816-46.422 29.816-27.614 0-50-22.386-50-50-2e-6 -27.614 22.386-50 50-50 27.43 0 37.837 15.764 46.312 29.733 0.0955 0.15734-45.827 20.384-45.657 20.455z;m167.38 145.18c0.26499-1e-3 -2e-3 0.5295-6e-3 0.79352-0.42395 27.248-22.645 49.206-49.994 49.206-27.614 0-50-22.386-50-50-2e-6 -27.614 22.386-50 50-50 27.43 0 49.701 21.934 49.997 49.294 2e-3 0.18402-49.527 0.89533-49.343 0.89462z"
);
animate.setAttribute("dur", "0.5s");
animate.setAttribute("repeatCount", "indefinite");
animate.setAttribute("fill", "freeze");

pacmanImage.appendChild(groupeSvg);
groupeSvg.appendChild(path);
path.appendChild(animate);


/**  Ghost SVG    */
// Create array 
var ghostArray = new Array(4);
//Add SVG to array
for (let i = 0; i < ghostArray.length; i++){
  
//Create SVG element
  var svgGohst = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var groupeSvgGhost = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  let pathGost = document.createElementNS("http://www.w3.org/2000/svg", "path");
  var eyeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var eyeLeft = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  var eyeRight = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  var irisLeft = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  var irisRight = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );

  var animate = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  var animateIrisLeft = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  var animateIrisRight = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );

  svgGohst.setAttribute("width", "40");
  svgGohst.setAttribute("height", "40");
  svgGohst.setAttribute("version", "1.1");
  svgGohst.setAttribute("viewBox", "0 0 10.583333 10.583334");

  groupeSvgGhost.setAttributeNS(
    null,
    "transform",
    "scale(0.8) translate(0.5  0.25)"
  );
//Change Color For ghost
  switch (i) {
    case 0:
      pathGost.setAttribute("fill", "#ffd500");
      break;
    case 1:
      pathGost.setAttribute("fill", "#ff0000");
      break;
    case 2:
      pathGost.setAttribute("fill", "#00ff26");
      break;
    case 3:
      pathGost.setAttribute("fill", "#004cff");
      break;
    default:
      break;
  }

  
  pathGost.setAttribute("stroke", "#000");
  pathGost.setAttribute("stroke-width", ".100");
  pathGost.setAttribute(
    "d",
    "m 10.50757,5.959322 c 0,0.9398322 -0.0032,1.5281656 -7.69e-4,2.1629152 7.52e-4,0.1930257 0.08244,2.3520948 -0.08393,2.3844118 C 9.8174204,10.62425 9.4514378,9.1793382 9.3220055,9.2795999 9.0025944,9.5270244 8.6459352,9.6071143 8.096947,9.6205131 7.8694557,9.6260654 8.5539082,10.557459 8.1155332,10.549397 7.5783935,10.539519 6.7709804,9.5902085 6.4529483,9.5799707 6.1074968,9.5688501 5.7192137,9.5590396 5.2801222,9.5557157 4.9732982,9.5533931 4.6938084,9.5541004 4.4382813,9.5562291 4.1742467,9.5584287 3.1858095,10.543077 2.782891,10.556619 2.3009498,10.572818 3.0805782,9.5760456 2.8303133,9.5729457 2.1700889,9.564768 1.7946236,9.5009914 1.4219694,9.2470892 1.3134966,9.1731829 0.51232109,10.890656 0.08485557,10.464147 c 0,0 -0.0042301,-1.9132473 -0.01632496,-2.04221 C 0.01484765,7.8495378 0.05344729,7.1056583 0.05344725,5.959322 0.05344715,2.7058572 2.3936823,0.0684028 5.2805085,0.06840277 8.1673348,0.06840265 10.50757,2.7058571 10.50757,5.959322 Z"
  );

  eyeLeft.setAttribute("cx", "3.2776");
  eyeLeft.setAttribute("cy", "3.7194");
  eyeLeft.setAttribute("rx", "1.5129");
  eyeLeft.setAttribute("ry", "1.4396");
  eyeLeft.setAttribute("fill", "#fff");

  eyeRight.setAttribute("cx", "7.4552");
  eyeRight.setAttribute("cy", "3.7628");
  eyeRight.setAttribute("rx", "1.5129");
  eyeRight.setAttribute("ry", "1.4396");
  eyeRight.setAttribute("fill", "#fff");

  irisLeft.setAttribute("id", "irisleft");
  irisLeft.setAttribute("cx", "3.8844");
  irisLeft.setAttribute("cy", "3.7798");
  irisLeft.setAttribute("rx", ".5558");
  irisLeft.setAttribute("ry", ".56096");

  irisRight.setAttribute("id", "irisright");
  irisRight.setAttribute("cx", "8.085");
  irisRight.setAttribute("cy", "3.9008");
  irisRight.setAttribute("rx", ".5558");
  irisRight.setAttribute("ry", ".56096");

  animate.setAttribute("attributeName", "d");
  animate.setAttribute("attributeType", "XML");
  animate.setAttribute(
    "values",
    "m 10.50757,5.959322 c 0,0.9398322 -0.0032,1.5281656 -7.69e-4,2.1629152 7.52e-4,0.1930257 0.08244,2.3520948 -0.08393,2.3844118 C 9.8174204,10.62425 9.4514378,9.1793382 9.3220055,9.2795999 9.0025944,9.5270244 8.6459352,9.6071143 8.096947,9.6205131 7.8694557,9.6260654 8.5539082,10.557459 8.1155332,10.549397 7.5783935,10.539519 6.7709804,9.5902085 6.4529483,9.5799707 6.1074968,9.5688501 5.7192137,9.5590396 5.2801222,9.5557157 4.9732982,9.5533931 4.6938084,9.5541004 4.4382813,9.5562291 4.1742467,9.5584287 3.1858095,10.543077 2.782891,10.556619 2.3009498,10.572818 3.0805782,9.5760456 2.8303133,9.5729457 2.1700889,9.564768 1.7946236,9.5009914 1.4219694,9.2470892 1.3134966,9.1731829 0.51232109,10.890656 0.08485557,10.464147 c 0,0 -0.0042301,-1.9132473 -0.01632496,-2.04221 C 0.01484765,7.8495378 0.05344729,7.1056583 0.05344725,5.959322 0.05344715,2.7058572 2.3936823,0.0684028 5.2805085,0.06840277 8.1673348,0.06840265 10.50757,2.7058571 10.50757,5.959322 Z;m10.508 5.9593c0 0.93983-0.0032 1.5282-7.69e-4 2.1629 7.52e-4 0.19303 0.08244 2.3521-0.08393 2.3844-0.60545 0.1176-0.97143-1.3273-1.1009-1.227-0.31941 0.24742-0.67607 0.32751-1.2251 0.34091-0.22749 0.0055523-1.0937 0.90111-1.5321 0.89305-0.53714-0.009878 0.2061-0.92335-0.11193-0.93359-0.34545-0.011121-0.73373-0.020931-1.1728-0.024255-0.30682-0.0023226-0.58631-0.0016153-0.84184 5.134e-4 -0.26403 0.0021996 0.30725 0.90613-0.09567 0.91967-0.48194 0.016199-1.262-0.89985-1.5123-0.90295-0.66022-0.0081777-1.0357-0.071954-1.4083-0.32586-0.10847-0.073906-0.90965 1.6436-1.3371 1.2171 0 0-0.0042301-1.9132-0.016325-2.0422-0.053683-0.5724-0.015083-1.3163-0.015083-2.4626-1e-7 -3.2535 2.3402-5.8909 5.2271-5.8909 2.8868-1.2e-7 5.2271 2.6375 5.2271 5.8909z;m 10.50757,5.959322 c 0,0.9398322 -0.0032,1.5281656 -7.69e-4,2.1629152 7.52e-4,0.1930257 0.08244,2.3520948 -0.08393,2.3844118 C 9.8174204,10.62425 9.4514378,9.1793382 9.3220055,9.2795999 9.0025944,9.5270244 8.6459352,9.6071143 8.096947,9.6205131 7.8694557,9.6260654 8.5539082,10.557459 8.1155332,10.549397 7.5783935,10.539519 6.7709804,9.5902085 6.4529483,9.5799707 6.1074968,9.5688501 5.7192137,9.5590396 5.2801222,9.5557157 4.9732982,9.5533931 4.6938084,9.5541004 4.4382813,9.5562291 4.1742467,9.5584287 3.1858095,10.543077 2.782891,10.556619 2.3009498,10.572818 3.0805782,9.5760456 2.8303133,9.5729457 2.1700889,9.564768 1.7946236,9.5009914 1.4219694,9.2470892 1.3134966,9.1731829 0.51232109,10.890656 0.08485557,10.464147 c 0,0 -0.0042301,-1.9132473 -0.01632496,-2.04221 C 0.01484765,7.8495378 0.05344729,7.1056583 0.05344725,5.959322 0.05344715,2.7058572 2.3936823,0.0684028 5.2805085,0.06840277 8.1673348,0.06840265 10.50757,2.7058571 10.50757,5.959322 Z"
  );
  animate.setAttribute("dur", "1s");
  animate.setAttribute("repeatCount", "indefinite");
  animate.setAttribute("fill", "freeze");

  animateIrisLeft.setAttribute("xlink:href", "#irisleft");
  animateIrisLeft.setAttribute("attributeName", "cx");
  animateIrisLeft.setAttribute("from", "3.8844");
  animateIrisLeft.setAttribute("to", "3.2776");
  animateIrisLeft.setAttribute("dur", "1s");
  animateIrisLeft.setAttribute("repeatCount", "indefinite");
  animateIrisLeft.setAttribute("fill", "freeze");

  animateIrisRight.setAttribute("xlink:href", "#irisright");
  animateIrisRight.setAttribute("attributeName", "cx");
  animateIrisRight.setAttribute("from", "8.085");
  animateIrisRight.setAttribute("to", "7.4552");
  animateIrisRight.setAttribute("dur", "1s");
  animateIrisRight.setAttribute("repeatCount", "indefinite");
  animateIrisRight.setAttribute("fill", "freeze");

  svgGohst.appendChild(groupeSvgGhost);
  groupeSvgGhost.appendChild(pathGost);
  groupeSvgGhost.appendChild(eyeGroup);
  eyeGroup.appendChild(eyeLeft);
  eyeGroup.appendChild(eyeRight);
  eyeGroup.appendChild(irisLeft);
  eyeGroup.appendChild(irisRight);

  irisLeft.appendChild(animateIrisLeft);
  irisRight.appendChild(animateIrisRight);

  pathGost.appendChild(animate);
//Add SVG to array
  ghostArray[i] = svgGohst;
}


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
