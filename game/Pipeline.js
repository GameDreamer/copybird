/*
 * 管道类 
 * 通过实例化此类生成管道精灵
 * 用法 var Pipeline001 = new Pipeline(100,100);
 */
var Pipeline = function(options){
	var _pipeline = new jaws.Sprite({image: "guangdao.png", x: options.x, y:options.y, scale: GameSettings.scale});
	_pipeline.update = function(speed){
		this.x = this.x-speed;
	};
	_pipeline.juded = false;
	return _pipeline;
}


