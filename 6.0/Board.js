function create(){var bd="<table border='0' cellpadding='0' cellspacing='0'  oncontextmenu='Record()'>"
	for(cd2=1;cd2<10;cd2++){bd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			bd+="<td id='"+Chr(cd1)+cd2+"' onclick='Set(this.id)' class='bt'></td>"
		}bd+="</tr>"
	}
	Controls("Board").innerHTML=bd+"</table><div id='UC'><table><tr><td class='bt' onClick='Undo()' onContextMenu='Goto()'>Undo</td><td class='bt' onClick='Clean()' onContextMenu='Adn()'>Clean</td></tr></table></div>";Controls("Board").style.animation="down 2s";resize();Cln("","")
	document.body.innerHTML+="<div id='UCL'><div onclick='Clean()' class='game'>Clean</div><div onclick='Undo()' class='game'>Undo</div><div onclick='Redo()' class='game'>Redo</div><div onclick='Goto()' class='game'>Goto</div><div onclick='Record()' class='game'>Record</div><div onclick='Adn()' class='game'>Addons</div><div onclick='window.history.back()' class='game'>Home</div></div>"
	if(location.hash.length>82){var bd=Split(Split(location.hash,"#")[1],">")
		Rdr(bd[0]);Turn=Val(bd[1]);Brd[Turn]=bd[0]
	}
}
function resize(){
	Controls("Board").style.height="0px";Controls("UC").style.display="none"
	var sz=document.body.clientHeight,C=1;
	if(document.body.clientWidth<sz){sz=document.body.clientWidth;Controls("UC").style.display="inline";C=0};sz=Math.floor(sz/9)
	for(i=0;i<83;i++){
		document.getElementsByClassName("bt")[i].style.width=sz+"px"
		document.getElementsByClassName("bt")[i].style.height=sz+"px"
		document.getElementsByClassName("bt")[i].style.fontSize=sz-10+"px"
		document.getElementsByClassName("bt")[i].style.lineHeight=sz+"px"
	}
	for(i=81;i<83;i++){
		document.getElementsByClassName("bt")[i].style.width=sz*4.5+"px"
	}
	Controls("Board").style.height=sz*9+"px";Controls("UC").style.width=sz*9+"px"
	Controls("Board").style.marginLeft=(document.body.clientWidth-(sz*9))/2+"px"
	if(C)Controls("Board").style.marginTop=(document.body.clientHeight-(sz*9))/2+"px"
	Controls("UC").style.marginLeft=(document.body.clientWidth-(sz*9))/2+"px"
	
}