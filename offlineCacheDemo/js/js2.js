function $$(id){
	return document.getElementById(id);
}

//��ȡ��ǰʱ�䲢��ʾ��ҳ����
function getCurTime(){
	var dt=new Date();
	var strHTML="��ǰʱ����";
	strHTML+=RuleTime(dt.getHours(),2)+":"+
			 RuleTime(dt.getMinutes(),2)+":"+
			 RuleTime(dt.getSeconds(),2);
	$$("time").value=strHTML;
}

//ת��ʱ���ʽ
function RuleTime(num,n){
	var len=num.toString().length;
	while(len<n){
		num="0"+num;
		len++;
	}
	return num;
}

//��ʱִ��
setInterval(getCurTime,1000);

//window.applicationCache.update(); //�ֶ����»���ķ���

//�Զ���ҳ�����ʱ���õĺ���
function load(){
	window.applicationCache.addEventListener("updateready",function(){
		$$("pStatue").style.display="block";
		$$("pStatue").innerHTML="���ڴ���updateready�¼�...";
		//window.applicationCache.swapCache();//���±��ػ���		
		location.reload();
	});
}

//�������״̬
function line(){
	if(navigator,navigator.onLine){
		$$("pStatue").style.display="block";
		$$("pStatue").innerHTML="����";
	}else{
		$$("pStatue").style.display="block";
		$$("pStatue").innerHTML="����";
	}
}













