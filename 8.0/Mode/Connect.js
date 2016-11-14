Shl.Ara.Connect=[];Dft.Connect={Ara:0,QJd:1,Rnd:0}
Shl.Rul.Connect=function(){return Ara.Rul("Connect")}
Shl.Lmt.Connect=function(crd,sym){
	var cd8=Crd(crd,"8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	Hst.Rut[Tn]=Flt(Crd(crd,"8"),function(crd){if(Id(crd))if(Qre(crd,"Sym")==sym)return 1;return 0})
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Connect=function(){Ara.Mrk("Connect")}
Shl.Brd.Connect=function(){}
Shl.Adn.Connect=function(){
	if(Dft.Connect.Rnd){var Os=Crd("E5","4"),Xs=Crd("E5","X")
		Set(Os[Math.floor(Rnd()*4)]);Set(Xs[Math.floor(Rnd()*4)])
	}
}
Shl.Ckr.Connect=function(crd){return Ara.Ckr("Connect",crd)}
Shl.Opt.Connect=function(){
	Id("OptionMenu").innerHTML+="Connect設定:<br>"
	OpS("Connect-Rnd","k","固定設置",Dft.Connect.Rnd)
	Ara.Opt("Connect")
}
Shl.OpK.Connect=function(){
	Dft.Connect.Ara=Id("Connect-Ara").checked
	Dft.Connect.Rnd=Id("Connect-Rnd").checked
	Ara.OpK("Connect")
}