﻿var Turn=1,Sym="",Sqr="",crd8=["F","B","R","L","FR","FL","BR","BL"],cnt="F;B;R;L;FR;FL;BR;BL"
function Set(crd){Sqr=""
	if(Turn%2==0){Sym="X"}else{Sym="O"};if(Turn<3){Sqr=""}else{Sqr=Sym}
	if(Cnt(cnt,crd)==true&&Controls(crd).value==""){
		Turn++;Controls(crd).value=Sym
	}else if(Controls(crd).value!=""){
		alert("連線失敗，原因:已有符號存在")
	}else if(Cnt(cnt,crd)==false){
		alert("連線失敗，原因:連線協議不成立")
	}Rul()
}//設置符號
function Crd(arw,crd){arw=Split(arw,"")
var X=0,Y=0
	for(var i=0;i<arw.length;i++){
		switch(arw[i]){
			case "F":Y--;break
			case "B":Y++;break
			case "R":X++;break
			case "L":X--;break
		}
	}
	return Chr(Asc(crd)+X)+(Val(Mid(crd,1,1))+Y)
}//座標定位
function Cnt(ord,crd){var check=false;ord=Split(ord,";")
for(a=0;a<ord.length;a++){var cd=Split(ord[a],",")
	for(b=0;b<cd.length;b++){
		if(Instr(cd[b],"s")>=0){
			if(Controls(Crd(cd[b],crd))&&Controls(Crd(cd[b],crd)).value==""){check=true}else{check=false}
		}else{
			if(Controls(Crd(cd[b],crd))&&Controls(Crd(cd[b],crd)).value==Sqr){check=true}else{check=false}
		}
		if(check==true)return check
	}
}return check
}//連線協定
function Rul(){var OA=0,XA=0,PA=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){var CkO=0,CkX=0,CkP=0,C=Chr(cd1)+cd2
			for(n=0;n<crd8.length;n++){
				if(Controls(Crd(crd8[n],C))){
					if(Controls(Crd(crd8[n],C)).value=="O"){
						CkO=1
					}else if(Controls(Crd(crd8[n],C)).value=="X"){
						CkX=1
					}
				}
			}if(Controls(C).value==""){if(CkO==1)OA++;if(CkX==1)XA++;if(CkO==1&&CkX==1)PA++}
		}
	}
	if(Turn>2){
		if(OA==0&&XA==0){
			Res("雙方無法設置符號，平手")
		}else if(PA==0&&XA>OA||OA==0){
			Res("O方無法設置符號，X方獲勝")
		}else if(Turn%2==0){
			if(PA==0&&OA>XA||XA==0)Res("X方無法設置符號，O方獲勝")
		}
	}
}//規則判別
function Res(msg){alert(msg);Cln()}//輸出結果
function Cln(){
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			Controls(Chr(cd1)+cd2).value=""
		}
	}Turn=1
}//清除棋盤