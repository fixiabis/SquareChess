Shl.Ara.Adapter=[];Dft.Adapter={Ara:0,QJd:1}
Shl.Rul.Adapter=function(){return Ara.Rul("Adapter",Cnt())}
Shl.Lmt.Adapter=function(crd,sym){
	var vtQ=Vct("Q"),vt28=Vct("28");Hst.Rut[Tn]=[];if(Tn<2)return 0
	for(var i=0;i<8;i++){
		if(Qre(Crd(crd,vtQ[i]),"Sym")==sym){
			var vts=[
				Crd(crd,vtQ[i][0]),
				Crd(crd,vtQ[i][0]+vtQ[i][0]),
				Crd(crd,vtQ[i][0]+vtQ[i][2]),
				Crd(crd,vtQ[i][2]),
			]
			for(var j=0;j<vts.length;j++){var s=Qre(vts[j],"Sym")
				vts[j]=(s==2||s==sym&&s.length>0)
			}
			if(vts[0]&&vts[1]||vts[0]&&vts[2]||vts[3]&&vts[2])Hst.Rut[Tn]=Hst.Rut[Tn].concat(crd)
		}
		if(Qre(Crd(crd,vt28[i]),"Sym")==sym){
			var vts=Crd(crd,Mid(vt28[i],0,vt28[i].length/2)),s=Qre(vts,"Sym")
			if(s==2||s==sym)Hst.Rut[Tn]=Hst.Rut[Tn].concat(crd)
		}
	}return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Adapter=function(){Ara.Mrk("Adapter")}
Shl.Brd.Adapter=function(){}
Shl.Adn.Adapter=function(){}
Shl.Ckr.Adapter=function(crd){return Ara.Ckr("Adapter",crd)}
Shl.Opt.Adapter=function(){
	Id("OptionMenu").innerHTML+="Adapter設定:<br>"
	Ara.Opt("Adapter")
}
Shl.OpK.Adapter=function(){
	Ara.OpK("Adapter")
}