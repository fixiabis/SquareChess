Shl.Ara.Adapter=[];Dft.Adapter={Ara:0,QJd:1,Ori:0,Net:[]}
Shl.Rul.Adapter=function(){return Ara.Rul("Adapter",Cnt("Adapter"))}
Shl.Lmt.Adapter=function(crd,sym,ori){
	var vtQ=Vct("Q"),vt28=Vct("28");Hst.Rut[Tn]=[];if(Tn<2)return 0
	for(var i=0;i<8;i++){var cds=[],k=function(crd){return 1}
		if(Dft.Adapter.Ori&&!ori){
			if(!Dft.Adapter.Net.length)Dft.Adapter.Net=Net(Hst.Crd[sym+1],"Adapter",sym)
			k=function(crd){if(Dft.Adapter.Net.indexOf(crd)>-1)return 1}
		}
		if(Qre(Crd(crd,vtQ[i],1),"Sym")==sym){
			var vts=[
				Crd(crd,vtQ[i][0],1),
				Crd(crd,vtQ[i][0]+vtQ[i][0],1),
				Crd(crd,vtQ[i][0]+vtQ[i][2],1),
				Crd(crd,vtQ[i][2],1),
			]
			for(var j=0;j<vts.length;j++){var s=Qre(vts[j],"Sym")
				vts[j]=(s==2||s==sym)
			}
			if(vts[0]&&vts[1]||vts[0]&&vts[2]||vts[3]&&vts[2])if(k(Crd(crd,vtQ[i],1)))cds.push(Crd(crd,vtQ[i],1))
		}
		if(Qre(Crd(crd,vt28[i],1),"Sym")==sym){
			var vts=Crd(crd,Mid(vt28[i],0,vt28[i].length/2),1),s=Qre(vts,"Sym")
			if(s==2||s==sym)if(k(Crd(crd,vt28[i],1)))cds.push(Crd(crd,vt28[i],1))
		}Hst.Rut[Tn]=Hst.Rut[Tn].concat(cds)
		if(Hst.Rut[Tn].length&&MdQ.indexOf("Follow")<0&&Dft.System.Per&&!Dft.Adapter.Ori)return 0
	}
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Adapter=function(){Ara.Mrk("Adapter")}
Shl.Ckr.Adapter=function(crd){return Ara.Ckr("Adapter",crd)}
Shl.Opt.Adapter=function(){
	OpS("","1","Adapter設定");Ara.Opt("Adapter")
}
Shl.OpK.Adapter=function(){
	Ara.OpK("Adapter")
}