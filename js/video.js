var video;
// PAGE LOAD
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

// PLAY +++++++++++++++++++++
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// PAUSE ++++++++++++++++++++
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// SLOW DOWN ++++?????
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});


// SPEED UP++++++++++++++
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

// SKIP AHEAD ++++++++++++++++
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime<(video.duration-15)){
		console.log("original Time:" + video.currentTime);
		video.currentTime +=15;
		console.log("new time is " + video.currentTime);
	}
	else{
		video.currentTime = 0;
		video.play()
		console.log("new time is " + video.currentTime);
	}
	});

// MUTE ++++++++++++++++++++++++

// var button = document.getElementById('mute');
//     button.onclick = function (){



	// document.querySelector("#mute").addEventListener("click", function() {
    // if (video.muted == false) {
    //        video.muted = true;
	// 	   console.log("Mute");
	// 	   document.querySelector("#mute").innerHTML = "Mute"
	// 	   document.querySelector('#volume').innerHTML = 0;
    // }

    // else {
    //     video.muted = false;
	// 	console.log("Unmute");
	// 	document.querySelector("#mute").innerHTML = "Unmute"
	// 	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
    // }
    // });


	document.querySelector('#mute').addEventListener('click', function() {
		if (video.muted === false) {
			video.muted = true;
			console.log(video.volume);
			document.querySelector('#mute').innerHTML = 'Unmute';
			document.querySelector('#volume').innerHTML = 0;
		} else {
			video.muted = false;
			document.querySelector('#mute').innerHTML = 'Mute';
			document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
		}
	});

// VOLUME SLIDER this. (REFER)


document.querySelector('#slider').addEventListener('input', (e) => {
	video.volume = e.currentTarget.value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
})

// function thisVolume(volume_value)
// {
// 	var video = document.querySelector("#player1");
// 	document.getElementById("Volume").innerHTML = volume_value;
// 	video.volume = volume_value / 100;
// 	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
// }

// STYLED
document.querySelector('#vintage').addEventListener('click', function() {
	document.querySelector('.video').classList.add('oldSchool');


// document.querySelector("#vintage").addEventListener("click", function() {
// 	console.log("Old School");
// 	if (video.classlist.contains("oldSchool")){
// 		video.classlist.add("oldSchool");
// 	}


// var link = document.createElement('link');

// link.href = 'css/video.css';
// link.rel = 'stylesheet';
// link.type = 'text/css';

// document.body.appendChild(link);
});

// ORIGINAL
document.querySelector('#orig').addEventListener('click', function() {
	document.querySelector('.video').classList.remove('oldSchool');
});

// document.querySelector("#orig").addEventListener("click", function() {
// 	console.log("Original");
// 	if (video.classlist.contains("oldSchool")){
// 		video.classlist.remove("oldSchool");
// 	}
// });
