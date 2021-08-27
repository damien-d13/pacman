// Execute the code when the page is already load.
window.addEventListener("load", (event) => {
  var gridTiles = new GridTiles(document.getElementById("pacman"));
  var pacman = new Pacman(document.getElementById("pacman"));
  let tabGhost = [];
  tabGhost.push(new Ghost(document.getElementById("pacman")));
  tabGhost.push(new Ghost(document.getElementById("pacman")));
  tabGhost.push(new Ghost(document.getElementById("pacman")));
  tabGhost.push(new Ghost(document.getElementById("pacman")));
  var divScore = document.getElementById("score");
  var pSCore = document.createElement("p");
  var nbCandy;
  var pacmanScore;

  var btnRestart = document.createElement("button");
  btnRestart.innerHTML = "Restart";
  divScore.appendChild(btnRestart);

  /** */

  gridTiles.displayTiles();
  var nbCandy = gridTiles.calculCandy();

  function gameSequence() {
    displayScore();
    pacman.movePacman();

    pacman.wallCollision(gridTiles.imgArray);

    pacman.displayPacman();
    for (let index = 0; index < tabGhost.length; index++) {
      tabGhost[index].moveGhost();
      tabGhost[index].ghostWallCollision(gridTiles.imgArray);
      if (
        tabGhost[index].pacmanEatByGhost(pacman.positionX, pacman.positionY) ==
        true
      ) {
        clearInterval(intervalGame);
        alert("Vous avez perdu");
      }

      tabGhost[index].displayGhost(index % 4);
    }
  }
  var intervalGame = setInterval(gameSequence, 200);

  //add keyboard keys
  function keyPackman(key) {
    // alert(key.code);
    // console.log(pacman.direction);
    switch (key.code) {
      case "ArrowUp":
        pacman.direction = 2;
        pacman.pacmanImage.style.transform = "rotate(270deg)";
        break;
      case "ArrowDown":
        pacman.direction = 1;
        pacman.pacmanImage.style.transform = "rotate(90deg)";
        break;
      case "ArrowLeft":
        pacman.direction = 4;
        pacman.pacmanImage.style.transform = "rotate(180deg)";
        break;
      case "ArrowRight":
        pacman.direction = 3;
        pacman.pacmanImage.style.transform = "rotate(360deg)";
        break;

      default:
        break;
    }
  }

  document.body.addEventListener("keydown", keyPackman);

  function displayScore() {
    pacmanScore = pacman.eatCandy(gridTiles.imgArray);

    pSCore.innerHTML = "Votre score est de : " + pacmanScore;
    divScore.appendChild(pSCore);

    if (pacmanScore == nbCandy) {
      clearInterval(intervalGame);
      alert("Vous avez gagné");
    }
  }
  btnRestart.addEventListener("click", () => {
    gridTiles = new GridTiles(document.getElementById("pacman"));
    pacman = new Pacman(document.getElementById("pacman"));
    tabGhost = new Array();
    tabGhost.push(new Ghost(document.getElementById("pacman")));
    tabGhost.push(new Ghost(document.getElementById("pacman")));
    tabGhost.push(new Ghost(document.getElementById("pacman")));
    tabGhost.push(new Ghost(document.getElementById("pacman")));
    pacmanScore;
    gridTiles.displayTiles();
    nbCandy = gridTiles.calculCandy();

    gameSequence();
    intervalGame = setInterval(gameSequence, 200);

  });
});
