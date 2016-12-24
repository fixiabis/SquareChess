Shl.Ara.GoLike=[];Dft.GoLike={MJg:1}
Shl.Rul.GoLike=function(){var ara=[],cds=Sel("All"),vst=[],ckr=[0,0];if(Tn<2)return
	for(var i=0;i<cds.length;i++){
		if(Dft.GoLike.MJg)odr=Idt;else odr=function(map){if(map.indexOf(2)<0)return 1;return 0}
		if(vst.indexOf(cds[i])>-1||Qre(cds[i],"Sym")==2)continue
		var map=Map(cds[i]);if(Map.Bdr(map,1,odr)||Map.Bdr(map,0,odr))ara.push(map);vst=vst.concat(map)
	}for(var i=0;i<ara.length;i++)Qre(ara[i],"Sym",4)
	for(var i=0;i<cds.length;i++){var sym=Qre(cds[i],"Sym");ckr[sym]++}
	if(!ckr[0]||!ckr[1]||Tn==81)return Scr(ckr[0],ckr[1])
}
Shl.Lmt.GoLike=function(){}
Shl.Mrk.GoLike=function(){
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==4)return 1;return 0}),["BgC","FtC"],[12,2])
}
Shl.Brd.GoLike=function(){}
Shl.Adn.GoLike=function(){}
Shl.Ckr.GoLike=function(){return 1}
Shl.Opt.GoLike=function(){
	Id("OptionMenu").innerHTML+="GoLike設定:<br>"
	OpS("GoLike-MJg","k","同符號包圍",Dft.GoLike.MJg)
}
Shl.OpK.GoLike=function(){
	Dft.GoLike.MJg=Id("GoLike-MJg").checked
}