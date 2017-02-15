Shl.Ara.Mirror=[];Dft.Mirror={ToM:4}
Shl.Rul.Mirror=function(){var Mir=[Sel("A1:I4"),Sel("A6:I9")]
	if(Tn>Dft.Mirror.ToM)for(var i=0;i<2;i++){
		for(var j=0;j<Mir[i].length;j++){var crd=Mir[i][j],mcd=crd[0]+(10-Val(crd[1]))
			if(Hst.Crd.indexOf(crd)<Dft.Mirror.ToM+1)continue
			if(Qre(crd,"Sym")==i&&Qre(mcd,"Sym")==2)Qre(mcd,"Sym",i)
		}
	}
}
Shl.Adn.Mirror=function(){
	Qre(Sel("5"),"Sym",3)
}
Shl.Ckr.Mirror=function(crd){
	if(Tn==0&&Val(crd[1])>5)return 0
	if(Tn==1&&Val(crd[1])<5)return 0
	return 1
}
Shl.Opt.Mirror=function(){
	OpS("","1","Mirror設定")
	if(!Dft.System.Oln)OpS("Mirror-ToM","t","反射回合:",Dft.Mirror.ToM)
}
Shl.OpK.Mirror=function(v){
	for(var i=0;i<MdQ.length;i++)if(Dft[MdQ[i]].QJd)Dft[MdQ[i]].QJd=0
	if(Dft.Connect)Dft.Connect.Rul=0;if(v)return
	if(!Dft.System.Oln&&Val(Id("Mirror-ToM").value)!=NaN&&Id("Mirror-ToM").value!="")Dft.Mirror.ToM=Val(Id("Mirror-ToM").value)
	if(Dft.Mirror.ToM<4)Dft.Mirror.ToM=4
	if(Dft.Mirror.ToM>10)Dft.Mirror.ToM=10
};Shl.OpK.Mirror(1)