var Ex={Block:0,Pro:false,Open:false,Ops:false},Sqr=[[" ","","dimgray"]]
function Adn(){bdB();Adq()}
function Lmt(crd,sym){
	if(Controls(crd).innerHTML!="")return 1
	if(Turn==2&&Ex.Pro){
		if(Asc(crd[0])>66&&Asc(crd[0])<72&&crd[1]>2&&crd[1]<8)return 1
	}
	return 0
}
function ExB(){crB();if(Ex.Pro)Set("E5")}
function Rul(){var ord=Split("B;R;BR;BL",";"),scr={"O":0,"X":0}
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){if(RST(Chr(cd1)+cd2)=="")continue
			for(p=0;p<2;p++){if(RST(Chr(cd1)+cd2)!=Sbl[p])continue
				for(n in ord){var t=ord[n],s=0
					while(true){
						if(Controls(Crd(Chr(cd1)+cd2,t))){
							if(RST(Crd(Chr(cd1)+cd2,t))==Sbl[p]){
								s++
							}else{
								break
							}
						}else{
							break
						}t+=ord[n]
					}
					if(s==4)scr[Sbl[p]]++
				}
			}
		}
	}
	if(Turn%2==1){
		if(scr.O!=0||scr.X!=0){
			if(scr.O>scr.X)Cln("O Win.","")
			if(scr.O<scr.X)Cln("X Win.","")
			if(scr.O==scr.X)Cln("Draw.","")
		}
	}
}
function Adq(){
	Ex.Pro=confirm("Use Gomoku-Pro Rule? Now is "+Ex.Pro)
	if(Turn==0)Cln("","")
}