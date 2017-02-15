function Mbx(m,a,b,v,s,r){$("#Mbx,#Mbxv").css("display","");$("#Mbxt,#Mbxp,#MbxbN,#MbxbY").css("display","none")
	Id("Mbxc").childNodes[0].innerHTML=m;Id("Mbxt").readonly="";if(r)Id("Mbxs").readOnly="true"
	if(a)$("#MbxbY").unbind('click').click(function(){var k=1
		switch(typeof v){
			case"object":if(v.indexOf(Id("Mbxs").value)>-1)Mbx.inp=Id("Mbxs").value;else k=0;break
			case"string":Mbx.inp=Id("Mbxt").value;break
		}if(k)Mbx.Exe(a);else(Mbx("無此參數",function(){Mbx(m,a,b,v,s,r)}))
	}).css("display","")
	if(b)$("#MbxbN").unbind('click').click(function(){Mbx.Exe(b)}).css("display","")
	switch(typeof v){
		case"string":Id("Mbxt").style.display="";Id("Mbxt").value=v;Id("Mbxt").focus();break
		case"object":Mbx.stq=v;Id("Mbxp").style.display="";if(!s)s=0;Id("Mbxs").value=v[s];break
	}Id("Mbx").style.display=""
}
Mbx.Rsz=function(){$("#Mbxt,#Mbxp,#Mbxs").css("width","");$("#Mbx").css("width","400px");$("#Mbxv").css("width",$(window).width()+"px");$("#Mbxv").css("height",$(window).height()+"px")
	if($(window).width()<400){$("#Mbx").css("width","100%")
		var w=$(window).width()-132-$(window).width()*0.05
		$("#Mbxt,#Mbxp").css("width",w+"px");$("#Mbxs").css("width",w-70+"px")
	}$("#Mbx").css("top",($(window).height()/2-100)+"px").css("left",($(window).width()/2-$("#Mbx").width()/2)+"px")
}
Mbx.Ldr=function(){
	Id("Mbx").innerHTML="<div id=\"Mbxc\"><div style=\"margin:10px;color:#48585f\"></div></div><div style=\"position:absolute;bottom:5px;left:10px\"><input type=\"text\" id=\"Mbxt\" style=\"display:none\"><div style=\"display:none\" id=\"Mbxp\"><div class=\"Mbxs\" style=\"float:left\" id=\"Mbxsl\"><</div><input type=\"text\" id=\"Mbxs\"/><div class=\"Mbxs\" style=\"float:right\" id=\"Mbxsr\">></div></div></div><div style=\"position:absolute;bottom:5px;right:10px;height:40px;width:125px\"><div class=\"Mbxb\" id=\"MbxbN\" style=\"margin-left:5px;display:none\">取消</div><div class=\"Mbxb\" id=\"MbxbY\">確認</div></div>";Mbx.Rsz()
	$("#Mbx,#Mbxv").css("display","none")
	$("#Mbxsl").click(function(){var p=Mbx.stq.indexOf(Id("Mbxs").value)-1
		if(p<0)p=Mbx.stq.length-1;Id("Mbxs").value=Mbx.stq[p];Mbx.inp=Mbx.stq[p]
	})
	$("#Mbxsr").click(function(){var p=Mbx.stq.indexOf(Id("Mbxs").value)+1
		if(p>Mbx.stq.length-1)p=0;Id("Mbxs").value=Mbx.stq[p];Mbx.inp=Mbx.stq[p]
	})
}
Mbx.stq=[];Mbx.inp=""
Mbx.Exe=function(a){$("#Mbx,#Mbxv").css("display","none");a(Mbx.inp)}