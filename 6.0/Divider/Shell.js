var Ex={Block:0},Sqr=[[" ","","dimgray"],["Z","red","black"]]
function Adn(){bdB()}
function Lmt(crd,sym){
	if(!Controls(crd))return 1
	if(Turn<2&&RST(crd)=="")return 0
	if(RST(crd)!="")return 1
	for(i in ord){var tx=ord[i]
		while(true){
			if(Controls(Crd(crd,tx))){
				if(RST(Crd(crd,tx))==sym){return 0}else if(RST(Crd(crd,tx))!=""){break}
			}else{
				break
			}tx+=ord[i]
		}
	}
	return 1
}
function ExB(){crB()}
function Rul(){var Ara={O:0,X:0,P:0}
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){if(RST(Chr(cd1)+cd2)!="")continue
			var Os=Lmt(Chr(cd1)+cd2,"O"),Xs=Lmt(Chr(cd1)+cd2,"X");Controls(Chr(cd1)+cd2).title=""
			if(!Os&&!Xs){Controls(Chr(cd1)+cd2).title="P0";Ara.P++}
			if(!Os&&Xs){Controls(Chr(cd1)+cd2).title="O0";Ara.O++}
			if(Os&&!Xs){Controls(Chr(cd1)+cd2).title="X0";Ara.X++}
		}
	}
	for(var i=1;i<9;i++){
		for(cd1=65;cd1<74;cd1++){
			for(cd2=1;cd2<10;cd2++){var Os=0,Xs=0,crd=Chr(cd1)+cd2
				if(RST(crd)!=""||Controls(crd).title!="")continue
				for(n in ord){
					if(Controls(Crd(crd,ord[n]))){var t=Controls(Crd(crd,ord[n])).title
						if(t=="O"+(i-1))Os=1
						if(t=="X"+(i-1))Xs=1
					}
				}
				if(Os&&Xs){Controls(crd).title="P"+i;Ara.P++}
				if(Os&&!Xs){Controls(crd).title="O"+i;Ara.O++}
				if(!Os&&Xs){Controls(crd).title="X"+i;Ara.X++}
			}
		}
	}
	if(Ara.P==0&&Turn%2==1){
		if(Ara.O>Ara.X){
			Cln("O Win.","")
		}else if(Ara.O<Ara.X){
			Cln("X Win.","")
		}else{
			Cln("Draw","")
		}
	}else if(Ara.O==0&&Ara.X==0&&Turn>2){
		Cln("Draw","")
	}else if(Turn>2){
		if(Ara.O==0)Cln("X Win.","")
		if(Ara.X==0)Cln("O Win.","")
	}XRl()
}