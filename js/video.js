var video;
video = document.querySelector('video')

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log('Autoplay is set to false');
	console.log('Looping is set to false');

});

//play vid 
document.querySelector("#play").addEventListener("click", function() {
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%"
	console.log("Play Video");
	video.play();
});

//pause vid 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


//slow vid 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down video");
	video.playbackRate *= 0.90;
	console.log("Speed is " + video.playbackRate);
});

//fast vid 
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate *= 1.10;
	console.log("Speed is " + video.playbackRate);
});

//skip vid 
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	// video.currentTime += 10;
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
		//video.currentTime += 10
	}
	else{
		video.currentTime += 10;
	}
	console.log("Video current time is " + video.currentTime);
});

//mute unmute 
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
		console.log("Unmute")
	}
	else{
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
		console.log("Mute");
	}
})

// //volume 
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%"
	console.log('Current volume is ' + video.volume)

 });

//vintage
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Vintage filter");
});

//original

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original filter");
});