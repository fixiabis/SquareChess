var Oln={}
function Req(Typ,Jcd){var id="",req={ModeName:doc.title,BoardContent:"",LastActive:new Date().getTime()};Dft.Oln.MdN=doc.title
	if(Jcd)id=Jcd
	if(Typ=="J"){if(!Jcd)while(!id)id=prompt("輸入id");Dft.Oln.Typ="X"}
	else{Dft.Oln.Typ="O";if(!Jcd)id=RJC()}Dft.Oln.Id=id
	try{
		firebase.database().ref("Battle/"+id).once("value",function(r){
			if(r.val()!=null&&Typ=="R"){id=RJC();return Req(Typ,id)}
			if(Typ=="R")firebase.database().ref("Battle/"+id).update(req)
			firebase.database().ref("Battle/"+id).once("value",function(r){
				if(Typ=="R"){var url=location.href+"#"+id;prompt("註冊成功,貼給朋友即可開始對戰",url)
					Id("msgr").childNodes[1].setAttribute("data-href",url);Oln.Ffb()
				}else if(Typ=="J"&&!r.val().PlayerX){
					firebase.database().ref("Battle/"+id).update({PlayerX:"exist"});alert("加入成功")
				}else{alert("進入觀賞模式");Dft.Oln.Typ="V"}
			});Ini()
		})
	}catch(e){if(confirm("暫時無法申請，將繼續重試"))Req(Typ,Jcd)}
}
function Upl(cnt){if(Dft.Oln.Typ=="V"||!Dft.Oln.Id)return
	Dft.Set=0;var req={ModeName:Dft.Oln.MdN,LastActive:new Date().getTime()}
	req.BoardContent=cnt;Atn(Dft.Oln.MdN)
	try{firebase.database().ref("Battle/"+Dft.Oln.Id).update(req);Dft.Oln.Cln=1}
	catch(e){if(confirm("暫時無法上傳，將繼續重試"))Upl(cnt)}
}
function Ini(v){Dft.System.Oln=0;Cln();Dft.System.Oln=1;Dft.Oln.Cln=0
	if(Dft.Oln.Typ=="X"||Dft.Oln.Typ=="V")Dft.Set=0;else Dft.Set=1
	if(!v)firebase.database().ref("Battle/"+Dft.Oln.Id).on("value",function(r){
		if(r.val().Message&&Id("msgc").innerHTML!=r.val().Message){
			Id("msgc").innerHTML=r.val().Message;Dft.Oln.Msg++;Atn()
			Ctl("MSw",1);Id("msgc").scrollTop=Id("msgc").scrollHeight
		}var brd=r.val().BoardContent.split("/")
		if(brd[0].length<81&&(Dft.Oln.Cln||Dft.Oln.Typ=="V")){alert(brd[0]);Ini(1)}
		else if(brd[1]&&Sqr.Sym[(Val(brd[1])%2)]==Dft.Oln.Typ||Dft.Oln.Typ=="V"){
			Hst.Brd[brd[1]]=brd[0];Hst.Crd[brd[1]]=brd[2];Rec(brd[0]);Tn=Val(brd[1]);Rul()
			if(Dft.Oln.Typ!="V"){Dft.Set=1;Atn("輪到你下了")}
		}
	})
}
function Atn(v){
	if(v)doc.title=v
	else if(doc.title[doc.title.length-1]==")")doc.title=doc.title.split("(")[0]
	if(Dft.Oln.Msg)doc.title+="("+Dft.Oln.Msg+")"
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
	(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0]
		if(d.getElementById(id))return;js=d.createElement(s);js.id=id;
		js.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		fjs.parentNode.insertBefore(js, fjs)
	}(document,'script','facebook-jssdk'))
}
function RJC(){var r="",t=[]
  for(var i=48;i<58;i++)t.push(String.fromCharCode(i))
  for(var i=65;i<91;i++)t.push(String.fromCharCode(i))
  for(i=0;i<8;i++)r+=t[Math.floor(Math.random()*36)]
  return r
}
function Msg(msg){Dft.Oln.Msg=-1
	firebase.database().ref("Battle/"+Dft.Oln.Id).once("value",function(r){var msgo=r.val().Message
		if(!msgo)msgo="";else msgo=msgo+"<br>"
		firebase.database().ref("Battle/"+Dft.Oln.Id).update({Message:msgo+Dft.Oln.Typ+":"+msg})
	})
}
