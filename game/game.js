var GameSettings = {
	scale:0.75,
	screen_width:360,
	screen_heigth:600
};
function StartState(){
	var parallax,viewport,player;
	/* Called once. Put your one-time initializing here. */
	this.setup = function() {
		parallax = new jaws.Parallax({repeat_x: true,scale:GameSettings.scale});
		parallax.addLayer({image: "bg1.png", damping: 100,y: 0});
        parallax.addLayer({image: "parallax2.png", damping: 5,y: 600});
        parallax.addLayer({image: "parallax1.png", damping: 0,y: 700});
		player = Player();
	};
  
	/* Called each gametick. Put your gamelogic here. */
	this.update = function() {
		parallax.camera_x += 1;
	};

	/* Called each gametick after update(). Put your drawing here. */
	this.draw = function() {
		parallax.draw();
		player.draw();
		//console.log("FPS",jaws.game_loop.fps);
	};
}
function loadAssets(){
	jaws.assets.root = "assets/"
	jaws.assets.add("bg1.png", "guangdao.png", "parallax1.png", "parallax2.png","player.png");
}
loadAssets();
jaws.start(StartState, {fps:30});