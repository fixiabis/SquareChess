// JavaScript Document
var Turn=1,P="",Q="",O="O",X="X",Chs="",OArea=0,XArea=0,Board=new Array(),SetCrd=new Array()
var TurnStart=5,TurnEnd=40,TurnCount=0,TimeCount=0,TotalScore=0,r1=0,r2=0,SymCheck=0,Axf=0,Drg=0,DAct=10,TAct=8
function dragoverHandler(evt){evt.preventDefault();}
function destroyClickedElement(evt) {document.body.removeChild(evt.target);}
function dropHandler(evt) {
evt.preventDefault();
var files=evt.dataTransfer.files;
for (var i in files) {
var fr=new FileReader();
fr.onload=function openfile(evt) {document.getElementById('exm').value=evt.target.result;}
fr.readAsText(files[i]);document.all.Command.style.display="inline"
}
}//讀取拖曳檔案
function OutputText(_text) {
	var _fileName=prompt("輸入下載檔名，點選取消即可複製字串")
	if(_fileName== null){
		prompt('下列字串為該回合狀態，歡迎複製',_text)
	}else{
		var textFileAsBlob = new Blob([_text], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = _fileName;
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null) {
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		} else {
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroyClickedElement;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}
		downloadLink.click();
	}
}//輸出回合檔案
function ChessMode(Crd){
var crd1=Crd.charCodeAt(Crd.substr(0,1)),crd2=parseInt(Crd.substr(1,1)),OAra=0,XAra=0,OLdr=0,XLdr=0
var Cmd=document.getElementById("OFD").value,typ="",move="gainsboro"
if(document.getElementById(Crd).style.color=="red")typ="a"
if(document.getElementById(Crd).style.color=="orange")typ="b"
if(document.getElementById(Crd).style.color=="gold")typ="c"
if(document.getElementById(Crd).style.color=="seagreen")typ="d"
if(document.getElementById(Crd).style.color=="blue")typ="e"
if(document.getElementById(Crd).style.color=="purple")typ="f"
if(document.getElementById(Crd).style.color=="deeppink")typ="g"
if(document.getElementById(Crd).style.color=="slateblue")typ="h"
if(document.getElementById(Crd).style.color=="brown")typ="i"
if(document.getElementById(Crd).style.backgroundColor==move){
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="gray"){
			document.getElementById(Crd).style.color=document.getElementById(String.fromCharCode(cd1)+cd2).style.color
			document.getElementById(Crd).value=document.getElementById(String.fromCharCode(cd1)+cd2).value
			ItemSet("black","white","",String.fromCharCode(cd1)+cd2);Turn++;CharaterRule()
		}else{document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor="white"}
	}
}
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor="white"
	}
}
}else{
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor="white"
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O){
				OAra++
				if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="brown")OLdr++
			}
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X){
				XAra++
				if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="brown")XLdr++
			}
		}
	}
	if(OAra==0)Winner("O方已無生還者");if(XAra==0)Winner("X方已無生還者")
	if(Cmd.search("Rul.Chs.Ldr")>=0){if(OLdr==0)Winner("O方領導已死亡");if(XLdr==0)Winner("X方領導已死亡")}
	if(document.getElementById(Crd).value==Q){
		if(typ!=""){
		for(tp=0;tp<9;tp++){
			var md="";
			if(tp==0)md=" ";if(tp==1)md=".f";if(tp==2)md=".k";if(tp==3)md=".l";if(tp==4)md=".j";if(tp==5)md=".s";if(tp==6)md=".s.l"
			if(Cmd.search(typ+".8"+md)>=0)Cmd=Cmd+typ+".4"+md+typ+".YX"+md
			if(Cmd.search(typ+".4"+md)>=0)Cmd=Cmd+typ+".X"+md+typ+".Y"+md
			if(Cmd.search(typ+".X"+md)>=0)Cmd=Cmd+typ+".R"+md+typ+".L"+md
			if(Cmd.search(typ+".Y"+md)>=0)Cmd=Cmd+typ+".F"+md+typ+".B"+md
			if(Cmd.search(typ+".YX"+md)>=0)Cmd=Cmd+typ+".FX"+md+typ+".BX"+md
			if(Cmd.search(typ+".FX"+md)>=0)Cmd=Cmd+typ+".FR"+md+typ+".FL"+md
			if(Cmd.search(typ+".BX"+md)>=0)Cmd=Cmd+typ+".BR"+md+typ+".BL"+md
			if(Cmd.search(typ+".YR"+md)>=0)Cmd=Cmd+typ+".FR"+md+typ+".BR"+md
			if(Cmd.search(typ+".YL"+md)>=0)Cmd=Cmd+typ+".FL"+md+typ+".BL"+md
			if(Cmd.search(typ+".8n"+md)>=0)Cmd=Cmd+typ+".YXX"+md+typ+".YYX"+md
			if(Cmd.search(typ+".YXX"+md)>=0)Cmd=Cmd+typ+".FXX"+md+typ+".BXX"+md
			if(Cmd.search(typ+".FXX"+md)>=0)Cmd=Cmd+typ+".FRR"+md+typ+".FLL"+md
			if(Cmd.search(typ+".BXX"+md)>=0)Cmd=Cmd+typ+".BRR"+md+typ+".BLL"+md
			if(Cmd.search(typ+".YRR"+md)>=0)Cmd=Cmd+typ+".FRR"+md+typ+".BRR"+md
			if(Cmd.search(typ+".YLL"+md)>=0)Cmd=Cmd+typ+".FLL"+md+typ+".BLL"+md
			if(Cmd.search(typ+".YYX"+md)>=0)Cmd=Cmd+typ+".FFX"+md+typ+".BBX"+md
			if(Cmd.search(typ+".FFX"+md)>=0)Cmd=Cmd+typ+".FFR"+md+typ+".FFL"+md
			if(Cmd.search(typ+".BBX"+md)>=0)Cmd=Cmd+typ+".BBR"+md+typ+".BBL"+md
			if(Cmd.search(typ+".YYR"+md)>=0)Cmd=Cmd+typ+".FFR"+md+typ+".BBR"+md
			if(Cmd.search(typ+".YYL"+md)>=0)Cmd=Cmd+typ+".FFL"+md+typ+".BBL"+md
			if(Cmd.search(typ+".28"+md)>=0)Cmd=Cmd+typ+".24"+md+typ+".2YX"+md
			if(Cmd.search(typ+".24"+md)>=0)Cmd=Cmd+typ+".2X"+md+typ+".2Y"+md
			if(Cmd.search(typ+".2X"+md)>=0)Cmd=Cmd+typ+".2R"+md+typ+".2L"+md
			if(Cmd.search(typ+".2Y"+md)>=0)Cmd=Cmd+typ+".2F"+md+typ+".2B"+md
			if(Cmd.search(typ+".2YX"+md)>=0)Cmd=Cmd+typ+".2FX"+md+typ+".2BX"+md
			if(Cmd.search(typ+".2FX"+md)>=0)Cmd=Cmd+typ+".2FR"+md+typ+".2FL"+md
			if(Cmd.search(typ+".2BX"+md)>=0)Cmd=Cmd+typ+".2BR"+md+typ+".2BL"+md
			if(Cmd.search(typ+".2YR"+md)>=0)Cmd=Cmd+typ+".2FR"+md+typ+".2BR"+md
			if(Cmd.search(typ+".2YL"+md)>=0)Cmd=Cmd+typ+".2FL"+md+typ+".2BL"+md
		}
		var sym;if(Q==O)sym="0";if(Q==X)sym="1"
		if(Cmd.search(typ+".F")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-1))){
			if(Cmd.search(typ+".F ")>=0)document.getElementById(String.fromCharCode(crd1)+(crd2-1)).style.backgroundColor=move
			if(Cmd.search(typ+".F.k")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-1)).value!=""){
				document.getElementById(String.fromCharCode(crd1)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".F.f")>=0){
				document.getElementById(String.fromCharCode(crd1)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".F.l")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-1)).value==""){
				document.getElementById(String.fromCharCode(crd1)+(crd2-1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".B")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2+1))){
			if(Cmd.search(typ+".B ")>=0)document.getElementById(String.fromCharCode(crd1)+(crd2+1)).style.backgroundColor=move
			if(Cmd.search(typ+".B.k")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2+1)).value!=""){
				document.getElementById(String.fromCharCode(crd1)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".B.f")>=0){
				document.getElementById(String.fromCharCode(crd1)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".B.l")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-1)).value==""){
				document.getElementById(String.fromCharCode(crd1)+(crd2+1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".L")>=0&&document.getElementById(String.fromCharCode(crd1-1)+crd2)){
			if(Cmd.search(typ+".L ")>=0)document.getElementById(String.fromCharCode(crd1-1)+crd2).style.backgroundColor=move
			if(Cmd.search(typ+".L.k")>=0&&document.getElementById(String.fromCharCode(crd1-1)+crd2).value!=""){
				document.getElementById(String.fromCharCode(crd1-1)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".L.f")>=0){
				document.getElementById(String.fromCharCode(crd1-1)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(typ+".L.l")>=0&&document.getElementById(String.fromCharCode(crd1-1)+crd2).value==""){
				document.getElementById(String.fromCharCode(crd1-1)+crd2).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".R")>=0&&document.getElementById(String.fromCharCode(crd1+1)+crd2)){
			if(Cmd.search(typ+".R ")>=0)document.getElementById(String.fromCharCode(crd1+1)+crd2).style.backgroundColor=move
			if(Cmd.search(typ+".R.k")>=0&&document.getElementById(String.fromCharCode(crd1+1)+crd2).value!=""){
				document.getElementById(String.fromCharCode(crd1+1)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".R.f")>=0){
				document.getElementById(String.fromCharCode(crd1+1)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(typ+".R.l")>=0&&document.getElementById(String.fromCharCode(crd1+1)+crd2).value==""){
				document.getElementById(String.fromCharCode(crd1+1)+crd2).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".FR")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2-1))){
			if(Cmd.search(typ+".FR ")>=0)document.getElementById(String.fromCharCode(crd1+1)+(crd2-1)).style.backgroundColor=move
			if(Cmd.search(typ+".FR.k")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2-1)).value!=""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".FR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".FR.l")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2-1)).value==""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2-1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".FL")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2-1))){
			if(Cmd.search(typ+".FL ")>=0)document.getElementById(String.fromCharCode(crd1-1)+(crd2-1)).style.backgroundColor=move
			if(Cmd.search(typ+".FL.k")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2-1)).value!=""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".FL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".FL.l")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2-1)).value==""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2-1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".BR"&&document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)))>=0){
			if(Cmd.search(typ+".BR ")>=0)document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)).style.backgroundColor=move
			if(Cmd.search(typ+".BR.k")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)).value!=""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".BR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".BR.l")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)).value==""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2+1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".BL")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2+1))){
			if(Cmd.search(typ+".BL ")>=0)document.getElementById(String.fromCharCode(crd1-1)+(crd2+1)).style.backgroundColor=move
			if(Cmd.search(typ+".BL.k")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2+1)).value!=""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".BL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2+1)).style.backgroundColor=move
			}

			if(Cmd.search(typ+".BL.l")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2+1)).value==""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2+1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2F")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-2))){
			if(Cmd.search(typ+".2F ")>=0)document.getElementById(String.fromCharCode(crd1)+(crd2-2)).style.backgroundColor=move
			if(Cmd.search(typ+".2F.k")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-2)).value!=""){
				document.getElementById(String.fromCharCode(crd1)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2F.f")>=0){
				document.getElementById(String.fromCharCode(crd1)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2F.l")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-2)).value==""){
				document.getElementById(String.fromCharCode(crd1)+(crd2-2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2B")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2+2))){
			if(Cmd.search(typ+".2B ")>=0)document.getElementById(String.fromCharCode(crd1)+(crd2+2)).style.backgroundColor=move
			if(Cmd.search(typ+".2B.k")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2+2)).value!=""){
				document.getElementById(String.fromCharCode(crd1)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2B.f")>=0){
				document.getElementById(String.fromCharCode(crd1)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2B.l")>=0&&document.getElementById(String.fromCharCode(crd1)+(crd2-2)).value==""){
				document.getElementById(String.fromCharCode(crd1)+(crd2+2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2L")>=0&&document.getElementById(String.fromCharCode(crd1-2)+crd2)){
			if(Cmd.search(typ+".2L ")>=0)document.getElementById(String.fromCharCode(crd1-2)+crd2).style.backgroundColor=move
			if(Cmd.search(typ+".2L.k")>=0&&document.getElementById(String.fromCharCode(crd1-2)+crd2).value!=""){
				document.getElementById(String.fromCharCode(crd1-2)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2L.f")>=0){
				document.getElementById(String.fromCharCode(crd1-2)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2L.l")>=0&&document.getElementById(String.fromCharCode(crd1-2)+crd2).value==""){
				document.getElementById(String.fromCharCode(crd1-2)+crd2).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2R")>=0&&document.getElementById(String.fromCharCode(crd1+2)+crd2)){
			if(Cmd.search(typ+".2R ")>=0)document.getElementById(String.fromCharCode(crd1+2)+crd2).style.backgroundColor=move
			if(Cmd.search(typ+".2R.k")>=0&&document.getElementById(String.fromCharCode(crd1+2)+crd2).value!=""){
				document.getElementById(String.fromCharCode(crd1+2)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2R.f")>=0){
				document.getElementById(String.fromCharCode(crd1+2)+crd2).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2R.l")>=0&&document.getElementById(String.fromCharCode(crd1+2)+crd2).value==""){
				document.getElementById(String.fromCharCode(crd1+2)+crd2).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2FR")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2-2))){
			if(Cmd.search(typ+".2FR ")>=0)document.getElementById(String.fromCharCode(crd1+2)+(crd2-2)).style.backgroundColor=move
			if(Cmd.search(typ+".2FR.k")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2-2)).value!=""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2FR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2FR.l")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2-2)).value==""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2-2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2FL")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2-2))){
			if(Cmd.search(typ+".2FL ")>=0)document.getElementById(String.fromCharCode(crd1-2)+(crd2-2)).style.backgroundColor=move
			if(Cmd.search(typ+".2FL.k")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2-2)).value!=""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2FL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2FL.l")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2-2)).value==""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2-2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2BR")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2+2))){
			if(Cmd.search(typ+".2BR ")>=0)document.getElementById(String.fromCharCode(crd1+2)+(crd2+2)).style.backgroundColor=move
			if(Cmd.search(typ+".2BR.k")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2+2)).value!=""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2BR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2BR.l")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2+2)).value==""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2+2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".2BL")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2+2))){
			if(Cmd.search(typ+".2BL ")>=0)document.getElementById(String.fromCharCode(crd1-2)+(crd2+2)).style.backgroundColor=move
			if(Cmd.search(typ+".2BL.k")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2+2)).value!=""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".2BL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".2BL.l")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2+2)).value==""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2+2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".FFR")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2-2))){
			if(Cmd.search(typ+".FFR ")>=0)document.getElementById(String.fromCharCode(crd1+1)+(crd2-2)).style.backgroundColor=move
			if(Cmd.search(typ+".FFR.k")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2-2)).value!=""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".FFR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".FFR.l")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2-2)).value==""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2-2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".FFL")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2-2))){
			if(Cmd.search(typ+".FFL ")>=0)document.getElementById(String.fromCharCode(crd1-1)+(crd2-2)).style.backgroundColor=move
			if(Cmd.search(typ+".FFL.k")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2-2)).value!=""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".FFL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2-2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".FFL.l")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2-2)).value==""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2-2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".BBR")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2+2))){
			if(Cmd.search(typ+".BBR ")>=0)document.getElementById(String.fromCharCode(crd1+1)+(crd2+2)).style.backgroundColor=move
			if(Cmd.search(typ+".BBR.k")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2+2)).value!=""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".BBR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".BBR.l")>=0&&document.getElementById(String.fromCharCode(crd1+1)+(crd2+2)).value==""){
				document.getElementById(String.fromCharCode(crd1+1)+(crd2+2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".BBL")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2+2))){
			if(Cmd.search(typ+".BBL ")>=0)document.getElementById(String.fromCharCode(crd1-1)+(crd2+2)).style.backgroundColor=move
			if(Cmd.search(typ+".BBL.k")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2+2)).value!=""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".BBL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2+2)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".BBL.l")>=0&&document.getElementById(String.fromCharCode(crd1-1)+(crd2+2)).value==""){
				document.getElementById(String.fromCharCode(crd1-1)+(crd2+2)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".FRR")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2-1))){
			if(Cmd.search(typ+".FRR ")>=0)document.getElementById(String.fromCharCode(crd1+2)+(crd2-1)).style.backgroundColor=move
			if(Cmd.search(typ+".FRR.k")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2-1)).value!=""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".FRR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".FRR.l")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2-1)).value==""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2-1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".FLL")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2-1))){
			if(Cmd.search(typ+".FLL ")>=0)document.getElementById(String.fromCharCode(crd1-2)+(crd2-1)).style.backgroundColor=move
			if(Cmd.search(typ+".FLL.k")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2-1)).value!=""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".FLL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2-1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".FLL.l")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2-1)).value==""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2-1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".BRR")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2+1))){
			if(Cmd.search(typ+".BRR ")>=0)document.getElementById(String.fromCharCode(crd1+2)+(crd2+1)).style.backgroundColor=move
			if(Cmd.search(typ+".BRR.k")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2+1)).value!=""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".BRR.f")>=0){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".BRR.l")>=0&&document.getElementById(String.fromCharCode(crd1+2)+(crd2+1)).value==""){
				document.getElementById(String.fromCharCode(crd1+2)+(crd2+1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".BLL")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2+1))){
			if(Cmd.search(typ+".BLL ")>=0)document.getElementById(String.fromCharCode(crd1-2)+(crd2+1)).style.backgroundColor=move
			if(Cmd.search(typ+".BLL.k")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2+1)).value!=""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(crd1+""+crd2+sym+typ+".BLL.f")>=0){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2+1)).style.backgroundColor=move
			}
			if(Cmd.search(typ+".BLL.l")>=0&&document.getElementById(String.fromCharCode(crd1-2)+(crd2+1)).value==""){
				document.getElementById(String.fromCharCode(crd1-2)+(crd2+1)).style.backgroundColor=move
			}
		}
		if(Cmd.search(typ+".F.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1)+(crd2-c))){
						if(document.getElementById(String.fromCharCode(crd1)+(crd2-c)).value==""){
							document.getElementById(String.fromCharCode(crd1)+(crd2-c)).style.backgroundColor=move
						}else{
							if(Cmd.search(typ+".F.s.l")>=0){}else{
								document.getElementById(String.fromCharCode(crd1)+(crd2-c)).style.backgroundColor=move
							}break;
						}
					}
				}
			}
		if(Cmd.search(typ+".B.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1)+(crd2+c))){
					if(document.getElementById(String.fromCharCode(crd1)+(crd2+c)).value==""){
						document.getElementById(String.fromCharCode(crd1)+(crd2+c)).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".B.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1)+(crd2+c)).style.backgroundColor=move
						}break;
					}
					}
				}
			}
		if(Cmd.search(typ+".L.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1-c)+crd2)){
					if(document.getElementById(String.fromCharCode(crd1-c)+crd2).value==""){
						document.getElementById(String.fromCharCode(crd1-c)+crd2).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".L.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1-c)+crd2).style.backgroundColor=move
						}break;
					}
					}
				}
			}
		if(Cmd.search(typ+".R.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1+c)+crd2)){
					if(document.getElementById(String.fromCharCode(crd1+c)+crd2).value==""){
						document.getElementById(String.fromCharCode(crd1+c)+crd2).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".R.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1+c)+crd2).style.backgroundColor=move
						}break;
					}
					}
				}
			}
		if(Cmd.search(typ+".FR.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1+c)+(crd2-c))){
					if(document.getElementById(String.fromCharCode(crd1+c)+(crd2-c)).value==""){
						document.getElementById(String.fromCharCode(crd1+c)+(crd2-c)).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".FR.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1+c)+(crd2-c)).style.backgroundColor=move
						}
						break;
					}
					}
				}
			}
		if(Cmd.search(typ+".FL.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1-c)+(crd2-c))){
					if(document.getElementById(String.fromCharCode(crd1-c)+(crd2-c)).value==""){
						document.getElementById(String.fromCharCode(crd1-c)+(crd2-c)).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".FL.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1-c)+(crd2-c)).style.backgroundColor=move
						}
						break;
					}
					}
				}
			}
		if(Cmd.search(typ+".BR.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1+c)+(crd2+c))){
					if(document.getElementById(String.fromCharCode(crd1+c)+(crd2+c)).value==""){
						document.getElementById(String.fromCharCode(crd1+c)+(crd2+c)).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".BR.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1+c)+(crd2+c)).style.backgroundColor=move
						}
						break;
					}
					}
				}
			}
		if(Cmd.search(typ+".BL.s")>=0){
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1-c)+(crd2+c))){
					if(document.getElementById(String.fromCharCode(crd1-c)+(crd2+c)).value==""){
						document.getElementById(String.fromCharCode(crd1-c)+(crd2+c)).style.backgroundColor=move
					}else{
						if(Cmd.search(typ+".BL.s.l")>=0){}else{
							document.getElementById(String.fromCharCode(crd1-c)+(crd2+c)).style.backgroundColor=move
						}
						break;
					}
					}
				}
			}
		if(Cmd.search(typ+".F.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1)+(crd2-c))){
						if(document.getElementById(String.fromCharCode(crd1)+(crd2-c)).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1)+(crd2-c)).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".B.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1)+(crd2+c))){
						if(document.getElementById(String.fromCharCode(crd1)+(crd2+c)).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1)+(crd2+c)).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".R.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1+c)+crd2)){
						if(document.getElementById(String.fromCharCode(crd1+c)+crd2).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1+c)+crd2).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".L.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1-c)+crd2)){
						if(document.getElementById(String.fromCharCode(crd1-c)+crd2).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1-c)+crd2).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".FR.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1+c)+(crd2-c))){
						if(document.getElementById(String.fromCharCode(crd1+c)+(crd2-c)).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1+c)+(crd2-c)).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".FL.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1-c)+(crd2-c))){
						if(document.getElementById(String.fromCharCode(crd1-c)+(crd2-c)).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1-c)+(crd2-c)).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".BR.j")>=0){var ck=0
			for(c=1;c<10;c++){
				if(document.getElementById(String.fromCharCode(crd1+c)+(crd2+c))){
					if(document.getElementById(String.fromCharCode(crd1+c)+(crd2+c)).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1+c)+(crd2+c)).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		if(Cmd.search(typ+".BL.j")>=0){var ck=0
				for(c=1;c<10;c++){
					if(document.getElementById(String.fromCharCode(crd1-c)+(crd2+c))){
						if(document.getElementById(String.fromCharCode(crd1-c)+(crd2+c)).value!=""){
							if(ck==1){
								document.getElementById(String.fromCharCode(crd1-c)+(crd2+c)).style.backgroundColor=move;break
							}else{
								ck++
							}
						}
					}
				}
			}
		}
		document.getElementById(Crd).style.backgroundColor="gray"
	}
}
}//棋盤組件
function SetSym(Crd){
var Cmd=document.getElementById('OFD').value,ScoreO=0,ScoreX=0
document.getElementById('OFD').type="Hidden"
document.all.Weapon.style.display='none'
if(Cmd.search("Rul.Wpn")>=0){if(document.getElementById(Crd).value!=""&&SetCrd[Turn-1]==Crd&&Turn>2)document.all.Weapon.style.display='inline'}
if(document.getElementById(Crd).value=="Y"){Random(9,65,9,1);ItemSet("darkgray","gray","Guris",r1+r2)}
var SymO=0,SymX=0
if(Turn%2==0){Q=X}else{Q=O}
if(Cmd.search("Rul.Chs")>=0){
	ChessMode(Crd)
}else{
for(cd1=65;cd1<74;cd1++){
    for(cd2=1;cd2<10;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)SymO++
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)SymX++
	}
}
if(SymO==0||SymX==0){
	if(Turn<3){
		P=""
		if(Cmd.search("Sym.Ara.D")>=0)if(Turn%2==0){CircleAra("K",Crd)}else{CircleAra("D",Crd)}
		if(Cmd.search("Sym.Ara.U")>=0)if(Turn%2==0){CircleAra("D",Crd)}else{CircleAra("U",Crd)}
		if(Cmd.search("Sym.Ara.Q")>=0)if(Turn%2==0){CircleAra("H",Crd)}else{CircleAra("Q",Crd)}
		if(Cmd.search("Sym.Ara.F")>=0)ItemSet("black","seagreen",document.getElementById(Crd).value, Crd)
		if(Cmd.search("Sym.Ara.O")>=0)ItemSet("black","cyan",document.getElementById(Crd).value, Crd)
	}
}else{
		if(Cmd.search("Cnt.non")>=0){P=""}else{P=Q}
		if(Cmd.search("Sym.Ara.P")>=0){
			var c1=SetCrd[1].substr(0,1)
            var c2=SetCrd[1].substr(1,1)
            var d1=SetCrd[2].substr(0,1)
            var d2=SetCrd[2].substr(1,1)
            if(Turn>1){
                 document.getElementById(c1+d2).style.backgroundColor="lightgray"
                 document.getElementById(d1+c2).style.backgroundColor="lightgray"
			}
		}
}
var crd1=Crd.charCodeAt(Crd.substr(0,1)),crd2=parseInt(Crd.substr(1,1))
var F=String.fromCharCode(crd1-1)+crd2,B=String.fromCharCode(crd1+1)+crd2
var R=String.fromCharCode(crd1)+(crd2+1),L=String.fromCharCode(crd1)+(crd2-1)
var FR=String.fromCharCode(crd1-1)+(crd2+1),FL=String.fromCharCode(crd1-1)+(crd2-1)
var BR=String.fromCharCode(crd1+1)+(crd2+1),BL=String.fromCharCode(crd1+1)+(crd2-1)
var FF=String.fromCharCode(crd1-2)+crd2,BB=String.fromCharCode(crd1+2)+crd2
var RR=String.fromCharCode(crd1)+(crd2+2),LL=String.fromCharCode(crd1)+(crd2-2)
var FFRR=String.fromCharCode(crd1-2)+(crd2+2),FFLL=String.fromCharCode(crd1-2)+(crd2-2)
var BBRR=String.fromCharCode(crd1+2)+(crd2+2),BBLL=String.fromCharCode(crd1+2)+(crd2-2)
var FFR=String.fromCharCode(crd1-2)+(crd2+1),FFL=String.fromCharCode(crd1-2)+(crd2-1)
var BBR=String.fromCharCode(crd1+2)+(crd2+1),BBL=String.fromCharCode(crd1+2)+(crd2-1)
var FRR=String.fromCharCode(crd1-1)+(crd2+2),FLL=String.fromCharCode(crd1-1)+(crd2-2)
var BRR=String.fromCharCode(crd1+1)+(crd2+2),BLL=String.fromCharCode(crd1+1)+(crd2-2)
Connect(F,F,F,Crd);Connect(B,B,B,Crd);Connect(R,R,R,Crd);Connect(L,L,L,Crd)
Connect(FR,FR,FR,Crd);Connect(FL,FL,FL,Crd);Connect(BR,BR,BR,Crd);Connect(BL,BL,BL,Crd)
if(Cmd.search("Cnt.rmt")>=0){
Connect(FF,F,F,Crd);Connect(BB,B,B,Crd);Connect(LL,L,L,Crd);Connect(RR,R,R,Crd)
Connect(FFRR,FR,FR,Crd);Connect(BBLL,BL,BL,Crd);Connect(FFLL,FL,FL,Crd);Connect(BBRR,BR,BR,Crd)
}
if(Cmd.search("Cnt.abn")>=0){
Connect(BBL,BL,L,Crd);Connect(BBL,B,BL,Crd);Connect(BBL,B,BB,Crd);Connect(FFL,FL,L,Crd);Connect(FFL,F,FL,Crd);Connect(FFL,F,FF,Crd)
Connect(BBR,BR,R,Crd);Connect(BBR,B,BR,Crd);Connect(BBR,B,BB,Crd);Connect(FFR,FR,R,Crd);Connect(FFR,F,FR,Crd);Connect(FFR,F,FF,Crd)
Connect(FRR,FR,F,Crd);Connect(FRR,RR,R,Crd);Connect(FRR,FR,R,Crd);Connect(BRR,BR,B,Crd);Connect(BRR,RR,R,Crd);Connect(BRR,BR,R,Crd)
Connect(FLL,FL,F,Crd);Connect(FLL,LL,L,Crd);Connect(FLL,FL,L,Crd);Connect(BLL,BL,B,Crd);Connect(BLL,LL,L,Crd);Connect(BLL,BL,L,Crd)
}
if(SymCheck==0){
	if(document.getElementById(Crd).value=="")alert(Crd+"，未產生連線")
}else{
	Turn++;SymCheck=0;CharaterRule()
	if(Cmd.search("Sym.Ara.E")>=0)if(Turn%2==0){CircleAra("E",Crd)}else{CircleAra("T",Crd)}
};AreaRule();ShapeRule();BasicRule()
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="O ")ScoreX++
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="X ")ScoreO++
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==")|("&&Axf==0)Axf=1
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="δ"&&Drg==0)Drg=1
		if(Axf>=3){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value==")|("&&document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="black"){
				document.getElementById(String.fromCharCode(cd1)+cd2).style.color="maroon";Axf=0
				for(cr1=cd1-1;cr1<cd1+2;cr1++){
					for(cr2=cd2-1;cr2<cd2+2;cr2++){
						if(document.getElementById(String.fromCharCode(cr1)+cr2).value!=""){
						document.getElementById(String.fromCharCode(cr1)+cr2).style.color="maroon"
						document.getElementById(String.fromCharCode(cr1)+cr2).value=document.getElementById(String.fromCharCode(cr1)+cr2).value+" "
						}
					}
				}
			}
		}
		if(Drg>=3){
	if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="δ")document.getElementById(String.fromCharCode(cd1)+cd2).style.color="maroon"
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="dodgerblue"){
			document.getElementById(String.fromCharCode(cd1)+cd2).style.color="green"
		}if(String.fromCharCode(cd1)+cd2=="I9")Drg=0
		}
	}
}
if(Axf>0)Axf++;if(Drg>0)Drg++
if(Cmd.search("Rul.Bld")>=0){
if(TotalScore!=0){
	if(TotalScore==ScoreX)Winner("X得分較高，X獲勝")
	if(TotalScore==ScoreO)Winner("O得分較高，O獲勝")
}else{
	if(ScoreO>ScoreX+1)Winner("O得分較高，O獲勝")
	if(ScoreX>ScoreO+1)Winner("X得分較高，X獲勝")
}
}
if(Cmd.search("Rul.Ldr")>=0&&Turn>4){
	if(document.getElementById(SetCrd[1])){
		if(document.getElementById(SetCrd[1]).value!=O){
		Winner("O領導死亡，X獲勝")
		}else{
		if(document.getElementById(SetCrd[2]))if(document.getElementById(SetCrd[2]).value!=X)Winner("X領導死亡，O獲勝")
		}
	}
}
};Writer();document.getElementById('Undo').value="Undo("+(Turn-1)+")"
}//載入座標，符號判別與連線
function Connect(crd1,crd2,crd3,Crd){
if(document.getElementById(crd1)&&document.getElementById(crd2)&&document.getElementById(crd3)){
	if(document.getElementById(crd1).value==P||document.getElementById(crd1).value=="K"){
		if(document.getElementById(Crd).value==""){
			if(document.getElementById(crd2).value==""||document.getElementById(crd2).value.search(P)>=0||document.getElementById(crd1).value=="K"){
				if(document.getElementById(crd3).value==""||document.getElementById(crd3).value.search(P)>=0||document.getElementById(crd1).value=="K"){
					document.getElementById(Crd).value=Q;SetCrd[Turn]=Crd;SymCheck=1
				}
			}
		}
	}
}
}//連線判別
function CleanBoard(){
P="";Q="";Turn=1
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		document.getElementById(String.fromCharCode(cd1)+cd2).value=""
		document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor="white"
		document.getElementById(String.fromCharCode(cd1)+cd2).style.color="black"
	}
}document.getElementById('OFD').type="Hidden"
if(document.getElementById('OFD').value!=""){Creator((document.getElementById('OFD').value));Reader(document.getElementById('OFD').value)}
document.getElementById("Undo").value="Undo("+(Turn-1)+")";document.body.scrollTop=0;TimeCount=0;Counter()
}//清除棋盤內容
function Writer(){
var Sym=""
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="")Sym=Sym+cd1+""+cd2+"2 "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="O ")Sym=Sym+cd1+""+cd2+"03 "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="X ")Sym=Sym+cd1+""+cd2+"13 "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Sym=Sym+cd1+""+cd2+"0"
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Sym=Sym+cd1+""+cd2+"1"
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="green")Sym=Sym+"1 "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="coral")Sym=Sym+"2 "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="red")Sym=Sym+"a "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="orange")Sym=Sym+"b "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="gold")Sym=Sym+"c "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="seagreen")Sym=Sym+"d "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="blue")Sym=Sym+"e "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="purple")Sym=Sym+"f "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="deeppink")Sym=Sym+"g "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="slateblue")Sym=Sym+"h "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="brown")Sym=Sym+"i "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="orange")Sym=Sym+cd1+""+cd2+"S "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="dimgray")Sym=Sym+cd1+""+cd2+"B "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="lightgray")Sym=Sym+cd1+""+cd2+"P "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="darkgray")Sym=Sym+cd1+""+cd2+"L "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="indianred")Sym=Sym+cd1+""+cd2+"C "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="lightdkyblue")Sym=Sym+cd1+""+cd2+"V "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="crimson")Sym=Sym+cd1+""+cd2+"D "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="royalblue")Sym=Sym+cd1+""+cd2+"K "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="palevioletred")Sym=Sym+cd1+""+cd2+"Q "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="lightsteelblue")Sym=Sym+cd1+""+cd2+"H "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="mediumvioletred")Sym=Sym+cd1+""+cd2+"U "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="steelblue")Sym=Sym+cd1+""+cd2+"Y "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="orchid")Sym=Sym+cd1+""+cd2+"G "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="dodgerblue")Sym=Sym+cd1+""+cd2+"A "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="hotpink")Sym=Sym+cd1+""+cd2+"J "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="feepskyblue")Sym=Sym+cd1+""+cd2+"I "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="firebrick")Sym=Sym+cd1+""+cd2+"E "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="powderblue")Sym=Sym+cd1+""+cd2+"T "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="seagreen")Sym=Sym+cd1+""+cd2+"F "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="gainsboro")Sym=Sym+cd1+""+cd2+"R "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="blueviolet")Sym=Sym+cd1+""+cd2+"N "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="greenYellow")Sym=Sym+cd1+""+cd2+"Z "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="tan")Sym=Sym+cd1+""+cd2+"M "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="darkSlateGray")Sym=Sym+cd1+""+cd2+"W "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="cyan")Sym=Sym+cd1+""+cd2+"O."
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="fuchsia")Sym=Sym+cd1+""+cd2+"X."
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="A")Sym=Sym+"A"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="B")Sym=Sym+"B"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="C")Sym=Sym+"C"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="D")Sym=Sym+"D"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="E")Sym=Sym+"E"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="F")Sym=Sym+"F"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="G")Sym=Sym+"G"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="H")Sym=Sym+"H"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="I")Sym=Sym+"I"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="J")Sym=Sym+"J"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="K")Sym=Sym+"K"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="L")Sym=Sym+"L"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="M")Sym=Sym+"M"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="N")Sym=Sym+"N"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="P")Sym=Sym+"P"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Q")Sym=Sym+"Q"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="R")Sym=Sym+"R"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="S")Sym=Sym+"S"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="T")Sym=Sym+"T"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="U")Sym=Sym+"U"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="V")Sym=Sym+"V"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="W")Sym=Sym+"W"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Y")Sym=Sym+"Y"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Z")Sym=Sym+"Z"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==")|(")Sym=Sym+"Wx"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="ϝ")Sym=Sym+"Wp"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="ϡ")Sym=Sym+"Wk"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Ξ")Sym=Sym+"Ws"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Φ")Sym=Sym+"Wb"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Θ")Sym=Sym+"Wd"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Ψ")Sym=Sym+"Wf"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Λ")Sym=Sym+"Wl"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="δ")Sym=Sym+"Wg"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==")|( ")Sym=Sym+"Wx"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="ϝ ")Sym=Sym+"Wp"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="ϡ ")Sym=Sym+"Wk"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Ξ ")Sym=Sym+"Ws"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Φ ")Sym=Sym+"Wb"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Θ ")Sym=Sym+"Wd"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Ψ ")Sym=Sym+"Wf"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Λ ")Sym=Sym+"Wl"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="δ ")Sym=Sym+"Wg"+cd1+""+cd2+"u "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="Maroon")Sym=Sym+"O"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="Olive")Sym=Sym+"X"+cd1+""+cd2+" "
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="maroon"){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value.search(" ")<0){
				document.getElementById(String.fromCharCode(cd1)+cd2).value=document.getElementById(String.fromCharCode(cd1)+cd2).value+" "
			}
		}
	}Sym=Sym+" "
};Sym=Sym+"<T:"+Turn+">";Board[Turn]=Sym
}//輸出棋盤內容
function Reader(Cmd){
for(T1=1;T1<100;T1++){
	if(Cmd.search("T<"+T1+",")>=0){TurnStart=T1}
	if(Cmd.search(","+T1+">")>=0){TurnEnd=T1}
	if(Cmd.search("<T:"+T1+">")>=0){Turn=T1}
	if(Cmd.search("<S:"+T1+">")>=0){TotalScore=T1}
	if(Cmd.search("<DA:"+T1+">")>=0){DAct=T1-1}
	if(Cmd.search("<TA:"+T1+">")>=0){TAct=T1-1}
}
Cmd=Cmd+" "
for(C=65;C<91;C++){
	for(cd1=65;cd1<74;cd1++){
		if(Cmd.search(cd1+"N"+String.fromCharCode(C))>=0){
			for(cd2=1;cd2<10;cd2++){
				Cmd=Cmd+cd1+""+cd2+String.fromCharCode(C)+" "
			}
		}
		if(Cmd.search(String.fromCharCode(C)+cd1+"N")>=0){
			for(cd2=1;cd2<10;cd2++){
				Cmd=Cmd+cd1+""+cd2+String.fromCharCode(C)+" "
			}
		}
	}
	for(cd2=1;cd2<10;cd2++){
		if(Cmd.search("TT"+cd2+String.fromCharCode(C))>=0){
			for(cd1=65;cd1<74;cd1++){
				Cmd=Cmd+cd1+""+cd2+String.fromCharCode(C)+" "
			}
		}
		if(Cmd.search(String.fromCharCode(C)+"TT"+cd2)>=0){
			for(cd1=65;cd1<74;cd1++){
				Cmd=Cmd+cd1+""+cd2+String.fromCharCode(C)+" "
			}
		}
	}
}
for(S=0;S<3;S++){
	for(C=97;C<106;C++){
		for(cd1=65;cd1<74;cd1++){
			if(Cmd.search(cd1+"N"+""+S+String.fromCharCode(C))>=0){
				for(cd2=1;cd2<10;cd2++){
					Cmd=Cmd+cd1+""+cd2+S+String.fromCharCode(C)+" "
				}
			}
		}
		for(cd2=1;cd2<10;cd2++){
			if(Cmd.search("TT"+cd2+""+S+String.fromCharCode(C))>=0){
				for(cd1=65;cd1<74;cd1++){
					Cmd=Cmd+cd1+""+cd2+S+String.fromCharCode(C)+" "
				}
			}
		}
	}
}
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(Cmd.search("undo")>=0)ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"2")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value=""
		if(Cmd.search(cd1+""+cd2+"S")>=0)ItemSet("black","orange","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"B")>=0)ItemSet("black","dimgray"," ",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"N")>=0)ItemSet("black","blueviolet","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"Z")>=0)ItemSet("black","greenyellow","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"P")>=0)ItemSet("black","lightgray","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"L")>=0)ItemSet("black","darkgray","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"R")>=0)ItemSet("black","gainsboro","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"F")>=0)ItemSet("black","seagreen","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"M")>=0)ItemSet("black","tan","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"W")>=0)ItemSet("black","darkslategray","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"C")>=0)ItemSet("black","indianred","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"V")>=0)ItemSet("black","lightskyblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"D")>=0)ItemSet("black","crimson","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"K")>=0)ItemSet("black","royalblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"Q")>=0)ItemSet("black","palevioletred","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"H")>=0)ItemSet("black","lightsteelblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"U")>=0)ItemSet("black","mediumvioletred","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"Y")>=0)ItemSet("black","steelblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"G")>=0)ItemSet("black","orchid","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"A")>=0)ItemSet("black","dodgerblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"J")>=0)ItemSet("black","hotpink","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"I")>=0)ItemSet("black","deepskyblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"E")>=0)ItemSet("black","firebrick","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"T")>=0)ItemSet("black","powderblue","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"O")>=0)ItemSet("black","cyan","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"X")>=0)ItemSet("black","fuchsia","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search(cd1+""+cd2+"0")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value=O
		if(Cmd.search(cd1+""+cd2+"1")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value=X
		if(Cmd.search(cd1+""+cd2+"01")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="green"
		if(Cmd.search(cd1+""+cd2+"11")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="green"
		if(Cmd.search(cd1+""+cd2+"02")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="coral"
		if(Cmd.search(cd1+""+cd2+"12")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="coral"
		if(Cmd.search(cd1+""+cd2+"03")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="maroon"
		if(Cmd.search(cd1+""+cd2+"13")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="maroon"
		if(Cmd.search(cd1+""+cd2+"0a")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="red"
		if(Cmd.search(cd1+""+cd2+"1a")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="red"
		if(Cmd.search(cd1+""+cd2+"0b")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="orange"
		if(Cmd.search(cd1+""+cd2+"1b")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="orange"
		if(Cmd.search(cd1+""+cd2+"0c")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="gold"
		if(Cmd.search(cd1+""+cd2+"1c")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="gold"
		if(Cmd.search(cd1+""+cd2+"0d")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="seagreen"
		if(Cmd.search(cd1+""+cd2+"1d")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="seagreen"
		if(Cmd.search(cd1+""+cd2+"0e")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="blue"
		if(Cmd.search(cd1+""+cd2+"1e")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="blue"
		if(Cmd.search(cd1+""+cd2+"0f")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="purple"
		if(Cmd.search(cd1+""+cd2+"1f")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="purple"
		if(Cmd.search(cd1+""+cd2+"0g")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="deeppink"
		if(Cmd.search(cd1+""+cd2+"1g")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="deeppink"
		if(Cmd.search(cd1+""+cd2+"0h")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="slateblue"
		if(Cmd.search(cd1+""+cd2+"1h")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="slateblue"
		if(Cmd.search(cd1+""+cd2+"0i")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="brown"
		if(Cmd.search(cd1+""+cd2+"1i")>=0)document.getElementById(String.fromCharCode(cd1)+cd2).style.color="brown"
		if(Cmd.search("A"+cd1+""+cd2)>=0)ItemSet("white","indigo","Azaga",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("B"+cd1+""+cd2)>=0)ItemSet("red","darkred","Bilaz",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("C"+cd1+""+cd2)>=0)ItemSet("blueViolet","indigo","Catra",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("D"+cd1+""+cd2)>=0)ItemSet("red","dimgray","Diaxu",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("E"+cd1+""+cd2)>=0)ItemSet("navy","white","Esomo",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("F"+cd1+""+cd2)>=0)ItemSet("skyblue","blue","Fixia",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("G"+cd1+""+cd2)>=0)ItemSet("darkgray","gray","Guris",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("H"+cd1+""+cd2)>=0&&Cmd.search("Crt.H.Act")>=0){}else{
			if(Cmd.search("H"+cd1+""+cd2)==0)ItemSet("oliveDrab","darkolivegreen","Haber",String.fromCharCode(cd1)+cd2)
		}
		if(Cmd.search("I"+cd1+""+cd2)>=0)ItemSet("white","silver","Ibers",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("J"+cd1+""+cd2)>=0)ItemSet("crimson","darkgreen","Junky",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("K"+cd1+""+cd2)>=0)ItemSet("dimgray","white","Kiase",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("L"+cd1+""+cd2)>=0)ItemSet("lime","darkgreen","Luqus",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("M"+cd1+""+cd2)>=0)ItemSet("navy","cornflowerblue","Mokla",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("N"+cd1+""+cd2)>=0)ItemSet("purple","black","Nasos",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("P"+cd1+""+cd2)>=0)ItemSet("dimgray","black","Poken",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("Q"+cd1+""+cd2)>=0)ItemSet("white","white","Quare",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("R"+cd1+""+cd2)>=0)ItemSet("gold","darkorange","Rader",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("S"+cd1+""+cd2)>=0)ItemSet("black","white","Sinbo",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("T"+cd1+""+cd2)>=0)ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("U"+cd1+""+cd2)>=0)ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("V"+cd1+""+cd2)>=0)ItemSet("brown","darkorange","Vitor",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("W"+cd1+""+cd2)>=0)ItemSet("purple","pink","Waler",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("Y"+cd1+""+cd2)>=0)ItemSet("white","deeppink","Yokla",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("Z"+cd1+""+cd2)>=0)ItemSet("red","black","Zager",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("O"+cd1+""+cd2)>=0)ItemSet("red","maroon","Oxdra",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("X"+cd1+""+cd2)>=0)ItemSet("yellow","olive","Xomud",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("Wx"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value=")|("
		if(Cmd.search("Wb"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="Φ"
		if(Cmd.search("Wd"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="Θ"
		if(Cmd.search("Wl"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="Λ"
		if(Cmd.search("Wp"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="ϝ"
		if(Cmd.search("Wk"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="ϡ"
		if(Cmd.search("Ws"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="Ξ"
		if(Cmd.search("Wf"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="Ψ"
		if(Cmd.search("Wg"+cd1+""+cd2)>=0)document.getElementById(String.fromCharCode(cd1)+cd2).value="δ"
		if(Cmd.search(cd1+""+cd2+"u")>=0){
			document.getElementById(String.fromCharCode(cd1)+cd2).style.color="maroon"
			document.getElementById(String.fromCharCode(cd1)+cd2).value=document.getElementById(String.fromCharCode(cd1)+cd2).value+" "
		}
	}
}
}//輸入棋盤內容
function Creator(Cmd){
if(Cmd.search("Ara.prt")>=0){var Ara
	for(C=3;C<10;C++){if(Cmd.search("Ara.prt<"+C+">")>=0)Ara=C}
	ItemSet("black","crimson","","A1")
	ItemSet("black","orange","","E9")
	ItemSet("black","dodgerblue","","I2")
	if(Ara>3)ItemSet("black","seagreen","","F4")
	if(Ara>4)ItemSet("black","blueviolet","","C5")
	if(Ara>5)ItemSet("black","fuchsia","","H8")
	if(Ara>6)ItemSet("black","tan","","D7")
	if(Ara>7)ItemSet("black","lightgray","","B3")
	if(Ara>8)ItemSet("black","greenyellow","","G6")
	var chk=0
	while(chk>=0){chk=0
		for(cd1=65;cd1<74;cd1++){
			for(cd2=1;cd2<10;cd2++){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="white")chk++
			}
		}
		if(chk==0)break
		Random(9,65,9,1)
		if(document.getElementById(r1+r2).style.backgroundColor=="white"){
			if(document.getElementById(r1+(r2+1))&&document.getElementById(r1+(r2+1)).style.backgroundColor!="white"){
				document.getElementById(r1+r2).style.backgroundColor=document.getElementById(r1+(r2+1)).style.backgroundColor
			}
			if(document.getElementById(r1+(r2-1))&&document.getElementById(r1+(r2-1)).style.backgroundColor!="white"){
				document.getElementById(r1+r2).style.backgroundColor=document.getElementById(r1+(r2-1)).style.backgroundColor
			}
			if(document.getElementById(String.fromCharCode(r1.charCodeAt(r1)+1)+r2)&&document.getElementById(String.fromCharCode(r1.charCodeAt(r1)+1)+r2).style.backgroundColor!="white"){
				document.getElementById(r1+r2).style.backgroundColor=document.getElementById(String.fromCharCode(r1.charCodeAt(r1)+1)+r2).style.backgroundColor
			}
			if(document.getElementById(String.fromCharCode(r1.charCodeAt(r1)-1)+r2)&&document.getElementById(String.fromCharCode(r1.charCodeAt(r1)-1)+r2).style.backgroundColor!="white"){
				document.getElementById(r1+r2).style.backgroundColor=document.getElementById(String.fromCharCode(r1.charCodeAt(r1)-1)+r2).style.backgroundColor
			}
		}
	}
}
for(C=1;C<=99;C++){
	if(Cmd.search("Crt.J.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("crimson","darkgreen","",r1+r2)}
	if(Cmd.search("Crt.G.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("darkgray","gray","Guris",r1+r2)}
	if(Cmd.search("Crt.S.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","white","Sinbo",r1+r2)}
	if(Cmd.search("Crt.E.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("navy","white","Esomo",r1+r2)}
	if(Cmd.search("Crt.M.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("navy","cornflowerblue","Mokla",r1+r2)}
	if(Cmd.search("Crt.K.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("dimgray","white","Kiase",r1+r2)}
	if(Cmd.search("Ara.P.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","lightgray","",r1+r2)}
	if(Cmd.search("Ara.S.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","orange","",r1+r2)}
	if(Cmd.search("Ara.F.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","seagreen","",r1+r2)}
	if(Cmd.search("Ara.M.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","tan","",r1+r2)}
	if(Cmd.search("Ara.B.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","dimgray"," ",r1+r2)}
	if(Cmd.search("Ara.L.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","darkgray","",r1+r2)}
	if(Cmd.search("Ara.R.Rnd<"+C+">")>=0)for(g=1;g<=C;g++){Random(9,65,9,1);ItemSet("black","gainsboro","",r1+r2)}
}
if(Cmd.search("Ara.W.Rnd")>=0){Random(9,65,9,1);ItemSet("black","darkslategray","",r1+r2)}
if(Cmd.search("Ara.N.Rnd")>=0){Random(9,65,9,1);ItemSet("black","blueviolet","",r1+r2)}
if(Cmd.search("Ara.Z.Rnd")>=0){Random(9,65,9,1);ItemSet("black","greenyellow","",r1+r2)}
if(Cmd.search("Crt.C.Rnd")>=0){Random(9,65,9,1);ItemSet("blueviolet","indigo","Catra",r1+r2)}
if(Cmd.search("Crt.W.Rnd")>=0){Random(9,65,9,1);ItemSet("purple","pink","Waler",r1+r2)}
if(Cmd.search("Crt.Y.Rnd")>=0){Random(9,65,9,1);ItemSet("white","deeppink","Yokla",r1+r2)}
if(Cmd.search("Crt.D.Rnd")>=0){Random(9,65,9,1);ItemSet("red","dimgray","Diaxu",r1+r2)}
if(Cmd.search("Crt.T.Rnd")>=0){Random(9,65,9,1);ItemSet("steelblue","skyblue","Tiafu",r1+r2)}
if(Cmd.search("Crt.O.Rnd")>=0){Random(9,65,9,1);ItemSet("red","maroon","Oxdra",r1+r2)}
if(Cmd.search("Crt.X.Rnd")>=0){Random(9,65,9,1);ItemSet("yellow","olive","Xomud",r1+r2)}
if(Cmd.search("Sym.Rnd")>=0){var s
	Random(9,65,9,1);s=r1+r2;document.getElementById(s).value=O;Random(9,65,9,1)
	if(s!=r1+r2)document.getElementById(r1+r2).value=X
}
}//創建棋盤結構
function BasicRule(){
if(Turn>2){
var spc
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(document.getElementById(String.fromCharCode(cd1)+cd2)){
				var Crd=String.fromCharCode(cd1)+""+cd2
				var crd1=Crd.charCodeAt(Crd.substr(0,1)),crd2=parseInt(Crd.substr(1,1))
				var F=String.fromCharCode(crd1-1)+crd2,B=String.fromCharCode(crd1+1)+crd2
				var R=String.fromCharCode(crd1)+(crd2+1),L=String.fromCharCode(crd1)+(crd2-1)
				var FR=String.fromCharCode(crd1-1)+(crd2+1),FL=String.fromCharCode(crd1-1)+(crd2-1)
				var BR=String.fromCharCode(crd1+1)+(crd2+1),BL=String.fromCharCode(crd1+1)+(crd2-1)
				if(document.getElementById(Crd).value==""){
					if(document.getElementById(F)){if(document.getElementById(F).value==O)OArea++}
					if(document.getElementById(B)){if(document.getElementById(B).value==O)OArea++}
					if(document.getElementById(R)){if(document.getElementById(R).value==O)OArea++}
					if(document.getElementById(L)){if(document.getElementById(L).value==O)OArea++}
					if(document.getElementById(FR)){if(document.getElementById(FR).value==O)OArea++}
					if(document.getElementById(FL)){if(document.getElementById(FL).value==O)OArea++}
					if(document.getElementById(BR)){if(document.getElementById(BR).value==O)OArea++}
					if(document.getElementById(BL)){if(document.getElementById(BL).value==O)OArea++}
					if(document.getElementById(F)){if(document.getElementById(F).value==X)XArea++}
					if(document.getElementById(B)){if(document.getElementById(B).value==X)XArea++}
					if(document.getElementById(R)){if(document.getElementById(R).value==X)XArea++}
					if(document.getElementById(L)){if(document.getElementById(L).value==X)XArea++}
					if(document.getElementById(FR)){if(document.getElementById(FR).value==X)XArea++}
					if(document.getElementById(FL)){if(document.getElementById(FL).value==X)XArea++}
					if(document.getElementById(BR)){if(document.getElementById(BR).value==X)XArea++}
					if(document.getElementById(BL)){if(document.getElementById(BL).value==X)XArea++}
					spc++
				}
			}
		}
	}
if(spc==0)Winner("雙方皆無法設置符號，平手")
if(Turn>2){
if(OArea==0&&XArea==0){
	Winner("雙方皆無法設置符號，平手")
}else{
if(OArea==0)Winner("O無法繼續設置符號，X獲勝")
if(XArea==0)Winner("X無法繼續設置符號，O獲勝")
}
}
spc=0;OArea=0;XArea=0
}
}//基礎規則
function AreaRule(){
var Cmd=document.getElementById('OFD').value
if(Cmd.search("Rul.Ara")>=0){
	if(Cmd.search("Rul.Ara.prt")>=0){
		BasicRule();AreaRulePart()
	}else{
		if(Cmd.search("Rul.Ara.tgt")>=0){
			AreaRuleTarget(Cmd)
		}else{
			AreaRuleMulti(Cmd)
		}
	}
}else{
	var Area_K=0,AreaK=0,Area_D=0,AreaD=0
	var Area_I=0,AreaI=0,Area_J=0,AreaJ=0
	var Area_H=0,AreaH=0,Area_Q=0,AreaQ=0
	var Area_E=0,Area_T=0
	var ScoreO=0,ScoreX=0,Score=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="firebrick")Area_E++
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="powderblue")Area_T++
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="lightgray"){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O設置符號於禁區，X獲勝")
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X設置符號於禁區，O獲勝")
			}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O||document.getElementById(String.fromCharCode(cd1)+cd2).value==X){
			var ClearBoard=0,ClearBoardType=""
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="darkgray")ClearBoard=1;ClearBoardType="C"
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="firebrick"&&document.getElementById(String.fromCharCode(cd1)+cd2).value==O)ClearBoard=1;ClearBoardType="C"
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="powderblue"&&document.getElementById(String.fromCharCode(cd1)+cd2).value==X)ClearBoard=1;ClearBoardType="C"
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="blueviolet")ClearBoard=1;ClearBoardType="G"
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="greenyellow")ClearBoard=1;ClearBoardType=ClearBoardType+"S"
	if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="darkslategray")ClearBoard=1;ClearBoardType=ClearBoardType+"T"
	if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="fuchsia")ClearBoard=1;ClearBoardType=ClearBoardType+"K"
			if(ClearBoard==1){
			for(cr1=65;cr1<74;cr1++){
				for(cr2=1;cr2<10;cr2++){
					if(ClearBoardType.search("C")>=0&&document.getElementById(String.fromCharCode(cr1)+cr2).style.backgroundColor=="white"&&document.getElementById(String.fromCharCode(cr1)+cr2).style.color=="black")document.getElementById(String.fromCharCode(cr1)+cr2).value=""
				if(ClearBoardType.search("G")>=0&&document.getElementById(String.fromCharCode(cr1)+cr2).style.backgroundColor=="gray")ItemSet("black","white","",String.fromCharCode(cr1)+cr2)
				if(ClearBoardType.search("S")>=0&&document.getElementById(String.fromCharCode(cr1)+cr2).style.backgroundColor=="seagreen")ItemSet("black","white","",String.fromCharCode(cr1)+cr2)
				if(ClearBoardType.search("T")>=0&&document.getElementById(String.fromCharCode(cr1)+cr2).style.backgroundColor=="tan")ItemSet("black","white","",String.fromCharCode(cr1)+cr2)
				if(ClearBoardType.search("K")>=0){
				if(document.getElementById(String.fromCharCode(cr1)+cr2).style.backgroundColor=="olive"&&document.getElementById(String.fromCharCode(cr1)+cr2).value=="X")ItemSet("black","white","",String.fromCharCode(cr1)+cr2)
				if(document.getElementById(String.fromCharCode(cr1)+cr2).style.backgroundColor=="maroon"&&document.getElementById(String.fromCharCode(cr1)+cr2).value=="O")ItemSet("black","white","",String.fromCharCode(cr1)+cr2)
					}
				}
				
			}
			document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor="white"
			}
			}	
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="royalblue"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O設置符號於X封限區，O獲勝")
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)AreaK++;Area_K++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="crimson"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X設置符號於O封限區，X獲勝")
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)AreaD++;Area_D++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="deepskyblue"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)AreaI++;Area_I++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="hotpink"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)AreaJ++;Area_J++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="lightskyblue"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O設置符號於X禁區，O獲勝")
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X設置符號於X禁區，O獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="indianred"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O設置符號於O禁區，X獲勝")
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X設置符號於O禁區，X獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="lightsteelblue"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)AreaH++;Area_H++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="palevioletred"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)AreaQ++;Area_Q++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="steelblue"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O設置符號於X限區，O獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="mediumvioletred"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X設置符號於O限區，X獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="dodgerblue"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X設置符號於X防區，X獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="orchid"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O設置符號於O防區，O獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="cyan"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)ItemSet("red","maroon","Oxdra",String.fromCharCode(cd1)+cd2)
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)ItemSet("yellow","olive","Xomud",String.fromCharCode(cd1)+cd2)
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="orange"){
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)ScoreO++
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)ScoreX++
		Score++
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="tan"&&document.getElementById(String.fromCharCode(cd1)+cd2).value!=""){
		var Txt=document.getElementById(String.fromCharCode(cd1)+cd2).value
		CircleCrt("darkgray","gray","Guris",String.fromCharCode(cd1)+cd2)
		ItemSet("black","tan",Txt,String.fromCharCode(cd1)+cd2)
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="gainsboro"){Random(9, 64, 8, 1)
		ItemSet("black","white",document.getElementById(String.fromCharCode(cd1)+cd2).value,r1+r2)
		document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor="white"
		}
		}
	}
	if(Turn>3){
	if(Area_H>1&&Area_Q>1){
	if(AreaQ==Area_Q)Winner("O將自己封區全數填滿，X獲勝")
	if(AreaH==Area_H)Winner("X將自己封區全數填滿，O獲勝")
	}
	if(Area_E+10<Area_T)Winner("X取得區域較多，X獲勝")
	if(Area_T+10<Area_E)Winner("O取得區域較多，O獲勝")
	if(TotalScore!=0){
		if(TotalScore==ScoreX)Winner("X得分較高，X獲勝")
		if(TotalScore==ScoreO)Winner("O得分較高，O獲勝")
	}else{
		if(Score>2){
			if(Score%2==0){
				if(ScoreO+2==ScoreX)Winner("X得分較高，X獲勝")
				if(ScoreX+2==ScoreO)Winner("O得分較高，O獲勝")
			}else{
				if(ScoreO+1<ScoreX)Winner("X得分較高，X獲勝")
				if(ScoreX+1<ScoreO)Winner("O得分較高，O獲勝")
			}
		}else{
			if(Score<2&&Score>0){
				if(ScoreO==Score)Winner("O得分較高，O獲勝")
				if(ScoreX==Score)Winner("X得分較高，X獲勝")
			}
		}
	}
	if(Area_K>1&&Area_D>1){
		if(AreaD==Area_D)Winner("O將自己封限區全數填滿，X獲勝")
		if(AreaK==Area_K)Winner("X將自己封限區全數填滿，O獲勝")
	}
	if(Area_I>1&&Area_J>1){
		if(AreaJ==Area_J)Winner("O將自己聯區全數填滿，O獲勝")
		if(AreaI==Area_I)Winner("X將自己聯區全數填滿，X獲勝")
	}
	}
}
}//區域規則
function AreaRuleMulti(Cmd){
var ScoreO=0,ScoreX=0
var Multi=new Array(), Score=new Array()
for(Ara=1;Ara<26;Ara++){var C=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor!="white"){var cks = 0
				for(Ars=1;Ars<26;Ars++){
					if(Multi[Ars]==document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor){cks=1;break}
				}
				if(cks==0){C++;Multi[Ara+C]=document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor}
			}
		}
	}
}
for(Ara=1;Ara<26;Ara++){var OAra=0,XAra=0;Score[Ara]=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor!="white"){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor==Multi[Ara]){Score[Ara]++
					if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)OAra++
					if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)XAra++
				}
			}
		}
	}
if(Score[Ara]!=0&&Score[Ara]==OAra)ScoreO++
if(Score[Ara]!=0&&Score[Ara]==XAra)ScoreX++
}
if(Cmd.search("Rul.Ara.scr")>=0){
	if(TotalScore!=0){
		if(TotalScore==ScoreX)Winner("X得分較高，X獲勝")
		if(TotalScore==ScoreO)Winner("O得分較高，O獲勝")
	}else{
		if(ScoreO+2==ScoreX)Winner("X得分較高，X獲勝")
		if(ScoreX+2==ScoreO)Winner("O得分較高，O獲勝")
	}
}else{
	if(ScoreX==1)Winner("X優先取得一區，X獲勝")
	if(ScoreO==1)Winner("O優先取得一區，O獲勝")
}
}//區域規則(多區)
function AreaRulePart(){
var Part=["crimson","orange","seagreen","dodgerblue","blueviolet","fuchsia","tan","lightgray","greenyellow"]
var OsA,XsA,SsA
for(C=0;C<10;C++){OsA=0;XsA=0;SsA=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor==Part[C]){SsA++
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)OsA++
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)XsA++
			}
		}
	}
	if(SsA==OsA+XsA&&OsA>0&&XsA>0){
		for(cd1=65;cd1<74;cd1++){
			for(cd2=1;cd2<10;cd2++){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor==Part[C])document.getElementById(String.fromCharCode(cd1)+cd2).value=""
			}
		}
	}
}
}//區域規則(區塊)
function AreaRuleTarget(Cmd){
for(C=0;C<10;C++){
	var OsA=0,XsA=0,SsA=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(Cmd.search("-"+String.fromCharCode(cd1)+cd2+":"+C)>=0){SsA++
				if(Cmd.search(O+"-"+String.fromCharCode(cd1)+cd2+":"+C)>=0&&document.getElementById(String.fromCharCode(cd1)+cd2).value==O)OsA++
				if(Cmd.search(X+"-"+String.fromCharCode(cd1)+cd2+":"+C)>=0&&document.getElementById(String.fromCharCode(cd1)+cd2).value==X)XsA++
			}
		}
	}
	if(SsA>0&&SsA==OsA+XsA){if(Cmd.search("tgt-"+O+":"+C)>=0){Winner("OX將指定區域全數填滿，O獲勝")}else{Winner("OX將指定區域全數填滿，X獲勝")}}
}
}//區域規則(目標)
function CharaterRule(){
var Cmd=document.getElementById('OFD').value
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		var Crd=SetCrd[Turn-1]
        if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="darkgreen"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="crimson"){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O)Winner("O觸動食人怪，X獲勝")
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X)Winner("X觸動食人怪，O獲勝")
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="E"){
		if(Crd==String.fromCharCode(cd1)+(cd2-1))CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1)+(cd2+1))CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+cd2)CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+cd2)CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+(cd2-1))CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+(cd2+1))CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+(cd2+1))CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+(cd2-1))CircleSym(document.getElementById(Crd).value,String.fromCharCode(cd1)+cd2)
		ItemSet("navy","white","Esomo",String.fromCharCode(cd1)+cd2)
		}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="O"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="maroon"){
		if(Crd==String.fromCharCode(cd1+1)+parseInt(cd2-1))CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+parseInt(cd2+1))CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+cd2)CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+cd2)CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+(cd2-1))CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+(cd2+1))CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+(cd2+1))CircleSym("O",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+(cd2-1))CircleSym("O",String.fromCharCode(cd1)+cd2)
		ItemSet("red","maroon","Oxdra",String.fromCharCode(cd1)+cd2)
     	}
		if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="X"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="olive"){
		if(Crd==String.fromCharCode(cd1+1)+parseInt(cd2-1))CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+parseInt(cd2+1))CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+cd2)CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+cd2)CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+(cd2-1))CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+(cd2+1))CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1+1)+(cd2+1))CircleSym("X",String.fromCharCode(cd1)+cd2)
		if(Crd==String.fromCharCode(cd1-1)+(cd2-1))CircleSym("X",String.fromCharCode(cd1)+cd2)
		ItemSet("yellow","olive","Xomud",String.fromCharCode(cd1)+cd2)
		}
	}
}
if(Turn>=TurnStart&&Turn<=TurnEnd){
var CrtC=0,CrtW=0,CrtT=0,CrtQ=0
if(TurnCount==TAct)TurnCount=0;TurnCount++
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(Turn==TurnEnd)if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="M")document.getElementById(String.fromCharCode(cd1)+cd2).value=""
				if(Cmd.search("H"+cd1+cd2)>=0){
					if(Cmd.search("Crt.H.Act<T>")>=0){
						switch(TurnCount){
							case 1:
								ItemSet("black","white","",String.fromCharCode(cd1-1)+(cd2+1))
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1)+(cd2+1));break
							case 2:
								ItemSet("black","white","",String.fromCharCode(cd1)+(cd2+1))
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1+1)+(cd2+1));break
							case 3:
								ItemSet("black","white","",String.fromCharCode(cd1+1)+(cd2+1))
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1+1)+cd2);break
							case 4:
								ItemSet("black","white","",String.fromCharCode(cd1+1)+cd2)
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1+1)+(cd2-1));break
							case 5:
								ItemSet("black","white","",String.fromCharCode(cd1+1)+(cd2-1))
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1)+(cd2-1));break
							case 6:
								ItemSet("black","white","",String.fromCharCode(cd1)+(cd2-1))
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1-1)+(cd2-1));break
							case 7:
								ItemSet("black","white","",String.fromCharCode(cd1-1)+(cd2-1))
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1-1)+cd2);break
							case 8:
								ItemSet("black","white","",String.fromCharCode(cd1-1)+cd2)
								ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1-1)+(cd2+1));break
						}
					}
					if(Cmd.search("Crt.H.Act<R>")>=0){
						switch(TurnCount){
							case 1:
							ItemSet("black","white","",String.fromCharCode(cd1+1)+(cd2+1))
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1)+(cd2+1));break
							case 2:
							ItemSet("black","white","",String.fromCharCode(cd1)+(cd2+1))
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1-1)+(cd2+1));break
							case 3:
							ItemSet("black","white","",String.fromCharCode(cd1-1)+(cd2+1))
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1-1)+cd2);break
							case 4:
							ItemSet("black","white","",String.fromCharCode(cd1-1)+cd2)
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1-1)+(cd2-1));break
							case 5:
							ItemSet("black","white","",String.fromCharCode(cd1-1)+(cd2-1))
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1)+(cd2-1));break
							case 6:
							ItemSet("black","white","",String.fromCharCode(cd1)+(cd2-1))
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1+1)+(cd2-1));break
							case 7:
							ItemSet("black","white","",String.fromCharCode(cd1+1)+(cd2-1))
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1+1)+cd2);break
							case 8:
							ItemSet("black","white","",String.fromCharCode(cd1+1)+cd2)
							ItemSet("olivedrab","darkolivegreen","Haber",String.fromCharCode(cd1+1)+(cd2+1));break
						}
					}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="Q"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="black")ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
				if(Cmd.search("Crt.Q.Act>"+String.fromCharCode(cd1)+cd2+":"+TurnCount+">")>=0){
					ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2)
				}
				if(Cmd.search("Crt.Q.Act>"+String.fromCharCode(cd1)+"N:"+TurnCount+">")>=0){
					ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2)
				}
				if(Cmd.search("Crt.Q.Act>T"+cd2+":"+TurnCount+">")>=0){
					ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2)
				}
				if(Cmd.search("Crt.Q.ARd>"+String.fromCharCode(cd1)+cd2+":"+TurnCount+">")>=0){
					if(CrtQ==0){Random(0,0,2,1);if(r2==1){ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2);CrtQ=1}}
				}
				if(Cmd.search("Crt.Q.ARd>"+String.fromCharCode(cd1)+"N:"+TurnCount+">")>=0){
					if(CrtQ==0){Random(0,0,2,1);if(r2==1){ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2);CrtQ=1}}
				}
				if(Cmd.search("Crt.Q.ARd>T"+cd2+":"+TurnCount+">")>=0){
					if(CrtQ==0){Random(0,0,2,1);if(r2==1){ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2);CrtQ=1}}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2)){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value=="F"||document.getElementById(String.fromCharCode(cd1)+cd2).value=="B"||document.getElementById(String.fromCharCode(cd1)+cd2).value=="V"||document.getElementById(String.fromCharCode(cd1)+cd2).value=="Z"||document.getElementById(String.fromCharCode(cd1)+cd2).value=="L"||document.getElementById(String.fromCharCode(cd1)+cd2).value=="R"||document.getElementById(String.fromCharCode(cd1)+cd2).value=="N")ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
				if(Cmd.search("Crt.N.Act")>=0){
					if(document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="black"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="white"){
						var spc=0
						if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2+1)).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2-1)))if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2-1)).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2+1)))if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2+1)).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2-1)))if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2-1)).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1-1)+cd2))if(document.getElementById(String.fromCharCode(cd1-1)+cd2).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value=="")spc++
						if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)).value=="")spc++
						if(spc==8) ItemSet("purple","black","Nasos",String.fromCharCode(cd1)+cd2)
					}
				}
				if(Cmd.search("Crt.T.Act")>=0&&document.getElementById(String.fromCharCode(cd1)+cd2).value=="T"&&CrtT==0){
					var R=Math.round(Math.random()*4)+1;ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
					switch(R){
					case 1:
						if(document.getElementById(String.fromCharCode(cd1+1)+cd2)){
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1+1)+cd2);CrtT=1
						}else{
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+cd2)
						}break
					case 2:
						if(document.getElementById(String.fromCharCode(cd1)+""+parseInt(cd2+1))){
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+parseInt(cd2+1));CrtT=1
						}else{
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+cd2)
						}break
					case 3:
						if(document.getElementById(String.fromCharCode(cd1-1)+cd2)){
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1-1)+cd2);CrtT=1
						}else{
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+cd2)
						}break
					case 4:
						if(document.getElementById(String.fromCharCode(cd1)+""+parseInt(cd2-1))){
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+parseInt(cd2-1));CrtT=1
						}else{
						ItemSet("steelblue","skyblue","Tiafu",String.fromCharCode(cd1)+cd2)
						}break
					}
				}
				if(Cmd.search("Crt.C.Act")>=0&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="indigo"&&CrtC==0){
				var R=Math.round(Math.random()*8)+1
					switch(R){
					case 1:
					if(document.getElementById(String.fromCharCode(cd1)+parseInt(cd2+1))){
					if(document.getElementById(String.fromCharCode(cd1)+parseInt(cd2+1)).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1)+parseInt(cd2+1));CrtC=1}break
					}
					case 2:
					if(document.getElementById(String.fromCharCode(cd1)+parseInt(cd2-1))){
					if(document.getElementById(String.fromCharCode(cd1)+parseInt(cd2-1)).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1)+parseInt(cd2-1));CrtC=1}break
					}
					case 3:
					if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2-1))){
					if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2-1)).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1+1)+parseInt(cd2-1));CrtC=1}break
					}
					case 4:
					if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2-1))){
					if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2-1)).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1-1)+parseInt(cd2-1));CrtC=1}break
					}
					case 5:
					if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2+1))){
					if(document.getElementById(String.fromCharCode(cd1+1)+parseInt(cd2+1)).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1+1)+parseInt(cd2+1));CrtC=1}break
					}
					case 6:
					if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2+1))){
					if(document.getElementById(String.fromCharCode(cd1-1)+parseInt(cd2+1)).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1-1)+parseInt(cd2+1));CrtC=1}break
					}
					case 7:
					if(document.getElementById(String.fromCharCode(cd1+1)+cd2)){
					if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1+1)+cd2);CrtC=1}break
					}
					case 8:
					if(document.getElementById(String.fromCharCode(cd1-1)+cd2)){
					if(document.getElementById(String.fromCharCode(cd1-1)+cd2).value==""){ItemSet("white","indigo","Azaga",String.fromCharCode(cd1-1)+cd2);CrtC=1}break
					}
					}
				}
				if(Cmd.search("Crt.W.Act")>=0&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="pink"&&CrtW==0){
				var R=Math.round(Math.random()*4)+1
					switch(R){
					case 1:
					if(document.getElementById(String.fromCharCode(cd1)+parseInt(cd2+1))){ItemSet("purple","pink","Waler",String.fromCharCode(cd1)+parseInt(cd2+1));CrtW=1}break
					case 2:
					if(document.getElementById(String.fromCharCode(cd1)+parseInt(cd2-1))){ItemSet("purple","pink","Waler",String.fromCharCode(cd1)+parseInt(cd2-1));CrtW=1}break
					case 3:
					if(document.getElementById(String.fromCharCode(cd1+1)+cd2)){ItemSet("purple","pink","Waler",String.fromCharCode(cd1+1)+cd2);CrtW=1}break
					case 4:
					if(document.getElementById(String.fromCharCode(cd1-1)+cd2)){ItemSet("purple","pink","Waler",String.fromCharCode(cd1-1)+cd2);CrtW=1}break
					}
				}
			}
		}
	}
	for(C=1;C<100;C++){
		if(Cmd.search("Crt.V.Act<"+C+">")>=0){
			for(g=1;g<=C;g++){Random(9,65,9,1)
			if(document.getElementById(r1+r2).value==""&&document.getElementById(r1+r2).style.backgroundColor=="white"&&document.getElementById(r1+r2).style.color=="black")ItemSet("brown","darkorange","Vitor",r1+r2)
			}
		}
		if(Cmd.search("Crt.Z.Act<"+C+">")>=0){
			for(g=1;g<=C;g++){Random(9,65,9,1)
			if(document.getElementById(r1+r2).style.backgroundColor=="white"&&document.getElementById(r1+r2).style.color=="black")ItemSet("red","black","Zager",r1+r2)
			}
		}
	}
	if(Cmd.search("Crt.F.Act")>=0){Random(9,65,9,1)
	if(document.getElementById(r1+r2).value==""&&document.getElementById(r1+r2).style.backgroundColor=="white"&&document.getElementById(r1+r2).style.color=="black")ItemSet("skyblue","blue","Fixia",r1+r2)
	}
	if(Cmd.search("Crt.B.Act")>=0){Random(9,65,9,1)
	if(document.getElementById(r1+r2).style.backgroundColor=="white"&&document.getElementById(r1+r2).style.color=="black")ItemSet("Red","darkRed","Bilaz",r1+r2)
	}
	if(Cmd.search("Crt.L.Act")>=0){Random(9,65,4,1)
	if(document.getElementById(r1+r2).value==""&&document.getElementById(r1+r2).style.backgroundColor=="white"&&document.getElementById(r1+r2).style.color=="black")ItemSet("Lime","darkgreen","Luqus",r1+r2)
	}
	if(Cmd.search("Crt.R.Act")>=0){Random(9,65,4,5)
	if(document.getElementById(r1+r2).style.backgroundColor=="white"&&document.getElementById(r1+r2).style.color=="black")ItemSet("gold","darkorange","Rader",r1+r2)
	}
}
if(Cmd.search("Crt.P.Act")>=0){
	var R=Math.round(Math.random()*8)+1
	switch(R){
		case 1:
		if(document.getElementById('A1').value=="")ItemSet("dimgray","black","Poken","A1");break
		case 2:
		if(document.getElementById('A5').value=="")ItemSet("dimgray","black","Poken","A5");break
		case 3:
		if(document.getElementById('A9').value=="")ItemSet("dimgray","black","Poken","A9");break
		case 4:
		if(document.getElementById('I1').value=="")ItemSet("dimgray","black","Poken","I1");break
		case 5:
		if(document.getElementById('I5').value=="")ItemSet("dimgray","black","Poken","I5");break
		case 6:
		if(document.getElementById('I9').value=="")ItemSet("dimgray","black","Poken","I9");break
		case 7:
		if(document.getElementById('E1').value=="")ItemSet("dimgray","black","Poken","E1");break
		case 8:
		if(document.getElementById('E9').value=="")ItemSet("dimgray","black","Poken","E9");break
	}
}
}//角色規則
function ShapeRule(){
var Cmd=document.getElementById('OFD').value
	var ScoreO=0,ScoreX=0
	for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			if(Cmd.search("Shp.crs")>=0){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O){var ckso=0,cksx=0
				if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1-1)+cd2))if(document.getElementById(String.fromCharCode(cd1-1)+cd2).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1-1)+cd2))if(document.getElementById(String.fromCharCode(cd1-1)+cd2).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==X)cksx++
				if(ckso==4){
					if(Cmd.search("Shp.crs.nml")>=0)Winner("O完成十字形，O獲勝")
					if(Cmd.search("Shp.crs.scr")>=0)ScoreO++
				}
				if(cksx==4){
					if(Cmd.search("Shp.crs.kil")>=0)ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
					if(Cmd.search("Shp.crs.rpl")>=0)ItemSet("black","white","X",String.fromCharCode(cd1)+cd2)
				}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X){var ckso=0,cksx=0
				if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1-1)+cd2))if(document.getElementById(String.fromCharCode(cd1-1)+cd2).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2-1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1-1)+cd2))if(document.getElementById(String.fromCharCode(cd1-1)+cd2).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==X)cksx++
				if(cksx==4){
					if(Cmd.search("Shp.crs.nml")>=0)Winner("X完成十字形，X獲勝")
					if(Cmd.search("Shp.crs.scr")>=0)ScoreX++
				}
				if(ckso==4){
					if(Cmd.search("Shp.crs.kil")>=0)ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
					if(Cmd.search("Shp.crs.rpl")>=0)ItemSet("black","white","O",String.fromCharCode(cd1)+cd2)
				}
				}
			}
			if(Cmd.search("Shp.sqr")>=0){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O){var cks=0
				if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value==O)cks++
				if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==O)cks++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)).value==O)cks++
				if(cks==3){
				if(Cmd.search("Shp.sqr.nml")>=0)Winner("O完成方形，O獲勝")
				if(Cmd.search("Shp.sqr.scr")>=0)ScoreO++
				}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X){var cks=0
				if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+1)).value==X)cks++
				if(document.getElementById(String.fromCharCode(cd1+1)+cd2))if(document.getElementById(String.fromCharCode(cd1+1)+cd2).value==X)cks++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)).value==X)cks++
				if(cks==3){
				if(Cmd.search("Shp.sqr.nml")>=0)Winner("X完成方形，X獲勝")
				if(Cmd.search("Shp.sqr.scr")>=0)ScoreX++
				}
				}
			}
			if(Cmd.search("Shp.X")>=0){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O){var ckso=0,cksx=0
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)).value==X)cksx++
				if(ckso==4){
				if(Cmd.search("Shp.X.nml")>=0)Winner("O完成叉字形，O獲勝")
				if(Cmd.search("Shp.X.scr")>=0)ScoreO++
				}
				if(cksx==4){
				if(Cmd.search("Shp.X.kil")>=0)ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
				if(Cmd.search("Shp.X.rpl")>=0)ItemSet("black","white","X",String.fromCharCode(cd1)+cd2)
				}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X){var ckso=0,cksx=0
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)).value==X)cksx++
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2-1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2+1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)))if(document.getElementById(String.fromCharCode(cd1-1)+(cd2+1)).value==O)ckso++
				if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)))if(document.getElementById(String.fromCharCode(cd1+1)+(cd2-1)).value==O)ckso++
				if(cksx==4){
				if(Cmd.search("Shp.X.nml")>=0)Winner("X完成叉字形，X獲勝")
				if(Cmd.search("Shp.X.scr")>=0)ScoreX++
				}
				if(ckso==4){
				if(Cmd.search("Shp.X.kil")>=0)ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
				if(Cmd.search("Shp.X.rpl")>=0)ItemSet("black","white","O",String.fromCharCode(cd1)+cd2)
				}
				}
			}
			for(c=2;c<10;c++){
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O||document.getElementById(String.fromCharCode(cd1)+cd2).value==X){
				if(Cmd.search("Shp.H.nml<"+c+">")>=0){
				var cks=0
				for(d=1;d<=c-1;d++){
					if(document.getElementById(String.fromCharCode(cd1+d)+cd2))if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==document.getElementById(String.fromCharCode(cd1)+cd2).value)cks++
				}
				if(cks==c-1)Winner(document.getElementById(String.fromCharCode(cd1)+cd2).value+"完成橫線，"+document.getElementById(String.fromCharCode(cd1)+cd2).value+"獲勝")
				}
				if(Cmd.search("Shp.V.nml<"+c+">")>=0){
				var cks=0
				for(d=1;d<=c-1;d++){
					if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)))if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==document.getElementById(String.fromCharCode(cd1)+cd2).value)cks++
				}
				if(cks==c-1)Winner(document.getElementById(String.fromCharCode(cd1)+cd2).value+"完成直線，"+document.getElementById(String.fromCharCode(cd1)+cd2).value+"獲勝")
				}
				if(Cmd.search("Shp.Rh.nml<"+c+">")>=0){
				var cks =0
				for(d=1;d<=c-1;d++){
					if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)))if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==document.getElementById(String.fromCharCode(cd1)+cd2).value)cks++
				}
				if(cks==c-1)Winner(document.getElementById(String.fromCharCode(cd1)+cd2).value+"完成反斜線，"+document.getElementById(String.fromCharCode(cd1)+cd2).value+"獲勝")
				}
				if(Cmd.search("Shp.Sh.nml<"+c+">")>=0){
				var cks=0
				for(d=1;d<=c-1;d++){
					if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)))if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==document.getElementById(String.fromCharCode(cd1)+cd2).value)cks++
				}
				if(cks==c-1)Winner(document.getElementById(String.fromCharCode(cd1)+cd2).value+"完成斜線，"+document.getElementById(String.fromCharCode(cd1)+cd2).value+"獲勝")
				}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==O){
					if(Cmd.search("Shp.H")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
							if(document.getElementById(String.fromCharCode(cd1+d)+cd2)){
								if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==X){cks++}else{typ=document.getElementById(String.fromCharCode(cd1+d)+cd2).value;break}
								}
						}
						if(typ==O){
							for(d=1;d<=cks;d++){
								if(Cmd.search("Shp.H.kil")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==X)document.getElementById(String.fromCharCode(cd1+d)+cd2).value=""
								if(Cmd.search("Shp.H.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==X)ItemSet("maroon","white","X.",String.fromCharCode(cd1+d)+cd2)
								if(Cmd.search("Shp.H.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==X)document.getElementById(String.fromCharCode(cd1+d)+cd2).value=O
							}
						}
					}
					if(Cmd.search("Shp.V")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
						if(document.getElementById(String.fromCharCode(cd1)+(cd2+d))){
							if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==X){cks++}else{typ=document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value;break}
							}
						}
						if(typ==O){
							for(d=1;d<=cks;d++){
								if(Cmd.search("Shp.V.kil")>=0)if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==X)document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value=""
								if(Cmd.search("Shp.V.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==X)ItemSet("maroon","white","X.",String.fromCharCode(cd1)+(cd2+d))
								if(Cmd.search("Shp.V.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==X)document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value=O
								}
						}
					}
					if(Cmd.search("Shp.Rh")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
							if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d))){
								if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==X){cks++}else{typ=document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value;break}
								}
							}
						if(typ==O){
								for(d=1;d<=cks;d++){
									if(Cmd.search("Shp.Rh.kil")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==X)document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value=""
									if(Cmd.search("Shp.Rh.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==X)ItemSet("maroon","white","X.",String.fromCharCode(cd1+d)+(cd2+d))
									if(Cmd.search("Shp.Rh.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==X)document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value=O
								}
						}
					}
					if(Cmd.search("Shp.Sh")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
							if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d))){
								if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==X){cks++}else{typ=document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value;break}
											}
										}
						if(typ==O){
						for(d=1;d<=cks;d++){
							if(Cmd.search("Shp.Sh.kil")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==X)document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value=""
							if(Cmd.search("Shp.Sh.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==X)ItemSet("maroon","white","X.",String.fromCharCode(cd1+d)+(cd2-d))
							if(Cmd.search("Shp.Sh.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==X)document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value=O
						}
						}
					}
				}
				if(document.getElementById(String.fromCharCode(cd1)+cd2).value==X){
					if(Cmd.search("Shp.H")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
							if(document.getElementById(String.fromCharCode(cd1+d)+cd2)){
								if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==O){cks++}else{typ=document.getElementById(String.fromCharCode(cd1+d)+cd2).value;break}
								}
						}
						if(typ==X){
							for(d=1;d<=cks;d++){
								if(Cmd.search("Shp.H.kil")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==O)document.getElementById(String.fromCharCode(cd1+d)+cd2).value=""
								if(Cmd.search("Shp.H.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==O)ItemSet("maroon","white","O.",String.fromCharCode(cd1+d)+cd2)
								if(Cmd.search("Shp.H.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+cd2).value==O)document.getElementById(String.fromCharCode(cd1+d)+cd2).value=X
							}
						}
					}
					if(Cmd.search("Shp.V")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
						if(document.getElementById(String.fromCharCode(cd1)+(cd2+d))){
							if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==O){cks++}else{typ=document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value;break}
							}
						}
						if(typ==X){
							for(d=1;d<=cks;d++){
								if(Cmd.search("Shp.V.kil")>=0)if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==O)document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value=""
								if(Cmd.search("Shp.V.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==O)ItemSet("maroon","white","O.",String.fromCharCode(cd1)+(cd2+d))
								if(Cmd.search("Shp.V.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value==O)document.getElementById(String.fromCharCode(cd1)+(cd2+d)).value=X
								}
						}
					}
					if(Cmd.search("Shp.Rh")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
							if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d))){
								if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==O){cks++}else{typ=document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value;break}
								}
							}
						if(typ==X){
								for(d=1;d<=cks;d++){
									if(Cmd.search("Shp.Rh.kil")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==O)document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value=""
									if(Cmd.search("Shp.Rh.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==O)ItemSet("maroon","white","O.",String.fromCharCode(cd1+d)+(cd2+d))
									if(Cmd.search("Shp.Rh.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value==O)document.getElementById(String.fromCharCode(cd1+d)+(cd2+d)).value=X
								}
						}
					}
					if(Cmd.search("Shp.Sh")>=0){var cks=0,typ=""
						for(d=1;d<10;d++){
							if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d))){
								if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==O){cks++}else{typ=document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value;break}
											}
										}
						if(typ==X){
						for(d=1;d<=cks;d++){
							if(Cmd.search("Shp.Sh.kil")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==O)document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value=""
							if(Cmd.search("Shp.Sh.hrm")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==O)ItemSet("maroon","white","O.",String.fromCharCode(cd1+d)+(cd2-d))
							if(Cmd.search("Shp.Sh.rpl")>=0)if(document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value==O)document.getElementById(String.fromCharCode(cd1+d)+(cd2-d)).value=X
						}
						}
					}
				}
			}
		}
	}
	if(TotalScore!=0){
	if(TotalScore==ScoreX)Winner("X得分較高，X獲勝")
	if(TotalScore==ScoreO)Winner("O得分較高，O獲勝")
	}else{
	if(ScoreO>ScoreX+1)Winner("O得分較高，O獲勝")
	if(ScoreX>ScoreO+1)Winner("X得分較高，X獲勝")
	}
}//形狀規則
function Winner(Msg){alert(Msg);CleanBoard()}//勝負訊息
function ItemSet(FC,BC,Txt,Crd){
if(document.getElementById(Crd)){
document.getElementById(Crd).style.backgroundColor=BC;document.getElementById(Crd).style.color=FC
document.getElementById(Crd).value=Txt.substr(0,1)
}
}//建立物件
function CircleCrt(FC,BC,Txt,Crd){
var crd1=Crd.charCodeAt(Crd.substr(0,1)),crd2=parseInt(Crd.substr(1,1))
for(var cd1=crd1-1;cd1<=crd1+1;cd1++){
	for(var cd2=crd2-1;cd2<=crd2+1;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2)){
			ItemSet(FC,BC,Txt,Crd)
		}
	}
}
}//環狀建立角色
function CircleSym(Txt,Crd){
var crd1=Crd.charCodeAt(Crd.substr(0,1)),crd2=parseInt(Crd.substr(1,1))
for(var cd1=crd1-1;cd1<=crd1+1;cd1++){
	for(var cd2=crd2-1;cd2<=crd2+1;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2)&&document.getElementById(String.fromCharCode(cd1)+cd2).value!=""){
			document.getElementById(String.fromCharCode(cd1)+cd2).value=Txt.substr(0,1)
		}
	}
}
}//環狀建立符號
function CircleAra(Txt,Crd){
var crd1=Crd.charCodeAt(Crd.substr(0,1)),crd2=parseInt(Crd.substr(1,1))
for(cd1=crd1-1;cd1<=crd1+1;cd1++){
	for(cd2=crd2-1;cd2<=crd2+1;cd2++){
		if(document.getElementById(String.fromCharCode(cd1)+cd2)){
			if(document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="white"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.color=="black"){
			if(Txt=="D")ItemSet("black","crimson",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			if(Txt=="K")ItemSet("black","royalblue",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			if(Txt=="Q")ItemSet("black","palevioletred",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			if(Txt=="H")ItemSet("black","lightsteelblue",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			if(Txt=="U")ItemSet("black","mediumvioletred",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			if(Txt=="Y")ItemSet("black","steelblue",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			ItemSet("black","white",document.getElementById(Crd).value,Crd)
			}
			if(document.getElementById(String.fromCharCode(cd1)+cd2).value==""){
				if(Txt=="E")ItemSet("black","firebrick",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
				if(Txt=="T")ItemSet("black","powderblue",document.getElementById(String.fromCharCode(cd1)+cd2).value,String.fromCharCode(cd1)+cd2)
			}
		}
	}
}
}//環狀建立區域
function Random(cd1Start,cd1End,cd2Start,cd2End){
r1=String.fromCharCode(Math.floor(Math.random()*cd1Start)+cd1End)
r2=Math.floor(Math.random()*cd2Start)+cd2End
}//隨機座標
function Blood(Crd,Point){
switch(Point){
	case 1:
	if(document.getElementById(Crd)&&document.getElementById(Crd).value==Q){
		if(document.getElementById(Crd).style.color=="coral")document.getElementById(Crd).style.color="maroon"
		if(document.getElementById(Crd).style.color=="green")document.getElementById(Crd).style.color="coral"
		if(document.getElementById(Crd).style.color=="black")document.getElementById(Crd).style.color="green"
	}break;
	case 2:
	if(document.getElementById(Crd)&&document.getElementById(Crd).value==Q){
		if(document.getElementById(Crd).style.color=="coral")document.getElementById(Crd).style.color="maroon"
		if(document.getElementById(Crd).style.color=="green")document.getElementById(Crd).style.color="marron"
		if(document.getElementById(Crd).style.color=="black")document.getElementById(Crd).style.color="coral"
	}break;
	case 3:
	if(document.getElementById(Crd)&&document.getElementById(Crd).value==Q){
		document.getElementById(Crd).style.color="maroon"
	}break;
}
document.all.Weapon.style.display='none';BasicRule();Writer()
if(document.getElementById(Crd).style.color=="maroon")document.getElementById(Crd).value=document.getElementById(Crd).value+" "
}//血量計算
function Counter(){
var Cmd=document.getElementById('OFD').value,CrtQ=0
if(Turn>=TurnStart&&Turn<=TurnEnd){
TimeCount++
if(TimeCount>=DAct)TimeCount=1
if(Cmd.search("Crt.D.Dym<V>")>=0){
	for(i=65;i<74;i++){
		if(document.getElementById(String.fromCharCode(i)+TimeCount).value=="D"&&document.getElementById(String.fromCharCode(i)+TimeCount).style.color=="red"){ItemSet("black","white","",String.fromCharCode(i)+TimeCount)
			if(TimeCount==9){
				ItemSet("red","dimgray","Diaxu",String.fromCharCode(i)+"1")
			}else{
				ItemSet("red","dimgray","Diaxu",String.fromCharCode(i)+(TimeCount+1))
			}
		}
	}
}
if(Cmd.search("Crt.D.Dym<H>")>=0){
	for(i=1;i<10;i++){
		if(document.getElementById(String.fromCharCode(TimeCount+64)+i).value=="D"&&document.getElementById(String.fromCharCode(TimeCount+64)+i).style.color=="red"){
	ItemSet("black","white","",String.fromCharCode(TimeCount+64)+i)
			if(TimeCount==9){
				ItemSet("red","dimgray","Diaxu","A"+i)
			}else{
				ItemSet("red","dimgray","Diaxu",String.fromCharCode(TimeCount+65)+i)
			}
		}
	}
}
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		if(Cmd.search("I"+cd1+cd2)>=0){
			if(Cmd.search("Crt.I.Dym<T>")>=0){
				switch(TimeCount){
				case 2:
				ItemSet("black","white","",String.fromCharCode(cd1)+cd2);ItemSet("white","silver","Ibers",String.fromCharCode(cd1-1)+cd2);break
				case 3:
				ItemSet("black","white","",String.fromCharCode(cd1-1)+cd2);ItemSet("white","silver","Ibers",String.fromCharCode(cd1-1)+(cd2+1));break
				case 4:
				ItemSet("black","white","",String.fromCharCode(cd1-1)+(cd2+1));ItemSet("white","silver","Ibers",String.fromCharCode(cd1)+(cd2+1));break
				case 5:
				ItemSet("black","white","",String.fromCharCode(cd1)+(cd2+1));ItemSet("white","silver","Ibers",String.fromCharCode(cd1)+cd2);break
				}
			}
			if(Cmd.search("Crt.I.Dym<R>")>=0){
				switch(TimeCount){
				case 2:
				ItemSet("black","white","",String.fromCharCode(cd1)+cd2);ItemSet("white","silver","Ibers",String.fromCharCode(cd1+1)+cd2);break
				case 3:
				ItemSet("black","white","",String.fromCharCode(cd1+1)+cd2);ItemSet("white","silver","Ibers",String.fromCharCode(cd1+1)+(cd2+1));break
				case 4:
				ItemSet("black","white","",String.fromCharCode(cd1+1)+(cd2+1));ItemSet("white","silver","Ibers",String.fromCharCode(cd1)+(cd2+1));break
				case 5:
				ItemSet("black","white","",String.fromCharCode(cd1)+(cd2+1));ItemSet("white","silver","Ibers",String.fromCharCode(cd1)+cd2);break
				}
			}
		}
		if(Cmd.search("U"+cd1+cd2)>=0){
			if(Cmd.search("Crt.U.Dym<T>")>=0){
				switch(TimeCount){
				case 1:
				ItemSet("black","lightgray","",String.fromCharCode(cd1+1)+(cd2+1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1)+(cd2+1));break
				case 2:
				ItemSet("black","lightgray","",String.fromCharCode(cd1)+(cd2+1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1-1)+(cd2+1));break
				case 3:
				ItemSet("black","lightgray","",String.fromCharCode(cd1-1)+(cd2+1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1-1)+cd2);break
				case 4:
				ItemSet("black","lightgray","",String.fromCharCode(cd1-1)+cd2);ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1-1)+(cd2-1));break
				case 5:
				ItemSet("black","lightgray","",String.fromCharCode(cd1-1)+(cd2-1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1)+(cd2-1));break
				case 6:
				ItemSet("black","lightgray","",String.fromCharCode(cd1)+(cd2-1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1+1)+(cd2-1));break
				case 7:
				ItemSet("black","lightgray","",String.fromCharCode(cd1+1)+(cd2-1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1+1)+cd2);break
				case 8:
				ItemSet("black","lightgray","",String.fromCharCode(cd1+1)+cd2);ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1+1)+(cd2+1));break
				}
			}
			if(Cmd.search("Crt.U.Dym<R>")>=0){
				switch(TimeCount){
				case 1:
				ItemSet("black","lightgray","",String.fromCharCode(cd1-1)+(cd2+1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1)+(cd2+1));break
				case 2:
				ItemSet("black","lightgray","",String.fromCharCode(cd1)+(cd2+1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1+1)+(cd2+1));break
				case 3:
				ItemSet("black","lightgray","",String.fromCharCode(cd1+1)+(cd2+1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1+1)+cd2);break
				case 4:
				ItemSet("black","lightgray","",String.fromCharCode(cd1+1)+cd2);ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1+1)+(cd2-1));break
				case 5:
				ItemSet("black","lightgray","",String.fromCharCode(cd1+1)+(cd2-1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1)+(cd2-1));break
				case 6:
				ItemSet("black","lightgray","",String.fromCharCode(cd1)+(cd2-1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1-1)+(cd2-1));break
				case 7:
				ItemSet("black","lightgray","",String.fromCharCode(cd1-1)+(cd2-1));ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1-1)+cd2);break
				case 8:
				ItemSet("black","lightgray","",String.fromCharCode(cd1-1)+cd2);ItemSet("midnightblue","orangered","Uinos",String.fromCharCode(cd1-1)+(cd2+1));break
				}
			}
		}
		if(Cmd.search("Crt.Q.D")>=0&&document.getElementById(String.fromCharCode(cd1)+cd2).value=="Q"&&document.getElementById(String.fromCharCode(cd1)+cd2).style.backgroundColor=="black")ItemSet("black","white","",String.fromCharCode(cd1)+cd2)
		if(Cmd.search("Crt.Q.Dym>"+String.fromCharCode(cd1)+cd2+":"+TimeCount+">")>=0){
			ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2)
		}
		if(Cmd.search("Crt.Q.Dym>"+String.fromCharCode(cd1)+"N:"+TimeCount+">")>=0){
			ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2)
		}
		if(Cmd.search("Crt.Q.Dym>T"+cd2+":"+TimeCount+">")>=0){
			ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2)
		}
		if(Cmd.search("Crt.Q.DRd>"+String.fromCharCode(cd1)+cd2+":"+TimeCount+">")>=0){
			if(CrtQ==0){Random(0,0,2,1);if(r2==1){ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2);CrtQ=1}}
		}
		if(Cmd.search("Crt.Q.DRd>"+String.fromCharCode(cd1)+"N:"+TimeCount+">")>=0){
			if(CrtQ==0){Random(0,0,2,1);if(r2==1){ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2);CrtQ=1}}
		}
		if(Cmd.search("Crt.Q.DRd>T"+cd2+":"+TimeCount+">")>=0){
			if(CrtQ==0){Random(0,0,2,1);if(r2==1){ItemSet("white","black","Quare",String.fromCharCode(cd1)+cd2);CrtQ=1}}
		}
	}
}
}
setTimeout(Counter,1000)
}//動態角色
function Direction(){
var Cmd=document.getElementById("OFD").value, Content="";Chs=""
for(C=1;C<100;C++){
if(Cmd.search("T<"+C+",")>=0)Content=Content+"功能初始回合為"+C+ "\n"
if(Cmd.search(","+C+">")>=0)Content=Content+"功能結束回合為"+C+ "\n"
if(Cmd.search("<T:"+C+">")>=0)Content=Content+"預載為第"+C+"回合\n"
if(Cmd.search("<S:"+C+">")>=0)Content=Content+"得分數為"+C+"分\n"
if(Cmd.search("<DA:"+C+">")>=0)Content=Content+"天神Quare採用畫格的方式，每"+C+"秒重複\n"
if(Cmd.search("<TA:"+C+">")>=0)Content=Content+"天神Quare採用畫格的方式，每"+C+"回合重複\n"
if(Cmd.search("Crt.J.Rnd<"+C+">")>=0)Content=Content+"食人妖Junky將生成"+C+"只\n"
if(Cmd.search("Crt.G.Rnd<"+C+">")>=0)Content=Content+"石像鬼Guris將生成"+C+"只\n"
if(Cmd.search("Crt.K.Rnd<"+C+">")>=0)Content=Content+"變形怪Kiase將生成"+C+"只\n"
if(Cmd.search("Crt.S.Rnd<"+C+">")>=0)Content=Content+"村民Sinbo將生成"+C+"只\n"
if(Cmd.search("Crt.E.Rnd<"+C+">")>=0)Content=Content+"將軍Esomo將生成"+C+"只\n"
if(Cmd.search("Crt.M.Rnd<"+C+">")>=0)Content=Content+"幽靈Mokla將生成"+C+"只\n"
if(Cmd.search("Crt.Z.Act<"+C+">")>=0)Content=Content+"魔族Zager每回合將生成"+C+"只\n"
if(Cmd.search("Crt.V.Act<"+C+">")>=0)Content=Content+"精靈Vitor每回合將生成"+C+"只\n"
if(Cmd.search("Ara.P.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個禁區\n"
if(Cmd.search("Ara.S.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個得分區\n"
if(Cmd.search("Ara.F.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個安全區\n"
if(Cmd.search("Ara.M.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個陷阱區\n"
if(Cmd.search("Ara.B.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個障礙物\n"
if(Cmd.search("Ara.L.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個滅區\n"
if(Cmd.search("Ara.R.Rnd<"+C+">")>=0)Content=Content+"將生成"+C+"個創區\n"
if(Cmd.search("Shp.H.nml<"+C+">")>=0)Content=Content+"以"+C+"個符號形成橫線取勝\n"
if(Cmd.search("Shp.V.nml<"+C+">")>=0)Content=Content+"以"+C+"個符號形成直線取勝\n"
if(Cmd.search("Shp.Rh.nml<"+C+">")>=0)Content=Content+"以"+C+"個符號形成斜線取勝\n"
if(Cmd.search("Shp.Sh.nml<"+C+">")>=0)Content=Content+"以"+C+"個符號形成反斜線取勝\n"
if(Cmd.search("Rul.Ara.prt<"+C+">")>=0&&C<8&&C>3)Content=Content+"將有"+C+"個區塊\n"
}
if(Cmd.search("Sym.Ara.D")>=0)Content=Content+"首回合設置環狀產生雙方封限區\n"
if(Cmd.search("Sym.Ara.U")>=0)Content=Content+"首回合設置環狀產生雙方限區\n"
if(Cmd.search("Sym.Ara.Q")>=0)Content=Content+"首回合設置環狀產生雙方封區\n"
if(Cmd.search("Sym.Ara.E")>=0)Content=Content+"首回合設置環狀產生雙方禁區，得到較多區域者獲勝\n"
if(Cmd.search("Sym.Ara.P")>=0)Content=Content+"首回合設置於交錯點產生禁區\n"
if(Cmd.search("Sym.Ara.F")>=0)Content=Content+"首回合設置產生安全區\n"
if(Cmd.search("Sym.Ara.O")>=0)Content=Content+"首回合設置產生皇化區\n"
if(Cmd.search("Sym.Rnd")>=0)Content=Content+"隨機產生雙方符號\n"
if(Cmd.search("Ara.W.Rnd")>=0)Content=Content+"將生成滅陷區\n"
if(Cmd.search("Ara.N.Rnd")>=0)Content=Content+"將生成滅障區\n"
if(Cmd.search("Ara.Z.Rnd")>=0)Content=Content+"將生成滅安區\n"
if(Cmd.search("Crt.C.Rnd")>=0)Content=Content+"將生成半魔領導Catra\n"
if(Cmd.search("Crt.W.Rnd")>=0)Content=Content+"將生成增殖蟲Waler\n"
if(Cmd.search("Crt.Y.Rnd")>=0)Content=Content+"將生成召使Yokla\n"
if(Cmd.search("Crt.D.Rnd")>=0)Content=Content+"將生成影妖Diaxu\n"
if(Cmd.search("Crt.T.Rnd")>=0)Content=Content+"將生成旅人Tiafu\n"
if(Cmd.search("Crt.O.Rnd")>=0)Content=Content+"將生成O皇Oxdra\n"
if(Cmd.search("Crt.X.Rnd")>=0)Content=Content+"將生成X皇Xomud\n"
if(Cmd.search("Crt.F.Act")>=0)Content=Content+"精靈長老每回合將隨機產生\n"
if(Cmd.search("Crt.B.Act")>=0)Content=Content+"魔族酋長每回合將隨機吃掉符號\n"
if(Cmd.search("Crt.L.Act")>=0)Content=Content+"精靈戰士每回合將隨機產生\n"
if(Cmd.search("Crt.R.Act")>=0)Content=Content+"魔族將軍每回合將隨機吃掉符號\n"
if(Cmd.search("Crt.C.Act")>=0)Content=Content+"半魔每回合將隨機藉連線產生\n"
if(Cmd.search("Crt.W.Act")>=0)Content=Content+"增殖蟲每回合將藉正四方產生\n"
if(Cmd.search("Crt.T.Act")>=0)Content=Content+"旅人每回合將隨機移動\n"
if(Cmd.search("Crt.N.Act")>=0)Content=Content+"殭屍每回合將吃掉未產生一般連線之符號\n"
if(Cmd.search("Crt.P.Act")>=0)Content=Content+"怨靈每回合將隨機產生在角落\n"
if(Cmd.search("Crt.H.Act<T>")>=0)Content=Content+"巨人Haber每回合將順時針移動\n"
if(Cmd.search("Crt.H.Act<R>")>=0)Content=Content+"巨人Haber每回合將逆時針移動\n"
if(Cmd.search("Crt.D.Dym<V>")>=0)Content=Content+"影妖Diaxu每秒將直線移動\n"
if(Cmd.search("Crt.D.Dym<H>")>=0)Content=Content+"影妖Diaxu每秒將橫線移動\n"
if(Cmd.search("Crt.I.Dym<T>")>=0)Content=Content+"鬼影Ibers每秒將順時針移動\n"
if(Cmd.search("Crt.I.Dym<R>")>=0)Content=Content+"鬼影Ibers每秒將逆時針移動\n"
if(Cmd.search("Crt.U.Dym<T>")>=0)Content=Content+"狂魔Uinos每秒將順時針移動\n"
if(Cmd.search("Crt.U.Dym<R>")>=0)Content=Content+"狂魔Uinos每秒將逆時針移動\n"
if(Cmd.search("Crt.Q.Act")>=0)Content=Content+"天神Quare每回合將以指定形式移動\n"
if(Cmd.search("Crt.Q.Dym")>=0)Content=Content+"天神Quare每秒將以指定形式移動\n"
if(Cmd.search("Crt.Q.ARd")>=0)Content=Content+"天神Quare每回合將以指定範圍產生一只\n"
if(Cmd.search("Crt.Q.DRd")>=0)Content=Content+"天神Quare每秒將以指定範圍產生一只\n"
if(Cmd.search("Shp.crs.kil")>=0)Content=Content+"以十字形圍繞對方，使其消失\n"
if(Cmd.search("Shp.X.kil")>=0)Content=Content+"以叉字形圍繞對方，使其消失\n"
if(Cmd.search("Shp.H.kil")>=0)Content=Content+"形成橫線使對方符號消失\n"
if(Cmd.search("Shp.V.kil")>=0)Content=Content+"形成直線使對方符號消失\n"
if(Cmd.search("Shp.Rh.kil")>=0)Content=Content+"形成斜線使對方符號消失\n"
if(Cmd.search("Shp.Sh.kil")>=0)Content=Content+"形成反斜線使對方符號消失\n"
if(Cmd.search("Shp.crs.rpl")>=0)Content=Content+"以十字形圍繞對方，使其變更\n"
if(Cmd.search("Shp.X.rpl")>=0)Content=Content+"以叉字形圍繞對方，使其變更\n"
if(Cmd.search("Shp.H.rpl")>=0)Content=Content+"形成橫線變更對方符號\n"
if(Cmd.search("Shp.V.rpl")>=0)Content=Content+"形成直線變更對方符號\n"
if(Cmd.search("Shp.Rh.rpl")>=0)Content=Content+"形成斜線變更對方符號\n"
if(Cmd.search("Shp.Sh.rpl")>=0)Content=Content+"形成反斜線變更對方符號\n"
if(Cmd.search("Shp.crs.nml")>=0)Content=Content+"完成一個十字形取勝\n"
if(Cmd.search("Shp.X.nml")>=0)Content=Content+"完成一個叉字形取勝\n"
if(Cmd.search("Shp.sqr.nml")>=0)Content=Content+"完成一個方形取勝\n"
if(Cmd.search("Shp.crs.scr")>=0)Content=Content+"完成一個十字形得分\n"
if(Cmd.search("Shp.X.scr")>=0)Content=Content+"完成一個叉字形得分\n"
if(Cmd.search("Shp.sqr.scr")>=0)Content=Content+"完成一個方形得分\n"
if(Cmd.search("Shp.H.hrm")>=0)Content=Content+"形成橫線殺死對方符號\n"
if(Cmd.search("Shp.V.hrm")>=0)Content=Content+"形成直線殺死對方符號\n"
if(Cmd.search("Shp.Rh.hrm")>=0)Content=Content+"形成斜線殺死對方符號\n"
if(Cmd.search("Shp.Sh.hrm")>=0)Content=Content+"形成反斜線殺死對方符號\n"
if(Cmd.search("Ara.prt")>=0)Content=Content+"區域將以區塊性分部\n"
if(Cmd.search("Rul.Ara ")>=0)Content=Content+"設法占領更多區域\n"
if(Cmd.search("Rul.Ara.scr")>=0)Content=Content+"設法占領更多區域得分\n"
if(Cmd.search("Rul.Ara.prt")>=0)Content=Content+"區塊布滿雙方符號時，將自動清空\n"
if(Cmd.search("Rul.Ara.tgt")>=0)Content=Content+"指定區塊有指定符號時，進行勝負判別\n"
if(Cmd.search("Rul.Ldr")>=0)Content=Content+"對方領導不存在時，我方獲勝\n"
if(Cmd.search("Rul.Wpn")>=0)Content=Content+"允許武器的使用\n"
if(Cmd.search("Rul.Bld")>=0)Content=Content+"殺死對方符號得分\n"
if(Cmd.search("Cnt.rmt")>=0)Content=Content+"允許遠程連線\n"
if(Cmd.search("Cnt.abn")>=0)Content=Content+"允許異常連線\n"
if(Cmd.search("Cnt.non")>=0)Content=Content+"允許不連線\n"
if(Cmd.search("Rul.Chs")>=0){
Content=Content+"做為非單符號棋盤\n"
if(Cmd.search("Rul.Chs.Ldr")>=0)Content=Content+"設法將對方棕色符號(領導)吃掉取勝\n"
for(C=97;C<106;C++){
	var typ=String.fromCharCode(C),clr="",md="",cd="",cdt=""
	if(C==97)clr="紅";if(C==98)clr="橙";if(C==99)clr="黃";if(C==100)clr="綠";
	if(C==101)clr="藍";if(C==102)clr="紫";if(C==103)clr="粉";if(C==104)clr="靛藍";if(C==105)clr="棕"
	for(tp=0;tp<9;tp++){
		if(tp==0)md=" ";if(tp==1)md=".f";if(tp==2)md=".k";if(tp==3)md=".l";if(tp==4)md=".j";if(tp==5)md=".s";if(tp==6)md=".s.l"
		if(Cmd.search(typ+".8"+md)>=0)Cmd=Cmd+typ+".4"+md+typ+".YX"+md
		if(Cmd.search(typ+".4"+md)>=0)Cmd=Cmd+typ+".X"+md+typ+".Y"+md
		if(Cmd.search(typ+".X"+md)>=0)Cmd=Cmd+typ+".R"+md+typ+".L"+md
		if(Cmd.search(typ+".Y"+md)>=0)Cmd=Cmd+typ+".F"+md+typ+".B"+md
		if(Cmd.search(typ+".YX"+md)>=0)Cmd=Cmd+typ+".FX"+md+typ+".BX"+md
		if(Cmd.search(typ+".FX"+md)>=0)Cmd=Cmd+typ+".FR"+md+typ+".FL"+md
		if(Cmd.search(typ+".BX"+md)>=0)Cmd=Cmd+typ+".BR"+md+typ+".BL"+md
		if(Cmd.search(typ+".YR"+md)>=0)Cmd=Cmd+typ+".FR"+md+typ+".BR"+md
		if(Cmd.search(typ+".YL"+md)>=0)Cmd=Cmd+typ+".FL"+md+typ+".BL"+md
		if(Cmd.search(typ+".8n"+md)>=0)Cmd=Cmd+typ+".YXX"+md+typ+".YYX"+md
		if(Cmd.search(typ+".YXX"+md)>=0)Cmd=Cmd+typ+".FXX"+md+typ+".BXX"+md
		if(Cmd.search(typ+".FXX"+md)>=0)Cmd=Cmd+typ+".FRR"+md+typ+".FLL"+md
		if(Cmd.search(typ+".BXX"+md)>=0)Cmd=Cmd+typ+".BRR"+md+typ+".BLL"+md
		if(Cmd.search(typ+".YRR"+md)>=0)Cmd=Cmd+typ+".FRR"+md+typ+".BRR"+md
		if(Cmd.search(typ+".YLL"+md)>=0)Cmd=Cmd+typ+".FLL"+md+typ+".BLL"+md
		if(Cmd.search(typ+".YYX"+md)>=0)Cmd=Cmd+typ+".FFX"+md+typ+".BBX"+md
		if(Cmd.search(typ+".FFX"+md)>=0)Cmd=Cmd+typ+".FFR"+md+typ+".FFL"+md
		if(Cmd.search(typ+".BBX"+md)>=0)Cmd=Cmd+typ+".BBR"+md+typ+".BBL"+md
		if(Cmd.search(typ+".YYR"+md)>=0)Cmd=Cmd+typ+".FFR"+md+typ+".BBR"+md
		if(Cmd.search(typ+".YYL"+md)>=0)Cmd=Cmd+typ+".FFL"+md+typ+".BBL"+md
		if(Cmd.search(typ+".28"+md)>=0)Cmd=Cmd+typ+".24"+md+typ+".2YX"+md
		if(Cmd.search(typ+".24"+md)>=0)Cmd=Cmd+typ+".2X"+md+typ+".2Y"+md
		if(Cmd.search(typ+".2X"+md)>=0)Cmd=Cmd+typ+".2R"+md+typ+".2L"+md
		if(Cmd.search(typ+".2Y"+md)>=0)Cmd=Cmd+typ+".2F"+md+typ+".2B"+md
		if(Cmd.search(typ+".2YX"+md)>=0)Cmd=Cmd+typ+".2FX"+md+typ+".2BX"+md
		if(Cmd.search(typ+".2FX"+md)>=0)Cmd=Cmd+typ+".2FR"+md+typ+".2FL"+md
		if(Cmd.search(typ+".2BX"+md)>=0)Cmd=Cmd+typ+".2BR"+md+typ+".2BL"+md
		if(Cmd.search(typ+".2YR"+md)>=0)Cmd=Cmd+typ+".2FR"+md+typ+".2BR"+md
		if(Cmd.search(typ+".2YL"+md)>=0)Cmd=Cmd+typ+".2FL"+md+typ+".2BL"+md
	}
	if(Cmd.search(typ+".F")>=0)ChessDirection(typ,Cmd,clr,"前",".F")
	if(Cmd.search(typ+".B")>=0)ChessDirection(typ,Cmd,clr,"後",".B")
	if(Cmd.search(typ+".R")>=0)ChessDirection(typ,Cmd,clr,"右",".R")
	if(Cmd.search(typ+".L")>=0)ChessDirection(typ,Cmd,clr,"左",".L")
	if(Cmd.search(typ+".FR")>=0)ChessDirection(typ,Cmd,clr,"右前",".FR")
	if(Cmd.search(typ+".FL")>=0)ChessDirection(typ,Cmd,clr,"左前",".FL")
	if(Cmd.search(typ+".BR")>=0)ChessDirection(typ,Cmd,clr,"右後",".BR")
	if(Cmd.search(typ+".BL")>=0)ChessDirection(typ,Cmd,clr,"左後",".BL")
	if(Cmd.search(typ+".2F")>=0)ChessDirection(typ,Cmd,clr,"前前",".2F")
	if(Cmd.search(typ+".2B")>=0)ChessDirection(typ,Cmd,clr,"後後",".2B")
	if(Cmd.search(typ+".2R")>=0)ChessDirection(typ,Cmd,clr,"右右",".2R")
	if(Cmd.search(typ+".2L")>=0)ChessDirection(typ,Cmd,clr,"左左",".2L")
	if(Cmd.search(typ+".2FR")>=0)ChessDirection(typ,Cmd,clr,"右右前前",".2FR")
	if(Cmd.search(typ+".2FL")>=0)ChessDirection(typ,Cmd,clr,"左左前前",".2FL")
	if(Cmd.search(typ+".2BR")>=0)ChessDirection(typ,Cmd,clr,"右右後後",".2BR")
	if(Cmd.search(typ+".2BL")>=0)ChessDirection(typ,Cmd,clr,"左左後後",".2BL")
	if(Cmd.search(typ+".FFR")>=0)ChessDirection(typ,Cmd,clr,"右前前",".FFR")
	if(Cmd.search(typ+".FFL")>=0)ChessDirection(typ,Cmd,clr,"左前前",".FFL")
	if(Cmd.search(typ+".BBR")>=0)ChessDirection(typ,Cmd,clr,"右後後",".BBR")
	if(Cmd.search(typ+".BBL")>=0)ChessDirection(typ,Cmd,clr,"左後後",".BBL")
	if(Cmd.search(typ+".FRR")>=0)ChessDirection(typ,Cmd,clr,"右右前",".FRR")
	if(Cmd.search(typ+".FLL")>=0)ChessDirection(typ,Cmd,clr,"左左前",".FLL")
	if(Cmd.search(typ+".BRR")>=0)ChessDirection(typ,Cmd,clr,"右右後",".BRR")
	if(Cmd.search(typ+".BLL")>=0)ChessDirection(typ,Cmd,clr,"左左後",".BLL")
}
}
if(Content!="")alert(Content+Chs)
if(Cmd.search("Rul.Wpn")>=0&&confirm("是否載入武器說明？")==true){
alert("藥劑Drug：使附近的符號進入不死狀態\n斧Ax：兩回合後使附近的符號進入死亡狀態\n槍Spear：指定方向兩單位符號給予傷害2\n劍Sword：斜四方位符號給予傷害2\n刀knife：正四方位符號給予傷害2\n弓Bow：指定方向單位符號給予傷害1\n盾Shield：可無效弓的攻勢\n叉Fork：指定方向一單位符號給予傷害3\n矛Lance：指定方向三單位符號給予傷害1")
}
}//模式說明
function ChessDirection(typ,Cmd,clr,cd,cdt){var Content=""
Content=Content+clr+"色的符號，"+cd+"方"
if(Cmd.search(typ+cdt+".k")>=0)Content=Content+"若有符號時，才可移動將其吃掉"
if(Cmd.search(typ+cdt+".f")>=0)Content=Content+"僅在剛開始時，才可移動"
if(Cmd.search(typ+cdt+".l")>=0)Content=Content+"若無符號時，才可移動"
if(Cmd.search(typ+cdt+".s")>=0)Content=Content+"可不限長度移動"
if(Cmd.search(typ+cdt+".s.l")>=0)Content=Content+"，但無法吃掉符號"
if(Cmd.search(typ+cdt+".j")>=0)Content=Content+"可跳吃符號"
if(Cmd.search(typ+cdt+" ")>=0)Content=Content+"可移動吃符號"
if(Content!=clr+"色的符號，"+cd+"方")Chs=Chs+Content+"\n"
}//棋盤說明
function Command(typ){
	if(document.getElementById(typ).style.backgroundColor=='lightgray'){
		document.getElementById(typ).style.backgroundColor='gray'
	}else{
		document.getElementById(typ).style.backgroundColor='lightgray'
	}
}//簡易指令集
function CommandInput(){var Cmd=""
if(parseInt(document.getElementById('TurnS').value)>0&&parseInt(document.getElementById('TurnE').value)>0){
	Cmd="T<"+document.getElementById('TurnS').value+","+document.getElementById('TurnE').value+"> "
}var RA="",RC="",RS=""
if(parseInt(document.getElementById('Scr').value)>0)Cmd=Cmd+"<S:"+document.getElementById('Scr').value+">"
if(parseInt(document.getElementById('TurnT').value)>0)Cmd=Cmd+"<T:"+document.getElementById('TurnT').value+">"
if(document.getElementById('Rul.Ara').style.backgroundColor=="lightgray")RA="Rul.Ara "
if(document.getElementById('Rul.Ara.scr').style.backgroundColor=="lightgray")RA="Rul.Ara.scr "
if(document.getElementById('Rul.Ara.prt').style.backgroundColor=="lightgray")RA="Rul.Ara.prt "
if(document.getElementById('Rul.Ara.tgt').style.backgroundColor=="lightgray")RA="Rul.Ara.tgt "
if(document.getElementById('Rul.Bld').style.backgroundColor=="lightgray")Cmd=Cmd+"Rul.Bld "
if(document.getElementById('Rul.Ldr').style.backgroundColor=="lightgray")Cmd=Cmd+"Rul.Ldr "
if(document.getElementById('Rul.Wpn').style.backgroundColor=="lightgray")Cmd=Cmd+"Rul.Wpn "
if(document.getElementById('Rul.Chs').style.backgroundColor=="lightgray")RC="Rul.Chs "
if(document.getElementById('Rul.Chs.Ldr').style.backgroundColor=="lightgray")RC="Rul.Chs.Ldr "
if(document.getElementById('Cnt.non').style.backgroundColor=="lightgray"){
	Cmd=Cmd+"Cnt.non "
}else{
	if(document.getElementById('Cnt.rmt').style.backgroundColor=="lightgray")Cmd=Cmd+"Cnt.rmt "
	if(document.getElementById('Cnt.abn').style.backgroundColor=="lightgray")Cmd=Cmd+"Cnt.abn "
}
if(document.getElementById('Shp.nml').checked==true){
	if(document.getElementById('Shp.sqr').checked==true)RS=RS+" Shp.sqr.nml"
	if(document.getElementById('Shp.crs').checked==true)RS=RS+" Shp.crs.nml"
	if(document.getElementById('Shp.X').checked==true)RS=RS+" Shp.X.nml"
	if(parseInt(document.getElementById('Shp.val').value)>0){
		if(document.getElementById('Shp.V').checked==true)RS=RS+" Shp.V.nml<"+document.getElementById('Shp.val').value+">"
		if(document.getElementById('Shp.H').checked==true)RS=RS+" Shp.H.nml<"+document.getElementById('Shp.val').value+">"
		if(document.getElementById('Shp.Sh').checked==true)RS=RS+" Shp.Sh.nml<"+document.getElementById('Shp.val').value+">"
		if(document.getElementById('Shp.Rh').checked==true)RS=RS+" Shp.Rh.nml<"+document.getElementById('Shp.val').value+">"
	}
}
if(document.getElementById('Shp.scr').checked==true){
	if(document.getElementById('Shp.sqr').checked==true)RS=RS+" Shp.sqr.scr"
	if(document.getElementById('Shp.crs').checked==true)RS=RS+" Shp.crs.scr"
	if(document.getElementById('Shp.X').checked==true)RS=RS+" Shp.X.scr"
}
if(document.getElementById('Shp.kil').checked==true){
	if(document.getElementById('Shp.crs').checked==true)RS=RS+" Shp.crs.kil"
	if(document.getElementById('Shp.X').checked==true)RS=RS+" Shp.X.kil"
	if(document.getElementById('Shp.V').checked==true)RS=RS+" Shp.V.kil"
	if(document.getElementById('Shp.H').checked==true)RS=RS+" Shp.H.kil"
	if(document.getElementById('Shp.Sh').checked==true)RS=RS+" Shp.Sh.kil"
	if(document.getElementById('Shp.Rh').checked==true)RS=RS+" Shp.Rh.kil"
}
if(document.getElementById('Shp.rpl').checked==true){
	if(document.getElementById('Shp.crs').checked==true)RS=RS+" Shp.crs.rpl"
	if(document.getElementById('Shp.X').checked==true)RS=RS+" Shp.X.rpl"
	if(document.getElementById('Shp.V').checked==true)RS=RS+" Shp.V.rpl"
	if(document.getElementById('Shp.H').checked==true)RS=RS+" Shp.H.rpl"
	if(document.getElementById('Shp.Sh').checked==true)RS=RS+" Shp.Sh.rpl"
	if(document.getElementById('Shp.Rh').checked==true)RS=RS+" Shp.Rh.rpl"
}
if(document.getElementById('Shp.hrm').checked==true){
	if(document.getElementById('Shp.V').checked==true)RS=RS+" Shp.V.hrm"
	if(document.getElementById('Shp.H').checked==true)RS=RS+" Shp.H.hrm"
	if(document.getElementById('Shp.Sh').checked==true)RS=RS+" Shp.Sh.hrm"
	if(document.getElementById('Shp.Rh').checked==true)RS=RS+" Shp.Rh.hrm"
}
Cmd=Cmd+RA+RC+RS
document.getElementById('OFD').value=document.getElementById('exm').value+Cmd
}//指令輸入