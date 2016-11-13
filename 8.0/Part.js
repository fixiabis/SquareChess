function Crd(crd,vct){var x=0,y=0;vct=Vct(vct)
	if(typeof vct=="object"){
		for(var i=0;i<vct.length;i++)vct[i]=Crd(crd,vct[i]);return vct
	}
	for(var i in vct)switch(vct[i]){
		case"F":y--;break
		case"B":y++;break
		case"R":x++;break
		case"L":x--;break
		case"C":x=0;y=0;break
	}return Chr(Asc(crd[0])+x)+Val(Val(crd[1])+y)
}//座標元素
function Vct(typ){
	if(typeof typ=="object"){var res=[]
		for(var i=0;i<typ.length;i++)res=res.concat(Vct(typ[i]));return res
	}
	if(Instr(typ,"&")>-1)return Vct(typ.split("&"))
	if(Val(typ[0])&&typ[1]){tp=typ.replace(typ[0],"");var vct="",tp=Vct(tp)
		if(typeof tp=="object"){
			for(var i=0;i<tp.length;i++)tp[i]=Vct(typ[0]+tp[i]);return tp
		}for(i=0;i<Val(typ[0]);i++)vct+=tp;return vct
	}
	if(Instr(typ,":")>-1){
		var crd=typ.split(":"),
		x=Val(Asc(crd[1][0]))-Val(Asc(crd[0][0]))
		y=Val(Val(crd[1][1]))-Val(Val(crd[0][1]))
		if(x<0)x=Vct(Math.abs(x)+"L");else if(x!=0)x=Vct(x+"R");else x="" 
		if(y<0)y=Vct(Math.abs(y)+"F");else if(y!=0)y=Vct(y+"B");else y=""
		return x+y
	}
	switch(typ[0]){
		case"8":return"F,B,R,L,FR,FL,BR,BL".split(",")
		case"X":return"FR,FL,BR,BL".split(",")
		case"4":return"F,B,R,L".split(",")
		case"Q":return"FFR,FFL,RRF,LLF,BBR,BBL,RRB,LLB".split(",")
		case"V":
			return Flt(Vct("X"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
		case"W":
			return Flt(Vct("Q"),function(ckr){if(Instr(ckr,typ[1])>-1)return 1;else return 0})
		case"Y":
			return Flt(Vct("Q"),function(ckr){if(Instr(ckr,typ[1]+typ[1])>-1)return 1;else return 0})
		case"H":return"R,L".split(",")
		case"I":return"F,B".split(",")
	}return typ
}//方向元素
function Sel(typ,ord){
	if(typeof typ=="string"&&Hst.Sel[typ])return Hst.Sel[typ];Hst.Sel[typ]=[]
	if(typeof typ=="object"){
		for(var i=0;i<typ.length;i++)Hst.Sel[typ]=Hst.Sel[typ].concat(Sel(typ[i]))
	}
	if(ord)return Flt(Sel(typ),ord)
	if(typ=="All"){
		for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Hst.Sel.All.push(Chr(cd1)+cd2)
	}
	if(Instr(typ,":")>-1){var spt=typ.split(":")
		if(spt[0].length==1&&spt[1].length==1){
			var sml=Asc(spt[0]),big=Asc(spt[1]);if(Asc(spt[0])>big){sml=Asc(spt[1]);big=Asc(spt[0])}
			for(var i=sml;i<big+1;i++)Hst.Sel[typ].push(Chr(i));Hst.Sel[typ]=Sel(Hst.Sel[typ])
		}else if(spt[0].length==2&&spt[1].length==1||spt[0].length==1&&spt[1].length==2){
			var m=0;if(spt[1].length==2)m=1
			var cd1=spt[m][0],cd2=spt[m][1]
			if(Val(spt[(m+1)%2]))Hst.Sel[typ]=Sel(spt[m]+":"+cd1+spt[(m+1)%2])
			else Hst.Sel[typ]=Sel(spt[m]+":"+spt[(m+1)%2]+cd2)
		}else{
			var cd1f=Asc(spt[0][0]),cd1l=Asc(spt[1][0]),cd2f=Val(spt[0][1]),cd2l=Val(spt[1][1])
			if(Asc(spt[0][0])>cd1l){cd1f=Asc(spt[1][0]);cd1l=Asc(spt[0][0])}
			if(Val(spt[0][1])>cd2l){cd2f=Val(spt[1][1]);cd2l=Val(spt[0][1])}
			Hst.Sel[typ]=Flt(Sel("All"),
				function(ckr){
					var cd1k=Asc(ckr[0]),cd2k=Val(ckr[1])
					if(cd1k>=cd1f&&cd1k<=cd1l&&cd2k>=cd2f&&cd2k<=cd2l)return 1;else return 0
				}
			)
		}
	}
	if(Instr(typ,",")>-1){Hst.Sel[typ]=Hst.Sel[typ].concat(Sel(typ.split(",")))}
	else if(Instr(typ,"/")>-1){var spt=typ.split("/");Hst.Sel[typ]=Hst.Sel[typ].concat(Crd(spt[0],spt[1]))}
	if(typ.length==1)Hst.Sel[typ]=Flt(Sel("All"),function(ckr){if(Instr(ckr,typ)>-1)return 1;else return 0});
	if(typ.length==2&&typeof typ=="string")Hst.Sel[typ]=typ
	return Hst.Sel[typ]
}//選擇元素
function Flt(grp,ord){var res=[]
	for(var i=0;i<grp.length;i++){var odr=ord(grp[i])
		if(odr==2)return res;else if(odr)res.push(grp[i])
	}return res
}//元素篩選
function Ser(crd){
	for(var i=0;i<Tn;i++)if(Hst.Crd[i]==crd)return i;return -1
}
function Cnt(){var Ara={O:{All:[]},X:{All:[]},P:{All:[]}},ser=0
	while(1){Ara.O[ser]=[];Ara.X[ser]=[];Ara.P[ser]=[]
		for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++){
			var crd=Chr(cd1)+cd2;if(Qre(crd,"Sym")!=2)continue
			if(ser==0){var Os=!Lmt(crd,0),Xs=!Lmt(crd,1)
				if(Os)Ara.O[ser].push(crd);if(Xs)Ara.X[ser].push(crd)
			}else{var cds=Crd(crd,"8"),cks=0
				for(var i=0;i<cds.length;i++){
					if(Ara.O.All.indexOf(cds[i])>-1&&Ara.O[ser].indexOf(crd)<0){
						if(Ara.O.All.indexOf(crd)<0)Ara.O[ser].push(crd);cks++
					}
					if(Ara.X.All.indexOf(cds[i])>-1&&Ara.X[ser].indexOf(crd)<0){
						if(Ara.X.All.indexOf(crd)<0)Ara.X[ser].push(crd);cks++
					}
				}
			}
		}
		Ara.P[ser]=Flt(Ara.O[ser],function(crd){
			return Ara.X[ser].indexOf(crd)>-1
		})
		Ara.O.All=Ara.O.All.concat(Flt(Ara.O[ser],function(crd){
			return Ara.O.All.indexOf(crd)<0
		}))
		Ara.X.All=Ara.X.All.concat(Flt(Ara.X[ser],function(crd){
			return Ara.X.All.indexOf(crd)<0
		}))
		if(Ara.O[ser].length==0&&Ara.X[ser].length==0)break;ser++
	}
	Ara.P.All=Flt(Ara.O.All,function(crd){
		if(Ara.X.All.indexOf(crd)<0)return 0;return 1
	})
	Ara.O.All=Flt(Ara.O.All,function(crd){
		if(Ara.P.All.indexOf(crd)<0)return 1;return 0
	})
	Ara.X.All=Flt(Ara.X.All,function(crd){
		if(Ara.P.All.indexOf(crd)<0)return 1;return 0
	})
	return Ara
}
function Scr(opt,xpt){
	if(opt>xpt)return "O獲勝";if(xpt>opt)return "X獲勝";return "平手"
}
function Ara(grp,typ){
	var Ara={
		O:Flt(grp,function(crd){if(Qre(crd,"sym")==0)return 1;return 0}),
		X:Flt(grp,function(crd){if(Qre(crd,"sym")==1)return 1;return 0})
	}
	switch(typ){
		case"D":if(Ara.X.length>0||Ara.O.length==grp.length)return 1;return 0;break//O封限
		case"K":if(Ara.O.length>0||Ara.X.length==grp.length)return 1;return 0;break//X封限
		case"Q":if(Ara.O.length==grp.length)return 1;return 0;break//O封
		case"H":if(Ara.X.length==grp.length)return 1;return 0;break//X封
		case"U":if(Ara.X.length>0)return 1;return 0;break//O限
		case"Y":if(Ara.O.length>0)return 1;return 0;break//X限
	}
}