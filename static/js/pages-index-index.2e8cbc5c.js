(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"12dd":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"uni-list"},t._l(t.news,(function(i,n){return e("v-uni-view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover","data-newsid":i.post_id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openinfo.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-media-list"},[e("v-uni-image",{staticClass:"uni-media-list-logo",attrs:{src:i.author_avatar}}),e("v-uni-view",{staticClass:"uni-media-list-body"},[e("v-uni-view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"uni-media-list-text-bottom uni-ellipsis"},[t._v(t._s(i.created_at))])],1)],1)],1)})),1)],1)},a=[]},"1bab":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-fab[data-v-6e0c1fa0]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:10}.uni-fab--active[data-v-6e0c1fa0]{opacity:1}.uni-fab--leftBottom[data-v-6e0c1fa0]{left:5px;bottom:20px;bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--leftTop[data-v-6e0c1fa0]{left:5px;top:30px;top:calc(30px + var(--window-top));padding:10px}.uni-fab--rightBottom[data-v-6e0c1fa0]{right:5px;bottom:20px;bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--rightTop[data-v-6e0c1fa0]{right:5px;top:30px;top:calc(30px + var(--window-top));padding:10px}.uni-fab__circle[data-v-6e0c1fa0]{position:fixed;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:55px;z-index:11}.uni-fab__circle--leftBottom[data-v-6e0c1fa0]{left:15px;bottom:30px;bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-6e0c1fa0]{left:15px;top:40px;top:calc(40px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-6e0c1fa0]{right:15px;bottom:30px;bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-6e0c1fa0]{right:15px;top:40px;top:calc(40px + var(--window-top))}.uni-fab__circle--left[data-v-6e0c1fa0]{left:0}.uni-fab__circle--right[data-v-6e0c1fa0]{right:0}.uni-fab__circle--top[data-v-6e0c1fa0]{top:0}.uni-fab__circle--bottom[data-v-6e0c1fa0]{bottom:0}.uni-fab__plus[data-v-6e0c1fa0]{font-weight:700}.fab-circle-v[data-v-6e0c1fa0]{position:absolute;width:3px;height:31px;left:26px;top:12px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.fab-circle-h[data-v-6e0c1fa0]{position:absolute;width:31px;height:3px;left:12px;top:26px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.uni-fab__plus--active[data-v-6e0c1fa0]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-6e0c1fa0]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border-radius:55px;overflow:hidden;-webkit-transition-property:width,height;transition-property:width,height;-webkit-transition-duration:.2s;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-6e0c1fa0]{border-width:0;box-shadow:0 0 5px 2px rgba(0,0,0,.2)}.uni-fab__content--left[data-v-6e0c1fa0]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-fab__content--right[data-v-6e0c1fa0]{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-fab__content--flexDirection[data-v-6e0c1fa0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-6e0c1fa0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-6e0c1fa0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-fab__item[data-v-6e0c1fa0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:55px;height:55px;opacity:0;-webkit-transition:opacity .2s;transition:opacity .2s}.uni-fab__item--active[data-v-6e0c1fa0]{opacity:1}.uni-fab__item-image[data-v-6e0c1fa0]{width:45px;height:45px;margin-bottom:3px}.uni-fab__item-text[data-v-6e0c1fa0]{color:#fff;font-size:12px}.uni-fab__item--first[data-v-6e0c1fa0]{width:55px}',""]),t.exports=i},"1c0e":function(t,i,e){"use strict";(function(t){var n=e("4ea4");e("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("53d6")),a={components:{uniFab:o.default},data:function(){return{phone:"",password:"",cnt:0,news:[]}},onLoad:function(){var i=this;uni.showLoading({title:"加载中...."});try{var e=uni.getStorageSync("MyNewsPhone"),n=uni.getStorageSync("MyNewsPassword");""==e||""==n?(t("log","去登录"," at pages/index/index.vue:44"),uni.reLaunch({url:"../login/login"})):(this.phone=e,this.password=n,t("log",this.phone,this.password," at pages/index/index.vue:52"))}catch(o){t("log",o," at pages/index/index.vue:55"),uni.reLaunch({url:"../login/login"})}this.cnt=this.cnt+1,uni.request({url:"http://172.18.147.211:8080/news",data:{phone:this.phone,cnt:""+this.cnt},method:"POST",dataType:"json",success:function(t){i.news=t.data,uni.hideLoading()},fail:function(){},complete:function(){}})},onReachBottom:function(){var i=this;t("log","我已经滚动到底部了",this.cnt," at pages/index/index.vue:81"),this.cnt=this.cnt+1,uni.request({url:"http://172.18.147.211:8080/news",data:{phone:this.phone,cnt:""+this.cnt},method:"POST",dataType:"json",success:function(t){i.news=i.news.concat(t.data)},fail:function(){},complete:function(){}})},methods:{openinfo:function(t){var i=t.currentTarget.dataset.newsid;uni.navigateTo({url:"../info/info?newsid="+i})}}};i.default=a}).call(this,e("0de9")["log"])},"380d":function(t,i,e){"use strict";var n=e("a117"),o=e.n(n);o.a},"42bb":function(t,i,e){"use strict";var n=e("9068"),o=e.n(n);o.a},"4b3d":function(t,i,e){"use strict";e.r(i);var n=e("60be"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"53d6":function(t,i,e){"use strict";e.r(i);var n=e("deae"),o=e("4b3d");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("42bb");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"6e0c1fa0",null,!1,n["a"],r);i["default"]=s.exports},5703:function(t,i,e){"use strict";e.r(i);var n=e("1c0e"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"60be":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n="other",o={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===n,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,i){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,i){this.$emit("trigger",{index:t,item:i})},getPosition:function(t,i,e){return 0===t?this.horizontal===i&&this.vertical===e:1===t?this.direction===i&&this.vertical===e:2===t?this.direction===i&&this.horizontal===e:this.isShow&&this.direction===i?this.contentWidth:this.contentWidthMin}}};i.default=o},"8ed1":function(t,i,e){"use strict";e.r(i);var n=e("12dd"),o=e("5703");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("380d");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"104e20e5",null,!1,n["a"],r);i["default"]=s.exports},9068:function(t,i,e){var n=e("1bab");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("f7a2fb90",n,!0,{sourceMap:!1,shadowMode:!1})},a117:function(t,i,e){var n=e("ffdf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("019a4ae8",n,!0,{sourceMap:!1,shadowMode:!1})},deae:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)?e("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[e("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?e("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(i,n){return e("v-uni-view",{key:n,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onItemClick(n,i)}}},[e("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:i.active?i.selectedIconPath:i.iconPath,mode:"widthFix"}}),e("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:i.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(i.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?e("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),e("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onClick.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"fab-circle-v",class:{"uni-fab__plus--active":t.isShow}}),e("v-uni-view",{staticClass:"fab-circle-h",class:{"uni-fab__plus--active":t.isShow}})],1)],1)},a=[]},ffdf:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".uni-media-list-body[data-v-104e20e5]{height:auto}.uni-media-list-text-top[data-v-104e20e5]{line-height:1.6em}",""]),t.exports=i}}]);