var olsvr="https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec"
function Lgn(){var typ="J";if(Id("Jcd").value=="")typ="L"
	$.get(olsvr,
		{Typ:typ,Act:Id("Act").value,Pwd:Id("Pwd").value,Jcd:Id("Jcd").value,Mod:location.search.split("?mode=")[1]},
		function (r){
			if(typ=="L"){
				if(Instr(r,"/'")>-1){var rtn=r.split("/'")
					Dft.Usr=Id("Act").value;Dft.URw=rtn[0];Dft.Jcd=rtn[1];alert("邀請代碼:"+Dft.Jcd)
				}else alert(r)
			}else{
				if(Val(r)!=NaN){
					Dft.Usr=Id("Act").value;Dft.URw=r;Dft.Jcd=Id("Jcd").value;alert("加入成功");Get()
				}else alert(r)
			}Ldr()
		}
	)
}
function Upl(){if(Tn==0)return
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Id(Chr(cd1)+cd2).onclick=function(){}
	$.get(olsvr,
		{Typ:"S",Jcd:Dft.Jcd,Rw:Dft.URw,Brd:Hst.Brd[Tn]+":"+Tn},
		function (r){
			if(r=="設置完成")Get();else alert(r)
		}
	)
}
function Get(){
	$.get(olsvr,
		{Typ:"R",Jcd:Dft.Jcd,Rw:Dft.URw},
		function (r){
			if(r!=""){
				var rtn=r.split(":");console.log(r)
				if(rtn[1]!=Tn){Rdr(rtn[0]);Tn=Val(rtn[1]);Rul()
					for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++)Id(Chr(cd1)+cd2).onclick=function(){Set(this.id)}
				}else Get()
			}else Get()
		}
	)
}
function Udo(){}
function Rdo(){}
function Gto(){}