(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{200:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(208),o=n(206);e.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"Home"}),i.a.createElement("h1",null,"Portfolio"))}},203:function(t,e,n){var a;t.exports=(a=n(205))&&a.default||a},204:function(t){t.exports={data:{site:{siteMetadata:{title:"Dragon Prevost"}}}}},205:function(t,e,n){"use strict";n.r(e);n(43);var a=n(0),i=n.n(a),r=n(5),o=n.n(r),l=n(70),s=function(t){var e=t.location,n=t.pageResources;return n?i.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},206:function(t,e,n){"use strict";var a=n(207),i=n(0),r=n.n(i),o=n(5),l=n.n(o),s=n(216),c=n.n(s);function u(t){var e=t.description,n=t.lang,i=t.meta,o=t.title,l=a.data.site,s=e||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=u},207:function(t){t.exports={data:{site:{siteMetadata:{title:"Dragon Prevost",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},208:function(t,e,n){"use strict";var a=n(204),i=n(0),r=n.n(i),o=n(5),l=n.n(o),s=n(8),c=n.n(s),u=n(42),p=n.n(u);n(203),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func;var m=n(211),d=n.n(m),f=n(214),g=n.n(f),y=n(212),h=n.n(y),E=n(213),w=n.n(E),x=function(t){var e=t.children;return r.a.createElement("div",{style:{maxWidth:960,margin:0,display:"flex"}},e)},v=[{to:"/",text:"Home",icon:r.a.createElement(d.a,null)},{to:"/portfolio",text:"Portfolio",icon:r.a.createElement(h.a,null)},{to:"/resume",text:"Resume",icon:r.a.createElement(w.a,null)},{to:"/contact",text:"Contact",icon:r.a.createElement(g.a,null)}],b=function(t){function e(e){var n;return(n=t.call(this,e)||this).createTabs=function(){return v.map(function(t,e){return r.a.createElement("h3",{key:e,style:{margin:0}},r.a.createElement(p.a,{to:t.to,style:{color:"grey",fontFamily:"Raleway",textDecoration:"none",padding:"0px 7px"}},t.icon,!n.state.mobile&&r.a.createElement("span",{style:{verticalAlign:"top"}},t.text)))})},n.state={mobile:!1},n}c()(e,t);var n=e.prototype;return n.componentDidMount=function(){console.log(window.innerWidth),this.setState({mobile:window.innerWidth<700})},n.render=function(){return r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:960,padding:"1rem 1.0875rem"}},r.a.createElement("h3",{style:{margin:0}},r.a.createElement(p.a,{to:"/",style:{color:"grey",fontFamily:"Raleway",textDecoration:"none"}},this.props.siteTitle))),r.a.createElement(x,null,this.createTabs()))},e}(i.Component);b.propTypes={siteTitle:l.a.string},b.defaultProps={siteTitle:"Default Title"};var T=b,R=(n(215),function(t){var e=t.children,n=a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{siteTitle:n.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,e)))});R.propTypes={children:l.a.node.isRequired};e.a=R}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-bec9f92f55f000a9cb3c.js.map