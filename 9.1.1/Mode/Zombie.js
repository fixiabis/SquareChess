Shl.Ara.Zombie=[];Dft.Zombie={ToZ:10}
Shl.Rul.Zombie=function(){
	if(Tn>Dft.Zombie.ToZ)Qre(Flt(Sel("All"),
	function(crd){var key=Qre(crd,"Sym"),cds=Qre(Crd(crd,"8"),"Sym");if(key==2)return 0
		if(cds.indexOf((key+1)%2)>-1)return 1;return 0
	}),"Sym",4)
}
Shl.Lmt.Zombie=function(){}
Shl.Mrk.Zombie=function(){
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==4)return 1;return 0}),["BgC","FtC"],[12,2])
}
Shl.Brd.Zombie=function(){}
Shl.Adn.Zombie=function(){}
Shl.Ckr.Zombie=function(crd){return 1}
Shl.Opt.Zombie=function(){
	Id("OptionMenu").innerHTML+="Zombie設定:<br>"
	if(!Dft.System.Oln)OpS("Zombie-ToZ","t","感染回合:",Dft.Zombie.ToZ)
}
Shl.OpK.Zombie=function(){
	if(!Dft.System.Oln&&Val(Id("Zombie-ToZ").value)!=NaN)Dft.Zombie.ToZ=Val(Id("Zombie-ToZ").value)
	if(Dft.Zombie.ToZ<10)Dft.Zombie.ToZ=10
}