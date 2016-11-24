var Oln={}
function Req(Typ,Jcd){var id="",req={ModeName:location.search.split("?mode=")[1],LastActive:new Date().getTime(),BoardContent:""}
	if(Typ=="J"){
		if(Jcd)id=Jcd;else id=prompt("輸入id");Dft.Oln.Typ="X"
	}else{
		Dft.Oln.Typ="O";id=RJC();req.Typ=Typ
	}Dft.Oln.Id=id
	try{
		if(Typ=="R")firebase.database().ref("Battle/"+id).update(req)
		firebase.database().ref("Battle/"+id).once("value",function(r){
			if(Typ=="R"){var url=location.href+"#"+id
				prompt("註冊成功,貼給朋友即可開始對戰",url)
				Id("msgr").childNodes[1].setAttribute("data-href",url)
				Oln.Ffb()
			}else alert("加入成功");Ini()
		})
	}catch(e){if(confirm("暫時無法申請，將繼續重試"))Req()}
}
function Upl(cnt){Dft.Set=0;var req={ModeName:location.search.split("?mode=")[1],LastActive:new Date().getTime()}
	req.BoardContent=cnt
	try{
		firebase.database().ref("Battle/"+Dft.Oln.Id).update(req);Dft.Oln.Cln=1
		firebase.database().ref("Battle/"+Dft.Oln.Id).once("value",function(r){Get()})
	}catch(e){if(confirm("暫時無法上傳，將繼續重試"))Upl(cnt)}
}
function Get(){
	try{
		firebase.database().ref("Battle/"+Dft.Oln.Id).once("value",function(r){
			var brd=r.val().BoardContent.split("/");console.log(brd[0].length<81&&Dft.Oln.Cln);console.log(brd[0].length);console.log(Dft.Oln.Cln)
			if(brd[0].length<81&&Dft.Oln.Cln){alert(brd[0]);Ini()}
			else if(!brd[1]||Val(brd[1])==Tn)Get()
			else{
				Hst.Brd[brd[1]]=brd[0];Hst.Crd[brd[1]]=brd[2];Rec(brd[0]);Tn=brd[1];Rul();Dft.Set=1
			}
		})
	}catch(e){if(confirm("暫時無法取得，將繼續重試"))Get()}
}
function Ini(){Dft.System.Oln=0;Cln();Dft.System.Oln=1;Dft.Oln.Cln=0
	if(Dft.Oln.Typ=="X"){Dft.Set=0;Get()}else{Dft.Set=1}
}
function Joi(){
	if(location.hash.length!=9)Opt();else Req("J",Mid(location.hash,1,location.hash.length-1))
}
Oln.Opt=function(){Id("msgr").style.opacity=0
	if(!Dft.Oln.Id){
		OpS("Dft-ORg-0/Dft.ORg","r","註冊房間",Dft.Oln.Rgt==0)
		OpS("Dft.ORg-1/Dft.ORg","r","加入房間",Dft.Oln.Rgt==1)
	}else{if(Tn<2)Id("msgr").style.opacity=1
		Id("OptionMenu").innerHTML+="<input type='text' readonly value='"+Dft.Oln.Id+"' style='font-size:inherit;width:140px;text-align:center'/><br>"
	}
}
Oln.OpK=function(){
	if(!Dft.Oln.Id){if(Id("Dft-ORg-0").checked)Req("R");else Req("J")}
}
Oln.Ffb=function(){
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}
function RJC(){var r="",t=[]
  for(var i=48;i<58;i++)t.push(String.fromCharCode(i))
  for(var i=65;i<91;i++)t.push(String.fromCharCode(i))
  for(i=0;i<8;i++)r+=t[Math.floor(Math.random()*36)]
  return r
}