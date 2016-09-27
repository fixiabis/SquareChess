var language={
	en:{
		Start:"Get start with Square Chess Games",
		operation:"<li><font class='opt'>Set the symbol</font> by click <font class='mus'>any square on chessboard</font> or press <font class='key'>A-I</font>.</li><li><font class='opt'>Clean the chessboard</font> by click <font class='mus'>Clean</font> or press <font class='key'>Del</font>.</li><li><font class='opt'>Undo</font> by click <font class='mus'>Undo</font> or press <font class='key'>Ctrl+Z</font>.</li><li><font class='opt'>Redo</font> by press <font class='key'>Ctrl+Y</font>.</li><li><font class='opt'>Goto turn</font> by show on contextmenu from <font class='mus'>Undo</font> or press <font class='key'>Ctrl+H</font>.</li><li><font class='opt'>Use Addons</font> by show on contextmenu from <font class='mus'>Clean</font> or press <font class='key'>Alt</font>.</li><li><font class='opt'>To the turn of last</font> by show on contextmenu from <font class='mus'>the chessboard</font>.</li><li><font class='opt'>Show quick menu</font> by move mouse to <font class='mus'>the blank portion of left</font>.</li>",
		operationT:"Try out these basic operation:",
		Rule:"Games Rule",
		SCRule:"<li>Set the symbol need connect(nearby your before the symbol set)</li><li>If you can't set the symbol, then you lose.</li>",
		SCARule:"<li>Inherit Square.Connect's Rule</li><li>If O's symbol all of the symbol or X's one of the symbol on <font color='crimson'>this color</font> of square, then O lose.</li><li>If X's symbol all of the symbol or O's one of the symbol on <font color='royalblue'>this color</font> of square, then X lose.</li><li>If O's symbol all of the symbol on <font color='palevioletred'>this color</font> of square, then O lose.</li><li>If X's symbol all of the symbol on <font color='lightsteelblue'>this color</font> of square, then X lose.</li>",
		SCDRule:"<li>Inherit Square.Connect's Rule</li><li>When one of the area(have continuity) is more than half of your symbol and there is no other symbol of the area,then you win.</li>",
		SCSRule:"<li>Inherit Square.Connect's Rule</li><li>If O's symbol all of the symbol or X's one of the symbol on <font color='crimson'>this color</font> of square, then O lose.</li><li>If X's symbol all of the symbol or O's one of the symbol on <font color='royalblue'>this color</font> of square, then X lose.</li>",
		SBRule:"<li>By symbol set at four points form a rectangle</li><li>You can't set the symbol in opposite side's rectangle.</li><li>If the space of chessboard is more than half of your rectangle,then you win.</li>",
		SDRule:"<li>Set the symbol need connect(no limit distance nearby your before the symbol set)</li><li>If you can't set the symbol, then you lose.</li>",
		SDZRule:"<li>Inherit Square.Divider's Rule</li><li>Over turn 10,nearby symbol is not your symbol,then symbol will turn to Zombie.</li>",
		CGRule:"<a href='https://en.wikipedia.org/wiki/Gomoku' target='new'>Gomoku Rule</a>",
		FRule:"No limit to set symbol."
	},
	zh:{
		Start:"開始遊玩Square棋盤系列",
		operation:"<li><font class='opt'>設置符號</font>點選<font class='mus'>棋盤上的任何方塊</font>或按<font class='key'>A-I鍵</font></li><li><font class='opt'>清除棋盤</font>點選<font class='mus'>Clean</font>或按<font class='key'>Del鍵</font></li><li><font class='opt'>到上一步</font>點選<font class='mus'>Undo</font>或按<font class='key'>Ctrl+Z鍵</font></li><li><font class='opt'>到下一步</font>按<font class='key'>Ctrl+Y鍵</font></li><li><font class='opt'>使用更多功能</font>就從<font class='mus'>Clean</font>喚出清單或按<font class='key'>Alt鍵</font></li><li><font class='opt'>到最後一步</font>就從<font class='mus'>棋盤</font>喚出清單</li><li><font class='opt'>顯示快速選單</font>移動滑鼠到<font class='mus'>左側空白處</font></li>",
		operationT:"試試這些基本操作：",
		Rule:"遊戲規則",
		SCRule:"<li>放置符號需要產生連線(即設置在你之前所設置的符號附近)</li><li>如果你無法設置符號，那你就輸了</li>",
		SCARule:"<li>延用Square.Connect的規則</li><li>若O方全部符號或X方一只符號在<font color='crimson'>這個顏色</font>的方塊，判O方輸</li><li>若X方全部符號或O方一只符號在<font color='royalblue'>這個顏色</font>的方塊，判X方輸</li><li>若O方全部符號在<font color='palevioletred'>這個顏色</font>的方塊，判O方輸</li><li>若X方全部符號在<font color='lightsteelblue'>這個顏色</font>的方塊，判X方輸</li>",
		SCDRule:"<li>延用Square.Connect的規則</li><li>當其中一個區域(具有連續性)過半數都是你的符號且沒有對方符號時時，那你就贏了</li>",
		SCSRule:"<li>延用Square.Connect的規則</li><li>若O方全部符號或X方一只符號在<font color='crimson'>這個顏色</font>的方塊，判O方輸</li><li>若X方全部符號或O方一只符號在<font color='royalblue'>這個顏色</font>的方塊，判X方輸</li>",
		SBRule:"<li>符號設置於四點形成矩形</li><li>你不能設置符號於對方的矩形中</li><li>當你形成的矩形超過場上空白處時，那你就贏了</li>",
		SDRule:"<li>設置符號需產生連線(即設置在你之前所設置的符號八方無限距離，只要不被對方符號擋下皆可)</li><li>如果你無法設置符號，那你就輸了</li>",
		CGRule:"<a href='https://zh.wikipedia.org/wiki/gomoku' target='new'>五子棋遊戲規則</a>",
		SDZRule:"<li>延用Square.Divider的規則</li><li>超過十回合後，附近的符號若非我方符號，將會變成殭屍</li>",
		FRule:"可隨意設置符號"
	}
}