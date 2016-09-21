var dc=[
	["A1","A2","A3","A4","A5","B1","B2","C1","D1"],
	["F9","G9","H8","H9","I5","I6","I7","I8","I9"],
	["E1","F1","G1","H1","H2","I1","I2","I3","I4"],
	["A6","A7","A8","A9","B8","B9","C9","D9","E9"],
	["C5","D5","E5","F5","G5","E3","E4","E6","E7"],
	["F2","F3","F4","G2","G3","G4","H3","H4","H5"],
	["B5","B6","B7","C6","C7","C8","D6","D7","D8"],
	["E8","F6","F7","F8","G6","G7","G8","H6","H7"],
	["B3","B4","C2","C3","C4","D2","D3","D4","E2"]
]
function XRl(){var O=0,X=0
	for(i in dc){var Os=0,Xs=0
		for(j in dc[i]){
			if(Controls(dc[i][j]).innerHTML=="O")Os++
			if(Controls(dc[i][j]).innerHTML=="X")Xs++
		}if(Os>5&&Xs==0||Os==9){O++}else if(Xs>5&&Os==0||Xs==9){X++}
	}
	if(Turn%2==0){
		if(O>X)Cln("O Win.","")
		if(O<X)Cln("X Win.","")
		if(O==X&&O!=0)Cln("Draw.","")
	}
}
function XBd(){var bc=["cornflowerblue","dodgerblue","lightskyblue","lightsteelblue","lightblue"]
	for(i in dc){var s=i;if(s>4)s-=5
		for(j in dc[i]){
			Controls(dc[i][j]).style.backgroundColor=bc[s]
		}
	}Ex.Block=0;RnS()
}
function XAd(){Adq()}