(function(t){function e(e){for(var a,i,l=e[0],r=e[1],c=e[2],u=0,d=[];u<l.length;u++)i=l[u],n[i]&&d.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n={app:0},o=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"471ceb10"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s={about:1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise(function(e,s){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"0e433876"}[t]+".css",n=r.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===n))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===a||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],m.parentNode.removeChild(m),s(o)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)}).then(function(){i[t]=0}));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,s[1](o)}n[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1022:function(t,e,s){t.exports=s.p+"img/splash-bg.113dde4e.svg"},"47f9":function(t,e,s){t.exports=s.p+"img/Img.5af83293.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light",attrs:{id:"app"}},[s("question-modal"),s("notifications",{attrs:{group:"alert",position:"bottom right"}}),s("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{staticStyle:{"z-index":"10000000000"},attrs:{name:"question-form",transition:"pop-out",width:t.modalWidth,"click-to-close":!1,height:500}},[s("div",{staticClass:"px-3 py-3"},[s("h2",{staticClass:"h5"},[t._v("Ask a new Question")]),s("p",{staticClass:"small w-75"},[t._v("Allow your mates to help you out with that difficult assignment. Simply post it and wait for someone to respond")]),s("form",{staticClass:"mt-3",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.ask(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.question.title,expression:"question.title"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"How can i solve this..."},domProps:{value:t.question.title},on:{input:function(e){e.target.composing||t.$set(t.question,"title",e.target.value)}}})]),s("div",{staticClass:"form-group mt-3"},[s("label",{attrs:{for:""}},[t._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question.body,expression:"question.body"}],staticClass:"form-control",attrs:{rows:"3",required:"",placeholder:"Please describe your question in detail"},domProps:{value:t.question.body},on:{input:function(e){e.target.composing||t.$set(t.question,"body",e.target.value)}}})]),s("div",{staticClass:"form-group mt-3"},[s("label",{attrs:{for:""}},[t._v("Add Tags")]),s("input-tag",{staticClass:"form-control",model:{value:t.question.tags,callback:function(e){t.$set(t.question,"tags",e)},expression:"question.tags"}}),s("span",{staticClass:"form-text small"},[t._v("Tags help make it easier for relevant people to find your question. Use comma or tab to separate tags")])],1),s("hr"),s("div",{staticClass:"form-group d-flex justify-content-end"},[s("button",{staticClass:"btn btn-danger btn-sm mr-3",attrs:{type:"button"},on:{click:function(e){return t.$modal.hide("question-form")}}},[t._v("Cancel")]),s("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit",disabled:t.loading}},[t.loading?s("i",{staticClass:"fas fa-spin fa-spinner"}):t._e(),t._v(" Submit\n        ")])])])])])},l=[],r=s("74bf"),c=s.n(r),u=656,d={components:{InputTag:c.a},data:function(){return{question:{title:null,body:null,tags:[]},loading:!1}},methods:{ask:function(){var t=this;this.loading=!0,axios.post("/ask",this.question).then(function(e){t.$notify({group:"alert",title:"Done!",text:e.data.message||"Question asked successfully! Your peers are on it :-)",type:"success"}),window.location.reload()}).finally(function(){t.loading=!1})}},computed:{modalWidth:function(){return window.innerWidth<u?u/2:u}}},m=d,p=s("2877"),f=Object(p["a"])(m,o,l,!1,null,null,null),v=f.exports,h={components:{QuestionModal:v}},g=h,b=(s("5c0b"),Object(p["a"])(g,i,n,!1,null,null,null)),C=b.exports,x=s("8c4f"),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"main-header py-4"},[s("nav",{staticClass:"navbar navbar-expand-lg bg-transparent"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand text-white",attrs:{to:"/"}},[t._v("Bookstorm")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"mt-0 navbar-nav mr-auto mx-md-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/feeds"}},[t._v("\n                Feeds\n                "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._m(1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/peer-assist"}},[t._v("Peer Assist")])],1),t._m(2)]),t.loggedIn?s("div",{staticClass:"my-2 my-lg-0"},[s("router-link",{staticClass:"btn mr-2 btn-white btn-rounded px-4 shadow-lg",attrs:{to:"#"}},[t._v("My Profile")]),s("button",{staticClass:"btn flat-btn-accent btn-rounded text-white px-4",attrs:{to:"/login"}},[t._v("Logout")])],1):s("div",{staticClass:"my-2 my-lg-0"},[s("router-link",{staticClass:"btn flat-btn-accent btn-rounded text-white px-4 mr-2",attrs:{to:"/login"}},[t._v("Login")]),s("router-link",{staticClass:"btn btn-white btn-rounded px-4 shadow-lg",attrs:{to:"/signup"}},[t._v("Sign Up")])],1)])],1)]),t._m(3)]),t._m(4),t._m(5),s("main-footer",{staticClass:"mt-0"})],1)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Materials")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Disabled")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container position-relative",staticStyle:{padding:"150px 0","overflow-x":"hidden"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"header-context text-left"},[a("span",{staticClass:"small"},[t._v("Online Education")]),a("h1",{staticClass:"h3"},[t._v("Live. Learn. Share!")]),a("p",{staticClass:"header-description"},[t._v("\n            Get instant access to hundreds of textbooks, course notes, (solved)\n            assignments and lots of other resources that makes schooling easier on you. All you gotta do is\n            help someone else\n          ")]),a("div",{staticClass:"d-flex mt-4"},[a("a",{staticClass:"btn btn-accent btn-rounded px-4 shadow-lg",attrs:{href:""}},[t._v("Get started")])])])]),a("div",{staticClass:"position-absolute d-md-block",staticStyle:{right:"-10px",top:"0",width:"45%","max-width":"500px",display:"none"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("47f9"),alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"body py-5 container px-md-5"},[a("section",{staticClass:"text-center py-4 d-flex flex-column align-items-center"},[a("h5",{staticClass:"text-uppercase mb-0 text-primary"},[t._v("What's this about?")]),a("h3",{staticClass:"h4 my-3 font-weight-bold"},[t._v("Getting through school together")]),a("p",{staticClass:"text-muted small",staticStyle:{"max-width":"500px"}},[t._v("\n        We believe that schooling is easier when students\n        stick together. Our mission is to foster academic excellence via collaboration\n      ")])]),a("div",{staticClass:"features row justify-content-center"},[a("div",{staticClass:"col-md-4 d-flex justify-content-center"},[a("div",{staticClass:"feature-card rounded-sm py-4 px-4"},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"mx-auto splash position-relative d-flex justify-content-center align-items-center",staticStyle:{width:"120px"}},[a("img",{staticClass:"img-auto",attrs:{src:s("1022"),alt:""}}),a("div",{staticClass:"position-absolute d-flex justify-content-center align-items-center",staticStyle:{top:"0",left:"0",right:"0",bottom:"0"}},[a("span",{staticClass:"h1"},[a("i",{staticClass:"fas fa-school"})])])]),a("div",{staticClass:"mt-auto text-center"},[a("p",{staticClass:"title mb-3"},[t._v("Access to a large pool of learning material")]),a("p",{staticClass:"small"},[t._v("You're no longer limited to your school. You can now compare notes with students of similar courses across different schools")])])])])]),a("div",{staticClass:"col-md-4 d-flex justify-content-center"},[a("div",{staticClass:"feature-card rounded-sm py-4 px-4"},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"mx-auto splash position-relative d-flex justify-content-center align-items-center",staticStyle:{width:"120px"}},[a("img",{staticClass:"img-auto",attrs:{src:s("1022"),alt:""}}),a("div",{staticClass:"position-absolute d-flex justify-content-center align-items-center",staticStyle:{top:"0",left:"0",right:"0",bottom:"0"}},[a("span",{staticClass:"h1"},[a("i",{staticClass:"fas fa-school"})])])]),a("div",{staticClass:"mt-auto text-center"},[a("p",{staticClass:"title mb-3"},[t._v("Less pointless googling")]),a("p",{staticClass:"small"},[t._v("So, you have an impossible homework to which you can't find solutions online? Let your peers help you out!")])])])])]),a("div",{staticClass:"col-md-4 d-flex justify-content-center"},[a("div",{staticClass:"feature-card rounded-sm py-4 px-4"},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"mx-auto splash position-relative d-flex justify-content-center align-items-center",staticStyle:{width:"120px"}},[a("img",{staticClass:"img-auto",attrs:{src:s("1022"),alt:""}}),a("div",{staticClass:"position-absolute d-flex justify-content-center align-items-center",staticStyle:{top:"0",left:"0",right:"0",bottom:"0"}},[a("span",{staticClass:"h1"},[a("i",{staticClass:"fas fa-school"})])])]),a("div",{staticClass:"mt-auto text-center"},[a("p",{staticClass:"title mb-3"},[t._v("Smart Recommendations")]),a("p",{staticClass:"small"},[t._v("You get notified whenever a new material is released that might be important to you!")])])])])])]),a("section",{staticClass:"text-center mt-5 py-4 d-flex flex-column align-items-center"},[a("h3",{staticClass:"h4 my-3 font-weight-bold"},[t._v("Recent Uploads")]),a("p",{staticClass:"small text-muted",staticStyle:{"max-width":"500px"}},[t._v("\n        Here's a peek into some of the latest materials uploaded on our platform.\n      ")])]),a("section",{staticClass:"recent-uploads"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-4 mb-4 d-flex justify-content-center"},[a("div",{staticClass:"upload-item rounded-sm shadow-sm"},[a("div",{staticClass:"upload-preview"},[a("img",{staticClass:"img-fluid",attrs:{src:s("d414"),alt:""}})]),a("div",{staticClass:"upload-body px-3 py-3"},[a("div",{staticClass:"d-flex text-muted px-2 py-2"},[a("span",{staticClass:"small mr-auto"},[t._v("by Santiago")]),a("span",{staticClass:"small text-warning"},[t._v("OAU")])]),a("h5",{staticClass:"title h6 font-weight-bolder my-3 text-capitalize"},[t._v("\n                any the European Paintings:\n                From Leonardo to\n              ")]),a("p",{staticClass:"small fade-overflow text-muted"},[t._v("\n                Lorem ipsum dolor sit amet consectetur,\n                adipisicing elit. At, natus. Dolor ipsam quaerat enim reprehenderit quasi, obcaecati\n                tempora earum quibusdam suscipit possimus numquam eligendi. Qui, animi. Eius veritatis\n                minima similique?\n              ")]),a("p",{staticClass:"text-center mt-3 small"},[a("a",{staticClass:"btn btn-outline-secondary btn-sm px-3 btn-rounded",attrs:{href:""}},[t._v("View/Download")])])])])]),a("div",{staticClass:"col-sm-6 col-md-4 mb-4 d-flex justify-content-center"},[a("div",{staticClass:"upload-item rounded-sm shadow-sm"},[a("div",{staticClass:"upload-preview"},[a("img",{staticClass:"img-fluid",attrs:{src:s("d414"),alt:""}})]),a("div",{staticClass:"upload-body px-3 py-3"},[a("div",{staticClass:"d-flex text-muted px-2 py-2"},[a("span",{staticClass:"small mr-auto"},[t._v("by Santiago")]),a("span",{staticClass:"small text-warning"},[t._v("OAU")])]),a("h5",{staticClass:"title h6 font-weight-bolder my-3 text-capitalize"},[t._v("\n                any the European Paintings:\n                From Leonardo to\n              ")]),a("p",{staticClass:"small fade-overflow text-muted"},[t._v("\n                Lorem ipsum dolor sit amet consectetur,\n                adipisicing elit. At, natus.\n                Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit\n                possimus numquam\n                eligendi. Qui, animi. Eius veritatis minima similique?\n              ")]),a("p",{staticClass:"text-center mt-3 small"},[a("a",{staticClass:"btn btn-outline-secondary btn-sm px-3 btn-rounded",attrs:{href:""}},[t._v("View/Download")])])])])]),a("div",{staticClass:"col-sm-6 col-md-4 mb-4 d-flex justify-content-center"},[a("div",{staticClass:"upload-item rounded-sm shadow-sm"},[a("div",{staticClass:"upload-preview"},[a("img",{staticClass:"img-fluid",attrs:{src:s("d414"),alt:""}})]),a("div",{staticClass:"upload-body px-3 py-3"},[a("div",{staticClass:"d-flex text-muted px-2 py-2"},[a("span",{staticClass:"small mr-auto"},[t._v("by Santiago")]),a("span",{staticClass:"small text-warning"},[t._v("OAU")])]),a("h5",{staticClass:"title h6 font-weight-bolder my-3 text-capitalize"},[t._v("\n                any the European Paintings:\n                From Leonardo to\n              ")]),a("p",{staticClass:"small fade-overflow text-muted"},[t._v("\n                Lorem ipsum dolor sit amet consectetur,\n                adipisicing elit. At, natus.\n                Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit\n                possimus numquam\n                eligendi. Qui, animi. Eius veritatis minima similique?\n              ")]),a("p",{staticClass:"text-center mt-3 small"},[a("a",{staticClass:"btn btn-outline-secondary btn-sm px-3 btn-rounded",attrs:{href:""}},[t._v("View/Download")])])])])]),a("div",{staticClass:"col-sm-6 col-md-4 mb-4 d-flex justify-content-center"},[a("div",{staticClass:"upload-item rounded-sm shadow-sm"},[a("div",{staticClass:"upload-preview"},[a("img",{staticClass:"img-fluid",attrs:{src:s("d414"),alt:""}})]),a("div",{staticClass:"upload-body px-3 py-3"},[a("div",{staticClass:"d-flex text-muted px-2 py-2"},[a("span",{staticClass:"small mr-auto"},[t._v("by Santiago")]),a("span",{staticClass:"small text-warning"},[t._v("OAU")])]),a("h5",{staticClass:"title h6 font-weight-bolder my-3 text-capitalize"},[t._v("\n                any the European Paintings:\n                From Leonardo to\n              ")]),a("p",{staticClass:"small fade-overflow text-muted"},[t._v("\n                Lorem ipsum dolor sit amet consectetur,\n                adipisicing elit. At, natus.\n                Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit\n                possimus numquam\n                eligendi. Qui, animi. Eius veritatis minima similique?\n              ")]),a("p",{staticClass:"text-center mt-3 small"},[a("a",{staticClass:"btn btn-outline-secondary btn-sm px-3 btn-rounded",attrs:{href:""}},[t._v("View/Download")])])])])]),a("div",{staticClass:"col-sm-6 col-md-4 mb-4 d-flex justify-content-center"},[a("div",{staticClass:"upload-item rounded-sm shadow-sm"},[a("div",{staticClass:"upload-preview"},[a("img",{staticClass:"img-fluid",attrs:{src:s("d414"),alt:""}})]),a("div",{staticClass:"upload-body px-3 py-3"},[a("div",{staticClass:"d-flex text-muted px-2 py-2"},[a("span",{staticClass:"small mr-auto"},[t._v("by Santiago")]),a("span",{staticClass:"small text-warning"},[t._v("OAU")])]),a("h5",{staticClass:"title h6 font-weight-bolder my-3 text-capitalize"},[t._v("\n                any the European Paintings:\n                From Leonardo to\n              ")]),a("p",{staticClass:"small fade-overflow text-muted"},[t._v("\n                Lorem ipsum dolor sit amet consectetur,\n                adipisicing elit. At, natus.\n                Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit\n                possimus numquam\n                eligendi. Qui, animi. Eius veritatis minima similique?\n              ")]),a("p",{staticClass:"text-center mt-3 small"},[a("a",{staticClass:"btn btn-outline-secondary btn-sm px-3 btn-rounded",attrs:{href:""}},[t._v("View/Download")])])])])]),a("div",{staticClass:"col-sm-6 col-md-4 mb-4 d-flex justify-content-center"},[a("div",{staticClass:"upload-item rounded-sm shadow-sm"},[a("div",{staticClass:"upload-preview"},[a("img",{staticClass:"img-fluid",attrs:{src:s("d414"),alt:""}})]),a("div",{staticClass:"upload-body px-3 py-3"},[a("div",{staticClass:"d-flex text-muted px-2 py-2"},[a("span",{staticClass:"small mr-auto"},[t._v("by Santiago")]),a("span",{staticClass:"small text-warning"},[t._v("OAU")])]),a("h5",{staticClass:"title h6 font-weight-bolder my-3 text-capitalize"},[t._v("\n                any the European Paintings:\n                From Leonardo to\n              ")]),a("p",{staticClass:"small fade-overflow text-muted"},[t._v("\n                Lorem ipsum dolor sit amet consectetur,\n                adipisicing elit. At, natus.\n                Dolor ipsam quaerat enim reprehenderit quasi, obcaecati tempora earum quibusdam suscipit\n                possimus numquam\n                eligendi. Qui, animi. Eius veritatis minima similique?\n              ")]),a("p",{staticClass:"text-center mt-3 small"},[a("a",{staticClass:"btn btn-outline-secondary btn-sm px-3 btn-rounded",attrs:{href:""}},[t._v("View/Download")])])])])])]),a("div",{staticClass:"my-4"},[a("div",{staticClass:"text-center"},[a("a",{staticClass:"btn-rounded px-4 btn btn-primary shadow-lg",attrs:{href:""}},[t._v("View All Materials")])])])]),a("section",{staticClass:"py-5"},[a("div",{staticClass:"row align-items-center py-4"},[a("div",{staticClass:"col-md-6 d-md-block",staticStyle:{display:"none"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("b951"),alt:""}})]),a("div",{staticClass:"col-md-6",staticStyle:{"max-width":"400px"}},[a("h3",{staticClass:"h4 mb-4 font-weight-bold"},[t._v("\n            Get the limitless learning with\n            more possibilities\n          ")]),a("p",{staticClass:"mb-4 text-muted small"},[t._v("\n            You need to be sure there isn't anything embarrassing hidden\n            in the middle of text. All the Lorem Ipsum generators on the\n            Internet tend to repeat.\n          ")]),a("a",{staticClass:"btn btn-rounded px-4 btn-primary shadow-lg",attrs:{href:""}},[t._v("TRY IT NOW")])])])]),a("section",{staticClass:"py-3"},[a("div",{staticClass:"row align-items-center py-4"},[a("div",{staticClass:"col-md-6 ml-auto",staticStyle:{"max-width":"400px"}},[a("h3",{staticClass:"h4 mb-4 font-weight-bold"},[t._v("\n            Get the limitless learning with\n            more possibilities\n          ")]),a("p",{staticClass:"mb-4 text-muted small"},[t._v("\n            You need to be sure there isn't anything embarrassing hidden\n            in the middle of text. All the Lorem Ipsum generators on the\n            Internet tend to repeat.\n          ")]),a("a",{staticClass:"btn btn-rounded px-4 btn-primary shadow-lg",attrs:{href:""}},[t._v("TRY IT NOW")])]),a("div",{staticClass:"col-md-6 d-md-block",staticStyle:{display:"none"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("968b"),alt:""}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-5 bg-primary text-white"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex justify-content-center flex-columns"},[s("div",{staticClass:"py-4 faq d-flex flex-column"},[s("h2",{staticClass:"text-center font-weight-bolder"},[t._v("Important Faq")]),s("p",{staticClass:"mx-auto small text-center mb-5",staticStyle:{"max-width":"500px"}},[t._v("\n            You need to be sure there isn't anything embarrassing hidden in the\n            middle of\n            text. All the Lorem Ipsum generators on the Internet tend\n          ")]),s("div",{staticClass:"px-4 py-4 faq-item rounded-sm bg-accent-faded"},[s("p",{staticClass:"title"},[t._v("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roo")])])])])])])}],_=s("7386"),q={name:"home",computed:{loggedIn:function(){return!!localStorage.getItem("token")}},components:{MainFooter:_["a"]}},k=q,S=Object(p["a"])(k,y,w,!1,null,null,null),A=S.exports;function j(t){var e=t.next,s=t.router;return localStorage.getItem("token")?e():s.push({name:"login"})}a["default"].use(x["a"]);var E=new x["a"]({routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}},{path:"/login",name:"login",component:function(){return s.e("about").then(s.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return s.e("about").then(s.bind(null,"34c3"))}},{path:"/feeds",name:"feeds",component:function(){return s.e("about").then(s.bind(null,"3be8"))},meta:{middleware:j}},{path:"/peer-assist",name:"peerAssist",component:function(){return s.e("about").then(s.bind(null,"e30f"))}},{path:"/materials",name:"materials",component:function(){return s.e("about").then(s.bind(null,"74c7"))}}],scrollBehavior:function(t,e,s){return{x:0,y:0}}}),L=s("2f62");a["default"].use(L["a"]);var O=new L["a"].Store({state:{},mutations:{},actions:{}}),I=s("9483");Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var P=s("ee98"),T=s.n(P),D=s("0a63"),$=s.n(D),F=s("1881"),N=s.n(F);a["default"].use(N.a),a["default"].use($.a),window.axios=s("bc3a"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.axios.defaults.baseURL="http://bookstorm.local/api",localStorage.getItem("token")&&(window.axios.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("token"))),a["default"].config.productionTip=!1,a["default"].use(T.a),new a["default"]({router:E,store:O,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),i=s.n(a);i.a},"5e27":function(t,e,s){},7386:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"bg-secondary py-5",staticStyle:{"margin-top":"30px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row links px-md-5 text-center text-md-left"},[s("div",{staticClass:"col-md-5 mr-auto link-subgroup"},[s("h3",[t._v("Bookstorm")]),s("hr",{staticClass:"smallhr white",attrs:{align:"left"}}),s("p",{staticClass:"small"},[t._v("There are many variations of people,but there is only one yokomon. Welcome to my world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quidem provident nulla eum officiis ipsa doloribus placeat inventore ipsum eaque tenetur ex, cum quae temporibus repudiandae deleniti dolor autem. Ducimus.")])]),s("div",{staticClass:"col-md-3 link-subgroup"},[s("h3",{staticStyle:{"font-size":"17px"}},[t._v("Important")]),s("hr",{staticClass:"smallhr white",attrs:{align:"left"}}),s("ul",{staticClass:"small"},[s("li",[s("a",{attrs:{href:""}},[t._v("Home")])]),s("li",[s("a",{attrs:{href:""}},[t._v("About us")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Contact us")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Faq")])])])]),s("div",{staticClass:"col-md-3 link-subgroup"},[s("h3",{staticStyle:{"font-size":"17px"}},[t._v("Useful Links")]),s("hr",{staticClass:"smallhr white",attrs:{align:"left"}}),s("ul",{staticClass:"small"},[s("li",[s("a",{attrs:{href:""}},[t._v("Help center")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Resources")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Terms & Conditions")])]),s("li",[s("a",{attrs:{href:""}},[t._v("FAQs")])])])])]),s("div",{staticClass:"copyright text-white mt-5 text-center mb-0"},[s("h6",{staticStyle:{"font-size":"13px"}},[t._v("© Copyright 2019. Team Hack Elites")])])])])}],n=s("2877"),o={},l=Object(n["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports},"968b":function(t,e,s){t.exports=s.p+"img/group-4.9c85f127.svg"},b951:function(t,e,s){t.exports=s.p+"img/group-3.cee3b2ee.svg"},d414:function(t,e,s){t.exports=s.p+"img/preview.c30d84f0.png"}});
//# sourceMappingURL=app.540eb5aa.js.map