var Tn=0,
	Dft={Clr:1,Blk:0},Hst={},
	Sbl=["O","X",""],Sqr=[[" ","","dimgray"]],
	cd8="F,B,R,L,FR,FL,BR,BL".split(","),
	LdM=[]
function Cre(){var bd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Lst()'>"
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' ondblclick='ToS(this.id)' class='bt'></td>"
		}bd+="</tr>"
	}Id("Board").innerHTML=bd+"</table><div id='UC'><table><tr><td class='bt' onClick='Udo()' onContextMenu='Gto()'>Undo</td><td class='bt' onclick='Clr()' onContextMenu='Adn()'>Clean</td></tr></table></div>"
	Id("Board").style.animation="down 2s"
}
function Rsz(){
	Id("Board").style.height="0px";Id("UC").style.display="none"
	var sz=document.body.clientHeight,C=1
	if(document.body.clientWidth<sz){sz=document.body.clientWidth;Id("UC").style.display="inline";C=0}
	sz=Math.floor(sz/9)
	for(i=0;i<83;i++){
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		Class("bt")[i].style.lineHeight=sz+"px"
	}
	for(i=81;i<83;i++)Class("bt")[i].style.width=sz*4.5+"px"
	Id("Board").style.height=sz*9+"px";Id("UC").style.width=sz*9+"px"
	Id("Board").style.marginLeft=(document.body.clientWidth-(sz*9))/2+"px"
	if(C)Id("Board").style.marginTop=(document.body.clientHeight-(sz*9))/2+"px"
	Id("UC").style.marginLeft=(document.body.clientWidth-(sz*9))/2+"px"
	if(Val(Split(Id("Board").style.marginLeft,"px")[0])<40)Id("UCT").style.display="none"
	else Id("UCT").style.display="inline"
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
	if(LdM[n+1])s.onload=function(){LMd(n+1)};else s.onload=function(){Cre();Cln();Rsz();PLd()}
	doc.body.appendChild(s)
}
function PLd(){
	if(location.hash){
		var crd=parseInt(location.hash.split("#")[1],36).toString(19).toUpperCase()
		for(var i=0;i<crd.length;i+=2)Set(crd[i]+crd[i+1])
	}
}
function MsO(e){Mnu(e.pageX<Split(Id("Board").style.marginLeft,"px")[0]&&Id("UCL").clientLeft==0)}
function Mnu(c){var sz=0;if(!Id("Board"))return;if(c)sz=160;Id("UCL").style.width=sz+"px";Id("UCT").style.left=sz+4+"px"}
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
		default:if(k>64&&k<74){if(s)ToS(Chr(k)+prompt("Enter coordinate"));else if(!c)Set(Chr(k)+prompt("Enter coordinate"))}
	}
}
function KUp(e){
	if(e.which<41&&e.which>36&&Hst.Dir!=""){Set(Crd(Hst.Crd[Tn],Hst.Dir));Hst.Dir=""}
}
function Rec(){var r="",l=location.href
	for(i=1;i<Hst.Crd.length;i++)r+=Hst.Crd[i];prompt("Copy this url:",l.replace(location.hash,"")+"#"+parseInt(r,19).toString(36))
}
function Udo(){Rdr(Tn-1)}
function Rdo(){Rdr(Tn+1)}
function Lst(){Rdr(Hst.Brd.length-1)}
function Gto(){Rdr(prompt("Go to turn:"))}
function Clr(){if(Tn>2)Cln("Clean Board?");else Cln()}
function Adn(){bdB();ExA()}
function Set(c){console.log(c);if(!Lmt(c)){Hst.Crd[Tn+1]=c;Qre(c,"T",Sbl[Tn%2]);Tn++}Rul();Wtr()}
function Wtr(){var b="";for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)b+=Sym(Chr(cd1)+cd2);Hst.Brd[Tn]=b}
function Rdr(b){
	if(typeof b=="number")if(Hst.Brd[b]){Rdr(Hst.Brd[b]);Tn=b}if(!b.length)return
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
		}Brd();Wtr()
	}
}
function Brd(){ExB();crB()}
function Lmt(c){if(ExL())return 1;else if(Qre(c,"T")=="")return 0;else return 1}
function Rul(){}
function ToS(c){for(i in Hst.Crd){if(Hst.Crd[i]==c)Rdr(Val(i))}}
function bdB(){
	var Bk=Val(prompt("Add Block?(Max:27)",Dft.Blk))
	if(typeof Bk=="number"){
		if(Bk<0)Bk=0;if(Bk>27)Bk=27;Dft.Blk=Bk
	}if(Tn==0)Cln()
}
function crB(){var b=0
	while(b!=Dft.Blk){var cd1=Val(Rnd()*9)+65,cd2=Val(Rnd()*9+1),clr=Qre(Chr(cd1)+cd2,"B")
		if(clr=="lightgray"&&(cd1+cd2)%2==0&&Qre(Chr(cd1)+cd2,"T")==""){b++;Sym(Chr(cd1)+cd2,3)}
	}
}
function OgC(c){var bc="";if(!c)return
	if((Asc(c[0])+Val(c[1]))%2==0)bc="lightgray";Qre(c,"B",bc);Qre(c,"F","")
}
function ExA(){}
function ExB(){}
function ExR(){}
function ExL(){return 0}
function Ctn(r,s){var k=0;for(var i in r)if(Qre(r[i],"T")==s)k++;return k}
