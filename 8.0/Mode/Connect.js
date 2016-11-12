Shl.Ara.Connect=[];Dft.Connect={Ara:0,QJd:1}
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
		if(Shl.Ara.Connect[Sqr.Sym[sym]].All.indexOf(Chr(cd1)+cd2)>-1)Qre(Chr(cd1)+cd2,"BgC",sym+2)
	}
}
Shl.Brd.Connect=function(){}
Shl.Adn.Connect=function(){}
Shl.Ckr.Connect=function(crd){
	return Shl.Ara.Connect[Sqr.Sym[Tn%2]][0].indexOf(crd)>-1
}
Shl.Opt.Connect=function(){}