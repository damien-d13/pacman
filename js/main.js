// Execute the code when the page is already load.
window.addEventListener("load", (event) => {
  var gridTiles = new GridTiles(document.getElementById("pacman"));
  var pacman = new Pacman(document.getElementById("pacman"));
  var divScore = document.getElementById("score");
  var pSCore = document.createElement("p");
  var nbCandy = 0;
  var pacmanScore = 0;
  gridTiles.displayTiles();

  calculCandy();

  function gameSequence() {
    pacman.displayPacman();

    pacman.movePacman();

    pacman.wallCollision(gridTiles.imgArray);

    displayScore();

  }
  var intervalGame = setInterval(gameSequence, 200);

  //add keyboard keys
  function keyPackman(key) {
    // alert(key.code);
    // console.log(pacman.direction);
    switch (key.code) {
      case "ArrowUp":
        pacman.direction = 2;
        break;
      case "ArrowDown":
        pacman.direction = 1;
        break;
      case "ArrowLeft":
        pacman.direction = 4;
        break;
      case "ArrowRight":
        pacman.direction = 3;
        break;

      default:
        break;
    }
  }

  document.body.addEventListener("keydown", keyPackman);

  function calculCandy() {
    for (let i = 0; i < gridTiles.imgArray.length; i++) {
      for (let j = 0; j < gridTiles.imgArray[i].length; j++) {
        if (gridTiles.imgArray[i][j].className == 2) {
          nbCandy++;
          
        }
      }
    }
  }
  function displayScore() {
    pacmanScore = pacman.eatCandy(gridTiles.imgArray);
console.log(nbCandy);
    pSCore.innerHTML = "Votre score est de : " + pacmanScore;
    divScore.appendChild(pSCore);
    if (pacmanScore == nbCandy) {
      clearInterval(intervalGame);
      alert("Vous avez gagné");
    }
  }
});
