function Lmt(c,s){var k=0,r=1;Dft.Fcd="";if(!s){s=Sbl[Tn%2];k=ExL(c)}
	if(!Id(c)||Qre(c,"T")!="")return 1;if(k)return k
	if(Tn<2&&Qre(c,"T")=="")return 0
	for(i in cd8){var tx=cd8[i]
		while(1){
			if(Id(Crd(c,tx))){var t=Qre(Crd(c,tx),"T")
				if(t==s){Dft.Fcd+=Crd(c,tx);r=0}else if(t!="")break
			}else break;tx+=cd8[i]
		}
	}return r
}
function Rul(){var a=0;Scr={O:0,X:0,P:0}
	for(var i=0;i<9;i++){if(a>80)break
		for(cd1=65;cd1<74;cd1++){if(a>80)break
			for(cd2=1;cd2<10;cd2++){if(a>80)break
				var Os=0,Xs=0,c=Chr(cd1)+cd2
				if(!i)Id(c).title=""
				if(Qre(c,"T")!=""||Id(c).title!=""){a++;continue}
				for(n in cd8)if(Id(Crd(c,cd8[n]))){var t=Id(Crd(c,cd8[n])).title
					if(t=="O"+(i-1))Os=1;if(t=="X"+(i-1))Xs=1
				}if(!i){Os=!Lmt(c,"O");Xs=!Lmt(c,"X")}
				if(Os&&Xs){Id(c).title="P"+i;Scr.P++}
				if(Os&&!Xs){Id(c).title="O"+i;Scr.O++}
				if(!Os&&Xs){Id(c).title="X"+i;Scr.X++}
			}
		}
	}
	console.log(Scr)
	if(Scr.P==0&&Tn%2==0){
		if(Scr.O>Scr.X)Cln("O Win.","")
		else if(Scr.O<Scr.X)Cln("X Win.","")
		else if(Scr.O==0&&Scr.X==0)Cln("Draw","")
		else if(Scr.O==0)Cln("X Win.","")
		else if(Scr.X==0)Cln("O Win.","")
	}ExR()
}