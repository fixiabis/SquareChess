function XRl(){var zb=[];if(Turn<10)return
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){var crd=Chr(cd1)+cd2;if(RST(crd)==" "||RST(crd)=="")continue
			for(i in ord){var cpd=Crd(crd,ord[i])
				if(Controls(cpd)){var t=RST(cpd)
					if(t!=RST(crd)&&t!=" "&&t!=""&&t!="Z"){
						zb.push(crd)
					}
				}
			}
		}
	}dfc=1
	for(i in zb){WtS(zb[i],4)}if(zb.length>0)Rul()
}