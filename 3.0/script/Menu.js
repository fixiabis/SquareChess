function coor(n){return document.getElementById(n)}function list(t){resize()
	if(t==""){
		if(coor('list').style.display=='none'){
			coor('list').style.display='inline';coor('menu').style.background="url(images/close.bmp)";coor('Game').style.display='none'
		}else{
			coor('list').style.display='none';coor('menu').style.background="url(images/listh.bmp)";coor('Game').style.display='inline'
		}
	}else{
		if(t=="i"){
			coor('list').style.display='inline';coor('menu').style.background="url(images/close.bmp)";coor('Game').style.display='none'
		}else{
			coor('list').style.display='none';coor('menu').style.background="url(images/listh.bmp)";coor('Game').style.display='inline'
		}
	}
}
function resize(){
	coor("list").style.height=document.body.scrollHeight-50+"px"
	if(coor("content"))coor("content").style.height=document.body.scrollHeight-50+"px"
}