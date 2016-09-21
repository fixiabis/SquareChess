var Turn=1,sym="",sqr="",cnt="F;B;R;L;FR;FL;BR;BL",History
var brd={"sym":"","ara":"","set":""},rul={"ara":"","shp":""}
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
		if(Instr(cd[b],"n")>=0){
			if(Controls(Crd(cd[b],crd))&&Controls(Crd(cd[b],crd)).value==""){check=true}else{check=false;break}
		}else if(Instr(cd[b],"y")>=0){
			if(Controls(Crd(cd[b],crd))&&Controls(Crd(cd[b],crd)).value!=""){check=true}else{check=false;break}
		}else{
			if(Controls(Crd(cd[b],crd))&&Controls(Crd(cd[b],crd)).value==sqr){check=true}else{check=false;break}
		}
	}if(check==true)return check
}return check
}//連線協定
function Rul(){var OA=0,XA=0,PA=0,NA=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){var CkO=0,CkX=0,C=Chr(cd1)+cd2
			sqr="O";if(Cnt(cnt,C)==true)CkO=1
			sqr="X";if(Cnt(cnt,C)==true)CkX=1
			if(Controls(C).value==""){if(CkO==1)OA++;if(CkX==1)XA++;if(CkO==1&&CkX==1)PA++;if(CkO==0&&CkX==0)NA++}
		}
	}Rua(rul.ara);Rus(rul.shp)
	if(Turn>2){
		if(OA==0&&XA==0){Res("雙方無法設置符號，平手")}
		else if(PA==0&&NA==0&&XA==OA){Res("雙方區域相等，平手")}
		else if(OA==0){Res("O方無法設置符號，X方獲勝")}
		else if(PA==0&&NA==0&&XA>OA){Res("O方區域不足，X方獲勝")}
		else if(Turn%2==0){if(XA==0){Res("X方無法設置符號，O方獲勝")}else if(PA==0&&NA==0&&OA>XA){Res("X方區域不足，O方獲勝")}}
	}Wtr()
}//規則判別
function Res(msg){alert(msg);Cln()}//輸出結果
function Cln(){Sym(brd.sym);Ara(brd.ara);Brd(brd.set);Turn=1;Menu(false);History.length=0}//清除棋盤
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
		case"brd.sym":res=prompt("變更棋盤符號",brd.sym);if(res!=null)brd.sym=res;break
		case"brd.ara":res=prompt("變更棋盤區域",brd.ara);if(res!=null)brd.ara=res;break
		case"brd.set":res=prompt("變更棋盤狀態",brd.set);if(res!=null)brd.set=res;break
		case"rul.ara":res=prompt("變更區域規則",rul.ara);if(res!=null)rul.ara=res;break
		case"rul.shp":res=prompt("變更形狀規則",rul.shp);if(res!=null)rul.shp=res;break
		default:alert("'"+cmd[i]+"'指令不存在")
	}
}
}//指令輸入
function Sym(ord){var s=0;ord=Split(ord,"")
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			Controls(Chr(cd1)+cd2).style.color="black"
			Controls(Chr(cd1)+cd2).style.backgroundColor="white"
			switch(ord[s]){
				case"0":Controls(Chr(cd1)+cd2).value="O";break
				case"1":Controls(Chr(cd1)+cd2).value="X";break
				default:Controls(Chr(cd1)+cd2).value=""
			}s++
		}
	}
}//讀取符號
function Ara(ord){var s=0;ord=Split(ord,"")
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(s<ord.length)Sqr(Data["Ara"][ord[s]][0],Data["Ara"][ord[s]][1],Data["Ara"][ord[s]][2],Chr(cd1)+cd2);s++
	}
}
}//讀取區域
function Rua(ord){ord=Split(ord,";")
for(a=0;a<ord.length;a++){var cd=Split(ord[a],","),check=false,rs=""
	for(b=0;b<cd.length;b++){
		switch(cd[b].length){
			case 2:
				switch(cd[b]){
					case"ow":rs="依照區域規則，O獲勝";break
					case"xw":rs="依照區域規則，X獲勝";break
                	default:{
                	    for(ab=65;ab<92;ab++){var S=["O","X"]
                	        for(n=0;n<S.length;n++){
                				if(cd[b]==Chr(ab)+S[n]){
                					for(cd1=65;cd1<74;cd1++){
                						for(cd2=1;cd2<10;cd2++){
                							if(Controls(Chr(cd1)+cd2).style.backgroundColor==Data["Ara"][Chr(ab)][2]&&Controls(Chr(cd1)+cd2).value==S[n])check=true
                						}
                					}
                				}
                			}
                		};break
                	}
				};break
			case 3:
			    if(Controls(Mid(cd[b],0,2)))if(Controls(Mid(cd[b],0,2)).value==Mid(cd[b],2,1)){check=true}else{check=false;b=cd.length}break
		}
	}if(check==true){Res(rs);break}
}
}//區域規則
function Rus(ord){var check=false;ord=Split(ord,";"),rs=""
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(Controls(Chr(cd1)+cd2).value!=""&&ord!=""){rs=Controls(Chr(cd1)+cd2).value
			for(a=0;a<ord.length;a++){var cd=Split(ord[a],",")
				for(b=0;b<cd.length;b++){
					if(Controls(Crd(cd[b],Chr(cd1)+cd2)))if(Controls(Crd(cd[b],Chr(cd1)+cd2)).value==rs){check=true}else{check=false}
					if(check==false)break
				}if(check==true)Res(rs+"方完成指定形狀，"+rs+"方獲勝")
			}
		}
	}
}
}//形狀規則
function Rcd(){return Chr(Val(Rnd()*9)+65)+Val(Rnd()*9+1)}//隨機座標
function Brd(ord){
	for(n=0;n<100;n++){
	    for(ab=65;ab<92;ab++){
    		if(Instr(ord,"RA:"+Chr(ab)+"<"+n+">")>=0){
    			for(i=0;i<n;i++){
    				Sqr(Data["Ara"][Chr(ab)][0],Data["Ara"][Chr(ab)][1],Data["Ara"][Chr(ab)][2],Rcd())
    			}
    		}
	    }
	}
}//棋盤變更