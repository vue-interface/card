(function(r,a){typeof exports=="object"&&typeof module!="undefined"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(r=typeof globalThis!="undefined"?globalThis:r||self,a(r.Card={}))})(this,function(r){"use strict";var a=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"card"},[e.$slots["img-top"]?[e._t("img-top")]:e._e(),e.$slots.header?[s("div",{staticClass:"card-header"},[e._t("header")],2)]:e._e(),e._t("default",function(){return[e.$slots.body?[s("div",{staticClass:"card-body"},[e._t("body")],2)]:e._e()]}),e.$slots.footer?[s("div",{staticClass:"card-footer"},[e._t("footer")],2)]:e._e(),e.$slots["img-bottom"]?[e._t("img-bottom")]:e._e()],2)},v=[];function h(e,i,s,b,d,f,l,g){var t=typeof e=="function"?e.options:e;i&&(t.render=i,t.staticRenderFns=s,t._compiled=!0),b&&(t.functional=!0),f&&(t._scopeId="data-v-"+f);var n;if(l?(n=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(o=__VUE_SSR_CONTEXT__),d&&d.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(l)},t._ssrRegister=n):d&&(n=g?function(){d.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:d),n)if(t.functional){t._injectStyles=n;var y=t.render;t.render=function(T,c){return n.call(c),y(T,c)}}else{var u=t.beforeCreate;t.beforeCreate=u?[].concat(u,n):[n]}return{exports:e,options:t}}const p={},_={};var m=h(p,a,v,!1,C,null,null,null);function C(e){for(let i in _)this[i]=_[i]}var $=function(){return m.exports}();r.Card=$,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
