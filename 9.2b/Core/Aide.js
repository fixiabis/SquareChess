function MsO(e){var v=1,p=0
	if(e.pageX<$("#Board").offset().left)p=0
	else if(e.pageX>$("#Board").offset().left+$("#Board").width())p=1
	else v=0;Mnu(v,p)
}
function KDw(e){
	var c=e.ctrlKey,k=e.which,s=e.shiftKey,m=Id("menu"),t=Id("Setting").style.height=="0px",g=1,a=Id("Mbx").style.display!="none"
	if(Id("Message"))g=Id("Message").style.height=="25px"
	if(t&&g&&!a)e.preventDefault();else if((k!=27&&k!=13)&&(!g||a&&k!=37&&k!=39))return
	switch(k){
		case   8:if(t)Ctl("Udo");break
		case  13:if(a)$("#MbxbY")[0].click();else if(!t)OpK();else if(!g)Ctl("Msg");else if(Dft.Dir=="")Ctl("Rdo");break
		case  18:if(c)Opt();break
		case  27:if(a)$("#MbxbN")[0].click();else if(!g)Ctl("MSw",0);else if(Id("O0").style.display!="none")Sel.Now("N");else OpK(1);break
		case  35:Rec(Hst.Crd.length-1);break
		case  36:if(c)Ctl("Hom");else Rec(0);break
		case  37:if(a)$("#Mbxsl")[0].click();else if(c)Ctl("Udo");else{Dft.Dir+="L";Sel.Now("D")}break
		case  38:if(c)Ctl("Cln");else{Dft.Dir+="F";Sel.Now("D")}break
		case  39:if(a)$("#Mbxsr")[0].click();else if(c)Ctl("Rdo");else{Dft.Dir+="R";Sel.Now("D")}break
		case  40:if(c)Ctl("Cln");else{Dft.Dir+="B";Sel.Now("D")}break
		case  46:if(s)Cln();else Ctl("Cln");break
		case  89:if(c)Ctl("Rdo");break
		case  90:if(c)Ctl("Udo");break
		case 112:Ctl("RSw");break
		case 219:
			if(m.style.left=="0px"){
				if(m.style.width=="0px")Mnu(1,1);else Mnu(0,0)
			}else Mnu(1,1);break
		case 221:
			if(m.style.right=="0px"){
				if(m.style.width=="0px")Mnu(1,0);else Mnu(0,1)
			}else Mnu(1,0);break
		default:if(k>64&&k<74&&g){Dft.Crd=Chr(k);Sel.Now("C")
				if(c){if(k==72)Ctl("Gto");else if(k==65&&!Dft.System.Oln)Ara.PFu()}}
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
					}else{var crd=Dft.Crd;crd+=num
						if(s)Ctl("Rdo",crd);else if(!c)Set(crd)
					}
				}
	}
}
Sel.Now=function(t){Id("O0").style.display="none";
	if(Id("menu").style.left=="0px")Mnu(0,0);else Mnu(0,1)
	Id("O0").style.height=$(crd).height()+"px";if(t!="B")Id("O0").innerHTML=""
	if(t!="N")Id("O0").style.display=""
	Id("O0").style.fontSize=($(crd).height()-10)+"px"
	Id("O0").style.backgroundColor=""
	switch(t){
		case"B":Id("O0").style.backgroundColor="crimson";break
		case"C":var crd="#"+Dft.Crd+"1"
			Id("O0").style.height=($(crd).height()*9)+"px";Dft.Dir=""
			Id("O0").innerHTML=Dft.Crd+"<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9"
			Id("O0").style.top=($(crd).offset().top-1)+"px"
			Id("O0").style.left=$(crd).offset().left+"px"
		break
		case"D":if(Tn==0){Id("O0").style.display="none";Dft.Dir="";return}
			Dft.Dir=Vct(Vct(Hst.Crd[Tn]+":"+Crd(Hst.Crd[Tn],Dft.Dir)));Dft.Crd=""
			var crd="#"+Crd(Hst.Crd[Tn],Dft.Dir)
			Id("O0").style.fontSize=($(crd).height()-20)+"px"
			Id("O0").innerHTML=crd.replace("#","")
			if(Id(crd.replace("#",""))){
				Id("O0").style.height=$(crd).height()+"px"
				Id("O0").style.top=($(crd).offset().top-1)+"px"
				Id("O0").style.left=$(crd).offset().left+"px"
			}
		break
		case"N":var crd="#"+Hst.Crd[Tn];Dft.Dir="";Dft.Crd=""
			if(Id(crd.replace("#",""))){
				Id("O0").style.height=$(crd).height()+"px"
				Id("O0").style.top=($(crd).offset().top-1)+"px"
				Id("O0").style.left=$(crd).offset().left+"px"
			}
		break
	}
}
function KUp(e){
	if((e.which==13||e.which==32)&&Dft.Dir!=""){Set(Crd(Hst.Crd[Tn],Dft.Dir))}
}
function Mnu(v,p){var h=0;if(v)h=160;if(Id("Setting").style.height!="0px")h=0;Id("menu").style.width=h+"px"
	if(v)if(p){Id("menu").style.left="";Id("menu").style.right="0px"}
	else{Id("menu").style.left="0px";Id("menu").style.right=""}
}
function Ctl(t,v){if(t=="Udo"||t=="Rdo")if(v&&v.length==3)return;Sel.Now("N")
	if(!Dft.System.Oln)switch(t){
		case"Cln":if(Tn!=Dft.Tn)Cln("確認清除棋盤?");else Cln();break
		case"Udo":if(v)Rec(Ser(v)-1);else if(Tn>Dft.Tn)Rec(Tn-1);break
		case"Rdo":if(v)Rec(Ser(v));else Rec(Tn+1);break
		case"Gto":var t=["1"],T=Tn;if(Tn==0)T=1;for(var i=2;i<Hst.Brd.length;i++)t.push(i+"")
			Mbx("輸入要前往的回合",function(tn){if(tn>Dft.Tn)Rec(Val(tn))},function(){},t,T-1);break
	}else switch(t){
		case"Gvp":if(Dft.Set)Mbx("確定認輸?",function(){Upl(Dft.Oln.Typ+"認輸,"+Enm(Dft.Oln.Typ)+"獲勝")},function(){});break
		case"Msg":if(Id("msgs").value)Msg(Id("msgs").value);Id("msgs").value="";break
		case"MSw":var k=Id("Message").style.height=="25px";if(typeof v!="undefined"){if(v)k=1;else k=0}
		if(k)Id("Message").style.height="300px"
		else{Id("Message").style.height="25px";Dft.Oln.Msg=0}Atn()
	}
	switch(t){
		case "RSw":if(typeof v!="number")v=Id("Rule").style.height=="0px"
			if(v){Id("Rule").style.height=Id("UI").style.width;Ctl("Rul")}
			else Id("Rule").style.height="0px";break
		case"Rul":Id("Rule").childNodes[3].innerHTML=Rls.Lst(MdQ)
		if(MdQ.indexOf("Newbie")<0)Id("Rule").childNodes[3].innerHTML+="<li><font onclick='Srt(0)' color='blue' style='cursor:pointer'>點此查看詳盡圖解</li>"
		;break
		case"Rpt":if(!navigator.onLine){Mbx("未在線上，無法即時回報",function(){});break}
			try{firebase.database()}catch(e){Svr()}
			Mbx("輸入當時遇到的情況",function(St){
				if(St.length<1)Mbx("無任何陳述，重試?",function(){Ctl("Rpt")},function(){})
				else Rpt(St)
			},function(){},"")
		;break
		case"Hom":Mbx('確定離開頁面?',function(){location="index.html"},function(){});break
	}
}
function Rpt(St){var id=RJC(8)
	firebase.database().ref("Report/"+id).once("value",function(r){
		if(r.val()==null)firebase.database().ref("Report/"+id).update({
			Dft:Dft,Hst:Hst,State:St
		},function(){Mbx("回報完成",function(){})})
	})
}
function RJC(s){var r="",t=[];if(!s)s=10;s++
	for(var i=48;i<58;i++)t.push(String.fromCharCode(i))
	for(var i=65;i<91;i++)t.push(String.fromCharCode(i))
	for(i=0;i<s;i++)r+=t[Math.floor(Math.random()*36)]
	return r
}
function Svr(){
	eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('B 8(){c s="m";n(!(s.e("d")<0))s=s.1("d","f");s=s.1("l","k");s=s.1("h","q");s=s.1("p","o");s=s.1("b","g");s=s.1("b","j");s=s.1("i","r");s=s.1("9","9-D");C s}c 7={E:8(),H:"5-6-4-2.F.3",G:"A://5-6-4-2.v.3",u:"5-6-4-2.t.3",w:"z"};y.x(7);8=a;7=a',44,44,'|replace|91|com|game|square|chess|config|cfaK|8I|null|tz|var|AA|search|AIA|tzh|yA|qh|tzxiQq|AIzaSy|AI|AAA|while|9z_UKLVGFhgEndt|9z|yAkW9zz|qh2b8||appspot|storageBucket|firebaseio|messagingSenderId|initializeApp|firebase|757542166819|https|function|return|Z2e|apiKey|firebaseapp|databaseURL|authDomain'.split('|'),0,{}))
}