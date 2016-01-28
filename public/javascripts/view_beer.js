!function(o){function e(c){if(r[c])return r[c].exports;var n=r[c]={exports:{},id:c,loaded:!1};return o[c].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=o,e.c=r,e.p="",e(0)}([function(o,e,r){function c(o,e){l=new Vue({el:"body",data:{beer:o,components:e},components:{"bc-color":s,"bc-developer-bar":a}})}function n(o,e){$.ajax({method:"GET",dataType:"JSON",url:"/beers/"+o,success:function(o){e(new d(o))}})}function t(o,e){$.ajax({method:"GET",dataType:"JSON",url:"/components/beer/"+o,success:function(o){var r=[];$(o).each(function(o,e){r.push(new p(e))}),e(r)}})}function i(o){t(o.data._id,function(e){$(e).each(function(o,e){var r=e.data.name.replace("_","-");$(u).append("<"+r+" :beer='beer' :component_data='components["+o+"]'></"+r+">")}),c(o,e)})}var l,s=r(1),a=r(8),d=r(13),p=r(14),u=$("#bc-components");n(BEER_ID,i)},function(o,e,r){var c,n;r(2),c=r(6),n=r(7),o.exports=c||{},o.exports.__esModule&&(o.exports=o.exports["default"]),n&&(("function"==typeof o.exports?o.exports.options:o.exports).template=n)},function(o,e,r){var c=r(3);"string"==typeof c&&(c=[[o.id,c,""]]);r(5)(c,{});c.locals&&(o.exports=c.locals)},function(o,e,r){e=o.exports=r(4)(),e.push([o.id,".bc-color-colorbox{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.bc-color-description{-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;padding:0 1em}bc-color{background-color:#6c6d7a;display:inline-block}","",{version:3,sources:["/../../../../../vue-loader/lib/style-rewriter.js?id=_v-0787c334&file=bc_color.vue!/Users/mads/Google Drive/sites/brewcontrol/node_modules/vue-loader/lib/selector.js?type=style&index=0!/Users/mads/Google Drive/sites/brewcontrol/vue_components/bc_color.vue.style"],names:[],mappings:"AACA,mBACA,mBAAA,eAAA,WAAA,MAAA,CACA,AACA,sBACA,mBAAA,eAAA,WAAA,OAAA,AACA,aAAA,CACA,AACA,SACA,yBAAA,AACA,oBAAA,CACA",file:"bc_color.vue",sourcesContent:['<style>\n	.bc-color-colorbox {\n		flex: 1;\n	}\n	.bc-color-description {\n		flex: 2;\n		padding: 0 1em 0 1em;\n	}\n	bc-color {\n		background-color: #6C6D7A;\n		display: inline-block;\n	}\n</style>\n\n<template lang=\'jade\'>\nbc-color.bc-component.large\n	.bc-color-colorbox(v-bind:style="{ backgroundColor: beerColorHex }")\n	.bc-color-description\n		h1 Beer color\n		p Color description: <b>{{ beerColorDescription }}</b>\n		p EBC: <b>{{ beer.data.target_ebc }}</b>\n</template>\n\n<script>\n	export default {\n		props: [\'beer\', \'component_data\'],\n		data: function() {\n			return {\n				data: $.parseJSON(this.component_data.data.data), //TODO: This is.. data. and stupid to parse json here :(\n				colors: {\n					0	: { colorCode: "ffffff", colorDescription: "	White"},\n					0.5	: { colorCode: "fbf0cb", colorDescription: "Champagne"},\n					1	: { colorCode: "f7e1a1", colorDescription: "Candleglow"},\n					1.5	: { colorCode: "f4d380", colorDescription: "Broadway Lights"},\n					2	: { colorCode: "f0c566", colorDescription: "Cream Can"},\n					2.5	: { colorCode: "edb950", colorDescription: "Casablanca"},\n					3	: { colorCode: "e9ad3f", colorDescription: "Tulip Tree"},\n					3.5	: { colorCode: "e5a231", colorDescription: "Fire Bush"},\n					4	: { colorCode: "e19726", colorDescription: "Buttercup"},\n					4.5	: { colorCode: "dd8d1d", colorDescription: "Zest"},\n					5	: { colorCode: "d98416", colorDescription: "Golden Bell"},\n					5.5	: { colorCode: "d57b11", colorDescription: "Meteor"},\n					6	: { colorCode: "d1730c", colorDescription: "Dark Goldenrod"},\n					6.5	: { colorCode: "cd6c08", colorDescription: "Indochine"},\n					7	: { colorCode: "c86505", colorDescription: "Alloy Orange"},\n					7.5	: { colorCode: "c45e03", colorDescription: "Tawny"},\n					8	: { colorCode: "c05801", colorDescription: "Rose of Sharon"},\n					8.5	: { colorCode: "bc5200", colorDescription: "Ruddy Brown"},\n					9	: { colorCode: "b74d00", colorDescription: "Mahogany"},\n					9.5	: { colorCode: "b34800", colorDescription: "Fire"},\n					10	: { colorCode: "af4300", colorDescription: "Orange"},\n					10.5	: { colorCode: "ab3f00", colorDescription: "Dark Orange"},\n					11	: { colorCode: "a73b00", colorDescription: "Chinese Red"},\n					11.5	: { colorCode: "a33700", colorDescription: "Quora"},\n					12	: { colorCode: "9f3400", colorDescription: "Sangria"},\n					12.5	: { colorCode: "9b3000", colorDescription: "Dark Orange-Red"},\n					13	: { colorCode: "972d00", colorDescription: "Totem Pole"},\n					14	: { colorCode: "8f2800", colorDescription: "Peru Tan"},\n					15	: { colorCode: "882300", colorDescription: "Red Beech"},\n					16	: { colorCode: "811f00", colorDescription: "Maroon"},\n					17	: { colorCode: "7b1b00", colorDescription: "Pueblo"},\n					18	: { colorCode: "741800", colorDescription: "Cedar Wood"},\n					19	: { colorCode: "6e1500", colorDescription: "Barn Red"},\n					20	: { colorCode: "681200", colorDescription: "Rosewood"},\n					21	: { colorCode: "631000", colorDescription: "Dark Red"},\n					22	: { colorCode: "5e0e00", colorDescription: "Red Oxide"},\n					23	: { colorCode: "590c00", colorDescription: "Rustic Red"},\n					24	: { colorCode: "540b00", colorDescription: "Burnt Maroon"},\n					25	: { colorCode: "500900", colorDescription: "Pheasant Red"},\n					26	: { colorCode: "4c0800", colorDescription: "Brown Pod"},\n					27	: { colorCode: "480700", colorDescription: "Temptress"},\n					28	: { colorCode: "440600", colorDescription: "Dark Sienna"},\n					29	: { colorCode: "410500", colorDescription: "Black Bean"},\n					30	: { colorCode: "3d0500", colorDescription: "Dark Bronze"},\n					31	: { colorCode: "3a0400", colorDescription: "Chocolate"},\n					32	: { colorCode: "370400", colorDescription: "Autumn Maple"},\n					33	: { colorCode: "340300", colorDescription: "Dark Cabernet"},\n					34	: { colorCode: "320300", colorDescription: "Titian Maroon"},\n					35	: { colorCode: "2f0200", colorDescription: "Sepia Black"},\n					36	: { colorCode: "2d0200", colorDescription: "Dark Gold Wing"},\n					37	: { colorCode: "2a0200", colorDescription: "Zinnwaldite Brown"},\n					38	: { colorCode: "280100", colorDescription: "Diesel"},\n					39	: { colorCode: "260100", colorDescription: "Licorice"},\n					40	: { colorCode: "240100", colorDescription: "Black"},\n					50	: { colorCode: "160000", colorDescription: "Smoky Black"},\n					65	: { colorCode: "0d0000", colorDescription: "Coal Black"},\n					80	: { colorCode: "000000", colorDescription: "Moonlight Black"}\n				}\n			}\n		},\n		computed: {\n			beerColorHex: function() {\n				return "#" + this.calculatedColor().colorCode;\n			},\n			beerColorDescription: function() {\n				return (this.data.color_description) ? this.data.color_description : this.calculatedColor().colorDescription;\n			}\n		},\n		methods: {\n			EbcToSrm: function(ebc) {\n				console.log("ebc: " + ebc + " - srm: " + (ebc * 0.508));\n				return ebc * 0.508;\n			},\n			calculatedColor: function() {\n				var colorSrm = this.EbcToSrm(this.beer.data.target_ebc);\n				var closestValue = 100000;\n				for (var value in this.colors) {\n					if (Math.abs(parseFloat(value) - parseFloat(colorSrm)) < Math.abs(parseFloat(closestValue) - parseFloat(colorSrm))) {\n						closestValue = value;\n					}\n				}\n\n				return this.colors[closestValue];\n			}\n		}\n	}\n</script>\n'],sourceRoot:"webpack://"}])},function(o,e){o.exports=function(){var o=[];return o.toString=function(){for(var o=[],e=0;e<this.length;e++){var r=this[e];r[2]?o.push("@media "+r[2]+"{"+r[1]+"}"):o.push(r[1])}return o.join("")},o.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var c={},n=0;n<this.length;n++){var t=this[n][0];"number"==typeof t&&(c[t]=!0)}for(n=0;n<e.length;n++){var i=e[n];"number"==typeof i[0]&&c[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),o.push(i))}},o}},function(o,e,r){function c(o,e){for(var r=0;r<o.length;r++){var c=o[r],n=f[c.id];if(n){n.refs++;for(var t=0;t<n.parts.length;t++)n.parts[t](c.parts[t]);for(;t<c.parts.length;t++)n.parts.push(a(c.parts[t],e))}else{for(var i=[],t=0;t<c.parts.length;t++)i.push(a(c.parts[t],e));f[c.id]={id:c.id,refs:1,parts:i}}}}function n(o){for(var e=[],r={},c=0;c<o.length;c++){var n=o[c],t=n[0],i=n[1],l=n[2],s=n[3],a={css:i,media:l,sourceMap:s};r[t]?r[t].parts.push(a):e.push(r[t]={id:t,parts:[a]})}return e}function t(o,e){var r=D(),c=v[v.length-1];if("top"===o.insertAt)c?c.nextSibling?r.insertBefore(e,c.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),v.push(e);else{if("bottom"!==o.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(o){o.parentNode.removeChild(o);var e=v.indexOf(o);e>=0&&v.splice(e,1)}function l(o){var e=document.createElement("style");return e.type="text/css",t(o,e),e}function s(o){var e=document.createElement("link");return e.rel="stylesheet",t(o,e),e}function a(o,e){var r,c,n;if(e.singleton){var t=m++;r=h||(h=l(e)),c=d.bind(null,r,t,!1),n=d.bind(null,r,t,!0)}else o.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(e),c=u.bind(null,r),n=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=l(e),c=p.bind(null,r),n=function(){i(r)});return c(o),function(e){if(e){if(e.css===o.css&&e.media===o.media&&e.sourceMap===o.sourceMap)return;c(o=e)}else n()}}function d(o,e,r,c){var n=r?"":c.css;if(o.styleSheet)o.styleSheet.cssText=g(e,n);else{var t=document.createTextNode(n),i=o.childNodes;i[e]&&o.removeChild(i[e]),i.length?o.insertBefore(t,i[e]):o.appendChild(t)}}function p(o,e){var r=e.css,c=e.media;e.sourceMap;if(c&&o.setAttribute("media",c),o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}function u(o,e){var r=e.css,c=(e.media,e.sourceMap);c&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */");var n=new Blob([r],{type:"text/css"}),t=o.href;o.href=URL.createObjectURL(n),t&&URL.revokeObjectURL(t)}var f={},C=function(o){var e;return function(){return"undefined"==typeof e&&(e=o.apply(this,arguments)),e}},b=C(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),D=C(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,v=[];o.exports=function(o,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=b()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=n(o);return c(r,e),function(o){for(var t=[],i=0;i<r.length;i++){var l=r[i],s=f[l.id];s.refs--,t.push(s)}if(o){var a=n(o);c(a,e)}for(var i=0;i<t.length;i++){var s=t[i];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete f[s.id]}}}};var g=function(){var o=[];return function(e,r){return o[e]=r,o.filter(Boolean).join("\n")}}()},function(o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["beer","component_data"],data:function(){return{data:$.parseJSON(this.component_data.data.data),colors:{0:{colorCode:"ffffff",colorDescription:"	White"},.5:{colorCode:"fbf0cb",colorDescription:"Champagne"},1:{colorCode:"f7e1a1",colorDescription:"Candleglow"},1.5:{colorCode:"f4d380",colorDescription:"Broadway Lights"},2:{colorCode:"f0c566",colorDescription:"Cream Can"},2.5:{colorCode:"edb950",colorDescription:"Casablanca"},3:{colorCode:"e9ad3f",colorDescription:"Tulip Tree"},3.5:{colorCode:"e5a231",colorDescription:"Fire Bush"},4:{colorCode:"e19726",colorDescription:"Buttercup"},4.5:{colorCode:"dd8d1d",colorDescription:"Zest"},5:{colorCode:"d98416",colorDescription:"Golden Bell"},5.5:{colorCode:"d57b11",colorDescription:"Meteor"},6:{colorCode:"d1730c",colorDescription:"Dark Goldenrod"},6.5:{colorCode:"cd6c08",colorDescription:"Indochine"},7:{colorCode:"c86505",colorDescription:"Alloy Orange"},7.5:{colorCode:"c45e03",colorDescription:"Tawny"},8:{colorCode:"c05801",colorDescription:"Rose of Sharon"},8.5:{colorCode:"bc5200",colorDescription:"Ruddy Brown"},9:{colorCode:"b74d00",colorDescription:"Mahogany"},9.5:{colorCode:"b34800",colorDescription:"Fire"},10:{colorCode:"af4300",colorDescription:"Orange"},10.5:{colorCode:"ab3f00",colorDescription:"Dark Orange"},11:{colorCode:"a73b00",colorDescription:"Chinese Red"},11.5:{colorCode:"a33700",colorDescription:"Quora"},12:{colorCode:"9f3400",colorDescription:"Sangria"},12.5:{colorCode:"9b3000",colorDescription:"Dark Orange-Red"},13:{colorCode:"972d00",colorDescription:"Totem Pole"},14:{colorCode:"8f2800",colorDescription:"Peru Tan"},15:{colorCode:"882300",colorDescription:"Red Beech"},16:{colorCode:"811f00",colorDescription:"Maroon"},17:{colorCode:"7b1b00",colorDescription:"Pueblo"},18:{colorCode:"741800",colorDescription:"Cedar Wood"},19:{colorCode:"6e1500",colorDescription:"Barn Red"},20:{colorCode:"681200",colorDescription:"Rosewood"},21:{colorCode:"631000",colorDescription:"Dark Red"},22:{colorCode:"5e0e00",colorDescription:"Red Oxide"},23:{colorCode:"590c00",colorDescription:"Rustic Red"},24:{colorCode:"540b00",colorDescription:"Burnt Maroon"},25:{colorCode:"500900",colorDescription:"Pheasant Red"},26:{colorCode:"4c0800",colorDescription:"Brown Pod"},27:{colorCode:"480700",colorDescription:"Temptress"},28:{colorCode:"440600",colorDescription:"Dark Sienna"},29:{colorCode:"410500",colorDescription:"Black Bean"},30:{colorCode:"3d0500",colorDescription:"Dark Bronze"},31:{colorCode:"3a0400",colorDescription:"Chocolate"},32:{colorCode:"370400",colorDescription:"Autumn Maple"},33:{colorCode:"340300",colorDescription:"Dark Cabernet"},34:{colorCode:"320300",colorDescription:"Titian Maroon"},35:{colorCode:"2f0200",colorDescription:"Sepia Black"},36:{colorCode:"2d0200",colorDescription:"Dark Gold Wing"},37:{colorCode:"2a0200",colorDescription:"Zinnwaldite Brown"},38:{colorCode:"280100",colorDescription:"Diesel"},39:{colorCode:"260100",colorDescription:"Licorice"},40:{colorCode:"240100",colorDescription:"Black"},50:{colorCode:"160000",colorDescription:"Smoky Black"},65:{colorCode:"0d0000",colorDescription:"Coal Black"},80:{colorCode:"000000",colorDescription:"Moonlight Black"}}}},computed:{beerColorHex:function(){return"#"+this.calculatedColor().colorCode},beerColorDescription:function(){return this.data.color_description?this.data.color_description:this.calculatedColor().colorDescription}},methods:{EbcToSrm:function(o){return console.log("ebc: "+o+" - srm: "+.508*o),.508*o},calculatedColor:function(){var o=this.EbcToSrm(this.beer.data.target_ebc),e=1e5;for(var r in this.colors)Math.abs(parseFloat(r)-parseFloat(o))<Math.abs(parseFloat(e)-parseFloat(o))&&(e=r);return this.colors[e]}}}},function(o,e){o.exports='<bc-color class="bc-component large"><div v-bind:style="{ backgroundColor: beerColorHex }" class=bc-color-colorbox></div><div class=bc-color-description><h1>Beer color</h1><p>Color description: <b>{{ beerColorDescription }}</b></p><p>EBC: <b>{{ beer.data.target_ebc }}</b></p></div></bc-color>'},function(o,e,r){var c,n;r(9),c=r(11),n=r(12),o.exports=c||{},o.exports.__esModule&&(o.exports=o.exports["default"]),n&&(("function"==typeof o.exports?o.exports.options:o.exports).template=n)},function(o,e,r){var c=r(10);"string"==typeof c&&(c=[[o.id,c,""]]);r(5)(c,{});c.locals&&(o.exports=c.locals)},function(o,e,r){e=o.exports=r(4)(),e.push([o.id,"","",{version:3,sources:[],names:[],mappings:"",file:"bc_developer_bar.vue",sourceRoot:"webpack://"}])},function(o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["beer"]}},function(o,e){o.exports="<bc-developer-bar></bc-developer-bar>"},function(o,e){o.exports=function(o){var e=this;this.data=o?o:!1,this.save=function(o,r){$.ajax({method:"PUT",url:"/beers/",data:e.data}).done(function(o){console.log("saved beer",o),o&&(e.data=o),r&&r()})},this["delete"]=function(o,r){$.ajax({method:"DELETE",url:"/beers/",data:e.data}).done(function(o){o&&(e.data=!1,r&&r())})}}},function(o,e){o.exports=function(o){var e=this;this.data=o?o:!1,this.save=function(o,r){$.ajax({method:"PUT",url:"/components/",data:e.data}).done(function(o){console.log("saved component",o),o&&(e.data=o),r&&r()})},this["delete"]=function(o,r){$.ajax({method:"DELETE",url:"/components/",data:e.data}).done(function(o){o&&(e.data=!1,r&&r())})}}}]);