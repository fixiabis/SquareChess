
Shl.Ato.Connect=function(typ){
	var cds=Sel("All"),mn=Cnt(),nx=[],crd=[],ctl={O:[],X:[]},ext=[],set=""
	for(var i=0;i<cds.length;i++){if(!Ckr(cds[i]))continue
		crd.push(cds[i]);Qre(cds[i],"Sym",Tn%2);var s=Cnt();Qre(cds[i],"Sym",2);nx.push(s)
		for(var j=0;j<2;j++){var n=0
			for(var k=0;k<s[Sqr.Sym[j]].length;k++)n+=s[Sqr.Sym[j]][k].length*(k+1);ctl[Sqr.Sym[j]].push(n)
		}
	}
	if(!typ){
		if(mn[Sqr.Sym[Tn%2]].length>mn[Sqr.Sym[(Tn+1)%2]].length&&mn[Sqr.Sym[(Tn+1)%2]].length==0)typ="A"
		else typ="D"
	}
	while(ext.length!=crd.length){var r=0,k=0
		for(var i=0;i<nx.length;i++){if(ext.indexOf(i)>-1)continue
			if(!k){r=i;k=1;continue}
			var tk0c=nx[i][Sqr.Sym[Tn%2]].All.length-nx[i][Sqr.Sym[(Tn+1)%2]].All.length,
				tk0m=nx[r][Sqr.Sym[Tn%2]].All.length-nx[r][Sqr.Sym[(Tn+1)%2]].All.length,
				tk1c=ctl[Sqr.Sym[Tn%2]][i],tk1m=ctl[Sqr.Sym[Tn%2]][r],
				tk2c=ctl[Sqr.Sym[(Tn+1)%2]][i],tk2m=ctl[Sqr.Sym[(Tn+1)%2]][r]
			if(tk0c>tk0m)r=i
			else if(tk0c==tk0m){
				if(typ=="A"){
					if(tk1c>tk1m)r=i;else if(tk1c==tk1m&&(tk2c>tk2m||tk2c==tk2m))r=i
				}else{
					if(tk2c>tk2m)r=i;else if(tk2c==tk2m&&(tk1c>tk1m||tk1c==tk1m))r=i
				}
			}
		}ext.push(r)
	}if(typ=="A")ext.reverse()
	if(mn[Sqr.Sym[(Tn+1)%2]].length!=0||mn[Sqr.Sym[Tn%2]].length!=0)set=crd[ext[1]];else set=crd[ext[0]]
	return {mn:mn,nx:nx,crd:crd,ext:ext,ctl:ctl,typ:typ,set:set}
}