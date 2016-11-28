Shl.Ara.GoLike=[];Dft.GoLike={MJg:0}
Shl.Rul.GoLike=function(){var ara=[],cds=Sel("All"),vst=[]
	for(var i=0;i<cds.length;i++){
		if(Dft.GoLike.MJg)odr=Idt;else odr=function(map){if(map.indexOf(2)<0)return 1;return 0}
		if(vst.indexOf(cds[i])>-1||Qre(cds[i],"Sym")==2)continue
		var map=Map(cds[i]);if(Map.Bdr(map,1,odr)||Map.Bdr(map,0,odr))ara.push(map);vst=vst.concat(map)
	}for(var i=0;i<ara.length;i++)Qre(ara[i],"Sym",4)
}
Shl.Lmt.GoLike=function(){}
Shl.Mrk.GoLike=function(){
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==4)return 1;return 0}),["BgC","FtC"],[12,2])
}
Shl.Brd.GoLike=function(){}
Shl.Adn.GoLike=function(){}
Shl.Ckr.GoLike=function(){return 1}
Shl.Opt.GoLike=function(){
	Id("OptionMenu").innerHTML+="LikeGo設定:<br>"
	OpS("GoLike-MJg","k","同符號包圍",Dft.GoLike.MJg)
}
Shl.OpK.GoLike=function(){
	Dft.GoLike.MJg=Id("GoLike-MJg").checked
}