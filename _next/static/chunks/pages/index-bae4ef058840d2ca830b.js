(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8617:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var i,s=n(809),r=n.n(s),o=n(2447),a=n(6595),l=new(n(2722).E)("https://script.google.com/macros/s/AKfycbybP2b0HMk4IV6JB7w3_AJGpzz8V0B-N_HlelwbDQ3RPnxewEZVCIYfZgLMFMifqyGFbg/exec");function c(e,t){return e||t}!function(e){var t=null;function n(){return(n=(0,o.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:return t=e.sent,window.onbeforeunload=function(){i.leave()},e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(r().mark((function e(){var n,i,s,o,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,a.ZP.load();case 4:return s=e.sent,e.next=7,s.get();case 7:return o=e.sent,l={id:o.visitorId,timezone:c(o.components.timezone.value,""),platform:c(o.components.platform.value,""),languages:c(null===(n=o.components.languages.value)||void 0===n?void 0:n.join(";"),""),vendor:c(o.components.vendor.value,""),vendorFlavors:c(null===(i=o.components.vendorFlavors.value)||void 0===i?void 0:i.join(";"),"")},t=l,e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.initialize=function(){return n.apply(this,arguments)},e.getVisitor=s;e.enterPage=function(e){if(t){var n=Object.assign({},t,{visitorId:t.id,action:"EnterPage",pageName:e,referer:document.referrer,location:document.location});l.postRow(new FormData,n)}},e.leave=function(){if(t){var e=Object.assign({},t,{visitorId:t.id,action:"Leave",referer:document.referrer,location:document.location});l.postRow(new FormData,e)}},e.action=function(e,t){},e.followLink=function(e){}}(i||(i={}))},2722:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var i=n(809),s=n.n(i),r=n(2447),o=n(4047),a=n(2700),l=function(){function e(t){(0,o.Z)(this,e),this.url=t}return(0,a.Z)(e,[{key:"postRow",value:function(){var e=(0,r.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&Object.keys(n).forEach((function(e){t.append(e,n[e])})),e.next=3,fetch("".concat(this.url),{method:"POST",body:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()},8397:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var i=n(5893),s=n(9227),r=n(7294),o=n(9008),a=n(616),l=n(1664),c=function(e){return(0,a.Z)(e),(0,i.jsxs)("footer",{style:{display:"flex",padding:"1rem",color:"#CCC"},children:[(0,i.jsxs)("div",{className:" copyright",children:["\xa9 ",(new Date).getFullYear()," Slazy"]}),(0,i.jsx)("div",{style:{flex:1}}),(0,i.jsx)(l.default,{href:"/privacy",children:(0,i.jsx)("a",{target:"_blank",children:"Privacy policy"})}),(0,i.jsx)("span",{style:{margin:"0 10px"},children:"|"}),(0,i.jsx)("a",{href:"mailto:contact@slazy.io",children:"Contact"})]})},d=n(9544),u=n(6992),f=n(5614),h=n(6737),x=n(7243),p=n(3999),m=n(8008),g=n(7975),v=n(4788),j=function(e){(0,a.Z)(e);var t=r.useState(!1),n=(0,s.Z)(t,2),o=n[0],c=n[1];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(d.Z,{color:"light",light:!0,expand:"md",children:[(0,i.jsxs)(u.Z,{href:"/",style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)("div",{style:{marginRight:10},children:(0,i.jsx)(v.Z,{src:"/images/logo-512x512.png",alt:"logo",style:{width:48,height:48}})}),(0,i.jsx)("h1",{style:{fontSize:"1.6rem"},children:"Slazy"})]}),(0,i.jsx)(f.Z,{onClick:function(){return c(!o)}}),(0,i.jsxs)(h.Z,{isOpen:o,navbar:!0,children:[(0,i.jsxs)(x.Z,{className:"mr-auto",navbar:!0,id:"basic-navbar-nav",children:[(0,i.jsx)(p.Z,{children:(0,i.jsx)(l.default,{href:"/#features",passHref:!0,children:(0,i.jsx)(m.Z,{children:"Features"})})}),(0,i.jsx)(p.Z,{children:(0,i.jsx)(l.default,{href:"/about",passHref:!0,children:(0,i.jsx)(m.Z,{children:"About"})})})]}),(0,i.jsx)(x.Z,{children:(0,i.jsx)(p.Z,{children:(0,i.jsx)(l.default,{href:"/#invite",passHref:!0,children:(0,i.jsx)(g.Z,{color:"primary",children:"Request Invite"})})})})]})]})})},y=function(e){var t=e.onDismiss;return(0,i.jsxs)("div",{style:{position:"fixed",bottom:0,zIndex:1,width:"100%",background:"#ddd",padding:10,textAlign:"center",fontSize:"0.8em",display:"flex",alignItems:"center"},children:[(0,i.jsxs)("span",{children:[(0,i.jsx)("b",{children:"We don't use tracking cookies"})," or similar technologies and we collect usage data ethically ",(0,i.jsx)("b",{children:"in respect of your privacy"}),".",(0,i.jsx)(l.default,{href:"/privacy",children:(0,i.jsx)("a",{target:"_blank",style:{marginLeft:10},children:"Learn More"})})]}),(0,i.jsx)("div",{style:{flex:1}}),(0,i.jsx)(g.Z,{style:{outline:"none",border:"none"},size:"sm",outline:!0,onClick:function(){t&&t()},children:(0,i.jsx)("i",{className:"bi bi-x"})})]})},b=function(e){var t=e.children,n=e.title,a=void 0===n?"This is the default title":n,l=r.useState(),d=(0,s.Z)(l,2),u=d[0],f=d[1],h=r.useState(!0),x=(0,s.Z)(h,2),p=x[0],m=x[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:a}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsx)("header",{ref:function(e){e&&f(e.getBoundingClientRect().height)},style:{position:"fixed",top:0,zIndex:1,width:"100%"},children:(0,i.jsx)(j,{})}),(0,i.jsx)("div",{style:{height:u}}),t,(0,i.jsx)(c,{}),p&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{height:40}}),(0,i.jsx)(y,{onDismiss:function(){m(!1)}})]})]})}},4788:function(e,t,n){"use strict";var i=n(5893),s=n(9227),r=n(7294);t.Z=function(e){var t=e.src,n=e.alt,o=e.style,a=r.useState(!1),l=(0,s.Z)(a,2),c=l[0],d=l[1];r.useEffect((function(){var e=!window||"localhost"!==window.location.hostname;d(e)}),[]);var u=c?"".concat("","/").concat(t):t;return(0,i.jsx)("img",{src:u,alt:n,style:o})}},2247:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var i=n(5893),s=n(616),r=n(7294),o=n(1664),a=n(2122),l=n(9756),c=n(5697),d=n.n(c),u=n(4184),f=n.n(u),h=n(3663),x=d().oneOfType([d().number,d().string]),p={tag:h.iC,noGutters:d().bool,className:d().string,cssModule:d().object,form:d().bool,xs:x,sm:x,md:x,lg:x,xl:x},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,s=e.tag,o=e.form,c=e.widths,d=(0,l.Z)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];c.forEach((function(t,n){var i=e[t];if(delete d[t],i){var s=!n;u.push(s?"row-cols-"+i:"row-cols-"+t+"-"+i)}}));var x=(0,h.mx)(f()(t,i?"no-gutters":null,o?"form-row":"row",u),n);return r.createElement(s,(0,a.Z)({},d,{className:x}))};g.propTypes=p,g.defaultProps=m;var v=g,j=d().oneOfType([d().number,d().string]),y=d().oneOfType([d().bool,d().number,d().string,d().shape({size:d().oneOfType([d().bool,d().number,d().string]),order:j,offset:j})]),b={tag:h.iC,xs:y,sm:y,md:y,lg:y,xl:y,className:d().string,cssModule:d().object,widths:d().array},w={tag:"div",widths:["xs","sm","md","lg","xl"]},Z=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},N=function(e){var t=e.className,n=e.cssModule,i=e.widths,s=e.tag,o=(0,l.Z)(e,["className","cssModule","widths","tag"]),c=[];i.forEach((function(t,i){var s=e[t];if(delete o[t],s||""===s){var r=!i;if((0,h.Kn)(s)){var a,l=r?"-":"-"+t+"-",d=Z(r,t,s.size);c.push((0,h.mx)(f()(((a={})[d]=s.size||""===s.size,a["order"+l+s.order]=s.order||0===s.order,a["offset"+l+s.offset]=s.offset||0===s.offset,a)),n))}else{var u=Z(r,t,s);c.push(u)}}})),c.length||c.push("col");var d=(0,h.mx)(f()(t,c),n);return r.createElement(s,(0,a.Z)({},o,{className:d}))};N.propTypes=b,N.defaultProps=w;var k=N,z=n(7975),C=n(8397),S=n(809),E=n.n(S),F=n(2447),P=n(9227),A=n(3349),R=n(3552),D={children:d().node,inline:d().bool,tag:h.iC,innerRef:d().oneOfType([d().object,d().func,d().string]),className:d().string,cssModule:d().object},I=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,A.Z)(n)),n.submit=n.submit.bind((0,A.Z)(n)),n}(0,R.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.inline,s=e.tag,o=e.innerRef,c=(0,l.Z)(e,["className","cssModule","inline","tag","innerRef"]),d=(0,h.mx)(f()(t,!!i&&"form-inline"),n);return r.createElement(s,(0,a.Z)({},c,{ref:o,className:d}))},t}(r.Component);I.propTypes=D,I.defaultProps={tag:"form"};var O=I,M={children:d().node,row:d().bool,check:d().bool,inline:d().bool,disabled:d().bool,tag:h.iC,className:d().string,cssModule:d().object},T=function(e){var t=e.className,n=e.cssModule,i=e.row,s=e.disabled,o=e.check,c=e.inline,d=e.tag,u=(0,l.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),x=(0,h.mx)(f()(t,!!i&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!s)&&"disabled"),n);return"fieldset"===d&&(u.disabled=s),r.createElement(d,(0,a.Z)({},u,{className:x}))};T.propTypes=M,T.defaultProps={tag:"div"};var _=T,V={children:d().node,type:d().string,size:d().oneOfType([d().number,d().string]),bsSize:d().string,valid:d().bool,invalid:d().bool,tag:h.iC,innerRef:d().oneOfType([d().object,d().func,d().string]),plaintext:d().bool,addon:d().bool,className:d().string,cssModule:d().object},H=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,A.Z)(n)),n.focus=n.focus.bind((0,A.Z)(n)),n}(0,R.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.type,s=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,u=e.addon,x=e.plaintext,p=e.innerRef,m=(0,l.Z)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,v=new RegExp("\\D","g"),j=d||("select"===i||"textarea"===i?i:"input"),y="form-control";x?(y+="-plaintext",j=d||"input"):"file"===i?y+="-file":"range"===i?y+="-range":g&&(y=u?null:"form-check-input"),m.size&&v.test(m.size)&&((0,h.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=m.size,delete m.size);var b=(0,h.mx)(f()(t,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,y),n);return("input"===j||d&&"function"===typeof d)&&(m.type=i),m.children&&!x&&"select"!==i&&"string"===typeof j&&"select"!==j&&((0,h.O4)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),r.createElement(j,(0,a.Z)({},m,{ref:p,className:b,"aria-invalid":c}))},t}(r.Component);H.propTypes=V,H.defaultProps={type:"text"};var W,B=H,K=n(8617),Q=n(2722),q=function(e){var t=e.background,n=e.reverse;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:n?(0,i.jsx)("polygon",{fill:t,points:"0 100 0 0 2560 0"}):(0,i.jsx)("polygon",{fill:t,points:"2560 0 2560 100 0 100"})})})};!function(e){e[e.Error=-1]="Error",e[e.NotPerformed=0]="NotPerformed",e[e.Success=1]="Success"}(W||(W={}));var L,U=function(e){(0,s.Z)(e);var t=r.useState(""),n=(0,P.Z)(t,2),a=n[0],l=n[1],c=r.useState(!1),d=(0,P.Z)(c,2),u=d[0],f=d[1],h=r.useState(W.NotPerformed),x=(0,P.Z)(h,2),p=x[0],m=x[1],g=function(){var e=(0,F.Z)(E().mark((function e(t){var n,i,s,r,o,a,l;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),"https://script.google.com/macros/s/AKfycbwopZAxCUA1wum9UDlkOfUq5sIQZN4krAyScmeiVIl-V8tCnOfrqwfrAwzZr7Xpj5KMVQ/exec",n=new Q.E("https://script.google.com/macros/s/AKfycbwopZAxCUA1wum9UDlkOfUq5sIQZN4krAyScmeiVIl-V8tCnOfrqwfrAwzZr7Xpj5KMVQ/exec"),t.preventDefault(),e.next=6,K.c.getVisitor();case 6:return i=e.sent,s=new FormData(t.target),e.prev=8,a=Object.assign({},i||{},{visitorId:i.id,test:"localhost"===(null===(r=window)||void 0===r||null===(o=r.location)||void 0===o?void 0:o.hostname)}),e.next=12,n.postRow(s,a);case 12:l=e.sent,console.log("Success ",l),m(W.Success),f(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(8),console.error("Error ",e.t0),m(W.Error);case 22:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsx)(q,{background:"#FFF3E6"}),(0,i.jsxs)("section",{id:"invite",style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"100px 10px",backgroundColor:"#FFF3E6"},children:[(0,i.jsxs)("h1",{style:{textAlign:"center"},children:["Launching in 2021. ",(0,i.jsx)("br",{}),"Be the first to be invited"]}),p!==W.Success&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"We\u2019ll send you a link once the first version is ready"}),(0,i.jsx)(O,{inline:!0,style:{width:"100%",display:"flex",justifyContent:"center"},onSubmit:g,children:(0,i.jsxs)(_,{row:!0,style:{display:"flex",width:"100%",maxWidth:500},children:[(0,i.jsx)(B,{style:{flex:1,marginRight:10},type:"email",name:"email",id:"email",placeholder:"Email",value:a,onChange:function(e){l(e.target.value)}}),(0,i.jsx)(z.Z,{type:"submit",color:"primary",disabled:!function(e){var t=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return e.length>0&&t.test(e)}(a),children:u?(0,i.jsx)("div",{className:"rotating",children:(0,i.jsx)("i",{className:"bi bi-arrow-clockwise"})}):(0,i.jsx)("span",{children:"Submit"})})]})}),(0,i.jsxs)("p",{style:{opacity:.7,fontSize:"0.8em"},children:[(0,i.jsx)("span",{children:"By signing up you agree to the "}),(0,i.jsx)(o.default,{href:"/privacy",children:(0,i.jsx)("a",{target:"_blank",children:"privacy policy"})}),(0,i.jsx)("span",{children:"."})]})]}),p===W.Success&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("p",{style:{opacity:.7,fontSize:"1.5em"},children:"You're all in, you'll receive your invite when its ready!"})})]}),(0,i.jsx)(q,{background:"#FFF3E6",reverse:!0})]})},G=n(4788);n(785);!function(e){e[e.NotDefined=-1]="NotDefined",e[e.Negative=0]="Negative",e[e.Neutral=1]="Neutral",e[e.Positive=2]="Positive"}(L||(L={}));var X={0:"bi-hand-thumbs-down",1:"bi-emoji-neutral",2:"bi-hand-thumbs-up"},Y=new Q.E("https://script.google.com/macros/s/AKfycbwemTDaF-9Q4t4_LjC47U-pohCA6lZvePTc_63y5YPnQGW-5nPelh-7WKd93c-FoOJwpA/exec"),J=function(e){var t=e.topic,n=r.useState(L.NotDefined),s=(0,P.Z)(n,2),o=s[0],a=s[1],l=function(e){return(0,F.Z)(E().mark((function n(){var i,s;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e===o?L.NotDefined:e,n.next=3,K.c.getVisitor();case 3:s=n.sent,Y.postRow(new FormData,{visitorId:s.id,topic:t,feedback:i}),a(i);case 6:case"end":return n.stop()}}),n)})))},c=function(e,t){return t===e?"primary":"secondary"},d=function(e,t){return t!==e};return(0,i.jsxs)("div",{className:"inline-container",style:{justifyContent:"flex-end"},children:[o!==L.NotDefined&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{style:{fontSize:"0.8rem",opacity:.5},children:"Thanks for your feedback!"}),(0,i.jsx)("i",{className:"bi ".concat(X[o])})]}),o===L.NotDefined&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{style:{fontSize:"0.8rem",opacity:.5},children:"Are these features valuable in your context?"}),(0,i.jsx)(z.Z,{className:"feedback-button",size:"sm",outline:d(L.Negative,o),color:c(L.Negative,o),onClick:l(L.Negative),children:(0,i.jsx)("i",{className:"bi bi-hand-thumbs-down"})}),(0,i.jsx)(z.Z,{className:"feedback-button",size:"sm",outline:d(L.Neutral,o),color:c(L.Neutral,o),onClick:l(L.Neutral),children:(0,i.jsx)("i",{className:"bi bi-emoji-neutral"})}),(0,i.jsx)(z.Z,{className:"feedback-button",size:"sm",outline:d(L.Positive,o),color:c(L.Positive,o),onClick:l(L.Positive),children:(0,i.jsx)("i",{className:"bi bi-hand-thumbs-up"})})]})]})},$=function(e){return(0,s.Z)(e),K.c.enterPage("Home"),(0,i.jsxs)(C.Z,{title:"Slazy.io",children:[(0,i.jsx)("section",{style:{position:"relative",backgroundColor:"#FFF3E6"},children:(0,i.jsxs)(v,{style:{padding:"0 20px"},children:[(0,i.jsx)(k,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:10},children:[(0,i.jsxs)("h1",{style:{marginBottom:"1.5em"},children:["Create better software,",(0,i.jsx)("br",{})," without the busywork"]}),(0,i.jsx)("div",{style:{height:1,maxWidth:100,background:"grey",marginBottom:"1em"}}),(0,i.jsxs)("p",{style:{fontSize:"1.4em",maxWidth:460},children:["Delegate boring tasks to Slazy and focus on ",(0,i.jsx)("b",{children:"creating a Working Application."}),"  "]}),(0,i.jsx)("div",{style:{alignSelf:"flex-start"},children:(0,i.jsx)(o.default,{href:"/#invite",passHref:!0,children:(0,i.jsx)(z.Z,{color:"primary",size:"lg",children:"Request Invite"})})})]})}),(0,i.jsx)(k,{md:"6",children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(G.Z,{src:"/images/hero.png",alt:"Picture of the author",style:{width:"100%"}})})})]})}),(0,i.jsx)(q,{background:"#FFF3E6",reverse:!0}),(0,i.jsxs)("section",{id:"features",children:[(0,i.jsx)("h1",{style:{margin:20,textAlign:"center"},children:"Ask and search for anything"}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{md:"6",children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(G.Z,{src:"/images/1.png",alt:"Picture of the author",style:{height:"100%",maxHeight:"50vh"}})})}),(0,i.jsx)(k,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{padding:10},children:[(0,i.jsxs)("ul",{style:{fontSize:"1.4rem"},children:[(0,i.jsx)("li",{children:"Cognitive Search Engine"}),(0,i.jsx)("li",{children:"Automatic Question Answering"}),(0,i.jsx)("li",{children:"Automatic knowledge extraction from source code"}),(0,i.jsx)("li",{children:"Smart content aggregation from multiple sources"})]}),(0,i.jsx)(J,{topic:"Ask and search for anything"})]})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{style:{margin:20,textAlign:"center"},children:"Coding assistant"}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{md:"6",style:{padding:10,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{padding:10},children:[(0,i.jsxs)("ul",{style:{fontSize:"1.4rem"},children:[(0,i.jsx)("li",{children:"Feature based visual code navigation"}),(0,i.jsx)("li",{children:"Contextual content recommandations"}),(0,i.jsx)("li",{children:"Bugfix assistant"})]}),(0,i.jsx)(J,{topic:"Coding Assistant"})]})}),(0,i.jsx)(k,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(G.Z,{src:"/images/2.png",alt:"Picture of the author",style:{height:"100%",maxHeight:"50vh"}})})})]})]}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{style:{margin:20,textAlign:"center"},children:"Document automation"}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{md:"6",children:(0,i.jsx)("div",{style:{padding:10},children:(0,i.jsx)(G.Z,{src:"/images/3.png",alt:"Picture of the author",style:{height:"100%",maxHeight:"50vh"}})})}),(0,i.jsx)(k,{md:"6",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsxs)("div",{style:{padding:10},children:[(0,i.jsxs)("ul",{style:{fontSize:"1.4rem"},children:[(0,i.jsx)("li",{children:"IEEE Specification Document edition and generation Wizard"}),(0,i.jsx)("li",{children:"IEEE Technical Design Document edition and generation Wizard"}),(0,i.jsx)("li",{children:"Automatic Diagram generation"}),(0,i.jsx)("li",{children:"Customizable template based document generation"})]}),(0,i.jsx)(J,{topic:"Document automation"})]})})]})]}),(0,i.jsx)(U,{})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2247)}])},785:function(){}},function(e){e.O(0,[774,351,813,656,668],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);