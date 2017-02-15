Shl.Ara.Divider=[];Dft.Divider={Ara:0,QJd:1,Ori:0,Net:[]}
Shl.Rul.Divider=function(){return Ara.Rul("Divider",Cnt("Divider"))}
Shl.Lmt.Divider=function(crd,sym,ori){var mcd=crd
	var vt8=Vct("8");Hst.Rut[Tn]=[];if(Tn<2)return 0
	for(i=0;i<8;i++){
		var lin=Sel(crd+"~"+Crd(crd,"9"+vt8[i]))
		Hst.Rut[Tn]=Hst.Rut[Tn].concat(Flt(lin,
			function(crd){var s=Qre(crd,"Sym")
				if(!Id(crd)||s!=sym&&s!=2)return 2
				else if(Dft.Divider.Ori&&!ori){
					if(!Dft.Divider.Net.length)Dft.Divider.Net=Net(Hst.Crd[sym+1],"Divider",sym)
					if(Dft.Divider.Net.indexOf(crd)>-1)return 1
				}else if(s==sym&&crd!=mcd)return 1;return 0
			}
		));if(Hst.Rut[Tn].length&&MdQ.indexOf("Follow")<0&&Dft.System.Per&&!Dft.Divider.Ori)return 0
	}return !Hst.Rut[Tn].length>0
}
Shl.Mrk.Divider=function(){Ara.Mrk("Divider")}
Shl.Ckr.Divider=function(crd){return Ara.Ckr("Divider",crd)}
Shl.Opt.Divider=function(){
	OpS("","1","Divider設定");Ara.Opt("Divider")
}
Shl.OpK.Divider=function(){
	if(!Dft.System.Oln){Dft.Divider.Ori=Id("Divider-Ori").checked
		if(Dft.Divider.Ori)Dft.System.Per=1
	}Ara.OpK("Divider")
}