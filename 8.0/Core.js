var Tn=0,MdQ=[],
	Sqr={
		Sym:["O","X",""," "],
		BgC:["white","lightgray"],
		FtC:["","blue"]
	}
function Ldr(){if(!location.search)history.back()
	var mdN=location.search.replace("?mode=","")
	doc.title=mdN;MdQ=mdN.replace("Square.","").split(":");MdL(0)
}
function MdL(v){
	var md=doc.createElement("script");md.src="Mode/"+MdQ[v]+".js"
	if(MdQ[v+1])md.onload=function(){MdL(n+1)}
	else md.onload=function(){Itf();Rsz();Cln()}
	md.onerror=function(){alert("模式可能被移除或不存在");location="index.html"}
	doc.body.appendChild(md)
}
function Rsz(){var scn=1;Id("Board").style.display="none"
	var sz=doc.body.scrollWidth;Id("QCtrl").style.display="none"
	if(doc.body.scrollHeight<sz){sz=doc.body.scrollHeight;scn=0}
	sz=Math.floor(sz/9);Id("Board").style.display=""
	for(i=0;i<83;i++){
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		if(i>80)Class("bt")[i].style.width=sz*4.5+"px"
	}
	Id("UI").style.marginLeft=(doc.body.scrollWidth-sz*9)/2+"px"
	Id("UI").style.marginTop=(doc.body.scrollHeight-sz*9)/2+"px"
	if(scn)Id("QCtrl").style.display=""
}
function Itf(){var bd=""
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' class='bt'></td>"
		}bd+="</tr>"
	}Id("Board").innerHTML=bd
}
function Cln(msg,tgt){

}
function Set(crd){alert(crd)}