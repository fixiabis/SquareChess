Shl.Ara.Mirror=[];Dft.Mirror={}
Shl.Rul.Mirror=function(){var Mir=[Sel("A1:I4"),Sel("A6:I9")]
	if(Tn>2)for(var i=0;i<2;i++){
		for(var j=0;j<Mir[i].length;j++){var crd=Mir[i][j],mcd=crd[0]+(10-Val(crd[1]))
			if(Qre(crd,"Sym")==i&&Qre(mcd,"Sym")==2)Qre(mcd,"Sym",i)
		}
	}
}
Shl.Lmt.Mirror=function(){}
Shl.Mrk.Mirror=function(){}
Shl.Brd.Mirror=function(){}
Shl.Adn.Mirror=function(){
	Qre(Sel("5"),"Sym",3)
}
Shl.Ckr.Mirror=function(crd){
	if(Tn==0&&Val(crd[1])>5)return 0
	if(Tn==1&&Val(crd[1])<5)return 0
	return 1
}
Shl.Opt.Mirror=function(){}
Shl.OpK.Mirror=function(){
	if(Dft.Connect)Dft.Connect.Rul=0
}