var dc=[["A2","B1","B2"],["H8","H9","I8"],["A3","B3","C1","C2","C3"],["G7","G8","G9","H7","I7"]]
function ExR(){var Ara={O:0,X:0}
	for(i in dc){var s=0
		for(j in dc[i])if(Qre(dc[i][j],"T")==Sbl[i%2])s++
		if(s==dc[i].length)Cln(Sbl[(i+1)%2]+" Win.","")
	}
	for(i=0;i<2;i++)for(j=0;j<3;j++)if(Qre(dc[i][j],"T")==Sbl[(i+1)%2])Ara[Sbl[(i+1)%2]]=1
	if(Ara.O&&Turn%2==0&&!Ara.X)Cln("O Win")
	else if(Ara.X&&!Ara.O)Cln("X Win")
	else if(Ara.O&&Ara.X)Cln("Draw.","")
}
function ExB(){var bc=["crimson","royalblue","palevioletred","lightsteelblue"],c=["A1","I9"]
	for(i in bc)for(j in dc[i])Qre(dc[i][j],"B",bc[i])
	for(i in c){OgC(c[i]);Set(c[i])}
}
function Adn(){bdB()}
function Brd(){ExB();crB();Dft.Clr=0}