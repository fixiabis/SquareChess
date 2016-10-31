Rul.Jdg=function(){return Rul.Cnt()}
Rul.Lmt.Ext=function(crd,sym){if(Dft.Rul.Lmt)return 1
	var vt8=Crd.Vct("8");Hst[Tn].Rut=[];if(Tn<2)return 0
	for(i=0;i<8;i++){
		var lin=Crd(crd,vt8[i]+".2"+vt8[i]+".3"+vt8[i]+".4"+vt8[i]+".5"+vt8[i]+".6"+vt8[i]+".7"+vt8[i]+".8"+vt8[i]+".9"+vt8[i])
		Hst[Tn].Rut=Hst[Tn].Rut.concat(Crd.Flt(lin,
			function(crd){if(!Brd[crd]||Brd[crd].S==(sym+1)%2)return 2;return 1}
		))
	}Hst[Tn].Rut=Crd.Flt(Hst[Tn].Rut,function(crd){if(Brd[crd].S==sym)return 1;return 0})
	return !Hst[Tn].Rut.length>0
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