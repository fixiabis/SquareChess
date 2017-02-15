Shl.Ara.Follow=[];Dft.Follow={};Dft.System.iTn=1
Shl.Ckr.Follow=function(crd){var sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--){if(MdQ[i]=="Follow")continue
		if(Shl.Lmt[MdQ[i]](crd,sym))return 0
	}if(Hst.Rut[Tn].indexOf(Hst.Crd[Tn-1])>-1||Tn<2)return 1;return 0
}
Shl.OpK.Follow=function(){Dft.System.Qsr=0}
Shl.OpK.Follow()