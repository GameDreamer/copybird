function Player(){
	var sprite_sheet = new jaws.SpriteSheet({image: "player.png", frame_size: [50,50] });
	var player = new jaws.Sprite({image: sprite_sheet.frames[0], x: GameSettings.screen_width/5, y: GameSettings.screen_heigth/2, scale: GameSettings.scale, anchor: "center"});
	player.nextFace = function(){};
	return player;
}
