// Execute the code when the page is already load.
window.addEventListener("load", (event) => {
    
    var gridTiles = new GridTiles(document.getElementById("pacman"));
    var pacman = new Pacman(document.getElementById("pacman")); 
    gridTiles.displayTiles();

    function gameSequence(){
        
        pacman.displayPacman();

        pacman.movePacman();

        pacman.wallCollision(gridTiles.imgArray);
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
    };
  };

document.body.addEventListener("keydown", keyPackman);
});