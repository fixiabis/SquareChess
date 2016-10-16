var Tn=0,
	Dft={Clr:1,Blk:0,BfS:false,NxS:false},Hst={},
	Sbl=["O","X",""],Sqr=[[" ","","dimgray"]],
	cd8="F,B,R,L,FR,FL,BR,BL".split(","),
	LdM=[]
function Cre(){var bd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Lst()' style='background-color:dimgray' onclick='Dft.Ctx=0;Mnu(0,0)'>"
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' ondblclick='ToS(this.id)' class='bt'></td>"
		}bd+="</tr>"
	}Id("Board").innerHTML=bd+"</table><div id='UC'><table><tr><td class='bt' onClick='Udo()' onContextMenu='Gto()'>Undo</td><td class='bt' onclick='Clr()' onContextMenu='Adn()'>Clean</td></tr></table></div>"
	Id("Board").style.animation="down 2s"
}
function Rsz(){
	Id("Board").style.height="0px";Id("UC").style.display="none"
	var sz=doc.body.clientHeight,C=1
	if(doc.body.clientWidth<sz){sz=doc.body.clientWidth;Id("UC").style.display="inline";C=0}
	sz=Math.floor(sz/9)
	for(i=0;i<83;i++){
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		Class("bt")[i].style.lineHeight=sz+"px"
	}
	for(i=81;i<83;i++)Class("bt")[i].style.width=sz*4.5+"px"
	Id("Board").style.height=sz*9+"px";Id("UC").style.width=sz*9+"px"
	Id("Board").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(C)Id("Board").style.marginTop=(doc.body.clientHeight-(sz*9))/2+"px"
	Id("UC").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(Val(Split(Id("Board").style.marginLeft,"px")[0])<40){
		Id("UCM").style.display="inline"
		for(i=0;i<3;i++)Class("list")[i].style.width=doc.body.clientWidth/3+"px"
	}else Id("UCM").style.display="none"
}
function Ldr(){
	if(location.search&&location.search!="?"){var sr=location.search.replace("%3A",":")
		doc.title=sr.split("?mode=")[1]
		var ld=doc.title.split(":");for(i in ld)LdM.push(ld[i]);LMd(0)
	}else{
		var Mod=[
			"Connect","Blocker","Divider",
			"Connect:Attack","Connect:Defend","Connect:Scheme",
			"Divider:Zombie","Divider:Scheme","Connect:Zombie",
			"Divider:Follow","Connect:Follow","Blocker:ByLine"
		];Id("Board").childNodes[0].childNodes[0].innerHTML="Directing..."
		setTimeout('location="chess.html?mode="+"'+Mod[Val(Rnd()*Mod.length)]+'"',2000)
	}
}
function LMd(n){
	var s=doc.createElement("script")
	s.src="Shell/"+LdM[n]+".js"
	if(LdM[n+1])s.onload=function(){LMd(n+1)};else s.onload=function(){Cre();Cln();Rsz()}
	doc.body.appendChild(s)
}
function MsO(e){var c=1,p=0
	if(e.pageX<Split(Id("Board").style.marginLeft,"px")[0])p=0
	else if(e.pageX>Val(Id("Board").style.marginLeft.split("px")[0])+Id("Board").childNodes[0].clientWidth)p=1
	else c=0
	Mnu(c,p)
}
function Mnu(c,p){
	if(c)if(p){
		Id("UCL").style.left=""
		Id("UCL").style.right="0px"
	}else{
		Id("UCL").style.right=""
		Id("UCL").style.left="0px"
	}
	var sz=0;
	if(!Id("Board"))return;if(c)sz=160;Id("UCL").style.width=sz+"px"
}
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
		default:if(k>64&&k<74){if(s)ToS(Chr(k)+prompt("輸入座標"));else if(!c)Set(Chr(k)+prompt("輸入座標"))}
	}
}
function KUp(e){
	if(e.which<41&&e.which>36&&Hst.Dir!=""){Set(Crd(Hst.Crd[Tn],Hst.Dir));Hst.Dir=""}
}
function Udo(){Rdr(Tn-1)}
function Rdo(){Rdr(Tn+1)}
function Lst(){Rdr(Hst.Brd.length-1)}
function Gto(){Rdr(prompt("前往指定回合:"))}
function Clr(){if(Tn>2)Cln("清除棋盤?");else Cln()}
function Adn(){bdB();ExA()}
function Set(c){if(!Lmt(c)){Hst.Crd[Tn+1]=c;Qre(c,"T",Sbl[Tn%2]);Tn++;Wtr();Rul()}}
function BfS(){Upl()
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Qre(Chr(cd1)+cd2,"F","");NxS()
	if(!Dft.BfS)return;Qre(Hst.Crd[Tn-1],"F","blue");Qre(Hst.Crd[Tn],"F","blue")
}
function NxS(){
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		if(Dft.NxS)Id(Chr(cd1)+cd2).style.opacity=0.2
		if(!Lmt(Chr(cd1)+cd2)||!Dft.NxS)Id(Chr(cd1)+cd2).style.opacity=1
	}
}
function Wtr(){var b="";for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)b+=Sym(Chr(cd1)+cd2);Hst.Brd[Tn]=b;BfS()}
function Rdr(b){
	if(typeof b=="number")if(Hst.Brd[b]){Rdr(Hst.Brd[b]);Tn=b;BfS()}if(!b.length)return
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Sym(Chr(cd1)+cd2,Val(b[(cd1-65)*9+cd2-1]))
}
function Crd(c,r){var x=0,y=0
	for(var i in r)switch(r[i]){
		case"F":y--;break
		case"B":y++;break
		case"R":x++;break
		case"L":x--;
	}return Chr(Asc(c[0])+x)+Val(Val(c[1])+y)
}
function Qre(c,a,v){var k=0;if(typeof v=="string")k=1
	if(Id(c))switch(a){
		case"F":if(k)Id(c).style.color=v;return Id(c).style.color;break
		case"B":if(k)Id(c).style.backgroundColor=v;return Id(c).style.backgroundColor;break
		case"T":if(k)Id(c).innerHTML=v;return Id(c).innerHTML;break
	}
}
function Sym(c,v){
	if(typeof v=="number"){
		if(v>2){var i=v-3
			Qre(c,"F",Sqr[i][1])
			Qre(c,"B",Sqr[i][2])
			Qre(c,"T",Sqr[i][0])
		}else{
			if(Dft.Clr)OgC(c);Qre(c,"T",Sbl[v])
		}return v
	}
	if(c.length<2)for(i=0;i<3;i++)if(c==Sbl[i])return i
	for(i in Sqr){var n=0
		if(Qre(c,"F")==Sqr[i][1])n++
		if(Qre(c,"B")==Sqr[i][2])n++
		if(Qre(c,"T")==Sqr[i][0])n++
		if(n==3)return Val(i)+3
	}
	for(i=0;i<3;i++)if(Qre(c,"T")==Sbl[i])return i
}
function Cln(m,t){var k=1;if(!m)m="";if(!t)t=""
	if(m!="")k=confirm(m)
	if(k){Tn=0;Hst={Brd:[],Crd:[]}
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){if(Instr(Qre(Chr(cd1)+cd2,"T"),t)==-1)continue
			Sym(Chr(cd1)+cd2,2)
		}Brd();Wtr();Get()
	}
}
function Brd(){ExB();crB()}
function Lmt(c){if(ExL())return 1;else if(Qre(c,"T")=="")return 0;else return 1}
function Rul(){}
function ToS(c){for(i in Hst.Crd){if(Hst.Crd[i]==c)Rdr(Val(i))}}
function bdB(){
	var Bk=Val(prompt("增加障礙?(最大值:27)",Dft.Blk))
	if(typeof Bk=="number"){
		if(Bk<0)Bk=0;if(Bk>27)Bk=27;Dft.Blk=Bk
	}if(Tn==0)Cln()
}
function crB(){var b=0
	while(b!=Dft.Blk){var cd1=Val(Rnd()*9)+65,cd2=Val(Rnd()*9+1),clr=Qre(Chr(cd1)+cd2,"B")
		if(clr=="lightgray"&&(cd1+cd2)%2==0&&Qre(Chr(cd1)+cd2,"T")==""){b++;Sym(Chr(cd1)+cd2,3)}
	}
}
function OgC(c){var bc="white";if(!c)return
	if((Asc(c[0])+Val(c[1]))%2==0)bc="lightgray";Qre(c,"B",bc);Qre(c,"F","")
}
function ExA(){}
function ExB(){}
function ExR(){}
function Upl(){}
function Get(){}
function ExL(){return 0}
function Ctn(r,s){var k=0;for(var i in r)if(Qre(r[i],"T")==s)k++;return k}
function Tol(){
	Dft.BfS=confirm("將上回合設置的符號標示出來?")
	Dft.NxS=confirm("強調所有不能設置的區域")
}
