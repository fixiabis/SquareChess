Sqr[1]=["Z","red","black"]
function ExR(){var zb=[];if(Turn<10)return
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		var c=Chr(cd1)+cd2,s=Qre(c,"T");if(s==" "||s=="")continue
		for(i in cd8){var d=Crd(c,cd8[i])
			if(Id(d)){var t=Qre(d,"T");if(t==" "||t==""||t=="Z")continue
				if(t!=s&&zb.indexOf(c)==-1){zb.push(c);break}
			}
		}
	}Dft.Clr=0
	for(i in zb)Sym(zb[i],4);if(zb.length>0)Rul()
}