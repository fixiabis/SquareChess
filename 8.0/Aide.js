function MsO(e){var v=1,p=0
	if(e.pageX<Id("Board").offsetLeft)p=0
	else if(e.pageX>Id("Board").offsetLeft+Id("Board").offsetWidth)p=1
	else v=0;Mnu(v,p)
}//滑鼠移動
function KDw(e){var c=e.ctrlKey,k=e.which,s=e.shiftKey;e.preventDefault()
	switch(k){
		case  8:Ctl("Udo");break
		case 13:Ctl("Rdo");break
		case 18:Opt();break
		case 35:Rec(Hst.Crd.length-1);break
		case 37:if(c)Ctl("Udo");else Dft.System.Dir+="L";break
		case 38:if(c)Ctl("Cln");else Dft.System.Dir+="F";break
		case 39:if(c)Ctl("Rdo");else Dft.System.Dir+="R";break
		case 40:if(c)Ctl("Cln");else Dft.System.Dir+="B";break
		case 46:if(s)Cln();else Ctl("Cln");break
		case 89:if(c)Ctl("Rdo");break
		case 90:if(c)Ctl("Udo");break
		case 72:if(c)Ctl("Gto");break
		default:if(k>64&&k<74)Dft.System.Crd=Chr(k)
				else if(k>48&&k<58||k>96&&k<106){var num=Chr(k),crd=Dft.System.Crd
					if(k>96)num=Chr(k-48);crd+=num
					if(s)Ctl("Rdo",crd);else if(!c)Set(crd)
				}
	}
}//按鍵按下
function KUp(e){
	if(e.which<41&&e.which>36&&Dft.System.Dir!=""){Set(Crd(Hst.Crd[Tn],Dft.System.Dir));Dft.System.Dir=""}
}//按鍵放開
function Mnu(v,p){var h=0;if(v)h=160;
	Id("menu").style.width=h+"px"
	if(v)if(p){Id("menu").style.left=""
		Id("menu").style.right="0px"
	}else{Id("menu").style.left="0px"
		Id("menu").style.right=""
	}
}//輔助選單
function Ctl(t,v){
	switch(t){
		case"Cln":if(Tn!=Dft.Tn)Cln("確認清除棋盤?");else Cln();break
		case"Udo":if(v)Rec(Ser(v)-1);else if(Tn>Dft.Tn)Rec(Tn-1);break
		case"Rdo":if(v)Rec(Ser(v));else Rec(Tn+1);break
		case"Gto":var tn=prompt("輸入要前往的回合");if(tn>Dft.Tn)Rec(Val(tn));break
	}
}