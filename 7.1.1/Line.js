Dft.Uln=0
function Oln(){
	$.get(olsvr,
		{Typ:"O",Jcd:Dft.Jcd,Rw:Dft.URw,Usr:Dft.Usr},
		function (r){console.log(r)
			if(r=="對方在線"||r=="尚未有人加入"){Dft.Uln=0;Oln()}
			else if(Dft.Uln>3){
				if(confirm(r+",是否繼續等待?")){Dft.Uln=0;Oln()}else location.reload()
			}else{Dft.Uln++;Oln()}
		}
	)
}