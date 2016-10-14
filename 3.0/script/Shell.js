function Select(Typ){coor('Cls').options.length=0;coor('Fct').options.length=0
	switch(Typ){
		case "Crt":AZ();var A=["Rnd","Act","Dym","ARd","DRd"];FcAd(A);break
		case "Ara":AZ();coor('Fct').add(new Option("Rnd","Rnd"));break
		case "Shp":var A=["H","V","Rh","Sh","X","sqr","crs"],B=["nml","rpl","kil","scr","hrm"];ClAd(A);FcAd(B);break
		case "Cnt":var A=["rmt","abn","non"];ClAd(A);break
		case "Sym":var A=["D","U","Q","E","P","F","O"];FcAd(A);coor('Cls').add(new Option("Ara","Ara"));break
		case "Rul":var A=["Min","Ara","Ldr","Bld","Wpn","Cnt"];ClAd(A);var B=["","prt","scr","dis","kil"];FcAd(B);break
	}
}
function dire(){
	coor("Direction").innerHTML=Direction(coor('Typ').value+"."+coor('Cls').value+"."+coor('Fct').value+"<"+coor('Val').value+">"+coor('Comd').value.replace(new RegExp("\r", 'g'),"<br>"))
}
function AZ(){for(i=65;i<91;i++){coor('Cls').add(new Option(Chr(i),Chr(i)))}}
function ClAd(F){for(i=0;i<F.length;i++){coor('Cls').add(new Option(F[i],F[i]))}}
function FcAd(F){for(i=0;i<F.length;i++){coor('Fct').add(new Option(F[i],F[i]))}}
function Add(){var C=coor('Typ').value+"."+coor('Cls').value
	if(coor('Fct').value!="")C+="."+coor('Fct').value
	if(coor('Val').value!="")C+="<"+coor('Val').value+">"
	if(coor("OFD").value.search(C)>=0){alert("指令已存在")}else{coor("OFD").value=coor("OFD").value+" "+C}
}
function Ads(){
	if(coor("OFD").value.search(coor("Comd").value)>=0){alert("指令已存在")}else{coor("OFD").value=coor("OFD").value+" "+coor('Comd').value}
}
function Del(){var C=coor('Typ').value+"."+coor('Cls').value
	if(coor('Fct').value!="")C+="."+coor('Fct').value
	if(coor('Val').value!="")C+="<"+coor('Val').value+">"
	if(coor("OFD").value.search(C)>=0){coor("OFD").value=coor("OFD").value.replace(" "+C,"")}else{alert("指令不存在")}
}
function Des(){
	if(coor("OFD").value.search(coor("Comd").value)>=0){coor("OFD").value=coor("OFD").value.replace(" "+coor("Comd").value,"")}else{alert("指令不存在")}
}