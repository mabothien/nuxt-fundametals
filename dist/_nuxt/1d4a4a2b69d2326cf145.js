(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{289:function(t,n,e){var content=e(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("34b8a673",content,!0,{sourceMap:!1})},292:function(t,n,e){"use strict";var r=e(6),o=e(293)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(123)("find")},293:function(t,n,e){var r=e(41),o=e(122),c=e(42),l=e(30),f=e(294);t.exports=function(t,n){var e=1==t,d=2==t,v=3==t,h=4==t,m=6==t,w=5==t||m,_=n||f;return function(n,f,y){for(var x,P,A=c(n),$=o(A),j=r(f,y,3),k=l($.length),J=0,C=e?_(n,k):d?_(n,0):void 0;k>J;J++)if((w||J in $)&&(P=j(x=$[J],J,A),t))if(e)C[J]=P;else if(P)switch(t){case 3:return!0;case 5:return x;case 6:return J;case 2:C.push(x)}else if(h)return!1;return m?-1:v||h?h:C}}},294:function(t,n,e){var r=e(295);t.exports=function(t,n){return new(r(t))(n)}},295:function(t,n,e){var r=e(10),o=e(168),c=e(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},296:function(t,n,e){"use strict";var r=e(289);e.n(r).a},297:function(t,n,e){(n=e(28)(!1)).push([t.i,".container[data-v-6ca94938]{display:flex;justify-content:space-between;line-height:1.5}article *[data-v-6ca94938]{margin-bottom:1rem}aside[data-v-6ca94938]{min-width:280px;max-width:280px;padding-left:2rem}.title[data-v-6ca94938]{font-size:2rem}",""]),t.exports=n},303:function(t,n,e){"use strict";e.r(n);e(292);var r={head:function(){return{title:this.post.title,meta:[{name:"twitter:title",content:this.post.title},{name:"twitter:description",content:this.post.content},{name:"twitter:image",content:"https://i.imgur.com/UYP2umJ.png"},{name:"twitter:card",content:"summary_large_image"}]}},data:function(){return{id:this.$route.params.id}},computed:{post:function(){var t=this;return this.$store.state.posts.all.find((function(n){return n.id===t.id}))},relatedPosts:function(){var t=this;return this.$store.state.posts.all.filter((function(n){return n.id!==t.id}))}}},o=(e(296),e(19)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("article",[e("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),t._v(" "),e("p",[t._v(t._s(t.post.content))])]),t._v(" "),e("aside",[e("h3",[t._v("Posts you might enjoy")]),t._v(" "),e("ul",t._l(t.relatedPosts,(function(n){return e("li",[e("nuxt-link",{attrs:{to:{name:"posts-id",params:{id:n.id}}}},[t._v("\n          "+t._s(n.title)+"\n        ")])],1)})),0)])])}),[],!1,null,"6ca94938",null);n.default=component.exports}}]);