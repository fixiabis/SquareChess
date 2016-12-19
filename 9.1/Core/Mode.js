var Rls={
	Jdg:{
		Bsc:{
			0:"對方無法設置符號時獲勝",
			1:"無公區時，我方私區較對方多時獲勝",
			2:"公區無法形成私區時，我方私區較對方多時獲勝",
			3:"我方私區超過公區一半時獲勝",
			D:"棋盤已滿時平手",
			N:"對方符號不存在時獲勝"
		},
		Ara:{
			B:"對方封限區或封區皆為對方符號時獲勝",
			L:"對方封限區或限區有我方符號時獲勝"
		}
	},
	Lmt:{
		Bsc:[
			"第一回合雙方可隨意設置符號",
			"無法設置的區域將轉為私區",
			"雙方可隨意設置符號"
		]
	}
}
Rls.Connect=function(r){
	var l=[
		Rls.Lmt.Bsc[0],
		Rls.Lmt.Bsc[1],
		"符號須設置於我方符號周圍",
		Rls.Jdg.Bsc[1],
		Rls.Jdg.Bsc.D
	]
}
Rls.Attack=function(r){
	var l=[
		"雙方符號將分別位於A1與I9",
		"深色區域為我方封限區",
		"淺色區域為我方封區",
		Rls.Jdg.Ara.B,
		Rls.Jdg.Ara.L.replace("或限區","")
	]
}
Rls.Castle=function(r){
	var l=[
		"雙方符號將分別位於D2,G1與C9,F8",
		"深色區域為我方封限區",
		Rls.Jdg.Ara.B,
		Rls.Jdg.Ara.L.replace("或限區","")
	]
}
Rls.Defend=function(r){
	var l=[
		"不同色塊為一區域",
		"區域內有五枚我方符號，且無對方符號時獲勝"
	]
}
Rls.Scheme=function(r){
	var l=[
		"第一回合雙方符號不得設置於C3:G7之座標",
		"第一回合符號設置完成時，周圍將轉為封限區",
		Rls.Jdg.Ara.B.replace("或封區",""),
		Rls.Jdg.Ara.L.replace("或限區","")
	]
}
Rls.Anomal=function(r){
	var l=[
		"空白區域被符號包圍時，空白區域將轉為私區"
	]
}
Rls.Blocker=function(r){
	var l=[
		Rls.Lmt.Bsc[2],
		"我方四枚符號形成矩形時，該矩形區域將轉為私區",
		Rls.Jdg.Bsc[1]
	]
}
Rls.Forbid=function(r){
	var l=[
		"我方不得設置符號於我方私區"
	]
}
Rls.Divider=function(r){
	var l=[
		Rls.Lmt.Bsc[0],
		Rls.Lmt.Bsc[1],
		"符號須設置於我方符號米字，設置路徑間不得有對方符號",
		Rls.Jdg.Bsc[1],
		Rls.Jdg.Bsc.D
	]
}
Rls.Zombie=function(r){
	var l=[
		"第十回合後，若雙方符號接觸將轉為殭屍符號",
		Rls.Lmt.Bsc.N
	]
}
Rls.Follow=function(r){
	var l=[
		"設置符號只能依上一回合符號"
	]
}
Rls.ByLine=function(r){
	var l=[
		"我方兩枚符號形成直線時，該直線區域將轉為私區"
	]
}
Rls.Adapter=function(r){
	var l=[
		Rls.Lmt.Bsc[0],
		Rls.Lmt.Bsc[1],
		Rls.Jdg.Bsc.D,
		"符號須設置於我方符號口字，設置路徑間不得有對方符號",
		Rls.Jdg.Bsc[1]
	]
}
Rls.Invert=function(r){
	var l=[
		"符號不得設置於原須設置區域"
	]
}
Rls.Gomoku=function(r){
	var l=[
		Rls.Lmt.Bsc[2],
		"當五個我方符號呈一直線時獲勝"
	]
}
Rls.GoLike=function(r){
	var l=[
		Rls.Lmt.Bsc[2],
		"對方符號被我方符號包圍時，對方符號將轉為殭屍符號",
		Rls.Lmt.Bsc.N,
		"棋盤已滿，我方符號較對方多時獲勝"
	]
}
Rls.Kingdom=function(r){
	var l=[
		Rls.Lmt.Bsc[2],
		"將符號組合成一塊，當一塊有10個(含)符號時為一王國",
		"棋盤已滿，我方王國符號數較對方多時獲勝",
		"棋盤已滿，我方王國符號數與對方相同，我方王國數較對方多時獲勝"
	]
}
if(typeof Shl=="object")Shl.Rls=Rls