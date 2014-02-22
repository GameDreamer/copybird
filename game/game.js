function StartState(){
	var parallax,viewport;
	/* Called once. Put your one-time initializing here. */
	this.setup = function() {
		parallax = new jaws.Parallax({repeat_x: true,scale:0.75});
		parallax.addLayer({image: "bg1.png", damping: 100,y: 0});
        parallax.addLayer({image: "parallax2.png", damping: 10,y: 600});
        parallax.addLayer({image: "parallax1.png", damping: 1,y: 700});
	};
  
	/* Called each gametick. Put your gamelogic here. */
	this.update = function() {
		parallax.camera_x += 1;
	};

	/* Called each gametick after update(). Put your drawing here. */
	this.draw = function() {
		parallax.draw();
		console.log("FPS",jaws.game_loop.fps);
	};
}
function loadAssets(){
	jaws.assets.root = "assets/"
	jaws.assets.add("bg1.png", "guangdao.png", "parallax1.png", "parallax2.png","player.png");
}
loadAssets();
jaws.start(StartState, {fps:30});