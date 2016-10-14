function create(){
var Board="<table border='0' cellpadding='0' cellspacing='0' align='center'>"
for(cd2=1;cd2<10;cd2++){Board+="<tr>"
	for(cd1=65;cd1<74;cd1++){
		Board+="<td><input type='button' value='' id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' class='bt' /></td>"
	}Board+="</tr>"
}Board+="</table>";Controls("Board").innerHTML=Board;resize()
}//棋盤建立
function resize(){
var size=Val(document.body.scrollWidth/100)*10
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		Controls(Chr(cd1)+cd2).style.fontSize=size-10+"px"
		Controls(Chr(cd1)+cd2).style.height=size+"px"
		Controls(Chr(cd1)+cd2).style.width=size+"px"
	}
}
for(i=1;i<5;i++){
	if(Controls("t"+i)){Controls("t"+i).style.fontSize=size-10+"px";Controls("t"+i).style.height=size+"px"}
	if(Controls("c"+i)){Controls("c"+i).style.fontSize=size-10+"px";Controls("c"+i).style.width=size*9+"px"}
	if(Controls("h"+i)){Controls("h"+i).style.fontSize=size-10+"px";Controls("h"+i).style.width=size*4.5+"px"}
}
}//重設大小