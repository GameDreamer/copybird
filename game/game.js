function loadAssets(){
	jaws.assets.root = "assets/"
	jaws.assets.add("bg1.png", "guangdao.png", "parallax1.png", "parallax2.png","player.png");
}
loadAssets();
jaws.preventDefaultKeys(["space"]);
jaws.start(StartState, {fps:GameSettings.fps});