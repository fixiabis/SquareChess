var Oln={}
function Req(Typ,Jcd,id){
	if(Typ=="M"){Dft.Oln.Pbl=1
		firebase.database().ref("Matchs").once("value",function(r){var room=r.val(),t="",dir=[]
			for(var i in room)if(room[i].ModeName==Dft.Oln.MdN)dir.push(i)
			if(dir.length==0)Mbx("暫無該模式的房間，自行建立房間等待別人加入?",function(){Req("R")},function(){Opt()})
			else{
				var dirid=dir[Math.floor(dir.length*Math.random())]
				firebase.database().ref("Matchs/"+dirid).remove(function(){Mbx("正在驗證...成功後將自動導向")
					setTimeout(function(){firebase.database().ref("Matchs/"+dirid).once("value",
						function(r){
							if(r.val()!=null){
								location.hash=dirid;Joi();Mbx.Exe(function(){
									firebase.database().ref("Matchs/"+dirid).remove()
								})
							}else Mbx("驗證失敗，繼續進行隨機配對?",function(){Req("M")},function(){})
						}
					)},1000)
				})
			}
		});return
	}Dft.Oln.CkN=RJC();Dft.Set=0;if(!id)id="";var req={
		ModeName:doc.title,BoardContent:"",LastActive:new Date().getTime(),CheckNum:Dft.Oln.CkN,PlayerX:"N",Message:{Content:""},PlayerCk:{O:"Y",X:"N"}
	}
	if(Jcd)id=Jcd
	if(Typ=="J"){if(!Jcd)while(!id&&id!=null)id=Mbx("輸入id",function(id){Req(Typ,Jcd,id)},function(){},"");Dft.Oln.Typ="X";if(id==null)return}
	else{Dft.Oln.Typ="O";if(!Jcd)id=RJC()}Dft.Oln.Id=id
	firebase.database().ref("Battle/"+id+"/PlayerX").once("value",function(r){
		if(r.val()!=null&&Typ=="R"){id=RJC();return Req(Typ,id)}
		if(Typ=="R")firebase.database().ref("Battle/"+id).update(req)
		firebase.database().ref("Battle/"+id+"/PlayerX").once("value",function(r){
			if(Typ=="R"){var url="https://squarechessgame.github.io/?"+doc.title+"@"+id
				if(!Dft.Oln.Pbl){Id("cpy").setAttribute("data-clipboard-text",url)
					Mbx("註冊成功,貼給朋友即可開始對戰,點選確定可用QRCode掃描或以Messenger傳送連結加入房間,點按取消可複製網址",
					function(){Opt()},function(){Id("cpy").click()},url)
				}
				Id("msgr").childNodes[1].setAttribute("data-href",url);Oln.Ffb();Ini()
				Id("QR").style.background="url(https://chart.apis.google.com/chart?cht=qr&chs=150x150&chl="+url+")"
			}else if(Typ=="J"&&r.val()=="N"){
				firebase.database().ref("Battle/"+id+"/CheckNum").once("value",function(r){
					Msg("X方已加入",1);Dft.Oln.CkN=r.val();Ini()
					firebase.database().ref("Battle/"+id).update({PlayerX:"Y",CheckNum:r.val(),LastActive:new Date().getTime()})
				})
			}else if(!r.val())Mbx("此房間不存在",function(){location.hash="";location.reload()})
			else{Mbx("進入觀賞模式",function(){Dft.Oln.Typ="V";Ini()})}
		});if(Notification&&Notification.permission!="granted")Notification.requestPermission()
	})
}
function Upl(cnt){if(Dft.Oln.Typ=="V"||!Dft.Oln.Id||!Dft.Set)return;if(!cnt)cnt=Tn
	Dft.Set=0;var req={CheckNum:Dft.Oln.CkN,BoardContent:[cnt,Hst],ModeName:Dft.Oln.MdN};Atn(Dft.Oln.MdN)
	req.LastActive=new Date().getTime()
	firebase.database().ref("Battle/"+Dft.Oln.Id).update(req);Dft.Oln.Cln=1
}
function Ini(v){Dft.System.Oln=0;Cln();Dft.System.Oln=1;Dft.Oln.Cln=0
	if(!v){location.hash=Dft.Oln.Id;if(Dft.Oln.Typ=="O")Dft.Set=1
		if(Dft.Oln.Typ!="V"){
			if(Dft.Oln.Typ=="O"&&Dft.Oln.Pbl){
				firebase.database().ref("Matchs/"+Dft.Oln.Id).update({ModeName:Dft.Oln.MdN})
				firebase.database().ref("Matchs/"+Dft.Oln.Id).on("value",function(){
					firebase.database().ref("Matchs/"+Dft.Oln.Id).update({ModeName:Dft.Oln.MdN})
				})
			}Cookies.set(Dft.Oln.Id,Dft.Oln.CkN+"/"+Dft.Oln.Typ,{expires:1})
			firebase.database().ref("Battle/"+Dft.Oln.Id+"/PlayerCk").on("value",function(r){
				var req={CheckNum:Dft.Oln.CkN,PlayerCk:{}}
				req.PlayerCk[Dft.Oln.Typ]="Y";req.PlayerCk[Enm(Dft.Oln.Typ)]=r.val()[Enm(Dft.Oln.Typ)]
				firebase.database().ref("Battle/"+Dft.Oln.Id).update(req)
			});Oln.Ckr()
		}
		firebase.database().ref("Battle/"+Dft.Oln.Id+"/BoardContent").on("value",function(r){var d=r.val()
			if(d){var tn=d[0],hst=d[1]
				if(Val(tn).toString()=="NaN"&&(Dft.Oln.Cln||Dft.Oln.Typ=="V")){
					if(tn){Ini(1);Mbx(tn,function(){if(Dft.Oln.Typ=="O")Dft.Set=1;else Dft.Set=0})}
				}else if(Val(tn).toString()!="NaN"||Dft.Oln.Typ=="V"){var k=1,c=["Brd","Crd"]
					for(var i=0;i<c.length;i++)for(var j in hst[c[i]]){
						if(!Hst[c[i]][Val(j)])Hst[c[i]][Val(j)]=hst[c[i]][j]
						else if(Hst[c[i]][Val(j)]!=hst[c[i]][j]){k=0;Msg("棋盤資料異常",1)}
					}
					if(k){Rec(Val(tn));Rul()
						if(Dft.Oln.Typ!="V"&&Sqr.Sym[(Val(tn)%2)]==Dft.Oln.Typ){
							Dft.Set=1;Atn("輪到你下了");Sel.Now("N");Log()
						}else Dft.Set=0
					}
				}
			}
		})
		firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").on("value",function(r){
			if(r.val()&&Id("msgc").innerHTML!=r.val()){var msg=r.val().Content;if(msg=="")return
				Id("msgc").innerHTML=msg;Dft.Oln.Msg++;Atn()
				Ctl("MSw",Dft.Oln.MSw);Id("msgc").scrollTop=Id("msgc").scrollHeight
				if(msg.search('<div style="text-align:center">-X方已加入-</div>')>-1&&Dft.Oln.PrX){
					$(".join").css("display","none");OpK(1);Dft.Oln.PrX=0;
				}
				if(Notification){var ssm=["X方已加入","O方可能離線","X方可能離線","O方恢復房間","X方恢復房間","O方關閉房間","X方關閉房間","棋盤資料異常"]
					for(var i=0;i<ssm.length;i++){
						while(msg.search('<div style="text-align:center">-'+ssm[i]+'-</div>')>-1)msg=msg.replace('<div style="text-align:center">-'+ssm[i]+'-</div>',"")
					}
					var m=msg.split("<br>")
					if(m.length>1&&m[m.length-2][0]!=Dft.Oln.Typ)var n=new Notification("即時訊息",{
						body:m[m.length-2],icon:"Pics/Icon.png"
					})
				}
			}
		})
	}
}
function Atn(v){if(v&&v.search("/")>-1)v=v.split("/")[0]
	if(v)doc.title=v
	else if(doc.title[doc.title.length-1]==")")doc.title=doc.title.split("(")[0]
	if(Dft.Oln.Msg>0)doc.title+="("+Dft.Oln.Msg+")";Tag("header")[0].innerHTML=doc.title
}
function Joi(){
	if(location.hash.length<9)Opt()
	else if(Cookies.get(location.hash.replace("#",""))){
		var Inf=Cookies.get(location.hash.replace("#","")).split("/")
		Dft.Oln.Id=location.hash.replace("#","");Dft.Oln.CkN=Inf[0]
		Dft.Oln.Typ=Inf[1];Ini();Msg(Dft.Oln.Typ+"方恢復房間",1)
	}else Req("J",location.hash.replace("#",""))
}
Oln.Opt=function(){Id("msgr").style.opacity=0
	if(!Dft.Oln.Id){Dft.Set=0
		OpS("ORg-0/ORg","r","隨機配對",Dft.Oln.Rgt==0)
		OpS("ORg-1/ORg","r","註冊房間",Dft.Oln.Rgt==1)
		OpS("ORg-2/ORg","r","加入房間",Dft.Oln.Rgt==2)
	}else{if(Tn<2)Id("msgr").style.opacity=1
		Id("OptionMenu").childNodes[0].innerHTML+="<label style='margin-left:10px'><input type='text' readonly value='"+Dft.Oln.Id+"' style='font-size:inherit;width:200px;text-align:center;height:21px'/></label><br>"
	}OpS("Oln-MSw","k","訊息窗彈出",Dft.Oln.MSw)
}
Oln.OpK=function(){
	if(!Dft.Oln.Id){Dft.Oln.Pbl=0
		if(Id("ORg-0").checked)Req("M")
		else if(Id("ORg-1").checked)Req("R")
		else Req("J")
	}Dft.Oln.MSw=Id("Oln-MSw").checked
}
Oln.Ffb=function(){
	(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0]
		if(d.getElementById(id))return;js=d.createElement(s);js.id=id;
		js.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
		fjs.parentNode.insertBefore(js, fjs)
	}(document,'script','facebook-jssdk'))
}
Oln.Ckr=function(){
	firebase.database().ref("Battle/"+Dft.Oln.Id+"/PlayerCk").once("value",function(r){
		if(r.val()[Enm(Dft.Oln.Typ)]=="N"&&Id("msgc").innerHTML.search('<div style="text-align:center">-X方已加入-</div>')>-1)Msg(Enm(Dft.Oln.Typ)+"方可能離線",1)
		var req={CheckNum:Dft.Oln.CkN,PlayerCk:{}}
		req.PlayerCk[Enm(Dft.Oln.Typ)]="N";req.PlayerCk[Dft.Oln.Typ]=r.val()[Dft.Oln.Typ]
		firebase.database().ref("Battle/"+Dft.Oln.Id).update(req)
		setTimeout("Oln.Ckr()",10000)
	})
}
function Msg(msg,sys){Dft.Oln.Msg=-1
	firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").once("value",function(r){var msgo=r.val().Content
		if(!msgo)msgo="";var stp=msg+"<br>";if(sys)stp='<div style="text-align:center">-'+msg+"-</div>"
		var rms=msgo.split(stp)
		if(rms.length==1||!(rms[rms.length-1]=="")){
			if(!sys)firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").update({
				Content:msgo+Dft.Oln.Typ+":"+msg+"<br>"
			})
			else firebase.database().ref("Battle/"+Dft.Oln.Id+"/Message").update({
				Content:msgo+'<div style="text-align:center">-'+msg+"-</div>"
			})
		}
	})
}window.addEventListener("offline",function(){Mbx("已離線",function(){})})
Svr()