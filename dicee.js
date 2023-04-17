var randomNumber1 = Math.random();
randomNumber1*=6;
randomNumber1+=1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2*=6;
randomNumber2+=1;
randomNumber2 = Math.floor(randomNumber2);


// dice 1
if(randomNumber1 === 1){
    document.querySelector(".dice .img1").setAttribute("src" , "dice1.png");
 }
 else if(randomNumber1 === 2){
    document.querySelector(".dice .img1").setAttribute("src" , "dice2.png");
 }
 else if(randomNumber1 === 3){
    document.querySelector(".dice .img1").setAttribute("src" , "dice3.png");
 }
 else if(randomNumber1 === 4){
    document.querySelector(".dice .img1").setAttribute("src" , "dice4.png");
 }
 else if(randomNumber1 === 5){
    document.querySelector(".dice .img1").setAttribute("src" , "dice5.png");
 }
 else{
    document.querySelector(".dice .img1").setAttribute("src" , "dice6.png");
 }
//  dice 2
 if(randomNumber2 === 1){
    document.querySelector(".dice .img2").setAttribute("src" , "dice1.png");
 }
 else if(randomNumber2 === 2){
    document.querySelector(".dice .img2").setAttribute("src" , "dice2.png");
 }
 else if(randomNumber2 === 3){
    document.querySelector(".dice .img2").setAttribute("src" , "dice3.png");
 }
 else if(randomNumber2 === 4){
    document.querySelector(".dice .img2").setAttribute("src" , "dice4.png");
 }
 else if(randomNumber2 === 5){
    document.querySelector(".dice .img2").setAttribute("src" , "dice5.png");
 }
 else{
    document.querySelector(".dice .img2").setAttribute("src" , "dice6.png");
 }
 // changing text
 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins!";
 }
 else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
 }
 else{
    document.querySelector("h1").innerHTML = "draw!";
 }
 
 