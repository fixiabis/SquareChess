Dft.Rnd=false
function Adn(){bdB();bdR()}
function Brd(){ExB();crB();crR()}
function Lmt(c,s){Dft.Clr=0;if(!s)s=Sbl[Turn%2]
	if(!Id(c))return 1
	if(Turn<2&&Qre(c,"T")=="")return 0
	if(Qre(c,"T")!="")return 1
	for(i in cd8)if(Id(Crd(c,cd8[i])))if(Qre(Crd(c,cd8[i]),"T")==s)return 0
	return 1
}
function Rul(){var Ara={O:0,X:0,P:0}
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"T")!="")continue;var c=Chr(cd1)+cd2
			var Os=Lmt(c,"O"),Xs=Lmt(c,"X");Id(c).title=""
			if(!Os&&!Xs){Id(c).title="P0";Ara.P++}
			if(!Os&&Xs){Id(c).title="O0";Ara.O++}
			if(Os&&!Xs){Id(c).title="X0";Ara.X++}
		}
	}
	for(var i=1;i<9;i++){
		for(cd1=65;cd1<74;cd1++){
			for(cd2=1;cd2<10;cd2++){var Os=0,Xs=0,c=Chr(cd1)+cd2
				if(Qre(c,"T")!=""||Id(c).title!="")continue
				for(n in cd8){
					if(Id(Crd(c,cd8[n]))){var t=Id(Crd(c,cd8[n])).title
						if(t=="O"+(i-1))Os=1;if(t=="X"+(i-1))Xs=1
					}
				}
				if(Os&&Xs){Id(c).title="P"+i;Ara.P++}
				if(Os&&!Xs){Id(c).title="O"+i;Ara.O++}
				if(!Os&&Xs){Id(c).title="X"+i;Ara.X++}
			}
		}
	}
	if(Ara.P==0&&Turn%2==1){
		if(Ara.O>Ara.X)Cln("O Win")
		else if(Ara.O<Ara.X)Cln("X Win")
		else Cln("Draw")
	}ExR()
}
function bdR(){Dft.Rnd=confirm("First Set fixed? Now is "+Dft.Rnd);if(Turn==0)Cln()}
function crR(){if(!Dft.Rnd)return
	var R=[["E4","E6","D5","F5"],["D4","D6","F4","F6"]]
	for(i in R){var p=Val(Rnd()*4);Set(R[i][p])}
}
function ExB(){}function ExR(){}
