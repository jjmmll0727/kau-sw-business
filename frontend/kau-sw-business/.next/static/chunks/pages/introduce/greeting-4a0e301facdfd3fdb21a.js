(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{3052:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n=i(5893),r=(i(7294),i(9163)),l=i(4911),o=i(6798),s=r.ZP.div.withConfig({displayName:"LeftBox__Container",componentId:"tyl7y2-0"})(["width:15vw;min-width:200px;display:flex;flex-direction:column;@media screen and (max-width:1000px){display:none;}& > div:nth-of-type(1){background:#666666;height:100px;display:flex;align-items:center;padding-left:20px;& > span{color:white;font-size:24px;font-weight:300;}}"]),d=r.ZP.div.withConfig({displayName:"LeftBox__MenuItem",componentId:"tyl7y2-1"})(["border-bottom:1px solid #dfdfdf;height:50px;display:flex;justify-content:flex-start;padding-left:20px;align-items:center;& > a{text-decoration:none;font-size:18px;font-weight:300;}"]),a=function(t){var e=t.title,i=t.state,r=t.front,l=o.s[i].subElements;return(0,n.jsxs)(s,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("span",{children:r})}),l.map((function(t,i){return e===t.title?(0,n.jsx)(d,{style:{background:"#262f41",color:"white"},children:(0,n.jsx)("a",{children:t.title})},i):(0,n.jsx)(d,{children:(0,n.jsx)("a",{href:t.url,style:{color:"black"},children:t.title})},i)}))]})},c=r.ZP.div.withConfig({displayName:"ContentFrame__Container",componentId:"sc-1nx390z-0"})(["display:flex;justify-content:center;align-items:top;& > div:nth-of-type(2){padding-left:40px;padding-right:40px;width:55vw;min-width:800px;display:flex;flex-direction:column;margin-bottom:50px;& > div:nth-of-type(1){border-bottom:1px solid black;height:70px;font-size:24px;line-height:80px;margin-bottom:30px;}}"]),u=r.ZP.div.withConfig({displayName:"ContentFrame__FrontImage",componentId:"sc-1nx390z-1"})(["background:url(/img/banner.jpg);height:454px;display:flex;align-items:center;justify-content:center;& > span{color:white;font-size:50px;font-weight:300;letter-spacing:7px;}"]),p=function(t){var e=t.title,i=t.state,r=t.children,s=o.s[i].title;return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(u,{children:(0,n.jsx)("span",{children:s})}),(0,n.jsxs)(c,{children:[(0,n.jsx)(a,{front:s,title:e,state:i}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:e}),r]})]})]})}},4911:function(t,e,i){"use strict";i.d(e,{Z:function(){return v}});var n=i(5893),r=i(7294),l=i(9008),o=i(9163),s=i(5675),d=i(1664),a=i(6798),c=o.ZP.div.withConfig({displayName:"Menu__Container",componentId:"sc-9r1vgo-0"})(["background:#262f41;display:flex;justify-content:center;& > div{width:80vw;height:80px;display:flex;justify-content:space-between;align-items:center;& > div > div > img{@media screen and (max-width:768px){width:150px;height:30px;}}& > div:nth-of-type(2){display:flex;gap:70px;cursor:pointer;min-width:700px;}}"]),u=o.ZP.div.withConfig({displayName:"Menu__MenuItem",componentId:"sc-9r1vgo-1"})(["& > a{color:white;text-decoration:none;&:active{color:#e2e2e2;}}"]),p=o.ZP.div.withConfig({displayName:"Menu__DetailMenu",componentId:"sc-9r1vgo-2"})(["background:rgba(0,0,0,0.3);position:absolute;top:80px;z-index:900;transition:all 0.1s ease;visibility:hidden;width:100vw;&:hover{transition:all 0.1s ease;}& > div{transition:all 0.1s ease;display:flex;width:100%;height:100%;justify-content:flex-end;align-items:center;& > div{display:flex;height:100%;width:160px;flex-direction:column;justify-content:flex-start;align-items:center;}& > div:nth-of-type(1){width:155px;}& > div:nth-of-type(2){width:140px;}& > div:nth-of-type(3){width:150px;}& > div:nth-of-type(4){width:175px;}& > div:nth-of-type(5){margin-right:8.5vw;@media screen and (max-width:1600px){margin-right:8vw;}width:145px;}& > div > div{padding-top:7px;margin-bottom:7px;display:flex;justify-content:center;text-align:center;&:hover{& > a{color:white;}}& > a{text-decoration:none;color:#aaa;}}}"]),h=function(){var t=(0,r.useRef)(),e=(0,r.useState)("\uc0ac\uc5c5\ub2e8 \uc18c\uac1c"),i=e[0],l=e[1];(0,r.useEffect)((function(){return function(){document.getElementById("detail-menu").style.height="0px"}}),[]);var o=function(e){l(e.currentTarget.innerText.trim()),t&&(t.current.style.visibility="visible",t.current.style.height="200px")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)(s.default,{src:"/img/logo_01.png",alt:"logo",width:"205",height:"36",onClick:function(){location.href="/"}}),(0,n.jsx)("div",{children:a.s.map((function(t,e){return(0,n.jsx)(u,{onMouseEnter:o,children:(0,n.jsx)(d.default,{href:a.s[e].url,children:(0,n.jsx)("a",{children:t.title})})},e)}))})]})}),(0,n.jsx)(p,{ref:t,onMouseLeave:function(){t&&(l(""),t.current.style.visibility="hidden",t.current.style.height="0px")},id:"detail-menu",children:(0,n.jsx)("div",{children:a.s.map((function(t,e){return(0,n.jsx)("div",{style:a.s[e].title===i?{background:"rgba(0,0,0,0.4)"}:{},children:t.subElements.map((function(t,e){return(0,n.jsx)("div",{children:(0,n.jsx)(d.default,{href:t.url,children:t.title})},e)}))},e)}))})})]})};function x(){return(0,n.jsxs)(f,{children:[(0,n.jsx)("hr",{}),(0,n.jsx)(g,{children:(0,n.jsxs)("div",{children:["(10540) \uacbd\uae30\ub3c4 \uace0\uc591\uc2dc \ub355\uc591\uad6c \ud56d\uacf5\ub300\ud559\ub85c 76",(0,n.jsx)("br",{}),"TEL - (02) 300-0114  FAX - (02) 3158-5769 E-mail - webmaster@kau.ac.kr",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"COPYRIGHT 2012 Korea Aerospace University. All right reserved."]})}),(0,n.jsx)(m,{})]})}var f=o.ZP.div.withConfig({displayName:"Footer__Container",componentId:"u68pnv-0"})(["height:157px;background:#1e1e1e;"]),g=o.ZP.div.withConfig({displayName:"Footer__InfoZone",componentId:"u68pnv-1"})(["padding-top:40px;display:flex;justify-content:flex-start;align-items:center;& > div{margin-left:10vw;color:white;font-weight:400;font-size:15px;@media screen and (max-width:768px){font-size:13px;padding-left:30px;margin-right:15px;}}& > div:nth-of-type(2){border:1px solid white;padding:8px 20px 8px 20px;cursor:pointer;@media screen and (max-width:768px){min-width:80px;font-size:13px;margin-right:30px;}}"]),m=o.ZP.div.withConfig({displayName:"Footer__NewLink",componentId:"u68pnv-2"})(["display:flex;justify-content:space-around;align-items:center;"]),j=o.ZP.div.withConfig({displayName:"Layout__Container",componentId:"jbj1sg-0"})(["margin:0;"]),v=function(t){var e=t.children;return(0,n.jsxs)(j,{children:[(0,n.jsxs)(l.default,{children:[(0,n.jsx)("title",{children:"\ud55c\uad6d\ud56d\uacf5\ub300\ud559\uad50 SW\uc911\uc2ec\uc0ac\uc5c5\ub2e8"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("style",{children:"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap);"})]}),(0,n.jsx)(h,{}),e,(0,n.jsx)(x,{})]})}},6147:function(t,e,i){"use strict";i.r(e);var n=i(5893),r=(i(7294),i(9163)),l=i(3052),o=r.ZP.div.withConfig({displayName:"greeting__Content",componentId:"u3t0x5-0"})(["display:flex;flex-direction:column;& > strong{font-size:17px;font-weight:500;line-height:3;}& > p{line-height:2;}"]),s=r.ZP.p.withConfig({displayName:"greeting__Starting",componentId:"u3t0x5-1"})(["font-size:24px;font-weight:600;"]),d=r.ZP.p.withConfig({displayName:"greeting__Ending",componentId:"u3t0x5-2"})(["text-align:right;font-size:17px;"]);e.default=function(){return(0,n.jsx)(l.Z,{title:"\uc778\uc0bf\ub9d0",state:0,children:(0,n.jsxs)(o,{children:[(0,n.jsx)(s,{children:"\uc548\ub155\ud558\uc2ed\ub2c8\uae4c?"}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"\ud55c\uad6d\ud56d\uacf5\ub300\ud559\uad50 SW\uc911\uc2ec\ub300\ud559\uc0ac\uc5c5\ub2e8\uc740 2021\ub144 4\uc6d4 \uacfc\ud559\uae30\uc220\uc815\ubcf4\ud1b5\uc2e0\ubd80\uc758 SW\uc911\uc2ec\ub300\ud559 \uc9c0\uc6d0\uc0ac\uc5c5 \uc120\uc815\ub418\uc5b4 \ubbf8\ub798 \ubaa8\ube4c\ub9ac\ud2f0 \uc0ac\ud68c\ub97c \uc120\ub3c4\ud560 AI\xb7SW \uc778\uc7ac\ub97c \uc591\uc131\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),(0,n.jsx)("br",{}),(0,n.jsxs)("strong",{children:["< ","AI\uc735\ud569\ub300\ud559"," >"]}),(0,n.jsxs)("p",{children:["\ub2e8\uacfc\ub300\ud559\uc778 \u2018AI \uc735\ud569\ub300\ud559\u2019\uc744 \uc2e0\uc124\ud558\uace0 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc, AI\uc790\uc728\uc8fc\ud589\uc2dc\uc2a4\ud15c\uacf5\ud559\uacfc, \uc2a4\ub9c8\ud2b8\ub4dc\ub860\uacf5\ud559\uacfc\uc758 \ud559\uc0ac\uacfc\uc815\uacfc \uc778\uacf5\uc9c0\ub2a5 \uc11d\xb7\ubc15\uc0ac\uacfc\uc815\uc744 \ud1b5\ud558\uc5ec \uc2dc\ub300\uac00 \uc6d0\ud558\ub294 AI\u22c5SW \uac1c\ubc1c\ub2a5\ub825\uc744 \uac16\ucd98 \uc804\ubb38\uc778\ub825\uacfc \ud56d\uacf5\uc6b0\uc8fc\ud2b9\uc131\ud654\ub300\ud559\uc774\ub77c\ub294 \uac15\uc810\uc744 \uc0b4\ub9b0 \uc5d0\uc5b4 \ubaa8\ube4c\ub9ac\ud2f0 \ubd84\uc57c\uc5d0 \ud2b9\ud654\ub41c AI\xb7SW \uc735\ud569\uc778\ub825\uc744 \ubc30\ucd9c\ud569\ub2c8\ub2e4."," "]}),(0,n.jsx)("br",{}),(0,n.jsxs)("strong",{children:["< ","\uc804\uad50\uc0dd\uc744 \ub300\uc0c1\uc73c\ub85c \ud55c 3\ub2e8\uacc4 AI\xb7SW \uad50\uc721 \uc2e4\uc2dc"," >"]}),(0,n.jsxs)("p",{children:["\uc785\ud559 \uc804 SW \uad50\uc721\uc744 \uc2dc\uc791\uc73c\ub85c, 1\ud559\ub144 \ub300\uc0c1 AI\xb7SW \uc785\ubb38 \uad50\uc721, 2\ud559\ub144 \ub300\uc0c1 \uc804\uacf5\ud2b9\ud654 AI\xb7SW \uad50\uc721\uc73c\ub85c \uc774\uc5b4\uc9c0\ub294 \u20183\ub2e8\uacc4 AI\xb7SW \uad50\uc721\u2019\uc744 \uc804\uad50\uc0dd\uc744 \ub300\uc0c1\uc73c\ub85c \uc2e4\uc2dc\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ud559\uc0dd\uc774 \uc785\ud559 \uc804\xb7\ud6c4\uc5d0 AI\xb7SW \uae30\ucd08 \uad50\uacfc\ubaa9 4\uac1c(7\ud559\uc810)\ub97c \ud544\uc218 \uc774\uc218\ud558\uace0, 2\ud559\ub144\ubd80\ud130\ub294 \uc804\uacf5\ubcc4 \uae30\ubc18\uae30\uc220\uc5d0 \uad00\ub828\ub41c AI\xb7SW \uad50\uacfc\ubaa9\uc744 \uc218\uac15\ud569\ub2c8\ub2e4. AI\ubb3c\ub958, AI\uacbd\uc601, AI\uc2e0\uc18c\uc7ac, AI\ubaa8\ube4c\ub9ac\ud2f0 \ub4f1 AI\uc640 \uae30\uc874\uc758 \uc804\uacf5\uc744 \uacb0\ud569\ud55c \uc735\ud569\xb7\uc5f0\uacc4 \uc804\uacf5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uad50\uc721\uc744 \ud1b5\ud574 \ud559\uc0dd\ub4e4\uc744 \uac01\uc790\uc758 \uc804\uacf5 \uc9c0\uc2dd\uc5d0 \ub354\ud574 AI\xb7SW \ud65c\uc6a9\ub2a5\ub825\uc744 \uac16\ucd98 \u2018AI+X \uc774\uc911\uc5b8\uc5b4\uc778\u2019\uc73c\ub85c \ud0a4\uc6cc\ub0bc \uac83\uc785\ub2c8\ub2e4."," "]}),(0,n.jsx)("br",{}),(0,n.jsxs)("strong",{children:["< ","\uc0b0\ud559\ud611\ub825\uc744 \ud1b5\ud574 \uc2e4\uc804\ud615 AI\xb7SW \uc778\uc7ac\ub85c"," >"]}),(0,n.jsx)("p",{children:"SW \uc911\uc2ec\ub300\ud559 \uc0ac\uc5c5\uc5d0 \ucc38\uc5ec\ud558\uace0 \uc788\ub294 \uad6d\ub0b4 80\uc5ec \uac1c\uc758 \uae30\uc5c5, \uc5f0\uad6c\uc18c, \uc9c0\uc790\uccb4, \uc815\ubd80\uc0b0\ud558\uae30\uad00\uacfc \ud568\uaed8 \ub2e4\uc591\ud55c \uc0b0\ud559\ud611\ub825 \ud504\ub85c\uc81d\ud2b8 \ubc0f \uc778\ud134\uc2ed\uc744 \uc9c4\ud589\ud558\uc5ec \uc2e4\uc804\ud615 \uc778\uc7ac\ub97c \uc591\uc131\ud574\ub0bc \uac83\uc785\ub2c8\ub2e4. \ud2b9\ud788, \ud559\ubd80 3\ub144-\uc778\ud134\uc2ed 1\ub144-\ub300\ud559\uc6d0 1\ub144\uc758 \u20183+1+1 \uc5f0\uacc4\uacfc\uc815\u2019\uc744 \ud1b5\ud574 1\ub144 \uc774\uc0c1\uc758 \uc0b0\uc5c5\uccb4 \uacbd\ud5d8\uc744 \uc313\uac8c \ud558\ub294 \uc0b0\ud559 \ud559\xb7\uc11d\uc0ac \uacfc\uc815\uc744 \uc6b4\uc601\ud558\uc5ec \uc2e4\uc804\ud615 \uc804\ubb38\uc778\ub825\uc744 \ubc30\ucd9c\ud569\ub2c8\ub2e4."}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"\ud55c\uad6d\ud56d\uacf5\ub300\ud559\uad50\ub294 \ud56d\uacf5\uc6b0\uc8fc\ud2b9\uc131\ud654\ub300\ud559\uc774\ub77c\ub294 \ud130\uc804 \uc704\uc5d0 SW\uc911\uc2ec\ub300\ud559\uc0ac\uc5c5\uc744 \uacc4\uae30\ub85c 4\ucc28\uc0b0\uc5c5\ud601\uba85\uc2dc\ub300 \ubbf8\ub798 \ubaa8\ube4c\ub9ac\ud2f0 \uc0ac\ud68c\ub97c \uc120\ub3c4\ud558\ub294 \ub300\ud559\uc73c\ub85c \ub3c4\uc57d\ud558\uace0\uc790 \ud569\ub2c8\ub2e4. \uc9c0\uc18d\uc801\uc778 \uad00\uc2ec\uacfc \uc131\uc6d0\uc744 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4."}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(d,{children:["\ud55c\uad6d\ud56d\uacf5\ub300\ud559\uad50 SW\uc911\uc2ec\ub300\ud559 \uc0ac\uc5c5\ub2e8\uc7a5 ",(0,n.jsx)("strong",{children:"\ucd5c\uc601\uc2dd"})]})]})})}},6798:function(t,e,i){"use strict";i.d(e,{s:function(){return n}});var n=[{title:"\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",url:"/introduce/greeting",subElements:[{title:"\uc778\uc0bf\ub9d0",url:"/introduce/greeting"},{title:"\uc0ac\uc5c5\ubaa9\ud45c",url:"/introduce/business_model"},{title:"\uc870\uc9c1\uad6c\uc131",url:"/introduce/organization"},{title:"contact",url:"/introduce/contact"}]},{title:"SW\uc804\uacf5\uad50\uc721",url:"/major_education/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/major_education/calendar"},{title:"\uc18c\uac1c",url:"/major_education/introduce"},{title:"\uc624\ud508\uc18c\uc2a4",url:"/major_education/open_source"},{title:"\ub9c8\uc77c\ub9ac\uc9c0",url:"/major_education/mileage"},{title:"\ube44\uad50\uacfc",url:"/major_education/non_discipline"}]},{title:"\uc0b0\ud559\ud611\ub825",url:"/collab_industry/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/collab_industry/calendar"},{title:"\uc18c\uac1c",url:"/collab_industry/introduce"},{title:"\uc0b0\ud559\ud504\ub85c\uc81d\ud2b8",url:"/collab_industry/project"},{title:"\uc778\ud134\uc2ed",url:"/collab_industry/internship"},{title:"\uae00\ub85c\ubc8c",url:"/collab_industry/global"}]},{title:"SW\uae30\ucd08\xb7\uc735\ud569\uad50\uc721",url:"/basic_education/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/basic_education/calendar"},{title:"\uc18c\uac1c",url:"/basic_education/introduce"},{title:"\uc785\ud559\uc804 \uad50\uc721",url:"/basic_education/before_entrance"},{title:"\uae30\ucd08\uad50\uc591\uad50\uc721",url:"/basic_education/electives"},{title:"\uc735\ud569\uc804\uacf5",url:"/basic_education/additive_major"}]},{title:"SW\uac00\uce58\ud655\uc0b0",url:"/influences/introduce",subElements:[{title:"\uce98\ub9b0\ub354",url:"/influences/calendar"},{title:"\uc18c\uac1c",url:"/influences/introduce"},{title:"\ucd08\uc911\uace0",url:"/influences/juniors"},{title:"SW\ud589\uc0ac(\uad50\ub0b4)",url:"/influences/events"}]}]},7975:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/introduce/greeting",function(){return i(6147)}])}},function(t){t.O(0,[140,774,888,179],(function(){return e=7975,t(t.s=e);var e}));var e=t.O();_N_E=e}]);