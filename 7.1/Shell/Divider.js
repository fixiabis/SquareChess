function Lmt(c,s){var k=0;if(!s){s=Sbl[Tn%2];k=ExL(c)}
	if(!Id(c)||Qre(c,"T")!="")return 1;if(k)return k
	if(Tn<2&&Qre(c,"T")=="")return 0
	for(i in cd8){var tx=cd8[i]
		while(true){
			if(Id(Crd(c,tx))){
				if(Qre(Crd(c,tx),"T")==s)return 0;else if(Qre(Crd(c,tx),"T")!="")break
			}else break;tx+=cd8[i]
		}
	}return 1
}
function Rul(){Scr={O:0,X:0,P:0}
	for(var i=0;i<9;i++)for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			var Os=0,Xs=0,c=Chr(cd1)+cd2
			if(!i)Id(c).title=""
			if(Qre(c,"T")!=""||Id(c).title!="")continue
			for(n in cd8)if(Id(Crd(c,cd8[n]))){var t=Id(Crd(c,cd8[n])).title
				if(t=="O"+(i-1))Os=1;if(t=="X"+(i-1))Xs=1
			}if(!i){Os=!Lmt(c,"O");Xs=!Lmt(c,"X")}
			if(Os&&Xs){Id(c).title="P"+i;Scr.P++}
			if(Os&&!Xs){Id(c).title="O"+i;Scr.O++}
			if(!Os&&Xs){Id(c).title="X"+i;Scr.X++}
		}
	}
	if(Scr.P==0&&Tn%2==0){
		if(Scr.O>Scr.X)Cln("O Win.","")
		else if(Scr.O<Scr.X)Cln("X Win.","")
		else Cln("Draw","")
	}else if(Scr.O==0&&Scr.X==0&&Tn>2)Cln("Draw","")
	else if(Tn>2){
		if(Scr.O==0)Cln("X Win.","")
		if(Scr.X==0)Cln("O Win.","")
	}ExR()
}