Sqr[1]=["","","crimson"];Sqr[2]=["","","royalblue"]
var Ara=[[],[]],Lt=[];Dft.Blk=27
function ExR(){
	var Os=0,Xs=0,Of=0,Xf=0
	for(i in Ara[0]){var t=Qre(Ara[0][i],"T");if(t=="O")Of++;if(t=="X")Xs=1}
	for(i in Ara[1]){var t=Qre(Ara[1][i],"T");if(t=="X")Xf++;if(t=="O")Os=1}
	if(Turn%2==0&&Turn>2){
		if(Os&&Xs&&Turn>4||Of==Ara[0].length&&Xf==Ara[1].length)Cln("Draw")
		else if(Os||Xf==Ara[1].length)Cln("O Win")
		else if(Xs||Of==Ara[0].length)Cln("X Win")
	}OgC(Hst.Crd[Turn])
}
function ExL(c){var t=Qre(c,"T"),k=0
	if(Turn==0){
		Lt=["FF","BB","RR","LL","FFLL","BBLL","FFR","FFL","FRR","FLL","FFRR","BBR","BBL","BRR","BLL","BBRR"]
		for(i in Lt)if(Instr("FBRL",Lt[i][1])>-1)Lt[i]=Crd(c,Lt[i]);k=1
	}
	if(Lt.indexOf(c)==-1&&Turn==1)k=1
	if(Turn<2&&t==""&&t!=" "&&k){Ara[Turn]=[]
		for(i in cd8){var d=Crd(c,cd8[i]),b=Qre(d,"B")
			if(b==""||b=="lightgray"){Qre(d,"B",Sqr[Turn+1][2]);Ara[Turn].push(d)}
		}
	}if(k||Turn>1)return 0;else return 1
}
function Brd(){crB()}
function Adn(){}