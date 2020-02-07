// Initialize Plyr Player
var player = new Plyr('#player', {
  // Options
  "fullscreen": {
    enabled: false,
    fallback: true,
    iosNative: true
  },
  "clickToPlay": false
});

// current position in playlist
var pos = 0;

// game style (there are two options: game-random, game-restart)
var style = '';

// list of all videos
var plays = document.querySelectorAll('.video-link');

// stores key of current scene
var chapter = 1;

// stores the "scene-id"
var scene = game[chapter].id;

// stores the "type" (there are five types: start, playing, advanceto, gameover, restart)
var type = game[chapter].type;

// stores the "scene-id" of next three choices
var option1 = game[chapter].options[0][1];
var option2 = game[chapter].options[1][2];
var option3 = game[chapter].options[2][3];

// stores the keys of the next three choices
var key1 = game[chapter].options[0].next;
var key2 = game[chapter].options[1].next;
var key3 = game[chapter].options[2].next;

// keyboard binding scene handlers
var bindOption1 = function(e) {
  console.log('pressed 1');
  keysPause();
  playScene(option1);
  updateQueue(key1);
};
var bindOption2 = function(e) {
  console.log('pressed  2');
  keysPause();
  playScene(option2);
  updateQueue(key2);
};
var bindOption3 = function(e) {
  console.log('pressed  3');
  if (key3 === 0) {
    console.log('this option is not available. try again.');
    return;
  } else {
     keysPause();
  }
  playScene(option3);
  updateQueue(key3);
};
var initGame = function(e) {
  style = "game-restart";
  console.log('key pressed. game style: ' + style);
  startGame();
  bindKeys();
};

var playIntro = function(e) {
  playScene("id-as");
  updateQueue(2);
  bindKeys();
};

var instantRestart = function(e) {
  resetGame();
};
var bindStopAutoReset = function(e) {
  stopReset();
  hideContinue();
};

// timing variables
var secondsActive = 30; // num of seconds buttons are active before video clip ends
var resetInterval = 120000; // milliseconds before the game resets after inactivity
var keyBindInterval = 0; // PLZ DON'T CHANGE! this is dynamically set in function

// setTimeouts
var toggleKeyBindings; // stores setTimeout for pausing+resuming key bindings
var restartGame; // stores setTimeout for reseting the game

// t.js text
var enterhere=[
	'WELCOME TO THE',
	'PRO BLACK PRO TRANS ARCHIVE',
	'THIS INTERACTIVE ARCHIVE WAS MADE',
  'TO STORE AND CENTRE BLACK TRANS PEOPLE',
	'TO PRESERVE',
	'OUR EXPERIENCES',
	'OUR THOUGHTS',
	'OUR FEELINGS',
	'OUR LIVES ',
	'TO REMEMBER US EVEN WHEN',
  'WE ARE AT RISK OF BEING ERASED',
	'YOUR OWN IDENTITY WILL DETERMINE',
  'HOW YOU CAN INTERACT WITH THE ARCHIVE',
	'AS WELL AS WHAT YOU WILL BE ABLE TO ACCESS',
	'BE HONEST WITH THE ARCHIVE',
	'IN ENTERING THIS SPACE YOU ARE AGREEING',
  'TO CENTRE THE BLACK TRANS EXPERIENCE',
	'THIS IS A PRO BLACK PRO TRANS SPACE',
	'THIS IS NOT YOUR SPACE',
	'THIS IS OUR SPACE',
	'YOU MAY FEEL UNCOMFORTABLE',
	'IF YOU DO NOT SUPPORT BLACK TRANS PEOPLE',
	'THEN YOU ARE NOT WELCOME IN THIS ARCHIVE',
	'TW: NO TRAUMA RECREATED IN THIS ARCHIVE',
	'BUT THERE ARE MENTIONS OF', 
  'BURIAL',
  'LOST HISTORY',
  'DEADNAMES',
  'HORMONES',
  'AND MISGENDERING',
	'THIS WORK CONTAINS SOME FLASHING LIGHTS',
  'PRESS ANY KEY TO ENTER THE ARCHIVE'
];

var goodbye=[
  'THANK YOU FOR VISITING THE ARCHIVE',
  'GOODBYE!'
];

var sorry=[
  'HI THERE!',
  'UNFORTUNATELY,',
  'THIS GAME',
  'WILL NOT RUN',
  'ON YOUR DEVICE.',
  'PLEASE USE',
  'A DESKTOP COMPUTER',
  'AND HIGH SPEED INTERNET',
  'BEST ON CHROME',
  'GOODBYE!'
];

var moreplease=[
  'DO YOU WANT TO CONTINUE?<br/><br/><a onClick="hideContinue()">YES</a> <a onClick="gameOver()">NO</a><ins>3000</ins>'
];

// load all video links
document.querySelectorAll(".video-link").forEach(function (link) {
  link.addEventListener("click", function () {
    player.loop = false; // disable looping of video
    var videoUrl = link.dataset.videoLinkUrl;
    player.source = {
      type: "video",
      title: "video_title",
      sources: [{
        src: videoUrl,
        type: "video/mp4"
      }]
    };
  });
});

// trigger an event once on play
player.once('playing', function(event){
  // remove loading screen when splash video starts
  $("#loading").remove();
});

//trigger events when video ends
player.on('ended', function(event){
  console.log("video ended");
  if (type == "advanceto" || type == "gameover" || type == "restart") {
    // when current video ends, autmatically go to the next scene
    console.log("oh hey, you advanced to the next scene!");
    playScene(option1);
    updateQueue(key1);
  } else if (type == "playing" && style == "game-restart") {
    console.log("scene ended! you have " + resetInterval/1000 + " seconds to pick an option before game ends.");
    // if no selection is made after x seconds of inactivity, prompt user with option to continue or end the game
    restartGame = setTimeout(showContinue, resetInterval);
    // stop auto reset if user interaction
    keyboardJS.bind('1', bindStopAutoReset);
    keyboardJS.bind('2', bindStopAutoReset);
    keyboardJS.bind('3', bindStopAutoReset);
  }
});

// trigger events when video starts playing
player.on('playing', function(event){
  bindKeys();
  if (type == "playing"){
    // if video with options is playing, toggle key bindings based on video length minus secondsActive
    keysPause();
    keyBindInterval = (player.duration - secondsActive) * 1000;
    toggleKeyBindings = setTimeout(keysResume, keyBindInterval);
    console.log("plz wait " + keyBindInterval/1000 + " seconds until keybindings resume");
  } else if (type == "start"){
    keysResume(); // if splash video is playing, resume keybindings
    keysAny(); // allow any key to trigger next video
  } else if (type == "advanceto" || type == "gameover" || type == "restart") {
    keysPause(); // if autoadvance video is playing, disable keybindings
  }
});

function playScene(id){
  $("p[data-dot='" + id + "']").trigger( "click" );
  // loop splash screen only
  if (id == "splash"){
    player.loop = true;
  } else {
    player.loop = false;
  }
  player.play();
  console.log("now playing: " + id);
}

function gameOptions(){
  keyboardJS.bind('', initGame);
}

function bindKeys(){
  keyboardJS.reset();
  keyboardJS.bind('1', bindOption1);
  keyboardJS.bind('2', bindOption2);
  keyboardJS.bind('3', bindOption3);
  keyboardJS.bind('1 + 2 + 3', instantRestart);
}

function keysAny(){
  keyboardJS.bind('', playIntro);
}

function keysPause(){
  keyboardJS.pause();
  console.log("keybindings paused");
}

function keysResume(){
  keyboardJS.resume();
  console.log("keybindings resumed");
}

function updateQueue(key){
  chapter = key;
  scene = game[key].id;
  type = game[key].type;
  option1 = game[key].options[0][1];
  option2 = game[key].options[1][2];
  option3 = game[key].options[2][3];
  key1 = game[key].options[0].next;
  key2 = game[key].options[1].next;
  key3 = game[key].options[2].next;
  console.log("[SCENE: " + chapter + " " + scene + " ][ NEXT: " + key1 + " " + option1 + " | " + key2 + " " + option2 + " | " + key3 + " " + option3 + " ][ TYPE: " + type + " ]");
}

function stopReset(){
  clearTimeout(restartGame);
  console.log("auto-reset disabled");
}

function resetGame(){
  console.log("game reset!");
  playScene("splash");
  updateQueue(1);
}

function startGame(){
  console.log("game start!");
  $("#setup").remove();
  $('.container').show();
  playScene("splash");
  updateQueue(1);
}

function showContinue(){
  console.log("are you still there?");
  $('#continue').css( "display", "flex" );
  $('#moreplease').t(
  moreplease.join(x='<ins>2</ins><del>*</del>')+x,
  	{ speed:30,
  		repeat:false,
  		pause_on_click:false,
      pause_on_tab_switch:true,
  		beep:false
  	}
  );
}

function hideContinue(){
  console.log("so glad you decided to stay. :)");
  $('#continue').css( "display", "none" );
}

function gameOver(){
  console.log("game over. goodbye.");
	$('.container').remove();
  $('#continue').remove();
  $('#gameover').css( "display", "flex" );
  $('#goodbye').t(
  goodbye.join(x='<ins>2</ins><del>*</del>')+x,
  	{ speed:30,
  		repeat:false,
  		pause_on_click:false,
      pause_on_tab_switch:true,
  		beep:false
  	}
  );
}

$( document ).ready(function() {
   // mobile + tablet check
   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     $('.container').remove();
     $('#mobile').css( "display", "flex" );
     $('#sorry').t(
     sorry.join(x='<ins>2</ins><del>*</del>')+x,
      { speed:30,
        repeat:false,
        pause_on_click:false,
        beep:false
      }
     );
   } else {
     $('.container').hide();
     $('#welcome').t(
     enterhere.join(x='<ins>2</ins><del>*</del>')+x,
      { speed:30,
        repeat:false,
        pause_on_click:false,
        beep:false
      }
     );
     gameOptions();
   }
});
