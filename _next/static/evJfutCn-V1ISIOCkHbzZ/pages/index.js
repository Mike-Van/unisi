(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MGiz:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("rt45"),o=n("q1tI"),a=n.n(o),c=n("4H2A"),i=n("sN5I"),u=n("vOnD"),l=n("MGiz"),s=n.n(l),f=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var d={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},m={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},y=["style","script"],h=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,g=/mailto:/i,k=/\n{2,}$/,v=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,b=/^ *> ?/gm,x=/^ {2,}\n/,w=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,S=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,E=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,O=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,T=/^(?:\n *)*\n/,C=/\r\n?/g,$=/^\[\^(.*)\](:.*)\n/,A=/^\[\^(.*)\]/,_=/\f/g,z=/^\s*?\[(x|\s)\]/,L=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,j=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,N=/^ *(?!<[a-z][^ >\/]* ?\/>)<([a-z][^ >\/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,B=/&([a-z]+);/g,P=/^<!--.*?-->/,D=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,I=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,U=/^\{.*\}$/,R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,F=/^<([^ >]+@[^ >]+)>/,M=/^<([^ >]+:\/[^ >]+)>/,W=/ *\n+$/,q=/(?:^|\n)( *)$/,G=/-([a-z])?/gi,V=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,H=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,J=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,X=/^\[([^\]]*)\] ?\[([^\]]*)\]/,K=/(\[|\])/g,Q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Y=/\t/g,ee=/^ *\| */,te=/(^ *\||\| *$)/g,ne=/ *$/,re=/^ *:-+: *$/,oe=/^ *:-+ *$/,ae=/^ *-+: *$/,ce=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ie=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ue=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,le=/^\\([^0-9A-Za-z\s])/,se=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,fe=/(^\n+|\n+$|\s+$)/g,pe=/^([ \t]*)/,de=/\\([^0-9A-Z\s])/gi,me=/^( *)((?:[*+-]|\d+\.)) +/,ye=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,he=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,ge=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ke=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ve=[v,E,S,L,j,N,P,I,ye,he,V,Z];function be(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function xe(e){return ae.test(e)?"right":re.test(e)?"center":oe.test(e)?"left":null}function we(e,t,n){var r=n.inTable;n.inTable=!0;var o=t(e.trim(),n);n.inTable=r;var a=[[]];return o.forEach(function(e,t){"tableSeparator"===e.type?0!==t&&t!==o.length-1&&a.push([]):("text"===e.type&&(null==o[t+1]||"tableSeparator"===o[t+1].type)&&(e.content=e.content.replace(ne,"")),a[a.length-1].push(e))}),a}function Se(e,t,n){n.inline=!0;var r=we(e[1],t,n),o=function(e){return e.replace(te,"").split("|").map(xe)}(e[2]),a=function(e,t,n){return e.trim().split("\n").map(function(e){return we(e,t,n)})}(e[3],t,n);return n.inline=!1,{align:o,cells:a,header:r,type:"table"}}function Ee(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Oe(e){function t(r,o){for(var a=[],c="";r;)for(var i=0;i<n.length;){var u=n[i],l=e[u],s=l.match(r,o,c);if(s){var f=s[0];r=r.substring(f.length);var p=l.parse(s,t,o);null==p.type&&(p.type=u),a.push(p),c=f;break}i++}return a}var n=Object.keys(e);return n.sort(function(t,n){var r=e[t].order,o=e[n].order;return r===o?t<n?-1:1:r-o}),function(e,n){return t(function(e){return e.replace(C,"\n").replace(_,"").replace(Y,"    ")}(e),n)}}function Te(e){return function(t,n){return n.inline?e.exec(t):null}}function Ce(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function $e(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ae(e){return function(t){return e.exec(t)}}function _e(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(t){return null}return e}function ze(e){return e.replace(de,"$1")}function Le(e,t,n){var r=n.inline||!1,o=n.simple||!1;n.inline=!0,n.simple=!0;var a=e(t,n);return n.inline=r,n.simple=o,a}function je(e,t,n){var r=n.inline||!1,o=n.simple||!1;n.inline=!1,n.simple=!0;var a=e(t,n);return n.inline=r,n.simple=o,a}function Ne(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Be(e,t,n){return{content:Le(t,e[1],n)}}function Pe(){return{}}function De(){return null}function Ie(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Ue(e,t,n){for(var r=e,o=t.split(".");o.length&&void 0!==(r=r[o[0]]);)o.shift();return r||n}function Re(e,t){var n=Ue(t,e);return n?"function"==typeof n||"object"===("undefined"==typeof n?"undefined":p(n))&&"render"in n?n:Ue(t,e+".component",e):e}var Fe=1,Me=2,We=3,qe=4,Ge=5;function Ve(e,t){function n(e,n){for(var r=Ue(t.overrides,e+".props",{}),o=arguments.length,a=Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];return c.apply(void 0,[Re(e,t.overrides),f({},n,r,{className:Ie(n&&n.className,r.className)||void 0})].concat(a))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===Q.test(e));var o=C(p(r?e:e.replace(fe,"")+"\n\n",{inline:r})),a=void 0;return o.length>1?a=n(r?"span":"div",{key:"outer"},o):1===o.length?"string"==typeof(a=o[0])&&(a=n("span",{key:"outer"},a)):a=n("span",{key:"outer"}),a}function o(e){var t=e.match(h);return t?t.reduce(function(e,t,n){var o=t.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(D)&&(e=e.replace(G,function(e,t){return t.toUpperCase()})),e}(t.slice(0,o)).trim(),i=s()(t.slice(o+1).trim()),u=d[c]||c,l=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce(function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,function(e){return e[1].toUpperCase()});return e[r]=t.slice(n.length+1).trim(),e},{}):"href"===e?_e(t):(t.match(U)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,i);(N.test(l)||I.test(l))&&(e[u]=a.a.cloneElement(r(l.trim()),{key:n}))}else e[d[t]||t]=!0;return e},{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||be,t.namedCodesToUnicode=t.namedCodesToUnicode?f({},m,t.namedCodesToUnicode):m;var c=t.createElement||a.a.createElement;var i=[],u={},l={blockQuote:{match:$e(v),order:Me,parse:function(e,t,n){return{content:t(e[0].replace(b,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Ae(x),order:Me,parse:Pe,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:$e(w),order:Me,parse:Pe,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:$e(E),order:Fe,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:$e(S),order:Fe,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Ce(O),order:qe,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:$e($),order:Fe,parse:function(e){return i.push({footnote:e[2],identifier:e[1]}),{}},react:De},footnoteReference:{match:Te(A),order:Me,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:_e(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Te(z),order:Me,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:$e(L),order:Me,parse:function(e,n,r){return{content:Le(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:$e(j),order:Fe,parse:function(e,t,n){return{content:Le(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlBlock:{match:Ae(N),order:Me,parse:function(e,t,n){var r=e[3].match(pe)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),i=function(e){return ve.some(function(t){return t.test(e)})}(c)?Ne:Le,u=e[1].toLowerCase(),l=-1!==y.indexOf(u);return{attrs:o(e[2]),content:l?e[3]:i(t,c,n),noInnerParse:l,tag:l?u:e[1]}},react:function(e,t,r){return n(e.tag,f({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},htmlComment:{match:Ae(P),order:Me,parse:function(){return{}},react:De},htmlSelfClosing:{match:Ae(I),order:Me,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,f({},e.attrs,{key:r.key}))}},image:{match:Ce(ke),order:Me,parse:function(e){return{alt:e[1],target:ze(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:_e(e.target)})}},link:{match:Te(ge),order:qe,parse:function(e,t,n){return{content:je(t,e[1],n),target:ze(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:_e(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Te(M),order:Fe,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Te(R),order:Fe,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Te(F),order:Fe,parse:function(e){var t=e[1],n=e[1];return g.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=q.exec(n),o=t._list||!t.inline;return r&&o?(e=r[1]+e,he.exec(e)):null},order:Me,parse:function(e,t,n){var r=e[2],o=r.length>1,a=o?+r:void 0,c=e[0].replace(k,"\n").match(ye),i=!1;return{items:c.map(function(e,r){var o=me.exec(e)[0].length,a=new RegExp("^ {1,"+o+"}","gm"),u=e.replace(a,"").replace(me,""),l=r===c.length-1,s=-1!==u.indexOf("\n\n")||l&&i;i=s;var f,p=n.inline,d=n._list;n._list=!0,s?(n.inline=!1,f=u.replace(W,"\n\n")):(n.inline=!0,f=u.replace(W,""));var m=t(f,n);return n.inline=p,n._list=d,m}),ordered:o,start:a}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map(function(e,o){return n("li",{key:o},t(e,r))}))}},newlineCoalescer:{match:$e(T),order:qe,parse:Pe,react:function(){return"\n"}},paragraph:{match:$e(Z),order:qe,parse:Be,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Te(H),order:Fe,parse:function(e){return u[e[1]]={target:e[2],title:e[4]},{}},react:De},refImage:{match:Ce(J),order:Fe,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:_e(u[e.ref].target),title:u[e.ref].title})}},refLink:{match:Te(X),order:Fe,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(K,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return u[e.ref]?n("a",{key:r.key,href:_e(u[e.ref].target),title:u[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:$e(V),order:Me,parse:Se,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map(function(o,a){return n("th",{key:a,style:Ee(e,a)},t(o,r))}))),n("tbody",null,e.cells.map(function(o,a){return n("tr",{key:a},o.map(function(o,a){return n("td",{key:a,style:Ee(e,a)},t(o,r))}))})))}},tableSeparator:{match:function(e,t){return t.inTable?ee.exec(e):null},order:Me,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ae(se),order:Ge,parse:function(e){return{content:e[0].replace(B,function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e})}},react:function(e){return e.content}},textBolded:{match:Ce(ce),order:We,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Ce(ie),order:qe,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Ce(le),order:Me,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Ce(ue),order:qe,parse:Be,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}},p=Oe(l),C=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var o=r.key,a=[],c=!1,i=0;i<n.length;i++){r.key=i;var u=t(n[i],r),l="string"==typeof u;l&&c?a[a.length-1]+=u:a.push(u),c=l}return r.key=o,a}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(l)),_=r(e);return i.length&&_.props.children.push(n("footer",{key:"footer"},i.map(function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,C(p(e.footnote,{inline:!0})))}))),_}function Ze(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ve(t,n),r)}var He=a.a.createElement;function Je(){var e=Object(r.a)(["\n  ","\n"]);return Je=function(){return e},e}function Xe(){var e=Object(r.a)(["\n  ","\n"]);return Xe=function(){return e},e}var Ke="Unisi Tech",Qe="How much to build an MVP (minimum viable product)?",Ye="Do you have an amazing idea for an app or software but don\u2019t know where to start?\n    Would you like to find out how much it would cost to build a prototype?\n    <br/>\n    <br/>\n    We have created this handy cost calculator just for you. Find out how much\n    your prototype will cost in 2 mins.",et=(t.default=function(){return He(c.a.Comps.Layout,null,He(c.a.Elems.Wrap,{fucss:"md-dp:flx mdx-m-t:40px"},He(c.a.Elems.Wrap,{fucss:"ta:l mxw:330px"},He(et.Logo,{to:"/"},Ke),He(et.Title,null,Qe),He(et.Desc,null,Ye),He(c.a.Elems.Wrap,{fucss:"m-t:20px"},He(c.a.Elems.Button,{to:"next",icon:"FaLongArrowAltRight"},"Let's get started"))),He("img",{className:"mxw:600px md-m-l:40px w:100pc mdx-m-t:40px",src:"https://firebasestorage.googleapis.com/v0/b/theunisi.appspot.com/o/unisi%2Fvideo.svg?alt=media&token=18b4fc94-9d8b-4c87-a92f-ff84db6229af"}),He(c.a.Elems.Video,{muted:!0,autoPlay:!0,fucss:"md-ps:ab mdx-try:110npc t,r:0 mxw:680px m-t:35px m-r:80px",src:"https://firebasestorage.googleapis.com/v0/b/theunisi.appspot.com/o/unisi%2Fvideo.mp4?alt=media&token=c486d2b1-629c-4eb0-8de7-3bebccdc4faa"})))},{Logo:Object(u.c)(c.a.Elems.Link)(Xe(),function(e){return Object(i.fustyle)("fs:120pc c:prim fw:800 tt:uc",e.theme)}),Title:u.c.h1(Je(),Object(i.fustyle)("fs:200pc fw:800 m-tb:20px lh:1.1")),Desc:function(e){var t=e.children;return He(c.a.Elems.Wrap,{fucss:"fw:500 lh:1.6em c:txt"},He(Ze,{options:{forceBlock:!0},style:{overflowWrap:"anywhere"}},t))}})},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,0]]]);