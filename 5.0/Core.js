var Turn=0,sbl=["O","X"],Brd=new Array(),RS=0,RB=0,cnt="F;B;R;L;FR;BR;FL;BL",RBs=18
function Set(crd){Wtr();if(Cnt(sbl[Turn%2],crd)==1&&Controls(crd).value==""){Controls(crd).value=sbl[Turn%2];Turn++;Rul()}Wtr()}
function Cnt(sym,crd){var ord=Split(cnt,";");if(Turn<2)return 1;for(i in ord){if(Controls(Crd(ord[i],crd))&&Controls(Crd(ord[i],crd)).value==sym){return 1}}return 0}
function Crd(arw,crd){var arw=Split(arw,""),x=0,y=0;for(var i in arw){switch(arw[i]){case"F":y--;break;case"B":y++;break;case"R":x++;break;case"L":x--;break}}return Chr(Asc(Mid(crd,0,1))+x)+Val(Val(Mid(crd,1,1))+y)}
function Rul(){var OA=0,XA=0,PA=0,NA=0;for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){if(Controls(Chr(cd1)+cd2).value==""){var Os=Cnt("O",Chr(cd1)+cd2),Xs=Cnt("X",Chr(cd1)+cd2);if(Os==1&&Xs==0)OA++;if(Os==0&&Xs==1)XA++;if(Os==1&&Xs==1)PA++;if(Os==0&&Xs==0)NA++;}}}if(PA==0&&NA==0){if(OA>XA)Cln("O Win.");if(OA<XA)Cln("X Win.")}if(OA==XA&&NA==0&&Turn>2)Cln("Draw.");if(Turn>1&&PA==0){if(OA==0)Cln("X Win.");if(XA==0&&Turn%2==1)Cln("O Win.")}}
function Cln(msg){if(msg!="")alert(msg);var cr=["lightgray","white"];for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){Controls(Chr(cd1)+cd2).value="";Controls(Chr(cd1)+cd2).style.backgroundColor=cr[(cd1+cd2)%2];Controls(Chr(cd1)+cd2).style.color="black"}}Turn=0;if(RB==1)RdB();if(RS==1)RdS()}
function Wtr(){var s="";for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){switch(Controls(Chr(cd1)+cd2).value){case"O":s+="0";break;case"X":s+="1";break;case" ":s+="3";break;default:s+="2"}}}Brd[Turn]=s}
function Rdr(turn){if(turn>=0&&Brd[turn]!=""){var s=0;for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){var sym="";switch(Mid(Brd[turn],s,1)){case"0":sym="O";break;case"1":sym="X";break;case"3":sym=" ";break;default:sym=""}Controls(Chr(cd1)+cd2).value=sym;s++;Turn=turn}}Rul()}}
function RdS(){var Os=["E4","E6","D5","F5"],Xs=["D4","D6","F4","F6"];Wtr();Controls(Os[Val(Rnd()*4)]).value="O";Turn++;Wtr();Controls(Xs[Val(Rnd()*4)]).value="X";Turn++}
function RdB(){var n=0;if(RBs>27)RBs=27;while(n<RBs){var cd1=Val(Rnd()*9+65),cd2=Val(Rnd()*9+1),crd=Chr(cd1)+cd2;if(Controls(crd).value==""&&Val(cd1+cd2)%2==0){Controls(crd).style.backgroundColor="dimgray";Controls(crd).style.color="white";Controls(crd).value=" ";n++}}}
function CnB(){var cr=["lightgray","white"];for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){if(Controls(Chr(cd1)+cd2).value==" "){Controls(Chr(cd1)+cd2).value="";Controls(Chr(cd1)+cd2).style.backgroundColor=cr[(cd1+cd2)%2];Controls(Chr(cd1)+cd2).style.color="black"}}}}