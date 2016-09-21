var Turn=1,sym="",sqr="",crd8=["F","B","R","L","FR","FL","BR","BL"],cnt="F;B;R;L;FR;FL;BR;BL",History,brd=""
function Set(crd){sqr=""
	if(Turn%2==0){sym="X"}else{sym="O"};if(Turn<3){sqr=""}else{sqr=sym}
	if(Cnt(cnt,crd)==true&&Controls(crd).value==""){
		Turn++;Controls(crd).value=sym
	}else if(Controls(crd).value!=""){
		alert(crd+"連線失敗，原因:已有符號存在")
	}else if(Cnt(cnt,crd)==false){
		alert(crd+"連線失敗，原因:連線協議不成立")
	}Rul()
}//設置符號
function Sqr(sym,fc,bc,crd){
	Controls(crd).value=sym
	Controls(crd).style.backgroundColor=bc
	Controls(crd).style.color=fc
}//變更格子
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
			if(Controls(Crd(cd[b],crd))&&Controls(Crd(cd[b],crd)).value==sqr){check=true}else{check=false}
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
	}Wtr()
}//規則判別
function Res(msg){alert(msg);Cln()}//輸出結果
function Cln(){Sym(brd);Turn=1;Menu(false);History.length=0}//清除棋盤
function Wtr(){
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			History[Chr(cd1)+cd2+"v"+Turn]=Controls(Chr(cd1)+cd2).value
			History[Chr(cd1)+cd2+"f"+Turn]=Controls(Chr(cd1)+cd2).style.color
			History[Chr(cd1)+cd2+"b"+Turn]=Controls(Chr(cd1)+cd2).style.backgroundColor
		}
	}
}//寫入過程
function Rdr(turn){
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			Controls(Chr(cd1)+cd2).value=History[Chr(cd1)+cd2+"v"+turn]
			Controls(Chr(cd1)+cd2).style.color=History[Chr(cd1)+cd2+"f"+turn]
			Controls(Chr(cd1)+cd2).style.backgroundColor=History[Chr(cd1)+cd2+"b"+turn]
		}
	}
}//輸出過程
function Cmd(){var cmd=Split(prompt("輸入你要更改的指令，以;隔開批次輸入"),";")
for(i=0;i<cmd.length;i++){var res
	switch(cmd[i]){
		case"cnt":res=prompt("變更連線協定",cnt);if(res!=null)cnt=res;break
		case"brd":res=prompt("變更棋盤內容",brd);if(res!=null)brd=res;break
		default:alert("'"+cmd[i]+"'指令不存在")
	}
}
}//指令輸入
function Sym(ord){var s=0;ord=Split(ord,"")
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			switch(ord[s]){
				case"0":Controls(Chr(cd1)+cd2).value="O";break
				case"1":Controls(Chr(cd1)+cd2).value="X";break
				default:Controls(Chr(cd1)+cd2).value=""
			}s++
		}
	}
}//讀取符號