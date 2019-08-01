(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=(n(231),{width:"10%",minWidth:"25px",maxWidth:"100px",marginLeft:"7.5%",marginRight:"7.5%"}),o=[{icon:"https://image.flaticon.com/icons/svg/25/25231.svg",name:"GitHub",to:"https://github.com/dragonprevost"},{icon:"https://image.flaticon.com/icons/svg/25/25320.svg",name:"LinkedIn",to:"https://www.linkedin.com/in/dragonprevost/"},{icon:"https://image.flaticon.com/icons/svg/25/25660.svg",name:"Twitter",to:"https://twitter.com/DragonPrevost"},{icon:"https://image.flaticon.com/icons/svg/25/25236.svg",name:"Mail",to:"mailto:dragon@dkp.io"}],c=function(){return i.a.createElement("div",null,o.map(function(t,e){return i.a.createElement("span",null,i.a.createElement("a",{href:t.to},i.a.createElement("img",{src:t.icon,style:r,alt:t.name,key:e})))}))},s=n(208),l=n(206),m={textAlign:"center",minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},u={borderRadius:"50%",width:"30%",minWidth:"200px"};e.default=function(t){t.data;return i.a.createElement(s.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement("div",{style:m},i.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/22180881?s=460&v=4",alt:"display",style:u}),i.a.createElement("p",null,"Computer Science • Web Development • Systems Engineering"),i.a.createElement(c,null)))}},203:function(t,e,n){var a;t.exports=(a=n(205))&&a.default||a},204:function(t){t.exports={data:{site:{siteMetadata:{title:"Dragon Prevost"}}}}},205:function(t,e,n){"use strict";n.r(e);n(43);var a=n(0),i=n.n(a),r=n(5),o=n.n(r),c=n(70),s=function(t){var e=t.location,n=t.pageResources;return n?i.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},206:function(t,e,n){"use strict";var a=n(207),i=n(0),r=n.n(i),o=n(5),c=n.n(o),s=n(216),l=n.n(s);function m(t){var e=t.description,n=t.lang,i=t.meta,o=t.title,c=a.data.site,s=e||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=m},207:function(t){t.exports={data:{site:{siteMetadata:{title:"Dragon Prevost",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},208:function(t,e,n){"use strict";var a=n(204),i=n(0),r=n.n(i),o=n(5),c=n.n(o),s=n(8),l=n.n(s),m=n(42),u=n.n(m);n(203),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func;var p=n(211),d=n.n(p),g=n(214),f=n.n(g),h=n(212),y=n.n(h),v=n(213),E=n.n(v),w=function(t){var e=t.children;return r.a.createElement("div",{style:{maxWidth:960,margin:0,display:"flex"}},e)},x=[{to:"/",text:"Home",icon:r.a.createElement(d.a,null)},{to:"/portfolio",text:"Portfolio",icon:r.a.createElement(y.a,null)},{to:"/resume",text:"Resume",icon:r.a.createElement(E.a,null)},{to:"/contact",text:"Contact",icon:r.a.createElement(f.a,null)}],b=function(t){function e(e){var n;return(n=t.call(this,e)||this).createTabs=function(){return x.map(function(t,e){return r.a.createElement("h3",{key:e,style:{margin:0}},r.a.createElement(u.a,{to:t.to,style:{color:"grey",fontFamily:"Raleway",textDecoration:"none",padding:"0px 7px"}},t.icon,!n.state.mobile&&r.a.createElement("span",{style:{verticalAlign:"top"}},t.text)))})},n.state={mobile:!1},n}l()(e,t);var n=e.prototype;return n.componentDidMount=function(){console.log(window.innerWidth),this.setState({mobile:window.innerWidth<700})},n.render=function(){return r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:960,padding:"1rem 1.0875rem"}},r.a.createElement("h3",{style:{margin:0}},r.a.createElement(u.a,{to:"/",style:{color:"grey",fontFamily:"Raleway",textDecoration:"none"}},this.props.siteTitle))),r.a.createElement(w,null,this.createTabs()))},e}(i.Component);b.propTypes={siteTitle:c.a.string},b.defaultProps={siteTitle:"Default Title"};var T=b,R=(n(215),function(t){var e=t.children,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,e)))});R.propTypes={children:c.a.node.isRequired};e.a=R},231:function(t,e,n){var a=n(12).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(11)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-ebbcee156dda08c18078.js.map