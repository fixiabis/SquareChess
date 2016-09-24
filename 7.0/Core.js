var Turn=0,Dft={Clr:1,Blk:0,Dir:""},Sbl=["O","X",""],Sqr=[[" ","","dimgray"]],cd8="F,B,R,L,FR,FL,BR,BL".split(","),Hst={Brd:[],Crd:[]},LdK=[],LdQ=[]
function Cre(){var bd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Lst()'>"
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' ondblclick='ToS(this.id)' class='bt'></td>"
		}bd+="</tr>"
	}Id("Board").innerHTML=bd+"</table><div id='UC'><table><tr><td class='bt' onClick='Udo()' onContextMenu='Gto()'>Undo</td><td class='bt' onClick='Cli()' onContextMenu='Adn()'>Clean</td></tr></table></div>";Id("Board").style.animation="down 2s";Rsz()
}
function Rsz(){
	Id("Board").style.height="0px";Id("UC").style.display="none"
	var sz=document.body.clientHeight,C=1;
	if(document.body.clientWidth<sz){sz=document.body.clientWidth;Id("UC").style.display="inline";C=0};sz=Math.floor(sz/9)
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
}
function Ldr(){
	if(location.search){var sr=location.search.replace("%3A",":");doc.title=sr.split("?mode=")[1]
		var ld=doc.title.split(":")
		for(i in ld){var ct=ld[i];if(i>0)for(s=0;s<i;s++)ct=ld[s]+"-"+ct;LdQ.push(ct)}
		for(i in LdQ){var s=doc.createElement("script");s.src="Shell/"+LdQ[i]+".js";doc.body.appendChild(s)}
	}
}
function Mnu(e){var sz="0px";if(!Id("Board"))return
	if(e.pageX<Split(Id("Board").style.marginLeft,"px")[0]&&Id("UCL").clientLeft==0)sz="160px";Id("UCL").style.width=sz
}
function Cmd(e){var c=e.ctrlKey,k=e.which,s=e.shiftKey
	switch(k){
		case  8:Udo();break
		case 13:Rdo();break
		case 18:Adn();break
		case 35:Lst();break
		case 37:if(c){e.preventDefault();Udo()}else Dft.Dir+="L";break
		case 38:if(c)Cli();else Dft.Dir+="F";break
		case 39:if(c){e.preventDefault();Rdo()}else Dft.Dir+="R";break
		case 40:if(c)Cln();else Dft.Dir+="B";break
		case 46:if(s)Cln();else Cli();break
		case 89:if(c)Rdo();break
		case 90:if(c)Udo();break
		case 72:if(c){e.preventDefault();Gto();break}
		default:if(k>64&&k<74){if(s)ToS(Chr(k)+prompt("Enter coordinate"));else if(!c)Set(Chr(k)+prompt("Enter coordinate"))}
	}
}
function Udo(){Rdr(Turn-1)}
function Rdo(){Rdr(Turn+1)}
function Lst(){Rdr(Hst.Brd.length-1)}
function Gto(){Rdr(prompt("Go to turn:"))}
function Cli(){if(Turn>2)Cln("Clean Board?","");else Cln()}
function Adn(){bdB()}
function Set(c){if(!Lmt(c)){Hst.Crd[Turn+1]=c;Qre(c,"T",Sbl[Turn%2]);Turn++}Rul();Wtr()}
function Wtr(){var b="";for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)b+=Sym(Chr(cd1)+cd2);Hst.Brd[Turn]=b}
function Rdr(b){
	if(typeof b=="number")if(Hst.Brd[b]){Rdr(Hst.Brd[b]);Turn=b}if(!b.length)return
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
	if(k){Turn=0;Hst.Brd=[]
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){if(Instr(Qre(Chr(cd1)+cd2,"T"),t)==-1)continue
			Sym(Chr(cd1)+cd2,2)
		}Brd();Wtr()
	}
}
function Brd(){crB()}
function Lmt(c){if(Qre(c,"T")=="")return 0;else return 1}
function Rul(){}
function Nir(e){if(e.which<41&&e.which>36&&Dft.Dir!=""){Set(Crd(Hst.Crd[Turn],Dft.Dir));Dft.Dir=""}}
function ToS(c){for(i in Hst.Crd){if(Hst.Crd[i]==c)Rdr(Val(i))}}
function bdB(){
	var Bk=Val(prompt("Add Block?(Max:27)",Dft.Blk))
	if(typeof Bk=="number"){
		if(Bk<0)Bk=0;if(Bk>27)Bk=27;Dft.Blk=Bk
	}if(Turn==0)Cln()
}
function crB(){var b=0
	while(b!=Dft.Blk){var cd1=Val(Rnd()*9)+65,cd2=Val(Rnd()*9+1),clr=Qre(Chr(cd1)+cd2,"B")
		if(clr=="lightgray"&&(cd1+cd2)%2==0&&Qre(Chr(cd1)+cd2,"T")==""){b++;Sym(Chr(cd1)+cd2,3)}
	}
}
function OgC(c){var bc=""
	if((Asc(c[0])+Val(c[1]))%2==0)bc="lightgray";Qre(c,"B",bc);Qre(c,"F","")
}
function LdC(){if(LdK.length==LdQ.length){Cre();Cln()}console.log(LdQ)}
