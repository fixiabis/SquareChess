var Oln={}
function Req(Typ,Jcd){Dft.Oln.CkN=RJC()
	var id="",req={
		ModeName:doc.title,BoardContent:"",LastActive:new Date().getTime(),CheckNum:Dft.Oln.CkN,PlayerX:"N",Message:{Content:""}
	};Dft.Oln.MdN=doc.title
	if(Jcd)id=Jcd
	if(Typ=="J"){if(!Jcd)while(!id)id=prompt("輸入id");Dft.Oln.Typ="X"}
	else{Dft.Oln.Typ="O";if(!Jcd)id=RJC()}Dft.Oln.Id=id
	try{
		firebase.database().ref("Battle/"+id+"/PlayerX").once("value",function(r){
			if(r.val()!=null&&Typ=="R"){id=RJC();return Req(Typ,id)}
			if(Typ=="R")firebase.database().ref("Battle/"+id).update(req)
			firebase.database().ref("Battle/"+id+"/PlayerX").once("value",function(r){
				if(Typ=="R"){var url="http://fixiabis.github.io/SquareChessGame/9.1/jndir.html?"+doc.title+"/"+id
					prompt("註冊成功,貼給朋友即可開始對戰",url)
					Id("msgr").childNodes[1].setAttribute("data-href",url);Oln.Ffb();Ini();if(Dft.Oln.Ckr)Oln.Ckr()
					Id("QR").style.background="url(http://chart.apis.google.com/chart?cht=qr&chs=150x150&chl="+url+")"
				}else if(Typ=="J"&&r.val()=="N"){
					firebase.database().ref("Battle/"+id+"/CheckNum").once("value",function(r){
						Msg("X方已加入",1);Dft.Oln.CkN=r.val();Ini();if(Dft.Oln.Ckr)Oln.Ckr()
						firebase.database().ref("Battle/"+id).update({PlayerX:"Y",CheckNum:r.val(),LastActive:new Date().getTime()})
					})
				}else{alert("進入觀賞模式");Dft.Oln.Typ="V";Ini()}
			});if(Notification&&Notification.permission!="granted")Notification.requestPermission()
		})
	}catch(e){if(confirm("暫時無法申請，將繼續重試"))Req(Typ,Jcd)}
}
function Upl(cnt){if(Dft.Oln.Typ=="V"||!Dft.Oln.Id)return
	Dft.Set=0;var req={CheckNum:Dft.Oln.CkN,BoardContent:cnt};Atn(Dft.Oln.MdN)
	if(!Dft.Oln.Ckr)req.LastActive=new Date().getTime()
	try{firebase.database().ref("Battle/"+Dft.Oln.Id).update(req);Dft.Oln.Cln=1}
	catch(e){if(confirm("暫時無法上傳，將繼續重試"))Upl(cnt)}
}
function Ini(v){Dft.System.Oln=0;Cln();Dft.System.Oln=1;Dft.Oln.Cln=0
	if(Dft.Oln.Typ=="X"||Dft.Oln.Typ=="V")Dft.Set=0;else Dft.Set=1
	if(!v){
		firebase.database().ref("Battle/"+Dft.Oln.Id+"/BoardContent").on("value",function(r){
			var brd=r.val().split("/")
			if(brd[0].length<81&&(Dft.Oln.Cln||Dft.Oln.Typ=="V")){alert(brd[0]);Ini(1)}
			else if(brd[1]&&Sqr.Sym[(Val(brd[1])%2)]==Dft.Oln.Typ||Dft.Oln.Typ=="V"){
				Hst.Brd[brd[1]]=brd[0];Hst.Crd[brd[1]]=brd[2];Rec(brd[0]);Tn=Val(brd[1]);Rul()
				if(Dft.Oln.Typ!="V"){Dft.Set=1;Atn("輪到你下了")}
			}
		})
		firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").on("value",function(r){
			if(r.val()&&Id("msgc").innerHTML!=r.val()){var msg=r.val().Content;if(msg=="")return
				Id("msgc").innerHTML=msg;Dft.Oln.Msg++;Atn()
				Ctl("MSw",Dft.Oln.MSw);Id("msgc").scrollTop=Id("msgc").scrollHeight
				if(msg.search('<div style="text-align:center">-X方已加入-</div>')>-1)$(".join").css("display","none")
				if(Notification){var m=msg.replace('<div style="text-align:center">-X方已加入-</div>',"").split("<br>")
					if(m.length>1&&m[m.length-2][0]!=Dft.Oln.Typ)var n=new Notification("即時訊息",{
						body:m[m.length-2],icon:"Pics/Icon.png"
					})
				}
			}
		})
		if("OX".search(Dft.Oln.Typ)>-1&&Dft.Oln.Ckr)firebase.database().ref("Battle/"+Dft.Oln.Id+"/LastActive").on("value",
		function(r){Dft.Oln.Lst=new Date().getTime();Dft.Oln.CkO=1
			firebase.database().ref("Battle/"+Dft.Oln.Id).update({LastActive:Dft.Oln.Lst,CheckNum:Dft.Oln.CkN})
		})
	}
}
function Atn(v){
	if(v)doc.title=v
	else if(doc.title[doc.title.length-1]==")")doc.title=doc.title.split("(")[0]
	if(Dft.Oln.Msg)doc.title+="("+Dft.Oln.Msg+")";Tag("header")[0].innerHTML=doc.title
}
function Joi(){
	if(location.hash.length!=9)Opt();else Req("J",Mid(location.hash,1,location.hash.length-1))
}
Oln.Opt=function(){Id("msgr").style.opacity=0
	if(!Dft.Oln.Id){
		OpS("ORg-0/ORg","r","註冊房間",Dft.Oln.Rgt==0)
		OpS("ORg-1/ORg","r","加入房間",Dft.Oln.Rgt==1)
	}else{if(Tn<2)Id("msgr").style.opacity=1
		Id("OptionMenu").innerHTML+="<input type='text' readonly value='"+Dft.Oln.Id+"' style='font-size:inherit;width:140px;text-align:center'/><br>"
	}OpS("Oln-MSw","k","訊息窗彈出",Dft.Oln.MSw)
}
Oln.OpK=function(){
	if(!Dft.Oln.Id){if(Id("ORg-0").checked)Req("R");else Req("J")}
	Dft.Oln.MSw=Id("Oln-MSw").checked
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
function Msg(msg,sys){Dft.Oln.Msg=-1
	firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").once("value",function(r){var msgo=r.val().Content
		if(!msgo)msgo=""
		if(!sys)firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").update({Content:msgo+Dft.Oln.Typ+":"+msg+"<br>"})
		else firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").update({
			Content:msgo+'<div style="text-align:center">-'+msg+"-</div>"
		})
	})
}
Oln.Ckr=function(){var msg=Id("msgc").innerHTML
	if(Dft.Oln.CkO){
		if(msg.search('<div style="text-align:center">-X方已加入-</div>')>-1)Dft.Oln.CkO=0
	}else if(msg.search('<div style="text-align:center">-對手已離開-</div>')<0)Msg("對手已離開",1)
	setTimeout("Oln.Ckr()",5000)
}