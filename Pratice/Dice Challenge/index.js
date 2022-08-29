let randomNumber1 = parseInt(Math.random() * 6 + 1);
// console.log(randomNumber1);
let randomNumber2 = parseInt(Math.random() * 6 + 1);
// console.log(randomNumber3);


switch (randomNumber1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;

  case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;

  case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;

  case 6:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;
}

switch (randomNumber2) {
    case 1:
      document.querySelector(".img2").setAttribute("src", "images/dice1.png");
      break;
  
    case 2:
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
      break;
    case 3:
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
      break;
  
    case 4:
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
      break;
    case 5:
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
      break;
  
    case 6:
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      break;
  }
  
  if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerText = "Prayer 1 Win";
  } else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerText = "Prayer 2 Win";
  }
  else{
    document.querySelector("h1").innerText = "Draw";
  }
  
  document.querySelector("button").addEventListener("click", function(){
    location.reload();
  })