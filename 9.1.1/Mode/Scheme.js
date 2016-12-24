Shl.Ara.Scheme=[[],[]];Dft.System.Blk=18
Dft.Scheme={Ara:1,Lmt:1}
Shl.Rul.Scheme=function(){
	if(Tn>2)for(var i=0;i<2;i++){
		if(Ara(Shl.Ara.Scheme[i],Sqr.Sym[i]+"A")||Ara(Shl.Ara.Scheme[i],Sqr.Sym[(i+1)%2]+">0"))return Sqr.Sym[(i+1)%2]+"獲勝"
	}Shl.Ara.Scheme=[[],[]]
	for(var i=0;i<2;i++)if(Tn>i)Shl.Ara.Scheme[i]=Flt(Crd(Hst.Crd[i+1],"8"),function(crd){if(Qre(crd,"Sym")!=3&&Shl.Ara.Scheme[0].indexOf(crd)<0)return 1;return 0})
	if(Tn==1)Shl.Ara.Scheme.Lmt=Flt(Crd(Hst.Crd[1],["28","Q","8"]),function(crd){if(Qre(crd,"Sym")==2)return 1;return 0})
}
Shl.Lmt.Scheme=function(crd,sym){
	if(Tn<2&&Sel("C3:G7").indexOf(crd)>-1&&Dft.Scheme.Lmt)return 1
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
Shl.Brd.Scheme=function(){}
Shl.Adn.Scheme=function(){}
Shl.Ckr.Scheme=function(crd){return 1}
Shl.Opt.Scheme=function(){
	Id("OptionMenu").innerHTML+="Scheme設定:<br>"
	OpS("Scheme-Ara","k","雙方區域",Dft.Scheme.Ara)
	OpS("Scheme-Lmt","k","首回限制",Dft.Scheme.Lmt)
}
Shl.OpK.Scheme=function(){
	Dft.System.Blk=18
	Dft.Scheme.Ara=Id("Scheme-Ara").checked
	Dft.Scheme.Lmt=Id("Scheme-Lmt").checked
}