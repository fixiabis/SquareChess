Rul.Jdg=function(){var cds=Brd.Sel("All"),vst=[],Ara={O:[],X:[],P:[]}
	for(var i=0;i<2;i++)Ara[Sqr.S[i]][0]=Crd.Flt(cds,function(crd){if(i==0)Brd[crd].M=2
		if(!Rul.Lmt.Ext(crd,i)&&Brd[crd].S==2){
			if(i==1&&Brd[crd].M==0)Brd[crd].M=3;else Brd[crd].M=i;return 1
		}return 0
	})
	var rot=1
	while(Ara.O[rot-1].length>0||Ara.X[rot-1].length>0){
		for(var i=0;i<2;i++)Ara[Sqr.S[i]][rot]=Crd.Flt(cds,function(crd){
			if(Brd[crd].S==2&&Brd[crd].M==2){var cds=Crd(crd,"8")
				for(j=0;j<cds.length;j++)if(Ara[Sqr.S[i]][rot-1].indexOf(cds[j])>-1){
					if(i==1&&Brd[crd].M==0)Brd[crd].M=3;else Brd[crd].M=i;return 1
				}
			}return 0
		});rot++;if(rot==5)break
	}
	console.log(Ara)
	Ara.P[0]=Crd.Flt(Ara.O[0],function(crd){if(Ara.X[0].indexOf(crd)>-1)return 1;return 0})
	for(var i=0;i<2;i++)Ara[Sqr.S[i]][0]=Crd.Flt(Ara[Sqr.S[i]][0],function(crd){
		if(Ara.P[0].indexOf(crd)>-1)return 0;return 1
	});
}
Rul.Lmt.Ext=function(crd,sym){if(Dft.Rul.Lmt)return 1
	var cd8=Crd(crd,"8");Hst.Rut=[];if(Tn<2)return 0
	Hst.Rut=Crd.Flt(Brd.Sel(crd+":8"),function(crd){if(Brd[crd])if(Brd[crd].S==sym)return 1;return 0})
	return !Hst.Rut.length>0
}