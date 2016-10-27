﻿//Simplify.js ���²��
var doc=document
function Rnd(){return Math.random()}
function Val(v){return v*1}
function Split(s,m){return s.split(m)}
function Instr(s,c){return s.indexOf(c)}
function Mid(s,r,v){return s.substr(r,v)}
function Asc(s){return s.charCodeAt()}
function Chr(v){return String.fromCharCode(v)}
function Id(d){return document.getElementById(d)}
function Class(c){return document.getElementsByClassName(c)}
//Core.js �֤�(�򥻥\��P�W�h�`�Ψ��)
var Tn=0,Dft={},Hst={Brd:[],Crd:[],Sel:{}},MdQ=[],
	Sqr={S:["O","X",""],F:["","blue"],B:["white","lightgray"]},Brd={}
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
}//��ƨ��o
function MdL(ord){
	var s=doc.createElement("script");s.src="Shell/"+MdQ[ord]+".js"
	if(MdQ[ord+1])s.onload=function(){MdL(ord+1)};else s.onload=function(){Brd.Cre();Brd.Cln();Brd.Rsz()}
	doc.body.appendChild(s)
}//�Ҧ��˸�
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
}//�Ǥ�V��X�y��
Crd.Flt=function(cds,ord){var res=[]
	for(var i=0;i<cds.length;i++)if(ord(cds[i]))res.push(cds[i]);return res
}//�z��y��
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
	switch(typ[0]){
		case"8":return"F,B,R,L,FR,FL,BR,BL".split(",")
		case"X":return"FR,FL,BR,BL".split(",")
		case"4":return"F,B,R,L".split(",")
		case"Q":return"FFR,FFL,FRR,FFL,BBR,BBL,BRR,BLL".split(",")
		case"V":
			return Crd.Flt(Crd.Vct("X"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
		case"W":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
		case"Y":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1]+typ[1])>-1)return 1;else return 0})
		case"H":return"R,L".split(",")
		case"I":return"F,B".split(",")
	}return typ
}//�ǥN�X��X��V
Brd.Rec=function(brd){var atr=["S","F","B"],rbd=""
	if(typeof brd=="number"&&Hst.Brd[brd])return Brd.Rec(Hst.Brd[brd])
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)for(var i=0;i<3;i++){
		if(brd)Brd.Qre(Chr(cd1)+cd2,atr[i],Val(brd[(cd1-65+cd2-1)*3+i]))
		else rbd+=Brd.Qre(Chr(cd1)+cd2,atr[i])
	}return rbd
}//Ū��/�����ѽL�N�X
Brd.Cre=function(){
	var brd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Usr.Lst()' style='background-color:dimgray'>"
	for(cd2=1;cd2<10;cd2++){brd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			brd+="<td id='"+Chr(cd1)+cd2+"' onclick='Usr.Set(this.id)' ondblclick='Usr.Udo(this.id)' class='bt'></td>"
			Brd[Chr(cd1)+cd2]={S:"",F:"",B:"",O:""}
		}brd+="</tr>"
	}Id("Brd").innerHTML=brd+"</table><div id='UC'><table><tr><td class='bt' onClick='Usr.Udo()' onContextMenu='Usr.Gto()'>Undo</td><td class='bt' onclick='Usr.Cln()' onContextMenu='Usr.Adn()'>Clean</td></tr></table></div>"
	Id("Brd").style.animation="down 2s"
}//�إߴѽL
Brd.Rsz=function(){
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
}//���]�ѽL�j�p
Brd.Qre=function(crd,atr,typ){
	if(typeof crd=="object")for(var i=0;i<crd.length;i++)Brd.Qre(crd[i],atr,typ)
	else if(typeof atr=="object"&&typeof typ=="object"&&atr.length==typ.length)
		for(var i=0;i<atr.length;i++)Brd.Qre(crd,atr[i],typ[i])
	else if(typeof typ!="number")return Brd[crd][atr]
	else Brd[crd][atr]=typ
}//�ѽL�����ݩʨ��o/�ܧ�
Brd.Sel=function(typ,ord){
	if(typeof typ=="string"&&Hst.Sel[typ])return Hst.Sel[typ];Hst.Sel[typ]=[]
	if(typeof typ=="object"){
		for(var i=0;i<typ.length;i++)Hst.Sel[typ]=Hst.Sel[typ].concat(Brd.Sel(typ[i]))
	}
	if(ord)return Crd.Flt(Brd.Sel(typ),ord)
	if(typ=="All"){
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Hst.Sel.All.push(Chr(cd1)+cd2)
	}
	if(Instr(typ,"-")>-1){var spt=typ.split("-")
		if(spt[0].length==1&&spt[1].length==1){
			var sml=Asc(spt[0]),big=Asc(spt[1]);if(Asc(spt[0])>big){sml=Asc(spt[1]);big=Asc(spt[0])}
			for(var i=sml;i<big+1;i++)Hst.Sel[typ].push(Chr(i));Hst.Sel[typ]=Brd.Sel(Hst.Sel[typ])
		}else if(spt[0].length==2&&spt[1].length==1||spt[0].length==1&&spt[1].length==2){
			var m=0;if(spt[1].length==2)m=1
			var cd1=spt[m][0],cd2=spt[m][1]
			if(Val(spt[(m+1)%2]))Hst.Sel[typ]=Brd.Sel(spt[m]+"-"+cd1+spt[(m+1)%2])
			else Hst.Sel[typ]=Brd.Sel(spt[m]+"-"+spt[(m+1)%2]+cd2)
		}else{
			var cd1f=Asc(spt[0][0]),cd1l=Asc(spt[1][0]),cd2f=Val(spt[0][1]),cd2l=Val(spt[1][1])
			if(Asc(spt[0][0])>cd1l){cd1f=Asc(spt[1][0]);cd1l=Asc(spt[0][0])}
			if(Val(spt[0][1])>cd2l){cd2f=Val(spt[1][1]);cd2l=Val(spt[0][1])}
			Hst.Sel[typ]=Crd.Flt(Brd.Sel("All"),
				function(ckr){
					var cd1k=Asc(ckr[0]),cd2k=Val(ckr[1])
					if(cd1k>=cd1f&&cd1k<=cd1l&&cd2k>=cd2f&&cd2k<=cd2l)return 1;else return 0
				}
			)
		}
	}
	if(Instr(typ,",")>-1){Hst.Sel[typ]=Hst.Sel[typ].concat(Brd.Sel(typ.split(",")))}
	else if(Instr(typ,":")>-1){var spt=typ.split(":");Hst.Sel[typ]=Hst.Sel[typ].concat(Crd(spt[0],spt[1]))}
	if(typ.length==1)Hst.Sel[typ]=Crd.Flt(Brd.Sel("All"),function(ckr){if(Instr(ckr,typ)>-1)return 1;else return 0});
	if(typ.length==2&&typeof typ=="string")Hst.Sel[typ]=typ
	return Hst.Sel[typ]
}//��X�ѽL��ܦ�/�C
Brd.Upl=function(){var cds=Brd.Sel("All")
	for(i=0;i<cds.length;i++){
		Id(cds[i]).style.backgroundColor=Sqr.B[Brd[cds[i]].B]
		Id(cds[i]).innerHTML=Sqr.S[Brd[cds[i]].S]
		Id(cds[i]).style.color=Sqr.F[Brd[cds[i]].F]
	}
}//��s�ѽL�N�X
Brd.Cln=function(msg,sel,tgt){var clc=0;if(!msg)clc=1;else clc=confirm(msg)
	if(clc){if(!sel)sel="All";sel=Brd.Sel(sel)
		for(i=0;i<sel.length;i++){
			Brd.Qre(sel[i],["S","F"],[2,0])
			if((Asc(sel[i][0])+Val(sel[i][1]))%2==0)Brd.Qre(sel[i],"B",0)
			else Brd.Qre(sel[i],"B",1)
		}
	}
}//�M���ѽL���w����
Brd.Adn=function(){
	
}//�B�~�\��
Brd.Mrk=function(){
	
}//���U�аO
Brd.Hst=function(typ,tgt){
	for(var i=0;i<=Tn;i++)if(Hst[typ][i]==tgt)return i;return 0
}//�����d��
Usr.Set=function(crd){
	if(!Rul.Lmt(crd)){Brd.Qre(crd,"S",Tn%2);Tn++;Hst.Crd[Tn]=crd;Rul();Hst.Brd[Tn]=Brd.Rec()}
}//�]�m�Ÿ�
/*
Usr.Gto([crd])�e�����w�^�X/�]�m�Ӯy�Ъ����w�^�X
Usr.Udo([crd])�e���W�@�^�X/�]�m�Ӯy�Ъ��W�@�^�X
Usr.Rdo([crd])�e���U�@�^�X/�]�m�Ӯy�Ъ��U�@�^�X
Usr.Adn()�B�~�\��
Usr.Lst()�ثe���̫�@�^�X
Usr.Tol()�ϥΪ̤u��
Usr.MsO()�ϥΪ̷ƹ�����
Usr.KDw()�ϥΪ���L���U
Usr.KUp()�ϥΪ���L��}
Usr.Mnu()�ϥΪ̿��
Usr.Cln()�ϥΪ̭n�D�M���ѽL

Shell.js �߼h(�C���W�h)
Rul()�C���W�h
Rul.Lmt(crd)�W�h����
Ext.Brd()�X�R�ѽL
Ext.Adn()�X�R�\��
Ext.Rul()�X�R�W�h
Ext.Tol()�X�R�u��
Ext.Lmt()�X�R�W�h����
Ext.Mrk()�X�R�аO
Ext.Ext.???()�A�X�R����

Gear.js ����(�u�W���)
Svr�u�W�A�Ȧ�}(�r��)

Brd.Upl()��s�ѽL�N�X
Brd.Get()���o�ѽL�N�X
Usr.Lgn()�ϥΪ̵n�J
Usr.Gvp()�ϥΪ̻{��
*/