Shl.Ara.Attack=[
	["A3","B3","C1","C2","C3"],
	["G7","G8","G9","H7","I7"],
	["A2","B1","B2"],
	["H8","H9","I8"]
]
for(var i=0;i<4;i++)Dft.Blk=Dft.Blk.concat(Shl.Ara.Attack[i])
Dft.Attack={Ara:1}
Shl.Rul.Attack=function(){
	for(var i=0;i<2;i++)if(Ara(Shl.Ara.Attack[i],Sqr.Sym[i]+"F")||Ara(Shl.Ara.Attack[i+2],Sqr.Sym[i]+"F")||Ara(Shl.Ara.Attack[i+2],Sqr.Sym[(i+1)%2]+">0"))return Sqr.Sym[(i+1)%2]+"獲勝"
}
Shl.Mrk.Attack=function(){
	if(Dft.Attack.Ara)for(var i=0;i<4;i++)for(var j=0;j<Shl.Ara.Attack[i].length;j++)Qre(Shl.Ara.Attack[i][j],"BgC",i+5)
}
Shl.Adn.Attack=function(){Qre("A1","Sym",0);Qre("I9","Sym",1);Hst.Crd[1]="A1",Hst.Crd[2]="I9";Tn+=2}
Shl.Opt.Attack=function(){
	OpS("","1","Attack設定");OpS("","2","輔助標記")
	OpS("Attack-Ara","k","雙方區域",Dft.Attack.Ara)
}
Shl.OpK.Attack=function(v){
	if(Dft.Connect)Dft.Connect.Rul=0;if(v)return
	Dft.Attack.Ara=Id("Attack-Ara").checked
};Shl.OpK.Attack(1)