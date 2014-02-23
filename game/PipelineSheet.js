/*
 * 管道类 
 * 通过实例化此类生成管道精灵
 * 用法 var Pipeline001 = new Pipeline(100,100);
 * options 接收一个Object
 * options.pipelineXSpacing //管道固定横向间距 350 required
 * options.startX //管道开始横坐标 500 required
 * options.scoreline //管道分数线横坐标 100 required
 * options.speed //管道移动速度 5
 * options.callback //当管道划过分数线横坐标时调用回调函数 callback() 
 */
var PipelineSheet = function(options){
	var _pipelineSheet = new Array();
	//管道图片宽度
	var pipelineImageWidth = 100;
	//管道图片宽度
	var pipelineImageHeight = 500;
	//管道画布宽度
	var pipelineCanvasWidth = pipelineImageWidth*GameSettings.scale;
	//管道画布宽度
	var pipelineCanvasHeight = pipelineImageHeight*GameSettings.scale;
	//管道移动速度
	var speed = options.speed;
	//管道最大高度
	var maxHeight = -50;
	//管道最小高度
	var minHeight = -250;
	//管道上下间距
	var pipelineYSpacing = 150;
	//管道固定横向间距
	var pipelineXSpacing = options.pipelineXSpacing;
	//分数线
	var scoreline = options.scoreline;
	//管道开始横坐标
	var startX = options.startX;
	//管道组开始点
	var startPoint = {x:startX,y:randHeight()};
	var endPoint = {x:startX+pipelineXSpacing,y:randHeight()};
	function nextPoint(index){
		startPoint.x
	}
	function randHeight(){
		return parseInt(Math.random()*(minHeight-maxHeight+1)+maxHeight); 
	}
	_pipelineSheet[0] = new Pipeline({x:startPoint.x,y:startPoint.y});
	_pipelineSheet[1] = new Pipeline({x:startPoint.x,y:startPoint.y+pipelineCanvasHeight+pipelineYSpacing});
	_pipelineSheet[2] = new Pipeline({x:endPoint.x,y:endPoint.y});
	_pipelineSheet[3] = new Pipeline({x:endPoint.x,y:endPoint.y+pipelineCanvasHeight+pipelineYSpacing});

	_pipelineSheet.update = function(){
		for(var index=0; index<_pipelineSheet.length; index++){
			var pipeline = _pipelineSheet[index];
			if(!pipeline.juded){
				if(pipeline.x<scoreline){
					if(index%2==0){
						//document.getElementById("ff").innerHTML += pipeline.juded+"/n";
						pipeline.juded = true;
						if(options.callback){
							options.callback();
						}
					}
				}
			}
			if(pipeline.x<=(pipelineCanvasWidth*-1)){
				pipeline.juded = false;
				if(index == 0||index==1){
					pipeline.x = _pipelineSheet[2].x+pipelineXSpacing;
				}
				if(index == 2||index==3){
					pipeline.x = _pipelineSheet[0].x+pipelineXSpacing;
				}
				if(index%2==0){
					pipeline.y = randHeight();
					_pipelineSheet[index+1].y = pipeline.y+pipelineCanvasHeight+pipelineYSpacing;
				}
			}
			_pipelineSheet[index].update(speed);
		}
	}
	_pipelineSheet.draw = function(){
		for(var index=0; index<_pipelineSheet.length; index++){
			_pipelineSheet[index].draw();
		}
	}

	return _pipelineSheet;
}


