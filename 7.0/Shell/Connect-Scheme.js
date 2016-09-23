Sqr[1]=["","","crimson"]
Sqr[2]=["","","royalblue"]
function ExR(){Dft.Clr=1
	if(Turn<3)
		for(i in cd8){var C=Qre(Crd(Hst.Crd[Turn],cd8[i]),"B")
			if(C==""||C=="lightgray")Sym(Crd(Hst.Crd[Turn],cd8[i]),Turn+3)
		}
	var Os=0,Xs=0
	for(cd1=65;cd1<74;cd1++)
		for(cd2=1;cd2<10;cd2++){var c=Chr(cd1)+cd2
			if(Qre(c,"B")==Sqr[2][2]&&Qre(c,"T")=="O")Os=1
			if(Qre(c,"B")==Sqr[1][2]&&Qre(c,"T")=="X")Xs=1
		}
	if(Turn%2==1){
		if(Os&&Xs)Cln("Draw");if(Os)Cln("O Win");if(Xs)Cln("X Win")
	}
}
function Adn(){bdB()}
function Brd(){crB()}