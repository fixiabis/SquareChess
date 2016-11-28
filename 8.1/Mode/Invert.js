Shl.Ara.Invert=[];Dft.Invert={};Dft.System.Nxt=1
Shl.Rul.Invert=function(){}
Shl.Lmt.Invert=function(){}
Shl.Mrk.Invert=function(){}
Shl.Brd.Invert=function(){}
Shl.Adn.Invert=function(){}
Shl.Ckr.Invert=function(crd){var sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--){if(MdQ[i]=="Invert")continue
		if(Shl.Lmt[MdQ[i]](crd,sym))return 2
	}if(Tn<2)return 1;return 0
}
Shl.Opt.Invert=function(){}
Shl.OpK.Invert=function(){Dft.System.Qsr=0}