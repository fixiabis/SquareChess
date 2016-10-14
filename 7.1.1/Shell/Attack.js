var d=[["A2","B1","B2"],["H8","H9","I8"],["A3","B3","C1","C2","C3"],["G7","G8","G9","H7","I7"]]
function ExR(){Scr={O:0,X:0}
	for(i in d)if(Ctn(d[i],Sbl[i%2])==d[i].length)Cln(Sbl[(Val(i)+1)%2]+"獲勝")
	for(i=0;i<2;i++)if(Ctn(d[i],Sbl[(i+1)%2])>0)Scr[Sbl[(i+1)%2]]=1
	if(Scr.O&&Tn%2==0&&!Scr.X)Cln("O獲勝")
	else if(Scr.X&&!Scr.O)Cln("X獲勝")
	else if(Scr.O&&Scr.X)Cln("獲勝")
}
function ExB(){var b=["crimson","royalblue","palevioletred","lightsteelblue"],c=["A1","I9"]
	for(i in b)for(j in d[i])Qre(d[i][j],"B",b[i])
	for(i in c)Set(c[i]);Dft.Clr=0
}
function ExA(){}