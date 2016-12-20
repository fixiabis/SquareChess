Shl.Ara.Castle=[
	["E1","A1","I1"],
	["E9","A9","I9"]
];Dft.Castle={Ara:1}
for(var i=0;i<2;i++)Dft.Blk=Dft.Blk.concat(Shl.Ara.Castle[i])
Shl.Rul.Castle=function(){
	for(var i=0;i<2;i++)if(Ara(Shl.Ara.Castle[i],Sqr.Sym[i]+"F")||Ara(Shl.Ara.Castle[i],Sqr.Sym[(i+1)%2]+">0"))return Sqr.Sym[(i+1)%2]+"獲勝"
}
Shl.Lmt.Castle=function(){return 0}
Shl.Mrk.Castle=function(){
	if(Dft.Castle.Ara){
		for(var i=0;i<2;i++){
			for(var j=0;j<Shl.Ara.Castle[i].length;j++){
				Qre(Shl.Ara.Castle[i][j],"BgC",i+7)
			}
		}
	}
}
Shl.Brd.Castle=function(){}
Shl.Adn.Castle=function(){Qre(["D2","G1"],"Sym",0);Qre(["C9","F8"],"Sym",1);Tn+=4}
Shl.Ckr.Castle=function(crd){return 1}
Shl.Opt.Castle=function(){
	Id("OptionMenu").innerHTML+="Castle設定:<br>"
	OpS("Castle-Ara","k","雙方區域",Dft.Castle.Ara)
}
Shl.OpK.Castle=function(){
	if(Dft.Connect)Dft.Connect.Rnd=0
	Dft.Castle.Ara=Id("Castle-Ara").checked
}