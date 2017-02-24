(function drawProcess() { 
	var arr = {
		html:{name:"HTML",val:"80%"},
		css:{name:"CSS",val:"75%"},
		js:{name:"JS",val:"60%"}
	} 
    $('canvas.process').each(function() {  
        var text = $(this).text();  
        var process = arr[text].val.substring(0, arr[text].val.length-1);  
                  
        // 一个canvas标签  
        var canvas = this;  
        var context = canvas.getContext('2d');  
               
       

        window.requestAnimationFrame = window.requestAnimationFrame 
							        || window.mozRequestAnimationFrame 
							        || window.webkitRequestAnimationFrame 
							        || window.msRequestAnimationFrame;

		var pri = -0.5 * Math.PI ;
		function req(){
			pri = pri + 0.03* Math.PI ;

			if(pri > Math.PI * (2 * process / 100 - 0.5)){
				pri = Math.PI * (2 * process / 100 - 0.5);
			}
			context.clearRect(0, 0, 140, 140);
			
			// 画进度  
	        context.beginPath();  
	        // 画扇形的时候这步很重要,画笔不在圆心画出来的不是扇形  
	        context.moveTo(70, 70);  
	        // 跟上面的圆唯一的区别在这里,不画满圆,画个扇形  
	        context.arc(70, 70, 70, -0.5 * Math.PI ,pri,false);  
	        context.closePath();  
	        context.fillStyle = '#37cb58';  
	        context.fill(); 

	        // 画内部空白  
	        context.beginPath();  
	        context.moveTo(70, 70);  
	        context.arc(70, 70, 62, 0, Math.PI * 2, true);  
	        context.closePath();  
	        context.fillStyle = '#d6a';  
	        context.fill();    

	        if(pri < Math.PI * (2 * process / 100 - 0.5)){
	        	requestAnimationFrame(req);
	        }else{
	        	//在中间写字  
		        context.font = "bold 28px Arial";  
		        context.fillStyle = 'white';  
		        context.textAlign = 'center';  
		        context.textBaseline = 'middle';  
		        context.moveTo(70, 70);  
		        context.fillText(arr[text].val, 75, 54);  
		        context.fillText(arr[text].name, 75, 80); 

	        }
		}
		requestAnimationFrame(req); 
       
    });
})();