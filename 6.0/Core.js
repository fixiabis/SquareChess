var Turn=0,Sbl=["O","X",""],Brd=[],dfc=1,ord=Split("F;B;R;L;FR;FL;BR;BL",";"),NSt=[]
function Set(crd){NSt[Turn]=crd
	if(!Lmt(crd,Sbl[Turn%2])){Controls(crd).innerHTML=Sbl[Turn%2];Turn++}Wtr()
}
function Crd(crd,arw){var x=0,y=0
	for(var i in arw){
		switch(arw[i]){
			case"F":y--;break
			case"B":y++;break
			case"R":x++;break
			case"L":x--;
		}
	}return Chr(Asc(crd[0])+x)+Val(Val(crd[1])+y)
}
function Wtr(){var b=""
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			b+=RdS(Chr(cd1)+cd2)
		}
	}Brd[Turn]=b+">"+Turn;Rul()
}
function Rdr(brd){
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			WtS(Chr(cd1)+cd2,brd[(cd1-65)*9+cd2-1])
		}
	}
}
function Cln(msg,tgt){var ck=1
	if(msg!="")ck=confirm(msg)
	if(ck){Turn=0;Brd=[]
		for(cd1=65;cd1<74;cd1++){
			for(cd2=1;cd2<10;cd2++){if(Instr(RST(Chr(cd1)+cd2),tgt)==-1)continue
				WtS(Chr(cd1)+cd2,2)
				if((cd1+cd2)%2==0){
					Controls(Chr(cd1)+cd2).style.backgroundColor="lightgray"
				}else{
					Controls(Chr(cd1)+cd2).style.backgroundColor=""
				}
			}
		}ExB();Wtr()
	}
}
function RdS(crd){
	for(i in Sqr){var n=0
		if(RSF(crd)==Sqr[i][1])n++
		if(RSB(crd)==Sqr[i][2])n++
		if(RST(crd)==Sqr[i][0])n++
		if(n==3)return Val(i)+3
	}
	for(i=0;i<3;i++)if(RST(crd)==Sbl[i])return i
}
function WtS(crd,ord){var exd=ord-3
	if(ord<3){
		if(dfc){var bc="",fc=""
			if((Asc(crd[0])+Val(crd[1]))%2==0)bc="lightgray"
			Controls(crd).style.backgroundColor=bc
			Controls(crd).style.color=fc
		}
		Controls(crd).innerHTML=Sbl[ord];return
	}
	Controls(crd).innerHTML=Sqr[exd][0]
	if(Sqr[exd][1]!="")Controls(crd).style.color=Sqr[exd][1]
	if(Sqr[exd][2]!="")Controls(crd).style.backgroundColor=Sqr[exd][2]
}
function bdB(){
	var Bk=Val(prompt("Add Block?(Max:27)",Ex.Block))
	if(typeof Bk=="number"){
		if(Bk<0)Bk=0;if(Bk>27)Bk=27
		Ex.Block=Bk
	}if(Turn==0){Cln("","")}
}
function crB(){var b=0
	while(b!=Ex.Block){var cd1=Val(Rnd()*9)+65,cd2=Val(Rnd()*9+1),clr=RSB(Chr(cd1)+cd2)
		if(clr=="lightgray"&&(cd1+cd2)%2==0&&RST(Chr(cd1)+cd2)==""){b++
			WtS(Chr(cd1)+cd2,3)
		}
	}
}
function RST(crd){if(Controls(crd))return Controls(crd).innerHTML}
function RSF(crd){if(Controls(crd))return Controls(crd).style.color}
function RSB(crd){if(Controls(crd))return Controls(crd).style.backgroundColor}