Shl.Ara.Adapter=[];Dft.Adapter={Ara:0,QJd:1}
Shl.Rul.Adapter=function(){return Ara.Rul("Adapter")}
Shl.Lmt.Adapter=function(crd,sym){
	var vtQ=Vct("Q"),vt28=Vct("28");Hst.Rut[Tn]=[];if(Tn<2)return 0
	for(i=0;i<8;i++){
		if(Id(Crd(crd,vtQ[i]))&&Qre(Crd(crd,vtQ[i]),"Sym")==sym){
			var vts=[
				Crd(crd,vtQ[i][0]),
				Crd(crd,vtQ[i][0]+vtQ[i][0]),
				Crd(crd,vtQ[i][0]+vtQ[i][2]),
				Crd(crd,vtQ[i][2]),
			]
			if(
				Id(vts[0])&&Qre(vts[0],"Sym")==2&&Id(vts[1])&&Qre(vts[1],"Sym")==2||
				Id(vts[0])&&Qre(vts[0],"Sym")==2&&Id(vts[2])&&Qre(vts[2],"Sym")==2||
				Id(vts[3])&&Qre(vts[3],"Sym")==2&&Id(vts[2])&&Qre(vts[2],"Sym")==2
			)Hst.Rut[Tn]=Hst.Rut[Tn].concat(crd)
		}
		if(Id(Crd(crd,vt28[i]))&&Qre(Crd(crd,vt28[i]),"Sym")==sym){
			var vts=Crd(crd,Mid(vt28[i],0,vt28[i].length/2))
			if(Id(vts)&&Qre(vts,"Sym")==2)Hst.Rut[Tn]=Hst.Rut[Tn].concat(crd)
		}
	}
	return !Hst.Rut[Tn].length>0
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
	Dft.Adapter.Ara=Id("Adapter-Ara").checked
	Ara.OpK("Adapter")
}