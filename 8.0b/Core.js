﻿var Tn=0,
	Dft={Blk:0,Tn:0,Rul:{Lmt:0},Scr:1,QJd:1,Sel:{}},Hst=[],Ara={O:[],X:[],P:[]},MdQ=[],Brd={},Usr={Dir:""},Scr={O:0,X:0,P:0}
	Sqr={S:["O","X",""," "],F:["","blue"],B:["white","lightgray","dimgray","palevioletred","lightsteelblue"]},Rul={}
function Ldr(){
	if(location.search&&Mid(location.search,0,6)=="?mode="){
		var sr=Mid(location.search.replace("%3A",":"),1,location.search.length-1)
		doc.title=sr.split("mode=")[1];MdQ=doc.title.split(":");MdL(0)
	}else{
		var Mod=[
			"Connect","Blocker","Divider","Adapter",
			"Connect:Attack","Adapter:Attack","Connect:Defend",
			"Connect:Scheme","Divider:Scheme","Adapter:Scheme",
			"Divider:Zombie","Connect:Zombie","Adapter:Zombie",
			"Divider:Follow","Connect:Follow","Adapter:Follow",
			"Blocker:ByLine"
		]
		Id("Brd").childNodes[0].childNodes[0].innerHTML="Directing..."
		setTimeout('location="chess.html?mode="+"'+Mod[Math.floor(Rnd()*Mod.length)]+'"',2000)
	}
}//資料取得
function MdL(ord){
	var s=doc.createElement("script");s.src="Shell/"+MdQ[ord]+".js"
	if(MdQ[ord+1])s.onload=function(){MdL(ord+1)}
	else s.onload=function(){Usr.Itf();Brd.Cln();Usr.Itf.Rsz();Usr.Itf.Brd()}
	doc.body.appendChild(s)
}//模式裝載
function Crd(crd,vct){var x=0,y=0;vct=Crd.Vct(vct)
	if(typeof vct=="object"){
		for(var i=0;i<vct.length;i++)vct[i]=Crd(crd,vct[i]);return vct
	}
	for(var i in vct)switch(vct[i]){
		case"F":y--;break
		case"B":y++;break
		case"R":x++;break
		case"L":x--;break
		case"C":x=0;y=0;break
	}return Chr(Asc(crd[0])+x)+Val(Val(crd[1])+y)
}//藉方向輸出座標
Crd.Flt=function(cds,ord){var res=[]
	for(var i=0;i<cds.length;i++){var odr=ord(cds[i])
		if(odr==1)res.push(cds[i]);else if(odr==2)break
	}return res
}//篩選座標
Crd.Vct=function(typ){
	if(Instr(typ,".")>-1)return Crd.Vct(typ.split("."))
	if(typeof typ=="object"){var res=[]
		for(var i=0;i<typ.length;i++)res=res.concat(Crd.Vct(typ[i]));return res
	}
	if(Val(typ[0])&&typ[1]){tp=typ.replace(typ[0],"");var vct="",tp=Crd.Vct(tp)
		if(typeof tp=="object"){
			for(var i=0;i<tp.length;i++)tp[i]=Crd.Vct(typ[0]+tp[i]);return tp
		}
		for(i=0;i<Val(typ[0]);i++)vct+=tp;return vct
	}
	if(Instr(typ,":")>-1){
		var crd=typ.split(":"),
		x=Val(Asc(crd[1][0]))-Val(Asc(crd[0][0]))
		y=Val(Val(crd[1][1]))-Val(Val(crd[0][1]))
		if(x<0)x=Crd.Vct(Math.abs(x)+"L");else if(x!=0)x=Crd.Vct(x+"R");else x="" 
		if(y<0)y=Crd.Vct(Math.abs(y)+"F");else if(y!=0)y=Crd.Vct(y+"B");else y=""
		return x+y
	}
	switch(typ[0]){
		case"8":return"F,B,R,L,FR,FL,BR,BL".split(",")
		case"X":return"FR,FL,BR,BL".split(",")
		case"4":return"F,B,R,L".split(",")
		case"Q":return"FFR,FFL,RRF,LLF,BBR,BBL,RRB,LLB".split(",")
		case"V":
			return Crd.Flt(Crd.Vct("X"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
		case"W":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
		case"Y":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1]+typ[1])>-1)return 1;else return 0})
		case"H":return"R,L".split(",")
		case"I":return"F,B".split(",")
	}return typ
}//藉代碼輸出方向
Brd.Rec=function(brd){var atr=["S","F","B"],rbd="",cds=Brd.Sel("All")
	if(typeof brd=="number"){
		if(Hst[brd]&&Hst[brd].Brd){Tn=brd;return Brd.Rec(Hst[brd].Brd)}else return
	}
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++)for(var i=0;i<3;i++){
		if(brd)Brd[Chr(cd1)+cd2][atr[i]]=Val(brd[Val(((cd1-65)*9+cd2-1)*3+Val(i))])
		else rbd+=Brd[Chr(cd1)+cd2][atr[i]]
	}Brd.Mrk();Usr.Itf.Brd();return rbd
}//讀取/紀錄棋盤代碼
Brd.Qre=function(crd,atr,typ){if(!crd)return
	if(typeof crd=="object")for(var i=0;i<crd.length;i++)Brd.Qre(crd[i],atr,typ)
	else if(typeof atr=="object"&&typeof typ=="object"&&atr.length==typ.length)
		for(var i=0;i<atr.length;i++)Brd.Qre(crd,atr[i],typ[i])
	else if(!typ&&typ!=0)return Brd[crd][atr]+""
	else Brd[crd][atr]=typ
}//棋盤元件屬性取得/變更
Brd.Sel=function(typ,ord){
	if(typeof typ=="string"&&Dft.Sel[typ])return Dft.Sel[typ];Dft.Sel[typ]=[]
	if(typeof typ=="object"){
		for(var i=0;i<typ.length;i++)Dft.Sel[typ]=Dft.Sel[typ].concat(Brd.Sel(typ[i]))
	}
	if(ord)return Crd.Flt(Brd.Sel(typ),ord)
	if(typ=="All"){
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Dft.Sel.All.push(Chr(cd1)+cd2)
	}
	if(Instr(typ,":")>-1){var spt=typ.split(":")
		if(spt[0].length==1&&spt[1].length==1){
			var sml=Asc(spt[0]),big=Asc(spt[1]);if(Asc(spt[0])>big){sml=Asc(spt[1]);big=Asc(spt[0])}
			for(var i=sml;i<big+1;i++)Dft.Sel[typ].push(Chr(i));Dft.Sel[typ]=Brd.Sel(Dft.Sel[typ])
		}else if(spt[0].length==2&&spt[1].length==1||spt[0].length==1&&spt[1].length==2){
			var m=0;if(spt[1].length==2)m=1
			var cd1=spt[m][0],cd2=spt[m][1]
			if(Val(spt[(m+1)%2]))Dft.Sel[typ]=Brd.Sel(spt[m]+"-"+cd1+spt[(m+1)%2])
			else Dft.Sel[typ]=Brd.Sel(spt[m]+"-"+spt[(m+1)%2]+cd2)
		}else{
			var cd1f=Asc(spt[0][0]),cd1l=Asc(spt[1][0]),cd2f=Val(spt[0][1]),cd2l=Val(spt[1][1])
			if(Asc(spt[0][0])>cd1l){cd1f=Asc(spt[1][0]);cd1l=Asc(spt[0][0])}
			if(Val(spt[0][1])>cd2l){cd2f=Val(spt[1][1]);cd2l=Val(spt[0][1])}
			Dft.Sel[typ]=Crd.Flt(Brd.Sel("All"),
				function(ckr){
					var cd1k=Asc(ckr[0]),cd2k=Val(ckr[1])
					if(cd1k>=cd1f&&cd1k<=cd1l&&cd2k>=cd2f&&cd2k<=cd2l)return 1;else return 0
				}
			)
		}
	}
	if(Instr(typ,",")>-1){Dft.Sel[typ]=Dft.Sel[typ].concat(Brd.Sel(typ.split(",")))}
	else if(Instr(typ,"/")>-1){var spt=typ.split("/");Dft.Sel[typ]=Dft.Sel[typ].concat(Crd(spt[0],spt[1]))}
	if(typ.length==1)Dft.Sel[typ]=Crd.Flt(Brd.Sel("All"),function(ckr){if(Instr(ckr,typ)>-1)return 1;else return 0});
	if(typ.length==2&&typeof typ=="string")Dft.Sel[typ]=typ
	return Dft.Sel[typ]
}//輸出棋盤選擇行/列
Brd.Cln=function(msg,sel,tgt){var clc=0;if(!msg)clc=1;else clc=confirm(msg);if(!tgt)tgt=""
	if(clc){if(!sel)sel="All";sel=Brd.Sel(sel);Tn=0;Hst=[];Hst[0]={}
		Brd.Qre(sel,["F","B"],[0,0])
		Brd.Qre(Crd.Flt(sel,function(crd){
			if(Instr(Sqr.S[Brd[crd].S],tgt)>-1)return 1;return 0
		}),"S",2)
		Brd.Qre(Crd.Flt(sel,function(crd){
			return !((Asc(crd[0])+Val(crd[1]))%2)
		}),"B",1)
	}Brd.Cln.Ext();Brd.Adn();Hst[Tn].Brd=Brd.Rec();Usr.Itf.Brd()
}//清除棋盤指定項目
Brd.Adn=function(){var blk=0
	while(blk!=Dft.Blk){var cd1=Val(Rnd()*9)+65,cd2=Val(Rnd()*9+1),clr=Brd.Qre(Chr(cd1)+cd2,"B")
		if(clr==1&&(cd1+cd2)%2==0&&Brd[Chr(cd1)+cd2].S==2){blk++;Brd.Qre(Chr(cd1)+cd2,["S","B"],[3,2])}
	}
}//額外功能
Brd.Mrk=function(){var cds=Brd.Sel("All");Brd.Qre(cds,"O",0);;Brd.Qre(cds,"F",0)
	var clr="dimgray";if(Dft.NxS)clr="slateblue";Id("Brd").childNodes[0].style.backgroundColor=clr
	for(var i=0;i<cds.length;i++){
		if(Dft.NxS||Dft.NnS)Brd[cds[i]].O=0.2;var set=Rul.Lmt(cds[i])
		if(Brd[cds[i]].S!=2||!set&&Dft.NnS||set&&Dft.NxS||!Dft.NxS&&!Dft.NnS)Brd[cds[i]].O=1
	}Brd.Mrk.Ext();if(!Dft.BfS)return;var cds=[]
	for(var i=0;i<2;i++)if(Hst[Tn-i])cds.push(Hst[Tn-i].Crd)
	Brd.Qre(cds,"F",1)
}//輔助標記
Brd.Hst=function(typ,tgt){if(!Hst[i])return "N"
	for(var i=0;i<=Tn;i++)if(Hst[i][typ]==tgt)return i;return "N"
}//紀錄查詢
Brd.Gto=function(crd){var tn
	if(!crd)tn=Val(prompt("輸入欲前往的回合"))
	else tn=Brd.Hst("Crd",crd);if(tn!="N")Brd.Rec(tn)
}
Brd.Rdo=function(crd){
	if(!crd)tn=Tn+1
	else tn=Brd.Hst("Crd",crd)+1;Brd.Rec(tn)
}
Brd.Udo=function(crd){
	if(!crd)tn=Tn-1
	else tn=Brd.Hst("Crd",crd)-1;Brd.Rec(tn)
}
Brd.Lst=function(){var tn=0
	while(!Hst[Tn].Brd)tn+=1;return tn
}//目前的最後一回合
Usr.Set=function(crd){
	if(!Rul.Lmt(crd)){Brd[crd].S=Tn%2;Tn++;Hst[Tn]={}
		Hst[Tn].Crd=crd;Hst[Tn].Brd=Brd.Rec()
		var win=Rul.Jdg();if(win)Brd.Cln(win)
	}
}//設置符號
Usr.Itf=function(){
	var brd="<table border='0' cellpadding='0' cellspacing='0' style='background-color:dimgray'>"
	for(cd2=1;cd2<10;cd2++){brd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			brd+="<td id='"+Chr(cd1)+cd2+"' onclick='Usr.Set(this.id)' ondblclick='Brd.Udo(this.id)' class='bt'></td>"
			Brd[Chr(cd1)+cd2]={S:2,F:0,B:0,O:1}
		}brd+="</tr>"
	}Id("Brd").innerHTML=brd+"</table><div id='UC'><table><tr><td class='bt' onClick='Usr.Udo()' onContextMenu='Usr.Gto()' ondoubleclick='Brd.Rec(Brd.Lst())'>Undo</td><td class='bt' onclick='Usr.Cln()' onContextMenu='Usr.Adn()'>Clean</td></tr></table></div>"
	Id("Brd").style.animation="down 2s"
}//建立介面
Usr.Itf.Brd=function(){var cds=Brd.Sel("All")
	for(i=0;i<cds.length;i++){
		Id(cds[i]).style.backgroundColor=Sqr.B[Brd[cds[i]].B]
		Id(cds[i]).innerHTML=Sqr.S[Brd[cds[i]].S]
		Id(cds[i]).style.color=Sqr.F[Brd[cds[i]].F]
		Id(cds[i]).style.opacity=Brd[cds[i]].O
	}
}//棋盤介面
Usr.Itf.Rsz=function(){
	Id("Brd").style.height="0px";Id("UC").style.display="none"
	var sz=doc.body.clientHeight,C=1
	if(doc.body.clientWidth<sz){sz=doc.body.clientWidth;Id("UC").style.display="inline";C=0}
	sz=Math.floor(sz/9)
	for(i=0;i<83;i++){if(!Class("bt")[i])break
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		Class("bt")[i].style.lineHeight=sz+"px"
	}
	for(i=81;i<83;i++){
		if(Class("bt")[i])Class("bt")[i].style.width=sz*4.5+"px"
		else Class("bt")[i-1].style.width=sz*9+"px"
	}
	Id("Brd").style.height=sz*9+"px";Id("UC").style.width=sz*9+"px"
	Id("Brd").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(C)Id("Brd").style.marginTop=(doc.body.clientHeight-(sz*9))/2+"px"
	Id("UC").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(Val(Split(Id("Brd").style.marginLeft,"px")[0])<40){
		Id("UCM").style.display="inline"
		for(i=0;i<3;i++)Class("list")[i].style.width=doc.body.clientWidth/3+"px"
	}else Id("UCM").style.display="none"
}//介面大小
Usr.Itf.Mnu=function(cls,arw){
	if(!cls)if(arw){
		Id("UCL").style.left="";Id("UCL").style.right="0px"
	}else{
		Id("UCL").style.right="";Id("UCL").style.left="0px"
	}var sz=0;if(!cls)sz=160;Id("UCL").style.width=sz+"px"
}//使用者選單
Usr.MsO=function(e){var cls=0,arw=0
	if(e.pageX<Split(Id("Brd").style.marginLeft,"px")[0])arw=0
	else if(e.pageX>Val(Id("Brd").style.marginLeft.split("px")[0])+Id("Brd").childNodes[0].clientWidth)arw=1
	else cls=1;Usr.Itf.Mnu(cls,arw)
}//使用者滑鼠移動
Usr.KDw=function(e){var ctl=e.ctrlKey,key=e.which,sft=e.shiftKey
	if(!Id("Brd").childNodes[0]||Id("Brd").childNodes[0].tagName!="TABLE")return
	switch(key){
		case  8:Brd.Udo();break
		case 13:Brd.Rdo();break
		case 18:Usr.Adn();break
		case 35:Usr.Lst();break
		case 37:if(ctl){e.preventDefault();Brd.Udo()}else if(Instr(Usr.Dir,"L")<0)Usr.Dir+="L";break
		case 38:if(ctl)Usr.Cln();else if(Instr(Usr.Dir,"F")<0)Usr.Dir+="F";break
		case 39:if(ctl){e.preventDefault();Usr.Rdo()}else if(Instr(Usr.Dir,"R")<0)Usr.Dir+="R";break
		case 40:if(ctl)Brd.Cln();else if(Instr(Usr.Dir,"B")<0)Usr.Dir+="B";break
		case 46:if(sft)Brd.Cln();else Usr.Cln();break
		case 89:if(ctl)Brd.Rdo();break
		case 90:if(ctl)Brd.Udo();break
		case 72:if(ctl){e.preventDefault();Brd.Gto();break}
		default:
			if(key>64&&key<74){
				if(sft)Brd.Gto(Chr(key)+prompt("輸入座標(列)"))
				else if(!ctl)Set(Chr(key)+prompt("輸入座標(列)"))
			}
	}
}//使用者鍵盤按下
Usr.KUp=function(e){
	if(e.which<41&&e.which>36&&Usr.Dir!=""){Usr.Set(Crd(Hst[Tn].Crd,Usr.Dir));Usr.Dir=""}
}//使用者鍵盤放開
Usr.Adn=function(){
	var blk=Val(prompt("增加障礙?(最大值:27)",Dft.Blk))
	if(typeof blk=="number"){if(blk<0)blk=0;if(blk>27)blk=27;Dft.Blk=blk}
	Usr.Adn.Ext();if(Tn==Dft.Tn)Brd.Cln();else alert("所有功能會在下ㄧ場生效")
}//額外功能
Usr.Tol=function(){
	Dft.BfS=confirm("將上回合設置的符號標示出來?");Dft.NxS=confirm("強調所有能設置的區域")
	if(!Dft.NxS)Dft.NnS=confirm("強調所有不能設置的區域");else Dft.NnS=0;Usr.Tol.Ext();Brd.Mrk();Usr.Itf.Brd()
}//使用者工具
Usr.Cln=function(){
	if(Tn>2)Brd.Cln("是否清除棋盤?");else Brd.Cln()
}//使用者清除棋盤
Brd.Cln.Ext=function(){}//擴充棋盤
Rul.Jdg=function(){}//規則判定
Rul.Lmt=function(crd){if(Brd[crd]&&Brd[crd].S!=2)return 1;return Rul.Lmt.Ext(crd,Tn%2)}//規則限制
Rul.Scr=function(ord){if(!ord)ord=">"
	switch(ord){
		case">":
			if(Scr.O>Scr.X)return"O Win"
			if(Scr.X>Scr.O)return"X Win"
		break
		case"=":
			if(Scr.O==Dft.Scr)return"O Win"
			if(Scr.X==Dft.Scr)return"X Win"
		break
	}return"Draw"
}//積分計算
Rul.Cnt=function(){var cds=Brd.Sel("All");Ara={O:[],X:[],P:[]};if(Tn<2)return ""
	for(var i=0;i<2;i++){Ara[Sqr.S[i]].All=[]
		Ara[Sqr.S[i]][0]=Crd.Flt(cds,function(crd){if(i==0)Brd[crd].M=2
			if(!Rul.Lmt.Ext(crd,i)&&Brd[crd].S==2){
				if(i==1&&Brd[crd].M==0)Brd[crd].M=3;else Brd[crd].M=i;return 1
			}return 0
		});Ara[Sqr.S[i]].All=Ara[Sqr.S[i]].All.concat(Ara[Sqr.S[i]][0])
	}
	Ara.P[0]=Crd.Flt(Ara.O[0],function(crd){if(Ara.X[0].indexOf(crd)>-1)return 1;return 0})
	var rot=1
	while(Ara.O[rot-1].length>0||Ara.X[rot-1].length>0){
		for(var i=0;i<2;i++){
			Ara[Sqr.S[i]][rot]=Crd.Flt(cds,function(crd){
				if(Brd[crd].S==2){var cds=Crd(crd,"8")
					for(j=0;j<cds.length;j++)
						if(Ara[Sqr.S[i]][rot-1].indexOf(cds[j])>-1&&Ara[Sqr.S[i]].All.indexOf(crd)<0){
							if(i==1&&Brd[crd].M==0)Brd[crd].M=3;else Brd[crd].M=i;return 1
						}
				}return 0
			})
			for(var j=0;j<Ara[Sqr.S[i]][rot].length;j++){
				if(Ara[Sqr.S[i]].All.indexOf(Ara[Sqr.S[i]][rot][j])<0)Ara[Sqr.S[i]].All.push(Ara[Sqr.S[i]][rot][j])
			}
		}
		Ara.P[rot]=Crd.Flt(Ara.O[rot],function(crd){if(Ara.X[rot].indexOf(crd)>-1)return 1;return 0});rot++
	}Ara.P.All=Crd.Flt(Ara.O.All,function(crd){if(Ara.X.All.indexOf(crd)>-1)return 1;return 0})
	for(var i=0;i<2;i++){
		Ara[Sqr.S[i]].All=Crd.Flt(Ara[Sqr.S[i]].All,function(crd){if(Ara.P.All.indexOf(crd)>-1)return 0;return 1})
	}Hst[Tn].Ara=Ara;Scr.O=Ara.O.All.length;Scr.X=Ara.X.All.length;console.log(Ara.P)
	if(Tn>2)if(Ara.P[0].length==Ara.P.All.length&&Dft.QJd){
		return Rul.Scr()
	}else{
		if(Ara.P.All.length==0)return Rul.Scr()
	}return ""
}//區塊演算
Usr.Tol.Cnt=function(){
	Dft.Ara=confirm("顯示現在雙方區域")
	Dft.QJd=confirm("執行快速判定")
}//擴充工具
Brd.Mrk.Cnt=function(){var cds=Brd.Sel("All")
	Brd.Qre(cds,"B",0)
	Brd.Qre(Crd.Flt(cds,function(crd){
		return !((Asc(crd[0])+Val(crd[1]))%2)
	}),"B",1)
	if(Dft.Ara){
		for(var i=0;i<2;i++)Brd.Qre(Ara[Sqr.S[i]].All,"B",3+i)
	}
}//擴充標記
Brd.Cln.Cnt=function(){
	Ara.O.All=[]
	Ara.X.All=[]
}//擴充初始
Usr.Adn.Ext=function(){}//擴充功能
Brd.Adn.Ext=function(){}//擴充功能
Rul.Ext=function(){}//擴充規則
Usr.Tol.Ext=function(){}//擴充工具
Rul.Lmt.Ext=function(){return Dft.Rul.Lmt}//擴充規則限制
Brd.Mrk.Ext=function(){}//擴充標記