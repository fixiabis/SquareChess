var svr=[
	"https://script.google.com/macros/s/AKfycbzTiFNUJlqZEchqdAb0pJu8R2KfqDq77iOIeS08pT1bEl6v0YXk/exec",
	"https://script.google.com/macros/s/AKfycbw5re7dDJCy7qGTdjaPFWfunwGoI_1LSOlWZ9APPahlf9pndBMv/exec"
]
var olsvr=svr[0],Oln={}
function Req(Typ,Jcd){var id="";if(Typ=="J"){if(Jcd)id=Jcd;else id=prompt("輸入id");Dft.Oln.Typ="X"}else Dft.Oln.Typ="O"
	try{
		$.get(olsvr,
			{Typ:Typ,mode:location.search.split("?mode=")[1],id:id},
			function (r){var q=r.split(","),t=q[0];console.log(q)
				if(Typ=="R"){var url=location.href+"#"+q[2].split(":")[1]
					t+=",貼給朋友即可開始對戰";+prompt(t,url)
					Id("msgr").childNodes[1].setAttribute("data-href",url)
					Oln.Ffb()
				}
				else if(t=="進入觀賞模式"){Oln.Viw=1;alert(t)}
				else alert(t)
				if(q.length>1){Dft.Oln.Row=q[1].split(":")[1]
					if(q.length>2)Dft.Oln.Id=q[2].split(":")[1]
					else Dft.Oln.Id=id;Ini();if(Typ=="J")olsvr=svr[1]
				}
			}
		)
	}catch(e){if(confirm("暫時無法申請，將繼續重試"))Req()}
}
function Upl(cnt){if(Oln.Viw)return;Dft.Set=0
	try{
		$.get(olsvr,
			{Typ:"U",brd:cnt,id:Dft.Oln.Id,row:Dft.Oln.Row},
			function(r){var q=r.split(",");console.log(q);Dft.Oln.Cln=1
				if(q.length>1){Dft.Oln.Row=q[1].split(":")[1];Get()}else alert(r)
			}
		)
	}catch(e){if(confirm("暫時無法上傳，將繼續重試"))Upl(cnt)}
}
function Get(){
	try{
		$.get(olsvr,
			{Typ:"G",id:Dft.Oln.Id,row:Dft.Oln.Row},
			function(r){var q=r.split(",")
				if(q.length>1){Dft.Oln.Row=q[1].split(":")[1]
					var brd=q[2].split("/");brd[0]=brd[0].split(":")[1]
					if(brd[0].length<81&&Dft.Oln.Cln){alert(brd[0]);Ini()}
					else if(!brd[1]||Val(brd[1])==Tn)Get()
					else{
						Hst.Brd[brd[1]]=brd[0];Hst.Crd[brd[1]]=brd[2];Rec(brd[0]);Tn=brd[1];Rul();if(!Oln.Viw)Dft.Set=1
					}
				}
			}
		)
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