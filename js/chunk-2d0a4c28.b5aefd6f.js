(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4c28"],{"088b":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home page"},[e("LockTotal"),e("div",{staticClass:"pool-card-box"},t._l(t.pools,(function(t,s){return e("PoolCard",{key:s,attrs:{item:t}})})),1),e("div",{staticClass:"operation-box"},[e("div",{staticClass:"center"},[e("a",{staticClass:"btn",attrs:{href:t.dealUrl}},[t._v("兑换")]),e("a",{staticClass:"btn",attrs:{href:t.dealUrl}},[t._v(" 添加流动性 ")])])])],1)},i=[],n=e("1da1"),c=e("5530"),l=(e("96cf"),e("2f62")),o=e("ae21"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lock-box"},[t._m(0),e("div",{staticClass:"right"},[e("p",{staticClass:"label"},[t._v("总质押量:")]),e("div",{staticClass:"limit-box"}),e("div",{staticClass:"value"},[t._v("$"+t._s(t._f("Fixed")(t.gross||"???,???,???",4)))])])])},u=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"left"},[e("h1",[t._v("矿池列表")]),e("h3",[t._v(" 提供单币质押挖矿，也可以通过在Dex交易所添加流动性，通过获得的LP份额来进行流动性挖矿。 ")])])}],v={computed:Object(c["a"])({},Object(l["b"])(["gross"]))},d=v,b=e("2877"),_=Object(b["a"])(d,r,u,!1,null,null,null),h=_.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pool-card"},[e("div",{staticClass:"pool-center"},[e("img",{staticClass:"token-icon",attrs:{src:t.item.icon,alt:""}}),e("h4",[t._v(t._s(t.item.name))]),e("div",{staticClass:"hint"},[t._v("质押 "+t._s(t.item.symbol)+" 赚取 "+t._s(t.$Instance.token))]),e("div",{staticClass:"stat-box"},[e("div",{staticClass:"val-box"},[e("div",{staticClass:"label"},[t._v("TVL:")]),e("div",{staticClass:"value"},[t._v("$"+t._s(t._f("Fixed")(t.item.amount||"???,???",4)))])]),e("div",{staticClass:"val-box"},[e("div",{staticClass:"label"},[t._v("APY:")]),e("div",{staticClass:"value"},[t._v(t._s(t.item.apy||"???")+"%")])])]),e("div",{staticClass:"btn",on:{click:function(s){return t.$router.push("/pool/"+t.item.symbol)}}},[t._v(" 进入矿池 ")])])])},f=[],p={props:["item"]},C=p,x=Object(b["a"])(C,m,f,!1,null,null,null),k=x.exports,w={data:function(){return{tokenToUPeice:0,gross:0}},computed:Object(c["a"])(Object(c["a"])({},Object(l["b"])(["isInit","userAddress","pools"])),{},{dealUrl:function(){if(!this.isInit)return"";var t=this.$Instance.chainId;console.log("链id",t);var s=this.$Instance.contractAddresses.browser[t].base;return s}}),components:{LockTotal:h,PoolCard:k},mounted:function(){this.isInit&&this.init()},methods:{init:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(o["e"])();case 2:t.tokenToUPeice=s.sent;case 3:case"end":return s.stop()}}),s)})))()}},watch:{isInit:function(){this.isInit&&this.init()}}},j=w,O=Object(b["a"])(j,a,i,!1,null,null,null);s["default"]=O.exports}}]);