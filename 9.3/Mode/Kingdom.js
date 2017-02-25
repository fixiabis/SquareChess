Shl.Ara.Kingdom=[];Dft.Kingdom={Ara:1,Lmt:1,Kdm:10}
Shl.Rul.Kingdom=function(){var ara=[[],[],[]],vct=[],cds=Sel("All"),scr={K:[0,0],P:[0,0]}
	for(var i=0;i<cds.length;i++){if(vct.indexOf(cds[i])>-1)continue
		var map=Map(cds[i]),sym=Qre(cds[i],"Sym");vct=vct.concat(map);ara[sym].push(map)
		if(map.length==Dft.Kingdom.Kdm&&sym<2){scr.K[sym]+=1;scr.P[sym]+=map.length}
	}Shl.Ara.Kingdom=ara
	for(var i=0;i<2;i++)if(scr.P[i]>Dft.Kingdom.Kdm*3&&scr.P[(i+1)%2]<Dft.Kingdom.Kdm*2)return Sqr.Sym[i]+"獲勝"
	if(Tn==81){
		if(scr.P[0]==scr.P[1])return Scr(scr.K[0],scr.K[1])
		else return Scr(scr.P[0],scr.P[1])
	}
}
Shl.Mrk.Kingdom=function(){
	if(Dft.Kingdom.Ara)for(var i=0;i<2;i++){
		var cds=Shl.Ara.Kingdom[i]
		for(var j=0;j<cds.length;j++){if(cds[j].length<Dft.Kingdom.Kdm)continue
			for(var k=0;k<cds[j].length;k++)if(Qre(cds[j][k],"Sym")==i)Qre(cds[j][k],"BgC",i+3)
		}
	}
}
Shl.Opt.Kingdom=function(){
	OpS("","1","Kingdom設定")
	if(!Dft.System.Oln)OpS("Kingdom-Kdm","t","王國大小:",Dft.Kingdom.Kdm)
	OpS("","2","輔助標記");OpS("Kingdom-Ara","k","雙方區域",Dft.Kingdom.Ara)
}
Shl.OpK.Kingdom=function(){
	Dft.Kingdom.Ara=Id("Kingdom-Ara").checked
	if(!Dft.System.Oln&&Val(Id("Kingdom-Kdm").value)!=NaN&&Id("Kingdom-Kdm").value!="")Dft.Kingdom.Kdm=Val(Id("Kingdom-Kdm").value)
	if(Dft.Kingdom.Kdm<3)Dft.Kingdom.Kdm=3
	if(Dft.Kingdom.Kdm>15)Dft.Kingdom.Kdm=15
}