Shl.Ara.Defend=[
	["A1","A2","A3","A4","A5","B1","B2","C1","D1"],
	["F9","G9","H8","H9","I5","I6","I7","I8","I9"],
	["E1","F1","G1","H1","H2","I1","I2","I3","I4"],
	["A6","A7","A8","A9","B8","B9","C9","D9","E9"],
	["C5","D5","E5","F5","G5","E3","E4","E6","E7"],
	["F2","F3","F4","G2","G3","G4","H3","H4","H5"],
	["B5","B6","B7","C6","C7","C8","D6","D7","D8"],
	["E8","F6","F7","F8","G6","G7","G8","H6","H7"],
	["B3","B4","C2","C3","C4","D2","D3","D4","E2"]
];Dft.Defend={Ara:1}
Shl.Rul.Defend=function(){
	for(var i=0;i<9;i++)for(var s=0;s<2;s++){
		if(!Ara(Shl.Ara.Defend[i],Sqr.Sym[(s+1)%2]+">0")&&Ara(Shl.Ara.Defend[i],Sqr.Sym[s]+">4"))return Sqr.Sym[s]+"獲勝"
	}
}
Shl.Lmt.Defend=function(){return 0}
Shl.Mrk.Defend=function(){var clr=[5,10,6,11,9]
	if(Dft.Defend.Ara)for(var i=0;i<Shl.Ara.Defend.length;i++){var s=i;if(s>4)s-=5
		Qre(Shl.Ara.Defend[i],"BgC",clr[s])
	}
}
Shl.Brd.Defend=function(){}
Shl.Adn.Defend=function(){}
Shl.Ckr.Defend=function(crd){return 1}
Shl.Opt.Defend=function(){
	Id("OptionMenu").innerHTML+="Defend設定:<br>"
	OpS("Defend-Ara","k","分割區塊",Dft.Defend.Ara)
}
Shl.OpK.Defend=function(){
	Dft.Defend.Ara=Id("Defend-Ara").checked
}