function BackGround(){
	var backGround = {};
	var parallax_back = new jaws.Parallax({repeat_x: true,scale:GameSettings.scale});
	var parallax_front = new jaws.Parallax({repeat_x: true,scale:GameSettings.scale});
	parallax_back.addLayer({image: "bg1.png", damping: 100,y: 0});
	parallax_back.addLayer({image: "parallax2.png", damping: 5,y: 600});
	parallax_front.addLayer({image: "parallax1.png", damping: 0.5,y: 700});
  
	backGround.update = function() {
		parallax_back.camera_x += 1;
		parallax_front.camera_x +=1;
	};

	backGround.drawBack = function() {
		parallax_back.draw();
	};
	backGround.drawFront = function(){
		parallax_front.draw();
	}
	return backGround;
}