Shl.Ara.Blocker=[];Dft.Blocker={Ara:1,QJd:3,AJd:0}
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
	OpS("","1","Blocker設定")
	if(!Dft.System.Oln){OpS("","2","區域判定")
		OpS("Blocker-AJd-0/Blocker-AJd","r","優先",Dft.Blocker.AJd==0)
		OpS("Blocker-AJd-1/Blocker-AJd","r","占據",Dft.Blocker.AJd==1)
		OpS("Blocker-AJd-2/Blocker-AJd","r","共有",Dft.Blocker.AJd==2)
	}Ara.Opt("Blocker")
}
Shl.OpK.Blocker=function(){
	if(!Dft.System.Oln)for(var i=0;i<3;i++)if(Id("Blocker-AJd-"+i).checked)Dft.Blocker.AJd=i
	Ara.OpK("Blocker");if(Shl.Ara.Blocker.QJd==2)Shl.Ara.Blocker.QJd=3;Dft.System.Qsr=0
}
function Blk(){var ara={O:[],X:[]};ara.O.age=[];ara.X.age=[]
	for(var cd1=65;cd1<73;cd1++)for(cd2=1;cd2<9;cd2++){var key=Qre(Chr(cd1)+cd2,"Sym");if(key==2||cd1==72&&cd2==9)continue
		for(var c1=cd1+1;c1<74;c1++){if(Qre(Chr(c1)+cd2,"Sym")!=key)continue
			for(var c2=cd2+1;c2<10;c2++){
				if(Qre(Chr(cd1)+c2,"Sym")!=key||c1==cd1&&c2==cd2||Qre(Chr(c1)+c2,"Sym")!=key)continue
				var a=Sel(Chr(cd1)+cd2+":"+Chr(c1)+c2),age=[Chr(cd1)+cd2,Chr(c1)+cd2,Chr(cd1)+c2,Chr(c1)+c2]
				for(var i=0;i<4;i++)age[i]=Hst.Crd.indexOf(age[i])
				var yng=Math.max(age[0],age[1],age[2],age[3])
				for(var i=0;i<a.length-1;i++)if(Qre(a[i],"Sym")==2){var p=ara[Sqr.Sym[key]].indexOf(a[i])
					if(p<0){
						ara[Sqr.Sym[key]].push(a[i]);ara[Sqr.Sym[key]].age.push(yng)
					}else if(ara[Sqr.Sym[key]].age[p]>yng)ara[Sqr.Sym[key]].age[p]=yng
				}
			}
		}
	}return Ara.AJd("Blocker",ara)
}