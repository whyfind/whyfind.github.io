function $$(id){
	return document.getElementById(id);
}

//获取当前时间并显示在页面上
function getCurTime(){
	var dt=new Date();
	var strHTML="当前时间是";
	strHTML+=RuleTime(dt.getHours(),2)+":"+
			 RuleTime(dt.getMinutes(),2)+":"+
			 RuleTime(dt.getSeconds(),2);
	$$("time").value=strHTML;
}

//转换时间格式
function RuleTime(num,n){
	var len=num.toString().length;
	while(len<n){
		num="0"+num;
		len++;
	}
	return num;
}

//定时执行
setInterval(getCurTime,1000);

//window.applicationCache.update(); //手动更新缓存的方法

//自定义页面加载时调用的函数
function load(){
	window.applicationCache.addEventListener("updateready",function(){
		$$("pStatue").style.display="block";
		$$("pStatue").innerHTML="正在触发updateready事件...";
		//window.applicationCache.swapCache();//更新本地缓存		
		location.reload();
	});
}

//检测在线状态
function line(){
	if(navigator,navigator.onLine){
		$$("pStatue").style.display="block";
		$$("pStatue").innerHTML="在线";
	}else{
		$$("pStatue").style.display="block";
		$$("pStatue").innerHTML="离线";
	}
}













