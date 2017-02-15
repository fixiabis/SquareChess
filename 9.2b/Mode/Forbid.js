Shl.Ara.Forbid=[];Dft.Forbid={}
Shl.Ckr.Forbid=function(crd){var sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--){if(MdQ[i]=="Forbid")continue
		if(Shl.Lmt[MdQ[i]](crd,sym)||
		Shl.Ara[MdQ[i]][Sqr.Sym[sym]].All.indexOf(crd)>-1||
		Shl.Lmt[MdQ[i]](crd,(sym+1)%2)||
		Shl.Ara[MdQ[i]][Sqr.Sym[(sym+1)%2]].All.indexOf(crd)>-1)return 0
	}return 1
}
Shl.OpK.Forbid=function(){Dft.System.Qsr=0}
Shl.OpK.Forbid()