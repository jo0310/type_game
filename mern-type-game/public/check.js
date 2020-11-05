window.addEventListener('load', init);

const sc = document.querySelector('#scorein');
const d1 = document.querySelector('#dis1');
const d2 = document.querySelector('#dis2');
const d3 = document.querySelector('#dis3');
const message = document.querySelector('#message');
const wordInput = document.querySelector('#word-input');
const h = document.querySelector('#high');
const l = document.querySelector('#lev');
const seconds = document.querySelector('#seconds');
let i =0;
let score = 0;
let isPlaying;
let flag = 1;
mySound = new sound("victory.m4a");
mySound1 = new sound("loss.m4a");
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];
  const wordar = [];

  
  function init() {
    
    setInterval(check1, 5000);
    
    
    
  
    wordInput.addEventListener('input', startMatch);
   
  
    setInterval(checkStatus, 50);
  }
  
  function check(){
     
  }
  function check1(){
    

    if(i == 0){
    const r = randword();
    wordar[i] = words[r];    
    d1.innerHTML = wordar[i];
    isPlaying = false;
    }else if(i==1){
        const e = randword();
        wordar[i] = words[e];
        wordInput.value = '';    
    d2.innerHTML = wordar[i];
    isPlaying = false;
    }else if(i==2){
        const o = randword();
        wordar[i] = words[o];  
        wordInput.value = '';  
    d3.innerHTML = wordar[i];
    isPlaying = false;
    }
    else{
    //message.innerHTML = 'game over';
    flag = 0;
    }
    i++;


  }
  function randword(){
      
  const randIndex = Math.floor(Math.random() * words.length);
  return randIndex;
  }

 function startMatch() {
  if (matchWords()||matchWords1()||matchWords2()) {
    isPlaying = true;
   //flag = true;
   // showWord(words);
    wordInput.value = '';
    level();
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    sc.innerHTML = 0;
  } else {
    sc.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === d1.innerHTML) {
      message.innerHTML = 'Correct!!!';
       mySound.play();
     i--;
      return true;
    } else {
      message.innerHTML = '';
      
      return false;
    }
  }

  function matchWords1() {
    if (wordInput.value === d2.innerHTML) {
      message.innerHTML = 'Correct!!!';
      mySound.play();
     i--;
      return true;
    } else {
      message.innerHTML = '';
      
      return false;
    }
  }

  function matchWords2() {
    if (wordInput.value === d3.innerHTML) {
      message.innerHTML = 'Correct!!!';
      mySound.play();
     i--;
      return true;
    } else {
      message.innerHTML = '';
      
      return false;
    }
  }
   
  

  function checkStatus() {
    if (!isPlaying && flag == 0) {
      //mySound1.play();
      message.innerHTML = 'Game Over!!!';
      mySound1.play();
     // window.location.reload;
     //flag = 0;
      //const highscore = sc;
     // h.innerHTML = highscore;
      score = -1;
     
    }
  }

  function level(){
    if(score >= 0 && score <= 2){
    lval = 4000;
    l.innerHTML = 1;
    seconds.innerHTML = 4;
    //setInterval(countdown,1000);
    }else if(score >= 3 && score <= 6){
       lval = 3000;
       l.innerHTML = 2;
       seconds.innerHTML = 3;
    }else{
       lval = 2000;
       l.innerHTML = 'final';
       seconds.innerHTML = 2;
    }
  }

  function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}