/*!
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source https://github.com/piwik/piwik/blob/master/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var f,a={},o=document,c=navigator,B=screen,y=window,l=false,v=[],h=y.encodeURIComponent,w=y.decodeURIComponent,d=unescape,C,F;function q(N){var i=typeof N;return i!=="undefined"}function m(i){return typeof i==="function"}function A(i){return typeof i==="object"}function j(i){return typeof i==="string"||i instanceof String}function I(){var N,P,O;for(N=0;N<arguments.length;N+=1){O=arguments[N];P=O.shift();if(j(P)){C[P].apply(C,O)}else{P.apply(C,O)}}}function L(P,O,N,i){if(P.addEventListener){P.addEventListener(O,N,i);return true}if(P.attachEvent){return P.attachEvent("on"+O,N)}P["on"+O]=N}function G(O,R){var N="",Q,P;for(Q in a){if(Object.prototype.hasOwnProperty.call(a,Q)){P=a[Q][O];if(m(P)){N+=P(R)}}}return N}function J(){var i;G("unload");if(f){do{i=new Date()}while(i.getTimeAlias()<f)}}function H(){var N;if(!l){l=true;G("load");for(N=0;N<v.length;N++){v[N]()
}}return true}function k(){var N;if(o.addEventListener){L(o,"DOMContentLoaded",function i(){o.removeEventListener("DOMContentLoaded",i,false);H()})}else{if(o.attachEvent){o.attachEvent("onreadystatechange",function i(){if(o.readyState==="complete"){o.detachEvent("onreadystatechange",i);H()}});if(o.documentElement.doScroll&&y===y.top){(function i(){if(!l){try{o.documentElement.doScroll("left")}catch(O){setTimeout(i,0);return}H()}}())}}}if((new RegExp("WebKit")).test(c.userAgent)){N=setInterval(function(){if(l||/loaded|complete/.test(o.readyState)){clearInterval(N);H()}},10)}L(y,"load",H,false)}function e(O,N){var i=o.createElement("script");i.type="text/javascript";i.src=O;if(i.readyState){i.onreadystatechange=function(){var P=this.readyState;if(P==="loaded"||P==="complete"){i.onreadystatechange=null;N()}}}else{i.onload=N}o.getElementsByTagName("head")[0].appendChild(i)}function r(){var i="";try{i=y.top.document.referrer}catch(O){if(y.parent){try{i=y.parent.document.referrer}catch(N){i=""
}}}if(i===""){i=o.referrer}return i}function g(i){var O=new RegExp("^([a-z]+):"),N=O.exec(i);return N?N[1]:null}function b(i){var O=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),N=O.exec(i);return N?N[1]:i}function z(O,N){var R=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),Q=R.exec(O),P=new RegExp("(?:^|&)"+N+"=([^&]*)"),i=Q?P.exec(Q[1]):0;return i?w(i[1]):""}function n(i){return d(h(i))}function K(ad){var P=function(W,i){return(W<<i)|(W>>>(32-i))},ae=function(ak){var aj="",ai,W;for(ai=7;ai>=0;ai--){W=(ak>>>(ai*4))&15;aj+=W.toString(16)}return aj},S,ag,af,O=[],X=1732584193,U=4023233417,T=2562383102,R=271733878,Q=3285377520,ac,ab,aa,Z,Y,ah,N,V=[];ad=n(ad);N=ad.length;for(ag=0;ag<N-3;ag+=4){af=ad.charCodeAt(ag)<<24|ad.charCodeAt(ag+1)<<16|ad.charCodeAt(ag+2)<<8|ad.charCodeAt(ag+3);V.push(af)}switch(N&3){case 0:ag=2147483648;break;case 1:ag=ad.charCodeAt(N-1)<<24|8388608;break;case 2:ag=ad.charCodeAt(N-2)<<24|ad.charCodeAt(N-1)<<16|32768;break;case 3:ag=ad.charCodeAt(N-3)<<24|ad.charCodeAt(N-2)<<16|ad.charCodeAt(N-1)<<8|128;
break}V.push(ag);while((V.length&15)!==14){V.push(0)}V.push(N>>>29);V.push((N<<3)&4294967295);for(S=0;S<V.length;S+=16){for(ag=0;ag<16;ag++){O[ag]=V[S+ag]}for(ag=16;ag<=79;ag++){O[ag]=P(O[ag-3]^O[ag-8]^O[ag-14]^O[ag-16],1)}ac=X;ab=U;aa=T;Z=R;Y=Q;for(ag=0;ag<=19;ag++){ah=(P(ac,5)+((ab&aa)|(~ab&Z))+Y+O[ag]+1518500249)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=20;ag<=39;ag++){ah=(P(ac,5)+(ab^aa^Z)+Y+O[ag]+1859775393)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=40;ag<=59;ag++){ah=(P(ac,5)+((ab&aa)|(ab&Z)|(aa&Z))+Y+O[ag]+2400959708)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}for(ag=60;ag<=79;ag++){ah=(P(ac,5)+(ab^aa^Z)+Y+O[ag]+3395469782)&4294967295;Y=Z;Z=aa;aa=P(ab,30);ab=ac;ac=ah}X=(X+ac)&4294967295;U=(U+ab)&4294967295;T=(T+aa)&4294967295;R=(R+Z)&4294967295;Q=(Q+Y)&4294967295}ah=ae(X)+ae(U)+ae(T)+ae(R)+ae(Q);return ah.toLowerCase()}function E(O,i,N){if(O==="translate.googleusercontent.com"){if(N===""){N=i}i=z(i,"u");O=b(i)}else{if(O==="cc.bingj.com"||O==="webcache.googleusercontent.com"||O.slice(0,5)==="74.6."){i=o.links[0].href;
O=b(i)}}return[O,i,N]}function s(N){var i=N.length;if(N.charAt(--i)==="."){N=N.slice(0,i)}if(N.slice(0,2)==="*."){N=N.slice(1)}return N}function M(N){if(!j(N)){N=N.text||"";var i=o.getElementsByTagName("title");if(i&&q(i[0])){N=i[0].text}}return N}function x(i){if(i.slice(-9)==="piwik.php"){i=i.slice(0,i.length-9)}return i}function t(Q,U){var W="Piwik_Overlay",T=o.referrer,i=x(Q);i.slice(i.slice(0,7)==="http://"?7:8,i.length);T.slice(T.slice(0,7)==="http://"?7:8,T.length);if(T.slice(0,i.length)===i){var O=new RegExp("^"+i+"index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");var P=O.exec(T);if(P){var R=P[1];if(R!==String(U)){return false}var S=P[2],N=P[3];y.name=W+"###"+S+"###"+N}}var V=y.name.split("###");return V.length===3&&V[0]===W}function D(O,P){var R=y.name.split("###"),Q=R[1],N=R[2],i=x(O);e(i+"plugins/Overlay/client/client.js?v=1",function(){Piwik_Overlay_Client.initialize(i,P,Q,N)})}function u(ag,aF){var Q=E(o.domain,y.location.href,r()),aY=s(Q[0]),bc=Q[1],aL=Q[2],aJ="GET",P=ag||"",a2=aF||"",aw,am=o.title,ao="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|pptx?|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xlsx?|xml|z|zip",aH=[aY],T=[],aA=[],af=[],aG=500,U,ah,V,W,aq=["pk_campaign","piwik_campaign","utm_campaign","utm_source","utm_medium"],al=["pk_kwd","piwik_kwd","utm_term"],ba="_pk_",Z,bb,X=false,a5,at,av,ad=63072000000,ae=1800000,ax=15768000000,S=false,aB={},a6=200,aR={},a3={},aO=false,aM=false,aK,aC,aa,ap=K,aN,au;
function aT(bl,bi,bh,bk,bg,bj){if(X){return}var bf;if(bh){bf=new Date();bf.setTime(bf.getTime()+bh)}o.cookie=bl+"="+h(bi)+(bh?";expires="+bf.toGMTString():"")+";path="+(bk||"/")+(bg?";domain="+bg:"")+(bj?";secure":"")}function ac(bh){if(X){return 0}var bf=new RegExp("(^|;)[ ]*"+bh+"=([^;]*)"),bg=bf.exec(o.cookie);return bg?w(bg[2]):0}function a7(bf){var bg;if(V){bg=new RegExp("#.*");return bf.replace(bg,"")}return bf}function aX(bh,bf){var bi=g(bf),bg;if(bi){return bf}if(bf.slice(0,1)==="/"){return g(bh)+"://"+b(bh)+bf}bh=a7(bh);if((bg=bh.indexOf("?"))>=0){bh=bh.slice(0,bg)}if((bg=bh.lastIndexOf("/"))!==bh.length-1){bh=bh.slice(0,bg+1)}return bh+bf}function aI(bi){var bg,bf,bh;for(bg=0;bg<aH.length;bg++){bf=s(aH[bg].toLowerCase());if(bi===bf){return true}if(bf.slice(0,1)==="."){if(bi===bf.slice(1)){return true}bh=bi.length-bf.length;if((bh>0)&&(bi.slice(bh)===bf)){return true}}}return false}function be(bf){var bg=new Image(1,1);bg.onload=function(){};bg.src=P+(P.indexOf("?")<0?"?":"&")+bf
}function aU(bf){try{var bh=y.XMLHttpRequest?new y.XMLHttpRequest():y.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;bh.open("POST",P,true);bh.onreadystatechange=function(){if(this.readyState===4&&this.status!==200){be(bf)}};bh.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");bh.send(bf)}catch(bg){be(bf)}}function ar(bh,bg){var bf=new Date();if(!a5){if(aJ==="POST"){aU(bh)}else{be(bh)}f=bf.getTime()+bg}}function aS(bf){return ba+bf+"."+a2+"."+aN}function R(){if(X){return"0"}if(!q(c.cookieEnabled)){var bf=aS("testcookie");aT(bf,"1");return ac(bf)==="1"?"1":"0"}return c.cookieEnabled?"1":"0"}function aD(){aN=ap((Z||aY)+(bb||"/")).slice(0,4)}function ab(){var bg=aS("cvar"),bf=ac(bg);if(bf.length){bf=JSON2.parse(bf);if(A(bf)){return bf}}return{}}function O(){if(S===false){S=ab()}}function a1(){var bf=new Date();aK=bf.getTime()}function Y(bj,bg,bf,bi,bh,bk){aT(aS("id"),bj+"."+bg+"."+bf+"."+bi+"."+bh+"."+bk,ad,bb,Z)}function N(){var bg=new Date(),bf=Math.round(bg.getTime()/1000),bi=ac(aS("id")),bh;
if(bi){bh=bi.split(".");bh.unshift("0")}else{if(!au){au=ap((c.userAgent||"")+(c.platform||"")+JSON2.stringify(a3)+bf).slice(0,16)}bh=["1",au,bf,0,bf,"",""]}return bh}function i(){var bf=ac(aS("ref"));if(bf.length){try{bf=JSON2.parse(bf);if(A(bf)){return bf}}catch(bg){}}return["","",0,""]}function an(bh,bG,bH,bj){var bE,bg=new Date(),bp=Math.round(bg.getTime()/1000),bJ,bF,bl,bx,bB,bo,bz,bm,bD,bk=1024,bK,bs,bA=S,bv=aS("id"),bq=aS("ses"),br=aS("ref"),bL=aS("cvar"),by=N(),bu=ac(bq),bC=i(),bI=aw||bc,bn,bf;if(X){X=false;aT(bv,"",-86400,bb,Z);aT(bq,"",-86400,bb,Z);aT(bL,"",-86400,bb,Z);aT(br,"",-86400,bb,Z);X=true}if(a5){return""}bJ=by[0];bF=by[1];bx=by[2];bl=by[3];bB=by[4];bo=by[5];if(!q(by[6])){by[6]=""}bz=by[6];if(!q(bj)){bj=""}var bt=o.characterSet||o.charset;if(!bt||bt.toLowerCase()==="utf-8"){bt=null}bn=bC[0];bf=bC[1];bm=bC[2];bD=bC[3];if(!bu){bl++;bo=bB;if(!av||!bn.length){for(bE in aq){if(Object.prototype.hasOwnProperty.call(aq,bE)){bn=z(bI,aq[bE]);if(bn.length){break}}}for(bE in al){if(Object.prototype.hasOwnProperty.call(al,bE)){bf=z(bI,al[bE]);
if(bf.length){break}}}}bK=b(aL);bs=bD.length?b(bD):"";if(bK.length&&!aI(bK)&&(!av||!bs.length||aI(bs))){bD=aL}if(bD.length||bn.length){bm=bp;bC=[bn,bf,bm,a7(bD.slice(0,bk))];aT(br,JSON2.stringify(bC),ax,bb,Z)}}bh+="&idsite="+a2+"&rec=1&r="+String(Math.random()).slice(2,8)+"&h="+bg.getHours()+"&m="+bg.getMinutes()+"&s="+bg.getSeconds()+"&url="+h(a7(bI))+(aL.length?"&urlref="+h(a7(aL)):"")+"&_id="+bF+"&_idts="+bx+"&_idvc="+bl+"&_idn="+bJ+(bn.length?"&_rcn="+h(bn):"")+(bf.length?"&_rck="+h(bf):"")+"&_refts="+bm+"&_viewts="+bo+(String(bz).length?"&_ects="+bz:"")+(String(bD).length?"&_ref="+h(a7(bD.slice(0,bk))):"")+(bt?"&cs="+h(bt):"");var bi=JSON2.stringify(aB);if(bi.length>2){bh+="&cvar="+h(bi)}for(bE in a3){if(Object.prototype.hasOwnProperty.call(a3,bE)){bh+="&"+bE+"="+a3[bE]}}if(bG){bh+="&data="+h(JSON2.stringify(bG))}else{if(W){bh+="&data="+h(JSON2.stringify(W))}}if(S){var bw=JSON2.stringify(S);if(bw.length>2){bh+="&_cvar="+h(bw)}for(bE in bA){if(Object.prototype.hasOwnProperty.call(bA,bE)){if(S[bE][0]===""||S[bE][1]===""){delete S[bE]
}}}aT(bL,JSON2.stringify(S),ae,bb,Z)}Y(bF,bx,bl,bp,bo,q(bj)&&String(bj).length?bj:bz);aT(bq,"*",ae,bb,Z);bh+=G(bH);return bh}function aW(bi,bh,bm,bj,bf,bp){var bk="idgoal=0",bl,bg=new Date(),bn=[],bo;if(String(bi).length){bk+="&ec_id="+h(bi);bl=Math.round(bg.getTime()/1000)}bk+="&revenue="+bh;if(String(bm).length){bk+="&ec_st="+bm}if(String(bj).length){bk+="&ec_tx="+bj}if(String(bf).length){bk+="&ec_sh="+bf}if(String(bp).length){bk+="&ec_dt="+bp}if(aR){for(bo in aR){if(Object.prototype.hasOwnProperty.call(aR,bo)){if(!q(aR[bo][1])){aR[bo][1]=""}if(!q(aR[bo][2])){aR[bo][2]=""}if(!q(aR[bo][3])||String(aR[bo][3]).length===0){aR[bo][3]=0}if(!q(aR[bo][4])||String(aR[bo][4]).length===0){aR[bo][4]=1}bn.push(aR[bo])}}bk+="&ec_items="+h(JSON2.stringify(bn))}bk=an(bk,W,"ecommerce",bl);ar(bk,aG)}function aV(bf,bj,bi,bh,bg,bk){if(String(bf).length&&q(bj)){aW(bf,bj,bi,bh,bg,bk)}}function a9(bf){if(q(bf)){aW("",bf,"","","","")}}function az(bi,bj){var bf=new Date(),bh=an("action_name="+h(M(bi||am)),bj,"log");
ar(bh,aG);if(U&&ah&&!aM){aM=true;L(o,"click",a1);L(o,"mouseup",a1);L(o,"mousedown",a1);L(o,"mousemove",a1);L(o,"mousewheel",a1);L(y,"DOMMouseScroll",a1);L(y,"scroll",a1);L(o,"keypress",a1);L(o,"keydown",a1);L(o,"keyup",a1);L(y,"resize",a1);L(y,"focus",a1);L(y,"blur",a1);aK=bf.getTime();setTimeout(function bg(){var bk=new Date(),bl;if((aK+ah)>bk.getTime()){if(U<bk.getTime()){bl=an("ping=1",bj,"ping");ar(bl,aG)}setTimeout(bg,ah)}},ah)}}function ak(bf,bi,bg,bj){var bh=an("search="+h(bf)+(bi?"&search_cat="+h(bi):"")+(q(bg)?"&search_count="+bg:""),bj,"sitesearch");ar(bh,aG)}function aE(bf,bi,bh){var bg=an("idgoal="+bf+(bi?"&revenue="+bi:""),bh,"goal");ar(bg,aG)}function a0(bg,bf,bi){var bh=an(bf+"="+h(a7(bg)),bi,"link");ar(bh,aG)}function a4(bg,bf){if(bg!==""){return bg+bf.charAt(0).toUpperCase()+bf.slice(1)}return bf}function aj(bk){var bj,bf,bi=["","webkit","ms","moz"],bh;if(!at){for(bf=0;bf<bi.length;bf++){bh=bi[bf];if(Object.prototype.hasOwnProperty.call(o,a4(bh,"hidden"))){if(o[a4(bh,"visibilityState")]==="prerender"){bj=true
}break}}}if(bj){L(o,bh+"visibilitychange",function bg(){o.removeEventListener(bh+"visibilitychange",bg,false);bk()});return}bk()}function ai(bh,bg){var bi,bf="(^| )(piwik[_-]"+bg;if(bh){for(bi=0;bi<bh.length;bi++){bf+="|"+bh[bi]}}bf+=")( |$)";return new RegExp(bf)}function aZ(bi,bf,bj){var bh=ai(aA,"download"),bg=ai(af,"link"),bk=new RegExp("\\.("+ao+")([?&#]|$)","i");return bg.test(bi)?"link":(bh.test(bi)||bk.test(bf)?"download":(bj?0:"link"))}function aQ(bk){var bi,bg,bf;while((bi=bk.parentNode)!==null&&q(bi)&&((bg=bk.tagName.toUpperCase())!=="A"&&bg!=="AREA")){bk=bi}if(q(bk.href)){var bl=bk.hostname||b(bk.href),bm=bl.toLowerCase(),bh=bk.href.replace(bl,bm),bj=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):","i");if(!bj.test(bh)){bf=aZ(bk.className,bh,aI(bm));if(bf){bh=d(bh);a0(bh,bf)}}}}function bd(bf){var bg,bh;bf=bf||y.event;bg=bf.which||bf.button;bh=bf.target||bf.srcElement;if(bf.type==="click"){if(bh){aQ(bh)}}else{if(bf.type==="mousedown"){if((bg===1||bg===2)&&bh){aC=bg;
aa=bh}else{aC=aa=null}}else{if(bf.type==="mouseup"){if(bg===aC&&bh===aa){aQ(bh)}aC=aa=null}}}}function aP(bg,bf){if(bf){L(bg,"mouseup",bd,false);L(bg,"mousedown",bd,false)}else{L(bg,"click",bd,false)}}function ay(bg){if(!aO){aO=true;var bh,bf=ai(T,"ignore"),bi=o.links;if(bi){for(bh=0;bh<bi.length;bh++){if(!bf.test(bi[bh].className)){aP(bi[bh],bg)}}}}}function a8(){var bg,bh,bi={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},bf=(new RegExp("Mac OS X.*Safari/")).test(c.userAgent)?y.devicePixelRatio||1:1;if(!((new RegExp("MSIE")).test(c.userAgent))){if(c.mimeTypes&&c.mimeTypes.length){for(bg in bi){if(Object.prototype.hasOwnProperty.call(bi,bg)){bh=c.mimeTypes[bi[bg]];a3[bg]=(bh&&bh.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&q(c.javaEnabled)&&c.javaEnabled()){a3.java="1"
}if(m(y.GearsFactory)){a3.gears="1"}a3.cookie=R()}a3.res=B.width*bf+"x"+B.height*bf}a8();aD();return{getVisitorId:function(){return(N())[1]},getVisitorInfo:function(){return N()},getAttributionInfo:function(){return i()},getAttributionCampaignName:function(){return i()[0]},getAttributionCampaignKeyword:function(){return i()[1]},getAttributionReferrerTimestamp:function(){return i()[2]},getAttributionReferrerUrl:function(){return i()[3]},setTrackerUrl:function(bf){P=bf},setSiteId:function(bf){a2=bf},setCustomData:function(bf,bg){if(A(bf)){W=bf}else{if(!W){W=[]}W[bf]=bg}},getCustomData:function(){return W},setCustomVariable:function(bg,bf,bj,bh){var bi;if(!q(bh)){bh="visit"}if(bg>0){bf=q(bf)&&!j(bf)?String(bf):bf;bj=q(bj)&&!j(bj)?String(bj):bj;bi=[bf.slice(0,a6),bj.slice(0,a6)];if(bh==="visit"||bh===2){O();S[bg]=bi}else{if(bh==="page"||bh===3){aB[bg]=bi}}}},getCustomVariable:function(bg,bh){var bf;if(!q(bh)){bh="visit"}if(bh==="page"||bh===3){bf=aB[bg]}else{if(bh==="visit"||bh===2){O();bf=S[bg]
}}if(!q(bf)||(bf&&bf[0]==="")){return false}return bf},deleteCustomVariable:function(bf,bg){if(this.getCustomVariable(bf,bg)){this.setCustomVariable(bf,"","",bg)}},setLinkTrackingTimer:function(bf){aG=bf},setDownloadExtensions:function(bf){ao=bf},addDownloadExtensions:function(bf){ao+="|"+bf},setDomains:function(bf){aH=j(bf)?[bf]:bf;aH.push(aY)},setIgnoreClasses:function(bf){T=j(bf)?[bf]:bf},setRequestMethod:function(bf){aJ=bf||"GET"},setReferrerUrl:function(bf){aL=bf},setCustomUrl:function(bf){aw=aX(bc,bf)},setDocumentTitle:function(bf){am=bf},setDownloadClasses:function(bf){aA=j(bf)?[bf]:bf},setLinkClasses:function(bf){af=j(bf)?[bf]:bf},setCampaignNameKey:function(bf){aq=j(bf)?[bf]:bf},setCampaignKeywordKey:function(bf){al=j(bf)?[bf]:bf},discardHashTag:function(bf){V=bf},setCookieNamePrefix:function(bf){ba=bf;S=ab()},setCookieDomain:function(bf){Z=s(bf);aD()},setCookiePath:function(bf){bb=bf;aD()},setVisitorCookieTimeout:function(bf){ad=bf*1000},setSessionCookieTimeout:function(bf){ae=bf*1000
},setReferralCookieTimeout:function(bf){ax=bf*1000},setConversionAttributionFirstReferrer:function(bf){av=bf},disableCookies:function(){X=true;a3.cookie="0"},setDoNotTrack:function(bg){var bf=c.doNotTrack||c.msDoNotTrack;a5=bg&&(bf==="yes"||bf==="1");if(a5){this.disableCookies()}},addListener:function(bg,bf){aP(bg,bf)},enableLinkTracking:function(bf){if(l){ay(bf)}else{v.push(function(){ay(bf)})}},setHeartBeatTimer:function(bh,bg){var bf=new Date();U=bf.getTime()+bh*1000;ah=bg*1000},killFrame:function(){if(y.location!==y.top.location){y.top.location=y.location}},redirectFile:function(bf){if(y.location.protocol==="file:"){y.location=bf}},setCountPreRendered:function(bf){at=bf},trackGoal:function(bf,bh,bg){aj(function(){aE(bf,bh,bg)})},trackLink:function(bg,bf,bh){aj(function(){a0(bg,bf,bh)})},trackPageView:function(bf,bg){if(t(P,a2)){aj(function(){D(P,a2)})}else{aj(function(){az(bf,bg)})}},trackSiteSearch:function(bf,bh,bg){aj(function(){ak(bf,bh,bg)})},setEcommerceView:function(bi,bf,bh,bg){if(!q(bh)||!bh.length){bh=""
}else{if(bh instanceof Array){bh=JSON2.stringify(bh)}}aB[5]=["_pkc",bh];if(q(bg)&&String(bg).length){aB[2]=["_pkp",bg]}if((!q(bi)||!bi.length)&&(!q(bf)||!bf.length)){return}if(q(bi)&&bi.length){aB[3]=["_pks",bi]}if(!q(bf)||!bf.length){bf=""}aB[4]=["_pkn",bf]},addEcommerceItem:function(bj,bf,bh,bg,bi){if(bj.length){aR[bj]=[bj,bf,bh,bg,bi]}},trackEcommerceOrder:function(bf,bj,bi,bh,bg,bk){aV(bf,bj,bi,bh,bg,bk)},trackEcommerceCartUpdate:function(bf){a9(bf)}}}function p(){return{push:I}}L(y,"beforeunload",J,false);k();Date.prototype.getTimeAlias=Date.prototype.getTime;C=new u();for(F=0;F<_paq.length;F++){if(_paq[F][0]==="setTrackerUrl"||_paq[F][0]==="setSiteId"){I(_paq[F]);delete _paq[F]}}for(F=0;F<_paq.length;F++){if(_paq[F]){I(_paq[F])}}_paq=new p();return{addPlugin:function(i,N){a[i]=N},getTracker:function(i,N){return new u(i,N)},getAsyncTracker:function(){return C}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)}catch(i){}return}var c,e=Piwik.getTracker(d,f);
e.setDocumentTitle(b);e.setCustomData(g);c=a("tracker_pause");if(c){e.setLinkTrackingTimer(c)}c=a("download_extensions");if(c){e.setDownloadExtensions(c)}c=a("hosts_alias");if(c){e.setDomains(c)}c=a("ignore_classes");if(c){e.setIgnoreClasses(c)}e.trackPageView();if(a("install_tracker")){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};