var doc=document
function Rnd(){return Math.random()}
function Val(v){return Math.floor(v)}
function Split(s,m){return s.split(m)}
function Instr(s,c){return s.indexOf(c)}
function Mid(s,r,v){return s.substr(r,v)}
function Asc(s){return s.charCodeAt(s)}
function Chr(v){return String.fromCharCode(v)}
function Id(d){return document.getElementById(d)}
function Replace(s,c,t){while(Instr(s,c)>-1)s=s.replace(c,t);return s}
function Class(c){return document.getElementsByClassName(c)}