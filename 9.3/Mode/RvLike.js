Shl.Ara.RvLike=[];Dft.RvLike={Ara:1}
Shl.Rul.RvLike=function(){var ara=[],brd=Rec();Shl.Ara.RvLike.N=[];Qre(Sel("All"),"Sym",2,1)
	Qre(["E4","E6","D4","F6"],"Sym",0,1);Qre(["D5","D6","F4","F5"],"Sym",1,1);Qre("E5","Sym",3)
	for(var i=1;i<Tn+1;i++){var mcd=Hst.Crd[i],sym=(i+1)%2,vts=Vct("8");Qre(mcd,"Sym",sym,1)
		for(var j=0;j<vts.length;j++){var s=Qre(Crd(mcd,vts[j]),"Sym"),k=0;if(s==2||s==sym)continue
			var cds=Flt(Sel(mcd+"~"+Crd(mcd,"9"+vts[j])),function(crd){if(Qre(crd,"Sym")==2)return 2;return 1})
			for(var l=1;l<cds.length;l++){if(Qre(cds[l],"Sym")==sym){k=l;break}}Qre(cds.slice(0,k),"Sym",sym,1)
		}
	}
	for(var i=0;i<2;i++)Shl.Ara.RvLike[Sqr.Sym[i]]=Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==i)return 1})
	for(var i=0;i<Shl.Ara.RvLike[Sqr.Sym[Tn%2]].length;i++){
		var vts=Vct("8"),mcd=Shl.Ara.RvLike[Sqr.Sym[Tn%2]][i],sym=Tn%2
		for(var j=0;j<vts.length;j++){var s=Qre(Crd(mcd,vts[j]),"Sym"),k=0;if(s==2||s==sym)continue
			var cds=Flt(Sel(mcd+"~"+Crd(mcd,"9"+vts[j])),function(crd){if(Qre(crd,"Sym")==2)return 2;return 1})
			for(var l=1;l<cds.length;l++){if(Qre(cds[l],"Sym")==sym){k=l;break}}
			if(k==0)Shl.Ara.RvLike.N.push(Sel(mcd+"~"+Crd(mcd,"9"+vts[j]))[cds.length])
		}
	}Rec(brd);if(Shl.Ara.RvLike.N.length==0){Hst.Brd[Tn]=brd;Hst.Crd[Tn]=Hst.Crd[Tn-2];Tn++;Rul()}
	if(Tn==72)return Scr(Shl.Ara.RvLike.O.length,Shl.Ara.RvLike.X.length)
}
Shl.Mrk.RvLike=function(){
	if(Dft.RvLike.Ara)for(var i=0;i<2;i++)Qre(Shl.Ara.RvLike[Sqr.Sym[i]],"BgC",i+3)
}
Shl.Adn.RvLike=function(){Qre(["E4","E6","D4","F6"],"Sym",0);Qre(["D5","D6","F4","F5"],"Sym",1);Qre("E5","Sym",3)}
Shl.Ckr.RvLike=function(crd){return Shl.Ara.RvLike.N.indexOf(crd)>-1}
Shl.Opt.RvLike=function(){OpS("","1","RvLike設定");OpS("RvLike-Ara","k","雙方區域",Dft.RvLike.Ara)}
Shl.OpK.RvLike=function(){Dft.System.Blk=0;if(!Dft.System.Oln)Dft.RvLike.Ara=Id("RvLike-Ara").checked}