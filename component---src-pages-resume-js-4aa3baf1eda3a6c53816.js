(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(208),i=a(206),l=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.header),r.a.createElement("h6",null,e.duration),r.a.createElement("p",null,e.body),r.a.createElement("ul",null,e.bullets.map(function(e,t){return r.a.createElement("li",null,e)})))},s=[{header:"Embedded Developer, Barnacle Systems - Victoria BC",duration:"October 2018 - December 2018",body:"Developing daemons that monitor industrial input output for sudden spikes in the onboard accelerometer. These daemons interface through the Legato Application Framework.",bullets:["Extensive C Programming","Legato Development Framework","IoT Development","Posix Multithreading","Industrial Input Output (iio)"]},{header:"Full Stack Web Developer, SES Consulting - Victoria BC",duration:"January 2019 – May 2019",body:" Used the React library to develop a front-end platform for users to visualize and track energy\n     consumption of a specific building or site. Developed backend on the Django framework, for\n     user accounts and acquiring energy data from the database.",bullets:["React Library","JavaScript, Python, HTML, CSS","Django REST Framework","PostgreSQL"]},{header:"React Developer, SES Consulting - Remote",duration:"June 2019 - Current",body:"Contracted to develop design system for the front end team.",bullets:["Storybook","JavaScript","Node"]}];t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Resume"}),r.a.createElement("h1",null,"Resume"),s.map(function(e,t){return r.a.createElement(l,{header:e.header,duration:e.duration,body:e.body,bullets:e.bullets})}))}},203:function(e,t,a){var n;e.exports=(n=a(205))&&n.default||n},204:function(e){e.exports={data:{site:{siteMetadata:{title:"Dragon Prevost"}}}}},205:function(e,t,a){"use strict";a.r(t);a(43);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(70),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},206:function(e,t,a){"use strict";var n=a(207),r=a(0),o=a.n(r),i=a(5),l=a.n(i),s=a(216),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=u},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Dragon Prevost",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},208:function(e,t,a){"use strict";var n=a(204),r=a(0),o=a.n(r),i=a(5),l=a.n(i),s=a(8),c=a.n(s),u=a(42),d=a.n(u);a(203),o.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func;var m=a(211),p=a.n(m),f=a(214),g=a.n(f),y=a(212),h=a.n(y),b=a(213),E=a.n(b),v=function(e){var t=e.children;return o.a.createElement("div",{style:{maxWidth:960,margin:0,display:"flex"}},t)},w=[{to:"/",text:"Home",icon:o.a.createElement(p.a,null)},{to:"/portfolio",text:"Portfolio",icon:o.a.createElement(h.a,null)},{to:"/resume",text:"Resume",icon:o.a.createElement(E.a,null)},{to:"/contact",text:"Contact",icon:o.a.createElement(g.a,null)}],x=function(e){function t(t){var a;return(a=e.call(this,t)||this).createTabs=function(){return w.map(function(e,t){return o.a.createElement("h3",{key:t,style:{margin:0}},o.a.createElement(d.a,{to:e.to,style:{color:"grey",fontFamily:"Raleway",textDecoration:"none",padding:"0px 7px"}},e.icon,!a.state.mobile&&o.a.createElement("span",{style:{verticalAlign:"top"}},e.text)))})},a.state={mobile:!1},a}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){console.log(window.innerWidth),this.setState({mobile:window.innerWidth<700})},a.render=function(){return o.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},o.a.createElement("div",{style:{maxWidth:960,padding:"1rem 1.0875rem"}},o.a.createElement("h3",{style:{margin:0}},o.a.createElement(d.a,{to:"/",style:{color:"grey",fontFamily:"Raleway",textDecoration:"none"}},this.props.siteTitle))),o.a.createElement(v,null,this.createTabs()))},t}(r.Component);x.propTypes={siteTitle:l.a.string},x.defaultProps={siteTitle:"Default Title"};var T=x,R=(a(215),function(e){var t=e.children,a=n.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{siteTitle:a.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t)))});R.propTypes={children:l.a.node.isRequired};t.a=R}}]);
//# sourceMappingURL=component---src-pages-resume-js-4aa3baf1eda3a6c53816.js.map