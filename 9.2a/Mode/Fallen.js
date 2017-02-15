Shl.Ara.Fallen=[];Dft.Fallen={Fln:5,Crd:"",MbS:0}
Shl.Mrk.Fallen=function(){
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==4)return 1;return 0}),["BgC","FtC"],[12,2])
}
Shl.Ckr.Fallen=function(crd,set){var mcd=crd
	if(set&&Flt(Sel("All"),
		function(crd){if(Qre(crd,"Sym")==Tn%2)return 1}).length>Dft.Fallen.Fln
	){
		if(Tn%2==Qre(crd,"Sym")&&Dft.Fallen.MbS)Mbx("去除對方符號",
			function(crd){Fln(mcd,crd)},function(){},Flt(Sel("All"),function(crd){
			if(Qre(crd,"Sym")==(Tn+1)%2){
				if(MdQ.indexOf("Connect")>-1)for(var i=0;i<2;i++)if((crd+mcd).search(Hst.Crd[i])>-1)return 0
				if(Hst.Crd[Tn]==crd&&MdQ.indexOf("Follow")>-1)return 0;return 1
			}return 0
		}))
		else if(Tn%2==Qre(crd,"Sym"))Dft.Fallen.Crd=mcd
		else if(Dft.Fallen.Crd)Fln(Dft.Fallen.Crd,mcd)
	}return 1
}
Shl.Opt.Fallen=function(){
	OpS("","1","Fallen設定")
	if(!Dft.System.Oln)OpS("Fallen-Fln","t","保留符號:",Dft.Fallen.Fln)
	OpS("Fallen-MbS","k","快速選取",!Dft.Fallen.MbS)
}
Shl.OpK.Fallen=function(){
	if(!Dft.System.Oln&&Val(Id("Fallen-Fln").value)!=NaN&&Id("Fallen-Fln").value!="")Dft.Fallen.Fln=Val(Id("Fallen-Fln").value)
	Dft.Fallen.MbS=!Id("Fallen-MbS").checked
	if(Dft.Fallen.Fln<5)Dft.Fallen.Fln=5
	if(Dft.Fallen.Fln>10)Dft.Fallen.Fln=10
}
function Fln(mcd,crd){
	var sym=Qre([mcd,crd],"Sym");for(var i=0;i<2;i++)if(sym.indexOf(i)<0)return 0
	if(Hst.Crd[Tn]==crd&&MdQ.indexOf("Follow")>-1)return 0
	Qre([crd,mcd],["Sym","BgC","FtC"],[4,12,2]);Tn++;Dft.Fallen.Crd=""
	Hst.Crd[Tn]=Hst.Crd[Tn-2];Rul();Hst.Brd[Tn]=Rec();Sel.Now("N");Log()
	if(Dft.System.Oln)Upl(Hst.Brd[Tn]+"/"+Tn+"/"+Hst.Crd[Tn])
}