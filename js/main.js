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

});