function GameState(){
	var bg,player;
	/* Called once. Put your one-time initializing here. */
	this.setup = function() {
		bg = BackGround();
		player = Player(GameSettings.screen_width/3,GameSettings.screen_heigth/3,GameSettings.scale);
		//添加事件监听
		jaws.on_keydown(["space","left_mouse_button","center_mouse_button", "right_mouse_button"], player.jump);
	};
  
	/* Called each gametick. Put your gamelogic here. */
	this.update = function() {
		bg.update();
		player.update();
		if(player.die){
			setTimeout(function(){jaws.switchGameState(StartState,{fps:GameSettings.fps})},1000);
		}
	};

	/* Called each gametick after update(). Put your drawing here. */
	this.draw = function() {
		bg.drawBack();
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