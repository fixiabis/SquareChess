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
	Scr:[
		[
			"周圍",
			"A1與I9",
			"D2與C9",
			"G1與F8",
			"封限區:Attack",
			"封區:Attack",
			"色塊",
			"C3:G7",
			"周圍將產生封限區",
			"形成矩形",
			"米字",
			"符號接觸",
			"符號包圍",
			"空白區域將產生私區",
			"形成直線或斜線時",
			"口字",
			"五個我方符號呈直線",
			"封限區:Castle",
			"國土",
			"A1:I4",
			"A6:I9",
			"反射區將產生符號",
			"一起變成殭屍",
			"夾棋"
		],
		[
			function(){var cds="#E4,#E6,#D4,#D5,#D6,#F4,#F5,#F6";Rls.Brd.Scp("#E5:S:O|"+cds+":B:slateblue|Ogn|"+cds+":B:slateblue")},
			function(){Rls.Brd.Scp("#A1:S:O|#I9:S:X|#A1,#I9:S:|#A1:S:O/#I9:S:X")},
			function(){Rls.Brd.Scp("#D2:S:O|#C9:S:X|#D2,#C9:S:|#D2:S:O/#C9:S:X")},
			function(){Rls.Brd.Scp("#G1:S:O|#F8:S:X|#G1,#F8:S:|#G1:S:O/#F8:S:X")},
			function(){var cds="#A2,#B1,#B2",c2s="#I8,#H8,#H9"
				Rls.Brd.Scp(cds+":B:crimson/"+c2s+":B:royalblue|Ogn|"+cds+":B:crimson/"+c2s+":B:royalblue")
			},
			function(){var cds="#A3,#B3,#C3,#C1,#C2",c2s="#I7,#H7,#G7,#G8,#G9"
				Rls.Brd.Scp(cds+":B:palevioletred/"+c2s+":B:lightsteelblue|Ogn|"+cds+":B:palevioletred/"+c2s+":B:lightsteelblue")
			},
			function(){
				var cds=[
					"#A1,#A2,#A3,#A4,#A5,#B1,#B2,#C1,#D1",
					"#F9,#G9,#H8,#H9,#I5,#I6,#I7,#I8,#I9",
					"#E1,#F1,#G1,#H1,#H2,#I1,#I2,#I3,#I4",
					"#A6,#A7,#A8,#A9,#B8,#B9,#C9,#D9,#E9",
					"#C5,#D5,#E5,#F5,#G5,#E3,#E4,#E6,#E7",
					"#F2,#F3,#F4,#G2,#G3,#G4,#H3,#H4,#H5",
					"#B5,#B6,#B7,#C6,#C7,#C8,#D6,#D7,#D8",
					"#E8,#F6,#F7,#F8,#G6,#G7,#G8,#H6,#H7",
					"#B3,#B4,#C2,#C3,#C4,#D2,#D3,#D4,#E2"
				]
				Rls.Brd.Scp(
					cds[0]+":B:palevioletred|"+
					cds[1]+":B:lightcoral|"+
					cds[2]+":B:lightsteelblue|"+
					cds[3]+":B:lightseagreen|"+
					cds[4]+":B:khaki|"+
					cds[5]+":B:palevioletred|"+
					cds[6]+":B:lightcoral|"+
					cds[7]+":B:lightsteelblue|"+
					cds[8]+":B:lightseagreen"
				)
			},
			function(){var cds=""
				for(var cd1=67;cd1<72;cd1++)for(var cd2=3;cd2<8;cd2++)cds+="#"+Chr(cd1)+cd2+","
				cds=cds.substr(0,cds.length-1)
				Rls.Brd.Scp(cds+":B:slateblue|Ogn|"+cds+":B:slateblue")				
			},
			function(){var cds="#A1,#A2,#A3,#B1,#B3,#C1,#C2,#C3",c2s="#G7,#G8,#G9,#H7,#H9,#I7,#I8,#I9"
				Rls.Brd.Scp("#B2:S:O|#H8:S:X|"+cds+":B:crimson/"+c2s+":B:royalblue|Ogn|"+cds+":B:crimson/"+c2s+":B:royalblue")
			},
			function(){var cds=""
				for(var cd1=67;cd1<72;cd1++)for(var cd2=3;cd2<8;cd2++)if("C3C7G3G7".search(Chr(cd1)+cd2)<0)cds+="#"+Chr(cd1)+cd2+","
				cds=cds.substr(0,cds.length-1)
				Rls.Brd.Scp("#C3:S:O|#C7:S:O|#G3:S:O|#G7:S:O|"+cds+":B:indianred|Ogn|"+cds+":B:indianred")
			},
			function(){var cds="",c2s=",#E1,#E2,#E3,#E4"
				for(var i=1;i<10;i++){if(i==5)continue
					cds+="#"+Chr(i+64)+i+","+"#"+Chr(i+64)+(10-i)+","+"#"+Chr(i+64)+"5,"
					if(i>3)cds+="#E"+i+","
				}
				cds=cds.substr(0,cds.length-1)
				Rls.Brd.Scp("#E5:S:O|"+cds+c2s+":B:slateblue|Ogn|#E3:S:X|"+cds+":B:slateblue|Ogn|"+cds+":B:slateblue")
			},
			function(){
				Rls.Brd.Scp("#E5:S:O|#F5:S:X|#A1:S:O|#I9:S:X|#A2:S:O|#I8:S:X|#A3:S:O|#I7:S:X|#A4:S:O|#I6:S:X|#E5,#F5:S:Z/#E5,#F5:F:red/#E5,#F5:B:black|#E5:S:O/#F5:S:X/#E5,#F5:F:black/#E5,#F5:B:white|#E5,#F5:S:Z/#E5,#F5:F:red/#E5,#F5:B:black")
			},
			function(){
				Rls.Brd.Scp("#E4,#D5,#F5:S:O|#E5:S:X|#E6:S:O|#E5:S:Z/#E5:B:black/#E5:F:red|#E5:S:X/Ogn|#E5:S:Z/#E5:B:black/#E5:F:red")
			},
			function(){var cds="#E5,#E6,#E4,#D5"
				Rls.Brd.Scp("#E3:S:O|#E7:S:O|#D4:S:O|#D6:S:O|#C5:S:O|#F4:S:O|#F6:S:O|#F5:S:O|"+cds+":B:indianred|Ogn|"+cds+":B:indianred")
			},
			function(){var cds="#E3,#E4,#E5,#E6,#E7"
				Rls.Brd.Scp("#E2:S:O|#E8:S:O|"+cds+":B:indianred|Ogn|"+cds+":B:indianred")
			},
			function(){var cds="#C3,#C4,#C7,#D3,#E3,#F3,#F7,#G4,#G5,#G6,#G7",c2s=",#C5,#C6,#D7,#E7,#G3"
				Rls.Brd.Scp("#E5:S:O|"+cds+c2s+":B:slateblue|Ogn|#D5,#E6,#F4:S:X|"+cds+":B:slateblue|Ogn|"+cds+":B:slateblue")
			},
			function(){
				Rls.Brd.Scp("#E3,#E4,#E5,#E6,#E7:S:O|#E3,#E4,#E6,#E7:S:|#C3,#D4,#F6,#G7:S:O")
			},
			function(){var cds="#A1,#E1,#I1",c2s="#A9,#E9,#I9"
				Rls.Brd.Scp(cds+":B:crimson/"+c2s+":B:royalblue|Ogn|"+cds+":B:crimson/"+c2s+":B:royalblue")
			},
			function(){var cds="#E2,#E3,#D3,#D4,#D5,#F3,#F4,#G3,#E5"
				Rls.Brd.Scp("#E2:S:O|#E3:S:O|#D3:S:O|#D4:S:O|#D5:S:O|#F3:S:O|#F4:S:O|#G3:S:O|#E5:S:O|"+cds+":B:indianred|Ogn|"+cds+":B:indianred")
			},
			function(){var cds=""
				for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<5;cd2++)cds+="#"+Chr(cd1)+cd2+","
				cds=cds.substr(0,cds.length-1)
				Rls.Brd.Scp(cds+":B:slateblue|Ogn|"+cds+":B:slateblue")				
			},
			function(){var cds=""
				for(var cd1=65;cd1<74;cd1++)for(var cd2=6;cd2<10;cd2++)cds+="#"+Chr(cd1)+cd2+","
				cds=cds.substr(0,cds.length-1)
				Rls.Brd.Scp(cds+":B:slateblue|Ogn|"+cds+":B:slateblue")
			},
			function(){
				Rls.Brd.Scp("#A5,#B5,#C5,#D5,#E5,#F5,#G5,#H5,#I5:B:dimgray|#E4:S:O|#E7:S:X|#F3:S:O|#F7:S:O|#F7:S:|#F7:S:O")
			},
			function(){
				Rls.Brd.Scp("#A1,#A2,#A3,#A4,#A5:S:X/#C1,#C2,#C3,#C4,#C5:S:O|#A1,#C5:S:Z/#A1,#C5:F:red/#A1,#C5:B:black")
			},
			function(){
				Rls.Brd.Scp("#E4:S:O/#E4:B:indianred|#E5:S:X/#E5:B:lightskyblue|#E6:S:O/#E6:B:indianred|#E5:B:indianred|#E5:B:lightskyblue|#E5:B:indianred")
			}
		]
	]
};Rls.Ply=1
Rls.Connect=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	if(Rls.dft){jdg=Dft.Connect.QJd
		switch(Dft.Connect.Rul){
			case 1:
				r=Rls.add(r,"O方符號將隨機設置於E4,E6,F5,D5")
				r=Rls.add(r,"X方符號將隨機設置於F4,D4,F6,D6")
			break
			case 2:
				r=Rls.add(r,"雙方符號將隨機設置於E3,E7,G5,C5")
			break
		}
		if(Dft.Connect.Ori)r=Rls.add(r,"第一回合的符號視為根，所有的符號最終必須連接至根才可設置符號")
	}r=Rls.add(r,"符號須設置於我方符號周圍")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4]);return r
}
Rls.Attack=function(r){
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	r=Rls.ext(r,Rls.Set[1],"第一回合雙方符號將分別設置於A1與I9")
	r=Rls.add(r,"深色區域為我方封限區:Attack");r=Rls.add(r,"淺色區域為我方封區:Attack")
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
	r=Rls.add(r,Rls.Set[0]);r=Rls.add(r,"我方四枚符號形成矩形時，該矩形區域將產生私區")
	r=Rls.add(r,Rls.AJd[ajd]+":Blocker");r=Rls.add(r,Rls.Jdg[jdg]);return r
}
Rls.Forbid=function(r){
	r=Rls.add(r,"符號不得設置於私區");return r
}
Rls.Divider=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1]);if(Rls.dft){jdg=Dft.Divider.QJd
		if(Dft.Divider.Ori)r=Rls.add(r,"第一回合的符號視為根，所有的符號最終必須連接至根才可設置符號")
	}r=Rls.add(r,"符號須設置於我方符號米字，設置路徑間不得有對方符號")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4])
	return r
}
Rls.Zombie=function(r){var tun=10;if(Rls.dft)tun=Dft.Zombie.ToZ
	r=Rls.add(r,"第"+tun+"回合後，若雙方符號接觸將變成殭屍符號");r=Rls.add(r,"對方符號不存在時獲勝");return r
}
Rls.Follow=function(r){
	for(var i=0;i<r.length;i++)if(r[i].search("符號須設置於我方")>-1)r[i]=r[i].replace("符號須設置於我方","符號須設置於我方上一回合");return r
}
Rls.ByLine=function(r){var ajd=0;r=Rls.add(r,"我方兩枚符號形成直線或斜線時，該直線或斜線區域將產生私區")
	if(Rls.dft)ajd=Dft.ByLine.AJd;r=Rls.add(r,Rls.AJd[ajd]+":ByLine");return r
}
Rls.Anomal=function(r){
	r=Rls.add(r,"空白區域被符號包圍時，空白區域將產生私區");return r
}
Rls.Adapter=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1]);if(Rls.dft){jdg=Dft.Adapter.QJd
		if(Dft.Adapter.Ori)r=Rls.add(r,"第一回合的符號視為根，所有的符號最終必須連接至根才可設置符號")
	}
	r=Rls.add(r,"符號須設置於我方符號口字，設置路徑間不得有對方符號")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4]);return r
}
Rls.Invert=function(r){
	for(var i=0;i<r.length;i++)if(r[i].search("符號須設置於我方")>-1)r[i]=r[i].replace(r[i],"符號不得設置於我方符號"+r[i].replace("符號須設置於我方符號","").substr(0,2));return r
}
Rls.Castle=function(r){
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	r=Rls.ext(r,Rls.Set[1],"第一回合雙方符號將分別設置於D2與C9</li><li>第二回合雙方符號將分別設置於G1與F8")
	r=Rls.add(r,"深色區域為我方封限區:Castle");r=Rls.add(r,Rls.Ara[0].replace("封區或",""));r=Rls.add(r,Rls.Ara[1].replace("限區或",""));return r
}
Rls.Gomoku=function(r){
	r=Rls.add(r,Rls.Set[0])
	if(Rls.dft&&Dft.Gomoku.Pro)r=Rls.add(r,"第二回合O方符號不得設置於C3:G7之座標")
	r=Rls.add(r,"當五個我方符號呈直線或斜線時獲勝");return r
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
	r=Rls.add(r,"將符號組合成一區塊，為一國土")
	r=Rls.add(r,"當區塊有9個符號以上時為一王國")
	r=Rls.add(r,"棋盤已滿，我方王國符號數較對方多時獲勝")
	r=Rls.add(r,"棋盤已滿，我方王國符號數與對方相同，我方王國數較對方多時獲勝");return r
}
Rls.Mirror=function(r){
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	r=Rls.ext(r,Rls.Set[1],"第一回合O方符號需設置於A1:I4之座標</li><li>第一回合X方符號需設置於A6:I9之座標")
	r=Rls.add(r,"A1:I4為對方反射區")
	r=Rls.add(r,"A6:I9為我方反射區")
	r=Rls.add(r,"第4回合後，我方設置符號於對方反射區時，我方反射區將產生符號")
	r=Rls.add(r,"我方設置符號於我方反射區時，對方反射區不會產生符號")
	return r
}
Rls.Newbie=function(r){
	if(Rls.dft&&Dft.System.Nxt)r=Rls.add(r,"陰暗的區域為無法設置的區域")
	return r
}
Rls.Fallen=function(r){var fln=5;if(Rls.dft)tun=Dft.Fallen.fln
	r=Rls.add(r,"第"+fln+"回合後，在我方回合可點選我方符號，選擇一對方符號一起變成殭屍");return r
}
Rls["Connect-Origin"]=function(r){var jdg=1
	r=Rls.ext(r,Rls.Set[0],Rls.Set[1])
	if(Rls.dft){jdg=Dft["Connect-Origin"].QJd
		switch(Dft["Connect-Origin"].Rul){
			case 1:
				r=Rls.add(r,"O方符號將隨機設置於E4,E6,F5,D5")
				r=Rls.add(r,"X方符號將隨機設置於F4,D4,F6,D6")
			break
			case 2:
				r=Rls.add(r,"雙方符號將隨機設置於E3,E7,G5,C5")
			break
		}
		if(Dft["Connect-Origin"].Ori)r=Rls.add(r,"第一回合的符號視為根，所有的符號最終必須連接至根才可設置符號")
	}r=Rls.add(r,"符號可設置於我方符號周圍")
	r=Rls.add(r,"符號可設置於我方符號口字，設置路徑間不得有對方符號")
	r=Rls.add(r,Rls.Jdg[jdg]);r=Rls.add(r,Rls.Jdg[4]);return r
}
Rls.RvLike=function(r){
	r=Rls.add(r,"符號需設置於可夾棋處")
	return r
}
Rls.Origin=function(r){return r}
Rls.System=function(r){
	if(Rls.dft&&Dft.System.Blk)r=Rls.add(r,"將產生"+Dft.System.Blk+"個障礙物")
	var spc={
		n:["公區","私區"],
		d:["雙方皆可設置的區域","對方不可設置的區域"]
	}
	for(var j=0;j<spc.n.length;j++)for(var i=0;i<r.length;i++)if(r[i].search(spc.n[j])>-1){
		r=Rls.add(r,spc.n[j]+"即"+spc.d[j]);break
	}return r
}
Rls.Brd=function(s,t,v){var ob=$(s)
	switch(t){
		case"B":t="background-color";break
		case"O":t="opacity";break
		case"F":t="color";break
	}
	if(t=="S")for(var i=0;i<$(s).length;i++)$(s)[i].innerHTML=v
	else $(s).css(t,v)
}
Rls.Brd.Cln=function(v){
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++){var bc="white"
		if((cd1+cd2)%2==0)bc="lightgray";Id(Chr(cd1)+cd2).style.backgroundColor=bc
		if(!v)Id(Chr(cd1)+cd2).innerHTML="";Id(Chr(cd1)+cd2).style.color="black"
	}Rls.Ply=1
}
Rls.Brd.Qre=function(v){var spt=v.split("/");console.log(v)
	for(var i=0;i<spt.length;i++){var sp=spt[i].split(":")
		if(sp[0]=="Ogn"){Rls.Brd.Cln(1);continue}Rls.Brd(sp[0],sp[1],sp[2])
	}
}
Rls.Brd.Scp=function(v){var spt=v.split("|");if(!Rls.Ply)return;Rls.Ply=0
	for(var i=0;i<spt.length;i++)setTimeout("Rls.Brd.Qre('"+spt[i]+"')",(i+1)*500)
	setTimeout("Rls.Brd.Cln()",(spt.length+1)*500)
}
function Srt(l){var t=["rules","chess"],s=location.search,n=":Newbie"
	if(s.search(n)>-1){s=s.replace(n,"");n=""}
	location=t[l]+".html"+s+n
}
if(typeof Shl=="object")Shl.Rls=Rls
Rls.Lst=function(MdQ){
	var rls=[]
	for(var i=0;i<MdQ.length;i++){if(Rls[MdQ[i]])rls=Rls[MdQ[i]](rls);else{Mbx("要求規則說明不存在",function(){location="index.html"})}Rls.System(rls)}
	var sot={Set:[],Ara:[],Jdg:[],Oth:[]},cnt=""
	for(var i=0;i<rls.length;i++){
		if(rls[i].search("獲勝")>-1||rls[i].search("平手")>-1){sot.Jdg.push(rls[i]);continue}
		if(rls[i].search("區")>-1){sot.Ara.push(rls[i]);continue}
		if(rls[i].search("設置")>-1){sot.Set.push(rls[i]);continue}sot.Oth.push(rls[i])
	}
	if(sot.Set.length){cnt+="<li>設置規則<ul>"
		for(var i=0;i<sot.Set.length;i++)cnt+="<li>"+sot.Set[i]+"</li>";cnt+="</ul></li>"
	}
	if(sot.Ara.length){cnt+="<li>區域規則<ul>"
		for(var i=0;i<sot.Ara.length;i++)cnt+="<li>"+sot.Ara[i]+"</li>";cnt+="</ul></li>"
	}
	if(sot.Oth.length){cnt+="<li>其他規則<ul>"
		for(var i=0;i<sot.Oth.length;i++)cnt+="<li>"+sot.Oth[i]+"</li>";cnt+="</ul></li>"
	}
	if(sot.Jdg.length){cnt+="<li>獲勝條件<ul>"
		for(var i=0;i<sot.Jdg.length;i++)cnt+="<li>"+sot.Jdg[i]+"</li>";cnt+="</ul></li>"
	}return cnt
}