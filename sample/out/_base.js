self.global=self;self.process=self.process||{env:{NODE_ENV:"production"}};for(var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,m,e){if(e.get||e.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[m]=e.value)},W="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,qa=["String","prototype","endsWith"],ra=0;ra<qa.length-1;ra++){var sa=qa[ra];sa in W||(W[sa]={});W=W[sa]}
var ta=qa[qa.length-1],ua=W[ta],xa=ua?ua:function(a,m){var e;if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");e=this+"";a+="";void 0===m&&(m=e.length);m=Math.max(0,Math.min(m|0,e.length));for(var D=a.length;0<D&&0<m;)if(e[--m]!=a[--D])return!1;return 0>=D};xa!=ua&&null!=xa&&ia(W,ta,{configurable:!0,writable:!0,value:xa});console.log("d export");function ya(){console.log("c export")}console.log("in c");
(self.System=self.System||{}).import=function(n){n=n.replace(/\.js$/g,"")+".js";return (self._S["//"+n]&&Promise.resolve(self._S["//"+n]))||self._S[n]||(self._S[n]=new Promise(function(r,t){var s=document.createElement("script");s.src=(self.System.baseURL||".")+"/"+n.replace(/[\/\\]/g,"-");s.onerror=t;s.onload=function(){r(self._S["//"+n])};(document.head||document.documentElement).appendChild(s);}))};
(self._S=self._S||[]).push=function(f){f.call(self)};(function(f){while(f=self._S.shift()){f.call(self)}})();
//# sourceMappingURL=_base.js.map

