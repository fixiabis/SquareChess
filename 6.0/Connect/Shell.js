var Ex={Block:0,Random:false},Sqr=[[" ","","dimgray"]]
function Adn(){bdB();XAd()}
function Lmt(crd,sym){dfc=0
	if(!Controls(crd))return 1
	if(Turn<2&&RST(crd)=="")return 0
	if(RST(crd)!="")return 1
	for(i in ord){
		if(Controls(Crd(crd,ord[i]))){
			if(RST(Crd(crd,ord[i]))==sym)return 0
		}
	}return 1
}
function ExB(){XBd();crB()}
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
	}XRl()
}
function Adq(){Ex.Random=confirm("First Set fixed? Now is "+Ex.Random);if(Turn==0)RnS()}
function RnS(){if(!Ex.Random)return
	var R=[["E4","E6","D5","F5"],["D4","D6","F4","F6"]]
	for(i in R){var p=Val(Rnd()*4)
		Set(R[i][p])
	}
}