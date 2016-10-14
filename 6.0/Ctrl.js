function Undo(){Direct(Turn-1)}
function Redo(){Direct(Turn+1)}
function Goto(){Direct(prompt("Go to turn:"))}
function Direct(v){if(Brd[v]){Rdr(Brd[v]);Turn=v}}
function Clean(){if(Turn>2){Cln("Clean Board?","")}else{Cln("","")}}
function Command(evt){var c=evt.ctrlKey,k=evt.which,s=evt.shiftKey
	switch(k){
		case  8:Undo();break
		case 13:Redo();break
		case 18:Adn();break
		case 37:if(c){evt.preventDefault();Undo()}else Near("L");break
		case 38:if(c)Clean();else Near("F");break
		case 39:if(c){evt.preventDefault();Redo()}else Near("R");break
		case 40:if(c)Cln("","");else Near("B");break
		case 46:if(s)Cln("","");else Clean();break
		case 89:if(c)Redo();break
		case 90:if(c)Undo();break
		case 72:if(c){evt.preventDefault();Goto();break}
		default:if(!c&&k>64&&k<74){Set(Chr(k)+prompt("Enter coordinate"))}
	}
}
function Record(){prompt("Get Board",location.hostname+location.pathname+"#"+Brd[Turn])}
function List(evt){var sz="0px"
	if(evt.pageX<Split(Controls("Board").style.marginLeft,"px")[0]&&Controls("UCL").clientLeft==0)sz="160px"
	Controls("UCL").style.width=sz
}
function Near(arw){
	Set(Crd(NSt[Turn-1],arw))
}