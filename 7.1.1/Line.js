Dft.Uln=0
function Oln(){
	$.get(olsvr,
		{Typ:"O",Jcd:Dft.Jcd,Rw:Dft.URw,Usr:Dft.Usr},
		function (r){console.log(r)
			if(r=="���b�u"||r=="�|�����H�[�J"){Dft.Uln=0;Oln()}
			else if(Dft.Uln>3){
				if(confirm(r+",�O�_�~�򵥫�?")){Dft.Uln=0;Oln()}else location.reload()
			}else{Dft.Uln++;Oln()}
		}
	)
}