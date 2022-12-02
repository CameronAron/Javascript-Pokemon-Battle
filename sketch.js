//Variables
let squirtleHealth = 25;
let bulbasaurHealth = 25;
let charmanderHealth = 25;
let enemyHealth = 50;
let squirtleDamage = 5;
let bulbasaurDamage = 5;
let charmanderDamage = 5;
let enemyDamage = 5;
let battlePhase = "Nothing";
let enemy;
let player;
let pokeFont;
let battleMusic;
let menuMusic;
let winMusic;
let playerMove;
let enemyMove;
let damageToEnemy;
let damageToPlayer;
let enemyMoveVar;
//let mouseCursor;

//Image preload Function
function preload(){
  squirtleFacingAway = loadImage("images/squirtleFacingAway.png");
  charmanderFacingCamera = loadImage("images/charmanderFacingCamera.png");
  bulbasaurFacingAway = loadImage("images/bulbasaurFacingAway.png");
  bulbasaurFacingCamera = loadImage("images/bulbasaurFacingCamera.png");
  charmanderFacingAway = loadImage("images/charmanderFacingAway.png");
  squirtleFacingCamera = loadImage("images/squirtleFacingCamera.png");
  templateUI = loadImage("images/battleuitemplate.png");
  pokeFont = loadFont("assets/pokemon_pixel_font.ttf");
  battleMusic = loadSound('assets/battleMusic.mp3');
  menuMusic = loadSound('assets/menuMusic.mp3');
  winMusic = loadSound('assets/winMusic.mp3');
  //mouseCursor = loadImage("images/pokeballCursor.png");
}

//Start Function
function setup() {
  console.log("started sketch");
  //cursor('images/pokeballCursor.png');
  createCanvas(550, 520);
  background(248,228,250,255);
  noFill();
  strokeWeight(6);
  rect(0,0,550,520);
  menuMusic.play();
  mainMenuScreen();
}

//Main Menu
function mainMenuScreen(){
  //cursor('images/pokeballCursor.png');
  console.log("on main menu screen");
  battlePhase = "Main Menu";
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  fill(0,0,0);
  textSize(55);
  textFont(pokeFont);
  text("Welcome to 'P5JS Pokemon'!",60,100);
  image(squirtleFacingCamera,40,150,130,120);
  image(bulbasaurFacingCamera,200,140,150,150);
  image(charmanderFacingCamera,375,145,150,130);
  fill(255, 255, 255);
  rect(110,400,335,50);
  fill(0,0,0);
  text("Click Here to Start", 120, 440);
}

//First Scene Enemy Select
function pickEnemyScreen() {
  //menuMusic.play();
  console.log("on pick enemy screen");
  battlePhase = "Pick Enemy";
  squirtleHealth = 25;
  bulbasaurHealth = 25;
  charmanderHealth = 25;
  enemyHealth = 50;
  squirtleDamage = 5;
  bulbasaurDamage = 5;
  charmanderDamage = 5;
  enemyDamage = 5;
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  fill(0,0,0);
  textSize(55);
  textFont(pokeFont);
  text("Choose Your Enemy:",114,100);
  fill(255,255,255);
  rect(30,240,150,140);
  image(squirtleFacingCamera,40,250,130,120);
  rect(200,240,150,140);
  image(bulbasaurFacingCamera,200,240,150,150);
  rect(375,240,150,140);
  image(charmanderFacingCamera,375,245,150,130);
  player = squirtleFacingAway;
}

//The Big "On Mouse Click" Function
function mouseClicked() {
//----------------------- On Main Menu Scene
  if(mouseX > 110 && mouseX < 445 && mouseY > 400 && mouseY < 450 && battlePhase == "Main Menu"){
    pickEnemyScreen();
  }
  
//----------------------- On Select Enemy Scene
  if(mouseX > 30 && mouseX < 180 && mouseY > 240 && mouseY < 380 && battlePhase == "Pick Enemy"){
    console.log("chose squirtle");
    enemy = squirtleFacingCamera;
    battleMusic.play();
    menuMusic.stop();
    createBattleScene();
  }
  else if(mouseX > 200 && mouseX < 350 && mouseY > 240 && mouseY < 380 && battlePhase == "Pick Enemy"){
    console.log("chose bulbasaur");
    enemy = bulbasaurFacingCamera;
    battleMusic.play();
    menuMusic.stop();
    createBattleScene();
  }
  else if(mouseX > 375 && mouseX < 525 && mouseY > 240 && mouseY < 380 && battlePhase == "Pick Enemy"){
    console.log("chose charmander");
    enemy = charmanderFacingCamera;
    battleMusic.play();
    menuMusic.stop();
    createBattleScene();      
  }
  else{
  }
//----------------------- On Main Scene
  if(mouseX > 400 && mouseX < 490 && mouseY > 435 && mouseY < 485 && battlePhase == "Main Scene"){
    ranAway();
  }
  else if(mouseX > 395 && mouseX < 495 && mouseY > 380 && mouseY < 430 && battlePhase == "Main Scene"){
    changePokemon();        
  }
  else if(mouseX > 260 && mouseX < 380 && mouseY > 380 && mouseY < 430 && battlePhase == "Main Scene"){
    timeToFight();        
  }
  else{
  }
//----------------------- On Run Away Scene
  if(mouseX > 95 && mouseX < 455 && mouseY > 170 && mouseY < 370 && battlePhase == "Ran Away"){
    winMusic.stop();
    mainMenuScreen();
  }
  else{
  }
//----------------------- On Change Pokemon Scene
  if(mouseX > 30 && mouseX < 180 && mouseY > 240 && mouseY < 380 && battlePhase == "Change Pokemon"){
    console.log("chose squirtle");
    player = squirtleFacingAway;
    if(player == squirtleFacingAway){
      if(squirtleHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == bulbasaurFacingAway){
      if(bulbasaurHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == charmanderFacingAway){
      if(charmanderHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else{
    }
  }
  else if(mouseX > 200 && mouseX < 350 && mouseY > 240 && mouseY < 380 && battlePhase == "Change Pokemon"){
    console.log("chose bulbasaur");
    player = bulbasaurFacingAway;
    if(player == squirtleFacingAway){
      if(squirtleHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == bulbasaurFacingAway){
      if(bulbasaurHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == charmanderFacingAway){
      if(charmanderHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else{
    }
  }
  else if(mouseX > 375 && mouseX < 525 && mouseY > 240 && mouseY < 380 && battlePhase == "Change Pokemon"){
    console.log("chose charmander");
    player = charmanderFacingAway;
    if(player == squirtleFacingAway){
      if(squirtleHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == bulbasaurFacingAway){
      if(bulbasaurHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == charmanderFacingAway){
      if(charmanderHealth < 1){
        pokemonFainted();
      }
      else{
        createBattleScene();
      }
    }
    else{
    }      
  }
  else{
  }
//----------------------- On Move Select Scene
  if(mouseX > 22 && mouseX < 262 && mouseY > 360 && mouseY < 408 && battlePhase == "Fight Screen"){
    console.log("chose tackle");
    playerMove = "Tackle";
    showAttackOne();
  }
  else if(mouseX > 22 && mouseX < 232 && mouseY > 408 && mouseY < 456 && battlePhase == "Fight Screen"){
    console.log("chose growl");
    playerMove = "Growl";
    showAttackOne();
  }
  else if(mouseX > 22 && mouseX < 342 && mouseY > 456 && mouseY < 509 && battlePhase == "Fight Screen"){
    if(player == squirtleFacingAway && battlePhase == "Fight Screen"){
      console.log("chose water gun");
      playerMove = "Water Gun";
      showAttackOne();
    }
    else if(player == bulbasaurFacingAway && battlePhase == "Fight Screen"){
      console.log("chose vine whip");
      playerMove = "Vine Whip";
      showAttackOne();
    }
    else if(player == charmanderFacingAway && battlePhase == "Fight Screen"){
      console.log("chose ember");
      playerMove = "Ember";
      showAttackOne();
    }
    else{
    }
  }
  else{
  }
//----------------------- On Attack Screen 1
  if(mouseX > 25 && mouseX < 125 && mouseY > 475 && mouseY < 510 && battlePhase == "Show Attack One"){
    showAttackTwo();
  }
  else{
  }
  
//----------------------- On Attack Screen 2
  if(mouseX > 150 && mouseX < 250 && mouseY > 475 && mouseY < 510 && battlePhase == "Show Attack Two"){
    if(player == squirtleFacingAway){
      if(squirtleHealth < 1){
        pokemonFainted();
      }
      else if (enemyHealth < 1){
        playerWins();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == bulbasaurFacingAway){
      if(bulbasaurHealth < 1){
        pokemonFainted();
      }
      else if (enemyHealth < 1){
        playerWins();
      }
      else{
        createBattleScene();
      }
    }
    else if (player == charmanderFacingAway){
      if(charmanderHealth < 1){
        pokemonFainted();
      }
      else if (enemyHealth < 1){
        playerWins();
      }
      else{
        createBattleScene();
      }
    }
    else{
    }
  }
  else{
  }
}

//Main Battle Scene
function createBattleScene() {
  //Draw the UI details
  textFont(pokeFont);
  strokeWeight(6);
  battlePhase = "Main Scene";
  console.log("on battle screen");
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  //image(templateUI, -150,0,850,520);
  textSize(55);
  fill(0, 0, 0);
  image(player,40,230,150,120);
  
  if(player == squirtleFacingAway){
    text("SQUIRTLE", 305, 275);
    text("HP: " + squirtleHealth + " / 25", 300, 320);
  }
  else if (player == bulbasaurFacingAway){
    text("BULBASAUR", 300, 275);
    text("HP: " + bulbasaurHealth + " / 25", 300, 320);
  }
  else if (player == charmanderFacingAway){
    text("CHARMANDER", 285, 275);
    text("HP: " + charmanderHealth + " / 25", 300, 320);
  }
  else{
  }
  
  image(enemy,350,40,150,150);
  text("HP: " + enemyHealth + " / 50", 75, 90);
  
  if(enemy == squirtleFacingCamera){
    text("SQUIRTLE", 80, 50);
  }
  else if (enemy == bulbasaurFacingCamera){
    text("BULBASAUR", 70, 50);
  }
  else if (enemy == charmanderFacingCamera){
    text("CHARMANDER", 60, 50);
  }
  else{
  }
  
  strokeWeight(6);
  line(255, 333, 500, 333);
  line(500, 333, 500, 265);
  line(50, 100, 290, 100);
  line(50, 100, 50, 60);
  
  //Draw the buttons
  textSize(40);
  fill(248,228,250,255);
  rect(22,360,508,150);
  rect(230,360,300,150);
  
  fill(0,0,0);
  text("What Will", 75, 415);
  if(player == squirtleFacingAway){
    text("SQUIRTLE  Do?", 45, 455);
  }
  else if (player == bulbasaurFacingAway){
    text("BULBASAUR  Do?", 34, 455);
  }
  else if (player == charmanderFacingAway){
    text("CHARMANDER  Do?", 25, 455);
  }
  else{
  }
  
  strokeWeight(6);
  fill(248,228,250,255);
  rect(260, 380, 120, 50);
  fill(0,0,0);
  text("FIGHT",287,415);
  fill(248,228,250,255);
  rect(395, 380, 100, 50);
  fill(0,0,0);
  text("PKMN",416,415);
  fill(248,228,250,255);
  rect(265, 435, 110, 50);
  fill(0,0,0);
  text("ITEM",295,470);
  fill(248,228,250,255);
  rect(400, 435, 90, 50);
  fill(0,0,0);
  text("RUN",423,470);
}

//Function To Fight
function timeToFight(){
  textFont(pokeFont);
  battlePhase = "Fight Screen";
  console.log("on fight screen");
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  //image(templateUI, -150,0,850,520);
  textSize(55);
  fill(0, 0, 0);
  image(player,40,230,150,120);
  
  if(player == squirtleFacingAway){
    text("SQUIRTLE", 305, 275);
    text("HP: " + squirtleHealth + " / 25", 300, 320);
  }
  else if (player == bulbasaurFacingAway){
    text("BULBASAUR", 300, 275);
    text("HP: " + bulbasaurHealth + " / 25", 300, 320);
  }
  else if (player == charmanderFacingAway){
    text("CHARMANDER", 285, 275);
    text("HP: " + charmanderHealth + " / 25", 300, 320);
  }
  else{
  }
  
  image(enemy,350,40,150,150);
  text("HP: " + enemyHealth + " / 50", 75, 90);
  
  if(enemy == squirtleFacingCamera){
    text("SQUIRTLE", 80, 50);
  }
  else if (enemy == bulbasaurFacingCamera){
    text("BULBASAUR", 70, 50);
  }
  else if (enemy == charmanderFacingCamera){
    text("CHARMANDER", 60, 50);
  }
  else{
  }
  
  line(255, 333, 500, 333);
  line(500, 333, 500, 265);
  line(50, 100, 290, 100);
  line(50, 100, 50, 60);
  textSize(40);
  fill(248,228,250,255);
  rect(22,360,508,150)
  rect(100,360,430,150);
  strokeWeight(6);
  fill(248,228,250,255);
  rect(22, 360, 240, 48);
  rect(22, 408, 210, 48);
  fill(0, 0, 0);
  ellipse(47, 385, 10);
  textSize(60);
  text(" T A C K L E", 67, 400);
  ellipse(47, 435, 10);
  text(" G R O W L", 67, 450);
  
  
  if(player == squirtleFacingAway){
    fill(248,228,250,255);
    rect(22, 456,320, 53);
    fill(0, 0, 0);
    ellipse(47, 485, 10);
    text(" W A T E R   G U N", 67, 500);
  }
  else if (player == bulbasaurFacingAway){
    fill(248,228,250,255);
    rect(22, 456,300, 53);
    fill(0, 0, 0);
    ellipse(47, 485, 10);
    text(" V I N E   W H I P", 67, 500);
  }
  else if (player == charmanderFacingAway){
    fill(248,228,250,255);
    rect(22, 456,210, 53);
    fill(0, 0, 0);
    ellipse(47, 485, 10);
    text(" E M B E R", 67, 500);
  }
  else{
  }
  
}

//Function For Running Away
function ranAway(){
  menuMusic.play();
  battleMusic.stop();
  battlePhase = "Ran Away";
  console.log("ran away");
  strokeWeight(6);
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  textSize(50);
  fill(255,255,255);
  rect(95,170,360,200);
  fill(0,0,0);
  text("You Ran Away!", 110, 260);
  text("Click Here To", 135, 300);
  text("Try Again", 170, 340);
}

//Function To Change Pokemon
function changePokemon(){
  battlePhase = "Change Pokemon";
  console.log("on change pokemon screen");
  strokeWeight(6);
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  fill(0,0,0);
  textSize(55);
  textFont(pokeFont);
  text("Change To Which Pokemon?", 65, 100);
  fill(255,255,255);
  rect(30,240,150,140);
  image(squirtleFacingCamera,40,250,130,120);
  rect(200,240,150,140);
  image(bulbasaurFacingCamera,200,240,150,150);
  rect(375,240,150,140);
  image(charmanderFacingCamera,375,245,150,130);
}

//Function Where the Player Attacks
function showAttackOne(){
  textFont(pokeFont);
  battlePhase = "Show Attack One";
  console.log("on first attack screen");
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  //image(templateUI, -150,0,850,520);
  textSize(55);
  fill(0, 0, 0);
  image(player,40,230,150,120);
  
  if(player == squirtleFacingAway){
    text("SQUIRTLE", 305, 275);
    text("HP: " + squirtleHealth + " / 25", 300, 320);
  }
  else if (player == bulbasaurFacingAway){
    text("BULBASAUR", 300, 275);
    text("HP: " + bulbasaurHealth + " / 25", 300, 320);
  }
  else if (player == charmanderFacingAway){
    text("CHARMANDER", 285, 275);
    text("HP: " + charmanderHealth + " / 25", 300, 320);
  }
  else{
  }
  
  image(enemy,350,40,150,150);
  text("HP: " + enemyHealth + " / 50", 75, 90);
  
  if(enemy == squirtleFacingCamera){
    text("SQUIRTLE", 80, 50);
  }
  else if (enemy == bulbasaurFacingCamera){
    text("BULBASAUR", 70, 50);
  }
  else if (enemy == charmanderFacingCamera){
    text("CHARMANDER", 60, 50);
  }
  else{
  }
  
  line(255, 333, 500, 333);
  line(500, 333, 500, 265);
  line(50, 100, 290, 100);
  line(50, 100, 50, 60);
  textSize(40);
  fill(248,228,250,255);
  rect(22,360,508,150)
  strokeWeight(6);
  fill(248,228,250,255);
  
  if(player == squirtleFacingAway){
    if (playerMove == "Tackle"){
      enemyHealth = enemyHealth - squirtleDamage;
      damageToEnemy = squirtleDamage;
    }
    else if (playerMove == "Growl"){
      squirtleDamage = squirtleDamage + 2;
    }
    else if (playerMove == "Water Gun"){
      if(enemy == charmanderFacingCamera){
        enemyHealth = enemyHealth - squirtleDamage - 2;
        damageToEnemy = squirtleDamage + 2;
      }
      else if (enemy == bulbasaurFacingCamera){
        enemyHealth = enemyHealth - squirtleDamage + 2;
        damageToEnemy = squirtleDamage - 2;
      }
      else{
        enemyHealth = enemyHealth - squirtleDamage;
        damageToEnemy = squirtleDamage;
      }
    }
    else{
    }
  }
  else if (player == bulbasaurFacingAway){
    if (playerMove == "Tackle"){
      enemyHealth = enemyHealth - bulbasaurDamage;
      damageToEnemy = bulbasaurDamage;
    }
    else if (playerMove == "Growl"){
      bulbasaurDamage = bulbasaurDamage + 2;
    }
    else if (playerMove == "Vine Whip"){
      if(enemy == charmanderFacingCamera){
        enemyHealth = enemyHealth - bulbasaurDamage + 2;
        damageToEnemy = bulbasaurDamage - 2;
      }
      else if (enemy == squirtleFacingCamera){
        enemyHealth = enemyHealth - bulbasaurDamage - 2;
        damageToEnemy = bulbasaurDamage + 2;
      }
      else{
        enemyHealth = enemyHealth - bulbasaurDamage;
        damageToEnemy = bulbasaurDamage;
      }
    }
    else{
    }
  }
  else if (player == charmanderFacingAway){
    if (playerMove == "Tackle"){
      enemyHealth = enemyHealth - charmanderDamage;
      damageToEnemy = charmanderDamage;
    }
    else if (playerMove == "Growl"){
      charmanderDamage = charmanderDamage + 2;
    }
    else if (playerMove == "Ember"){
      if(enemy == bulbasaurFacingCamera){
        enemyHealth = enemyHealth - charmanderDamage - 2;
        damageToEnemy = charmanderDamage + 2;
      }
      else if (enemy == squirtleFacingCamera){
        enemyHealth = enemyHealth - charmanderDamage + 2;
        damageToEnemy = charmanderDamage - 2;
      }
      else{
        enemyHealth = enemyHealth - charmanderDamage;
        damageToEnemy = charmanderDamage;
      }
    }
    else{
    }
  }
  else{
  }
  
  fill(0,0,0);
  if(player == squirtleFacingAway){
    text("Your SQUIRTLE used " + playerMove +".", 90, 425);
    if(playerMove == "Growl"){
      text("It's Attack Stat Was Increased.", 80, 455);
    }
    else{
      text("It Did " + damageToEnemy +" Damage.", 130, 455);
    }
  }
  else if (player == bulbasaurFacingAway){
    text("Your BULBASAUR used " + playerMove +".", 90, 425);
    if(playerMove == "Growl"){
      text("It's Attack Stat Was Increased.", 80, 455);
    }
    else{
      text("It Did " + damageToEnemy +" Damage.", 130, 455);
    }  
  }
  else if (player == charmanderFacingAway){
    text("Your CHARMANDER used " + playerMove +".", 90, 425);
    if(playerMove == "Growl"){
      text("It's Attack Stat Was Increased.", 80, 455);
    }
    else{
      text("It Did " + damageToEnemy +" Damage.", 130, 455);
    }  
  }
  else{
  }
  
  fill(248,228,250,255);
  rect(25, 475, 100 , 35);
  fill(0, 0, 0);
  text("NEXT", 40, 505);
}

//Function Where the Enemy Pokemon Attacks
function showAttackTwo() {
  textFont(pokeFont);
  battlePhase = "Show Attack Two";
  console.log("on second attack screen");
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  //image(templateUI, -150,0,850,520);
  textSize(55);
  fill(0, 0, 0);
  image(player,40,230,150,120);
  
  if(player == squirtleFacingAway){
    text("SQUIRTLE", 305, 275);
    text("HP: " + squirtleHealth + " / 25", 300, 320);
  }
  else if (player == bulbasaurFacingAway){
    text("BULBASAUR", 300, 275);
    text("HP: " + bulbasaurHealth + " / 25", 300, 320);
  }
  else if (player == charmanderFacingAway){
    text("CHARMANDER", 285, 275);
    text("HP: " + charmanderHealth + " / 25", 300, 320);
  }
  else{
  }
  
  image(enemy,350,40,150,150);
  text("HP: " + enemyHealth + " / 50", 75, 90);
  
  if(enemy == squirtleFacingCamera){
    text("SQUIRTLE", 80, 50);
  }
  else if (enemy == bulbasaurFacingCamera){
    text("BULBASAUR", 70, 50);
  }
  else if (enemy == charmanderFacingCamera){
    text("CHARMANDER", 60, 50);
  }
  else{
  }
  
  line(255, 333, 500, 333);
  line(500, 333, 500, 265);
  line(50, 100, 290, 100);
  line(50, 100, 50, 60);
  textSize(40);
  fill(248,228,250,255);
  rect(22,360,508,150)
  strokeWeight(6);
  fill(248,228,250,255);
  
  enemyMoveVar = random();
  if(enemyMoveVar < 0.6){
    enemyMove = "Tackle"; 
    if(player == squirtleFacingAway){
      squirtleHealth = squirtleHealth - enemyDamage;
      damageToPlayer = enemyDamage;
    }
    else if (player == bulbasaurFacingAway){
      bulbasaurHealth = bulbasaurHealth - enemyDamage;
      damageToPlayer = enemyDamage;
    }
    else if (player == charmanderFacingAway){
      charmanderHealth = charmanderHealth - enemyDamage;
      damageToPlayer = enemyDamage;
    }
    else{
    }
  }
  else if (enemyMoveVar < 0.8){
    enemyMove = "Growl";
    enemyDamage = enemyDamage + 2;
  }
  else{
    if(enemy == squirtleFacingCamera){
      enemyMove = "Water Gun";
      if(player == charmanderFacingAway){
        charmanderHealth = charmanderHealth - enemyDamage - 2;
        damageToPlayer = enemyDamage + 2;
      }
      else if (player == bulbasaurFacingAway){
        bulbasaurHealth = bulbasaurHealth - enemyDamage + 2;
        damageToPlayer = enemyDamage - 2;
      }
      else{
        squirtleHealth = squirtleHealth - enemyDamage;
        damageToPlayer = enemyDamage;
      }
    }
    else if (enemy == bulbasaurFacingCamera){
      enemyMove = "Vine Whip";
      if(player == squirtleFacingAway){
        squirtleHealth = squirtleHealth - enemyDamage - 2;
        damageToPlayer = enemyDamage + 2;
      }
      else if (player == charmanderFacingAway){
        charmanderHealth = charmanderHealth - enemyDamage + 2;
        damageToPlayer = enemyDamage - 2;
      }
      else{
        bulbasaurHealth = bulbasaurHealth - enemyDamage;
        damageToPlayer = enemyDamage;
      }
    }
    else if (enemy == charmanderFacingCamera){
      enemyMove = "Ember";
      if(player == bulbasaurFacingAway){
        bulbasaurHealth = bulbasaurHealth - enemyDamage - 2;
        damageToPlayer = enemyDamage + 2;
      }
      else if (player == squirtleFacingAway){
        squirtleHealth = squirtleHealth - enemyDamage + 2;
        damageToPlayer = enemyDamage - 2;
      }
      else{
        charmanderHealth = charmanderHealth - enemyDamage;
        damageToPlayer = enemyDamage;
      }
    }
    else{
    }
  }
  fill(0,0,0);
  if(enemy == squirtleFacingCamera){
    text("The Enemy SQUIRTLE used " + enemyMove +".", 90, 425);
    if(enemyMove == "Growl"){
      text("It's Attack Stat Was Increased.", 80, 455);
    }
    else{
      text("It Did " + damageToPlayer +" Damage.", 130, 455);
    }
  }
  else if (enemy == bulbasaurFacingCamera){
    text("The Enemy BULBASAUR used " + enemyMove +".", 90, 425);
    if(enemyMove == "Growl"){
      text("It's Attack Stat Was Increased.", 80, 455);
    }
    else{
      text("It Did " + damageToPlayer +" Damage.", 130, 455);
    }  
  }
  else if (enemy == charmanderFacingCamera){
    text("The Enemy CHARMANDER used " + enemyMove +".", 90, 425);
    if(enemyMove == "Growl"){
      text("It's Attack Stat Was Increased.", 80, 455);
    }
    else{
      text("It Did " + damageToPlayer +" Damage.", 130, 455);
    }  
  }
  else{
  }
  
  fill(248,228,250,255);
  rect(150, 475, 100 , 35);
  fill(0, 0, 0);
  text("NEXT", 165, 505);
}

//Calls function when Current Pokemon Is Dead
function pokemonFainted(){
  battlePhase = "Change Pokemon";
  console.log("on change pokemon screen");
  
  if (squirtleHealth < 1 && bulbasaurHealth < 1 && charmanderHealth < 1){
    playerLose();
  }
  else{
    strokeWeight(6);
    fill(248,228,250,255);
    rect(0, 0, 550, 520);
    fill(0,0,0);
    textSize(55);
    textFont(pokeFont);

    if(player == squirtleFacingAway){
      text("SQUIRTLE Has Fainted", 65, 100);
      text("Please Choose Another", 65, 140);
    }
    else if (player == bulbasaurFacingAway){
      text("BULBASAUR Has Fainted", 65, 100);
      text("Please Choose Another", 65, 140);
    }
    else if (player == charmanderFacingAway){
      text("CHARMANDER Has Fainted", 65, 100);
      text("Please Choose Another", 65, 140);
    }
    else{
    }

    fill(255,255,255);
    rect(30,240,150,140);
    image(squirtleFacingCamera,40,250,130,120);
    rect(200,240,150,140);
    image(bulbasaurFacingCamera,200,240,150,150);
    rect(375,240,150,140);
    image(charmanderFacingCamera,375,245,150,130);
  }
}

//The Player Wins The Game
function playerWins(){
  winMusic.play();
  battleMusic.stop();
  battlePhase = "Ran Away";
  console.log("player won");
  strokeWeight(6);
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  textSize(50);
  fill(255,255,255);
  rect(95,170,360,200);
  fill(0,0,0);
  text("You Won The Game!", 103, 260);
  text("Click Here To", 135, 300);
  text("Play Again", 169, 340);
}

//The Player Lost The Game
function playerLose(){
  menuMusic.play();
  battleMusic.stop();
  battlePhase = "Ran Away";
  console.log("player lost");
  strokeWeight(6);
  fill(248,228,250,255);
  rect(0, 0, 550, 520);
  textSize(50);
  fill(255,255,255);
  rect(95,170,360,200);
  fill(0,0,0);
  text("You Lost The Game...", 95, 260);
  text("Click Here To", 135, 300);
  text("Try Again", 169, 340);
}

function draw() {
  if(battlePhase == "Main Scene" && !battleMusic.isPlaying()){
    battleMusic.play();
  }
  else if(battlePhase == "Fight Screen" && !battleMusic.isPlaying()){
    battleMusic.play();
  }
  else if(battlePhase == "Pick Enemy" && !menuMusic.isPlaying()){
    menuMusic.play();
  }
  else if(battlePhase == "Main Menu" && !menuMusic.isPlaying()){
    menuMusic.play();
  }
  else{
  }
  
}