Dft.Lmt=0
function ExL(c){
	if(!Dft.Lmt){Dft.Lmt=1;return XLt(c)}
}
function XLt(c){var r=0
	if(!Hst.Crd[Tn-2]){Dft.Lmt=0;return 0}Lmt(c);Dft.Lmt=0
	if(Instr(Dft.Fcd,Hst.Crd[Tn-1])<0)return 1;else return 0
}