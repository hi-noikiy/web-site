(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b81a84"],{"30f2":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"policyBox"},[o("span",[t._v(" We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it. ")]),o("input",{class:0==t.colorHover?"hover policyBtn":" policyBtn",attrs:{type:"button",value:"Privacy policy"},on:{click:function(e){return t.Privacy()},mouseenter:function(e){return t.spanHover(0)}}}),o("input",{class:1==t.colorHover?"hover policyBtnNo":"policyBtnNo",attrs:{type:"submit",value:"NO"},on:{click:function(e){return t.NO()},mouseenter:function(e){return t.spanHover(1)}}}),o("input",{class:2==t.colorHover?"hover policyBtnYes":"policyBtnNo",attrs:{type:"submit",value:"OK"},on:{click:function(e){return t.Setcookie()},mouseenter:function(e){return t.spanHover(2)}}})])])},i=[],c=o("6ad0"),r={data:function(){return{colorHover:2}},methods:{Privacy:function(){window.open("https://matrixetf.finance/cookies","_blank")},NO:function(){c["a"].$emit("Policy",!0)},Setcookie:function(){var t=new Date,e=30;t.setTime(t.getTime()+24*e*60*60*1e3),document.cookie="policy=true;expires="+t.toGMTString()+";path=/",c["a"].$emit("Policy",!0)},spanHover:function(t){this.colorHover=t}},mounted:function(){}},u=r,s=(o("9a46"),o("2877")),a=Object(s["a"])(u,n,i,!1,null,"0f247de0",null);e["default"]=a.exports},"6ad0":function(t,e,o){"use strict";var n=o("2b0e");e["a"]=new n["a"]},"9a46":function(t,e,o){"use strict";o("d493")},d493:function(t,e,o){}}]);