Shl.Ara.Connect=[];Dft.Connect={Ara:0,QJd:1,Rul:0}
Shl.Rul.Connect=function(){return Ara.Rul("Connect",Cnt())}
Shl.Lmt.Connect=function(crd,sym){
	var cd8=Crd(crd,"8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	Hst.Rut[Tn]=Flt(Crd(crd,"8"),function(crd){if(Id(crd))if(Qre(crd,"Sym")==sym)return 1;return 0})
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Connect=function(){Ara.Mrk("Connect")}
Shl.Brd.Connect=function(){}
Shl.Adn.Connect=function(){
	switch(Dft.Connect.Rul){
		case 1:var Os=Crd("E5","4"),Xs=Crd("E5","X");Tn=2
			Qre(Os[Math.floor(Rnd()*4)],"Sym",0);Qre(Xs[Math.floor(Rnd()*4)],"Sym",1);break
		case 2:var s=Crd("E5",Vct("24"))
			Qre(s[Math.floor(Rnd()*4)],"Sym",0)
			while(1){var crd=s[Math.floor(Rnd()*4)]
				if(Qre(crd,"Sym")!=0){Qre(crd,"Sym",1);break}
			}Tn=2
	}
}
Shl.Ckr.Connect=function(crd){return Ara.Ckr("Connect",crd)}
Shl.Opt.Connect=function(){
	Id("OptionMenu").innerHTML+="Connect設定:<br>"
	if(!Dft.System.Oln){
		OpS("Connect-Rul-0/Connect-Rul","r","無設置",Dft.Connect.Rul==0)
		OpS("Connect-Rul-1/Connect-Rul","r","隨機設置",Dft.Connect.Rul==1)
		OpS("Connect-Rul-2/Connect-Rul","r","對峙設置",Dft.Connect.Rul==2)
	}
	Ara.Opt("Connect")
}
Shl.OpK.Connect=function(){
	if(!Dft.System.Oln)for(var i=0;i<3;i++)if(Id("Connect-Rul-"+i).checked)Dft.Connect.Rul=i
}
Shl.Rls.Connect="己方所有符號的前，後，左，右，右前，左前，右後，右左方，單位為一格，其餘無法設置"