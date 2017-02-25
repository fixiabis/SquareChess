Shl.Ara.Scheme=[[],[]];Dft.System.Blk=18
Dft.Scheme={Ara:1}
Shl.Rul.Scheme=function(){
	if(Tn>2)for(var i=0;i<2;i++){
		if(Ara(Shl.Ara.Scheme[i],Sqr.Sym[i]+"F")||Ara(Shl.Ara.Scheme[i],Sqr.Sym[(i+1)%2]+">0"))return Sqr.Sym[(i+1)%2]+"獲勝"
	}Shl.Ara.Scheme=[[],[]]
	for(var i=0;i<2;i++)if(Tn>i)Shl.Ara.Scheme[i]=Flt(Crd(Hst.Crd[i+1],"8"),function(crd){if(Qre(crd,"Sym")!=3&&Shl.Ara.Scheme[0].indexOf(crd)<0&&crd!=Hst.Crd[1]&&crd!=Hst.Crd[2])return 1;return 0})
	if(Tn==1)Shl.Ara.Scheme.Lmt=Flt(Crd(Hst.Crd[1],["28","Q","8"]),function(crd){if(Qre(crd,"Sym")==2)return 1;return 0})
}
Shl.Lmt.Scheme=function(crd,sym){
	if(Tn==1&&sym==1)return Shl.Ara.Scheme.Lmt.indexOf(crd)>-1;return 0
}
Shl.Mrk.Scheme=function(){
	if(Dft.Scheme.Ara){
		for(var i=0;i<2;i++){
			if(Shl.Ara.Scheme[i])for(var j=0;j<Shl.Ara.Scheme[i].length;j++){
				Qre(Shl.Ara.Scheme[i][j],"BgC",i+7)
			}
		}
	}
}
Shl.Opt.Scheme=function(){
	OpS("","1","Scheme設定");OpS("","2","輔助標記")
	OpS("Scheme-Ara","k","雙方區域",Dft.Scheme.Ara)
}
Shl.OpK.Scheme=function(){
	Dft.System.Blk=18
	Dft.Scheme.Ara=Id("Scheme-Ara").checked
	Dft.Scheme.Lmt=Id("Scheme-Lmt").checked
}