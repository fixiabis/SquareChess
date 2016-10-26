//Simplify.js 函數簡化
var doc=document
function Rnd(){return Math.random()}//輸出亂數
function Val(v){return v*1}//數值化
function Split(s,m){return s.split(m)}//分割字串為物件藉由指定字(m)
function Instr(s,c){return s.indexOf(c)}//搜尋字串位置
function Mid(s,r,v){return s.substr(r,v)}//從起始點(r)取得指定數(v)由字串(s)
function Asc(s){return s.charCodeAt()}
function Chr(v){return String.fromCharCode(v)}
function Id(d){return document.getElementById(d)}
function Class(c){return document.getElementsByClassName(c)}
//Core.js 核心(基本功能與規則常用函數)
var Tn=0,Dft={},Hst={Brd:[],Crd:[],Sel:{}},MdQ=[],Sqr={Sym:["O","X",""],FtC:["","blue"],BgC:["white","lightgray"]},Brd={}
//宣告回合值(Tn)，預設項目(Dft)，紀錄項目(Hst)，模式檔佇列(MdQ)，元件屬性(Sqr)，棋盤元件(Brd)，方向元件(Vct)
function Ldr(){
	if(location.search&&Mid(location.search,0,6)=="?mode="){//若有查詢值，且開頭為"?mode="時
		location.search=Mid(location.search.replace("%3A",":"),1,location.search.length-1)
		//變更查詢值內容"%3A"為":"
		doc.title=sr.split("?mode=")[1];MdQ=doc.title.split(":");LMd(0)
		//變更頁面標題，將模式名稱存入佇列(MdQ)，裝載第一個模式(MdL)
	}else{//反之
		var Mod=[
			"Connect","Blocker","Divider","Adapter",
			"Connect:Attack","Adapter:Attack","Connect:Defend",
			"Connect:Scheme","Divider:Scheme","Adapter:Scheme",
			"Divider:Zombie","Connect:Zombie","Adapter:Zombie",
			"Divider:Follow","Connect:Follow","Adapter:Follow",
			"Blocker:ByLine"
		]//宣告可行模式(Mod)
		Id("Brd").childNodes[0].childNodes[0].innerHTML="Directing..."//讓使用者注意本頁正在重新導向
		setTimeout('location="chess.html?mode="+"'+Mod[Math.floor(Rnd()*Mod.length)]+'"',2000)//2秒後隨機導向至可行模式(Mod)
	}
}//資料取得
function MdL(ord){
	var s=doc.createElement("script")//建立Script物件
	s.src="Shell/"+MdQ[ord]+".js"//模式檔位置
	if(MdQ[ord+1])s.onload=function(){MdL(ord+1)};else s.onload=function(){Brd.Cre();Brd.Cln();Brd.Rsz()}
	//若下一個模式檔存在時，裝載下一個模式(MdL)，反之建立棋盤(Brd.Cre)，初始化棋盤(Brd.Cln)，設定棋盤大小(Brd.Rsz)
	doc.body.appendChild(s)
}//模式裝載
function Crd(crd,vct){var x=0,y=0//宣告座標X軸(x)，Y軸(y)
	vct=Crd.Vct(vct)//確認方向(vct)
	if(typeof vct=="object"){//當方向(vct)為物件時
		for(var i=0;i<vct.length;i++)vct[i]=Crd(crd,vct[i])//逐一取得座標(crd)藉由方向(vct)
		return vct//傳回座標物件(crd)
	}
	for(var i in vct)switch(vct[i]){//逐一讀取與判別方向
		case"F":y--;break//前方
		case"B":y++;break//後方
		case"R":x++;break//右方
		case"L":x--;break//左方
	}return Chr(Asc(crd[0])+x)+Val(Val(crd[1])+y)//傳回座標
}//藉方向輸出座標
Crd.Flt=function(cds,ord){var res=[]//宣告輸出物件(res)
	for(var i=0;i<cds.length;i++)if(ord(cds[i]))res.push(cds[i]);return res//不符合條件(ord)時清空該項目
}//篩選座標
Crd.Vct=function(typ){
	if(typeof typ=="object"){for(var i=0;i<typ.length;i++)typ[i]=Crd.Vct(typ[i]);return typ}
	//若類別為物件，逐一取得方向藉由類別
	if(Val(typ[0])&&typ[1]){tp=typ.replace(typ[0],"");var vct="",tp=Crd.Vct(tp)//若參數以數字開頭時，將方向單位化(tp)
		if(typeof tp=="object"){
			for(var i=0;i<tp.length;i++)tp[i]=Crd.Vct(typ[0]+tp[i]);return tp
		}//若單位化(tp)為物件，逐一讀取方向藉由單位化
		for(i=0;i<Val(typ[0]);i++)vct+=tp;return vct//單位化後輸出方向
	}
	switch(typ[0]){//判別類別第一碼(typ[0])
		case"8":return"F,B,R,L,FR,FL,BR,BL".split(",")//八方
		case"X":return"FR,FL,BR,BL".split(",")//斜四方
		case"4":return"F,B,R,L".split(",")//正四方
		case"Q":return"FFR,FFL,FRR,FFL,BBR,BBL,BRR,BLL".split(",")//異八方
		case"V":
			return Crd.Flt(Crd.Vct("X"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})//斜四方篩選
		case"W":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
			//異八方篩選(四位)
		case"Y":
			return Crd.Flt(Crd.Vct("Q"),function(ckr){if(Instr(ckr,typ[1]+typ[1])>-1)return 1;else return 0})
			//異八方篩選(兩位)
		case"H":return"R,L".split(",")//左右方
		case"I":return"F,B".split(",")//前後方
	}return typ
}//藉代碼輸出方向
Brd.Rec=function(brd){var atr=["S","F","B"],rbd=""//宣告屬性(atr)，記錄棋盤(rbd)
	if(typeof brd=="number"&&Hst.Brd[brd])Brd.Rec(Hst.Brd[brd])
	//若棋盤值(brd)為數值且棋盤記錄存在，讀取棋盤紀錄(Hst.Brd)
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)for(i=0;i<4;i++){
		if(brd)Brd.Sym(Chr(cd1)+cd2,atr[i],Val(brd[(cd1-65+cd2-1)*3+i]))
		else rbd+=Brd.Sym(Chr(cd1)+cd2,atr[i])
	}return rbd//若棋盤值存在，變更棋盤元件，反之記錄棋盤(rbd)
}//讀取/紀錄棋盤代碼
Brd.Cre=function(){
	var brd="<table border='0' cellpadding='0' cellspacing='0' oncontextmenu='Usr.Lst()' style='background-color:dimgray'>"
	for(cd2=1;cd2<10;cd2++){brd+="<tr>"
		for(cd1=65;cd1<74;cd1++){
			brd+="<td id='"+Chr(cd1)+cd2+"' onclick='Usr.Set(this.id)' ondblclick='Usr.Udo(this.id)' class='bt'></td>"
			Brd[Chr(cd1)+cd2]={S:"",F:"",B:"",O:""}
		}brd+="</tr>"
	}Id("Brd").innerHTML=brd+"</table><div id='UC'><table><tr><td class='bt' onClick='Usr.Udo()' onContextMenu='Usr.Gto()'>Undo</td><td class='bt' onclick='Usr.Cln()' onContextMenu='Usr.Adn()'>Clean</td></tr></table></div>"//建立棋盤與簡易控制介面
	Id("Brd").style.animation="down 2s"//棋盤轉場特效
}//建立棋盤
Brd.Rsz=function(){
	Id("Brd").style.height="0px";Id("UC").style.display="none"//隱藏元件
	var sz=doc.body.clientHeight,C=1//宣告依附大小(sz)為頁面高度，橫向螢幕值(C)
	if(doc.body.clientWidth<sz){sz=doc.body.clientWidth;Id("UC").style.display="inline";C=0}
	//若頁面寬度大於依附大小(sz)，依附大小(sz)為頁面寬度，顯示簡易控制介面，橫向螢幕值變更
	sz=Math.floor(sz/9)
	for(i=0;i<83;i++){if(!Class("bt")[i])break
		Class("bt")[i].style.width=sz+"px"
		Class("bt")[i].style.height=sz+"px"
		Class("bt")[i].style.fontSize=sz-10+"px"
		Class("bt")[i].style.lineHeight=sz+"px"
	}//設定棋盤格高度，寬度，文字大小，行高
	for(i=81;i<83;i++){
		if(Class("bt")[i])Class("bt")[i].style.width=sz*4.5+"px"
		else Class("bt")[i-1].style.width=sz*9+"px"
	}//設定簡易控制介面寬度
	Id("Brd").style.height=sz*9+"px";Id("UC").style.width=sz*9+"px"//顯示元件
	Id("Brd").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"
	if(C)Id("Brd").style.marginTop=(doc.body.clientHeight-(sz*9))/2+"px"
	Id("UC").style.marginLeft=(doc.body.clientWidth-(sz*9))/2+"px"//元件置中
	if(Val(Split(Id("Brd").style.marginLeft,"px")[0])<40){
		Id("UCM").style.display="inline"
		for(i=0;i<3;i++)Class("list")[i].style.width=doc.body.clientWidth/3+"px"
	}else Id("UCM").style.display="none"//額外選單顯示
}//重設棋盤大小
Brd.Qre=function(crd,atr,typ){
	if(typeof crd=="object")for(var i=0;i<crd.length;i++)Brd.Qre(crd[i],atr,typ);Brd[crd][atr]=typ
}//棋盤元件屬性取得/變更
Brd.Sel=function(typ,ord){
	if(Hst.Sel[typ])return Hst.Sel[typ];Hst.Sel[typ]=[]
	if(typeof typ=="object"){
		for(var i=0;i<typ.length;i++)Hst.Sel[typ]=Hst.Sel[typ].concat(Brd.Sel(typ[i]))
	}
	if(ord)return Crd.Flt(Brd.Sel(typ),ord)
	if(typ=="All"){
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Hst.Sel.All.push(Chr(cd1)+cd2)
	}
	if(Instr(typ,"-")>-1){var spt=typ.split("-")
		if(spt[0].length==1&&spt[1].length==1){
			var sml=Asc(spt[0]),big=Asc(spt[1]);if(Asc(spt[0])>big){sml=Asc(spt[1]);big=Asc(spt[0])}
			for(var i=sml;i<big+1;i++)Hst.Sel[typ].push(Chr(i));Hst.Sel[typ]=Brd.Sel(Hst.Sel[typ])
		}else if(spt[0].length==2&&spt[1].length==1||spt[0].length==1&&spt[1].length==2){
			var m=0;if(spt[1].length==2)m=1
			var cd1=spt[m][0],cd2=spt[m][1]
			if(Val(spt[(m+1)%2]))Hst.Sel[typ]=Brd.Sel(spt[m]+"-"+cd1+spt[(m+1)%2])
			else Hst.Sel[typ]=Brd.Sel(spt[m]+"-"+spt[(m+1)%2]+cd2)
		}else{
			var cd1f=Asc(spt[0][0]),cd1l=Asc(spt[1][0]),cd2f=Val(spt[0][1]),cd2l=Val(spt[1][1])
			if(Asc(spt[0][0])>cd1l){cd1f=Asc(spt[1][0]);cd1l=Asc(spt[0][0])}
			if(Val(spt[0][1])>cd2l){cd2f=Val(spt[1][1]);cd2l=Val(spt[0][1])}
			Hst.Sel[typ]=Crd.Flt(Brd.Sel("All"),
				function(ckr){
					var cd1k=Asc(ckr[0]),cd2k=Val(ckr[1])
					if(cd1k>=cd1f&&cd1k<=cd1l&&cd2k>=cd2f&&cd2k<=cd2l)return 1;else return 0
				}
			)
		}
	}
	if(Instr(typ,","))Hst.Sel[typ]=typ.split(",")
	if(Instr(typ,":")){var spt=typ.split(":");Hst.Sel[typ]=Crd(spt[0],spt[1])}
	if(typ.length==1)Hst.Sel[typ]=Crd.Flt(Brd.Sel("All"),function(ckr){if(Instr(ckr,typ)>-1)return 1;else return 0});return Hst.Sel[typ]
}//輸出棋盤選擇行/列
/*
Brd.Upl()更新棋盤代碼
Brd.Get()取得棋盤代碼
Brd.Cln(msg,tgt)清除棋盤指定項目
Brd.Adn()額外功能
Brd.Mrk()輔助標記

Usr.Set(crd)設置符號
Usr.Gto([crd])前往指定回合/設置該座標的指定回合
Usr.Udo([crd])前往上一回合/設置該座標的上一回合
Usr.Rdo([crd])前往下一回合/設置該座標的下一回合
Usr.Adn()額外功能
Usr.Lst()目前的最後一回合
Usr.Tol()使用者工具
Usr.MsO()使用者滑鼠移動
Usr.KDw()使用者鍵盤按下
Usr.KUp()使用者鍵盤放開
Usr.Mnu()使用者選單
Usr.Cln()使用者要求清除棋盤

Shell.js 殼層(遊戲規則)
Rul()遊戲規則
Rul.Lmt(crd)規則限制
Ext.Brd()擴充棋盤
Ext.Adn()擴充功能
Ext.Rul()擴充規則
Ext.Tol()擴充工具
Ext.Lmt()擴充規則限制
Ext.Mrk()擴充標記
Ext.Ext.???()再擴充項目

Gear.js 齒輪(線上對戰)
Svr線上服務位址(字串)

Brd.Upl()更新棋盤代碼
Brd.Get()取得棋盤代碼
Usr.Lgn()使用者登入
Usr.Gvp()使用者認輸
*/