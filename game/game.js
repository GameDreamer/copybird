function loadAssets(){
	jaws.assets.root = "assets/"
	jaws.assets.add("bg1.png", "guangdao.png", "parallax1.png", "parallax2.png","player.png");
	jaws.assets.add("bgm1.MP3", "bgm2.MP3", "jump.MP3","die.mp3","score.mp3");
}
var song;
function loopBGM(song_name) {
	if(song) song.pause();
	song = jaws.assets.get(song_name);
	song.currentTime = 0;
	if (typeof song.loop == 'boolean') {
		song.loop = true;
	}else {
		song.addEventListener('ended', function() { this.currentTime = 0; this.play(); }, false);
	}
	song.play();
}
function stopBGM(){
	if(song){
		song.pause();
	}
}
function playSound(sound_name){
	var sound = jaws.assets.get(sound_name);
	sound.currentTime = 0;
	sound.loop = false;
	sound.play();
}
loadAssets();
jaws.preventDefaultKeys(["space"]);
jaws.start(StartState, {fps:GameSettings.fps});