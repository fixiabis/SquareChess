var descv=0
function desc(e,f){
	if(e.which==191&&descript[f][descv]){alert(descript[f][descv]);descv++}
}
var descript={
	index:[
		"滑鼠靠近任一模式即可瞭解模式之規則",
		"點按管理帳戶可進行變更密碼與建置帳號",
		"點按回報問題即可回報問題或提供意見",
		"點選任一模式即可進入該模式"
	],
	chess:[
		"點按格子即可設置符號",
		"不同的規則將會有不同的玩法",
		"滑鼠靠近空白處即可喚出快速選單",
		"Clean可清除棋盤",
		"Undo可到上一步",
		"Redo可到下一步",
		"Goto可到指定步",
		"Addons會依照不同模式提供不同功能",
		"Tools為輔助工具",
		"Battle可用來線上對戰",
		"Home可回到首頁或上一頁"
	],
	btchs:[
		"使用方法與一般大致相同",
		"GiveUp可認輸"
	],
}