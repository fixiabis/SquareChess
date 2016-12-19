Shl.Ara.Kingdom=[]
Dft.Kingdom={Ara:1,Lmt:1}
Shl.Rul.Kingdom=function(){var ara=[[],[],[]],vct=[],cds=Sel("All"),scr={K:[0,0],P:[0,0]}
	for(var i=0;i<cds.length;i++){if(vct.indexOf(cds[i])>-1)continue
		var map=Map(cds[i]),sym=Qre(cds[i],"Sym");vct=vct.concat(map);ara[sym].push(map)
		if(map.length>9&&sym<2){scr.K[sym]+=1;scr.P[sym]+=map.length}
	}Shl.Ara.Kingdom=ara
	if(Tn==81){
		if(scr.P[0]==scr.P[1])return Scr(scr.K[0],scr.K[1])
		else return Scr(scr.P[0],scr.P[1])
	}
}
Shl.Lmt.Kingdom=function(){}
Shl.Mrk.Kingdom=function(){var cds=Sel("All")
	if(Dft.Kingdom.Ara)for(var i=0;i<cds.length;i++){
		if(Qre(cds[i],"Sym")==0)Qre(cds[i],"BgC",3)
		if(Qre(cds[i],"Sym")==1)Qre(cds[i],"BgC",4)
	}
}
Shl.Brd.Kingdom=function(){}
Shl.Adn.Kingdom=function(){}
Shl.Ckr.Kingdom=function(crd){if(Tn<2&&Sel("C3:G7").indexOf(crd)>-1&&Dft.Kingdom.Lmt)return 0;return 1}
Shl.Opt.Kingdom=function(){
	Id("OptionMenu").innerHTML+="Kingdom設定:<br>"
	OpS("Kingdom-Ara","k","雙方區域",Dft.Kingdom.Ara)
	OpS("Kingdom-Lmt","k","首回限制",Dft.Kingdom.Lmt)
}
Shl.OpK.Kingdom=function(){
	Dft.Kingdom.Ara=Id("Kingdom-Ara").checked
	Dft.Kingdom.Lmt=Id("Kingdom-Lmt").checked
}