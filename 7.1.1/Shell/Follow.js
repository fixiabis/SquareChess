function Set(c){if(!Dft.Set)return;if(!Flw(c)){Hst.Crd[Tn+1]=c;Qre(c,"T",Sbl[Tn%2]);Tn++;Wtr();Rul()}}
function Flw(c){var k=Lmt(c)
	if(!Hst.Crd[Tn-1]&&!k)return 0
	if(Instr(Dft.Fcd,Hst.Crd[Tn-1])<0)return 1;return 0
}
function ExR(){var s=0;if(Tn<4)return
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"T")!="")continue
		var f=Lmt(Chr(cd1)+cd2,Sbl[(Tn+1)%2])
		if(Instr(Dft.Fcd,Hst.Crd[Tn])>-1)s++
	}if(s==0)Cln(Sbl[Tn%2]+"獲勝")
}
function NxS(){var c="dimgray";if(Dft.NNS)c="slateblue"
	Id("A1").parentNode.parentNode.parentNode.style.backgroundColor=c
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		if(Dft.NxS||Dft.NNS)Id(Chr(cd1)+cd2).style.opacity=0.2;var s=Flw(Chr(cd1)+cd2)
		if(Qre(Chr(cd1)+cd2,"T")!=""||!s&&Dft.NxS||s&&Dft.NNS||!Dft.NxS&&!Dft.NNS)Id(Chr(cd1)+cd2).style.opacity=1
	}
}
