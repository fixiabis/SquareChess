Rul.Jdg=function(){return Rul.Cnt()}
Rul.Lmt.Ext=function(crd,sym){if(Dft.Rul.Lmt)return 1
	var cd8=Crd(crd,"8");Hst.Rut=[];if(Tn<2)return 0
	Hst.Rut=Crd.Flt(Brd.Sel(crd+":8"),function(crd){if(Brd[crd])if(Brd[crd].S==sym)return 1;return 0})
	return !Hst.Rut.length>0
}
Usr.Tol.Ext=function(){
	Usr.Tol.Cnt()
}//擴充工具
Brd.Mrk.Ext=function(){
	Brd.Mrk.Cnt()
}//擴充標記
Brd.Cln.Ext=function(){
	Brd.Cln.Cnt()
}//擴充棋盤