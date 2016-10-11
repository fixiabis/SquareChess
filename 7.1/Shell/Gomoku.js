Dft.Pro=false
function Adn(){bdB();bdP()}
function Lmt(c){
	if(Qre(c,"T")!="")return 1
	if(Tn==2&&Dft.Pro)if(Asc(c[0])>66&&Asc(c[0])<72&&c[1]>2&&c[1]<8)return 1
	return 0
}
function Brd(){crB();if(Dft.Pro)Set("E5")}
function Rul(){var cd4=Split("B;R;BR;BL",";");Scr={O:0,X:0}
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"T")=="")continue
		for(p=0;p<2;p++){if(Qre(Chr(cd1)+cd2,"T")!=Sbl[p])continue
			for(n in cd4){var t=cd4[n],s=0
				while(true){
					if(Id(Crd(Chr(cd1)+cd2,t))){
						if(Qre(Crd(Chr(cd1)+cd2,t),"T")==Sbl[p])s++;else break
					}else break;t+=cd4[n]
				}if(s==4)Scr[Sbl[p]]++
			}
		}
	}
	if(Tn%2==0)if(Scr.O!=0||Scr.X!=0){
		if(Scr.O==Scr.X)Cln("Draw")
		if(Scr.O>Scr.X)Cln("O Win:"+Scr.O+"/"+Scr.X)
		if(Scr.O<Scr.X)Cln("X Win:"+Scr.X+"/"+Scr.O)
	}
}
function bdP(){Dft.Pro=confirm("Use Gomoku-Pro Rule? Now is "+Dft.Pro);if(Tn==0)Cln()}