Shl.Ara.Anomal=[];Dft.Anomal={Ara:1,QJd:1}
Shl.Rul.Anomal=function(){
	return Ara.Rul("Anomal",Anm())
}
Shl.Lmt.Anomal=function(crd,sym){}
Shl.Mrk.Anomal=function(){Ara.Mrk("Anomal")}
Shl.Brd.Anomal=function(){}
Shl.Adn.Anomal=function(){}
Shl.Ckr.Anomal=function(crd){
	return Shl.Ara.Anomal[Sqr.Sym[(Tn+1)%2]].All.indexOf(crd)<0
}
Shl.Opt.Anomal=function(){
	Id("OptionMenu").innerHTML+="Anomal設定:<br>";Ara.Opt("Anomal")
}
Shl.OpK.Anomal=function(){
	Ara.OpK("Anomal");if(Shl.Ara.Anomal.QJd==2)Shl.Ara.Anomal.QJd=3;Dft.System.Qsr=0
}
function Anm(){
	var ara={O:[[]],X:[[]],P:[]},cds=Sel("All"),vst=[];ara.O.All=[],ara.X.All=[]
	for(var i=0;i<cds.length;i++){
		if(vst.indexOf(cds[i])>-1||Qre(cds[i],"Sym")!=2)continue
		var map=Map(cds[i]),ckr=0
		for(var j=0;j<2;j++)if(Map.Bdr(map,j,Idt)){
			ara[Sqr.Sym[j]].All=ara[Sqr.Sym[j]].All.concat(map)
		}vst=vst.concat(map)
	}ara.O[0]=ara.O.All;ara.X[0]=ara.X.All
	if(Tn<2){ara.O[0]=[];ara.X[0]=[];ara.O.All=[];ara.X.All=[]}
	ara.P[0]=Flt(Sel("All"),function(crd){
		return ara.O.All.indexOf(crd)<0&&ara.X.All.indexOf(crd)<0&&Qre(crd,"Sym")==2
	});ara.P.All=ara.P[0];return ara
}