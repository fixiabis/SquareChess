Shl.Ara.Invert=[];Dft.Invert={};Dft.System.Nxt=1
Shl.Ckr.Invert=function(crd){var sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--){if(MdQ[i]=="Invert")continue
		if(Shl.Lmt[MdQ[i]](crd,sym))return 2
	}if(Tn<2)return 1;return 0
}
Shl.OpK.Invert=function(){Dft.System.Qsr=0}
Shl.OpK.Invert()