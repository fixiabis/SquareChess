Shl.Ara.Reversi=[];Dft.Reversi={Ara:1}
Shl.Rul.Reversi=function(){var ara=[],brd=Rec();Shl.Ara.Reversi.N=[]
	Qre(Sel("All"),"Sym",2,1);Qre(["E4","E6","D4","F6"],"Sym",0,1);Qre(["D5","D6","F4","F5"],"Sym",1,1)
	for(var i=1;i<Tn+1;i++){var mcd=Hst.Crd[i],sym=(i+1)%2,vts=Vct("8");Qre(mcd,"Sym",sym,1)
		for(var j=0;j<vts.length;j++){var s=Qre(Crd(mcd,vts[j]),"Sym"),k=0;if(s==2||s==sym)continue
			var cds=Flt(Sel(mcd+"~"+Crd(mcd,"9"+vts[j])),function(crd){if(Qre(crd,"Sym")==2)return 2;return 1})
			for(var l=1;l<cds.length;l++){if(Qre(cds[l],"Sym")==sym){k=l;break}}Qre(cds.slice(0,k),"Sym",sym,1)
		}
	}
	for(var i=0;i<2;i++)Shl.Ara.Reversi[Sqr.Sym[i]]=Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==i)return 1})
	console.log(Sqr.Sym[Tn%2])
	for(var i=0;i<Shl.Ara.Reversi[Sqr.Sym[Tn%2]].length;i++){
		var vts=Vct("8"),mcd=Shl.Ara.Reversi[Sqr.Sym[Tn%2]][i],sym=Tn%2
		for(var j=0;j<vts.length;j++){var s=Qre(Crd(mcd,vts[j]),"Sym"),k=0;if(s==2||s==sym)continue
			var cds=Flt(Sel(mcd+"~"+Crd(mcd,"9"+vts[j])),function(crd){if(Qre(crd,"Sym")==2)return 2;return 1})
			for(var l=1;l<cds.length;l++){if(Qre(cds[l],"Sym")==sym){k=l;break}}
			if(k==0)Shl.Ara.Reversi.N.push(Sel(mcd+"~"+Crd(mcd,"9"+vts[j]))[cds.length])
		}
	}Rec(brd)
}
Shl.Mrk.Reversi=function(){
	if(Dft.Reversi.Ara)for(var i=0;i<2;i++)Qre(Shl.Ara.Reversi[Sqr.Sym[i]],"BgC",i+3)
}
Shl.Adn.Reversi=function(){Qre(["E4","E6","D4","F6"],"Sym",0);Qre(["D5","D6","F4","F5"],"Sym",1)}
Shl.Ckr.Reversi=function(crd){return Shl.Ara.Reversi.N.indexOf(crd)>-1}
Shl.Opt.Reversi=function(){OpS("","1","Reversi設定");OpS("Reversi-Ara","k","雙方區域",Dft.Reversi.Ara)}
Shl.OpK.Reversi=function(){Dft.System.Blk=0;if(!Dft.System.Oln)Dft.Reversi.Ara=Id("Reversi-Ara").checked}