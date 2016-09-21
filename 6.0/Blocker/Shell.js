var Ex={Block:0},Sqr=[[" ","","dimgray"],[" ","","palevioletred"],[" ","","lightsteelblue"]]
function Adn(){bdB()}
function Lmt(crd,sym){
	if("OX".search(RST(crd))>-1&&RST(crd)!="")return 1
	if(RSB(crd)==Sqr[1][2]&&sym!="O")return 1
	if(RSB(crd)==Sqr[2][2]&&sym!="X")return 1
	if(RSB(crd)==Sqr[0][2])return 1
	return Loc(crd,sym)
}
function Loc(crd,sym){var c1=Asc(crd[0]),c2=Val(crd[1])
if((c1+c2)%2){Controls(crd).style.backgroundColor="white"}else{Controls(crd).style.backgroundColor="lightgray"}
	for(var cd1=65;cd1<74;cd1++){if(RST(Chr(cd1)+c2)!=sym)continue
		for(var cd2=1;cd2<10;cd2++){if(RST(Chr(c1)+cd2)!=sym)continue
			if(RST(Chr(cd1)+cd2)==sym){var srt=[c1],lst=[c2]
				if(cd1>c1){srt.push(cd1)}else{srt.unshift(cd1)}
				if(cd2>c2){lst.push(cd2)}else{lst.unshift(cd2)}
				Blk(srt,lst,sym);return 0
			}
		}
	}return 0
}
function Blk(srt,lst,sym){
	for(var cd1=65;cd1<74;cd1++){
		for(var cd2=1;cd2<10;cd2++){if(RST(Chr(cd1)+cd2)!="")continue
			if(cd1>=srt[0]&&cd1<=srt[1]&&cd2>=lst[0]&&cd2<=lst[1]&&RSB(Chr(cd1)+cd2)!=Sqr[1][2]&&RSB(Chr(cd1)+cd2)!=Sqr[2][2]){
				switch(sym){
					case"O":WtS(Chr(cd1)+cd2,4);break
					case"X":WtS(Chr(cd1)+cd2,5);break
				}
			}
		}
	}
}
function ExB(){crB()}
function Rul(){var Ara={O:0,X:0,P:0}
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(RST(Chr(cd1)+cd2)==" "&&RSB(Chr(cd1)+cd2)!="dimgray"){var bc=RSB(Chr(cd1)+cd2);Ara.P++
				if(bc==Sqr[1][2])Ara.O++
				if(bc==Sqr[2][2])Ara.X++
			}else if(RST(Chr(cd1)+cd2)==""){Ara.P++
			}else if(RSB(Chr(cd1)+cd2)!="dimgray"){var bc=""
				if((cd1+cd2)%2==0)bc="lightgray"
				Controls(Chr(cd1)+cd2).style.backgroundColor=bc
			}
		}
	}
	if(Ara.P==0&&Ara.O>Ara.X||Ara.O>Ara.P/2){
		Cln("O Win.","")
	}else if(Ara.P==0&&Ara.O<Ara.X||Ara.X>Ara.P/2){
		Cln("X Win.","")
	}else if(Ara.P==0){
		Cln("Draw.","")
	}
}