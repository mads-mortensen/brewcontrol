!function(e){function t(s){if(r[s])return r[s].exports;var n=r[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){var s=r(8);vue=new Vue({el:"body",ready:function(){this.getAllBeers()},data:{beers:[],beer_headers:[],beer_headers_ignore:["_id","__v"],Beer:s},computed:{isThisPage:function(e){return!0}},methods:{getAllBeers:function(){self=this,$.ajax({dataType:"json",url:"/beers/",success:function(e,t){self.beers.length=0,"success"==t&&($(e).each(function(e,t){self.beers.push(new self.Beer(t))}),self.setBeerHeaders())},timeout:2e3}).fail(function(e,t){"timeout"==t&&console.error("timed out to API endpoint '/beers/'")})},createNewBeer:function(){var e=new this.Beer({name:"new beer"});e.save(!1,this.getAllBeers)},setBeerHeaders:function(){if(this.beer_headers.length=0,this.beers.length>0)for(name in this.beers[0].data)-1==this.beer_headers_ignore.indexOf(name)&&this.beer_headers.push(name)}}})},8:function(e,t){e.exports=function(e){var t=this;this.data=e?e:!1,this.save=function(e,r){$.ajax({method:"PUT",url:"/beers/",data:t.data}).done(function(e){console.log("saved beer",e),e&&(t.data=e),r&&r()})},this["delete"]=function(e,r){$.ajax({method:"DELETE",url:"/beers/",data:t.data}).done(function(e){e&&(t.data=!1,r&&r())})}}}});