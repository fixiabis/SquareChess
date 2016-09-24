Sqr[1]=["","","crimson"];Sqr[2]=["","","royalblue"]
var Ara=[[],[]]
function ExR(){
	if(Turn<3)for(i in cd8){var c=Crd(Hst.Crd[Turn],cd8[i]),b=Qre(c,"B")
		if(b==""||b=="lightgray"){Qre(c,"B",Sqr[Turn][2]);Ara[Turn-1].push(c)}
	}
	var Os=0,Xs=0,Of=0,Xf=0
	for(i in Ara[0]){var t=Qre(Ara[0][i],"T");if(t=="O")Of++;if(t=="X")Xs=1}
	for(i in Ara[1]){var t=Qre(Ara[1][i],"T");if(t=="X")Xf++;if(t=="O")Os=1}
	if(Turn%2==0){
		if(Os&&Xs&&Turn>4||Of==Ara[0].length&&Xf==Ara[1].length)Cln("Draw")
		else if(Os||Xf==Ara[1].length)Cln("O Win")
		else if(Xs||Of==Ara[0].length)Cln("X Win")
	}OgC(Hst.Crd[Turn])
}
function Adn(){}function Brd(){Dft.Blk=27;crB()}