Dft.Pro=false
function Adn(){bdB();bdP()}
function Lmt(c){
	if(Qre(c,"T")!="")return 1
	if(Turn==2&&Dft.Pro)if(Asc(c[0])>66&&Asc(c[0])<72&&c[1]>2&&c[1]<8)return 1
	return 0
}
function Brd(){crB();if(Dft.Pro)Set("E5")}
function Rul(){var ord=Split("B;R;BR;BL",";"),scr={O:0,X:0}
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"T")=="")continue
		for(p=0;p<2;p++){if(Qre(Chr(cd1)+cd2,"T")!=Sbl[p])continue
			for(n in ord){var t=ord[n],s=0
				while(true){
					if(Id(Crd(Chr(cd1)+cd2,t))){
						if(Qre(Crd(Chr(cd1)+cd2,t),"T")==Sbl[p])s++;else break
					}else break;t+=ord[n]
				}if(s==4)scr[Sbl[p]]++
			}
		}
	}
	if(Turn%2==1)if(scr.O!=0||scr.X!=0){
		if(scr.O==scr.X)Cln("Draw")
		if(scr.O>scr.X)Cln("O Win")
		if(scr.O<scr.X)Cln("X Win")
	}
}
function bdP(){Dft.Pro=confirm("Use Gomoku-Pro Rule? Now is "+Dft.Pro);if(Turn==0)Cln()}