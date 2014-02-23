function Player(x,y,scale){
	var sprite_sheet = new jaws.SpriteSheet({image: "player.png", frame_size: [50,50] })
	,anim = new jaws.Animation({sprite_sheet: "player.png",frame_size: [50,50], frame_duration: 1000,loop:true})
	,jump_speed = -8
	,speed = jump_speed
	,player = new jaws.Sprite({image: sprite_sheet.frames[0], x: x, y: y, scale: scale, anchor: "center"})
	,die = false
	,isHappy = false;
	var jump_sound,die_sound;
	/**
	跳跃
	*/
	player.jump = function(){
		if(!die){
			speed = jump_speed;
			//playSound("jump.*");
		}
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
		//如果死亡，直接return
		if(die){
			player.face_6();
			return;
		}
		//判断表情
		if(isHappy){
			player.face_2();
		}else if(speed>=0 && speed<(-jump_speed)){
			player.face_3();
		}else if(speed>=(-jump_speed)){
			player.face_5();
		}else{
			player.face_4();
		}
		speed+=GameSettings.gravity;
		player.move(0, speed);
	};
	player.stop = function(){
		speed = 0;
	};
	player.die = function(){
		die = true;
		player.face_6();
		playSound("die.*");
	};
	player.isDied = function(){
		return die;
	};
	player.happy = function(ms){
		isHappy = true;
		playSound("score.*");
		setTimeout(function(){isHappy=false;},ms|500);
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
