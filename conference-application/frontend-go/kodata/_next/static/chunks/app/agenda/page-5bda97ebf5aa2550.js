(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{2205:function(e,n,a){Promise.resolve().then(a.bind(a,3556))},3556:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return d}});var c=a(9268),s=a(7580),i=a.n(s);a(6006);var t=a(8700),l=a(7074);async function d(){return(0,c.jsxs)("main",{className:i().main,children:[(0,c.jsx)("div",{className:"".concat(i().hero," "),children:(0,c.jsx)("div",{className:"grid content noMargin",children:(0,c.jsx)("div",{className:"col full",children:(0,c.jsxs)("h1",{children:[(0,c.jsx)(l.default,{number:"1",brown:!0})," Agenda"]})})})}),(0,c.jsx)("div",{className:"grid content noMargin",children:(0,c.jsx)("div",{className:"col full",children:(0,c.jsx)("div",{children:(0,c.jsx)(t.Z,{})})})})]})}},8700:function(e,n,a){"use strict";a.d(n,{Z:function(){return r}});var c=a(9268),s=a(7580),i=a.n(s),t=a(6006),l=a(9508),d=function(e){let{key:n,id:a,name:s,day:d,time:r,author:o,description:C,admin:h,handleArchive:u}=e,[g,_]=(0,t.useState)(!1),x=e=>{u(e)},f=()=>{g?_(!1):_(!0)};return(0,c.jsxs)("div",{onClick:()=>f(),className:"".concat(i().agendaItem,"  ").concat(g?i().open:" "," "),children:[(0,c.jsxs)("div",{className:i().openTag,children:[!g&&(0,c.jsx)(c.Fragment,{children:"Click for details"}),g&&(0,c.jsx)(c.Fragment,{children:"Close"})]}),(0,c.jsxs)("div",{className:"AgendaItem__date",children:[(0,c.jsx)("div",{className:"AgendaItem__day",children:d}),(0,c.jsx)("div",{className:"AgendaItem__time",children:r})]}),(0,c.jsxs)("div",{className:"AgendaItem__data",children:[(0,c.jsx)("h4",{children:s}),(0,c.jsxs)("p",{className:"p p-s",children:[" ",o]}),(0,c.jsx)("div",{className:i().description,children:(0,c.jsx)("p",{children:C})})]}),h&&(0,c.jsx)(l.default,{clickHandler:()=>x(a),children:"Archive"})]})},r=function(e){let[n,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(""),{day:r,highlights:o,admin:C}=e,[h,u]=(0,t.useState)(!1),g=[{Id:"ABC-123",Title:"Cached Entry",Author:"Cached Author",Description:"Cached Content"}],_=()=>{console.log("Querying /agenda/"),fetch("/api/agenda/").then(e=>e.json()).then(e=>{l(e),u(!1)}).catch(e=>{l(g),console.log(e)})},x=e=>{u(!0),a(!1),console.log("Archiving Agenda Item ..."+e),fetch("/api/agenda/"+e,{method:"DELETE",headers:{accept:"application/json"}}).then(e=>e.json()).then(()=>{_(),u(!1)}).catch(e=>{console.log(e),u(!1),a(!0)})};return(0,t.useEffect)(()=>{u(!0),_()},[l]),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"".concat(i().agendaList,"  ").concat(C?i().backoffice:" "," "),children:[s&&s.length>0&&s.map((e,n)=>(0,c.jsx)(d,{name:e.Title,id:e.Id,description:e.Description,author:e.Author,admin:C,handleArchive:x},n)),s&&0==s.length&&(0,c.jsx)("p",{children:"There are no confirmed talks just yet."})]})})}},7074:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return t}});var c=a(9268),s=a(9302),i=a.n(s);function t(e){let{number:n,orange:a,green:s,blue:t,brown:l,brand:d}=e;var r=(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{width:"164",height:"107",viewBox:"0 0 164 107",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M82 44.9447C79.8628 48.159 77.1002 50.9216 73.8858 53.0588C77.1002 55.196 79.8628 57.9586 82 61.173C84.1372 57.9586 86.8998 55.196 90.1142 53.0588C86.8998 50.9216 84.1372 48.159 82 44.9447ZM133.428 86.7784C133.968 86.8083 134.512 86.8235 135.059 86.8235C151.043 86.8235 164 73.8661 164 57.8824C164 41.8986 151.043 28.9412 135.059 28.9412C135.059 12.9574 122.101 0 106.118 0C96.0511 0 87.1849 5.13952 82 12.9377C76.8151 5.13952 67.9489 0 57.8824 0C41.8986 0 28.9412 12.9574 28.9412 28.9412C12.9574 28.9412 0 41.8986 0 57.8824C0 73.8661 12.9574 86.8235 28.9412 86.8235C29.4885 86.8235 30.0322 86.8083 30.5721 86.7784C34.5323 98.0426 45.2643 106.118 57.8824 106.118C67.9489 106.118 76.8151 100.978 82 93.18C87.1849 100.978 96.0511 106.118 106.118 106.118C118.736 106.118 129.468 98.0426 133.428 86.7784Z",fill:"#0040E5"})})}),o=(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{width:"360",height:"330",viewBox:"0 0 360 330",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M139.767 165C164.017 148.876 180 121.305 180 90C180 121.305 195.983 148.876 220.233 165C196.241 180.952 180.342 208.109 180.005 239H179.995C179.658 208.109 163.759 180.952 139.767 165ZM136.853 316.858C123.205 325.195 107.164 330 90 330C40.2944 330 5.86807e-06 289.706 3.69537e-06 240C0 208.695 15.9826 181.124 40.2331 165C15.9826 148.876 5.06374e-06 121.305 3.69537e-06 90C0 40.2944 40.2944 0 90 -3.93402e-06C106.813 -4.66894e-06 122.549 4.61021 136.013 12.6355C149.811 4.43417 165.677 0 182 0C197.539 0 212.663 4.01834 225.984 11.4795C238.997 4.16912 254.012 -2.6686e-06 270 -3.93402e-06C319.706 -6.10673e-06 360 40.2944 360 90C360 121.305 344.017 148.876 319.767 165C344.017 181.124 360 208.695 360 240C360 289.706 319.706 330 270 330C253.645 330 238.309 325.638 225.093 318.013C211.99 325.158 197.193 329 182 329C166.007 329 150.454 324.743 136.853 316.858Z",fill:"black"})})}),C=(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("svg",{width:"330",height:"452",viewBox:"0 0 330 452",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.86805e-06 0C5.78131e-06 23.8695 9.48212 46.7613 26.3604 63.6396C30.6322 67.9115 35.2893 71.7095 40.25 75C35.2893 78.2905 30.6323 82.0885 26.3604 86.3604C9.48212 103.239 3.60419e-06 126.131 0 150C5.78131e-06 173.869 9.48212 196.761 26.3604 213.64C31.072 218.351 36.2522 222.486 41.7915 226C36.2522 229.514 31.072 233.649 26.3604 238.36C9.48212 255.239 3.60419e-06 278.131 0 302C5.78131e-06 325.869 9.48212 348.761 26.3604 365.64C30.6322 369.911 35.2893 373.71 40.25 377C35.2893 380.29 30.6323 384.089 26.3604 388.36C9.48212 405.239 3.60419e-06 428.13 0 452H90H150H180H240H330C330 428.131 320.518 405.239 303.64 388.36C299.368 384.089 294.711 380.29 289.75 377C294.711 373.71 299.368 369.911 303.64 365.64C320.518 348.761 330 325.87 330 302C330 278.131 320.518 255.239 303.64 238.36C298.928 233.649 293.748 229.514 288.208 226C293.748 222.486 298.928 218.351 303.64 213.64C320.518 196.761 330 173.87 330 150C330 126.131 320.518 103.239 303.64 86.3604C299.368 82.0885 294.711 78.2905 289.75 75C294.711 71.7095 299.368 67.9115 303.64 63.6396C320.518 46.7614 330 23.8695 330 3.05176e-05L240 7.39074e-06L150 0L90 7.39074e-06L7.86805e-06 0ZM165 49.75C161.71 54.7107 157.911 59.3678 153.64 63.6396C149.368 67.9115 144.711 71.7096 139.75 75C144.711 78.2905 149.368 82.0885 153.64 86.3604C157.911 90.6323 161.71 95.2893 165 100.25C168.29 95.2893 172.089 90.6323 176.36 86.3604C180.632 82.0885 185.289 78.2905 190.25 75C185.289 71.7095 180.632 67.9115 176.36 63.6396C172.089 59.3678 168.29 54.7107 165 49.75ZM191.792 226C186.252 222.486 181.072 218.351 176.36 213.64C172.089 209.368 168.29 204.711 165 199.75C161.71 204.711 157.911 209.368 153.64 213.64C148.928 218.351 143.748 222.486 138.208 226C143.748 229.514 148.928 233.649 153.64 238.36C157.911 242.632 161.71 247.289 165 252.25C168.29 247.289 172.089 242.632 176.36 238.36C181.072 233.649 186.252 229.514 191.792 226ZM165 351.75C161.71 356.711 157.911 361.368 153.64 365.64C149.368 369.911 144.711 373.71 139.75 377C144.711 380.29 149.368 384.089 153.64 388.36C157.911 392.632 161.71 397.289 165 402.25C168.29 397.289 172.089 392.632 176.36 388.36C180.632 384.089 185.289 380.29 190.25 377C185.289 373.71 180.632 369.911 176.36 365.64C172.089 361.368 168.29 356.711 165 351.75Z",fill:"black"})})});return(0,c.jsxs)("span",{className:"".concat(i().cloud,"  ").concat(d?i().brand:" ","  ").concat(t?i().blue:" ","    ").concat(a?i().orange:" ","  ").concat(l?i().brown:" ","  ").concat(s?i().green:" "),children:[1==n&&(0,c.jsx)(c.Fragment,{children:r}),2==n&&(0,c.jsx)(c.Fragment,{children:o}),3==n&&(0,c.jsx)(c.Fragment,{children:C})]})}},9508:function(e,n,a){"use strict";a.r(n);var c=a(9268),s=a(5942),i=a.n(s),t=a(5846),l=a.n(t);n.default=function(e){var n;let{children:a,link:s,external:t,inline:d,clickHandler:r,small:o,main:C,disabled:h,inverted:u}=e;return n=s?t?(0,c.jsxs)("a",{href:s,target:"_blank",children:["  ",(0,c.jsx)("span",{children:a})," "]}):(0,c.jsxs)(l(),{href:s,children:["  ",(0,c.jsx)("span",{children:a})," "]}):r?(0,c.jsxs)(l(),{className:"__container",href:"#",onClick:r,children:[" ",(0,c.jsx)("span",{children:a}),"  "]}):(0,c.jsxs)(l(),{href:"#",className:"__container",children:["  ",(0,c.jsx)("span",{children:a})," "]}),(0,c.jsx)("div",{className:i().button,children:n})}},9302:function(e){e.exports={cloud:"cloud_cloud__ns_Yy",orange:"cloud_orange__1xS_9",green:"cloud_green__h6_Zs",brown:"cloud_brown__Cg1ac",brand:"cloud_brand___EqxG"}},5942:function(e){e.exports={button:"button_button__eJLCR"}},7580:function(e){e.exports={main:"agenda_main__vSYVy",hero:"agenda_hero__O641h",agendaList:"agenda_agendaList__JIcrA",backoffice:"agenda_backoffice__sc1wC",agendaItem:"agenda_agendaItem__FCiJA",open:"agenda_open__QEn0H",openTag:"agenda_openTag___VmLf",description:"agenda_description__7506d"}}},function(e){e.O(0,[629,253,488,744],function(){return e(e.s=2205)}),_N_E=e.O()}]);