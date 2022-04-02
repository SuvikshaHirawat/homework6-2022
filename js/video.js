var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// PAGE LOAD?

// PLAY +++++++++++++++++++++
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

// PAUSE ++++++++++++++++++++
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// SLOW DOWN
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackrate = 0.5;
});

// SPEED UP
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackrate = 2.0;
});

// SKIP AHEAD
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	
	function skip(value) {
		var video = document.getElementById("skip");
		video.currentTime += 15;
 	}

 	function restart() {
		var video = document.getElementById("skip");
		video.currentTime = 0;
	}

});

// MUTE - NEED TO DISPLAY UNMUTE ON BUTTON!!!! Otherwise works
// document.querySelector("#mute").addEventListener("click", function() {
var button = document.getElementById('mute');
    button.onclick = function (){
	console.log("Unmute");
    if (video.muted == false) {
           video.muted = true;
    }

    else {
        video.muted = false;
    }
    };

// VOLUME SLIDER

// function thisVolume(volume_value)
// {
// 	var myvideo = document.getElementById("video");
// 	document.getElementById("Volume").innerHTML=volume_value;
// 	myvideo.volume = volume_value / 100;
// }

// STYLED



// ORIGINAL









// -------------------------------------
// Video for play + pause buttons
// var vid = document.getElementById("myVideo");

// function playVid(){
// 	vid.play();
// }

// function pauseVid(){
// 	vid.pause();
// }