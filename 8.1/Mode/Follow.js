Shl.Ara.Follow=[];Dft.Follow={};Dft.System.iTn=1
Shl.Rul.Follow=function(){}
Shl.Lmt.Follow=function(){}
Shl.Mrk.Follow=function(){}
Shl.Brd.Follow=function(){}
Shl.Adn.Follow=function(){}
Shl.Ckr.Follow=function(crd){var sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--){if(MdQ[i]=="Follow")continue
		if(Shl.Lmt[MdQ[i]](crd,sym))return 0
	}if(Hst.Rut[Tn].indexOf(Hst.Crd[Tn-1])>-1||Tn<2)return 1;return 0
}
Shl.Opt.Follow=function(){}
Shl.OpK.Follow=function(){Dft.System.Qsr=0}