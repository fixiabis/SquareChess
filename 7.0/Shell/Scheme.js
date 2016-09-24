Sqr[1]=["","","crimson"];Sqr[2]=["","","royalblue"]
var Ara=[[],[]],
Lt=[];Dft.Blk=27
function ExR(){var t=Qre(Hst.Crd[Turn],"T")
	if(Turn==1)for(i in Lt)if(Instr("FBRL",Lt[i][1])>-1)Lt[i]=Crd(Hst.Crd[Turn],Lt[i])
	if(Turn<3&&t!=""&&t!=" "){
		for(i in cd8){var c=Crd(Hst.Crd[Turn],cd8[i]),b=Qre(c,"B")
			if(b==""||b=="lightgray"){Qre(c,"B",Sqr[Turn][2]);Ara[Turn-1].push(c)}
		}
	}
	var Os=0,Xs=0,Of=0,Xf=0
	for(i in Ara[0]){var t=Qre(Ara[0][i],"T");if(t=="O")Of++;if(t=="X")Xs=1}
	for(i in Ara[1]){var t=Qre(Ara[1][i],"T");if(t=="X")Xf++;if(t=="O")Os=1}
	if(Turn%2==0&&Turn>2){
		if(Os&&Xs&&Turn>4||Of==Ara[0].length&&Xf==Ara[1].length)Cln("Draw")
		else if(Os)Cln("O Win.")
		else if(Xf==Ara[1].length)Cln("O Win")
		else if(Xs)Cln("X Win.")
		else if(Of==Ara[0].length)Cln("X Win")
	}OgC(Hst.Crd[Turn])
}
function ExL(c){if(Lt.indexOf(c)>-1&&Turn<2)return 1;else return 0}
function Brd(){crB();Lt=[
	"FF","FFR","FFL","FRR","FLL",
	"BB","BBR","BBL","BRR","BLL",
	"RR","LL","FFRR","FFLL","BBRR","BBLL"
]}
function Adn(){}