function destroy(event){document.body.removeChild(event.target);}
function FRd(n){
var file=n,fr=new FileReader();           
fr.onload=function (event){Reader(event.target.result)}
fr.readAsText(file)
}//一般讀取檔案
function FWt(n){
	var fileName=prompt("輸入下載檔名，點選取消即可複製字串")
	if(fileName==null){
	    prompt('下列字串為要導出的檔案內容文字，歡迎複製',n)
	}else{
		var textFileAsBlob = new Blob([n]);
		var downloadLink = document.createElement("a");
		downloadLink.download = fileName+".txt";
		downloadLink.innerHTML = "Download File";
		if (window.webkitURL != null){
			downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
		} else {
			downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
			downloadLink.onclick = destroy;
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
		}
		downloadLink.click();
	}
}//輸出回合檔案
function Reader(ord){alert(ord)
	for(i=0;i<=ord.length;i++){
		switch(Mid(ord,i,5)){
			case"<bds:":brd.sym=cmdrd(i,ord);break
			case"<bda:":brd.ara=cmdrd(i,ord);break
			case"<bdf:":brd.set=cmdrd(i,ord);break
			case"<rls:":rul.shp=cmdrd(i,ord);break
			case"<rla:":rul.ara=cmdrd(i,ord);break
			case"<cnt:":cnt=cmdrd(i,ord);break
		}
	}
}//讀取格式
function cmdrd(v,ord){var s=1
	for(var i=v+5;i<=ord.length;i++){
		switch(Mid(ord,i,1)){case"<":s++;break;case">":s--;break}
		if(s==0){return Mid(ord,v+5,i-5-v)}
	}
}//擷取資料
function Dld(){var a="",s=""
for(cd1=65;cd1<74;cd1++){
	for(cd2=1;cd2<10;cd2++){
		for(afb=65;afb<91;afb++){if(Controls(Chr(cd1)+cd2).style.backgroundColor==Data["Ara"][Chr(afb)][2])a+=Chr(afb)}
		if(Controls(Chr(cd1)+cd2).style.backgroundColor==Data["Ara"]["2"][2])a+="2"
		switch(Controls(Chr(cd1)+cd2).value){case"O":s+="0";break;case"X":s+="1";break;default:s+="2";break}
	}
}FWt("<bda:"+a+"><bds:"+s+">")
}//下載資料