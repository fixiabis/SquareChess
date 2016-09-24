Sqr[1]=["","","crimson"]
Sqr[2]=["","","royalblue"]
function ExR(){
	if(Turn<3)for(i in cd8){var c=Crd(Hst.Crd[Turn],cd8[i]),b=Qre(c,"B")
		if(b==""||b=="lightgray")Qre(c,"B",Sqr[Turn][2])
	}Dft.Clr=1
	var Os=0,Xs=0
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){var c=Chr(cd1)+cd2
		if(Qre(c,"B")==Sqr[2][2]&&Qre(c,"T")=="O")Os=1
		if(Qre(c,"B")==Sqr[1][2]&&Qre(c,"T")=="X")Xs=1
	}
	if(Turn%2==0){
		if(Os&&Xs&&Turn>4)Cln("Draw")
		else if(Os)Cln("O Win")
		else if(Xs)Cln("X Win")
	}OgC(Hst.Crd[Turn])
}
function Adn(){bdB()}function Brd(){crB()}
LdK.push("Connect-Scheme");LdC()