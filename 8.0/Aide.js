function MsO(e){
	if(e.pageX<Id("Board").offsetLeft)Mnu(1)
	else if(e.pageX>Id("Board").offsetLeft+Id("Board").offsetWidth)Mnu(1,1)
	else Mnu()
}//滑鼠移動
function KDw(e){
	
}//按鍵按下
function KUp(e){
	
}//按鍵放開
function Mnu(v,p){var h=0;if(v)h=160;
	Id("menu").style.width=h+"px"
	if(p){Id("menu").style.left=""
		Id("menu").style.right="0px"
	}else{Id("menu").style.left="0px"
		Id("menu").style.right=""
	}
}//輔助選單