Dft.Lmt=0
function ExL(c){
	if(!Dft.Lmt){Dft.Lmt=1;return XLt(c)}
}
function XLt(c){var r=0
	if(!Hst.Crd[Tn-2]){Dft.Lmt=0;return 0}Lmt(c);Dft.Lmt=0
	if(Instr(Dft.Fcd,Hst.Crd[Tn-1])<0)return 1
	else return Spc(c)
}
function Spc(c){var p=0
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)if(!Lmt(Chr(cd1)+cd2,Sbl[Tn%2]))p++;if(!p){Cln(Sbl[(Sym(Sbl[Tn%2])+1)%2])}else return 0
}