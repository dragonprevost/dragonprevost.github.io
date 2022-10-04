"use strict";(self.webpackChunkdragon_prevost=self.webpackChunkdragon_prevost||[]).push([[317],{9539:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var a=n(7294),i=n(3366),r=n(7462),o=n(5505),s=n(9236),l=n(3656),c=n(184);var d=a.createContext({}),u=n(1351),m=n(9508);function p(e){return(0,u.Z)("MuiList",e)}(0,m.Z)("MuiList",["root","padding","dense","subheader"]);var h=n(5893),g=["children","className","component","dense","disablePadding","subheader"],v=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})((function(e){var t=e.ownerState;return(0,r.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})})),f=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiList"}),l=n.children,u=n.className,m=n.component,f=void 0===m?"ul":m,b=n.dense,y=void 0!==b&&b,w=n.disablePadding,Z=void 0!==w&&w,x=n.subheader,S=(0,i.Z)(n,g),C=a.useMemo((function(){return{dense:y}}),[y]),E=(0,r.Z)({},n,{component:f,dense:y,disablePadding:Z}),A=function(e){var t=e.classes,n={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(n,p,t)}(E);return(0,h.jsx)(d.Provider,{value:C,children:(0,h.jsxs)(v,(0,r.Z)({as:f,className:(0,o.Z)(A.root,u),ref:t,ownerState:E},S,{children:[x,l]}))})})),b=n(4942),y=n(2234),w=n(7663),Z=n(7632);var x=function(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},S=n(6164).Z,C=n(5973);function E(e){return(0,u.Z)("MuiListItem",e)}var A=(0,m.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var I=(0,m.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function P(e){return(0,u.Z)("MuiListItemSecondaryAction",e)}(0,m.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var k=["className"],R=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),L=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiListItemSecondaryAction"}),l=n.className,u=(0,i.Z)(n,k),m=a.useContext(d),p=(0,r.Z)({},n,{disableGutters:m.disableGutters}),g=function(e){var t=e.disableGutters,n=e.classes,a={root:["root",t&&"disableGutters"]};return(0,s.Z)(a,P,n)}(p);return(0,h.jsx)(R,(0,r.Z)({className:(0,o.Z)(g.root,l),ownerState:p,ref:t},u))}));L.muiName="ListItemSecondaryAction";var j=L,N=["className"],O=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],M=(0,l.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,r.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,b.Z)({},"& > .".concat(I.root),{paddingRight:48}),(t={},(0,b.Z)(t,"&.".concat(A.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,b.Z)(t,"&.".concat(A.selected),(0,b.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(A.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,b.Z)(t,"&.".concat(A.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,b.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(A.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,w.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),F=(0,l.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),T=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiListItem"}),l=n.alignItems,u=void 0===l?"center":l,m=n.autoFocus,p=void 0!==m&&m,g=n.button,v=void 0!==g&&g,f=n.children,b=n.className,w=n.component,I=n.components,P=void 0===I?{}:I,k=n.componentsProps,R=void 0===k?{}:k,L=n.ContainerComponent,T=void 0===L?"li":L,V=n.ContainerProps,G=(V=void 0===V?{}:V).className,U=n.dense,W=void 0!==U&&U,D=n.disabled,z=void 0!==D&&D,B=n.disableGutters,_=void 0!==B&&B,q=n.disablePadding,J=void 0!==q&&q,Y=n.divider,H=void 0!==Y&&Y,K=n.focusVisibleClassName,Q=n.secondaryAction,X=n.selected,$=void 0!==X&&X,ee=(0,i.Z)(n.ContainerProps,N),te=(0,i.Z)(n,O),ne=a.useContext(d),ae={dense:W||ne.dense||!1,alignItems:u,disableGutters:_},ie=a.useRef(null);S((function(){p&&ie.current&&ie.current.focus()}),[p]);var re=a.Children.toArray(f),oe=re.length&&x(re[re.length-1],["ListItemSecondaryAction"]),se=(0,r.Z)({},n,{alignItems:u,autoFocus:p,button:v,dense:ae.dense,disabled:z,disableGutters:_,disablePadding:J,divider:H,hasSecondaryAction:oe,selected:$}),le=function(e){var t=e.alignItems,n=e.button,a=e.classes,i=e.dense,r=e.disabled,o={root:["root",i&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,s.Z)(o,E,a)}(se),ce=(0,C.Z)(ie,t),de=P.Root||M,ue=R.root||{},me=(0,r.Z)({className:(0,o.Z)(le.root,ue.className,b),disabled:z},te),pe=w||"li";return v&&(me.component=w||"div",me.focusVisibleClassName=(0,o.Z)(A.focusVisible,K),pe=Z.Z),oe?(pe=me.component||w?pe:"div","li"===T&&("li"===pe?pe="div":"li"===me.component&&(me.component="div")),(0,h.jsx)(d.Provider,{value:ae,children:(0,h.jsxs)(F,(0,r.Z)({as:T,className:(0,o.Z)(le.container,G),ref:ce,ownerState:se},ee,{children:[(0,h.jsx)(de,(0,r.Z)({},ue,!(0,y.Z)(de)&&{as:pe,ownerState:(0,r.Z)({},se,ue.ownerState)},me,{children:re})),re.pop()]}))})):(0,h.jsx)(d.Provider,{value:ae,children:(0,h.jsxs)(de,(0,r.Z)({},ue,{as:pe,ref:ce,ownerState:se},!(0,y.Z)(de)&&{ownerState:(0,r.Z)({},se,ue.ownerState)},me,{children:[re,Q&&(0,h.jsx)(j,{children:Q})]}))})}));function V(e){return(0,u.Z)("MuiDivider",e)}(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var G=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],U=(0,l.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},n.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},n.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,w.Fq)(t.palette.divider,.08)},"inset"===n.variant&&{marginLeft:72},"middle"===n.variant&&"horizontal"===n.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===n.variant&&"vertical"===n.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===n.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},n.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},n.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider),top:"50%",content:'""',transform:"translateY(50%)"}})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},n.children&&"vertical"===n.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:"thin solid ".concat((t.vars||t).palette.divider),transform:"translateX(0%)"}})}),(function(e){var t=e.ownerState;return(0,r.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),W=(0,l.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var n=e.ownerState;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===n.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),D=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiDivider"}),a=n.absolute,l=void 0!==a&&a,d=n.children,u=n.className,m=n.component,p=void 0===m?d?"div":"hr":m,g=n.flexItem,v=void 0!==g&&g,f=n.light,b=void 0!==f&&f,y=n.orientation,w=void 0===y?"horizontal":y,Z=n.role,x=void 0===Z?"hr"!==p?"separator":void 0:Z,S=n.textAlign,C=void 0===S?"center":S,E=n.variant,A=void 0===E?"fullWidth":E,I=(0,i.Z)(n,G),P=(0,r.Z)({},n,{absolute:l,component:p,flexItem:v,light:b,orientation:w,role:x,textAlign:C,variant:A}),k=function(e){var t=e.absolute,n=e.children,a=e.classes,i=e.flexItem,r=e.light,o=e.orientation,l=e.textAlign,c={root:["root",t&&"absolute",e.variant,r&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,s.Z)(c,V,a)}(P);return(0,h.jsx)(U,(0,r.Z)({as:p,className:(0,o.Z)(k.root,u),role:x,ref:t,ownerState:P},I,{children:d?(0,h.jsx)(W,{className:k.wrapper,ownerState:P,children:d}):null}))})),z=n(339),B=n(9698),_=n(4320),q=n(9308),J=n(1082),Y=n(9122),H={color:"black",textDecoration:"none",padding:"0px 7px"},K=function(e){var t=e.name,n=e.date,i=e.body,r=e.image,o=e.url;return a.createElement(_.ZP,{container:!0,spacing:2,style:{height:"40%"}},a.createElement(_.ZP,{item:!0},a.createElement(J.rU,{to:o,style:H},a.createElement(_.ZP,{container:!0,spacing:1},o&&a.createElement(_.ZP,{item:!0}," ",a.createElement("img",{src:Y.Z,style:{width:"25px",height:"25px"},alt:"github"})),a.createElement(_.ZP,{item:!0},a.createElement(q.Z,{variant:"h5"},t)))),a.createElement(q.Z,{variant:"body2",color:"gray"},n)),a.createElement(_.ZP,{item:!0,justifyContent:"center"},r&&a.createElement("img",{src:r,alt:"project_image",style:{maxWidth:"100%"}})),a.createElement(_.ZP,{item:!0},a.createElement(q.Z,{variant:"body1"},i)))},Q=function(e){var t=e.name,n=e.date,i=e.body,r=e.image,o=e.url;return a.createElement(_.ZP,{container:!0,spacing:2,style:{height:"40%"},justifyContent:"center"},a.createElement(_.ZP,{item:!0,xs:6},a.createElement(J.rU,{to:o,style:H},a.createElement(_.ZP,{container:!0,spacing:1},o&&a.createElement(_.ZP,{item:!0}," ",a.createElement("img",{src:Y.Z,style:{width:"30px",height:"30px"},alt:"github"})),a.createElement(_.ZP,{item:!0},a.createElement(q.Z,{variant:"h5"},t)))),a.createElement(q.Z,{variant:"body2",color:"gray"},n),a.createElement(q.Z,{variant:"body1"},i)),a.createElement(_.ZP,{item:!0,xs:6,justifyContent:"center"},r&&a.createElement("img",{src:r,alt:"project_image",style:{maxWidth:"100%"}})))},X=function(e){var t=e.name,n=e.date,i=e.body,r=e.image,o=e.url;if("undefined"==typeof window)return a.createElement(a.Fragment,null);var s=(0,a.useState)(window.innerWidth<900),l=s[0],c=s[1];return(0,a.useEffect)((function(){function e(){c(window.innerWidth<900)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),a.createElement(a.Fragment,null,l?a.createElement(K,{name:t,date:n,body:i,url:o,image:r}):a.createElement(Q,{name:t,date:n,body:i,url:o,image:r}))},$=n.p+"static/tripstudio-dcd7c208ef91479617118ded9449a299.png",ee=n.p+"static/jimi-afc3f565dc32bf71ea194c41dc56ecc4.png",te=[{name:"TripStudio.app (WIP)",date:"Current",body:"\n            TripStudio is an iOS application that consolidates all the trip planning tools into one place. With this \n            platform you can message other users, share trip documents, manage itenerary, and share photos. It is great \n            for both keeping friends and family up to date with your current voyage, as well as planning and staying\n            organized with those on a trip. \n            Above all else, this has been a great project to learn the patterns of iOS development, and get comfortable with\n            modern serverless backend architectures such as Firebase.\n        ",url:"",imageUrl:$,bannerUrl:"",technologies:["Firebase","Firestore","Architecture","iOS","Swift","SwiftUI"]},{name:"Jimi",date:"January 2019",body:"\n            Jimi is a web application built during the 2019 North West Hacks at the University of British Columbia. \n            For this project, our team set out to create an interface which allowed a group of people(a party)\n            to collaborate on a playlist in an automated fashion. We curated a playlist seeded from all the party \n            attendees' favourite songs. \n        ",url:"https://github.com/JoshuaCalder/jimi",imageUrl:ee,bannerUrl:ee,technologies:["React","Django","Spotify API"]},{name:"EchoSynth",date:"November 2019",body:"\n            EchoSynth is a Music Information Retrieval(MIR) project synthesizing naturally occurring sounds into a \n            standard midi file. The Jupyter-based project records a sound via a microphone, then uses fast Fourier \n            transforms to synthesize the sample via a set of sinusoids. The end user can then tweak the frequency, wave \n            functions/shapes, phase, amplitude and envelope to achieve the desired synth sound. After tuning the \n            synthesizer, a midi file is produced for usage in music production.\n        ",url:"https://github.com/avesk/echo-synth",imageUrl:"https://raw.githubusercontent.com/avesk/echo-synth/master/synth_architecture.png",bannerUrl:ee,technologies:["React","Django","Spotify API"]},{name:"YOLO Real Fast",date:"August 2019",body:'\n        A distributed system for annotating the context of a video "Real Fast". This system utilizes docker and \n        Kubernetes to distribute processing tasks over a network of workers. It does this by first pre-processing a \n        video file and splitting it at each context change(calculated by significant changes in the colour histogram). \n        Each sub-clip is then sent over the Kubernetes network to individual workers, which compute the context of that \n        clip using the "You Only Look Once" model. This model roughly identifies the content of that clip throughout the \n        clip. Once all workers have completed their context annotation, their results are compiled into a single \n        document to provide context annotation over the entire video file.\n        ',url:"https://github.com/dragonprevost/462-yolo-real-fast",imageUrl:"https://miro.medium.com/proxy/1*QOGcvHbrDZiCqTG6THIQ_w.png"},{name:"UVic Aero Onboard Computer",date:"March 2020",body:"\n            Designed and developed the architecture for the primary computer placed on a student-designed uncrewed \n            aerial vehicle(UAV). This software ran on a raspberry and was responsible for communicating with video and \n            photo hardware, transmitting video feeds over a network, and performing light computer vision tasks. The \n            system was utilized when the University of Victoria won the Unmanned Systems Canada student competition.\n        ",url:"https://github.com/uvic-aero/onboard-computer",imageUrl:"https://starfishmedical.com/assets/5D3_4005_preview-800x533.jpg"}],ne=function(){return a.createElement(B.Z,null,a.createElement(z.Z,{maxWidth:"md"},a.createElement(f,null,te.map((function(e){return a.createElement(a.Fragment,null,a.createElement(T,null,a.createElement(X,{name:e.name,date:e.date,body:e.body,image:e.imageUrl,url:e.url})),a.createElement(T,null,a.createElement(D,null)),a.createElement(D,{component:"li"}))})))))}}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-9b836528492b7d102f3b.js.map