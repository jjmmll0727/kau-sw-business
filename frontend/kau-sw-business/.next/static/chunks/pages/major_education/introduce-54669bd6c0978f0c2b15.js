(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[670],{3052:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n=i(5893),r=(i(7294),i(9163)),o=i(4911),a=i(6798),d=r.ZP.div.withConfig({displayName:"LeftBox__Container",componentId:"tyl7y2-0"})(["width:15vw;min-width:200px;display:flex;flex-direction:column;@media screen and (max-width:1000px){display:none;}& > div:nth-of-type(1){background:#666666;height:100px;display:flex;align-items:center;padding-left:20px;& > span{color:white;font-size:24px;font-weight:300;}}"]),l=r.ZP.div.withConfig({displayName:"LeftBox__MenuItem",componentId:"tyl7y2-1"})(["border-bottom:1px solid #dfdfdf;height:50px;display:flex;justify-content:flex-start;padding-left:20px;align-items:center;& > a{text-decoration:none;font-size:18px;font-weight:300;}"]),s=function(t){var e=t.title,i=t.state,r=t.front,o=a.s[i].subElements;return(0,n.jsxs)(d,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:r})}),o.map((function(t,i){return e===t.title?(0,n.jsx)(l,{style:{background:"#262f41",color:"white"},children:(0,n.jsx)("a",{children:t.title})},i):(0,n.jsx)(l,{children:(0,n.jsx)("a",{href:t.url,style:{color:"black"},children:t.title})},i)}))]})},c=r.ZP.div.withConfig({displayName:"ContentFrame__Container",componentId:"sc-1nx390z-0"})(["display:flex;justify-content:center;align-items:top;& > div:nth-of-type(2){padding-left:40px;padding-right:40px;width:55vw;min-width:800px;display:flex;flex-direction:column;margin-bottom:50px;& > div:nth-of-type(1){border-bottom:1px solid black;height:70px;font-size:24px;line-height:80px;margin-bottom:30px;}}"]),u=r.ZP.div.withConfig({displayName:"ContentFrame__FrontImage",componentId:"sc-1nx390z-1"})(["background:url(/img/banner.jpg);height:454px;display:flex;align-items:center;justify-content:center;& > span{color:white;font-size:50px;font-weight:300;letter-spacing:7px;}"]),p=function(t){var e=t.title,i=t.state,r=t.children,d=a.s[i].title;return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(u,{children:(0,n.jsx)("span",{children:d})}),(0,n.jsxs)(c,{children:[(0,n.jsx)(s,{front:d,title:e,state:i}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:e}),r]})]})]})}},9378:function(t,e,i){"use strict";var n=i(5893),r=(i(7294),i(5675)),o=i(9163).ZP.div.withConfig({displayName:"ImageContent__Container",componentId:"sc-19hq5w9-0"})(["padding-left:","px;"],(function(t){return t.paddingLeft}));e.Z=function(t){var e=t.src,i=t.alt,a=t.paddingLeft;return(0,n.jsx)(o,{paddingLeft:a,children:(0,n.jsx)(r.default,{quality:100,src:e,alt:i||""})})}},4911:function(t,e,i){"use strict";i.d(e,{Z:function(){return A}});var n=i(5893),r=i(7294),o=i(9008),a=i(9163),d=i(5675),l=i(1664),s=i(6798),c=a.ZP.div.withConfig({displayName:"Menu__Container",componentId:"sc-9r1vgo-0"})(["background:#262f41;display:flex;justify-content:center;& > div{width:80vw;height:80px;display:flex;justify-content:space-between;align-items:center;@media screen and (max-width:1000px){width:90vw;}& > div > div > img{@media screen and (max-width:1000px){width:170px;height:30px;}}}"]),u=a.ZP.div.withConfig({displayName:"Menu__MenuEntry",componentId:"sc-9r1vgo-1"})(["display:grid;grid-template-columns:repeat(",",150px);width:70%;height:100%;justify-items:center;justify-content:end;& > div{width:100%;&:hover{padding-top:24px;border-top:3px solid white;}}@media screen and (max-width:1000px){display:none;}"],s.s.length),p=a.ZP.div.withConfig({displayName:"Menu__MenuItem",componentId:"sc-9r1vgo-2"})(["text-align:center;padding-top:27px;& > a{color:white;text-decoration:none;&:active{color:#e2e2e2;}}"]),h=a.ZP.div.withConfig({displayName:"Menu__DetailMenu",componentId:"sc-9r1vgo-3"})(["background:rgba(0,0,0,0.3);position:absolute;top:80px;transition:all 0.1s ease;visibility:hidden;width:100vw;&:hover{transition:all 0.1s ease;}& > div{display:grid;grid-template-columns:repeat(",",150px);height:200px;justify-content:end;margin-right:10vw;& > div{display:grid;height:100%;width:","vw;width:150px;align-items:center;}& > div > div{padding-top:7px;margin-bottom:7px;display:flex;justify-content:center;text-align:center;&:hover{& > a{color:white;}}& > a{text-decoration:none;color:#aaa;}}}"],s.s.length,56),x=a.ZP.div.withConfig({displayName:"Menu__Button",componentId:"sc-9r1vgo-4"})(["color:white;padding:12px 5px 5px 5px;filter:invert(100%);@media screen and (min-width:1000px){display:none;}&:active{filter:invert(70%);}"]),g=function(){var t=(0,r.useRef)(),e=(0,r.useState)("\uc0ac\uc5c5\ub2e8 \uc18c\uac1c"),i=e[0],o=e[1];(0,r.useEffect)((function(){return function(){document.getElementById("detail-menu").style.height="0px"}}),[]);var a=function(e){o(e.currentTarget.innerText.trim()),t&&(t.current.style.visibility="visible",t.current.style.height="200px")},g=function(){t.current.style.visibility="hidden",t.current.style.height="0px"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(d.default,{src:"/img/logo_01.png",alt:"logo",width:"205",height:"36",onClick:function(){location.href="/"}}),(0,n.jsx)(u,{children:s.s.map((function(t,e){return(0,n.jsx)(p,{onMouseEnter:a,children:(0,n.jsx)(l.default,{href:s.s[e].url,children:(0,n.jsx)("a",{children:t.title})})},e)}))}),(0,n.jsx)(x,{children:(0,n.jsx)(d.default,{src:"/img/menu_more.png",alt:"",width:"40",height:"40",id:"detail-menu",onMouseLeave:g})})]})}),(0,n.jsx)(h,{ref:t,onMouseLeave:g,id:"detail-menu",children:(0,n.jsx)("div",{children:s.s.map((function(t,e){return(0,n.jsx)("div",{style:s.s[e].title===i?{background:"rgba(0,0,0,0.4)"}:{},children:t.subElements.map((function(t,e){return(0,n.jsx)("div",{children:(0,n.jsx)(l.default,{href:t.url,children:t.title})},e)}))},e)}))})})]})};function f(){return(0,n.jsxs)(m,{children:[(0,n.jsx)("hr",{}),(0,n.jsx)(j,{children:(0,n.jsxs)("div",{children:["(10540) \uacbd\uae30\ub3c4 \uace0\uc591\uc2dc \ub355\uc591\uad6c \ud56d\uacf5\ub300\ud559\ub85c 76",(0,n.jsx)("br",{}),"TEL - (02) 300-0114  FAX - (02) 3158-5769 E-mail - webmaster@kau.ac.kr",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"COPYRIGHT 2012 Korea Aerospace University. All right reserved."]})}),(0,n.jsx)(v,{})]})}var m=a.ZP.div.withConfig({displayName:"Footer__Container",componentId:"u68pnv-0"})(["height:157px;background:#1e1e1e;"]),j=a.ZP.div.withConfig({displayName:"Footer__InfoZone",componentId:"u68pnv-1"})(["padding-top:40px;display:flex;justify-content:flex-start;align-items:center;& > div{margin-left:10vw;color:white;font-weight:400;font-size:15px;@media screen and (max-width:768px){font-size:13px;padding-left:30px;margin-right:15px;}}& > div:nth-of-type(2){border:1px solid white;padding:8px 20px 8px 20px;cursor:pointer;@media screen and (max-width:768px){min-width:80px;font-size:13px;margin-right:30px;}}"]),v=a.ZP.div.withConfig({displayName:"Footer__NewLink",componentId:"u68pnv-2"})(["display:flex;justify-content:space-around;align-items:center;"]),w=a.ZP.div.withConfig({displayName:"Layout__Container",componentId:"jbj1sg-0"})(["margin:0;"]),A=function(t){var e=t.children;return(0,n.jsxs)(w,{children:[(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:"\ud55c\uad6d\ud56d\uacf5\ub300\ud559\uad50 SW\uc911\uc2ec\uc0ac\uc5c5\ub2e8"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("style",{children:"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap);"})]}),(0,n.jsx)(g,{}),e,(0,n.jsx)(f,{})]})}},3430:function(t,e,i){"use strict";var n=i(5893),r=(i(7294),i(9163)),o=r.ZP.div.withConfig({displayName:"Subtitle__Container",componentId:"ln7m5c-0"})(["display:flex;align-items:top;margin-bottom:15px;& > div:nth-of-type(2){font-weight:500;color:#262f41;font-size:20px;}"]),a=r.ZP.div.withConfig({displayName:"Subtitle__Bullet",componentId:"ln7m5c-1"})(["width:10px;height:20px;background:#262f41;margin-left:5px;margin-right:10px;margin-top:6px;"]);e.Z=function(t){var e=t.text;return(0,n.jsxs)(o,{children:[(0,n.jsx)(a,{}),(0,n.jsx)("div",{children:e})]})}},8237:function(t,e,i){"use strict";var n=i(5893),r=(i(7294),i(9163).ZP.div.withConfig({displayName:"Title__Container",componentId:"sc-16q65c5-0"})(["display:flex;align-items:center;justify-content:flex-start;margin-bottom:10px;& > img{width:17px;height:17px;padding-right:10px;}& > span{font-size:22px;font-weight:600;color:#333;}"]));e.Z=function(t){var e=t.text;return(0,n.jsxs)(r,{children:[(0,n.jsx)("img",{src:"/img/title_bullet.png",alt:""}),(0,n.jsx)("span",{children:e}),"\x1c"]})}},1807:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return h}});var n=i(5893),r=(i(7294),i(9163)),o=i(3052),a=i(8237),d=i(3430),l=i(9378),s={src:"/_next/static/image/public/img/major_education/2-1.069b89b0f46ee03c7be40eca9baf2e24.png",height:1829,width:2018,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAuUlEQVR42hXNS07DMBSG0e93TZpHQ1ArRux/xJwtsAAGrAAkUIuU0jpObOdCZ2d29PzyZt8/EwLbD1udr8n61nMaF1Ve+MOhZ3jo2DjH/n7L5zHw9NjydZq48w5dzr+WSjEhDOQksxsEKWf8cZzYtbVKKeScWFfU1FuQkKtwr+8fjNdIWldr2oZLXAyHhTkR4oxb0koO0ZrKkxFO+r89fe0thcl8XBJd3ygXszjPdLuGMUxUG6d+6PgDiL5ci+quizgAAAAASUVORK5CYII="},c={src:"/_next/static/image/public/img/major_education/2-2.eb41056ac5c59b46b06f905de7eede3c.png",height:530,width:1224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAATklEQVR4nB2LAQqAMAwDr2ud/3+oiANhk3W1SgiBHCdjjNX7QymFWg0RILK58uVqd7hP1Az3haomhTmduilynG1JKnXf/9NMiQh8BVaEF5mfIqvTnpuzAAAAAElFTkSuQmCC"},u={src:"/_next/static/image/public/img/major_education/2-6.122aad877da575f4880065e466100a4e.png",height:347,width:766,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeElEQVR42hWI0QqCQBBF78wYW4IRPQgR9P+f0Wv/ED35YqCQ7OoS7ozjhcvhHHq+3jr+Eh63C7p+ont7tn5I1F5rfLoR9B2SxpioaWrkvOIYKuT/inBgTHEBl6IwI1M1m+cFDh/AUiGEkzERoFrggAhjD+QXZnehDQmuNtxpAIjkAAAAAElFTkSuQmCC"},p=r.ZP.div.withConfig({displayName:"introduce__Content",componentId:"sc-161j9j4-0"})(["display:flex;flex-direction:column;"]),h=function(){return(0,n.jsx)(o.Z,{title:"\uc18c\uac1c",state:1,children:(0,n.jsxs)(p,{children:[(0,n.jsx)(a.Z,{text:"SW\uc804\uacf5\uad50\uc721 \uc18c\uac1c"}),(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{text:"\uc778\uc7ac\uc0c1\uacfc \uad50\uc721\ubaa9\ud45c"}),(0,n.jsx)(l.Z,{src:s,alt:"\ud55c\uad6d\ud56d\uacf5\ub300\ud559\uad50 SW\uc911\uc2ec\ub300\ud559 \uc778\uc7ac\uc0c1\uacfc \uad50\uc721\ubaa9\ud45c",paddingLeft:20}),(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{text:"\ubaa8\ub4c8\ud615 \uc804\uacf5\uad50\uc721\uacfc\uc815"}),(0,n.jsx)(l.Z,{src:c,alt:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc\uc758 \ubaa8\ub4c8\ud615 \uc804\uacf5\uad50\uc721\uacfc\uc815",paddingLeft:20}),(0,n.jsx)("br",{}),(0,n.jsx)(d.Z,{text:"AI\xb7SW \uc911\uc2ec\uc758 \uc804\uacf5 \uc5ed\ub7c9 \uac15\ud654"}),(0,n.jsx)(l.Z,{src:u,alt:"AI\xb7SW \uc911\uc2ec\uc758 \uc804\uacf5 \uc5ed\ub7c9 \uac15\ud654",paddingLeft:20})]})})}},6798:function(t,e,i){"use strict";i.d(e,{s:function(){return n}});var n=[{title:"\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",url:"/introduce/greeting",subElements:[{title:"\uc778\uc0bf\ub9d0",url:"/introduce/greeting"},{title:"\uc0ac\uc5c5\ubaa9\ud45c",url:"/introduce/business_model"},{title:"\uc870\uc9c1\uad6c\uc131",url:"/introduce/organization"},{title:"contact",url:"/introduce/contact"}]},{title:"SW\uc804\uacf5\uad50\uc721",url:"/major_education/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/major_education/calendar"},{title:"\uc18c\uac1c",url:"/major_education/introduce"},{title:"\uc624\ud508\uc18c\uc2a4",url:"/major_education/open_source"},{title:"\ub9c8\uc77c\ub9ac\uc9c0",url:"/major_education/mileage"},{title:"\ube44\uad50\uacfc",url:"/major_education/non_discipline"}]},{title:"\uc0b0\ud559\ud611\ub825",url:"/collab_industry/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/collab_industry/calendar"},{title:"\uc18c\uac1c",url:"/collab_industry/introduce"},{title:"\uc0b0\ud559\ud504\ub85c\uc81d\ud2b8",url:"/collab_industry/project"},{title:"\uc778\ud134\uc2ed",url:"/collab_industry/internship"},{title:"\uae00\ub85c\ubc8c",url:"/collab_industry/global"}]},{title:"SW\uae30\ucd08\xb7\uc735\ud569\uad50\uc721",url:"/basic_education/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/basic_education/calendar"},{title:"\uc18c\uac1c",url:"/basic_education/introduce"},{title:"\uc785\ud559\uc804 \uad50\uc721",url:"/basic_education/before_entrance"},{title:"\uae30\ucd08\uad50\uc591\uad50\uc721",url:"/basic_education/electives"},{title:"\uc735\ud569\uc804\uacf5",url:"/basic_education/additive_major"}]},{title:"SW\uac00\uce58\ud655\uc0b0",url:"/influences/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/influences/calendar"},{title:"\uc18c\uac1c",url:"/influences/introduce"},{title:"\ucd08\uc911\uace0",url:"/influences/juniors"},{title:"SW\ud589\uc0ac(\uad50\ub0b4)",url:"/influences/events"}]}]},1065:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/major_education/introduce",function(){return i(1807)}])}},function(t){t.O(0,[140,774,888,179],(function(){return e=1065,t(t.s=e);var e}));var e=t.O();_N_E=e}]);