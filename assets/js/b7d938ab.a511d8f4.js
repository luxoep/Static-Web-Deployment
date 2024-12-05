"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6426],{6923:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=i(5893),s=i(1151);const l={slug:"jQueryFunction",title:"JavaScript - jQuery",authors:["Luxoep"],tags:["jQuery"],sidebar_position:3},t=void 0,c={id:"tutorial-basics/jQueryLearn",title:"JavaScript - jQuery",description:"\u4e86\u89e3jQuery",source:"@site/docs/tutorial-basics/jQueryLearn.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/jQueryFunction",permalink:"/docs/tutorial-basics/jQueryFunction",draft:!1,unlisted:!1,tags:[{label:"jQuery",permalink:"/docs/tags/j-query"}],version:"current",sidebarPosition:3,frontMatter:{slug:"jQueryFunction",title:"JavaScript - jQuery",authors:["Luxoep"],tags:["jQuery"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u811a\u672c\u8bed\u8a00 - JavaScript",permalink:"/docs/tutorial-basics/JavaScriptFunction"},next:{title:"JavaScript - NodeJs",permalink:"/docs/tutorial-basics/NodeJsFunction"}},u={},o=[{value:"\u4e86\u89e3jQuery",id:"\u4e86\u89e3jquery",level:3},{value:"jQuery\u76842\u628a\u5229\u5668",id:"jquery\u76842\u628a\u5229\u5668",level:3}];function j(n){const e={br:"br",h3:"h3",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"\u4e86\u89e3jquery",children:"\u4e86\u89e3jQuery"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u662f\u4ec0\u4e48: What?","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e00\u4e2aJS\u51fd\u6570\u5e93: write less, do more"}),"\n",(0,r.jsxs)(e.li,{children:["\u5c01\u88c5\u7b80\u5316DOM\u64cd\u4f5c(CRUD ",(0,r.jsx)(e.strong,{children:"\u589e\u67e5\u6539\u5220"})," ) / Ajax"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4e3a\u4ec0\u4e48\u7528\u5b83: why?","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5f3a\u5927\u9009\u62e9\u5668: \u65b9\u4fbf\u5feb\u901f\u67e5\u627eDOM\u5143\u7d20"}),"\n",(0,r.jsx)(e.li,{children:"\u9690\u5f0f\u904d\u5386(\u8fed\u4ee3): \u4e00\u6b21\u64cd\u4f5c\u591a\u4e2a\u5143\u7d20\uff08each\u3001\u591a\u4e2a\u5143\u7d20\u52a0\u5355\u673a\u54cd\u5e94\u51fd\u6570\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u8bfb\u5199\u5408\u4e00: \u8bfb\u6570\u636e/\u5199\u6570\u636e\u7528\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff08\u65b9\u6cd5\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u94fe\u5f0f\u8c03\u7528: \u53ef\u4ee5\u901a\u8fc7.\u4e0d\u65ad\u8c03\u7528jQuery\u5bf9\u8c61\u7684\u65b9\u6cd5"}),"\n",(0,r.jsx)(e.li,{children:"\u4e8b\u4ef6\u5904\u7406"}),"\n",(0,r.jsx)(e.li,{children:"DOM\u64cd\u4f5c(CUD/\u589e\u5220\u6539)"}),"\n",(0,r.jsx)(e.li,{children:"\u6837\u5f0f\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.li,{children:"\u52a8\u753b"}),"\n",(0,r.jsx)(e.li,{children:"\u6d4f\u89c8\u5668\u517c\u5bb9"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5982\u4f55\u4f7f\u7528: How?","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\u5f15\u5165jQuery\u5e93",(0,r.jsx)(e.br,{}),"\n","\u672c\u5730\u5f15\u5165\u4e0eCDN\u8fdc\u7a0b\u5f15\u5165",(0,r.jsx)(e.br,{}),"\n","\u6d4b\u8bd5\u7248\u4e0e\u751f\u4ea7\u7248(\u538b\u7f29\u7248)"]}),"\n",(0,r.jsxs)(e.li,{children:["\u4f7f\u7528jQuery",(0,r.jsx)(e.br,{}),"\n","\u4f7f\u7528jQuery\u51fd\u6570: $/jQuery",(0,r.jsx)(e.br,{}),"\n","\u4f7f\u7528jQuery\u5bf9\u8c61: $xxx()"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"jquery\u76842\u628a\u5229\u5668",children:"jQuery\u76842\u628a\u5229\u5668"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["jQuery\u51fd\u6570: $/jQuery","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"jQuery\u5411\u5916\u66b4\u9732\u7684\u5c31\u662fjQuery\u51fd\u6570, \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528"}),"\n",(0,r.jsxs)(e.li,{children:["\u5f53\u6210\u4e00\u822c\u51fd\u6570\u4f7f\u7528: $(param)","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"param\u662ffunction: \u76f8\u5f53\u4e8ewindow.onload = function(\u6587\u6863\u52a0\u8f7d\u5b8c\u6210\u7684\u76d1\u542c)"}),"\n",(0,r.jsx)(e.li,{children:"param\u662f\u9009\u62e9\u5668\u5b57\u7b26\u4e32: \u67e5\u627e\u6240\u6709\u5339\u914d\u7684DOM\u5143\u7d20, \u8fd4\u56de\u5305\u542b\u6240\u6709DOM\u5143\u7d20\u7684jQuery\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"param\u662fDOM\u5143\u7d20: \u5c06DOM\u5143\u7d20\u5bf9\u8c61\u5305\u88c5\u4e3ajQuery\u5bf9\u8c61\u8fd4\u56de  $(this)  \u4e8b\u4ef6\u56de\u8c03\u51fd\u6570\u7ecf\u5e38\u4f7f\u7528"}),"\n",(0,r.jsx)(e.li,{children:"param\u662f\u6807\u7b7e\u5b57\u7b26\u4e32: \u521b\u5efa\u6807\u7b7eDOM\u5143\u7d20\u5bf9\u8c61\u5e76\u5305\u88c5\u4e3ajQuery\u5bf9\u8c61\u8fd4\u56de"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5f53\u6210\u5bf9\u8c61\u4f7f\u7528: $.xxx","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["each(obj/arr, function(key, value)",")  key\u53ef\u80fd\u662f\u5c5e\u6027\u540d\u4e5f\u53ef\u80fd\u662f\u4e0b\u6807"]}),"\n",(0,r.jsx)(e.li,{children:"trim(str)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["jQuery\u5bf9\u8c61","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5305\u542b\u6240\u6709\u5339\u914d\u7684n\u4e2aDOM\u5143\u7d20\u7684\u4f2a\u6570\u7ec4\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"\u6267\u884c$()\u8fd4\u56de\u7684\u5c31\u662fjQuery\u5bf9\u8c61"}),"\n",(0,r.jsxs)(e.li,{children:["\u57fa\u672c\u884c\u4e3a:","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"length/size(): \u5f97\u5230dom\u5143\u7d20\u7684\u4e2a\u6570"}),"\n",(0,r.jsx)(e.li,{children:"index: \u5f97\u5230\u6307\u5b9a\u4e0b\u6807\u5bf9\u5e94\u7684dom\u5143\u7d20"}),"\n",(0,r.jsxs)(e.li,{children:["each(function(index, domEle)","): \u904d\u5386\u6240\u6709dom\u5143\u7d20"]}),"\n",(0,r.jsx)(e.li,{children:"index(): \u5f97\u5230\u5f53\u524ddom\u5143\u7d20\u5728\u6240\u6709\u5144\u5f1f\u4e2d\u7684\u4e0b\u6807"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>t});var r=i(7294);const s={},l=r.createContext(s);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);