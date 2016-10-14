var input="lightgray",Brd=[],Turn=0,Mov=[]
function Set(crd){Wtr();Controls(crd).style.backgroundColor=input;Turn++;Wtr()}
function Clr(crd){var color=input;input="";Set(crd);input=color}
function Cst(crd){var color=Controls(crd).style.backgroundColor;input=prompt("EditColor.",color);if(input==null)input=color;Set(crd)}
function Cln(){for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){Clr(Chr(cd1)+cd2)}}Controls("E5").style.backgroundColor="lightgray"}
function Wtr(){Brd[Turn]=[];for(cd1=65;cd1<74;cd1++){Brd[Turn][cd1]=[];for(cd2=1;cd2<10;cd2++){Brd[Turn][cd1][cd2]=Controls(Chr(cd1)+cd2).style.backgroundColor}}}
function Rdr(turn){for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){Controls(Chr(cd1)+cd2).style.backgroundColor=Brd[turn][cd1][cd2]}}Turn=turn}
function Dst(crd,v){if(v==2)Set(crd)}
function Rec(){Mov[Mov.length]=Brd[Turn]}
function Srt(){ply(0)}
function ply(v){Red(v);if(Math.floor(v+1)<Mov.length-1){setTimeout("ply("+Math.floor(v+1)+")",1000)}}
function Red(mv){for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){Controls(Chr(cd1)+cd2).style.backgroundColor=Mov[mv][cd1][cd2]}}}