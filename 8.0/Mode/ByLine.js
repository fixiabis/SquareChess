Shl.Ara.ByLine=[];Dft.ByLine={Ara:1,QJd:1,AJd:0}
Shl.Rul.ByLine=function(){
	return Ara.Rul("ByLine",Lin())
}
Shl.Lmt.ByLine=function(crd,sym){}
Shl.Mrk.ByLine=function(){Ara.Mrk("ByLine")}
Shl.Brd.ByLine=function(){}
Shl.Adn.ByLine=function(){}
Shl.Ckr.ByLine=function(crd){
	return Shl.Ara.ByLine[Sqr.Sym[(Tn+1)%2]].All.indexOf(crd)<0
}
Shl.Opt.ByLine=function(){
	Id("OptionMenu").innerHTML+="ByLine設定:<br>"
	Id("OptionMenu").innerHTML+="區域判定:<br>"
	OpS("ByLine-AJd-0/ByLine-AJd","r","優先",Dft.ByLine.AJd==0)
	OpS("ByLine-AJd-1/ByLine-AJd","r","占據",Dft.ByLine.AJd==1)
	OpS("ByLine-AJd-2/ByLine-AJd","r","共有",Dft.ByLine.AJd==2)
	Ara.Opt("ByLine")
}
Shl.OpK.ByLine=function(){
	for(var i=0;i<3;i++)if(Id("ByLine-AJd-"+i).checked)Dft.ByLine.AJd=i
	Ara.OpK("ByLine")
}
function Lin(){var ara={O:[],X:[]};ara.O.age=[];ara.X.age=[]
	for(var cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		var key=Qre(Chr(cd1)+cd2,"Sym");if(key==2||cd1==72&&cd2==9)continue
		for(var c=1;c<10;c++){
			var cds=[Chr(cd1+c)+cd2,Chr(cd1)+(cd2+c),Chr(cd1+c)+(cd2+c),Chr(cd1-c)+(cd2+c)]
			for(var s=0;s<4;s++){if(Qre(cds[s],"Sym")!=key)continue
				var a=Sel(Chr(cd1)+cd2+"~"+cds[s]),age=[Chr(cd1)+cd2,cds[s]]
				for(var i=0;i<2;i++)age[i]=Hst.Crd.indexOf(age[i])
				var yng=Math.max(age[0],age[1])
				for(var i=0;i<a.length-1;i++)if(Qre(a[i],"Sym")==2){var p=ara[Sqr.Sym[key]].indexOf(a[i])
					if(p<0){
						ara[Sqr.Sym[key]].push(a[i]);ara[Sqr.Sym[key]].age.push(yng)
					}else if(ara[Sqr.Sym[key]].age[p]>yng)ara[Sqr.Sym[key]].age[p]=yng
				}
			}
		}console.log(ara)
	}return Ara.AJd("ByLine",ara)
}