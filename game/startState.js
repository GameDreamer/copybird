function StartState(){
	var bg,player;
	/* Called once. Put your one-time initializing here. */
	this.setup = function() {
		bg = BackGround();
		player = Player(GameSettings.screen_width/5,GameSettings.screen_heigth/4,2);
		jaws.on_keydown(["space","left_mouse_button","center_mouse_button", "right_mouse_button"], function(){jaws.switchGameState(GameState,{fps:GameSettings.fps})});
		loopBGM("bgm2.*");
	};
  
	/* Called each gametick. Put your gamelogic here. */
	this.update = function() {
		bg.update();
		player.playFace();
	};

	/* Called each gametick after update(). Put your drawing here. */
	this.draw = function() {
		bg.drawBack();
		jaws.context.font = "bold 40pt terminal";
		jaws.context.lineWidth = 10;
		jaws.context.fillStyle = "Red" ;
		jaws.context.strokeStyle =  "rgba(200,200,200,0.0)";
		jaws.context.fillText("CLICK", GameSettings.screen_width/2, GameSettings.screen_heigth/3);
		jaws.context.font = "bold 20pt terminal";
		jaws.context.lineWidth = 5;
		jaws.context.fillStyle = "black" ;
		jaws.context.strokeStyle =  "rgba(200,200,200,0.0)";
		jaws.context.fillText("最高分:"+GameSettings.bestScore, GameSettings.screen_width/3, GameSettings.screen_heigth*2/5);
		player.draw();
		bg.drawFront();
		jaws.context.font = "bold 10pt terminal";
		jaws.context.lineWidth = 5;
		jaws.context.fillStyle = "black" ;
		jaws.context.strokeStyle =  "rgba(200,200,200,0.0)";
		jaws.context.fillText("fps:"+jaws.game_loop.fps, 0, 10);
		//console.log("FPS",jaws.game_loop.fps);
	};
}