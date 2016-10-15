function Lgn(){var typ="J";if(Id("Jcd").value=="")typ="L"
	$.get("https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec",
		{Typ:typ,Act:Id("Act").value,Pwd:Id("Pwd").value,Jcd:Id("Jcd").value,Mod:"Connect"},
		function (r){
			
		}
	)
}