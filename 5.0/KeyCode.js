var ctl=0
function cmd(v){
	switch(v){
		case 17:ctl=1;break;
		case 37:if(ctl==1){Controls("Undo").click()};break;
		case 39:if(ctl==1){Rdr(Val(Turn+1))};break
		case 40:if(ctl==1){Controls("Clean").click()};break;
		case 46:Controls("Clean").click();break;
		case 49:if(ctl==1){Controls("Block").click()};break;
		case 50:if(ctl==1){Controls("Random").click()};break;
		case 81:if(ctl==1){window.close()};break;
		case 89:if(ctl==1){Rdr(Val(Turn+1))};break;
		case 90:if(ctl==1){Controls("Undo").click()};break;
		default:if(ctl==0&&v>=65&&v<=73){Set(Chr(v)+Val(prompt("Enter Coordinate.")))};break
	}
}
function cn(){ctl=0}