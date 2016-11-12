var Tn=0,MdQ=[],Sqr={Sym:["O","X",""," "],FtC:["","blue"],
	BgC:["white","lightgray","indianred","lightskyblue"],},Hst={Brd:[],Crd:[],Sel:[],Rut:[]},
	Dft={Set:0,Tn:0,System:{Blk:0,Nxt:0}},Shl={Rul:{},Lmt:{},Brd:{},Mrk:{},Adn:{},Ara:{},Ckr:{}}
function Ldr(){if(!location.search)history.back()
	var mdN=location.search.replace("?mode=","")
	doc.title=mdN;MdQ=mdN.replace("Square.","").split(":");MdL(0)
}//取得參數
function MdL(v){
	var md=doc.createElement("script");md.src="Mode/"+MdQ[v]+".js"
	if(MdQ[v+1])md.onload=function(){MdL(n+1)}
	else md.onload=function(){Itf();Rsz();Cln()}
	md.onerror=function(){alert("模式可能被移除或不存在");location="index.html"}
	doc.body.appendChild(md)
}//模式裝載
function Rsz(){var scn=1;Id("Board").style.display="none"
	var sz=doc.body.scrollWidth;Id("QCtrl").style.display="none"
	if(doc.body.scrollHeight<sz){sz=doc.body.scrollHeight;scn=0}
	sz=Math.floor(sz/9)
	for(i=0;i<83;i++){
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-15+"px"
		if(i>80)Class("bt")[i].style.width=sz*4.5+"px"
	}
	Id("UI").style.marginLeft=(doc.body.scrollWidth-sz*9)/2+"px"
	Id("UI").style.marginTop=(doc.body.scrollHeight-sz*9)/2+"px"
	if(scn)Id("QCtrl").style.display="";Id("Board").style.display=""
}//大小變更
function Itf(){var bd=""
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' class='bt'></td>"
		}bd+="</tr>"
	}Id("Board").innerHTML=bd
}//棋盤介面
function Cln(msg,tgt){if(!tgt)tgt="";var ckr=0;if(!msg)ckr=1;else ckr=confirm(msg)
	if(ckr){
		Tn=0;Hst={Brd:[],Crd:[],Sel:[],Rut:[]};Qre(Sel("All"),["Sym","FtC","BgC"],[2,0,0])
		Brd();Hst.Brd[Tn]=Rec();Adn();Rul();Dft.Tn=Tn
	}
}//清除棋盤
function Set(crd){if(Dft.Set)return
	if(Ckr(crd)){Qre(crd,"Sym",Tn%2);Tn++;Hst.Crd[Tn]=crd;Hst.Brd[Tn]=Rec();Rul()}
}//設置符號
function Qre(crd,atr,typ){var res=[],ckr=0
	if(typeof crd=="object"){
		for(var i=0;i<crd.length;i++)res=res.concat(Qre(crd[i],atr,typ));return res
	}else if(typeof atr=="object"){
		for(var i=0;i<atr.length;i++){
			if(typeof typ=="object")res=res.concat(Qre(crd,atr[i],typ[i]))
			else res=res.concat(Qre(crd,atr[i]))
		}return res
	}
	if(typeof typ!="undefined")ckr=1
	switch(atr){
		case"Opa":
			if(ckr)Id(crd).style.opacity=typ;break
		case"Sym":
			if(ckr)Id(crd).innerHTML=Sqr.Sym[typ];
			res=res.concat(Sqr.Sym.indexOf(Id(crd).innerHTML));break
		case"FtC":
			if(ckr)Id(crd).style.color=Sqr.FtC[typ];
			res=res.concat(Sqr.FtC.indexOf(Id(crd).style.color));break
		case"BgC":
			if(ckr)Id(crd).style.backgroundColor=Sqr.BgC[typ];
			res=res.concat(Sqr.BgC.indexOf(Id(crd).style.backgroundColor))
	}return res
}//元素操作
function Rec(brd){var res="",atr=["Sym","FtC","BgC"]
	if(typeof brd=="number"&&Hst.Brd[brd]){Tn=brd;Rec(Hst.Brd[brd]);Rul();return}
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++)for(var i=0;i<3;i++){
		if(brd)Qre(Chr(cd1)+cd2,atr[i],brd[((cd1-65)*9+cd2-1)*3+i])
		else res+=Qre(Chr(cd1)+cd2,atr[i])
	}return res
}//棋盤紀錄
function Lmt(crd,sym){if(Qre(crd,"Sym")[0]!=2)return 1;if(typeof sym=="undefined")sym=Tn%2
	for(i=MdQ.length-1;i>-1;i--)if(Shl.Lmt[MdQ[i]](crd,sym))return 1;return 0
}//設置限制
function Ckr(crd){
	for(i=MdQ.length-1;i>-1;i--)if(Shl.Ckr[MdQ[i]](crd))return 1;return 0
}//設置確認
function Mrk(){Brd()
	if(Dft.System.Nxt)for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++)if(!Ckr(Chr(cd1)+cd2)&&Qre(Chr(cd1)+cd2,"Sym")==2)Qre(Chr(cd1)+cd2,"Opa",0.2)
	for(i=MdQ.length-1;i>-1;i--)Shl.Mrk[MdQ[i]]()
}//棋盤標記
function Brd(){Qre(Sel("All"),"Opa",1)
	var ord=function(crd){
			var cd1=Asc(crd[0]),cd2=Val(crd[1]);if((cd1+cd2)%2==0)return 1
		};Qre(Flt(Sel("All"),ord),"BgC",1)
	for(i=0;i<MdQ.length;i++)Shl.Brd[MdQ[i]]()
}//棋盤外觀
function Adn(){
	for(i=0;i<MdQ.length;i++)Shl.Adn[MdQ[i]]()
}//模式功能
function Rul(){
	for(i=MdQ.length-1;i>-1;i--){var res=Shl.Rul[MdQ[i]]();if(res)Cln(res)}Mrk()
}//規則判定