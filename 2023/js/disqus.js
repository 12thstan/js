/*! DisqusJS v1.3.0 | Sukka (https://skk.moe) | https://disqusjs.skk.moe | MIT License */"use strict";function _createForOfIteratorHelperLoose(e,s){var t;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(t=e[Symbol.iterator]()).next.bind(t);if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||s&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,s){if(e){if("string"==typeof e)return _arrayLikeToArray(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,s):void 0}}function _arrayLikeToArray(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,r=new Array(s);t<s;t++)r[t]=e[t];return r}function DisqusJS(M){!function(s,p,t,r,n){function a(){for(var e=arguments.length,s=new Array(e),t=0;t<e;t++)s[t]=arguments[t];return(a=Object.assign||function(e){for(var s,t=_createForOfIteratorHelperLoose(arguments);!(s=t()).done;){var r=s.value;for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,s)}var q=function(e){return p.getElementById(e)},h=function(e){var s=q("dsqjs-msg");s&&(s.innerHTML=e)},v="click",d="disqus_thread",o="dsqjs_sort",c='target="_blank" rel="external nofollow noopener noreferrer"',l='<footer><p class="dsqjs-footer">Powered by <a class="dsqjs-disqus-logo" href="https://disqus.com" '+c+'></a>&nbsp;&amp;&nbsp;<a href="https://disqusjs.skk.moe" target="_blank">DisqusJS</a></p></footer>',u=function(e,s){return'<header class="dsqjs-header" id="dsqjs-header"><nav class="dsqjs-nav dsqjs-clearfix"><ul><li class="dsqjs-nav-tab dsqjs-tab-active"><span>'+e+' Comments</span></li><li class="dsqjs-nav-tab">'+s+'</li></ul><div class="dsqjs-order"><input class="dsqjs-order-radio" id="dsqjs-order-desc" type="radio" name="comment-order" value="desc" checked="true"><label class="dsqjs-order-label" for="dsqjs-order-desc" title="鎸変粠鏂板埌鏃?>鏈€鏂?/label><input class="dsqjs-order-radio" id="dsqjs-order-asc" type="radio" name="comment-order" value="asc"><label class="dsqjs-order-label" for="dsqjs-order-asc" title="鎸変粠鏃у埌鏂?>鏈€鏃?/label><input class="dsqjs-order-radio" id="dsqjs-order-popular" type="radio" name="comment-order" value="popular"><label class="dsqjs-order-label" for="dsqjs-order-popular" title="鎸夎瘎鍒嗕粠楂樺埌浣?>鏈€浣?/label></div></nav></header>'},m=function(e,s,t){var r=e.avatarEl,n=e.createdAt;return'<div class="dsqjs-post-item dsqjs-clearfix"><div class="dsqjs-post-avatar">'+r+'</div><div class="dsqjs-post-body"><div class="dsqjs-post-header">'+s+'<span class="dsqjs-meta"><time>'+i(n)+'</time></span></div><div class="dsqjs-post-content">'+t+"</div></div></div>"},g='濡傞渶瀹屾暣浣撻獙璇烽拡瀵?disq.us | disquscdn.com | disqus.com 鍚敤浠ｇ悊骞?<a id="dsqjs-reload-disqus" class="dsqjs-msg-btn">灏濊瘯瀹屾暣 Disqus 妯″紡</a> | <a id="dsqjs-force-disqus" class="dsqjs-msg-btn">寮哄埗瀹屾暣 Disqus 妯″紡</a>',j=function(e){return r(e,{method:"GET"}).then(function(e){return n.all([e.ok,e.status,e.json(),e.headers])}).then(function(e){var s=e[0],t=e[1],r=e[2],n=e[3];if(s)return{ok:s,status:t,data:r,headers:n};throw new Error}).catch(function(e){throw e})},b=function(e,s){try{t.setItem(e,s)}catch(e){}},i=function(e){function s(e){return e<10?"0"+e:e}return e=Date.parse(new Date(e)),(e=new Date(e+288e5)).getFullYear()+"-"+s(e.getMonth()+1)+"-"+s(e.getDate())+" "+s(e.getHours())+":"+s(e.getMinutes())};function e(){var e;s.DISQUS?s.DISQUS.reset({reload:!0,config:function(){this.page.identifier=D.config.identifier,this.page.url=D.config.url,this.page.title=D.config.title}}):(e=p.createElement("script"),q(d).innerHTML='<div id="dsqjs"><section><div id="dsqjs-msg">璇勮瀹屾暣妯″紡鍔犺浇涓?.. 濡傛灉闀挎椂闂存棤娉曞姞杞斤紝璇烽拡瀵?disq.us | disquscdn.com | disqus.com 鍚敤浠ｇ悊锛屾垨鍒囨崲鑷?<a id="dsqjs-force-dsqjs" class="dsqjs-msg-btn">璇勮鍩虹妯″紡</a></div></section>'+l+"</div>",q("dsqjs-force-dsqjs").addEventListener(v,T),e.src="https://"+D.config.shortname+".disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(p.head||p.body).appendChild(e))}function y(){q(d).innerHTML='<div id="dsqjs"><section><div id="dsqjs-msg">姝ｅ湪妫€鏌?Disqus 鑳藉惁璁块棶...</div></section>'+l+"</div>";for(var e=["disqus.com",D.config.shortname+".disqus.com"],r=0,n=0,a=function(){e.length===r&&r===n?w():e.length===r&&T()},s=0,t=e;s<t.length;s++){!function(e){var s=new Image,t=setTimeout(function(){s.onerror=s.onload=null,r++,a()},3e3);s.onerror=function(){clearTimeout(t),r++,a()},s.onload=function(){clearTimeout(t),r++,n++,a()},s.src="https://"+e+"/favicon.ico?"+ +new Date+"="+ +new Date}(t[s])}}function L(){q("dsqjs-reload-disqus").addEventListener(v,y),q("dsqjs-force-disqus").addEventListener(v,w)}function f(){h("璇勮鍩虹妯″紡鍔犺浇涓?.. "+g),L();var e=D.config.api+"3.0/threads/list.json?forum="+D.config.shortname+"&thread=ident:"+D.config.identifier+"&api_key="+H();j(e).then(function(e){var s=e.data;if(0===s.code&&1===s.response.length){var t=s.response[0],r=t.id,n=t.title,a=t.isClosed,o=t.posts;D.page={id:r,title:n,isClosed:a,length:o,comment:[]},q(d).innerHTML='<div id="dsqjs"><div id="dsqjs-msg">璇勮鍩虹妯″紡鍔犺浇涓?.. '+g+"</div>"+u(o,D.config.siteName)+'<section class="dsqjs-post-container"><ul class="dsqjs-post-list" id="dsqjs-post-container"><p class="dsqjs-no-comment">璇勮鍒楄〃鍔犺浇涓?..</p></ul><a id="dsqjs-load-more" class="dsqjs-load-more dsqjs-hide">鍔犺浇鏇村璇勮</a></section>'+l+"</div>",L(),q("dsqjs-order-"+D.sortType).setAttribute("checked","true"),i()}else{if(0!==s.code||1===s.response.length)throw new Error;h('褰撳墠 Thread 灏氭湭鍒涘缓銆傛槸鍚﹀垏鎹㈣嚦 <a id="dsqjs-force-disqus" class="dsqjs-msg-btn">瀹屾暣 Disqus 妯″紡</a>锛?),q("dsqjs-force-disqus").addEventListener(v,w)}}).catch(E);function s(e){function a(e){return{comment:e,author:e.author.name,isPrimary:!!D.config.admin&&e.author.username===D.config.admin,children:t(+e.id),hasMore:e.hasMore}}var s=[],o=[],t=function(e){if(0===o.length)return null;for(var s,t=[],r=_createForOfIteratorHelperLoose(o);!(s=r()).done;){var n=s.value;n.parent===e&&t.unshift(a(n))}return t.length?t:null};return e.forEach(function(e){(e.parent?o:s).push(e)}),s.map(a)}var i=function t(e){void 0===e&&(e="");function r(){for(var e,s=_createForOfIteratorHelperLoose(d);!(e=s()).done;){e.value.removeEventListener("change",u)}i.removeEventListener(v,l);for(var t,r=_createForOfIteratorHelperLoose(c);!(t=r()).done;){t.value.removeEventListener(v,y)}}var i=q("dsqjs-load-more"),d=p.getElementsByClassName("dsqjs-order-radio"),c=p.getElementsByClassName("dsqjs-has-more-btn"),l=function(){r(),t(D.page.next)},u=function(e){var s=e.target;D.sortType=s.getAttribute("value"),b(o,D.sortType),r(),D.page.comment=[],D.page.next="",q("dsqjs-post-container").innerHTML='<p class="dsqjs-no-comment">姝ｅ湪鍒囨崲鎺掑簭鏂瑰紡...</p>',i.classList.add("dsqjs-hide"),t()},s=""===e?"":"&cursor="+e;i.classList.add("dsqjs-disabled");function n(e){var s=e.createdAt;return Date.parse(new Date(s))}function m(e,s){return e.parent&&s.parent?n(e)-n(s):0}var a=D.config.api+"3.0/threads/listPostsThreaded?forum="+D.config.shortname+"&thread="+D.page.id+s+"&api_key="+H()+"&order="+D.sortType;j(a).then(function(e){var s,t=e.data;if(0===t.code&&0<t.response.length){i.classList.remove("dsqjs-disabled"),(s=D.page.comment).push.apply(s,t.response),D.page.comment.sort(m),f(D.page.comment);for(var r,n=_createForOfIteratorHelperLoose(d);!(r=n()).done;){r.value.addEventListener("change",u)}for(var a,o=_createForOfIteratorHelperLoose(c);!(a=o()).done;){a.value.addEventListener(v,y)}t.cursor.hasNext?(D.page.next=t.cursor.next,i.innerHTML="鍔犺浇鏇村璇勮",i.classList.remove("dsqjs-hide"),i.addEventListener(v,l)):i.classList.add("dsqjs-hide")}else{if(0!==t.code||0!==t.response.length)throw new Error;h("浣犲彲鑳芥棤娉曡闂?Disqus锛屽凡鍚敤璇勮鍩虹妯″紡銆?+g),q("dsqjs-post-container").innerHTML='<p class="dsqjs-no-comment" >'+D.config.nocomment+"</p>",L(),q("dsqjs-force-disqus").addEventListener(v,T)}}).catch(function(){""===e?E():(i.classList.remove("dsqjs-disabled"),i.innerHTML="鍔犺浇鏇村璇勮澶辫触锛岀偣鍑婚噸璇?,i.addEventListener(v,l))})},f=function(e){function a(e){return e.comment.author.profileUrl?(e.comment.avatarEl='<a href="'+e.comment.author.profileUrl+'"><img src="'+r(e.comment.author.avatar.cache)+'" '+c+"></a>",e.comment.authorEl='<span class="dsqjs-post-author"><a href="'+e.comment.author.profileUrl+'" '+c+">"+e.comment.author.name+"</a></span>"):(e.comment.avatarEl='<img src="'+r(e.comment.author.avatar.cache)+'">',e.comment.authorEl='<span class="dsqjs-post-author">'+e.comment.author.name+"</span>"),D.config.adminLabel&&e.isPrimary&&(e.comment.authorEl+='<span class="dsqjs-admin-badge">'+D.config.adminLabel+"</span>"),e}function o(e){var s="",t="",t=e.isDeleted?"<small>姝よ瘎璁哄凡琚垹闄?/small>":(s=e.authorEl+'<span class="dsqjs-bullet"></span>',function(e){var s=p.createElement("div");s.innerHTML=e;for(var t,r=_createForOfIteratorHelperLoose(s.getElementsByTagName("a"));!(t=r()).done;){var n=t.value,a=decodeURIComponent(n.href.replace(/https:\/\/disq.us\/url\?url=/g,"")).replace(/(.*):.+cuid=.*/,"$1");n.href=a,n.innerHTML=a,n.rel="external noopener nofollow noreferrer",n.target="_blank"}return s.innerHTML}(r(e.message)));return m(e,s,t)}var r=function(e){return e.replace("/a.disquscdn.com/ig","c.disquscdn.com")},t="";s(e).map(function(e){e.children&&(e.nesting=1);var s="";(e=a(e)).hasMore&&(s='<p class="dsqjs-has-more">鍒囨崲鑷?<a id="load-more-'+e.comment.id+'">瀹屾暣 Disqus 妯″紡</a> 鏄剧ず鏇村鍥炲</p>'),t+='<li data-id="comment-'+e.comment.id+'" id="comment-'+e.comment.id+'">'+o(e.comment)+function t(e){var r=e.nesting,s=e.children||[];if(s){var n="",n=r<D.config.nesting?'<ul class="dsqjs-post-list dsqjs-children">':'<ul class="dsqjs-post-list">';return s.map(function(e){(e=a(e)).nesting=r+1;var s="";e.hasMore&&(s='<p class="dsqjs-has-more">鍒囨崲鑷?<a class="dsqjs-has-more-btn" id="load-more-'+e.comment.id+'" data-more-id="comment-'+e.comment.id+'">瀹屾暣 Disqus 妯″紡</a> 鏄剧ず鏇村鍥炲</p>'),n+='<li data-id="comment-'+e.comment.id+'" id="comment-'+e.comment.id+'">'+o(e.comment)+t(e)+s+"</li>"}),0!==(n+="</ul>").length?n:void 0}}(e)+s+"</li>"}),h("浣犲彲鑳芥棤娉曡闂?Disqus锛屽凡鍚敤璇勮鍩虹妯″紡銆?+g),q("dsqjs-post-container").innerHTML=t,L()}}function E(e){console.log(e),h('璇勮鍩虹妯″紡鍔犺浇澶辫触锛屾槸鍚?<a id="dsqjs-reload-dsqjs" class="dsqjs-msg-btn">閲嶈浇</a> 鎴?<a id="dsqjs-reload-disqus" class="dsqjs-msg-btn">灏濊瘯瀹屾暣 Disqus 妯″紡</a> 锛?),q("dsqjs-reload-dsqjs").addEventListener(v,f),q("dsqjs-reload-disqus").addEventListener(v,y)}function T(){b("dsqjs_mode","dsqjs"),f()}function w(){b("dsqjs_mode","disqus"),e()}var D={},_=p.location.origin+p.location.pathname+p.location.search;D.config=a({api:"https://disqus.skk.moe/disqus/",identifier:_,url:_,title:p.title,siteName:"",nesting:parseInt(M.nesting)||4,nocomment:"杩欓噷鍐峰喎娓呮竻鐨勶紝涓€鏉¤瘎璁洪兘娌℃湁"},M),D.page={};var I=D.config.apikey,H=function(){return Array.isArray(I)?I[Math.floor(Math.random()*I.length)]:I};s.disqus_config=function(){this.page.url=D.config.url,this.page.identifier=D.config.identifier,this.page.title=D.config.title},q(d).innerHTML='<div id="dsqjs"><div id="dsqjs-msg"></div>'+l+"</div>",r&&t&&n?(D.mode=t.getItem("dsqjs_mode"),D.sortType=t.getItem(o)||t.getItem("disqus.sort"),D.sortType||(b(o,"desc"),D.sortType="desc"),("disqus"===D.mode?e:"dsqjs"===D.mode?f:y)()):(h("浣犵殑娴忚鍣ㄧ増鏈繃浣庯紝涓嶅吋瀹硅瘎璁哄熀纭€妯″紡銆?+g),L())}(window,document,localStorage,fetch,Promise)}try{module.exports=DisqusJS}catch(e){}
