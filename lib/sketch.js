

function preload() {

 // scream_sound.setVolume(0.2);

  scream_sound = loadSound("assets/sound/scream.mp3");
  mario_sound= loadSound("assets/sound/mario.mp3");
}

function setup() {
  createCanvas(600,600);


}

function screamPlay(){
  scream_sound.play();
}

function marioPlay(){
  mario_sound.play();
}


function draw() {
  background(50);
}




function keyPressed() {
  if (keyCode === 32) //SPACE
  {
    if(scream_sound.isPlaying() == false && mario_sound.isPlaying() == false){
      screamPlay();
    }

  } 
  else if(keyCode === 87) //W
  {
    if(scream_sound.isPlaying() == false && mario_sound.isPlaying() == false){
      marioPlay();
    }

  }
}

