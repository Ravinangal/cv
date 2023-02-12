var random1 = Math.random();
var random2 = Math.random();
random1 = random1 * 5;
random1 = Math.floor(random1) + 1;
random2 = random2 * 5;
random2 = Math.floor(random2) + 1;
var image1= document.querySelectorAll("img")[0];
var image2= document.querySelectorAll("img")[1];

if (random1 === 1) {
    image1.setAttribute("src","images/dice1.png");
}
else if (random1 === 2) {
    image1.setAttribute("src","images/dice2.png");
}
else if (random1 === 3) {
    image1.setAttribute("src","images/dice3.png");
}
else if (random1 === 4) {
    image1.setAttribute("src","images/dice4.png");
}
else if (random1 === 5) {
    image1.setAttribute("src","images/dice5.png");
}
else if (random1 === 6) {
    image1.setAttribute("src","images/dice6.png");
}

if (random2 === 1) {
    image2.setAttribute("src","images/dice1.png");
}
else if (random2 === 2) {
    image2.setAttribute("src","images/dice2.png");
}
else if (random2 === 3) {
    image2.setAttribute("src","images/dice3.png");
}
else if (random2 === 4) {
    image2.setAttribute("src","images/dice4.png");
}
else if (random2 === 5) {
    image2.setAttribute("src","images/dice5.png");
}
else if (random2 === 6) {
    image2.setAttribute("src","images/dice6.png");
}

if(random1>random2){
    document.querySelector("h1").innerHTML="🚩 player 1 wins ";
}
else{
    document.querySelector("h1").innerHTML="🚩 player 2 wins ";

}