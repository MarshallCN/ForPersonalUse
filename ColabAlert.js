path='https://marshallcn.github.io/test/src/';
fav=document.getElementById('favicon-link').href;
detect = setInterval(function (){
    if(fav.indexOf('busy')==-1){
		var sound = document.createElement('audio');
		sound.id = 'audio-player';
		sound.src = fav.indexOf('error')>0?path+'beep.ogg':path+'bell.mp3';
		sound.type = 'audio/mpeg';
		sound.loop = true;
		sound.style = 'display:none;';
		document.body.appendChild(sound);void(0);
		document.getElementById('audio-player').play();
    	alert('Process Finished');
		document.getElementById('audio-player').pause()
		clearInterval(detect)
	}
},1000)
