function count(a){
	forms.display.value=forms.display.value+a;
}

function del(){
	var store=forms.display.value;
	forms.display.value=store.substring(0,store.length-1);
}

function ac(){
	forms.display.value="";
}

function equal(){
	forms.display.value=eval(forms.display.value);
}

function sqrt(){
	var number=forms.display.value;
	forms.display.value=Math.sqrt(number);
}

function per(){
	var percentage=forms.display.value;
	var temp = eval(percentage);
	var anpercent=temp*100+"%";
	forms.display.value=anpercent;
}

function fact(){
	var n=forms.display.value;
	var answer=1;
	if(n==0 || n==1){
		answer=1;
	}
	else{
		for(var i=n;i>=1;i--){
			answer=answer*i;
		}
	}
	forms.display.value=answer;
}

function rad(){
	 var radian=forms.display.value;
	 var radia=(radian*180)/Math.PI;
	 forms.display.value=radia;
}

function square(){
	var number=forms.display.value;
	var square=Math.pow(number,2);
	forms.display.value=square;
}

function logarithm(){
	var number=forms.display.value;
	var log=Math.log10(number);
	forms.display.value=log;
}

function lan(){
	var number=forms.display.value;
	var ln=Math.log(number);
	forms.display.value=ln;
}

function pi(){
	var number=forms.display.value;
	var paii=number*Math.PI;
	forms.display.value=paii;
}

function sine(){
	var trigonometry=forms.display.value;
	var result=Math.sin(trigonometry);
	forms.display.value=result;
}

function cos(){
	var trigonometry=forms.display.value;
	var result=Math.cos(trigonometry);
	forms.display.value=result;
}

function tan(){
	var trigonometry=forms.display.value;
	var result=Math.tan(trigonometry);
	forms.display.value=result;
}

function deg(){
	var degree=forms.display.value;
	var rad=(degree*Math.PI)/180;
	forms.display.value=rad;
}