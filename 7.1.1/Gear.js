function Lgn(){var typ="J";if(Id("Jcd").value=="")typ="L"
	$.get("https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec",
		{Typ:typ,Act:Id("Act").value,Pwd:Id("Pwd").value,Jcd:Id("Jcd").value,Mod:location.search.split("?mode=")[1]},
		function (r){
			if(Instr(r,"/")<0)alert(r)
			else{var rtn=r.split("/'")
				Dft.Usr=Id("Act").value;Dft.URw=rtn[0]
				Dft.Jcd=rtn[1];alert("邀請代碼:"+Dft.Jcd)
			}
		}
	)
}