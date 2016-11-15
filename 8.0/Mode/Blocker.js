Shl.Ara.Blocker=[];Dft.Blocker={Ara:0,QJd:1,AJd:0}
Shl.Rul.Blocker=function(){
	return Ara.Rul("Blocker",Blk())
}
Shl.Lmt.Blocker=function(crd,sym){}
Shl.Mrk.Blocker=function(){Ara.Mrk("Blocker")}
Shl.Brd.Blocker=function(){}
Shl.Adn.Blocker=function(){}
Shl.Ckr.Blocker=function(crd){
	return Shl.Ara.Blocker[Sqr.Sym[(Tn+1)%2]].All.indexOf(crd)<0
}
Shl.Opt.Blocker=function(){
	Id("OptionMenu").innerHTML+="Blocker設定:<br>"
	Id("OptionMenu").innerHTML+="區域判定:<br>"
	OpS("Blocker-AJd-0/Blocker-AJd","r","優先",Dft.Blocker.AJd==0)
	OpS("Blocker-AJd-1/Blocker-AJd","r","占據",Dft.Blocker.AJd==1)
	OpS("Blocker-AJd-2/Blocker-AJd","r","共有",Dft.Blocker.AJd==2)
	Ara.Opt("Blocker")
}
Shl.OpK.Blocker=function(){
	for(var i=0;i<3;i++)if(Id("Blocker-AJd-"+i).checked)Dft.Blocker.AJd=i
	Ara.OpK("Blocker")
}
function Blk(){var ara={O:[],X:[]};ara.O.age=[];ara.X.age=[]
	for(var cd1=65;cd1<73;cd1++)for(cd2=1;cd2<9;cd2++){var key=Qre(Chr(cd1)+cd2,"Sym");if(key==2||cd1==72&&cd2==9)continue
		for(var c1=cd1+1;c1<74;c1++){if(Qre(Chr(c1)+cd2,"Sym")!=key)continue
			for(var c2=cd2+1;c2<10;c2++){if(Qre(Chr(cd1)+c2,"Sym")!=key||c1==cd1&&c2==cd2)continue
				if(Qre(Chr(c1)+c2,"Sym")==key){var a=Sel(Chr(cd1)+cd2+":"+Chr(c1)+c2)
					var age=[Chr(cd1)+cd2,Chr(c1)+cd2,Chr(cd1)+c2,Chr(c1)+c2]
					for(var i=0;i<4;i++)age[i]=Hst.Crd.indexOf(age[i])
					var yng=Math.max(age[0],age[1],age[2],age[3]),old=Math.min(age[0],age[1],age[2],age[3])
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