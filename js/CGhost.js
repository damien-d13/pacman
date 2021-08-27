class Ghost {
  ghostImage;
  ghostPositionX;
  ghostPositionY;
  ghostDirection;
  pacmanGame;
  arrayGhostImage;

  constructor(pacmanGame) {
    this.ghostImage = new Image();
    this.ghostPositionX = 10;
    this.ghostPositionY = 9;
    this.ghostDirection = 2;
    this.pacmanGame = pacmanGame;
    this.arrayGhostImage = [
      "img/fantome_bleu1.gif",
      "img/fantome_rouge1.gif",
      "img/fantome_vert1.gif",
      "img/fantome_orange1.gif",
    ];
  }

   moveGhost() {
   
      switch (this.ghostDirection) {
        case 1:
          this.ghostPositionX++;
          break;
        case 2:
          this.ghostPositionX--;
          break;
        case 3:
          this.ghostPositionY++;
          break;
        case 4:
          this.ghostPositionY--;
          break;

        default:
          break;
      };
    
  };
   // Ghost wall collision
   ghostWallCollision(imgArray) {
    for (let i = 0; i < 4; i++) {
      if (
        this.ghostPositionX >= imgArray.length ||
        this.ghostPositionY >= imgArray[this.ghostPositionX].length ||
        this.ghostPositionY < 0 ||
        this.ghostPositionY < 0 ||
        imgArray[this.ghostPositionX][this.ghostPositionY].className == 0
      ) {
        //On wall
        switch (this.ghostDirection) {
          case 1:
            this.ghostPositionX--;
            break;
          case 2:
            this.ghostPositionX++;
            break;
          case 3:
            this.ghostPositionY--;
            break;
          case 4:
            this.ghostPositionY++;
            break;

          default:
            break;
        }
        this.ghostDirection = (Math.round(Math.random() * 3) % 4) + 1;
      };
    };
  };

  //Test collision to pacman and ghost
  pacmanEatByGhost(pacmanPositionX, pacmanPositionY) {
    for (let i = 0; i < 4; i++) {
      if (
        this.ghostPositionX == pacmanPositionX &&
        this.ghostPositionY == pacmanPositionY
      ) {
        return true;
        // clearInterval(intervalGame);
        // alert("Vous avez perdu");
      };
    };
  };


  displayGhost(ghostColor) {
    
      this.ghostImage.src = this.arrayGhostImage[ghostColor];
      this.ghostImage.style.gridArea =
      (this.ghostPositionX + 1) + " / " + (this.ghostPositionY + 1);
      this.pacmanGame.appendChild(this.ghostImage);
      
      // console.log("hello");
    
  }
 
}
