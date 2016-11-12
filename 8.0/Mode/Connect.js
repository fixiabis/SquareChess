Shl.Ara.Connect=[];Dft.Connect={Ara:0,QJd:1,Rnd:0}
Shl.Rul.Connect=function(){var Ara=Cnt();Shl.Ara.Connect=Ara
	if(Tn>2)if(Ara.P[0].length==Ara.P.All.length&&Dft.Connect.QJd||Ara.P.All.length==0)return Scr(Ara.O.All.length,Ara.X.All.length)
}
Shl.Lmt.Connect=function(crd,sym){
	var cd8=Crd(crd,"8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	Hst.Rut[Tn]=Flt(Crd(crd,"8"),function(crd){if(Id(crd))if(Qre(crd,"Sym")==sym)return 1;return 0})
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Connect=function(){
	if(Dft.Connect.Ara)for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)for(sym=0;sym<2;sym++){
		if(Shl.Ara.Connect[Sqr.Sym[sym]].All.indexOf(Chr(cd1)+cd2)>-1)Qre(Chr(cd1)+cd2,"BgC",sym+3)
	}
}
Shl.Brd.Connect=function(){}
Shl.Adn.Connect=function(){
	if(Dft.Connect.Rnd){var Os=Crd("E5","4"),Xs=Crd("E5","X")
		Set(Os[Math.floor(Rnd()*4)]);Set(Xs[Math.floor(Rnd()*4)])
	}
}
Shl.Ckr.Connect=function(crd){
	return Shl.Ara.Connect[Sqr.Sym[Tn%2]][0].indexOf(crd)>-1
}
Shl.Opt.Connect=function(){
	Id("OptionMenu").innerHTML+="Connect設定:<br>"
	OpS("Connect-Ara","k","雙方區域",Dft.Connect.Ara)
	OpS("Connect-QJd","k","快速判定",Dft.Connect.QJd)
	OpS("Connect-Rnd","k","固定設置",Dft.Connect.Rnd)
}
Shl.OpK.Connect=function(){
	Dft.Connect.Ara=Id("Connect-Ara").checked
	Dft.Connect.QJd=Id("Connect-QJd").checked
	Dft.Connect.Rnd=Id("Connect-Rnd").checked
}