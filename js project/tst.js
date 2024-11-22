// ==UserScript==
// @name         时间统计
// @author       冰红茶
// @version      1.0.0
// @description  明天能开团吗？几点开？
// @timestamp    1674477074
// 2023/1/23
// @license      MIT
// @homepageURL  https://github.com/ThunLoilu/seal_dice_tool/tree/main
// ==/UserScript==

(()=>{function S(){let s=seal.ext.find("timestatistics");s||(s=seal.ext.new("timestatistics","\u51B0\u7EA2\u8336","1.0.0"),seal.ext.register(s)),seal.ext.registerStringConfig(s,"\u95EE\u9898\u56DE\u590D\u524D\u7F00",`\u95EE\u9898:
`),seal.ext.registerStringConfig(s,"\u95EE\u9898\u56DE\u590D\u540E\u7F00",`
\u8BF7\u4F7F\u7528\u547D\u4EE4.tst answer <ans1> <ans2> \u56DE\u7B54
\u5982: .tst answer 13 19 \u8868\u793A13\u523019\u4E4B\u95F4`),seal.ext.registerStringConfig(s,"\u5E2E\u52A9",`.tst ask <\u7528\u6237\u6570\u91CF> <\u95EE\u9898>  \u5F00\u59CB\u7EDF\u8BA1\u95EE\u9898\u7684\u7B54\u6848
.tst answer <\u7B54\u68481> <\u7B54\u68482>  \u8F93\u5165\u7B54\u6848
.tst clear  \u6E05\u9664\u7EDF\u8BA1\u6570\u636E
.tst add <\u7528\u6237\u6570\u91CF>  \u4FEE\u6539\u7528\u6237\u6570\u91CF`);let _=seal.ext.newCmdItemInfo();_.name="timestatistics",_.help=seal.ext.getStringConfig(s,"\u5E2E\u52A9"),_.solve=(e,a,i)=>{let n=i.getArgN(1);switch(n){case"help":{let t=seal.ext.newCmdExecuteResult(!0);return t.showHelp=!0,t}default:{if(n==="question"||n==="quest"||n==="ask"){let t=seal.ext.getStringConfig(s,"\u95EE\u9898\u56DE\u590D\u524D\u7F00"),u=seal.ext.getStringConfig(s,"\u95EE\u9898\u56DE\u590D\u540E\u7F00"),g=Number(i.getArgN(2)),f=i.getArgN(3);isNaN(g)?seal.replyToSender(e,a,"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7528\u6237\u6570\u91CF"):f?(seal.vars.intSet(e,"$g_tst_min",-1061109567),seal.vars.intSet(e,"$g_tst_max",-1061109567),seal.vars.intSet(e,"$g_tst_user_num",g),seal.vars.strSet(e,"$g_tst_question",f),seal.replyToSender(e,a,t+f+u)):seal.replyToSender(e,a,"\u8BF7\u8F93\u5165\u95EE\u9898")}else if(n==="answer"||n==="ans"){let t=Number(i.getArgN(2)),u=Number(i.getArgN(3)),g=seal.vars.intGet(e,"$g_tst_user_num")[0],f=seal.vars.strGet(e,"$g_tst_question")[0];if(isNaN(t)||isNaN(u))seal.replyToSender(e,a,"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u7B54\u6848");else{let r=seal.vars.intGet(e,"$g_tst_min")[0],l=seal.vars.intGet(e,"$g_tst_max")[0];r==-1061109567&&(r=1061109567),l==-1061109567&&(l=0),r=Math.min(r,u),l=Math.max(l,t),seal.vars.intSet(e,"$g_tst_min",r),seal.vars.intSet(e,"$g_tst_max",l),seal.vars.intSet(e,"$g_tst_user_num",--g),seal.replyToSender(e,a,`\u5DF2\u6536\u5230\u7B54\u6848: ${t}-${u}`),g==0&&(l<=r?seal.replyToSender(e,a,`\u95EE\u9898: ${f}
\u7B54\u6848: ${l}-${r}`):seal.replyToSender(e,a,`\u95EE\u9898: ${f}
\u7B54\u6848: \u51FA\u73B0\u77DB\u76FE`))}}else if(n==="clear")seal.vars.intSet(e,"$g_tst_min",-1061109567),seal.vars.intSet(e,"$g_tst_max",-1061109567),seal.vars.intSet(e,"$g_tst_user_num",-1061109567),seal.vars.strSet(e,"$g_tst_question",""),seal.replyToSender(e,a,"\u5DF2\u6E05\u9664\u7EDF\u8BA1\u6570\u636E");else if(n==="add"){let t=Number(i.getArgN(2))+(Number(seal.vars.intGet(e,"$g_tst_user_num")[0])||0);isNaN(t)?seal.replyToSender(e,a,"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u56DE\u590D\u6570\u91CF"):(seal.vars.intSet(e,"$g_tst_user_num",t),seal.replyToSender(e,a,`\u5DF2\u4FEE\u6539\u56DE\u590D\u6570\u91CF\u4E3A${t}`))}return seal.ext.newCmdExecuteResult(!0)}}},s.cmdMap.timestatistics=_,s.cmdMap.tst=_}S();})();
