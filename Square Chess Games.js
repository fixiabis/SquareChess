//Simplify.js ���²��
var doc=document
function Rnd(){return Math.random()}//��X�ü�
function Val(v){return v*1}//�ƭȤ�
function Split(s,m){return s.split(m)}//���Φr�ꬰ�����ǥѫ��w�r(m)
function Instr(s,c){return s.indexOf(c)}//�j�M�r���m
function Mid(s,r,v){return s.substr(r,v)}//�q�_�l�I(r)���o���w��(v)�Ѧr��(s)
function Asc(s){return s.charCodeAt()}
function Chr(v){return String.fromCharCode(v)}
function Id(d){return document.getElementById(d)}
function Class(c){return document.getElementsByClassName(c)}
//Core.js �֤�(�򥻥\��P�W�h�`�Ψ��)
var Tn=0,Dft={},Hst={Brd:[],Crd:[],Sel:{}},MdQ=[],Sqr={Sym:["O","X",""],FtC:["","blue"],BgC:["white","lightgray"]},Brd={}
//�ŧi�^�X��(Tn)�A�w�]����(Dft)�A��������(Hst)�A�Ҧ��ɦ�C(MdQ)�A�����ݩ�(Sqr)�A�ѽL����(Brd)�A��V����(Vct)
function Ldr(){
	if(location.search&&Mid(location.search,0,6)=="?mode="){//�Y���d�߭ȡA�B�}�Y��"?mode="��
		location.search=Mid(location.search.replace("%3A",":"),1,location.search.length-1)
		//�ܧ�d�߭Ȥ��e"%3A"��":"
		doc.title=sr.split("?mode=")[1];MdQ=doc.title.split(":");LMd(0)
		//�ܧ󭶭����D�A�N�Ҧ��W�٦s�J��C(MdQ)�A�˸��Ĥ@�ӼҦ�(MdL)
	}else{//�Ϥ�
		var Mod=[
			"Connect","Blocker","Divider","Adapter",
			"Connect:Attack","Adapter:Attack","Connect:Defend",
			"Connect:Scheme","Divider:Scheme","Adapter:Scheme",
			"Divider:Zombie","Connect:Zombie","Adapter:Zombie",
			"Divider:Follow","Connect:Follow","Adapter:Follow",
			"Blocker:ByLine"
		]//�ŧi�i��Ҧ�(Mod)
		Id("Brd").childNodes[0].childNodes[0].innerHTML="Directing..."//���ϥΪ̪`�N�������b���s�ɦV
		setTimeout('location="chess.html?mode="+"'+Mod[Math.floor(Rnd()*Mod.length)]+'"',2000)//2����H���ɦV�ܥi��Ҧ�(Mod)
	}
}//��ƨ��o
function MdL(ord){
	var s=doc.createElement("script")//�إ�Script����
	s.src="Shell/"+MdQ[ord]+".js"//�Ҧ��ɦ�m
	if(MdQ[ord+1])s.onload=function(){MdL(ord+1)};else s.onload=function(){Brd.Cre();Brd.Cln();Brd.Rsz()}
	//�Y�U�@�ӼҦ��ɦs�b�ɡA�˸��U�@�ӼҦ�(MdL)�A�Ϥ��إߴѽL(Brd.Cre)�A��l�ƴѽL(Brd.Cln)�A�]�w�ѽL�j�p(Brd.Rsz)
	doc.body.appendChild(s)
}//�Ҧ��˸�
function Crd(crd,vct){var x=0,y=0//�ŧi�y��X�b(x)�AY�b(y)
	vct=Crd.Vct(vct)//�T�{��V(vct)
	if(typeof vct=="object"){//���V(vct)�������
		for(var i=0;i<vct.length;i++)vct[i]=Crd(crd,vct[i])//�v�@���o�y��(crd)�ǥѤ�V(vct)
		return vct//�Ǧ^�y�Ъ���(crd)
	}
	for(var i in vct)switch(vct[i]){//�v�@Ū���P�P�O��V
		case"F":y--;break//�e��
		case"B":y++;break//���
		case"R":x++;break//�k��
		case"L":x--;break//����
	}return Chr(Asc(crd[0])+x)+Val(Val(crd[1])+y)//�Ǧ^�y��
}//�Ǥ�V��X�y��
Crd.Flt=function(cds,ord){var res=[]//�ŧi��X����(res)
	for(var i=0;i<cds.length;i++)if(ord(cds[i]))res.push(cds[i]);return res//���ŦX����(ord)�ɲM�ŸӶ���
}//�z��y��
Crd.Vct=function(typ){
	if(typeof typ=="object"){for(var i=0;i<typ.length;i++)typ[i]=Crd.Vct(typ[i]);return typ}
	//�Y���O������A�v�@���o��V�ǥ����O
	if(Val(typ[0])&&typ[1]){tp=typ.replace(typ[0],"");var vct="",tp=Crd.Vct(tp)//�Y�ѼƥH�Ʀr�}�Y�ɡA�N��V����(tp)
		if(typeof tp=="object"){
			for(var i=0;i<tp.length;i++)tp[i]=Crd.Vct(typ[0]+tp[i]);return tp
		}//�Y����(tp)������A�v�@Ū����V�ǥѳ���
		for(i=0;i<Val(typ[0]);i++)vct+=tp;return vct//���ƫ��X��V
	}
	switch(typ[0]){//�P�O���O�Ĥ@�X(typ[0])
		case"8":return"F,B,R,L,FR,FL,BR,BL".split(",")//�K��
		case"X":return"FR,FL,BR,BL".split(",")//�ץ|��
		case"4":return"F,B,R,L".split(",")//���|��
		case"Q":return"FFR,FFL,FRR,FFL,BBR,BBL,BRR,BLL".split(",")//���K��
		case"V":
			return Crd.Flt(Crd.Vct("X"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})//�ץ|��z��
		case"W":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
			//���K��z��(�|��)
		case"Y":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1]+typ[1])>-1)return 1;else return 0})
			//���K��z��(���)
		case"H":return"R,L".split(",")//���k��
		case"I":return"F,B".split(",")//�e���
	}return typ
}//�ǥN�X��X��V
Brd.Rec=function(brd){var atr=["S","F","B"],rbd=""//�ŧi�ݩ�(atr)�A�O���ѽL(rbd)
	if(typeof brd=="number"&&Hst.Brd[brd])Brd.Rec(Hst.Brd[brd])
	//�Y�ѽL��(brd)���ƭȥB�ѽL�O���s�b�AŪ���ѽL����(Hst.Brd)
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)for(i=0;i<4;i++){
		if(brd)Brd.Sym(Chr(cd1)+cd2,atr[i],Val(brd[(cd1-65+cd2-1)*3+i]))
		else rbd+=Brd.Sym(Chr(cd1)+cd2,atr[i])
	}return rbd//�Y�ѽL�Ȧs�b�A�ܧ�ѽL����A�Ϥ��O���ѽL(rbd)
}//Ū��/�����ѽL�N�X
Brd.Cre=function(){
	var brd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Usr.Lst()' style='background-color:dimgray'>"
	for(cd2=1;cd2<10;cd2++){brd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			brd+="<td id='"+Chr(cd1)+cd2+"' onclick='Usr.Set(this.id)' ondblclick='Usr.Udo(this.id)' class='bt'></td>"
			Brd[Chr(cd1)+cd2]={S:"",F:"",B:"",O:""}
		}brd+="</tr>"
	}Id("Brd").innerHTML=brd+"</table><div id='UC'><table><tr><td class='bt' onClick='Usr.Udo()' onContextMenu='Usr.Gto()'>Undo</td><td class='bt' onclick='Usr.Cln()' onContextMenu='Usr.Adn()'>Clean</td></tr></table></div>"//�إߴѽL�P²�������
	Id("Brd").style.animation="down 2s"//�ѽL����S��
}//�إߴѽL
Brd.Rsz=function(){
	Id("Brd").style.height="0px";Id("UC").style.display="none"//���ä���
	var sz=doc.body.clientHeight,C=1//�ŧi�̪��j�p(sz)���������סA��V�ù���(C)
	if(doc.body.clientWidth<sz){sz=doc.body.clientWidth;Id("UC").style.display="inline";C=0}
	//�Y�����e�פj��̪��j�p(sz)�A�̪��j�p(sz)�������e�סA���²��������A��V�ù����ܧ�
	sz=Math.floor(sz/9)
	for(i=0;i<83;i++){if(!Class("bt")[i])break
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		Class("bt")[i].style.lineHeight=sz+"px"
	}//�]�w�ѽL�氪�סA�e�סA��r�j�p�A�氪
	for(i=81;i<83;i++){
		if(Class("bt")[i])Class("bt")[i].style.width=sz*4.5+"px"
		else Class("bt")[i-1].style.width=sz*9+"px"
	}//�]�w²��������e��
	Id("Brd").style.height=sz*9+"px";Id("UC").style.width=sz*9+"px"//��ܤ���
	Id("Brd").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(C)Id("Brd").style.marginTop=(doc.body.clientHeight-(sz*9))/2+"px"
	Id("UC").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"//����m��
	if(Val(Split(Id("Brd").style.marginLeft,"px")[0])<40){
		Id("UCM").style.display="inline"
		for(i=0;i<3;i++)Class("list")[i].style.width=doc.body.clientWidth/3+"px"
	}else Id("UCM").style.display="none"//�B�~������
}//���]�ѽL�j�p
Brd.Qre=function(crd,atr,typ){
	if(typeof crd=="object")for(var i=0;i<crd.length;i++)Brd.Qre(crd[i],atr,typ);Brd[crd][atr]=typ
}//�ѽL�����ݩʨ��o/�ܧ�
Brd.Sel=function(typ,ord){
	if(Hst.Sel[typ])return Hst.Sel[typ];Hst.Sel[typ]=[]
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
	if(Instr(typ,","))Hst.Sel[typ]=typ.split(",")
	if(Instr(typ,":")){var spt=typ.split(":");Hst.Sel[typ]=Crd(spt[0],spt[1])}
	if(typ.length==1)Hst.Sel[typ]=Crd.Flt(Brd.Sel("All"),function(ckr){if(Instr(ckr,typ)>-1)return 1;else return 0});return Hst.Sel[typ]
}//��X�ѽL��ܦ�/�C
/*
Brd.Upl()��s�ѽL�N�X
Brd.Get()���o�ѽL�N�X
Brd.Cln(msg,tgt)�M���ѽL���w����
Brd.Adn()�B�~�\��
Brd.Mrk()���U�аO

Usr.Set(crd)�]�m�Ÿ�
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