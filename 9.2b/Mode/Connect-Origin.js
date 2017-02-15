Shl.Ara["Connect-Origin"]=[];Dft["Connect-Origin"]={Ara:0,QJd:1,Rul:0,Ori:1,Net:[]}
Shl.Rul["Connect-Origin"]=function(){return Ara.Rul("Connect-Origin",Cnt("Connect-Origin"))}
Shl.Lmt["Connect-Origin"]=function(crd,sym,ori){var mcd=crd
	var cd8=Crd(crd,"8"),vtQ=Vct("Q"),vt28=Vct("28");Hst.Rut[Tn]=[];if(Tn<2)return 0
	Hst.Rut[Tn]=Flt(Crd(crd,"8"),function(crd){
		if(Id(crd)){
			if(Dft["Connect-Origin"].Ori&&!ori){if(!Dft["Connect-Origin"].Net.length)Dft["Connect-Origin"].Net=Net(Hst.Crd[sym+1],"Connect-Origin",sym)
				if(Dft["Connect-Origin"].Net.indexOf(crd)>-1)return 1
			}else if(Qre(crd,"Sym")==sym)return 1;return 0
		}
	})
	for(var i=0;i<8;i++){var cds=[],k=function(crd){return 1}
		if(Dft["Connect-Origin"].Ori&&!ori){
			if(!Dft["Connect-Origin"].Net.length)Dft["Connect-Origin"].Net=Net(Hst.Crd[sym+1],"Connect-Origin",sym)
			k=function(crd){if(Dft["Connect-Origin"].Net.indexOf(crd)>-1)return 1}
		}
		if(Qre(Crd(crd,vtQ[i],1),"Sym")==sym){
			var vts=[
				Crd(crd,vtQ[i][0],1),
				Crd(crd,vtQ[i][0]+vtQ[i][0],1),
				Crd(crd,vtQ[i][0]+vtQ[i][2],1),
				Crd(crd,vtQ[i][2],1),
			]
			for(var j=0;j<vts.length;j++){var s=Qre(vts[j],"Sym")
				vts[j]=(s==2||s==sym)
			}
			if(vts[0]&&vts[1]||vts[0]&&vts[2]||vts[3]&&vts[2])if(k(Crd(crd,vtQ[i],1)))cds.push(Crd(crd,vtQ[i],1))
		}
		if(Qre(Crd(crd,vt28[i],1),"Sym")==sym){
			var vts=Crd(crd,Mid(vt28[i],0,vt28[i].length/2),1),s=Qre(vts,"Sym")
			if(s==2||s==sym)if(k(Crd(crd,vt28[i],1)))cds.push(Crd(crd,vt28[i],1))
		}Hst.Rut[Tn]=Hst.Rut[Tn].concat(cds)
		if(Hst.Rut[Tn].length&&MdQ.indexOf("Follow")<0&&Dft.System.Per&&!Dft["Connect-Origin"].Ori)return 0
	}
	return !Hst.Rut[Tn].length>0
}
Shl.Mrk["Connect-Origin"]=function(){Ara.Mrk("Connect-Origin")}
Shl.Adn["Connect-Origin"]=function(){Tn+=2
	if(!Dft.System.Oln||Dft.Oln.Typ=="O")switch(Dft["Connect-Origin"].Rul){
		case 0:Tn=0;break
		case 1:var Os=Crd("E5","4")[Math.floor(Rnd()*4)],Xs=Crd("E5","X")[Math.floor(Rnd()*4)]
			Hst.Crd[1]=Os;Qre(Os,"Sym",0);Hst.Crd[2]=Xs;Qre(Xs,"Sym",1);break
		case 2:var s=Crd("E5",Vct("24")),Os=s[Math.floor(Rnd()*4)]
			Qre(Os,"Sym",0);Hst.Crd[1]=Os
			while(1){var crd=s[Math.floor(Rnd()*4)];
				if(Qre(crd,"Sym")!=0){Qre(crd,"Sym",1);Hst.Crd[2]=Os;break}
			}
	}
}
Shl.Ckr["Connect-Origin"]=function(crd){return Ara.Ckr("Connect-Origin",crd)}
Shl.Opt["Connect-Origin"]=function(){
	OpS("","1","Connect-Origin設定")
	if(!Dft.System.Oln){OpS("","2","固定設置")
		OpS("Connect-Origin-Rul-0/Connect-Origin-Rul","r","無設置",Dft["Connect-Origin"].Rul==0)
		OpS("Connect-Origin-Rul-1/Connect-Origin-Rul","r","隨機設置一型",Dft["Connect-Origin"].Rul==1)
		OpS("Connect-Origin-Rul-2/Connect-Origin-Rul","r","隨機設置二型",Dft["Connect-Origin"].Rul==2)
	}Ara.Opt("Connect-Origin")
}
Shl.OpK["Connect-Origin"]=function(){
	if(!Dft.System.Oln)for(var i=0;i<3;i++)if(Id("Connect-Origin-Rul-"+i).checked)Dft["Connect-Origin"].Rul=i
	Ara.OpK("Connect-Origin")
}
