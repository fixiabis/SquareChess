Rul.Jdg=function(){return Rul.Cnt()}
Rul.Lmt.Ext=function(crd,sym){if(Dft.Rul.Lmt)return 1
	var vtQ=Crd.Vct("Q"),vt28=Crd.Vct("28");Hst[Tn].Rut=[];if(Tn<2)return 0
	for(i=0;i<8;i++){
		if(Brd[Crd(crd,vtQ[i])]&&Brd[Crd(crd,vtQ[i])].S==sym){
			var vts=[Brd[Crd(crd,vtQ[i][0])],Brd[Crd(crd,vtQ[i][0]+vtQ[i][0])],Brd[Crd(crd,vtQ[i][0]+vtQ[i][2])],Brd[Crd(crd,vtQ[i][2])]]
			console.log(Crd(crd,vtQ[i][0])+Crd(crd,vtQ[i][0]+vtQ[i][0])+Crd(crd,vtQ[i][0]+vtQ[i][2])+Crd(crd,vtQ[i][2]))
			if(
				vts[0]&&vts[0].S==2&&vts[1]&&vts[1].S==2||
				vts[0]&&vts[0].S==2&&vts[2]&&vts[2].S==2||
				vts[3]&&vts[3].S==2&&vts[2]&&vts[2].S==2
			)Hst[Tn].Rut=Hst[Tn].Rut.concat(crd)
		}
		if(Brd[Crd(crd,vt28[i])]&&Brd[Crd(crd,vt28[i])].S==sym){
			var vts=Brd[Crd(crd,Mid(vt28[i],0,vt28[i].length/2))]
			if(vts&&vts.S==2)Hst[Tn].Rut=Hst[Tn].Rut.concat(crd)
		}
	}
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