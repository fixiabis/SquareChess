function Set(c){if(!Flw(c)){Hst.Crd[Tn+1]=c;Qre(c,"T",Sbl[Tn%2]);Tn++}Rul();Wtr()}
function Flw(c){var k=Lmt(c)
	if(!Hst.Crd[Tn-1]&&!k)return 0
	if(Instr(Dft.Fcd,Hst.Crd[Tn-1])<0)return 1;return 0
}
function ExR(){var s=0;if(Tn<2)return
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		var f=Lmt(Chr(cd1)+cd2,Sbl[Tn%2])
		if(Instr(Dft.Fcd,Hst.Crd[Tn-1])>-1)s++
	}if(s==0)Cln(Sbl[(Tn+1)%2]+" Win")
}