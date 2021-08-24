console.log("This is PACMAN");
var pacmanGame = document.getElementById("pacman");

var pacmanImage = new Image();
pacmanImage.src = "img/pacman4.gif"


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
    x : 11,
    y : 1,
    direction : 2.0
};
        
        console.log(imgArray);

// Execute the code when the page is already load.
window.addEventListener("load", (event) => {
function DisplayTray(){
    // Add image to Array cell    
    for (let i = 0; i < imgArray.length; i++) {
        for (let j = 0; j < imgArray[i].length; j++) {
            if (imgArray[i][j] === 0) {
                imgArray[i][j] = new Image();
                imgArray[i][j].style.gridArea = (i + 1) + " / " + (j + 1);
                imgArray[i][j].src = "img/mur.gif";
                pacmanGame.appendChild(imgArray[i][j]);
            }else if (imgArray[i][j] === 1){
                imgArray[i][j] = new Image();
                imgArray[i][j].style.gridArea = (i + 1) + " / " + (j + 1);
                imgArray[i][j].src = "img/sol.gif";
                pacmanGame.appendChild(imgArray[i][j]);
            } else if (imgArray[i][j] === 2) {
                imgArray[i][j] = new Image();
                imgArray[i][j].style.gridArea = (i + 1) + " / " + (j + 1);
                imgArray[i][j].src = "img/bonbon.gif";
                pacmanGame.appendChild(imgArray[i][j]);
            }
            
            
        }
        
    }
};
DisplayTray();
console.log(imgArray);
   function GameSequence(){
        
   };

   function displayPacman(){
        pacmanImage.style.gridArea = pacmanPosition.x + " / " + pacmanPosition.y;
        pacmanGame.appendChild(pacmanImage);
    };
    displayPacman();
});