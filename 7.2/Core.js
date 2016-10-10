var Tn=0,Dft={Clr:1,Blk:0,Crd:{},Arw:{},Mod:{Slt:0,Rul:0},Slt:[]},
	Hst={},Sbl=["O","X",""],Sqr=[[" ","","dimgray"]],LdM=[],cd8="F;B;R;L;FR;FL;BR;BL".split(";")
function Cre(){
	var bd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Lst()'>"
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"'onclick='Slt(this.id)'ondblclick='ToS(this.id)'class='bt'></td>"
		}bd+="</tr>"
	}bd+="</table>"
	bd+="<div id='UC'><table><tr><td class='bt'onClick='Udo()'onContextMenu='Gto()'id='Undo'>Undo</td><td class='bt' onclick='Clr()'onContextMenu='Adn()'id='Clean'>Clean</td></tr><tr onclick='SOk()'class='bt'id='OK'><td colspan='2'>OK<td></tr></table></div>"
	Id("Board").innerHTML=bd;Id("Board").style.animation="down 2s";
}//建立棋盤
function Rsz(){
	Id("Board").style.height="0px";Id("UC").style.display="none"
	var sz=doc.body.clientHeight,wth=1
	if(doc.body.clientWidth<sz){sz=doc.body.clientWidth;Id("UC").style.display="inline";wth=0}
	sz=Math.floor(sz/9)
	for(i=0;i<84;i++){
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		Class("bt")[i].style.lineHeight=sz+"px"
	}
	for(i=81;i<84;i++)Class("bt")[i].style.width=sz*4.5+"px"
	Id("Board").style.height=sz*9+"px";Id("UC").style.width=sz*9+"px"
	Id("Board").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(wth)Id("Board").style.marginTop=(doc.body.clientHeight-(sz*9))/2+"px"
	Id("UC").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(Val(Split(Id("Board").style.marginLeft,"px")[0])<40)Id("UCT").style.display="none"
	else Id("UCT").style.display="inline"
}//棋盤大小
function Ldr(){
	if(location.search&&location.search!="?"){
		var spt=location.search.replace("%3A",":");doc.title=spt.split("?mode=")[1]
		var ld=doc.title.split(":");for(i in ld)LdM.push(ld[i]);LMd(0)
	}else{
		var mod=[
			"Connect","Blocker","Divider",
			"Connect:Attack","Connect:Defend","Connect:Scheme",
			"Divider:Zombie","Divider:Scheme","Connect:Zombie",
			"Divider:Follow","Connect:Follow","Blocker:ByLine"
		];Id("Board").childNodes[0].childNodes[0].innerHTML="Directing..."
		setTimeout('location="chess.html?mode="+"'+mod[Val(Rnd()*mod.length)]+'"',2000)
	}
}//取得模式
function LMd(n){
	var spt=doc.createElement("script");spt.src="Shell/"+LdM[n]+".js"
	if(LdM[n+1])spt.onload=function(){LMd(n+1)}
	else spt.onload=function(){Cre();Cln();Rsz()}
	doc.body.appendChild(spt)
}//載入模式
//預先裝載
function MsO(e){Mnu(e.pageX<Split(Id("Board").style.marginLeft,"px")[0]&&Id("UCL").clientLeft==0)}//滑鼠移動
function KDw(e){var c=e.ctrlKey,k=e.which,s=e.shiftKey
	switch(k){
		case  8:Udo();break
		case 13:Rdo();break
		case 18:Adn();break
		case 35:Lst();break
		case 37:if(c){e.preventDefault();Udo()}else Hst.Dir+="L";break
		case 38:if(c)Clr();else Hst.Dir+="F";break
		case 39:if(c){e.preventDefault();Rdo()}else Hst.Dir+="R";break
		case 40:if(c)Cln();else Hst.Dir+="B";break
		case 46:if(s)Cln();else Clr();break
		case 89:if(c)Rdo();break
		case 90:if(c)Udo();break
		case 72:if(c){e.preventDefault();Gto();break}
		default:if(k>64&&k<74){
					if(s)ToS(Chr(k)+prompt("Enter coordinate number"))
					else if(!c)Slt(Chr(k)+prompt("Enter coordinate number"))
				}
	}
}//鍵盤按下
function KUp(e){if(e.which<41&&e.which>36&&Hst.Dir!=""){Set(Crd(Hst.Crd[Tn],Hst.Dir));Hst.Dir=""}}//鍵盤放開
//控制方法
function Mnu(c){
	var sz=0;if(!Id("Board"))return
	if(c)sz=160;Id("UCL").style.width=sz+"px";Id("UCT").style.left=sz+4+"px"
}//喚出選單
function Adn(){bdB();ExA()}//增加功能
function Slt(c){Qre("NCd","T",c);if(!Dft.Mod.Slt)Set(c);else Dft.Slt.push(c)}
function Set(c){if(!Lmt(c)){Hst.Crd[Tn+1]=c;Sym(c,Tn%2);Tn++}Rul();Wtr()}//設置符號
function Wtr(){var b=""
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)b+=Sym(Chr(cd1)+cd2);Hst.Brd[Tn]=b
}//記錄棋盤
function Rdr(b){
	if(typeof b=="number")if(Hst.Brd[b]){Rdr(Hst.Brd[b]);Tn=b}if(!b.length)return
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Sym(Chr(cd1)+cd2,Val(b[(cd1-65)*9+cd2-1]))
}//讀取棋盤
function Cln(m,t){var k=1;if(!m)m="";if(!t)t="";if(m!="")k=confirm(m)
	if(k){Tn=0;Hst={Brd:[],Crd:[]}
		Qre(GSt(Rng("All"),function (c){if(Instr(Qre(c,"T"),t)>-1)return 1;return 0}),"T","")
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){if(Instr(Qre(Chr(cd1)+cd2,"T"),t)==-1)continue
			Sym(Chr(cd1)+cd2,2)
		}Brd();Wtr()
	}
}//清除目標
function Brd(){ExB();crB()}//預設棋盤
function Udo(){Rdr(Tn-1)}//到上一步
function Rdo(){Rdr(Tn+1)}//到下一步
function Lst(){Rdr(Hst.Brd.length-1)}//到最後步
function Gto(){Rdr(prompt("Go to turn:"))}//到指定步
function ToS(c){for(i in Hst.Crd){if(Hst.Crd[i]==c)Rdr(Val(i))}}//到設置步
function Clr(){if(Tn>2)Cln("Clean Board?");else Cln()}//清除棋盤
//棋盤操作
function Lmt(c){if(!Id(c)||Qre(c,"T")!="")return 1;else return ExL(c)}//設置限制
function Rul(){Scr={O:0,X:0,P:0};Dft.Mod.Rul=1;ExR();Dft.Mod.Rul=0}//勝負判定
function Cdt(){
	Qre("Cdt","T","Public Area:"+Scr.P+"<br>O's Area:"+Scr.O+"<br>X's Area:"+Scr.X)
}//目前狀態
function Stc(){
	if(Tn>2)if(Scr.P==0&&Tn%2==0){
		if(Scr.O>Scr.X)Cln("O Win.")
		else if(Scr.O<Scr.X)Cln("X Win.")
		else if(Scr.O==0&&Scr.X==0)Cln("Draw")
		else if(Scr.O==0)Cln("X Win.")
		else if(Scr.X==0)Cln("O Win.")
	}Cdt()
}//積分判定
//規則判定
function GSt(c,s){var r=[];c=Grp(c);for(var i=0;i<c.length;i++)if(s(c[i]))r.push(c[i]);return Grp(r,1)}//群組篩選
function Rng(r){
	if(Dft.Crd[r])return Dft.Crd[r]
	Dft.Crd[r]=[]
	switch(r){
		case"All":
			for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Dft.Crd[r].push(Chr(cd1)+cd2);break
		default:
			if(Instr(r,":")>-1){var spt=Split(r,":"),c1=[Asc(spt[0][0])],c2=[Val(spt[0][1])]
				if(Asc(spt[1][0])<c1)c1.unshift(Asc(spt[1][0]));else c1.push(Asc(spt[1][0]))
				if(Val(spt[1][1])<c2)c2.unshift(Val(spt[1][1]));else c2.push(Val(spt[1][1]))
				for(cd1=c1[0];cd1<c1[1]+1;cd1++)for(cd2=c2[0];cd2<c2[1]+1;cd2++)Dft.Crd[r].push(Chr(cd1)+cd2)
			}
			switch(r[1]){
				case"R":for(cd1=65;cd1<74;cd1++)Dft.Crd[r].push(Chr(cd1)+r[0]);break
				case"C":for(cd2=1;cd2<10;cd2++)Dft.Crd[r].push(r[0]+cd2);
			}break
	}return Dft.Crd[r]
}//座標範圍
function Crd(c,r){var o=[]
	r=Grp(r)
	for(i in r){var x=0,y=0
		if(Instr(r[i],"?")>-1){var w=Replace(r[i],"?","")
			while(1){var d=Crd(c,w)
				if(!Id(d))break
				o.push(d);w+=w[0]
			}continue
		}
		for(var j in r[i])switch(r[i][j]){
			case"F":y--;break
			case"B":y++;break
			case"R":x++;break
			case"L":x--;
		}r[i]=Chr(Asc(c[0])+x)+Val(Val(c[1])+y)
	}if(!o.length)return Grp(r,1);return o
}//座標定位
function Grp(c,t){if(t&&c.length==1)return c[0]
	if(typeof c!="object"){if(Instr(c,";")>-1)return Split(c,";");else return [c]}else return c
}//座標群組
function Arw(r,v){var o=[];r=Grp(r)
	for(i in r){var s=v
		if(Dft.Arw[r[i]]&&!s)o=o.concat(Dft.Arw[r[i]])
		Dft.Arw[r[i]]=[]
		if(s){var w=r[i],n=r[i];r[i]=s+r[i];Dft.Arw[r[i]]=[]
			while(s>0){
				Dft.Arw[r[i]].push(w);w+=n;s--
			}o=o.concat(Dft.Arw[r[i]]);continue
		}
		if(Val(r[i][0])>0&&r[i].length>1){
			if(Instr("FBRL",r[i][1])>-1)o=o.concat(Arw(Mid(r[i],1,r[i].length-1),Val(r[i][0])))
			else o=o.concat(Arw(Arw(Mid(r[i],1,r[i].length-1)),Val(r[i][0])));continue
		}
		if(Instr("VWY",r[i][0])>-1){p=r[i][1]
			switch(r[i][0]){
				case"V":o=o.concat(GSt(Arw("X"),function (c){if(Instr(c,p)>-1)return 1;else return 0}));break
				case"W":o=o.concat(GSt(Arw("A"),function (c){if(Instr(c,p)>-1)return 1;else return 0}));break
				case"Y":o=o.concat(GSt(Arw("A"),function (c){if(Instr(c,p+p)>-1)return 1;else return 0}));break
			}continue
		}
		switch(r[i]){
			case"I":o=o.concat(Split("F,B",","));break
			case"H":o=o.concat(Split("R,L",","));break
			case"4":o=o.concat(Arw("I").concat(Arw("H")));break
			case"X":o=o.concat(Split("FR,FL,BR,BL",","));break
			case"8":o=o.concat(Arw("4").concat(Arw("X")));break
			case"A":o=o.concat(Split("FFR,FRR,FFL,FLL,BBR,BRR,BBL,BLL",","));break
		}
	}return Grp(o,1)
}//方向操作
//座標操作
function Qre(c,a,v){var o=[],k=0;if(typeof v=="string")k=1;c=Grp(c)
	for(i in c){if(!Id(c[i]))continue
		if(Id(c[i]))switch(a){
			case"F":if(k)Id(c[i]).style.color=v;o[i]=Id(c[i]).style.color;break
			case"B":if(k)Id(c[i]).style.backgroundColor=v;o[i]=Id(c[i]).style.backgroundColor;break
			case"T":if(k)Id(c[i]).innerHTML=v;o[i]=Id(c[i]).innerHTML;break
			case"L":if(k)Id(c[i]).title=v;o[i]=Id(c[i]).title;break
		}
	}return Grp(o,1)
}//讀寫屬性
function Sym(c,v){c=Grp(c)
	for(s in c){if(!Id(c[s]))continue
		if(typeof v=="number"){
			if(v>2){var i=v-3
				Qre(c[s],"F",Sqr[i][1])
				Qre(c[s],"B",Sqr[i][2])
				Qre(c[s],"T",Sqr[i][0])
			}else{
				if(Dft.Clr)OgC(c[s]);Qre(c[s],"T",Sbl[v])
			}return v
		}
		if(c[s].length<2)for(i=0;i<3;i++)if(c[s]==Sbl[i])return i
		for(i in Sqr){var n=0
			if(Qre(c[s],"F")==Sqr[i][1])n++
			if(Qre(c[s],"B")==Sqr[i][2])n++
			if(Qre(c[s],"T")==Sqr[i][0])n++
			if(n==3)return Val(i)+3
		}
		for(i=0;i<3;i++)if(Qre(c[s],"T")==Sbl[i])return i	
	}
}//讀寫代碼
function OgC(c){var bc="";c=Grp(c)
	for(i in c){if(!Id(c))continue
		if((Asc(c[i][0])+Val(c[i][1]))%2==0)bc="lightgray";Qre(c[i],"B",bc);Qre(c[i],"F","")
	}
}//變更原色
function bdB(){
	var Bk=Val(prompt("Add Block?(Max:27)",Dft.Blk))
	if(typeof Bk=="number"){
		if(Bk<0)Bk=0;if(Bk>27)Bk=27;Dft.Blk=Bk
	}if(Tn==0)Cln()
}//障礙數量
function crB(){var b=0
	while(b!=Dft.Blk){var cd1=Val(Rnd()*9)+65,cd2=Val(Rnd()*9+1),clr=Qre(Chr(cd1)+cd2,"B")
		if(clr=="lightgray"&&(cd1+cd2)%2==0&&Qre(Chr(cd1)+cd2,"T")==""){b++;Sym(Chr(cd1)+cd2,3)}
	}
}//建立障礙
function SOk(){}//選擇完成
//元件操作
function ExA(){}//額外功能
function ExB(){}//額外棋盤
function ExR(){}//額外規則
function ExL(){return 0}//額外限制
function XAn(){}//擴增功能
function XBd(){}//擴增棋盤
function XRl(){}//擴增規則
function XLt(){}//擴增限制
//額外函數