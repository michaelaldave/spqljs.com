(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var r=n(9),a=(n(0),n(157)),o=n(155);t.default=function(){return Object(r.b)(a.a,null,Object(r.b)(o.a,{title:"404: Not found"}),Object(r.b)("h1",null,"NOT FOUND"),Object(r.b)("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(9),a=n(0),o=n.n(a),i=n(4),s=n.n(i),c=n(35),l=n.n(c);n.d(t,"a",function(){return l.a});n(152);var d=o.a.createContext({}),u=function(e){return Object(r.b)(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(r.b)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},152:function(e,t,n){var r;e.exports=(r=n(154))&&r.default||r},153:function(e){e.exports={data:{site:{siteMetadata:{title:"SPQL"}}}}},154:function(e,t,n){"use strict";n.r(t);n(57);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),s=n(58),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,n){"use strict";var r=n(9),a=n(156),o=(n(0),n(4)),i=n.n(o),s=n(159),c=n.n(s),l=n(151);function d(e){var t=e.description,n=e.lang,o=e.meta,i=e.keywords,s=e.title;return Object(r.b)(l.b,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return Object(r.b)(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(o)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d;var u="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"SPQL",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@michaelaldave"}}}}},157:function(e,t,n){"use strict";var r=n(9),a=n(153),o=n(0),i=n.n(o),s=n(4),c=n.n(s),l=n(151),d=n(27),u={name:"ifnyry",styles:"height:50px;box-shadow:inset 0 -1px 0 0px rgba(0, 0, 0, 0.1);position:fixed;top:0;width:100%;background:#fff;"},b={name:"wi2fqu",styles:"display:inline-block;flex:1;"},f={name:"yy3s1s",styles:"list-style:none;margin:0;display:flex;"},p={name:"0",styles:""},m={name:"1p0tbhj",styles:"text-decoration:none;color:#282936;&:hover{color:#ff7e5f;opacity:.8;}margin:0 1.5em;font-size:20px;"},g={name:"0",styles:""},y={name:"ojo7v7",styles:"text-decoration:none;color:#282936;&:hover{color:#ff7e5f;opacity:.8;}flex:1;font-size:20px;"},h=function(e){var t=e.siteTitle;return Object(r.b)("header",{css:u},Object(r.b)("div",{css:Object(d.a)({display:"flex",alignItems:"center",margin:"0 auto",maxWidth:1200,padding:"0 1rem",height:"100%"})},Object(r.b)(l.a,{to:"/",style:{color:"#ff7e5f",textDecoration:"none",fontSize:"33px"}},t),Object(r.b)("nav",{css:b},Object(r.b)("ul",{css:f},Object(r.b)("li",{css:p},Object(r.b)(l.a,{to:"/getting-started",css:m,activeStyle:{color:"#ff7e5f"}},"Getting Started")),Object(r.b)("li",{css:g},Object(r.b)(l.a,{to:"/docs",css:y,activeStyle:{color:"#ff7e5f"}},"Docs"))))))};h.propTypes={siteTitle:c.a.string},h.defaultProps={siteTitle:""};var j=h,x=(n(158),{name:"7gjsnz",styles:'@import url(\'https://fonts.googleapis.com/css?family=Source+Code+Pro|family=Source+Sans+Pro\');html{font:calc(1vw + 0.5em) \'Source Sans Pro\',sans-serif;box-sizing:border-box;overflow-y:scroll;color:#282936;}body{margin:0;margin-top:50px;}*{box-sizing:inherit;}*:before{box-sizing:inherit;}*:after{box-sizing:inherit;}pre{margin-left:0;margin-right:0;margin-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:.5rem 1rem !important;}code{font-size:0.8rem;padding:.5rem line-height:1.45rem;}code{background-color:hsla(0,0%,0%,0.04);border-radius:3px;font-family:"SFMono-Regular",Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace;padding:0;padding-top:0.2em;padding-bottom:0.2em;}pre code{background:none;line-height:1.42;}code:before,code:after,tt:before,tt:after{letter-spacing:-0.2em;content:" ";}pre code:before,pre code:after,pre tt:before,pre tt:after{content:"";}h1{font-size:2.2rem;}h2{font-size:1.6rem;font-weight:500;margin-bottom:.6em;}'}),O=function(e){var t=e.children;return Object(r.b)(l.b,{query:"755544856",render:function(e){return Object(r.b)(i.a.Fragment,null,Object(r.b)(r.a,{styles:x}),Object(r.b)(j,{siteTitle:e.site.siteMetadata.title}),Object(r.b)("div",{style:{margin:"0 auto",maxWidth:1200,padding:"1.0875rem 1.45rem"}},Object(r.b)("main",null,t)))},data:a})};O.propTypes={children:c.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-404-js-55de093dd019a4cda183.js.map