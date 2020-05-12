const gameDiv = document.querySelector("[wm-flappy]");
const bird = document.getElementById("bird");

const moving = setInterval(move, 70);

let birdY = 300;

function move() {
  const gameDivXY = gameDiv.getBoundingClientRect();
  const birdXY = bird.getBoundingClientRect();

  //Cano Moving
  canoMove(gameDivXY, birdXY);

  //Bird moving
  bird.style.top = `${birdY}px`; //setting the bird to fall down
  if (birdXY.top > gameDivXY.height || birdXY.top < gameDivXY.top) {
    clearInterval(moving);
    document.getElementById('losing').style.display = 'block'
  } else {
    birdY += 10;
  }
}

window.onkeypress = function (event) {
  const gameDivXY = gameDiv.getBoundingClientRect();
  const birdXY = bird.getBoundingClientRect();

  if (event.keyCode == 32) {
    if (birdY <= 0 || birdXY.top > gameDivXY.height) {
      document.getElementById('losing').style.display = 'block'
      return false;
    } else {
      birdY -= 50;
      console.log("space presse", birdY);
    }

    bird.style.top = `${birdY}px`;
  }
};

// Movimentação dos canos

function canoMove(gameDivXY, birdXY) {
  
  const canos = document.querySelectorAll(".canos");
    
  canos.forEach(cano => {
    const canoXY = cano.getBoundingClientRect();
    
    if (canoXY.left <= gameDivXY.left) {
      
      resetCano(cano, cano.children[0], cano.children[1])
      
      let scoreSoFar = document.getElementById('score').innerText
      document.getElementById('score').innerText = `${++scoreSoFar}`
      
      console.log("cano chegou no final");
    
    } else {

    if (
      birdY <= cano.children[0].clientHeight &&
      birdXY.left >= cano.offsetLeft && birdXY.left <= cano.offsetLeft + cano.clientWidth /*&& birdXY.left <= (cano.offsetLeft + cano.clientWidth)*/
    ) {
      clearInterval(moving);
      document.getElementById('losing').style.display = 'block'
      console.log("you hit the cano :/ 1");
    } else if (
      birdY - (cano.clientHeight - cano.children[1].clientHeight) >= 0 &&
      birdXY.left >= cano.offsetLeft && birdXY.left <= cano.offsetLeft + cano.clientWidth
    ) {
      clearInterval(moving);
      document.getElementById('losing').style.display = 'block'
      console.log("you hit the cano :/ 2");
      console.log(birdXY.left, cano.offsetLeft);
      
      console.log(cano.clientHeight, cano.children[1].clientHeight, birdY, cano);
      
    } else {
      cano.style.left = `${(cano.offsetLeft -= 10)}px`;
    }
    }

    // console.log(`Cano ${index + 1}`, cano.children);
    // console.log(birdXY);
  });
}

function resetCano(cano, canofilho1, canofilho2) {

  const cano1Height = Math.floor(Math.random() * (450 - 300) + 300)
  canofilho1.style.height = `${cano1Height}px`

  const cano2Height = 800 - cano1Height - 160
  canofilho2.style.height = `${cano2Height}px`
  cano.style.left = `${1200}px`

  // return newCano;
}
