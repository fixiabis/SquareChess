function MsO(e){var v=1,p=0
	if(e.pageX<$("#Board").offset().left)p=0
	else if(e.pageX>$("#Board").offset().left+$("#Board").width())p=1
	else v=0;Mnu(v,p)
}
function KDw(e){
	var c=e.ctrlKey,k=e.which,s=e.shiftKey,m=Id("menu"),t=Id("Setting").style.height=="0px",g=1
	if(Id("Message"))g=Id("Message").style.height=="25px"
	if(t&&g)e.preventDefault();else if(k!=27&&k!=13&&!g)return
	switch(k){
		case   8:if(t)Ctl("Udo");break
		case  13:if(!t)OpK();else if(!g)Ctl("Msg");else Ctl("Rdo");break
		case  18:if(c)Opt();break
		case  27:if(!g)Ctl("MSw",0);else OpK(1);break
		case  35:Rec(Hst.Crd.length-1);break
		case  37:if(c)Ctl("Udo");else Dft.System.Dir+="L";break
		case  38:if(c)Ctl("Cln");else Dft.System.Dir+="F";break
		case  39:if(c)Ctl("Rdo");else Dft.System.Dir+="R";break
		case  40:if(c)Ctl("Cln");else Dft.System.Dir+="B";break
		case  46:if(s)Cln();else Ctl("Cln");break
		case  89:if(c)Ctl("Rdo");break
		case  90:if(c)Ctl("Udo");break
		case  72:if(c)Ctl("Gto");break
		case 219:
			if(m.style.left=="0px"){
				if(m.style.width=="0px")Mnu(1,1);else Mnu(0,0)
			}else Mnu(1,1);break
		case 221:
			if(m.style.right=="0px"){
				if(m.style.width=="0px")Mnu(1,0);else Mnu(0,1)
			}else Mnu(1,0);break
		default:if(k>64&&k<74&&g)Dft.System.Crd=Chr(k)
				else if(k>48&&k<58||k>96&&k<106){var num=Chr(k);if(k>96)num=Chr(k-48)
					if(m.style.width!="0px"){
						if(!Dft.System.Oln)switch(Val(num)){
							case 1:Ctl("Cln");break
							case 2:Ctl("Udo");break
							case 3:Ctl("Rdo");break
							case 4:Ctl("Gto");break
							case 5:Opt();break
						}else switch(Val(num)){
							case 1:Ctl("Gvp");break
							case 2:Opt();break
						}
					}else{var crd=Dft.System.Crd;crd+=num
						if(s)Ctl("Rdo",crd);else if(!c)Set(crd)
					}
				}
	}
}
function KUp(e){
	if(e.which<41&&e.which>36&&Dft.System.Dir!=""){Set(Crd(Hst.Crd[Tn],Dft.System.Dir));Dft.System.Dir=""}
}
function Mnu(v,p){var h=0;if(v)h=160;if(Id("Setting").style.height!="0px")h=0;Id("menu").style.width=h+"px"
	if(v)if(p){Id("menu").style.left="";Id("menu").style.right="0px"}
	else{Id("menu").style.left="0px";Id("menu").style.right=""}
}
function Ctl(t,v){if(t=="Udo"||t=="Rdo")if(v&&v.length==3)return
	if(!Dft.System.Oln)switch(t){
		case"Cln":if(Tn!=Dft.Tn)Cln("確認清除棋盤?");else Cln();break
		case"Udo":if(v)Rec(Ser(v)-1);else if(Tn>Dft.Tn)Rec(Tn-1);break
		case"Rdo":if(v)Rec(Ser(v));else Rec(Tn+1);break
		case"Gto":var tn=prompt("輸入要前往的回合",Tn);if(tn>Dft.Tn)Rec(Val(tn));break
	}else switch(t){
		case"Gvp":if(Dft.Set&&confirm("確定認輸?"))Upl(Dft.Oln.Typ+"認輸,"+Enm(Dft.Oln.Typ)+"獲勝");break
		case"Msg":if(Id("msgs").value)Msg(Id("msgs").value);Id("msgs").value="";break
		case"MSw":var k=Id("Message").style.height=="25px";if(typeof v!="undefined"){if(v)k=1;else k=0}
		if(k)Id("Message").style.height="300px"
		else{Id("Message").style.height="25px";Dft.Oln.Msg=0}Atn()
	}
	switch(t){
		case "RSw":if(typeof v!="number")v=Id("Rule").style.height=="0px"
			if(v){Id("Rule").style.height=Id("UI").style.width;Ctl("Rul")}
			else Id("Rule").style.height="0px";break
		case"Rul":Id("Rule").childNodes[3].innerHTML="";var rls=[]
			for(var i=0;i<MdQ.length;i++)if(Shl.Rls[MdQ[i]])rls=Shl.Rls[MdQ[i]](rls);Shl.Rls.System(rls)
			for(var i=0;i<rls.length;i++)Id("Rule").childNodes[3].innerHTML+="<li>"+rls[i]+"</li>";break
		case"Hom":if(confirm('確定離開頁面?'))location="index.html";break
	}
}