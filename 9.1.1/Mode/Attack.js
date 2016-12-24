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
Shl.Lmt.Attack=function(){return 0}
Shl.Mrk.Attack=function(){
	if(Dft.Attack.Ara)for(var i=0;i<4;i++)for(var j=0;j<Shl.Ara.Attack[i].length;j++)Qre(Shl.Ara.Attack[i][j],"BgC",i+5)
}
Shl.Brd.Attack=function(){}
Shl.Adn.Attack=function(){Qre("A1","Sym",0);Qre("I9","Sym",1);Tn+=2}
Shl.Ckr.Attack=function(crd){return 1}
Shl.Opt.Attack=function(){
	Id("OptionMenu").innerHTML+="Attack設定:<br>"
	OpS("Attack-Ara","k","雙方區域",Dft.Attack.Ara)
}
Shl.OpK.Attack=function(){
	if(Dft.Connect)Dft.Connect.Rul=0
	Dft.Attack.Ara=Id("Attack-Ara").checked
}