var Rls={
	Jdg:{
		Bsc:{
			0:"對方無法設置符號時獲勝",
			1:"無公區時，我方禁區較對方多時獲勝",
			2:"公區無法形成禁區時，我方禁區較對方多時獲勝",
			3:"我方禁區超過公區一半時獲勝",
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
			"無法設置的區域將變成禁區",
			"雙方可隨意設置符號"
		],
		Cnt:"符號須設置於我方符號周圍",
		Div:"符號須設置於我方符號米字，設置路徑間不得有對方符號",
		Adp:"符號須設置於我方符號口字，設置路徑間不得有對方符號"
	}
}
Rls.Connect="<ol>"+
	"<li class='Lmt-Bsc-0'>"+Rls.Lmt.Bsc[0]+"</li>"+
	"<li class='Lmt-Bsc-1'>"+Rls.Lmt.Bsc[1]+"</li>"+
	"<li class='Lmt-Cnt'>"+Rls.Lmt.Cnt+"</li>"+
	"<li class='Jdg-Bsc-1'>"+Rls.Jdg.Bsc[1]+"</li>"+
	"<li class='Jdg-Bsc-D'>"+Rls.Jdg.Bsc.D+"</li>"+
"</ol>"
Rls.Attack="<ol>"+
	"<li class='Atk-Bsc-0'>第一回合雙方符號將分別位於左上角與右下角</li>"+
	"<li class='Atk-Bsc-1'>深色區域為我方封限區</li>"+
	"<li class='Atk-Bsc-2'>淺色區域為我方封區</li>"+
	"<li class='Jdg-Ara-B'>"+Rls.Jdg.Ara.B+"</li>"+
	"<li class='Jdg-Ara-L'>"+Rls.Jdg.Ara.L.replace("或限區","")+"</li>"+
"</ol>"
Rls.Defend="<ol>"+
	"<li class='Def-Bsc-0'>不同色塊為一區域</li>"+
	"<li class='Def-Bsc-1'>區域內有五枚我方符號，且無對方符號時獲勝</li>"+
"</ol>"
Rls.Scheme="<ol>"+
	"<li class='Sch-Bsc-0'>第一回合雙方符號不得設置於C3:G7之座標</li>"+
	"<li class='Sch-Bsc-1'>第一回合符號設置完成時，周圍將產生封限區</li>"+
	"<li class='Jdg-Ara-B'>"+Rls.Jdg.Ara.B.replace("或封區","")+"</li>"+
	"<li class='Jdg-Ara-L'>"+Rls.Jdg.Ara.L.replace("或限區","")+"</li>"+
"</ol>"
Rls.Anomal="<ol>"+
	"<li class='Anm-Bsc-0'>空白區域被符號包圍時，空白區域將產生禁區</li>"+
"</ol>"
Rls.Blocker="<ol>"+
	"<li class='Lmt-Bsc-2'>"+Rls.Lmt.Bsc[2]+"</li>"+
	"<li class='Blk-Bsc-0'>我方四枚符號形成矩形時，該矩形區域將產生禁區</li>"+
	"<li class='Jdg-Bsc-1'>"+Rls.Jdg.Bsc[1]+"</li>"+
"</ol>"
Rls.Forbid="<ol>"+
	"<li class='Fbd-Bsc-0'>我方不得設置符號於我方禁區</li>"+
"</ol>"
Rls.Divider="<ol>"+
	"<li class='Lmt-Bsc-0'>"+Rls.Lmt.Bsc[0]+"</li>"+
	"<li class='Lmt-Bsc-1'>"+Rls.Lmt.Bsc[1]+"</li>"+
	"<li class='Lmt-Div'>"+Rls.Lmt.Div+"</li>"+
	"<li class='Jdg-Bsc-1'>"+Rls.Jdg.Bsc[1]+"</li>"+
	"<li class='Jdg-Bsc-D'>"+Rls.Jdg.Bsc.D+"</li>"+
"</ol>"
Rls.Zombie="<ol>"+
	"<li class='Zmb-Bsc-0'>第十回合後，若雙方符號接觸將變成殭屍符號</li>"+
	"<li class='Lmt-Bsc-N'>"+Rls.Lmt.Bsc.N+"</li>"+
"</ol>"
Rls.Follow="<ol>"+
	"<li class='Flw-Bsc-0'>設置符號只能依上一回合符號</li>"+
"</ol>"
Rls.ByLine="<ol>"+
	"<li class='ByL-Bsc-0'>我方兩枚符號形成直線時，該直線區域將產生禁區</li>"+
"</ol>"
Rls.Adapter="<ol>"+
	"<li class='Lmt-Bsc-0'>"+Rls.Lmt.Bsc[0]+"</li>"+
	"<li class='Lmt-Bsc-1'>"+Rls.Lmt.Bsc[1]+"</li>"+
	"<li class='Jdg-Bsc-D'>"+Rls.Jdg.Bsc.D+"</li>"+
	"<li class='Lmt-Adp'>"+Rls.Lmt.Adp+"</li>"+
	"<li class='Jdg-Bsc-1'>"+Rls.Jdg.Bsc[1]+"</li>"+
"</ol>"
Rls.Invert="<ol>"+
	"<li class='Ivt-Bsc-0'>符號不得設置於原須設置區域</li>"+
"</ol>"
Rls.Gomoku="<ol>"+
	"<li class='Lmt-Bsc-2'>"+Rls.Lmt.Bsc[2]+"</li>"+
	"<li class='Gmk-Bsc-0'>當五個我方符號呈一直線時獲勝</li>"+
"</ol>"
Rls.GoLike="<ol>"+
	"<li class='Lmt-Bsc-2'>"+Rls.Lmt.Bsc[2]+"</li>"+
	"<li class='GoL-Bsc-0'>對方符號被我方符號包圍時，對方符號將變成殭屍符號</li>"+
	"<li class='Lmt-Bsc-N'>"+Rls.Lmt.Bsc.N+"</li>"+
	"<li class='GoL-Bsc-1'>棋盤已滿，我方符號較對方多時獲勝</li>"+
"</ol>"
var RlR={
	Attack:function(){$(".Lmt-Bsc-0").css("text-decoration","line-through")}
};RlR.Scheme=RlR.Attack
if(typeof Shl=="object"){Shl.Rls=Rls;Shl.RlR=RlR}