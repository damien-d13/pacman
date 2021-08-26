class Pacman {
    positionX;
    positionY;
    direction;
    pacmanImage;
    pacmanGame;

  constructor(pacmanGame) {
 
    this.positionX = 10;
    this.positionY = 0;
    this.direction = 3;
    this.pacmanGame = pacmanGame;
    this.pacmanImage = new Image();
  }

  displayPacman() {
    this.pacmanImage.src = "img/pacman4.gif";
    let nbPosition = (this.positionX + 1) + " / " + (this.positionY + 1);
    
    this.pacmanImage.style.gridArea =  nbPosition;
    
    this.pacmanGame.appendChild(this.pacmanImage);
  }
  movePacman() {
    switch (this.direction) {
      case 1:
        this.positionX++;
        break;
      case 2:
        this.positionX--;
        break;
      case 3:
        this.positionY++;
        break;
      case 4:
        this.positionY--;
        break;

      default:
        break;
    }
  }
  wallCollision(imgArray) {
    if (
      this.positionX >= imgArray.length ||
      this.positionY >= imgArray[this.positionX].length ||
      this.positionX < 0 ||
      this.positionY < 0 ||
      imgArray[this.positionX][this.positionY].className == 0
    ) {
      //On wall
      switch (this.direction) {
        case 1:
          this.positionX--;
          break;
        case 2:
          this.positionX++;
          break;
        case 3:
          this.positionY--;
          break;
        case 4:
          this.positionY++;
          break;

        default:
          break;
      }
    }
  }
}
