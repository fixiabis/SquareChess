//Simplify.js ���²��
var doc=document
function Rnd(){return Math.random()}//��X�ü�
function Val(v){return v*1}//�ƭȤ�
function Split(s,m){return s.split(m)}//���Φr�ꬰ�����ǥѫ��w�r(m)
function Instr(s,c){return s.indexOf(c)}//�j�M�r���m
function Mid(s,r,v){return s.substr(r,v)}//�q�_�l�I(r)���o���w��(v)�Ѧr��(s)
function Asc(s){return s.charCodeAt(s)}
function Chr(v){return String.fromCharCode(v)}
function Id(d){return document.getElementById(d)}
function Class(c){return document.getElementsByClassName(c)}
//Core.js �֤�(�򥻥\��P�W�h�`�Ψ��)
var Tn=0,Dft={},Hst={},MdQ=[],Sqr={Sym:["O","X",""],FtC:["","blue"],BgC:["white","lightgray"]},Brd={},Vct={}
//�ŧi�^�X��(Tn)�A�w�]����(Dft)�A��������(Hst)�A�Ҧ��ɦ�C(MdQ)�A�����ݩ�(Sqr)�A�ѽL����(Brd)�A��V����(Vct)
function Ldr(){
	if(location.search&&Mid(location.search,0,6)=="?mode="){//�Y���d�߭ȡA�B�}�Y��"?mode="��
		var location.search=location.search.replace("%3A",":")//�ܧ�d�߭Ȥ��e"%3A"��":"
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
		Id("Board").childNodes[0].childNodes[0].innerHTML="Directing..."//���ϥΪ̪`�N�������b���s�ɦV
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
	}return Chr(Asc(c[0])+x)+Val(Val(c[1])+y)//�Ǧ^�y��
}//�Ǥ�V��X�y��
Crd.Flt=function(crds,slf){
	
}//�z��y��
Crd.Vct=function(typ){
	switch(typ[i]){//�P�O���O(typ)
		case"O":return"F,B,R,L,FR,FL,BR,BL".split(",")
		case"X":return"FR,FL,BR,BL".split(",")
		case"4":return"F,B,R,L".split(",")
		case"Q":return"FFR,FFL,FRR,FFL,BBR,BBL,BRR,BLL".split(",")
		case"V":
		case"W":
		case"Y":
		case"H":return"R,L".split(",")
		case"I":return"F,B".split(",")
	}
}//�ǥN�X��X��V

Brd.Rec(tn|brd,[typ])Ū��/�����ѽL�N�X
Brd.Cre()�إߴѽL
Brd.Rsz()���]�ѽL�j�p
Brd.Sym(crd|crds|sym,[typ])�Ÿ��N�X���o/�ܧ�
Brd.Sel(typ|typs)��X�ѽL��ܦ�/�C
Brd.Gto([crd])�e�����w�^�X/�]�m�Ӯy�Ъ����w�^�X
Brd.Udo([crd])�e���W�@�^�X/�]�m�Ӯy�Ъ��W�@�^�X
Brd.Rdo([crd])�e���U�@�^�X/�]�m�Ӯy�Ъ��U�@�^�X
Brd.Lst()�ثe���̫�@�^�X
Brd.Upl()��s�ѽL�N�X
Brd.Get()���o�ѽL�N�X
Brd.Cln(msg,tgt)�M���ѽL���w����
Brd.Adn()�B�~�\��
Brd.Qre(crd|crds,atr,[typ])�ѽL�����ݩʨ��o/�ܧ�
Brd.Mrk()���U�аO

Usr.Set(crd)�ϥΪ̳]�m�Ÿ�
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