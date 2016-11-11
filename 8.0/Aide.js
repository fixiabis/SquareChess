function MsO(e){var v=1,p=0
	if(e.pageX<Id("Board").offsetLeft)p=0
	else if(e.pageX>Id("Board").offsetLeft+Id("Board").offsetWidth)p=1
	else v=0;Mnu(v,p)
}//滑鼠移動
function KDw(e){
	
}//按鍵按下
function KUp(e){
	
}//按鍵放開
function Mnu(v,p){var h=0;if(v)h=160;
	Id("menu").style.width=h+"px"
	if(v)if(p){Id("menu").style.left=""
		Id("menu").style.right="0px"
	}else{Id("menu").style.left="0px"
		Id("menu").style.right=""
	}
}//輔助選單
function Ctl(){}