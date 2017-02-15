var doc=document
function Asc(v){return v.charCodeAt()}
function Chr(v){return String.fromCharCode(v)}
function Val(v){return v*1}
function Rnd(){return Math.random()}
function Mid(v,s,e){return v.substr(s,e)}
function Instr(s,c){return s.search(c)}
function Id(v){return doc.getElementById(v)}
function Class(v){return doc.getElementsByClassName(v)}
function Tag(v){return doc.getElementsByTagName(v)}
function Name(v){return doc.getElementsByName(v)}