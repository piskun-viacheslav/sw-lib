(this["webpackJsonpsw-lib"]=this["webpackJsonpsw-lib"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports={card:"Card_card__3rpIc",title:"Card_title__1cpd-",imageContainer:"Card_imageContainer__8_PgR",button:"Card_button__13Zdu"}},,,function(e,t,a){e.exports={detail:"index__detail__1BJeP",cell:"index__cell__3VvZs"}},,,,,function(e,t,a){e.exports={link:"CardPreview_link__3qQ8T",imageContainer:"CardPreview_imageContainer__3ovJ4"}},,,,,function(e,t,a){e.exports={image:"ImageBlock_image__2slNy"}},function(e,t,a){e.exports={closeResultsButton:"SearchResults_closeResultsButton__268oK"}},function(e,t,a){e.exports={item:"CardDetailsList_item__QpdMw"}},,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/person.35f6be26.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/planet.252fd78b.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/starship.5a581eb4.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),i=a(27),c=a.n(i),l=a(7),o=(a(39),function(){return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("div",{className:"header__logo"}),Object(n.jsx)("nav",{className:"header__nav nav",children:Object(n.jsxs)("ul",{className:"nav__list",children:[Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(l.c,{className:"nav__link",to:"/",exact:!0,children:"Home"})}),Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(l.c,{className:"nav__link",to:"/people",children:"People"})}),Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(l.c,{className:"nav__link",to:"/planets",children:"Planets"})}),Object(n.jsx)("li",{className:"nav__item",children:Object(n.jsx)(l.c,{className:"nav__link",to:"/starships",children:"Starships"})})]})})]})}),u=a(8),d=a(12),h=a(15),m=a(14),j=a(33),f=a(29),p=function(e){var t=e.onChange,a=(e.onFocus,e.value),s=e.debounceTimeout,i=Object(r.useState)(a),c=Object(j.a)(i,2),l=c[0],o=c[1],u=f.debounce((function(e){return t(e)}),s),d=function(e){o(e.target.value),u(e)};return Object(n.jsx)("div",{className:"searchBar__inputContainer",children:Object(n.jsx)("input",{value:l,type:"text",className:"searchBar__input",placeholder:"type here",autoComplete:"off",onChange:d,onFocus:d})})},b=(a(48),function(){return Object(n.jsx)("div",{className:"spinner",children:"loading..."})}),v=a(30),g=a.n(v),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,imageUrl:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.imageUrl).then((function(e){if(e.status<=300)return e.blob();throw new Error})).then((function(t){var a=URL.createObjectURL(t);e.setState({isLoading:!1,imageUrl:a})})).catch((function(){e.setState({isLoading:!1,imageUrl:e.props.defaultImageUrl})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.imageUrl,r=this.props.classNameWrapper,s=void 0===r?"":r;return t?Object(n.jsx)(b,{}):Object(n.jsx)("div",{className:s,children:Object(n.jsx)("img",{className:g.a.image,src:a,alt:""})})}}]),a}(r.Component),_=a(25),x=a.n(_),y=function(e){var t=e.card,a=e.url+"/"+t.id;return Object(n.jsx)("li",{children:Object(n.jsxs)(l.b,{className:x.a.link,to:a,children:[Object(n.jsx)(O,{classNameWrapper:x.a.imageContainer,imageUrl:t.imageUrl,defaultImageUrl:t.defaultImageUrl}),Object(n.jsx)("p",{children:t.name})]})})},C=function(e){var t=e.data,a=void 0===t?[]:t,r=e.url;return Object(n.jsx)("ul",{className:"libraryList",children:a.length?a.map((function(e){return Object(n.jsx)(y,{card:e,url:r},e.id)})):Object(n.jsx)("li",{className:"libraryList__item",children:"no items"})})},N=a(31),L=a.n(N),S=function(e){var t=e.foundItems,a=e.url,s=e.closeResults;return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("button",{type:"button",className:L.a.closeResultsButton,onClick:s,children:"+"}),Object(n.jsx)(C,{data:t,url:a,classNames:"LibraryList"})]})},I=[{id:1,name:"people"},{id:2,name:"planets"},{id:3,name:"starships"}],R=a(11),k=a.n(R),U=a(18),w=a(9),E=a(19),D=a(50),P=a(51),B=a(52),A=Object(E.a)("idTemplate"),W=Object(E.a)("getItemId"),M=Object(E.a)("getImageUrl"),T=function e(){var t=this;Object(u.a)(this,e),Object.defineProperty(this,A,{writable:!0,value:/\/([0-9]+)\//}),this.SW_BASE_URL="https://swapi.dev/api",this.PERSON_IMG_URL="https://starwars-visualguide.com/assets/img/characters/",this.PLANET_IMG_URL="https://starwars-visualguide.com/assets/img/planets/",this.STARSHIP_IMG_URL="https://starwars-visualguide.com/assets/img/starships/",this.SW_CATEGORIES={people:function(e){return t.modifyPerson(e)},planets:function(e){return t.modifyPlanet(e)},starships:function(e){return t.modifyStarship(e)}},Object.defineProperty(this,W,{writable:!0,value:function(e){return e.match(Object(w.a)(t,A)[A])[1]}}),Object.defineProperty(this,M,{writable:!0,value:function(e,t){return e+t+".jpg"}}),this.modifyPerson=function(e){var a=Object(w.a)(t,W)[W](e.url);return{id:a,imageUrl:Object(w.a)(t,M)[M](t.PERSON_IMG_URL,a),defaultImageUrl:D.default,name:e.name,info:[{id:1,title:"Name",value:e.name},{id:2,title:"Gender",value:e.gender},{id:3,title:"Year of birth",value:e.birth_year},{id:4,title:"Height",value:e.height},{id:5,title:"Mass",value:e.mass}]}},this.modifyPlanet=function(e){var a=Object(w.a)(t,W)[W](e.url);return{id:a,imageUrl:Object(w.a)(t,M)[M](t.PLANET_IMG_URL,a),defaultImageUrl:P.default,name:e.name,info:[{id:1,title:"Name",value:e.name},{id:2,title:"Rotation period",value:e.rotation_period},{id:3,title:"Climate",value:e.climate},{id:4,title:"Terrain",value:e.terrain},{id:5,title:"Population",value:e.population}]}},this.modifyStarship=function(e){var a=Object(w.a)(t,W)[W](e.url);return{id:a,imageUrl:Object(w.a)(t,M)[M](t.STARSHIP_IMG_URL,a),defaultImageUrl:B.default,name:e.name,info:[{id:1,title:"Name",value:e.name},{id:2,title:"Model",value:e.model},{id:3,title:"Length",value:e.length},{id:4,title:"Passengers",value:e.passengers},{id:5,title:"HyperDrive rating",value:e.hyperdrive_rating}]}},this.getData=function(){var e=Object(U.a)(k.a.mark((function e(a,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.SW_BASE_URL+a,{signal:n.signal});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getItemData=function(){var e=Object(U.a)(k.a.mark((function e(a,n,r){var s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData(a,r);case 2:return s=e.sent,e.abrupt("return",t.SW_CATEGORIES[n](s));case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.getListData=function(){var e=Object(U.a)(k.a.mark((function e(a,n,r){var s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData(a,r);case 2:return s=e.sent,e.abrupt("return",s.results.map(t.SW_CATEGORIES[n]));case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.modifyDataList=function(e,a){return a.results.map(t.SW_CATEGORIES[e])}},G=(a(53),new T),V=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={category:"",value:"",foundItems:[],isResultBlockVisible:!1,isLoading:!1,isError:!1},e.selectedValueRef=s.a.createRef(),e._fetchController=null,e.handleInputChange=function(t){var a=t.target.value.trim();a?e.setState({isResultBlockVisible:!0,value:a},e.searchData):e.setState({isResultBlockVisible:!1,value:"",foundItems:[]})},e.handleSelectCategory=function(t){var a=t.target.value;e.setState((function(e){return{category:a,isResultBlockVisible:!!e.value}}),e.searchData)},e.searchData=function(){e._fetchController&&e._fetchController.abort(),e._fetchController=new AbortController,e.setState({isLoading:!0,isError:!1});var t=e.state,a=t.value,n=t.category;a&&fetch("https://swapi.dev/api/".concat(n,"/?search=").concat(a),{signal:e._fetchController.signal}).then((function(e){return e.json()})).then((function(t){var a=G.modifyDataList(e.state.category,t);e.setState({foundItems:a,isLoading:!1,isError:!1})})).catch((function(t){"AbortError"!==t.name&&e.setState({isError:!0,isLoading:!1,isLoaded:!1})}))},e.closeResults=function(){e.setState({isResultBlockVisible:!1})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setState({category:this.selectedValueRef.current.value})}},{key:"componentWillUnmount",value:function(){this._fetchController.abort()}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.isResultBlockVisible,r=e.foundItems,s=e.category,i=e.isLoading,c=e.isError,l="/"+s;return Object(n.jsxs)("div",{className:"searchBar",children:[Object(n.jsxs)("div",{className:"searchBar__searchBlock",children:[Object(n.jsx)("select",{ref:this.selectedValueRef,onChange:this.handleSelectCategory,onFocus:this.handleSelectCategory,value:s,className:"select",children:I.map((function(e){return Object(n.jsx)("option",{value:e.name,children:e.name},e.id)}))}),Object(n.jsx)(p,{value:t,onFocus:this.handleInputChange,onChange:this.handleInputChange})]}),a&&Object(n.jsxs)("div",{className:"searchResults",children:[i&&Object(n.jsx)(b,{}),c&&Object(n.jsx)("div",{children:"error"}),!i&&!c&&Object(n.jsx)(S,{foundItems:r,url:l,closeResults:this.closeResults})]})]})}}]),a}(r.Component),F=a(2),H=function(){return Object(n.jsx)("div",{children:"Welcome to StarWars library home page"})},J=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={url:e.props.match.url,loadedData:null,isLoading:!0,isError:!1},e._fetchController=null,e.handleSuccess=function(t){e.setState({loadedData:t,isLoading:!1,isError:!1})},e.handleError=function(t){"AbortError"!==t.name?e.setState({isLoading:!1,isError:!0}):console.log("--- current fetch was aborted ----")},e.getLibraryData=function(t,a){e._fetchController&&e._fetchController.abort(),e._fetchController=new AbortController,console.log("--- new controller was created ---"),e.props.getData(t,a,e._fetchController).then(e.handleSuccess).catch(e.handleError)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.category,t=this.state.url;this.getLibraryData(t,e)}},{key:"componentDidUpdate",value:function(e,t,a){if(t.url!==this.state.url){var n=this.props.match.params.category,r=this.state.url;this.getLibraryData(r,n)}}},{key:"componentWillUnmount",value:function(){this._fetchController.abort()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isError,r=e.loadedData,s=e.url,i=this.props.component;return console.log("render",this.state),t?Object(n.jsx)(b,{}):a?Object(n.jsx)("div",{children:"error"}):Object(n.jsx)(i,{data:r,url:s})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.match.url!==t.url?{url:e.match.url,loadedData:null,isLoading:!0,isError:!1}:null}}]),a}(r.Component),Q=Object(F.f)(J),Z=a(13),q=a.n(Z),K=a(20),Y=a.n(K),z=function(e){var t=e.fieldItem,a=e.classNames,r=void 0===a?"":a;return Object(n.jsxs)("li",{className:q()(Y.a.detail,r),children:[Object(n.jsx)("span",{className:Y.a.cell,children:t.title}),Object(n.jsx)("span",{className:Y.a.cell,children:t.value})]})},X=a(32),$=a.n(X),ee=function(e){var t=e.fieldList,a=e.classNames,r=void 0===a?"":a;return Object(n.jsx)("ul",{className:q()(r),children:t.map((function(e){return Object(n.jsx)(z,{fieldItem:e,classNames:$.a.item},e.id)}))})},te=a(17),ae=a.n(te),ne=function(e){var t=e.history,a=e.data,r=e.classNames,s=void 0===r?"":r,i=a.info,c=a.name,l=a.imageUrl,o=a.defaultImageUrl;return Object(n.jsxs)("div",{className:q()(ae.a.card,s),children:[Object(n.jsx)("h2",{className:ae.a.title,children:c}),Object(n.jsx)(O,{classNameWrapper:ae.a.imageContainer,imageUrl:l,defaultImageUrl:o}),Object(n.jsx)(ee,{fieldList:i}),Object(n.jsx)("button",{className:ae.a.button,type:"button",onClick:t.goBack,children:"<< Back"})]})},re=Object(F.f)(ne),se=function(){return Object(n.jsx)("div",{children:"Page not found"})},ie=new T,ce=function(){return Object(n.jsx)("main",{children:Object(n.jsxs)(F.c,{children:[Object(n.jsx)(F.a,{path:"/",exact:!0,component:H}),Object(n.jsx)(F.a,{path:"/:category/:id",exact:!0,children:Object(n.jsx)(Q,{getData:ie.getItemData,component:re})}),Object(n.jsx)(F.a,{exact:!0,path:"/:category",children:Object(n.jsx)(Q,{getData:ie.getListData,component:C})}),Object(n.jsx)(F.a,{component:se})]})})},le=(a(54),function(){return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)(o,{}),Object(n.jsx)(V,{}),Object(n.jsx)(ce,{})]})});a(55);c.a.render(Object(n.jsx)(l.a,{children:Object(n.jsx)(le,{})}),document.getElementById("root"))}],[[56,1,2]]]);
//# sourceMappingURL=main.72e1b1ce.chunk.js.map