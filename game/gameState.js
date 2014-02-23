function GameState(){
	var bg,player,pipelineSheet;
	var switchState = false;
	var player_x=GameSettings.screen_width/3,player_y=GameSettings.screen_heigth/3,score=0;
	/* Called once. Put your one-time initializing here. */
	this.setup = function() {
		bg = BackGround();
		player = Player(player_x,player_y,GameSettings.scale);
		//添加事件监听
		jaws.on_keydown(["space","left_mouse_button","center_mouse_button", "right_mouse_button"], player.jump);
		pipelineSheet = new PipelineSheet({
			pipelineXSpacing:350, //管道固定横向间距 350
			startX:500, //管道开始横坐标 500
			scoreline:player_x, //管道分数线横坐标 100
			speed:2,
			callback: function(){
				score++;
				player.happy();
			} //当管道划过分数线横坐标时调用回调函数 callback()
		});
		loopBGM("bgm1.*");
	};
  
	/* Called each gametick. Put your gamelogic here. */
	this.update = function() {
		if(switchState){
			jaws.switchGameState(StartState,{fps:GameSettings.fps});
			return;
		}
		if(player.isDied()){
			stopBGM();
			setTimeout(function(){switchState = true;},1000);
			return;
		}
		bg.update();
		pipelineSheet.update();
		player.update();
		jaws.collideOneWithMany(player, pipelineSheet,function(player,obj){
			console.log(obj);
			player.die();
			saveScore();
		});
		if(player.y<0){
			player.stop();
			player.setY(0);
		}else if(player.y>GameSettings.floor){
			player.die();
			saveScore();
		}
		
	};
	function saveScore(){
		if(GameSettings.bestScore<score){
			GameSettings.bestScore = score;
		}
	}
	/* Called each gametick after update(). Put your drawing here. */
	this.draw = function() {
		bg.drawBack();
		pipelineSheet.draw();
		player.draw();
		bg.drawFront();
		jaws.context.font = "bold 10pt terminal";
		jaws.context.lineWidth = 5;
		jaws.context.fillStyle = "black" ;
		jaws.context.strokeStyle =  "rgba(200,200,200,0.0)";
		jaws.context.fillText("fps:"+jaws.game_loop.fps, 0, 10);
		jaws.context.font = "bold 15pt terminal";
		jaws.context.lineWidth = 8;
		jaws.context.fillStyle = "white" ;
		jaws.context.strokeStyle =  "rgba(200,200,200,0.0)";
		jaws.context.fillText("分数:"+score, GameSettings.screen_width-100,20);
		//console.log("FPS",jaws.game_loop.fps);
	};
}