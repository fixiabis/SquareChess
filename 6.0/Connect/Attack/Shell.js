var dc=[["A2","B1","B2"],["H8","H9","I8"],["A3","B3","C1","C2","C3"],["G7","G8","G9","H7","I7"]]
function XRl(){var Ara={"O":0,"X":0};dfc=0
	for(i in dc){var s=0
		for(j in dc[i]){
			if(RST(dc[i][j])==Sbl[i%2])s++
		}if(s==dc[i].length)Cln(Sbl[(i+1)%2]+" Win.","")
	}
	for(i=0;i<2;i++){
		for(j=0;j<3;j++){
			if(RST(dc[i][j])==Sbl[(i+1)%2])Ara[Sbl[(i+1)%2]]=1
		}
	}
	if(Ara.O&&Turn%2==0&&!Ara.X){
		Cln("O Win.","")
	}else if(Ara.X&&!Ara.O){
		Cln("X Win.","")
	}else if(Ara.O&&Ara.X){
		Cln("Draw.","")
	}
}
function XBd(){var bc=["crimson","royalblue","palevioletred","lightsteelblue"]
	for(i in bc){
		for(j in dc[i]){
			Controls(dc[i][j]).style.backgroundColor=bc[i]
		}
	}Controls("A1").style.backgroundColor="silver";Controls("I9").style.backgroundColor="silver"
	Set("A1");Set("I9")
}
function XAd(){}