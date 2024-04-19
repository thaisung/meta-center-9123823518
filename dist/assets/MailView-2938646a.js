import{_ as h,u,o as i,c as a,a as t,w as l,v as n,t as c,b as y,d as m,F as x,r as p}from"./index-985aa3c6.js";const b={data(){return{showCopied:""}},setup(){return{counter:u()}},mounted:function(){this.counter.F_Export_mail_available()},computed:{},methods:{copyText(_,o){const r=document.createElement("textarea");r.value=_,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),this.showCopied=o,setTimeout(()=>{this.showCopied=""},500)}},components:{}},f={class:"flex w-full h-full bg-gray-200"},w={class:"bg-gray-200 w-[400px] min-h-full px-2 py-2 flex flex-col items-center"},v={class:"relative h-[60px] bg-gray-400 py-3 rounded-xl mb-2 w-full flex justify-center items-center text-[20px] font-semibold text-green-500"},C={class:"loader"},k=t("p",{class:""},"Get new Mail",-1),V=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16"},[t("path",{fill:"white",d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),M=[k,V],E={class:"flex flex-col gap-1 mt-2 justify-center items-center"},T=t("p",{class:"text-[16px] font-bold"},"Mail is available:",-1),H={class:"flex flex-col"},B={class:"flex gap-1 text-[14px]"},F=t("p",{class:"text-[#22c55e]"},"Get Inbox",-1),L=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"16"},[t("path",{fill:"#22c55e",d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),j=[F,L],z={class:"flex justify-between items-center bg-gray-300 px-2 py-1 rounded-full mt-2 w-full"},S=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"14"},[t("path",{fill:"white",d:"M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"})],-1),I=[S],D={class:"flex flex-col bg-gray-200 w-full min-h-full border-l-[1px] border-gray-300 px-2 py-2"},G={class:"flex gap-2 items-center w-full bg-gray-700 px-2 py-2 text-gray-100"},K=t("p",null,"Inbox content :",-1),N={id:"get_inbox_mail",class:"text-lime-500"},U=t("div",{class:"loader1"},null,-1),q={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},A=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-4 py-3"}," Sender "),t("th",{scope:"col",class:"px-4 py-3"}," Title "),t("th",{scope:"col",class:"px-4 py-3"}," Content "),t("th",{scope:"col",class:"px-4 py-3"}," Time "),t("th",{scope:"col",class:"px-4 py-3"}," Code ")])],-1),J={class:"odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"},O={scope:"row",class:"px-4 py-3 font-semibold text-gray-900 whitespace-nowrap dark:text-white"},P={class:"px-4 py-4 text-gray-900"},Q={class:"cursor-pointer px-4 py-4 text-gray-900"},R={class:"cursor-pointer px-4 py-4 text-gray-900"},W={class:"flex flex-col gap-2 justify-center items-center px-4 py-6"},X={class:"flex items-center justify-between w-full"},Y={class:"text-gray-900"},Z={class:"flex relative justify-center items-center"},$=["onClick"],tt=t("path",{fill:"balck",d:"M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"},null,-1),et=[tt],ot={class:"bottom-5 absolute text-gray-200 bg-gray-600 px-1 py-1 rounded-md"},st={class:"flex justify-center items-center w-full h-full bg-gray-300"},lt=t("p",{class:"font-semibold text-[18px]"},"Empty Inbox",-1),nt=[lt];function ct(_,o,r,e,it,g){return i(),a("div",f,[t("div",w,[l(t("label",v,[l(t("p",{id:"get_mail_new",class:"text-slate-600"},c(e.counter.mail_get_new),513),[[n,e.counter.mail_get_new]]),l(t("div",C,null,512),[[n,!e.counter.mail_get_new]])],512),[[n,e.counter.loading_get_mail]]),t("button",{onClick:o[0]||(o[0]=s=>{e.counter.F_Export_mail_new()}),class:"flex items-center justify-center gap-2 px-2 py-2 bg-green-600 hover:bg-green-700 font-bold text-gray-100 rounded-2xl"},M),l(t("div",E,[T,t("div",H,[t("div",B,[t("p",null,c(e.counter.mail_get_available),1),t("button",{onClick:o[1]||(o[1]=s=>e.counter.F_Export_inbox_available()),class:"flex items-center justify-between gap-2 font-bold text-gray-100 rounded-2xl"},j)])])],512),[[n,e.counter.mail_get_available]]),t("div",z,[l(t("input",{id:"input_name","onUpdate:modelValue":o[2]||(o[2]=s=>e.counter.mail_get_search=s),onKeyup:o[3]||(o[3]=m(s=>{e.counter.F_Export_inbox_mail_search()},["enter"])),type:"text",placeholder:"Enter email to get inbox",class:"text-[15px] border-none outline-none bg-transparent bg-none"},null,544),[[y,e.counter.mail_get_search]]),t("div",{onClick:o[4]||(o[4]=s=>{e.counter.F_Export_inbox_mail_search()}),class:"px-1 py-1 bg-gray-700 rounded-full cursor-pointer w-[24px] h-[24px]",title:"Thêm"},I)])]),t("div",D,[l(t("div",G,[K,t("p",N,c(e.counter.mail_inbox),1),U],512),[[n,e.counter.mail_inbox]]),l(t("table",q,[A,t("tbody",null,[(i(!0),a(x,null,p(e.counter.data_export_inbox,(s,at)=>(i(),a("tr",J,[t("th",O,c(s.Sender),1),t("td",P,c(s.Title),1),t("td",Q,c(s.Content),1),t("td",R,c(s.Time),1),t("td",W,[(i(!0),a(x,null,p(s.Code,(d,rt)=>(i(),a("div",X,[t("p",Y,c(d),1),t("div",Z,[(i(),a("svg",{onClick:dt=>g.copyText(d,d),class:"cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:"16"},et,8,$)),l(t("p",ot,"Copied",512),[[n,this.showCopied==d]])])]))),256))])]))),256))])],512),[[n,e.counter.data_export_inbox&&e.counter.data_export_inbox.length>0]]),l(t("div",st,nt,512),[[n,e.counter.data_export_inbox&&e.counter.data_export_inbox.length==0]])])])}const xt=h(b,[["render",ct]]);export{xt as default};
