function ExR(){var zb=[];if(Turn<10)return
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){var c=Chr(cd1)+cd2;if(Qre(c,"T")==" "||Qre(c,"T")=="")continue
			for(i in cd8){var cpd=Crd(c,cd8[i])
				if(Id(cpd)){var t=Qre(cpd,"T")
					if(t!=Qre(c,"T")&&t!=" "&&t!=""&&t!="Z")zb.push(c)
				}
			}
		}
	}Dft.Clr=1
	for(i in zb);Sym(zb[i],4);if(zb.length>0)Rul()
}