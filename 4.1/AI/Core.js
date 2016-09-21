function CHK(v){
    var Mna=100,Mnd="",Mxa=0,Mxd="",m=0;
    if(v==0)m=1;
    if(Turn<2){
        if(Controls("E5").value=="")return "E5";
        if(Controls("F5").value=="")return "F5"
    }
    for(cd1=65;cd1<74;cd1++){
        for(cd2=1;cd2<10;cd2++){
            if(Cnt(sbl[v],Chr(cd1)+cd2)==1&&Controls(Chr(cd1)+cd2).value==""){
                Controls(Chr(cd1)+cd2).value=sbl[v];
                if(ARA(v)<Mna){Mna=ARA(v);
                Mnd=Chr(cd1)+cd2;
                Mxa=ARA(m);
                Mxd=Chr(cd1)+cd2
            }else if(ARA(v)==Mna&&ARA(m)>Mxa){
                Mna=ARA(v);
                Mnd=Chr(cd1)+cd2;
                Mxa=ARA(m);
                Mxd=Chr(cd1)+cd2
            }
            Controls(Chr(cd1)+cd2).value=""
            }
        }
    }
    return Mnd
}
function ARA(v){var m=0,Ara=0;if(v==0)m=1;for(var cd1=65;cd1<74;cd1++){for(var cd2=1;cd2<10;cd2++){if(Cnt(sbl[m],Chr(cd1)+cd2)==1&&Cnt(sbl[v],Chr(cd1)+cd2)==0)Ara++}}return Ara}