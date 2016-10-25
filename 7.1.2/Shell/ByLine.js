function ExL(c,s){var ln=[]
	for(i in cd8){var tx=cd8[i],l=[],k=0
		while(1){
			if(Id(Crd(c,tx))){var t=Qre(Crd(c,tx),"T")
				if(t=="")l.push(Crd(c,tx));else if(t==s){k=1;break}
			}else break;tx+=cd8[i]
		}if(k)ln=ln.concat(l)
	}for(i in ln)Sym(ln[i],Sym(s)+4)
}