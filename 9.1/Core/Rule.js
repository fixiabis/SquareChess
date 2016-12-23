var Rls={
	Set:[
		"雙方可隨意設置符號",
		"第一回合雙方可隨意設置符號"
	],
	Jdg:[
		"對方無法設置符號時獲勝",
		"無公區時，我方私區較對方多時獲勝",
		"公區無法形成私區時，我方私區較對方多時獲勝",
		"我方私區超過公區一半時獲勝",
		"棋盤已滿時平手"
	],
	Ara:[
		"對方封區或封限區皆為對方符號時獲勝",
		"對方限區或封限區出現我方符號時獲勝"
	],
	AJd:[
		"優先佔據該區域，就是我方的私區",
		"最後佔據該區域，就是我方的私區",
		"無論先後，雙方佔據時就是公區"
	],
	dft:typeof Dft!="undefined",
	add:function(r,v){
		if(r.indexOf(v)<0)r.push(v);return r
	},
	ext:function(r,a,b){var c=r.indexOf(a)
		if(r.indexOf(b)>-1)return r
		if(c>-1)r[c]=b;else r.push(b);return r
	},
	Scr:[]
}
Rls.Connect=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	if(Rls.dft)jdg=Dft.Connect.QJd
	if(Rls.dft)switch(Dft.Connect.Rul){
		case 1:
			r=Rls.add(r,"O方符號將隨機設置於E4,E6,F5,D5")
			r=Rls.add(r,"X方符號將隨機設置於F4,D4,F6,D6")
		break
		case 2:
			r=Rls.add(r,"雙方符號將隨機設置於E3,E7,G5,C5")
		break
	}r=Rls.add(r,"符號須設置於我方符號周圍")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4]);return r
}
Rls.Attack=function(r){
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	r=Rls.ext(r,Rls.Set[1],"第一回合雙方符號將分別位於A1與I9")
	r=Rls.add(r,"深色區域為我方封限區");r=Rls.add(r,"淺色區域為我方封區")
	r=Rls.add(r,Rls.Ara[0]);r=Rls.add(r,Rls.Ara[1].replace("限區或",""));return r
}
Rls.Defend=function(r){
	r=Rls.add(r,"不同色塊為一區域")
	r=Rls.add(r,"區域內有五枚我方符號，且無對方符號時獲勝");return r
}
Rls.Scheme=function(r){
	if(!Rls.dft||Rls.dft&&Dft.Scheme.Lmt){
		r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
		r=Rls.ext(r,Rls.Set[1],"第一回合雙方符號不得設置於C3:G7之座標")
	}
	r=Rls.add(r,"第一回合符號設置完成時，周圍將產生封限區")
	r=Rls.add(r,"對方封限區皆為對方符號時獲勝")
	r=Rls.add(r,"對方封限區出現我方符號時獲勝");return r
}
Rls.Blocker=function(r){var jdg=1,ajd=0;if(Rls.dft){jdg=Dft.Blocker.QJd;ajd=Dft.Blocker.AJd}
	r=Rls.add(r,Rls.Set[0]);r=Rls.add(r,Rls.AJd[ajd]+"(Blocker)")
	r=Rls.add(r,"我方四枚符號形成矩形時，該矩形區域將產生私區")
	r=Rls.add(r,Rls.Jdg[jdg]);return r
}
Rls.Forbid=function(r){
	r=Rls.add(r,"符號不得設置於私區");return r
}
Rls.Divider=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1]);if(Rls.dft)jdg=Dft.Divider.QJd
	r=Rls.add(r,"符號須設置於我方符號米字，設置路徑間不得有對方符號")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4]);return r
}
Rls.Zombie=function(r){var tun=10;if(Rls.dft)tun=Dft.Zombie.ToZ
	r=Rls.add(r,"第"+tun+"回合後，若雙方符號接觸將變成殭屍符號");r=Rls.add(r,"對方符號不存在時獲勝");return r
}
Rls.Follow=function(r){
	for(var i=0;i<r.length;i++)if(r[i].search("符號須設置於我方")>-1)r[i]=r[i].replace("符號須設置於我方","符號須設置於我方上一回合");return r
}
Rls.ByLine=function(r){var ajd=0;if(Rls.dft)ajd=Dft.ByLine.AJd;r=Rls.add(r,Rls.AJd[ajd]+"(ByLine)")
	r=Rls.add(r,"我方兩枚符號形成直線時，該直線區域將產生私區");return r
}
Rls.Anomal=function(r){var ajd=0;if(Rls.dft)ajd=Dft.Anomal.AJd;r=Rls.add(r,Rls.AJd[ajd]+"(Anomal)")
	r=Rls.add(r,"空白區域被符號包圍時，空白區域將產生私區");return r
}
Rls.Adapter=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1]);if(Rls.dft)jdg=Dft.Adapter.QJd
	r=Rls.add(r,"符號須設置於我方符號口字，設置路徑間不得有對方符號")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4]);return r
}
Rls.Invert=function(r){
	for(var i=0;i<r.length;i++)if(r[i].search("符號須設置於我方")>-1)r[i]=r[i].replace(r[i],"符號不得設置於我方符號"+r[i].replace("符號須設置於我方符號","").substr(0,2));return r
}
Rls.Castle=function(r){
	r=Rls.add(r,"深色區域為我方封限區");r=Rls.add(r,Rls.Ara[0].replace("封區或",""));r=Rls.add(r,Rls.Ara[1].replace("限區或",""));return r
}
Rls.Gomoku=function(r){
	r=Rls.add(r,Rls.Set[0])
	if(Rls.dft&&Dft.Gomoku.Pro)r=Rls.add(r,"第二回合O方符號不得設置於C3:G7之座標")
	r=Rls.add(r,"當五個我方符號呈一直線時獲勝");return r
}
Rls.GoLike=function(r){
	r=Rls.add(r,Rls.Set[0])
	if(Rls.dft&&Dft.GoLike.MJg)r=Rls.add(r,"對方符號被我方及殭屍符號包圍時，對方符號將變成殭屍符號")
	r=Rls.add(r,"對方符號被我方符號包圍時，對方符號將變成殭屍符號")
	r=Rls.add(r,"我方符號較對方多時獲勝");r=Rls.add(r,"對方符號不存在時獲勝");return r
}
Rls.Kingdom=function(r){
	if(!Rls.dft||Rls.dft&&Dft.Kingdom.Lmt){
		r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
		r=Rls.ext(r,Rls.Set[1],"第一回合雙方符號不得設置於C3:G7之座標")
	}
	r=Rls.add(r,"將符號組合成一塊，為一國土")
	r=Rls.add(r,"當國土有9個符號以上時為一王國")
	r=Rls.add(r,"棋盤已滿，我方王國符號數較對方多時獲勝")
	r=Rls.add(r,"棋盤已滿，我方王國符號數與對方相同，我方王國數較對方多時獲勝");return r
}
Rls.System=function(r){
	if(Rls.dft&&Dft.System.Blk)r=Rls.add(r,"將產生"+Dft.System.Blk+"個障礙物")
	var spc={
		n:["公區","私區"],
		d:["雙方皆可設置的區域","其中一方不可設置的區域"]
	}
	for(var j=0;j<spc.n.length;j++)for(var i=0;i<r.length;i++)if(r[i].search(spc.n[j])>-1){
		r=Rls.add(r,spc.n[j]+"即"+spc.d[j]);break
	}return r
}
function Sct(v){
	if(Rls.Scr)Bld(Rls.Scr[v])
	if(Rls.Scr.length>v)setTimeout("Scr("+v+1+")",1000)
}
function Bld(c){
	var spt=c.split("/")
	for(var i=0;i<spt.length;i++){console.log(spt[i])
		var cmd=spt[i].split(":"),crd=cmd[2].split(",")
		switch(cmd[0]){
			case"F":for(var j=0;j<crd.length;j++)Id(crd[j]).style.color=cmd[1];break
			case"B":for(var j=0;j<crd.length;j++)Id(crd[j]).style.backgroundColor=cmd[1];break
			case"S":for(var j=0;j<crd.length;j++)Id(crd[j]).innerHTML=cmd[1];break
			case"O":for(var j=0;j<crd.length;j++)Id(crd[j]).style.opacity=cmd[1];break
		}
	}
}
Bld.Cln=function(){
	for(var cd1=65;cd1<74;cd1++){
		for(var cd2=1;cd2<10;cd2++){
			Id(Chr(cd1)+cd2).innerHTML=""
			if((cd1+cd2)%2==0)Id(Chr(cd1)+cd2).style.backgroundColor="lightgray"
			else Id(Chr(cd1)+cd2).style.backgroundColor="white"
			Id(Chr(cd1)+cd2).style.color="black"
		}
	}
}
if(typeof Shl=="object")Shl.Rls=Rls