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
	for(var cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){var key=Qre(Chr(cd1)+cd2,"Sym");if(key==2||cd1==72&&cd2==9)continue
		for(var i=1;i<10;i++){var cds=["B","R","BR"]
			for(var j=0;j<3;j++){
				cds[j]=Crd(Chr(cd1)+cd2,i+cds[j])
				if(Qre(cds[j],"Sym")!=key)
			}
		}
		for(var c1=cd1+1;c1<74;c1++){if(Qre(Chr(c1)+cd2,"Sym")!=key)continue
			var a=Sel(Chr(cd1)+":"+Chr(c1)+cd2),age=[Chr(cd1)+cd2,Chr(c1)+cd2]
			for(var i=0;i<2;i++)age[i]=Hst.Crd.indexOf(age[i])
			var yng=Math.max(age[0],age[1]),old=Math.min(age[0],age[1])
			for(var i=0;i<a.length-1;i++){
				if(Qre(a[i],"Sym")==2){var p=ara[Sqr.Sym[key]].indexOf(a[i])
					if(p<0){
						ara[Sqr.Sym[key]].push(a[i]);ara[Sqr.Sym[key]].age.push([old,yng])
					}else{
						if(ara[Sqr.Sym[key]].age[p][0]>old)ara[Sqr.Sym[key]].age[p][0]=old
						if(ara[Sqr.Sym[key]].age[p][1]>yng)ara[Sqr.Sym[key]].age[p][1]=yng
					}
				}
			}
		}
		for(var c2=cd2+1;c2<10;c2++){if(Qre(Chr(cd1)+c2,"Sym")!=key)continue
			var a=Sel(Chr(cd1)+cd2+":"+c2),age=[Chr(cd1)+cd2,Chr(cd1)+c2]
			for(var i=0;i<2;i++)age[i]=Hst.Crd.indexOf(age[i])
			var yng=Math.max(age[0],age[1]),old=Math.min(age[0],age[1])
			for(var i=0;i<a.length-1;i++){
				if(Qre(a[i],"Sym")==2){var p=ara[Sqr.Sym[key]].indexOf(a[i])
					if(p<0){
						ara[Sqr.Sym[key]].push(a[i]);ara[Sqr.Sym[key]].age.push([old,yng])
					}else{
						if(ara[Sqr.Sym[key]].age[p][0]>old)ara[Sqr.Sym[key]].age[p][0]=old
						if(ara[Sqr.Sym[key]].age[p][1]>yng)ara[Sqr.Sym[key]].age[p][1]=yng
					}
				}
			}
		}
	}var sot={O:{All:[]},X:{All:[]},P:{All:[]}}
	for(var cd1=65;cd1<74;cd1++){
		for(var cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"Sym")!=2)continue
			var crd=Chr(cd1)+cd2,sym=[ara.O.indexOf(crd),ara.X.indexOf(crd)]
			for(var i=0;i<2;i++){var ck=0
				if(sym[i]>-1&&sym[(i+1)%2]<0)ck=1
				else if(sym[i]>-1&&sym[(i+1)%2]>-1)switch(Dft.Blocker.AJd){
					case 0:if(ara[Sqr.Sym[i]].age[sym[i]][0]<ara[Sqr.Sym[(i+1)%2]].age[sym[(i+1)%2]][0])ck=1;break
					case 1:if(ara[Sqr.Sym[i]].age[sym[i]][1]>ara[Sqr.Sym[(i+1)%2]].age[sym[(i+1)%2]][1])ck=1;break
					case 2:ck=0
				}if(ck)sot[Sqr.Sym[i]].All.push(crd)
			}if(sot.O.All.indexOf(crd)<0&&sot.X.All.indexOf(crd)<0)sot.P.All.push(crd)
		}
	}sot.O[0]=sot.O.All;sot.X[0]=sot.X.All;sot.P[0]=sot.P.All;return sot
}