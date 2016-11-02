var Svr="https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec"
Usr.Oln={Lgn:0,Typ:"",Row:"",Jcd:"",Upl:1,Gvp:0,LTn:0}
Usr.Acn=function(){
	if(location.hash){Id("Act").value=location.hash.split("#")[1]}
}
Usr.Lgn=function(){
	if(Usr.Oln.Lgn)return;var typ="J";if(Id("Jcd").value=="")typ="L";Usr.Oln.Lgn=1
	Id("Exc").style.backgroundColor="dimgray"
	try{
		$.get(Svr,{
				Typ:typ,
				Act:Id("Act").value,
				Pwd:Id("Pwd").value,
				Jcd:Id("Jcd").value,
				Mod:location.search.split("?mode=")[1]
			},
			function(r){
				if(Instr(r,"/")>-1){
					if(typ=="L"){var rtn=r.split("/'")
						Usr.Oln.Typ="Host";Usr.Oln.Row=rtn[0]
						Usr.Oln.Jcd=rtn[1];alert("邀請代碼:"+Usr.Oln.Jcd)
					}else{
						Usr.Oln.Typ="Join";Usr.Oln.Row=r.split("/")[1]
						Usr.Oln.Jcd=Id("Jcd").value;alert("加入成功")
					}Ldr()
				}else{alert(r);Usr.Oln.Lgn=0;Id("Exc").style.backgroundColor="lightgray"}
			}
		)
	}catch(e){alert("暫時無法登入，將繼續重試");Usr.Lgn()}

}
Brd.Upl=function(v){Brd.Mrk();if(!Usr.Oln.Upl)return;Usr.Lmt(1);var brd=Hst.Brd[Tn]+":"+Tn+":"+Hst.Crd[Tn];
	if(typeof v=="string")brd=v
	try{
		$.get(Svr,
			{Typ:"S",Jcd:Usr.Oln.Jcd,Rw:Usr.Oln.Row,Brd:brd},
			function (r){
				if(brd=="gvp"){Usr.Oln.Gvp=1;Brd.Cln();Usr.Itl()
				}else if(r=="設置完成"){
					Usr.Oln.LTn=Tn;Usr.Oln.Cln=0;var win=Rul.Jdg()
					if(win)Brd.Cln(win);Usr.Oln.Gvp=0;Brd.Get()
				}else alert(r)
			}
		)
	}catch(e){alert("資料上傳失敗，將繼續重試");Brd.Upl()}
}
Usr.Itl=function(){if(Usr.Oln.Typ=="Host")Usr.Lmt();else{Usr.Lmt(1);Brd.Get()}}
Usr.Lmt=function(v){if(v)Dft.Rul.Lmt=1;else Dft.Rul.Lmt=0}
Brd.Get=function(){
	try{
		$.get(Svr,
			{Typ:"R",Jcd:Usr.Oln.Jcd,Rw:Usr.Oln.Row},
			function (r){console.log(r)
				if(r=="gvp"){
					if(!Usr.Oln.Gvp){Usr.Oln.Gvp=1;Brd.Cln("對方認輸")}Usr.Itl()
				}else if(r!=""){
					var rtn=r.split(":")
					if(rtn[0]!=""&&rtn[1]!=Usr.Oln.LTn){Tn=rtn[1]-1;Usr.Oln.LTn=rtn[1]
						Usr.Lmt();Usr.Oln.Upl=0;Usr.Set(rtn[2]);Usr.Oln.Upl=1;
						if(!Usr.Oln.Cln)Brd.Rec(rtn[0]);Brd.Mrk()
					}else Brd.Get()
				}else Brd.Get()
			}
		)
	}catch(e){alert("無法取得資料，將繼續重試");Brd.Get()}
}
Usr.Gvp=function(){if(!Dft.Rul.Lmt)return;if(confirm("確定認輸?")){Brd.Upl("gvp")}}
Usr.KDw=function(e){var ctl=e.ctrlKey,key=e.which,sft=e.shiftKey
	switch(key){
		case 13:Usr.Lgn();break
		case 37:if(Instr(Usr.Dir,"L")<0)Usr.Dir+="L";break
		case 38:if(Instr(Usr.Dir,"F")<0)Usr.Dir+="F";break
		case 39:if(Instr(Usr.Dir,"R")<0)Usr.Dir+="R";break
		case 40:if(Instr(Usr.Dir,"B")<0)Usr.Dir+="B";break
		default:
			if(key>64&&key<74&&!ctl&&!Id("Act")){
				Usr.Set(Chr(key)+prompt("輸入座標(列)"))
			}
	}
}//使用者鍵盤按下
Usr.KUp=function(e){
	if(e.which<41&&e.which>36&&Usr.Dir!=""&&!Id("Act")){Usr.Set(Crd(Hst.Crd[Tn],Usr.Dir));Usr.Dir=""}
}//使用者鍵盤放開
function MdL(ord){
	var s=doc.createElement("script");s.src="Shell/"+MdQ[ord]+".js"
	if(MdQ[ord+1])s.onload=function(){MdL(ord+1)}
	else s.onload=function(){
		Usr.Itf();Id("UC").innerHTML="<div class='bt' onClick='Usr.Gvp()'>GiveUp</div>";
		Brd.Cln();Usr.Itf.Rsz();Usr.Itf.Brd()
	};doc.body.appendChild(s)
}//模式裝載
Brd.Udo=function(){}
Brd.Rdo=function(){}
Brd.Gto=function(){}
Usr.Cln=function(){}
Brd.Rec=function(brd){var atr=["S","F","B"],rbd="",cds=Brd.Sel("All")
	if(typeof brd=="number")return
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++)for(var i=0;i<3;i++){
		if(brd)Brd[Chr(cd1)+cd2][atr[i]]=Val(brd[Val(((cd1-65)*9+cd2-1)*3+Val(i))])
		else rbd+=Brd[Chr(cd1)+cd2][atr[i]]
	}Brd.Mrk();Usr.Itf.Brd();return rbd
}//讀取/紀錄棋盤代碼
Usr.Set=function(crd){
	if(!Rul.Lmt(crd)){
		Brd[crd].S=Tn%2;Tn++;var win=Rul.Jdg()
		if(win)Brd.Cln(win);Hst.Crd[Tn]=crd;
		Hst.Brd[Tn]=Brd.Rec();Brd.Upl()
	}
}//設置符號
var Cln=Brd.Cln.Cnt
Brd.Cln=function(msg,sel,tgt){var clc=0;if(!msg)clc=1;else clc=confirm(msg);if(!tgt)tgt=""
	if(clc){if(!sel)sel="All";sel=Brd.Sel(sel);Tn=0;Hst.Brd=[];Hst.Crd=[]
		Brd.Qre(sel,["F","B"],[0,0])
		Brd.Qre(Crd.Flt(sel,function(crd){
			if(Instr(Sqr.S[Brd[crd].S],tgt)>-1)return 1;return 0
		}),"S",2)
		Brd.Qre(Crd.Flt(sel,function(crd){
			return !((Asc(crd[0])+Val(crd[1]))%2)
		}),"B",1)
	}Usr.Oln.Upl=0;Brd.Cln.Ext();Brd.Adn();Hst.Brd[Tn]=Brd.Rec()
	Usr.Itf.Brd();Usr.Oln.Upl=1;Usr.Itl();Usr.Oln.Cln=1
}//清除棋盤指定項目
Brd.Cln.Ext=function(){}
Brd.Cln.Cnt=Cln