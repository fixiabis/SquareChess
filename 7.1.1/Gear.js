var olsvr="https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec";Dft.Upl=1
function Lgn(){if(Dft.Lgn)return;var typ="J";if(Id("Jcd").value=="")typ="L";Dft.Lgn=1
	$.get(olsvr,
		{Typ:typ,Act:Id("Act").value,Pwd:Id("Pwd").value,Jcd:Id("Jcd").value,Mod:location.search.split("?mode=")[1]},
		function (r){
			if(typ=="L"){
				if(Instr(r,"/'")>-1){var rtn=r.split("/'")
					Dft.Usr="Host";Dft.URw=rtn[0];Dft.Jcd=rtn[1];alert("邀請代碼:"+Dft.Jcd);Ldr()
				}else{alert(r);Dft.Lgn=0}
			}else{
				if(Instr(r,"/")>-1){Dft.Usr="Join";Dft.URw=r.split("/")[1];Dft.Jcd=Id("Jcd").value;alert("加入成功");Ldr()}
				else{alert(r);Dft.Lgn=0}
			}
		}
	)
}
function Upl(){if(Tn==0||!Dft.Upl)return;EnS();BfS()
	$.get(olsvr,
		{Typ:"S",Jcd:Dft.Jcd,Rw:Dft.URw,Brd:Hst.Brd[Tn]+":"+Tn+":"+Hst.Crd[Tn]},
		function (r){
			if(Hst.Brd[Tn]==""&&Dft.Usr=="Host")EnS(1)
			else if(r=="設置完成")Get()
			else alert(r)
		}
	)
}
function Get(){
	$.get(olsvr,
		{Typ:"R",Jcd:Dft.Jcd,Rw:Dft.URw},
		function (r){
			if(r!=""){
				var rtn=r.split(":");console.log(r)
				if(rtn[0]!=""&&rtn[1]>Tn){EnS(1);Dft.Upl=0;Set(rtn[2]);Dft.Upl=1;Rdr(rtn[0]);BfS();Rul()}
				else Get()
			}else Get()
		}
	)
}
function LMd(n){
	var s=doc.createElement("script")
	s.src="Shell/"+LdM[n]+".js"
	if(LdM[n+1])s.onload=function(){LMd(n+1)};else s.onload=function(){Cre();Cln();Rsz();if(Dft.Usr=="Join"){Get();EnS()}}
	doc.body.appendChild(s)
}
function KDw(e){if(e.which==13)Lgn()}
function EnS(v){if(v)Dft.Set=1;else Dft.Set=0}
function Acn(){if(location.hash){Id("Act").value=location.hash.split("#")[1]}}
function Udo(){}
function Rdo(){}
function Gto(){}
function Clr(){}