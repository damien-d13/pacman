class GridTiles {
  originalArray;
  imgArray;
  pacmanGame;

  constructor(pacmanGame) {
    this.originalArray = [
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
    this.imgArray = [];
    this.pacmanGame = pacmanGame;
  }

  //initialisation of map tiles, pacman and ghost Clone array
  tilesInitialisation() {
    this.imgArray = new Array();

    for (let i in this.originalArray) {
      this.imgArray.push([...this.originalArray[i]]);
    }
    // console.log(this.imgArray);
  }

  displayTiles() {
    // this.pacmanGame = document.getElementById("pacman");
    this.tilesInitialisation();
    // console.log(this.imgArray);
    // Add image to Array cell
    for (let i = 0; i < this.imgArray.length; i++) {
      for (let j = 0; j < this.imgArray[i].length; j++) {
        if (this.originalArray[i][j] === 0) {
          this.imgArray[i][j] = new Image();
          this.imgArray[i][j].style.gridArea = i + 1 + " / " + (j + 1);
          this.imgArray[i][j].src = "img/mur.gif";
          this.imgArray[i][j].classList.add("0");
          this.pacmanGame.appendChild(this.imgArray[i][j]);
        } else if (this.originalArray[i][j] === 1) {
          this.imgArray[i][j] = new Image();
          this.imgArray[i][j].style.gridArea = i + 1 + " / " + (j + 1);
          this.imgArray[i][j].src = "img/sol.gif";
          this.imgArray[i][j].classList.add("1");
          this.pacmanGame.appendChild(this.imgArray[i][j]);
        } else if (this.originalArray[i][j] === 2) {
          this.imgArray[i][j] = new Image();
          this.imgArray[i][j].style.gridArea = i + 1 + " / " + (j + 1);
          this.imgArray[i][j].src = "img/bonbon.gif";
          this.imgArray[i][j].classList.add("2");
          this.pacmanGame.appendChild(this.imgArray[i][j]);
        }
      }
    }
  }
}
