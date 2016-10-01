Dft.Lmt=0
function ExL(c){
	if(!Dft.Lmt){Dft.Lmt=1;return XLt(c)}
}
function XLt(c){
	if(!Hst.Crd[Tn-2]){Dft.Lmt=0;return 0}Lmt(c);Dft.Lmt=0
	if(Dft.Fcd!=Hst.Crd[Tn-1])return 1;else return 0
}