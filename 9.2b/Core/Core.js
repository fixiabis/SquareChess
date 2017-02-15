var Tn=0,MdQ=[],MdC=[],Sqr={
		Sym:["O","X",""," ","Z"],FtC:["","blue","red"],
		BgC:[
			"white","lightgray","dimgray","indianred","lightskyblue",
			"palevioletred","lightsteelblue","crimson","royalblue",
			"khaki","lightcoral","lightseagreen","black"
		]
	},Dft={
		Set:1,Tn:0,Blk:[],Win:0,Crd:"",Dir:"",
		Oln:{Typ:"",Id:"",Rgt:0,Cln:1,MdN:"",Msg:0,CkN:"",MSw:1,PrX:1},
		System:{Blk:0,Nxt:0,iTn:0,Qsr:0,Oln:0,Gst:0,Lmt:0,Per:0}
	},
	Hst={Brd:[],Crd:[],Sel:[],Rut:[]},Sdx={},
	Shl={Rul:{},Lmt:{},Brd:{},Mrk:{},Adn:{},Ara:{},Ckr:{},Opt:{},OpK:{},Rls:{},Ato:{}}
function Ldr(){Mbx.Ldr();Id("NightMode").style.opacity=1;setTimeout("doc.body.style.backgroundColor='black'",1000)
	if(!location.search||location.search.substr(0,6)!="?mode=")Mbx("要求格式錯誤",function(){location="index.html"})
	else{var mdN=location.search.replace("?mode=","")
		while(Instr(mdN,"%3A")>-1)mdN=mdN.replace("%3A",":")
		var md=[mdN];if(mdN.search("/")>-1)md=md[0].split("/")
		if(md[1])MdC=md[1].split(";");doc.title=md[0]
		$("#Rsw div")[0].innerHTML=doc.title;Dft.Oln.MdN=mdN
		MdQ=md[0].replace("Square.","").split(":");MdL(0)
	}
}
function MdL(v){Id("LdB").style.width=(100-Math.floor(v/MdQ.length))+"%"
	var md=doc.createElement("script");md.src="Mode/"+MdQ[v]+".js"
	if(MdQ[v+1])md.onload=function(){MdL(v+1)}
	else md.onload=function(){
		var cmd={Sys:"System",
			Cnt:"Connect",Blk:"Blocker",Div:"Divider",Kdm:"Kingdom",Adp:"Adapter",CtO:"Connect-Origin",
			Atk:"Attack",Def:"Defend",ByL:"ByLine",Fln:"Fallen",Mir:"Mirror",Sch:"Scheme",Fbd:"Forbid",
			Zmb:"Zombie",Flw:"Follow",Anm:"Anomal",Cst:"Castle",Ivt:"Invert",GmK:"Gomoku",GoL:"GoLike"
		}
		for(var i=0;i<MdC.length;i++){
			var c=MdC[i].split("."),v=c[1].split("=")
			Dft[cmd[c[0]]][v[0]]=Val(v[1])
		}
		Id("LdA").style.display="none";Itf();Rsz();Cln();Id("LdB").style.opacity=0
		if(typeof Ini!="undefined"){Dft.System.Oln=1;Joi()}
	}
	md.onerror=function(){Mbx("模式可能被移除或不存在",function(){location="remix.html"})}
	doc.body.appendChild(md)
}
function Rsz(){
	var sz=$(window).width(),scn=1,rec=1
	if($(window).height()-40<sz){sz=$(window).height()-40;scn=0}sz=Math.floor(sz/9)
	$(".bt").css("width",sz+"px");$(".bt").css("height",sz+"px")
	$(".bt").css("font-size",sz-10+"px");$(".bt").css("line-height",sz+"px")
	Id("NightMode").style.height=($(window).height()-40)+"px"
	for(i=81;i<84;i++){if(!Class("bt")[i])break
		if(Class("bt")[i].tagName=="DIV")continue
		if(i>80)Class("bt")[i].style.width=sz*4.5+"px"
		if(!Class("bt")[i+2]&&i==81)Class("bt")[i].style.width=sz*9+"px"
	}
	if(scn&&Id("LdA").style.display=="none")Id("QCtrl").style.display=""
	if(Id("QR")){
		Id("QR").style.top=Math.floor(($(window).height()-40)/2)-75+"px"
		Id("QR").style.right=Math.floor(($(window).width())/2)-75+"px"
	}Id("UI").style.width=sz*9+"px"
	Id("Rule").style.width=sz*9+"px";if(Id("Rule").style.height!="0px")Id("Rule").style.height=sz*9+"px"
	if(Id("Setting").style.height!="0px")Id("Setting").style.height=($(window).height()-40)+"px"
	Id("Recrd").style.width=$("#Board").offset().left+"px"
	if($("#Board").offset().left<80)Id("Recrd").style.display="none"
	else Id("Recrd").style.display="";Sel.Now("N");Mbx.Rsz()
}
function Itf(){var bd=""
	for(cd2=1;cd2<10;cd2++){bd+="<tr>";for(cd1=65;cd1<74;cd1++){bd+="<td id='"+Chr(cd1)+cd2+"' class='bt'></td>"}bd+="</tr>"}Id("Board").innerHTML=bd
	$("#UI").swipe(function(e){var arw=e.swipestart.coords[0]-e.swipestop.coords[0]
		if(!Dft.System.Gst)return;if(arw>0)Ctl("Udo");else if(arw<0)Ctl("Rdo")
	})
	$(".bt").click(function(){Set(this.id)})
	$(".bt").dblclick(function(){if(Dft.System.Gst)Ctl("Udo",this.id)})
	$(".bt").on("taphold contextmenu",function(){if(this.id=="Cln")Opt();else if(this.id=="Udo")Ctl("Gto");else if(Dft.System.Gst)Ctl("Rdo",this.id)});Opt();OpK(2)
}
function Cln(msg,tgt){if(!tgt)tgt="";var ckr=0;if(!msg)ckr=1;else return Mbx(msg,function(){Cln()},function(){})
	if(ckr){Tn=0;Hst={Brd:[],Crd:["E5"],Sel:[],Rut:[]}
		Qre(Sel("All"),"Sym",2);Brd();Dft.Win=0;Id("Recrd").innerHTML=""
		Adn();Rul();Hst.Brd[Tn]=Rec();Dft.Tn=Tn;Sel.Now("N")
	}
}
function Set(crd){if(!Dft.Set||crd.length!=2)return;var ckr=Ckr(crd,1)
	if(Dft.System.Qsr)ckr=!Lmt(crd)
	if(ckr){
		Qre(crd,"Sym",Tn%2);Tn++;Hst.Crd[Tn]=crd;Rul();Hst.Brd[Tn]=Rec();Sel.Now("N");Log();Dft.Win=0
		Hst.Brd.splice(Tn+1,Hst.Brd.length-Tn);if(Dft.System.Oln)Upl()
	}else if(Id("O0").style.display=="")Sel.Now("B")
}
function Qre(crd,atr,typ,sdx){var res=[],ckr=0
	if(typ&&typeof typ!="object"&&Asc(typ+"")>64)typ=Asc(typ+"")-55
	if(typeof crd=="object"){
		for(var i=0;i<crd.length;i++)res=res.concat(Qre(crd[i],atr,typ,sdx));return res
	}else if(typeof atr=="object"){
		for(var i=0;i<atr.length;i++){
			if(typeof typ=="object")res=res.concat(Qre(crd,atr[i],typ[i],sdx))
			else res=res.concat(Qre(crd,atr[i]))
		}return res
	}
	if(typeof typ!="undefined")ckr=1
	if(Id(crd))switch(atr){
		case"Opa":
			if(ckr)Id(crd).style.opacity=typ;break
		case"Sym":
			if(ckr){res=res.concat(typ)
				if(!sdx)Id(crd).innerHTML=Sqr.Sym[typ];Sdx[crd]=Sqr.Sym[typ]
			}else res=res.concat(Sqr.Sym.indexOf(Sdx[crd]));break
		case"FtC":
			if(ckr)Id(crd).style.color=Sqr.FtC[typ];break
		case"BgC":
			if(ckr)Id(crd).style.backgroundColor=Sqr.BgC[typ]
	}
	for(var i=0;i<res.length;i++)if(res[i]>9)res[i]=Chr(res[i]+55)
	if(res.length>1)return res;return res[0]
}
function Rec(brd){var res="";Dft.Win=0
	if(typeof brd=="number"&&Hst.Brd[brd]){
		Tn=brd;Log();Rec(Hst.Brd[brd]);if(!Dft.System.Qsr)Rul();return
	}
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++){
		if(brd)Qre(Chr(cd1)+cd2,"Sym",brd[((cd1-65)*9+cd2-1)])
		else res+=Qre(Chr(cd1)+cd2,"Sym")
	}return res
}
function Lmt(crd,sym){if(Qre(crd,"Sym")!=2)return 1;if(typeof sym=="undefined")sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--)if(Shl.Lmt[MdQ[i]]&&Shl.Lmt[MdQ[i]](crd,sym))return 1;return 0
}
function Ckr(crd,set){
	for(var i=MdQ.length-1;i>-1;i--){if(!Shl.Ckr[MdQ[i]])continue
		var ckr=Shl.Ckr[MdQ[i]](crd,set)
		if(ckr==2)return 1;else if(!ckr)return 0
	}if(Qre(crd,"Sym")!=2||Tn<2&&Sel("C3:G7").indexOf(crd)>-1&&Dft.System.Lmt)return 0;return 1
}
function Mrk(){Brd();var nxc=BJd()
	if(Dft.System.Nxt){nxc=nxc.concat(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==(Tn+1)%2)return 1}))
		Qre(nxc,"Opa",0.2)
	}
	if(Dft.System.iTn){Qre(Hst.Crd[Tn],"FtC",1);Qre(Hst.Crd[Tn-1],"FtC",1)}
	for(var i=0;i<MdQ.length;i++)if(Shl.Mrk[MdQ[i]])Shl.Mrk[MdQ[i]]()
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==3)return 1;return 0}),"BgC",2)
}
function Brd(){Qre(Sel("All"),["FtC","BgC"],[0,0]);Qre(Sel("All"),"Opa",1)
	var ord=function(crd){
			var cd1=Asc(crd[0]),cd2=Val(crd[1]);if((cd1+cd2)%2==0)return 1
		};Qre(Flt(Sel("All"),ord),"BgC",1)
	for(var i=0;i<MdQ.length;i++)if(Shl.Brd[MdQ[i]])Shl.Brd[MdQ[i]]()
}
function Adn(){
	for(var i=0;i<MdQ.length;i++)if(Shl.Adn[MdQ[i]])Shl.Adn[MdQ[i]]()
	if(Dft.System.Blk&&(!Dft.System.Oln||Dft.Oln.Typ=="O")){var s=Dft.System.Blk
		while(s){var cd1=Math.floor(Rnd()*9)+65,cd2=Math.floor(Rnd()*9)+1
			if((cd1+cd2)%2==0&&Qre(Chr(cd1)+cd2,"Sym")==2&&Dft.Blk.indexOf(Chr(cd1)+cd2)<0){Qre(Chr(cd1)+cd2,["Sym","BgC"],[3,2]);s--}
		}
	}
}
function Rul(){
	for(var i=MdQ.length-1;i>-1;i--)if(Shl.Rul[MdQ[i]])if(Jdg(Shl.Rul[MdQ[i]]()))break;Mrk()
}
function Opt(){Id("Setting").style.height=($(window).height()-40)+"px";var id=Dft.Oln.Id
	Id("OptionMenu").childNodes[0].innerHTML="<div style='height:10px'></div>"
	OpS("","1","基本設定");Id("Gear").style.transform="rotate(-66deg)"
	if(!Dft.System.Oln){
		OpS("System-Blk","t","障礙數量:",Dft.System.Blk)
		OpS("System-Oln","k","線上對戰",Dft.System.Oln)
		OpS("System-Qsr","k","加速查詢",Dft.System.Qsr)
		OpS("System-Per","k","提升效能",Dft.System.Per)
	}else Oln.Opt()
	if(MdQ.indexOf("Connect")>-1||MdQ.indexOf("Connect-Origin")>-1||MdQ.indexOf("Divider")>-1||MdQ.indexOf("Adapter")>-1||MdQ.indexOf("Kingdom")>-1)if(!Dft.System.Oln)OpS("System-Lmt","k","首回限制",Dft.System.Lmt)
	OpS("System-iTn","k","上回設置",Dft.System.iTn)
	if(MdQ.indexOf("Connect")>-1||MdQ.indexOf("Divider")>-1||MdQ.indexOf("Adapter")>-1||MdQ.indexOf("Connect-Origin")>-1)OpS("System-Nxt","k","次回設置",Dft.System.Nxt)
	OpS("System-Gst","k","手勢操作",Dft.System.Gst)
	if($("#Recrd").width()>10)OpS("System-Rec","k","顯示過程",Id("Recrd").style.display!="none")
	OpS("System-Nit","k","夜間模式",Id("NightMode").style.opacity!=1)
	OpS("System-Ful","k","全螢幕模式",doc.webkitIsFullScreen||doc.mozFullScreen||doc.fullscreen)
	OpS("System-Rul","k","顯示規則",Id("Rule").style.height!="0px")
	OpS("System-Rpt","k","回報錯誤",0)
	for(var i=0;i<MdQ.length;i++)if(Shl.Opt[MdQ[i]])Shl.Opt[MdQ[i]]()
	Id("OptionMenu").childNodes[0].innerHTML+="<br style='line-height:40px'>"
}
function OpK(k){Id("Setting").style.height="0px";Id("Gear").style.transform="";if(k==1)return
	if(!Dft.System.Oln){
		if(Id("System-Oln").checked)location="btchs.html"+location.search
		if(Val(Id("System-Blk").value)!=NaN&&Id("System-Blk").value!="")Dft.System.Blk=Val(Id("System-Blk").value)
		if(Dft.System.Blk>27)Dft.System.Blk=27
		Dft.System.Qsr=Id("System-Qsr").checked
		Dft.System.Per=Id("System-Per").checked
	}else if(k!=2)Oln.OpK()
	if(Id("System-Nit").checked)Id("NightMode").style.opacity=0.3;else Id("NightMode").style.opacity=1
	if(Id("System-Ful").checked){
		if(Id("NightMode").mozRequestFullScreen)Id("NightMode").mozRequestFullScreen()
		if(Id("NightMode").webkitRequestFullScreen)Id("NightMode").webkitRequestFullScreen()
	}else{
		if(doc.mozCancelFullScreen)doc.mozCancelFullScreen()
		if(doc.webkitCancelFullScreen)doc.webkitCancelFullScreen()
	}
	if(Id("System-Rul").checked)Ctl("RSw",1);else Ctl("RSw",0)
	if(Id("System-Rec")&&!Id("System-Rec").checked)Id("Recrd").style.display="none";else Id("Recrd").style.display=""
	if(Id("System-Nxt"))Dft.System.Nxt=Id("System-Nxt").checked;Dft.System.Gst=Id("System-Gst").checked
	if(Id("System-Lmt"))Dft.System.Lmt=Id("System-Lmt").checked;Dft.System.iTn=Id("System-iTn").checked
	if(Dft.Tn==Tn)Cln();for(i=0;i<MdQ.length;i++)if(Shl.OpK[MdQ[i]])Shl.OpK[MdQ[i]]();Mrk();Ctl("Rul")
	if(Id("System-Rpt").checked)Ctl("Rpt")
}
function OpS(id,typ,til,dft){var input="",ck="",mg=10,ls=Id("OptionMenu").childNodes[0].childNodes
	if(dft)ck="checked";
	if(ls.length>1){mg=Val(ls[ls.length-2].style.marginLeft.split("px")[0])
		if(ls[ls.length-2].childNodes[0].tagName!="INPUT")mg+=10
	}
	switch(typ){
		case"1":mg=0;input="<font style='font-size:25px'>"+til+":</font>";break
		case"2":mg=10;input="<font style='font-size:23px'>"+til+":</font>";break
		case"t":input=til+"<input type='text' id='"+id+"' placeholder='"+dft+"' class='Opt' style='width:40px;text-align:right'/>";break
		case"r":var tid=id.split("/");input="<input type='radio' "+ck+" id='"+tid[0]+"' class='Opt' name='"+tid[1]+"' style='zoom:1.5'/>"+til;break
		case"k":input="<input type='checkbox' "+ck+" id='"+id+"' class='Opt' style='zoom:1.5'/>"+til;break
	}Id("OptionMenu").childNodes[0].innerHTML+="<label style='margin-left:"+mg+"px'>"+input+"</label><br>"
}
function Jdg(msg){
	if(msg){Log(msg);if(Dft.System.Oln)Upl(msg);else Cln(msg+",是否再來一局?");Dft.Win=1;return 1}
}
function Log(vlu){Id("Recrd").innerHTML=""
	for(var i=1;i<Tn+1;i++)Id("Recrd").innerHTML+="<div>第"+i+"回合:"+Sqr.Sym[(i-1)%2]+"方將符號設置於"+Hst.Crd[i]+"</div>";Id("Recrd").scrollTop=Id("Recrd").scrollHeight
}
function DeB(id){try{firebase.database()}catch(e){Svr()}
	firebase.database().ref("Report/"+id).once("value",function(r){
		var ij=r.val()
		for(var i in ij.Dft)Dft[i]=ij.Dft[i]
		for(var i in ij.Hst){Hst[i]=[]
			for(var j in ij.Hst[i]){
				Hst[i][Val(j)]=ij.Hst[i][j]
			}
		}Mbx(ij.State,function(){Ctl("Rdo",Hst.Crd[Hst.Crd.length-1])})
	})
}
$(window).load(function(){Ldr()}).resize(function(){Rsz()}).mouseover(function(event){MsO(event)}).keydown(function(event){KDw(event)}).keyup(function(event){KUp(event)}).contextmenu(function(){event.preventDefault()}).scroll(function(){Rsz()}).on("beforeunload",function(){if(Tn!=Dft.Tn)return "棋局尚未結束，確定離開?"}).on("unload",function(){if(Msg)Msg(Dft.Oln.Typ+"方關閉網頁",1)})
