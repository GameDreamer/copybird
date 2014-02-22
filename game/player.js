function Player(x,y,scale){
	var sprite_sheet = new jaws.SpriteSheet({image: "player.png", frame_size: [50,50] })
	,anim = new jaws.Animation({sprite_sheet: "player.png",frame_size: [50,50], frame_duration: 1000,loop:true})
	,jump_speed = -10
	,speed = jump_speed
	,player = new jaws.Sprite({image: sprite_sheet.frames[0], x: x, y: y, scale: scale, anchor: "center"});
	player.die = false;
	/**
	跳跃
	*/
	player.jump = function(){
		speed = jump_speed;
	};
	/**
	播放暴走脸
	*/
	player.playFace = function(){
		player.setImage(anim.next());
	};
	/**
	更新
	*/
	player.update = function(){
		if(player.die){
			player.face_6();
			return;
		}
		if(speed>=0 && speed<(-jump_speed)){
			player.face_3();
		}else if(speed>=(-jump_speed)){
			player.face_5();
		}else{
			player.face_4();
		}
		speed+=GameSettings.gravity;
		player.move(0, speed);
		if(player.y<0){
			player.setY(0);
			speed = 0;
			return;
		}else if(player.y>GameSettings.floor){
			player.setY(GameSettings.floor);
			player.die = true;
			speed = 0;
			return;
		}
		
	};
	/**
	player 图片 切换
	*/
	player.face_0 = function(){
		player.setImage(sprite_sheet.frames[0]);
	}
	player.face_1 = function(){
		player.setImage(sprite_sheet.frames[1]);
	}
	player.face_2 = function(){
		player.setImage(sprite_sheet.frames[2]);
	}
	player.face_3 = function(){
		player.setImage(sprite_sheet.frames[3]);
	}
	player.face_4 = function(){
		player.setImage(sprite_sheet.frames[4]);
	}
	player.face_5 = function(){
		player.setImage(sprite_sheet.frames[5]);
	}
	player.face_6 = function(){
		player.setImage(sprite_sheet.frames[6]);
	}
	player.face_7 = function(){
		player.setImage(sprite_sheet.frames[7]);
	}
	return player;
}
