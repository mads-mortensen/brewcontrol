!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){n(16)},16:function(e,t){new Vue({el:"#main_nav",data:{navigation:[{href:"/",name:"Home"},{href:"/beertestcrud/",name:"Beer test-CRUD"}]},computed:{activePage:function(){return window.location.href.split("/")[3]}}})}});