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
}
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
		if(x.length==y.length)return y.length+y[0]+x[0]
		if(x.length==0)return y.length+y[0]
		if(y.length==0)return x.length+x[0]
		else return y+x
	}
	if(Instr(typ,"~")>-1){
		var crd=typ.split("~"),vct=Vct(crd[0]+":"+crd[1]),s=Val(vct[0]),v=vct.replace(vct[0],""),res=["C"]
		for(var i=0;i<s;i++)res.push(Vct((i+1)+v));return res
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
}
function Sel(typ,ord){
	if(typeof typ=="string"&&Hst.Sel[typ])return Hst.Sel[typ];Hst.Sel[typ]=[]
	if(ord)return Flt(Sel(typ),ord)
	if(typ=="All")for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Hst.Sel.All.push(Chr(cd1)+cd2)
	if(typeof typ=="object")for(var i=0;i<typ.length;i++)Hst.Sel[typ]=Hst.Sel[typ].concat(Sel(typ[i]))
	else if(Instr(typ,",")>-1){Hst.Sel[typ]=Hst.Sel[typ].concat(Sel(typ.split(",")))}
	else if(Instr(typ,"/")>-1){var spt=typ.split("/");Hst.Sel[typ]=Hst.Sel[typ].concat(Crd(spt[0],spt[1]))}
	else if(Instr(typ,"~")>-1){var spt=typ.split("~"),cds=Vct(typ)
		for(var i=0;i<cds.length;i++)cds[i]=Crd(spt[0],cds[i])
		Hst.Sel[typ]=Hst.Sel[typ].concat(cds)
	}else if(Instr(typ,":")>-1){var spt=typ.split(":")
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
	if(typ.length==1)Hst.Sel[typ]=Flt(Sel("All"),function(ckr){if(Instr(ckr,typ)>-1)return 1;else return 0})
	if(typ.length==2&&typeof typ=="string")Hst.Sel[typ]=typ
	return Hst.Sel[typ]
}
function Flt(grp,ord){var res=[]
	for(var i=0;i<grp.length;i++){var odr=ord(grp[i])
		if(odr==2)return res;else if(odr)res.push(grp[i])
	}return res
}
function Ser(crd){
	return Hst.Crd.indexOf(crd)
}
function Cnt(){var ara={O:[],X:[],P:[]},ser=0;ara.O.All=[];ara.X.All=[];ara.P.All=[]
	while(1){ara.O[ser]=[];ara.X[ser]=[];ara.P[ser]=[]
		for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++){var sym=[0,0]
			var crd=Chr(cd1)+cd2;if(Qre(crd,"Sym")!=2)continue
			if(ser==0){
				for(var i=0;i<2;i++)if(!Lmt(crd,i))sym[i]=1
			}else{var cds=Crd(crd,"8")
				for(var i=0;i<cds.length;i++)for(var j=0;j<2;j++){
					if(ara[Sqr.Sym[j]].All.indexOf(cds[i])>-1)sym[j]=1
				}
			}
			for(var i=0;i<2;i++)if(sym[i])if(ara[Sqr.Sym[i]].All.indexOf(crd)<0){
				ara[Sqr.Sym[i]].All.push(crd);ara[Sqr.Sym[i]][ser].push(crd)
			}
			if(sym[0]&&sym[1])if(ara.P.All.indexOf(crd)<0){
				ara.P.All.push(crd);ara.P[ser].push(crd)
			}
		}if(ara.O[ser].length==0&&ara.X[ser].length==0)break;ser++
	}
	ara.P.All.concat(Flt(ara.O.All,function(crd){if(ara.X.All.indexOf(crd)<0)return 0;return 1}))
	for(var i=0;i<2;i++)ara[Sqr.Sym[i]].All=Flt(ara[Sqr.Sym[i]].All,function(crd){if(ara.P.All.indexOf(crd)<0)return 1;return 0})
	return ara
}
function Scr(opt,xpt){
	if(opt>xpt)return "O獲勝";if(xpt>opt)return "X獲勝";return "平手"
}
function Ara(grp,typ){
	var ara=Flt(grp,function(crd){if(Qre(crd,"Sym")==Sqr.Sym.indexOf(typ[0]))return 1;return 0})
	switch(typ[1]){
		case"F":if(ara.length==grp.length)return 1;return 0
		case"=":if(ara.length==Val(typ[2]))return 1;return 0
		case"<":if(ara.length<Val(typ[2]))return 1;return 0
		case">":if(ara.length>Val(typ[2]))return 1;return 0
	}
}
Ara.Rul=function(shl,ara){Shl.Ara[shl]=ara
	for(var i=0;i<2;i++)if(ara[Sqr.Sym[i]][0].length==0&&ara.P[0].length==0)ck=1
	if(Tn>2&&Tn%2==0){var ck=0
		switch(Dft[shl].QJd){
			case 1:if(ara.P.All.length==0)ck=1;break
			case 2:if(ara.P[0].length==ara.P.All.length)ck=1;break
			case 3:for(var i=0;i<2;i++)if(ara[Sqr.Sym[i]].All.length>ara.P.All.length)ck=1;break
		}
	}if(ck)return Scr(ara.O.All.length,ara.X.All.length)
}
Ara.Opt=function(shl){
	Id("OptionMenu").innerHTML+="輔助標記:<br>"
	OpS(shl+"-Ara","k","雙方區域",Dft[shl].Ara)
	if(!Dft.System.Oln){
		Id("OptionMenu").innerHTML+="判定方式:<br>"
		OpS(shl+"-QJd-0/"+shl+"-QJd","r","不進行快速判定",Dft[shl].QJd==0)
		OpS(shl+"-QJd-1/"+shl+"-QJd","r","快速判定初級",Dft[shl].QJd==1)
		OpS(shl+"-QJd-2/"+shl+"-QJd","r","快速判定中級",Dft[shl].QJd==2)
		OpS(shl+"-QJd-3/"+shl+"-QJd","r","快速判定高級",Dft[shl].QJd==3)
	}
}
Ara.OpK=function(shl){
	Dft[shl].Ara=Id(shl+"-Ara").checked
	if(!Dft.System.Oln)for(var i=0;i<4;i++)if(Id(shl+"-QJd-"+i).checked)Dft[shl].QJd=i
}
Ara.Mrk=function(shl){
	if(Dft[shl].Ara)for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)for(sym=0;sym<2;sym++){
		if(Shl.Ara[shl][Sqr.Sym[sym]].All.indexOf(Chr(cd1)+cd2)>-1)Qre(Chr(cd1)+cd2,"BgC",sym+3)
	}
}
Ara.Ckr=function(shl,crd){
	return Shl.Ara[shl][Sqr.Sym[Tn%2]][0].indexOf(crd)>-1||Shl.Ara[shl].P[0].indexOf(crd)>-1
}
Ara.AJd=function(shl,ara){var sot={O:[],X:[],P:[]};sot.O.All=[];sot.X.All=[];sot.P.All=[]
	for(var cd1=65;cd1<74;cd1++){
		for(var cd2=1;cd2<10;cd2++){if(Qre(Chr(cd1)+cd2,"Sym")!=2)continue
			var crd=Chr(cd1)+cd2,sym=[ara.O.indexOf(crd),ara.X.indexOf(crd)]
			for(var i=0;i<2;i++){var ck=0
				if(sym[i]>-1&&sym[(i+1)%2]<0)ck=1
				else if(sym[i]>-1&&sym[(i+1)%2]>-1)switch(Dft[shl].AJd){
					case 0:if(ara[Sqr.Sym[i]].age[sym[i]]<ara[Sqr.Sym[(i+1)%2]].age[sym[(i+1)%2]])ck=1;break
					case 1:if(ara[Sqr.Sym[i]].age[sym[i]]>ara[Sqr.Sym[(i+1)%2]].age[sym[(i+1)%2]])ck=1;break
					case 2:ck=0
				}if(ck)sot[Sqr.Sym[i]].All.push(crd)
			}if(sot.O.All.indexOf(crd)<0&&sot.X.All.indexOf(crd)<0)sot.P.All.push(crd)
		}
	}sot.O[0]=sot.O.All;sot.X[0]=sot.X.All;sot.P[0]=sot.P.All;return sot
}
function Enm(sym){
	if(sym=="O")return "X";else if(sym=="X") return "O";else return ""
}
function BJd(){var nxt=[],nxn=[]
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++){
		if(!Ckr(Chr(cd1)+cd2)){if(Qre(Chr(cd1)+cd2,"Sym")==2)nxn.push(Chr(cd1)+cd2)}
		else nxt.push(Chr(cd1)+cd2)
	}if(nxt.length==0&&Tn>2&&Tn!=81)Jdg(Sqr.Sym[(Tn+1)%2]+"獲勝");return nxn
}
function Map(crd,sym,typ){if(!typ)typ="4";if(!sym)sym=Qre(Sel(crd),"Sym")
	if(typeof sym!="object")sym=[sym]
	var vst=Flt(Crd(crd,typ),function(crd){
		if(Id(crd)&&sym.indexOf(Qre(crd,"Sym"))>-1)return 1;return 0
	});vst.push(crd)
	while(1){var cds=Sel("All"),ckr=0
		for(var i=0;i<cds.length;i++){
			if(vst.indexOf(cds[i])>-1||sym.indexOf(Qre(cds[i],"Sym"))<0)continue;var cs2=Crd(cds[i],typ)
			for(var j=0;j<cs2.length;j++){
				if(vst.indexOf(cs2[j])>-1){vst.push(cds[i]);ckr++;break}
			}
		}if(!ckr)break
	}return vst
}
Map.Bdr=function(cds,ckr,odr,typ){if(!typ)typ="4";var res=[]
	for(var i=0;i<cds.length;i++){
		var grp=Flt(Crd(cds[i],typ),function(crd){if(Id(crd)&&cds.indexOf(crd)<0)return 1;return 0})
		for(var j=0;j<grp.length;j++)grp[j]=Qre(grp[j],"Sym");res=res.concat(grp)
	}if(!odr(res,ckr))return 0;return 1
}
function Idt(grp,ckr){
	if(typeof ckr=="undefined")ckr=grp[0];for(var i=0;i<grp.length;i++)if(grp[i]!=ckr)return 0;return 1
}