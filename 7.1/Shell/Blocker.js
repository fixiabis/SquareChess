Sqr[1]=[" ","","palevioletred"];Sqr[2]=[" ","","lightsteelblue"]
function Lmt(c,s){if(!s)s=Sbl[Tn%2];ExL(c,s)
	if("OX".search(Qre(c,"T"))>-1&&Qre(c,"T")!="")return 1
	if(Qre(c,"B")==Sqr[1][2]&&s!="O")return 1
	if(Qre(c,"B")==Sqr[2][2]&&s!="X")return 1
	if(Qre(c,"B")==Sqr[0][2])return 1
	return Loc(c,s)
}
function Loc(c,s){var c1=Asc(c[0]),c2=Val(c[1])
	for(var cd1=65;cd1<74;cd1++){if(Qre(Chr(cd1)+c2,"T")!=s)continue
		for(var cd2=1;cd2<10;cd2++){if(Qre(Chr(c1)+cd2,"T")!=s)continue
			if(Qre(Chr(cd1)+cd2,"T")==s){var r=[c1],l=[c2]
				if(cd1>c1)r.push(cd1);else r.unshift(cd1)
				if(cd2>c2)l.push(cd2);else l.unshift(cd2)
				Blk(r,l,s);return 0
			}
		}
	}return 0
}
function Blk(r,l,s){
	for(var cd1=65;cd1<74;cd1++){
		for(var cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"T")!="")continue
			if(cd1>=r[0]&&cd1<=r[1]&&cd2>=l[0]&&cd2<=l[1]&&Qre(Chr(cd1)+cd2,"B")!=Sqr[1][2]&&Qre(Chr(cd1)+cd2,"B")!=Sqr[2][2]){
				switch(s){
					case"O":Sym(Chr(cd1)+cd2,4);break
					case"X":Sym(Chr(cd1)+cd2,5);break
				}
			}
		}
	}
}
function Rul(){Scr={O:0,X:0,P:0}
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		if(Qre(Chr(cd1)+cd2,"T")==" "&&Qre(Chr(cd1)+cd2,"B")!="dimgray"){var bc=Qre(Chr(cd1)+cd2,"B");Scr.P++
			if(bc==Sqr[1][2])Scr.O++
			if(bc==Sqr[2][2])Scr.X++
		}else if(Qre(Chr(cd1)+cd2,"T")=="")Scr.P++
		;else if(Qre(Chr(cd1)+cd2,"B")!="dimgray"){var bc=""
			if((cd1+cd2)%2==0)bc="lightgray";Qre(Chr(cd1)+cd2,"B",bc)
		}
	}
	if(Scr.O>Scr.X&&Scr.O>Scr.P/2)Cln("O Win:"+Scr.O+"/"+Scr.X)
	if(Scr.O<Scr.X&&Scr.X>Scr.P/2)Cln("X Win:"+Scr.X+"/"+Scr.O)
	if(Scr.P==0)Cln("Draw")
}
