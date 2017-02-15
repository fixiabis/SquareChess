Shl.Ara.Castle=[
	["E1","A1","I1"],
	["E9","A9","I9"]
];Dft.Castle={Ara:1}
for(var i=0;i<2;i++)Dft.Blk=Dft.Blk.concat(Shl.Ara.Castle[i])
Shl.Rul.Castle=function(){
	for(var i=0;i<2;i++)if(Ara(Shl.Ara.Castle[i],Sqr.Sym[i]+"F")||Ara(Shl.Ara.Castle[i],Sqr.Sym[(i+1)%2]+">0"))return Sqr.Sym[(i+1)%2]+"獲勝"
}
Shl.Mrk.Castle=function(){
	if(Dft.Castle.Ara){
		for(var i=0;i<2;i++){
			for(var j=0;j<Shl.Ara.Castle[i].length;j++){
				Qre(Shl.Ara.Castle[i][j],"BgC",i+7)
			}
		}
	}
}
Shl.Adn.Castle=function(){Qre(["D2","G1"],"Sym",0);Qre(["C9","F8"],"Sym",1);Hst.Crd[1]="D2";Hst.Crd[2]="C9";Hst.Crd[3]="G1";Hst.Crd[4]="F8";Tn+=4}
Shl.Opt.Castle=function(){
	OpS("","1","Castle設定");OpS("","2","輔助標記")
	OpS("Castle-Ara","k","雙方區域",Dft.Castle.Ara)
}
Shl.OpK.Castle=function(v){
	if(Dft.Connect)Dft.Connect.Rul=0;if(v)return
	Dft.Castle.Ara=Id("Castle-Ara").checked
};Shl.OpK.Castle(1)