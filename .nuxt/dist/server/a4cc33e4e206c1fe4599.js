exports.ids=[2],exports.modules={86:function(t,e,n){var content=n(90);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(6).default;t.exports.__inject__=function(t){r("34b8a673",content,!0,t)}},89:function(t,e,n){"use strict";n.r(e);var r=n(86),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},90:function(t,e,n){(e=n(5)(!1)).push([t.i,".container[data-v-6ca94938]{display:flex;justify-content:space-between;line-height:1.5}article *[data-v-6ca94938]{margin-bottom:1rem}aside[data-v-6ca94938]{min-width:280px;max-width:280px;padding-left:2rem}.title[data-v-6ca94938]{font-size:2rem}",""]),t.exports=e},96:function(t,e,n){"use strict";n.r(e);var r={head(){return{title:this.post.title,meta:[{name:"twitter:title",content:this.post.title},{name:"twitter:description",content:this.post.content},{name:"twitter:image",content:"https://i.imgur.com/UYP2umJ.png"},{name:"twitter:card",content:"summary_large_image"}]}},data(){return{id:this.$route.params.id}},computed:{post(){return this.$store.state.posts.all.find(t=>t.id===this.id)},relatedPosts(){return this.$store.state.posts.all.filter(t=>t.id!==this.id)}}},o=n(3);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._ssrNode('<article data-v-6ca94938><h1 class="title" data-v-6ca94938>'+t._ssrEscape(t._s(t.post.title))+"</h1> <p data-v-6ca94938>"+t._ssrEscape(t._s(t.post.content))+"</p></article> "),t._ssrNode("<aside data-v-6ca94938>","</aside>",[t._ssrNode("<h3 data-v-6ca94938>Posts you might enjoy</h3> "),t._ssrNode("<ul data-v-6ca94938>","</ul>",t._l(t.relatedPosts,(function(e){return t._ssrNode("<li data-v-6ca94938>","</li>",[n("nuxt-link",{attrs:{to:{name:"posts-id",params:{id:e.id}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)],2)],2)}),[],!1,(function(t){var e=n(89);e.__inject__&&e.__inject__(t)}),"6ca94938","1e62845a");e.default=component.exports}};