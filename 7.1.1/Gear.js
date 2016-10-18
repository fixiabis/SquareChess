var olsvr="https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec";Dft.Upl=1
function Lgn(){if(Dft.Lgn)return;var typ="J";if(Id("Jcd").value=="")typ="L";Dft.Lgn=1;Id("Exc").style.backgroundColor="dimgray"
	$.get(olsvr,
		{Typ:typ,Act:Id("Act").value,Pwd:Id("Pwd").value,Jcd:Id("Jcd").value,Mod:location.search.split("?mode=")[1]},
		function (r){
			if(Instr(r,"/")>-1){
				if(typ=="L"){var rtn=r.split("/'")
					Dft.Usr="Host";Dft.URw=rtn[0];Dft.Jcd=rtn[1];alert("邀請代碼:"+Dft.Jcd)
				}else{
					Dft.Usr="Join";Dft.URw=r.split("/")[1];Dft.Jcd=Id("Jcd").value;alert("加入成功")
				}Ldr()
			}else{alert(r);Dft.Lgn=0;Id("Exc").style.backgroundColor="lightgray"}
		}
	)
}
function Upl(v){if(Tn==0||!Dft.Upl)return;EnS();BfS();var bd=Hst.Brd[Tn]+":"+Tn+":"+Hst.Crd[Tn];
	if(typeof v=="string")bd=v
	$.get(olsvr,
		{Typ:"S",Jcd:Dft.Jcd,Rw:Dft.URw,Brd:bd},
		function (r){
			if(bd=="gvp"){Dft.Gvp=1;Cln();if(Dft.Usr=="Host")EnS(1);else{EnS();Get()}}
			else if(r=="設置完成"){Rul();Get();Dft.Gvp=0}
			else alert(r)
		}
	)
}
function Get(){
	$.get(olsvr,
		{Typ:"R",Jcd:Dft.Jcd,Rw:Dft.URw},
		function (r){
			if(r=="gvp"){
				if(!Dft.Gvp){Dft.Gvp=1;Cln("對方認輸")}if(Dft.Usr=="Host")EnS(1);else{EnS();Get()}
			}else if(r!=""){Dft.Gvp=0
				var rtn=r.split(":")
				if(rtn[0]!=""&&rtn[1]==Tn+1){Tn=rtn[1]-1
					EnS(1);Dft.Upl=0;Set(rtn[2]);Dft.Upl=1;BfS();Rdr(rtn[0]);Rul()
				}else Get()
			}else Get()
		}
	)
}
function LMd(n){
	var s=doc.createElement("script")
	s.src="Shell/"+LdM[n]+".js"
	if(LdM[n+1])s.onload=function(){LMd(n+1)}
	else s.onload=function(){Cre();Cln();Rsz();if(Dft.Usr=="Join"){Get();EnS()}Oln()}
	doc.body.appendChild(s)
}
function Oln(){
	$.get(olsvr,
		{Typ:"O",Jcd:Dft.Jcd,Rw:Dft.URw,Usr:Dft.Usr},
		function (r){
			if(r=="對方在線"||r=="尚未有人加入"){Dft.Uln=0;Oln()}
			else if(Dft.Uln>3){
				if(confirm(r+",是否繼續等待?")){Dft.Uln=0;Oln()}else location.reload()
			}else{Dft.Uln++;Oln()}
		}
	)
}
function Cln(m,t){if(!m)m="";if(!t)t=""
	if(m!="")alert(m);Tn=0;Hst={Brd:[],Crd:[]}
	for(cd1=65;cd1<74;cd1++)for(cd2=1;cd2<10;cd2++){
		if(Instr(Qre(Chr(cd1)+cd2,"T"),t)==-1)continue;Sym(Chr(cd1)+cd2,2)
	}Brd();Wtr();if(Dft.Usr=="Host")EnS(1);else{EnS();Get()}
}
function Set(c){if(!Dft.Set)return;if(!Lmt(c)){Hst.Crd[Tn+1]=c;Qre(c,"T",Sbl[Tn%2]);Tn++;Wtr()}}
function KDw(e){if(e.which==13)Lgn()}
function EnS(v){if(v)Dft.Set=1;else Dft.Set=0}
function Acn(){if(location.hash){Id("Act").value=location.hash.split("#")[1]}}
function Gvp(){if(!Dft.Set)return;if(confirm("確定認輸?")){Upl("gvp")}}
function Udo(){}
function Rdo(){}
function Gto(){}
function Clr(){}