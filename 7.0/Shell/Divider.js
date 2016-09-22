Sqr[1]=["Z","red","black"]
function Lmt(c,s){if(!s)s=Sbl[Turn%2]
	if(!Id(c))return 1
	if(Turn<2&&Qre(c,"T")=="")return 0
	if(Qre(c,"T")!="")return 1
	for(i in cd8){var tx=cd8[i]
		while(true){
			if(Id(Crd(c,tx))){
				if(Qre(Crd(c,tx),"T")==s)return 0;else if(Qre(Crd(c,tx),"T")!="")break
			}else{
				break
			}tx+=cd8[i]
		}
	}return 1
}
function Rul(){var Ara={O:0,X:0,P:0}
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"T")!="")continue
			var Os=Lmt(Chr(cd1)+cd2,"O"),Xs=Lmt(Chr(cd1)+cd2,"X");Id(Chr(cd1)+cd2).title=""
			if(!Os&&!Xs){Id(Chr(cd1)+cd2).title="P0";Ara.P++}
			if(!Os&&Xs){Id(Chr(cd1)+cd2).title="O0";Ara.O++}
			if(Os&&!Xs){Id(Chr(cd1)+cd2).title="X0";Ara.X++}
		}
	}
	for(var i=1;i<9;i++){
		for(cd1=65;cd1<74;cd1++){
			for(cd2=1;cd2<10;cd2++){var Os=0,Xs=0,c=Chr(cd1)+cd2
				if(Qre(c,"T")!=""||Id(c).title!="")continue
				for(n in cd8){
					if(Id(Crd(c,cd8[n]))){var t=Id(Crd(c,cd8[n])).title
						if(t=="O"+(i-1))Os=1
						if(t=="X"+(i-1))Xs=1
					}
				}
				if(Os&&Xs){Id(c).title="P"+i;Ara.P++}
				if(Os&&!Xs){Id(c).title="O"+i;Ara.O++}
				if(!Os&&Xs){Id(c).title="X"+i;Ara.X++}
			}
		}
	}
	if(Ara.P==0&&Turn%2==1){
		if(Ara.O>Ara.X)Cln("O Win.","")
		;else if(Ara.O<Ara.X)Cln("X Win.","")
		;else Cln("Draw","")
	}else if(Ara.O==0&&Ara.X==0&&Turn>2){
		Cln("Draw","")
	}else if(Turn>2){
		if(Ara.O==0)Cln("X Win.","")
		if(Ara.X==0)Cln("O Win.","")
	}ExR()
}