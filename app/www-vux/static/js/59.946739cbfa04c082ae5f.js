webpackJsonp([59],{288:function(t,e,n){"use strict";function i(t){n(961)}Object.defineProperty(e,"__esModule",{value:!0});var r=(n(963),n(969)),o=n(970),s=n(0),a=i,u=Object(s.a)(r.a,o.a,o.b,!1,a,"data-v-2d83de35",null);e.default=u.exports},498:function(t,e,n){"use strict";function i(t){n(511)}var r=(n(513),n(514)),o=n(515),s=n(0),a=i,u=Object(s.a)(r.a,o.a,o.b,!1,a,null,null);e.a=u.exports},499:function(t,e,n){"use strict";var i=(n(516),n(517)),r=n(518),o=n(0),s=Object(o.a)(i.a,r.a,r.b,!1,null,null,null);e.a=s.exports},511:function(t,e,n){var i=n(512);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(270)("588379f3",i,!0)},512:function(t,e,n){e=t.exports=n(86)(),e.push([t.i,"\n.vux-flexbox {\n  width: 100%;\n  text-align: left;\n  display: -webkit-box;\n  display: flex;\n  display: -webkit-flex;\n  box-align: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.vux-flexbox .vux-flexbox-item {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-flex: 1;\n  min-width: 20px;\n  width: 0%;\n}\n.vux-flexbox .vux-flexbox-item:first-child {\n  margin-left: 0!important;\n  margin-top: 0!important;\n}\n.vux-flex-row {\n  box-direction: row;\n  box-orient: horizontal;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n}\n.vux-flex-col {\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n.vux-flex-col > .vux-flexbox-item {\n  width: 100%;\n}\n",""])},513:function(t,e,n){"use strict";Number,String,String,String,String,String},514:function(t,e,n){"use strict";e.a={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},515:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},r=[]},516:function(t,e,n){"use strict";var i=["-moz-box-","-webkit-box-",""];Number,String,Number,String},517:function(t,e,n){"use strict";var i=["-moz-box-","-webkit-box-",""];e.a={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var n=0;n<i.length;n++)t[i[n]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},518:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},r=[]},736:function(t,e,n){"use strict";function i(){}function r(t,e,n){var i=!0;if(t){var r=0,o=t.length,s=e[0],a=e[1],u=e[2];switch(e.length){case 0:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n)&&i;break;case 1:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n,s)&&i;break;case 2:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n,s,a)&&i;break;case 3:for(;r<o;r+=2)i=!1!==t[r].call(t[r+1]||n,s,a,u)&&i;break;default:for(;r<o;r+=2)i=!1!==t[r].apply(t[r+1]||n,e)&&i}}return i}function o(t){return"[object Function]"===Object.prototype.toString.call(t)}var s=n(50),a=n.n(s),u=/\s+/;i.prototype.on=function(t,e,n){var i,r,o;if(!e)return this;for(i=this.__events||(this.__events={}),t=t.split(u);r=t.shift();)o=i[r]||(i[r]=[]),o.push(e,n);return this},i.prototype.once=function(t,e,n){var i=this,r=function r(){i.off(t,r),e.apply(n||i,arguments)};return this.on(t,r,n)},i.prototype.off=function(t,e,n){var i,r,o,s;if(!(i=this.__events))return this;if(!(t||e||n))return delete this.__events,this;for(t=t?t.split(u):l(i);r=t.shift();)if(o=i[r])if(e||n)for(s=o.length-2;s>=0;s-=2)e&&o[s]!==e||n&&o[s+1]!==n||o.splice(s,2);else delete i[r];return this},i.prototype.trigger=function(t){var e,n,i,o,s,a,l=[],c=!0;if(!(e=this.__events))return this;for(t=t.split(u),s=1,a=arguments.length;s<a;s++)l[s-1]=arguments[s];for(;n=t.shift();)(i=e.all)&&(i=i.slice()),(o=e[n])&&(o=o.slice()),"all"!==n&&(c=r(o,l,this)&&c),c=r(i,[n].concat(l),this)&&c;return c},i.prototype.emit=i.prototype.trigger;var l=a.a;l||(l=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),i.mixTo=function(t){var e=i.prototype;if(o(t))for(var n in e)e.hasOwnProperty(n)&&(t.prototype[n]=e[n]);else{var r=new i;for(var s in e)e.hasOwnProperty(s)&&function(n){t[n]=function(){return e[n].apply(r,Array.prototype.slice.call(arguments)),this}}(s)}},e.a=i},801:function(t,e,n){"use strict";function i(t){n(964)}var r=(n(966),n(967)),o=n(968),s=n(0),a=i,u=Object(s.a)(r.a,o.a,o.b,!1,a,null,null);e.a=u.exports},802:function(t,e,n){"use strict";function i(t,e){return window.getComputedStyle(t,null).getPropertyValue(e)}var r=n(53),o=n.n(r),s=n(736),a=function(){return"_"+Math.random().toString(36).substr(2,9)},u={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(t,e){var n=document.createElementNS(u.svgns,t);return e&&u.setAttr(n,e),n},setAttr:function(t,e){for(var n in e)"href"===n?t.setAttributeNS(u.xlink,n,e[n]):t.setAttribute(n,e[n]);return t}},l=function t(e,n){this.internalID=a(),this.element=e,this.width=e.offsetWidth,this.height=e.offsetHeight,this.element=e,this.parent=this.element.parentNode,this.options=o()({},t.DEFAULTS,n),this.overlayEl=this.createOverlay(),this.blurredImage=null,this.attachListeners(),this.generateBlurredImage(this.options.url)};l.VERSION="0.0.1",s.a.mixTo(l),l.DEFAULTS={url:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},l.prototype.setBlurAmount=function(t){this.options.blurAmount=t},l.prototype.attachListeners=function(){this.on("ui.blur.loaded",this.fadeIn.bind(this)),this.on("ui.blur.unload",this.fadeOut.bind(this))},l.prototype.fadeIn=function(){},l.prototype.fadeOut=function(){},l.prototype.generateBlurredImage=function(t){var e=this.blurredImage;this.internalID=a(),e&&e.parentNode.removeChild(e),this.blurredImage=this.createSVG(t,this.width,this.height)},l.prototype.createOverlay=function(){if(this.options.overlayClass&&""!==this.options.overlayClass){var t=document.createElement("div");return t.classList.add(this.options.overlayClass),this.parent.insertBefore(t,this.element),t}return!1},l.prototype.createSVG=function(t,e,n){var r=this,o=u.createElement("svg",{xmlns:u.svgns,version:"1.1",width:e,height:n,id:"blurred"+this.internalID,class:this.options.imageClass,viewBox:"0 0 "+e+" "+n,preserveAspectRatio:"none"}),s="blur"+this.internalID,a=u.createElement("filter",{id:s}),l=u.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:this.options.blurAmount}),c=u.createElement("image",{x:0,y:0,width:e,height:n,externalResourcesRequired:"true",href:t,style:"filter:url(#"+s+")",preserveAspectRatio:"none"});return c.addEventListener("load",function(){r.emit("ui.blur.loaded")},!0),c.addEventListener("SVGLoad",function(){r.emit("ui.blur.loaded")},!0),a.appendChild(l),o.appendChild(a),o.appendChild(c),r.options.duration&&r.options.duration>0&&(o.style.opacity=0,window.setTimeout(function(){"0"===i(o,"opacity")&&(o.style.opacity=1)},this.options.duration+100)),this.element.insertBefore(o,this.element.firstChild),o},l.prototype.createIMG=function(t,e,n){var r=this,o=this.prependImage(t),s=2*this.options.blurAmount>100?100:2*this.options.blurAmount,a={filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+s+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:e+2.5*this.options.blurAmount,height:n+2.5*this.options.blurAmount};for(var u in a)o.style[u]=a[u];return o.setAttribute("id",this.internalID),o.onload=function(){r.trigger("ui.blur.loaded")},this.options.duration&&this.options.duration>0&&window.setTimeout(function(){"0"===i(o,"opacity")&&(o.style.opacity=1)},this.options.duration+100),o},l.prototype.prependImage=function(t){var e=document.createElement("img");return e.url=t,e.setAttribute("id",this.internalID),e.classList.add(this.options.imageClass),this.overlayEl?this.parent.insertBefore(e,this.overlayEl):this.parent.insertBefore(e,this.parent.firstChild),e},e.a=l},961:function(t,e,n){var i=n(962);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(270)("2bcb7c50",i,!0)},962:function(t,e,n){e=t.exports=n(86)(),e.push([t.i,"\n.center[data-v-2d83de35] {\n  text-align: center;\n  padding-top: 20px;\n  color: #fff;\n  font-size: 18px;\n}\n.center img[data-v-2d83de35] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  border: 4px solid #ececec;\n}\n",""])},963:function(t,e,n){"use strict";var i=n(498),r=n(499),o=n(801);o.a,i.a,r.a},964:function(t,e,n){var i=n(965);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(270)("16f23f13",i,!0)},965:function(t,e,n){e=t.exports=n(86)(),e.push([t.i,"\n.vux-bg-blur {\n  z-index: -2;\n  opacity: 0;\n  position: absolute;\n  min-height: 100%;\n  display: block;\n  top: 0;\n  max-height: none;\n  /* Add this CSS to remove transparent border around the image */\n  left: -20%;\n  top: -20%;\n  width: 140%;\n  height: 140%;\n  -webkit-transition: opacity linear 0.8s;\n  transition: opacity linear 0.8s;\n}\n/*\nAn element with this class is added by the plugin to provide an overlay above the blurred image\nIt could drastically improve the appearance of the blurred image for content readability\n*/\n.vux-bg-blur-overlay {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.15) 0%, #000000 100%);\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, #000000 100%);\n}\n",""])},966:function(t,e,n){"use strict";var i=n(802);Number,String,Number},967:function(t,e,n){"use strict";var i=n(802);e.a={name:"blur",mounted:function(){var t=this;this.$nextTick(function(){t._blur=new i.a(t.$el,{url:t.url,blurAmount:t.blurAmount,imageClass:"vux-bg-blur",duration:100,opacity:1})})},props:{blurAmount:{type:Number,default:10},url:{type:String,required:!0},height:{type:Number,default:200}},watch:{blurAmount:function(t){this._blur.setBlurAmount(t),this._blur.generateBlurredImage(this.url)},url:function(t){this._blur.generateBlurredImage(t)}}}},968:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{height:t.height+"px",position:"relative",overflow:"hidden"}},[t._t("default")],2)},r=[]},969:function(t,e,n){"use strict";var i=n(498),r=n(499),o=n(801);e.a={components:{Blur:o.a,Flexbox:i.a,FlexboxItem:r.a},data:function(){return{images:["https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg","https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg","https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg"],url:"https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg"}}}},970:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("blur",{attrs:{"blur-amount":40,url:t.url}},[n("p",{staticClass:"center"},[n("img",{attrs:{src:t.url}})])]),t._v(" "),n("flexbox",{attrs:{gutter:0}},t._l(t.images,function(e,i){return n("flexbox-item",{key:i},[n("img",{staticStyle:{width:"100%"},attrs:{src:e},on:{click:function(n){t.url=e}}})])}))],1)},r=[]}});