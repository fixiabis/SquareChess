var Tn=0,MdQ=[],Sqr={
		Sym:["O","X",""," ","Z"],FtC:["","blue","red"],
		BgC:[
			"white","lightgray","dimgray","indianred","lightskyblue",
			"palevioletred","lightsteelblue","crimson","royalblue",
			"khaki","lightcoral","lightseagreen","black"
		]
	},Dft={
		Set:1,Tn:0,Blk:[],
		Oln:{Typ:"",Id:"",Rgt:0,Cln:1,MdN:"",Msg:0,CkN:"",Lst:"",CkO:1,Ckr:0,MSw:1},
		System:{Blk:0,Nxt:0,Crd:"",Dir:"",iTn:0,Qsr:0,Oln:0,Gst:0}
	},
	Hst={Brd:[],Crd:[],Sel:[],Rut:[]},
	Shl={Rul:{},Lmt:{},Brd:{},Mrk:{},Adn:{},Ara:{},Ckr:{},Opt:{},OpK:{},Rls:{}}
function Ldr(){if(!location.search||location.search.substr(0,6)!="?mode="){alert("要求格式錯誤");location="index.html"}
	var mdN=location.search.replace("?mode=","")
	while(Instr(mdN,"%3A")>-1)mdN=mdN.replace("%3A",":")
	doc.title=mdN;MdQ=mdN.replace("Square.","").split(":");MdL(0)
}
function MdL(v){Id("LdB").style.width=(100-Math.floor(v/MdQ.length))+"%"
	var md=doc.createElement("script");md.src="Mode/"+MdQ[v]+".js"
	if(MdQ[v+1])md.onload=function(){MdL(v+1)}
	else md.onload=function(){
		Id("LdA").style.display="none";Itf();Cln();Rsz();Id("LdB").style.opacity=0
		if(typeof Ini!="undefined"){Dft.System.Oln=1;Joi()}
	}
	md.onerror=function(){alert("模式可能被移除或不存在");location="index.html"}
	doc.body.appendChild(md)
}
function Rsz(){
	var sz=$(window).width(),scn=1
	if($(window).height()-40<sz){sz=$(window).height()-40;scn=0}sz=Math.floor(sz/9)
	$(".bt").css("width",sz+"px");$(".bt").css("height",sz+"px");$(".bt").css("font-size",sz-15+"px")
	Id("NightMode").style.height=($(window).height()-40)+"px"
	for(i=81;i<83;i++){if(!Class("bt")[i])break
		if(i>80)Class("bt")[i].style.width=sz*4.5+"px"
		if(!Class("bt")[i+1]&&i==81)Class("bt")[i].style.width=sz*9+"px"
	}if(scn&&Id("LdA").style.display=="none")Id("QCtrl").style.display=""
	if(Id("QR")){
		Id("QR").style.top=Math.floor(($(window).height()-40)/2)-75+"px"
		Id("QR").style.right=Math.floor(($(window).width())/2)-75+"px"
	}
	Id("Board").style.display="";Id("UI").style.width=sz*9+"px"
	Id("Rule").style.width=sz*9+"px";if(Id("Rule").style.height!="0px")Id("Rule").style.height=sz*9+"px"
	if(Id("Setting").style.height!="0px")Id("Setting").style.height=($(window).height()-40)+"px"
}
function Itf(){var bd=""
	for(cd2=1;cd2<10;cd2++){bd+="<tr>";for(cd1=65;cd1<74;cd1++){bd+="<td id='"+Chr(cd1)+cd2+"' class='bt'></td>"}bd+="</tr>"}Id("Board").innerHTML=bd
	$("#UI").swipe(function(e){var arw=e.swipestart.coords[0]-e.swipestop.coords[0]
		if(!Dft.System.Gst)return;if(arw>0)Ctl("Udo");else if(arw<0)Ctl("Rdo")
	})
	$(".bt").click(function(){Set(this.id)})
	$(".bt").dblclick(function(){if(Dft.System.Gst)Ctl("Udo",this.id)})
	$(".bt").on("taphold contextmenu",function(){if(Dft.System.Gst)Ctl("Rdo",this.id)})
}
function Cln(msg,tgt){if(!tgt)tgt="";var ckr=0;if(!msg)ckr=1;else ckr=confirm(msg)
	if(ckr){Tn=0;Hst={Brd:[],Crd:[],Sel:[],Rut:[]}
		Qre(Sel("All"),"Sym",2);Brd()
		Adn();Rul();Hst.Brd[Tn]=Rec();Dft.Tn=Tn
	}
}
function Set(crd){if(!Dft.Set)return;var ckr=Ckr(crd);if(Dft.System.Qsr)ckr=!Lmt(crd)
	if(ckr){
		Qre(crd,"Sym",Tn%2);Tn++;Hst.Crd[Tn]=crd;Rul();Hst.Brd[Tn]=Rec()
		Hst.Brd.splice(Tn+1,Hst.Brd.length-Tn);if(Dft.System.Oln)Upl(Hst.Brd[Tn]+"/"+Tn+"/"+Hst.Crd[Tn])
	}
}
function Qre(crd,atr,typ){var res=[],ckr=0
	if(typ&&typeof typ!="object"&&Asc(typ+"")>64)typ=Asc(typ+"")-55
	if(typeof crd=="object"){
		for(var i=0;i<crd.length;i++)res=res.concat(Qre(crd[i],atr,typ));return res
	}else if(typeof atr=="object"){
		for(var i=0;i<atr.length;i++){
			if(typeof typ=="object")res=res.concat(Qre(crd,atr[i],typ[i]))
			else res=res.concat(Qre(crd,atr[i]))
		}return res
	}
	if(typeof typ!="undefined")ckr=1
	if(Id(crd))switch(atr){
		case"Opa":
			if(ckr)Id(crd).style.opacity=typ;break
		case"Sym":
			if(ckr)Id(crd).innerHTML=Sqr.Sym[typ];
			res=res.concat(Sqr.Sym.indexOf(Id(crd).innerHTML));break
		case"FtC":
			if(ckr)Id(crd).style.color=Sqr.FtC[typ];
			res=res.concat(Sqr.FtC.indexOf(Id(crd).style.color));break
		case"BgC":
			if(ckr)Id(crd).style.backgroundColor=Sqr.BgC[typ];
			res=res.concat(Sqr.BgC.indexOf(Id(crd).style.backgroundColor))
	}
	for(var i=0;i<res.length;i++)if(res[i]>9)res[i]=Chr(res[i]+55)
	if(res.length>1)return res;return res[0]
}
function Rec(brd){var res=""
	if(typeof brd=="number"&&Hst.Brd[brd]){Tn=brd;Rec(Hst.Brd[brd]);if(!Dft.System.Qsr)Rul();return}
	for(var cd1=65;cd1<74;cd1++)for(var cd2=1;cd2<10;cd2++){
		if(brd)Qre(Chr(cd1)+cd2,"Sym",brd[((cd1-65)*9+cd2-1)])
		else res+=Qre(Chr(cd1)+cd2,"Sym")
	}return res
}
function Lmt(crd,sym){if(Qre(crd,"Sym")!=2)return 1;if(typeof sym=="undefined")sym=Tn%2
	for(var i=MdQ.length-1;i>-1;i--)if(Shl.Lmt[MdQ[i]](crd,sym))return 1;return 0
}
function Ckr(crd){if(Qre(crd,"Sym")!=2)return 0
	for(var i=MdQ.length-1;i>-1;i--){var ckr=Shl.Ckr[MdQ[i]](crd)
		if(ckr==2)return 1;else if(!ckr)return 0
	}return 1
}
function Mrk(){Brd();BJd()
	if(Dft.System.Nxt)Qre(BJd(),"Opa",0.2)
	if(Dft.System.iTn){Qre(Hst.Crd[Tn],"FtC",1);Qre(Hst.Crd[Tn-1],"FtC",1)}
	for(var i=0;i<MdQ.length;i++)Shl.Mrk[MdQ[i]]()
	Qre(Flt(Sel("All"),function(crd){if(Qre(crd,"Sym")==3)return 1;return 0}),"BgC",2)
}
function Brd(){Qre(Sel("All"),["FtC","BgC"],[0,0]);Qre(Sel("All"),"Opa",1)
	var ord=function(crd){
			var cd1=Asc(crd[0]),cd2=Val(crd[1]);if((cd1+cd2)%2==0)return 1
		};Qre(Flt(Sel("All"),ord),"BgC",1)
	for(var i=0;i<MdQ.length;i++)Shl.Brd[MdQ[i]]()
}
function Adn(){
	for(var i=0;i<MdQ.length;i++)Shl.Adn[MdQ[i]]()
	if(Dft.System.Blk){var s=Dft.System.Blk
		while(s){var cd1=Math.floor(Rnd()*9)+65,cd2=Math.floor(Rnd()*9)+1
			if((cd1+cd2)%2==0&&Qre(Chr(cd1)+cd2,"Sym")==2&&Dft.Blk.indexOf(Chr(cd1)+cd2)<0){Qre(Chr(cd1)+cd2,["Sym","BgC"],[3,2]);s--}
		}
	}
}
function Rul(){
	for(var i=MdQ.length-1;i>-1;i--)if(Jdg(Shl.Rul[MdQ[i]]()))break;Mrk()
}
function Opt(){Id("Setting").style.height=($(window).height()-40)+"px";var id=Dft.Oln.Id
	Id("OptionMenu").innerHTML="系統內建:<br>"
	if(!Dft.System.Oln){
		OpS("System-Blk","t","障礙數量:",Dft.System.Blk)
		OpS("System-Qsr","k","加速查詢",Dft.System.Qsr)
		OpS("System-Oln","k","線上對戰",Dft.System.Oln)
	}else Oln.Opt()
	OpS("System-Nxt","k","次回設置",Dft.System.Nxt)
	OpS("System-iTn","k","上回設置",Dft.System.iTn)
	OpS("System-Gst","k","手勢操作",Dft.System.Gst)
	OpS("System-Nit","k","夜間模式",Id("NightMode").style.opacity!=1)
	OpS("System-Ful","k","全螢幕模式",doc.webkitIsFullScreen||doc.mozFullScreen||doc.fullscreen)
	OpS("System-Rul","k","顯示規則",Id("Rule").style.height!="0px")
	for(var i=0;i<MdQ.length;i++)Shl.Opt[MdQ[i]]()
}
function OpK(k){Id("Setting").style.height="0px";if(k)return
	if(!Dft.System.Oln){
		if(Val(Id("System-Blk").value)!=NaN&&Id("System-Blk").value!="")Dft.System.Blk=Val(Id("System-Blk").value)
		if(Dft.System.Blk>27)Dft.System.Blk=27
		if(Id("System-Oln").checked)location="btchs.html"+location.search
		Dft.System.Qsr=Id("System-Qsr").checked
	}else Oln.OpK();for(i=0;i<MdQ.length;i++)Shl.OpK[MdQ[i]]()
	if(Id("System-Nit").checked)Id("NightMode").style.opacity=0.3;else Id("NightMode").style.opacity=1
	if(Id("System-Ful").checked){
		if(Id("NightMode").mozRequestFullScreen)Id("NightMode").mozRequestFullScreen()
		if(Id("NightMode").webkitRequestFullScreen)Id("NightMode").webkitRequestFullScreen()
	}else{
		if(doc.mozCancelFullScreen)doc.mozCancelFullScreen()
		if(doc.webkitCancelFullScreen)doc.webkitCancelFullScreen()
	}
	if(Id("System-Rul").checked)Ctl("RSw",1);else Ctl("RSw",0)
	Dft.System.Nxt=Id("System-Nxt").checked;Dft.System.Gst=Id("System-Gst").checked;
	Dft.System.iTn=Id("System-iTn").checked;if(Dft.Tn==Tn)Cln();Mrk();Ctl("Rul")
}
function OpS(id,typ,til,dft){var input="",ck="";if(dft)ck="checked"
	switch(typ){
		case"t":input=til+"<input type='text' id='"+id+"' placeholder='"+dft+"' class='Opt' style='width:40px;text-align:right'/>";break
		case"r":var tid=id.split("/");input="<input type='radio' "+ck+" id='"+tid[0]+"' class='Opt' name='"+tid[1]+"' style='zoom:1.5'/>"+til;break
		case"k":input="<input type='checkbox' "+ck+" id='"+id+"' class='Opt' style='zoom:1.5'/>"+til;break
	}Id("OptionMenu").innerHTML+="<label>"+input+"</label><br>"
}
function Jdg(msg){
	if(msg){if(Dft.System.Oln)Upl(msg);else Cln(msg);return 1}
}
