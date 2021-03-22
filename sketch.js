var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var fruit1, fruit2, fruit3, fruit4, fruit5;
var player_img;


function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  //players.x = mouse.x

  //if(fruit1.isTouching){
  //fruit1.destroy;
  //}
  //if(fruit2.isTouching){
  //fruit2.destroy;
  //}
  //if(fruit3.isTouching){
  //fruit3.destroy;
  //}
  //if(fruit4.isTouching){
  //fruit4.destroy;
  //}
  //if(fruit5.isTouching){
  //fruit5.destroy;
  //}
  if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}