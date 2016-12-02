Shl.Ara.Divider=[];Dft.Divider={Ara:0,QJd:1}
Shl.Rul.Divider=function(){return Ara.Rul("Divider",Cnt())}
Shl.Lmt.Divider=function(crd,sym){
	var vt8=Vct("8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	for(i=0;i<8;i++){
		var lin=Crd(crd,[vt8[i],"2"+vt8[i],"3"+vt8[i],"4"+vt8[i],"5"+vt8[i],"6"+vt8[i],"7"+vt8[i],"8"+vt8[i],"9"+vt8[i]])
		Hst.Rut[Tn]=Hst.Rut[Tn].concat(Flt(lin,
			function(crd){var s=Qre(crd,"Sym");if(!Id(crd)||s!=sym&&s!=2)return 2;return 1}
		))
	}Hst.Rut[Tn]=Flt(Hst.Rut[Tn],function(crd){if(Qre(crd,"Sym")==sym)return 1;return 0})
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Divider=function(){Ara.Mrk("Divider")}
Shl.Brd.Divider=function(){}
Shl.Adn.Divider=function(){}
Shl.Ckr.Divider=function(crd){return Ara.Ckr("Divider",crd)}
Shl.Opt.Divider=function(){
	Id("OptionMenu").innerHTML+="Divider設定:<br>"
	Ara.Opt("Divider")
}
Shl.OpK.Divider=function(){
	Ara.OpK("Divider")
}