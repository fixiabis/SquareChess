var Svr="https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec"
Usr.Oln={Lgn:0,Typ:"",Row:"",Jcd:"",Upl:1,Gvp:0};Dft.Ltn=0
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
Brd.Upl=function(v){Brd.Mrk();if(!Dft.Upl)return;Usr.Lmt();var brd=Hst.Brd[Tn]+":"+Tn+":"+Hst.Crd[Tn];
	if(typeof v=="string")brd=v
	try{
		$.get(Svr,
			{Typ:"S",Jcd:Usr.Oln.Jcd,Rw:Usr.Oln.Row,Brd:brd},
			function (r){
				if(brd=="gvp"){Usr.Oln.Gvp=1;Brd.Cln();Usr.Itl()}
				else if(r=="設置完成"){Dft.LTn=Tn;Dft.Cln=0;Rul();Dft.Gvp=0;Brd.Get()}
				else alert(r)
			}
		)
	}catch(e){alert("資料上傳失敗，將繼續重試");Brd.Upl()}
}
Usr.Itl=function(){if(Usr.Typ=="Host")Usr.Lmt(1);else{Usr.Lmt();Brd.Get()}}
Usr.Lmt=function(v){if(v)Dft.Rul.Lmt=1;else Dft.Rul.Lmt=0}
/*
Gear.js 齒輪(線上對戰)

Brd.Upl()更新棋盤代碼
Brd.Get()取得棋盤代碼
Usr.Lgn()使用者登入
Usr.Gvp()使用者認輸

*/