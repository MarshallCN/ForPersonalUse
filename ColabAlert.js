path='https://marshallcn.github.io/test/src/';
function setAlarm(a=true){
	detect = setInterval(function (){
		fav=document.getElementById('favicon-link').href;
		if(fav.indexOf('busy')==-1){
			sound.src = fav.indexOf('error')>0?path+'warn.mp3':path+'movie.mp3';//bell.mp3,beep.ogg
			sound.play();
			setTimeout(function(){
				if(a){alert('Process Finished');}
				sound.pause();
				clearInterval(detect);}
			,100)
		}
	},1000)
}
if($('#audio-player')==null){
	sound = document.createElement('audio');
	sound.id = 'audio-player';
	sound.type = 'audio/mpeg';
	// sound.loop = true;
	sound.src = path+'beep.ogg'
	sound.style = 'display:none;';
	document.body.appendChild(sound);
}
if($('#alarm-btn')==null){
	n=document.createElement('colab-toolbar-button');
	n.id='alarm-btn';
	n.innerText='Alarm';
	n.title='Click there to set an Alarm for long-time process running'
	n.onclick=setAlarm
	$('#top-toolbar').insertBefore(n,$('colab-connect-button'));
}setAlarm(a=false);

//one line bookmark
//javascript:path='https://marshallcn.github.io/test/src/';function setAlarm(a=true){detect = setInterval(function (){fav=document.getElementById('favicon-link').href;if(fav.indexOf('busy')==-1){sound.src = fav.indexOf('error')>0?path+'warn.mp3':path+'movie.mp3';sound.play();setTimeout(function(){if(a){alert('Process Finished');}sound.pause();clearInterval(detect);},100);}},1000);}if(document.getElementById('audio-player')==null){sound = document.createElement('audio');sound.id = 'audio-player';sound.type = 'audio/mpeg';sound.src = path+'beep.ogg';sound.style = 'display:none;';document.body.appendChild(sound);}if(document.getElementById('alarm-btn')==null){n=document.createElement('colab-toolbar-button');n.id='alarm-btn';n.innerText='Alarm';n.title='Click there to set an Alarm for long-time process running';n.onclick=setAlarm;document.getElementById('top-toolbar').insertBefore(n,document.getElementsByTagName('colab-connect-button')[0]);}setAlarm(a=false);void(0);