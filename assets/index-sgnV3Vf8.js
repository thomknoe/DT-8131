(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Kg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _d={exports:{}},zo={};var Ix;function kS(){if(Ix)return zo;Ix=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return zo.Fragment=e,zo.jsx=i,zo.jsxs=i,zo}var Hx;function XS(){return Hx||(Hx=1,_d.exports=kS()),_d.exports}var O=XS(),Sd={exports:{}},ct={};var Gx;function WS(){if(Gx)return ct;Gx=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function v(L,K,ge){this.props=L,this.context=K,this.refs=y,this.updater=ge||E}v.prototype.isReactComponent={},v.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=v.prototype;function U(L,K,ge){this.props=L,this.context=K,this.refs=y,this.updater=ge||E}var B=U.prototype=new z;B.constructor=U,A(B,v.prototype),B.isPureReactComponent=!0;var G=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},ae=Object.prototype.hasOwnProperty;function w(L,K,ge){var be=ge.ref;return{$$typeof:s,type:L,key:K,ref:be!==void 0?be:null,props:ge}}function R(L,K){return w(L.type,K,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function J(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return K[ge]})}var le=/\/+/g;function me(L,K){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):K.toString(36)}function de(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(P,P):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function D(L,K,ge,be,De){var Z=typeof L;(Z==="undefined"||Z==="boolean")&&(L=null);var se=!1;if(L===null)se=!0;else switch(Z){case"bigint":case"string":case"number":se=!0;break;case"object":switch(L.$$typeof){case s:case e:se=!0;break;case x:return se=L._init,D(se(L._payload),K,ge,be,De)}}if(se)return De=De(L),se=be===""?"."+me(L,0):be,G(De)?(ge="",se!=null&&(ge=se.replace(le,"$&/")+"/"),D(De,K,ge,"",function(Be){return Be})):De!=null&&(k(De)&&(De=R(De,ge+(De.key==null||L&&L.key===De.key?"":(""+De.key).replace(le,"$&/")+"/")+se)),K.push(De)),1;se=0;var Te=be===""?".":be+":";if(G(L))for(var Pe=0;Pe<L.length;Pe++)be=L[Pe],Z=Te+me(be,Pe),se+=D(be,K,ge,Z,De);else if(Pe=b(L),typeof Pe=="function")for(L=Pe.call(L),Pe=0;!(be=L.next()).done;)be=be.value,Z=Te+me(be,Pe++),se+=D(be,K,ge,Z,De);else if(Z==="object"){if(typeof L.then=="function")return D(de(L),K,ge,be,De);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return se}function W(L,K,ge){if(L==null)return L;var be=[],De=0;return D(L,be,"","",function(Z){return K.call(ge,Z,De++)}),be}function j(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var ue=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},pe={map:W,forEach:function(L,K,ge){W(L,function(){K.apply(this,arguments)},ge)},count:function(L){var K=0;return W(L,function(){K++}),K},toArray:function(L){return W(L,function(K){return K})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ct.Activity=g,ct.Children=pe,ct.Component=v,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=U,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ct.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},ct.cache=function(L){return function(){return L.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(L,K,ge){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var be=A({},L.props),De=L.key;if(K!=null)for(Z in K.key!==void 0&&(De=""+K.key),K)!ae.call(K,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&K.ref===void 0||(be[Z]=K[Z]);var Z=arguments.length-2;if(Z===1)be.children=ge;else if(1<Z){for(var se=Array(Z),Te=0;Te<Z;Te++)se[Te]=arguments[Te+2];be.children=se}return w(L.type,De,be)},ct.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ct.createElement=function(L,K,ge){var be,De={},Z=null;if(K!=null)for(be in K.key!==void 0&&(Z=""+K.key),K)ae.call(K,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(De[be]=K[be]);var se=arguments.length-2;if(se===1)De.children=ge;else if(1<se){for(var Te=Array(se),Pe=0;Pe<se;Pe++)Te[Pe]=arguments[Pe+2];De.children=Te}if(L&&L.defaultProps)for(be in se=L.defaultProps,se)De[be]===void 0&&(De[be]=se[be]);return w(L,Z,De)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(L){return{$$typeof:h,render:L}},ct.isValidElement=k,ct.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:j}},ct.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},ct.startTransition=function(L){var K=F.T,ge={};F.T=ge;try{var be=L(),De=F.S;De!==null&&De(ge,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(P,ue)}catch(Z){ue(Z)}finally{K!==null&&ge.types!==null&&(K.types=ge.types),F.T=K}},ct.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ct.use=function(L){return F.H.use(L)},ct.useActionState=function(L,K,ge){return F.H.useActionState(L,K,ge)},ct.useCallback=function(L,K){return F.H.useCallback(L,K)},ct.useContext=function(L){return F.H.useContext(L)},ct.useDebugValue=function(){},ct.useDeferredValue=function(L,K){return F.H.useDeferredValue(L,K)},ct.useEffect=function(L,K){return F.H.useEffect(L,K)},ct.useEffectEvent=function(L){return F.H.useEffectEvent(L)},ct.useId=function(){return F.H.useId()},ct.useImperativeHandle=function(L,K,ge){return F.H.useImperativeHandle(L,K,ge)},ct.useInsertionEffect=function(L,K){return F.H.useInsertionEffect(L,K)},ct.useLayoutEffect=function(L,K){return F.H.useLayoutEffect(L,K)},ct.useMemo=function(L,K){return F.H.useMemo(L,K)},ct.useOptimistic=function(L,K){return F.H.useOptimistic(L,K)},ct.useReducer=function(L,K,ge){return F.H.useReducer(L,K,ge)},ct.useRef=function(L){return F.H.useRef(L)},ct.useState=function(L){return F.H.useState(L)},ct.useSyncExternalStore=function(L,K,ge){return F.H.useSyncExternalStore(L,K,ge)},ct.useTransition=function(){return F.H.useTransition()},ct.version="19.2.0",ct}var Vx;function jh(){return Vx||(Vx=1,Sd.exports=WS()),Sd.exports}var Et=jh();const Jg=Kg(Et);var yd={exports:{}},Bo={},bd={exports:{}},Md={};var kx;function jS(){return kx||(kx=1,(function(s){function e(D,W){var j=D.length;D.push(W);e:for(;0<j;){var ue=j-1>>>1,pe=D[ue];if(0<l(pe,W))D[ue]=W,D[j]=pe,j=ue;else break e}}function i(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var W=D[0],j=D.pop();if(j!==W){D[0]=j;e:for(var ue=0,pe=D.length,L=pe>>>1;ue<L;){var K=2*(ue+1)-1,ge=D[K],be=K+1,De=D[be];if(0>l(ge,j))be<pe&&0>l(De,ge)?(D[ue]=De,D[be]=j,ue=be):(D[ue]=ge,D[K]=j,ue=K);else if(be<pe&&0>l(De,j))D[ue]=De,D[be]=j,ue=be;else break e}}return W}function l(D,W){var j=D.sortIndex-W.sortIndex;return j!==0?j:D.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,S=3,b=!1,E=!1,A=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function B(D){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=D)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function G(D){if(A=!1,B(D),!E)if(i(m)!==null)E=!0,P||(P=!0,J());else{var W=i(p);W!==null&&de(G,W.startTime-D)}}var P=!1,F=-1,ae=5,w=-1;function R(){return y?!0:!(s.unstable_now()-w<ae)}function k(){if(y=!1,P){var D=s.unstable_now();w=D;var W=!0;try{e:{E=!1,A&&(A=!1,z(F),F=-1),b=!0;var j=S;try{t:{for(B(D),g=i(m);g!==null&&!(g.expirationTime>D&&R());){var ue=g.callback;if(typeof ue=="function"){g.callback=null,S=g.priorityLevel;var pe=ue(g.expirationTime<=D);if(D=s.unstable_now(),typeof pe=="function"){g.callback=pe,B(D),W=!0;break t}g===i(m)&&r(m),B(D)}else r(m);g=i(m)}if(g!==null)W=!0;else{var L=i(p);L!==null&&de(G,L.startTime-D),W=!1}}break e}finally{g=null,S=j,b=!1}W=void 0}}finally{W?J():P=!1}}}var J;if(typeof U=="function")J=function(){U(k)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,me=le.port2;le.port1.onmessage=k,J=function(){me.postMessage(null)}}else J=function(){v(k,0)};function de(D,W){F=v(function(){D(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(D){switch(S){case 1:case 2:case 3:var W=3;break;default:W=S}var j=S;S=W;try{return D()}finally{S=j}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=S;S=D;try{return W()}finally{S=j}},s.unstable_scheduleCallback=function(D,W,j){var ue=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ue+j:ue):j=ue,D){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=j+pe,D={id:x++,callback:W,priorityLevel:D,startTime:j,expirationTime:pe,sortIndex:-1},j>ue?(D.sortIndex=j,e(p,D),i(m)===null&&D===i(p)&&(A?(z(F),F=-1):A=!0,de(G,j-ue))):(D.sortIndex=pe,e(m,D),E||b||(E=!0,P||(P=!0,J()))),D},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(D){var W=S;return function(){var j=S;S=W;try{return D.apply(this,arguments)}finally{S=j}}}})(Md)),Md}var Xx;function qS(){return Xx||(Xx=1,bd.exports=jS()),bd.exports}var Ed={exports:{}},Nn={};var Wx;function YS(){if(Wx)return Nn;Wx=1;var s=jh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:b}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var jx;function ZS(){if(jx)return Ed.exports;jx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=YS(),Ed.exports}var qx;function QS(){if(qx)return Bo;qx=1;var s=qS(),e=jh(),i=ZS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,o=f;break}if(T===o){_=!0,o=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,o=u;break}if(T===o){_=!0,o=f,a=u;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case P:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case U:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case ae:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var de=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},ue=[],pe=-1;function L(t){return{current:t}}function K(t){0>pe||(t.current=ue[pe],ue[pe]=null,pe--)}function ge(t,n){pe++,ue[pe]=t.current,t.current=n}var be=L(null),De=L(null),Z=L(null),se=L(null);function Te(t,n){switch(ge(Z,n),ge(De,t),ge(be,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?lx(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=lx(n),t=cx(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(be),ge(be,t)}function Pe(){K(be),K(De),K(Z)}function Be(t){t.memoizedState!==null&&ge(se,t);var n=be.current,a=cx(n,t.type);n!==a&&(ge(De,t),ge(be,a))}function rt(t){De.current===t&&(K(be),K(De)),se.current===t&&(K(se),No._currentValue=j)}var Wt,it;function ft(t){if(Wt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Wt=n&&n[1]||"",it=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wt+t+it}var H=!1;function dt(t,n){if(!t||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var re=ce}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ce){re=ce}t.call(_e.prototype)}}else{try{throw Error()}catch(ce){re=ce}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var I=_.split(`
`),te=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===te.length)for(o=I.length-1,u=te.length-1;1<=o&&0<=u&&I[o]!==te[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==te[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==te[u]){var he=`
`+I[o].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=o&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ft(a):""}function gt(t,n){switch(t.tag){case 26:case 27:case 5:return ft(t.type);case 16:return ft("Lazy");case 13:return t.child!==n&&n!==null?ft("Suspense Fallback"):ft("Suspense");case 19:return ft("SuspenseList");case 0:case 15:return dt(t.type,!1);case 11:return dt(t.type.render,!1);case 1:return dt(t.type,!0);case 31:return ft("Activity");default:return""}}function Ot(t){try{var n="",a=null;do n+=gt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ge=Object.prototype.hasOwnProperty,jt=s.unstable_scheduleCallback,Ye=s.unstable_cancelCallback,lt=s.unstable_shouldYield,N=s.unstable_requestPaint,M=s.unstable_now,ee=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,fe=s.unstable_NormalPriority,je=s.unstable_LowPriority,Le=s.unstable_IdlePriority,Ke=s.log,We=s.unstable_setDisableYieldValue,Me=null,Ae=null;function qe(t){if(typeof Ke=="function"&&We(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Me,t)}catch{}}var ke=Math.clz32?Math.clz32:V,ze=Math.log,at=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(ze(t)/at|0)|0}var Ue=256,Re=262144,we=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=Ee(o):(_&=T,_!==0?u=Ee(_):a||(a=T&~t,a!==0&&(u=Ee(a))))):(T=o&~f,T!==0?u=Ee(T):_!==0?u=Ee(_):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function st(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function wt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qn(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,te=t.hiddenUpdates;for(a=_&~a;0<a;){var he=31-ke(a),_e=1<<he;T[he]=0,I[he]=-1;var re=te[he];if(re!==null)for(te[he]=null,he=0;he<re.length;he++){var ce=re[he];ce!==null&&(ce.lane&=-536870913)}a&=~_e}o!==0&&cl(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function cl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ks(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-ke(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Xs(t,n){var a=n&-n;return a=(a&42)!==0?1:Mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function Mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ar(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ws(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Nx(t.type))}function js(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var Kn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Kn,pn="__reactProps$"+Kn,Vi="__reactContainer$"+Kn,Br="__reactEvents$"+Kn,du="__reactListeners$"+Kn,hu="__reactHandles$"+Kn,ul="__reactResources$"+Kn,rr="__reactMarker$"+Kn;function qs(t){delete t[ln],delete t[pn],delete t[Br],delete t[du],delete t[hu]}function ba(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Vi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xx(t);t!==null;){if(a=t[ln])return a;t=xx(t)}return n}t=a,a=t.parentNode}return null}function C(t){if(t=t[ln]||t[Vi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function oe(t){var n=t[ul];return n||(n=t[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ie(t){t[rr]=!0}var Q=new Set,Ce={};function Ne(t,n){Fe(t,n),Fe(t+"Capture",n)}function Fe(t,n){for(Ce[t]=n,t=0;t<n.length;t++)Q.add(n[t])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(t){return Ge.call(tt,t)?!0:Ge.call($e,t)?!1:He.test(t)?tt[t]=!0:($e[t]=!0,!1)}function pt(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Rt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Dt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qt(t){if(!t._valueTracker){var n=zt(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function At(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=zt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ma=/[\n"\\]/g;function Zt(t){return t.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ki(t,n,a,o,u,f,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Tt(n)):t.value!==""+Tt(n)&&(t.value=""+Tt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?yn(t,_,Tt(n)):a!=null?yn(t,_,Tt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Tt(T):t.removeAttribute("name")}function Qt(t,n,a,o,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qt(t);return}a=a!=null?""+Tt(a):"",n=n!=null?""+Tt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),qt(t)}function yn(t,n,a){n==="number"&&Sn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function bn(t,n,a){if(n!=null&&(n=""+Tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Tt(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Tt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),qt(t)}function Li(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Xi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function sp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&rp(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&rp(t,f,n[f])}function pu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return Hv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var mu=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Ir=null;function op(t){var n=C(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ki(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[pn]||null;if(!u)throw Error(r(90));ki(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&At(o)}break e;case"textarea":bn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(t,!!a.multiple,n,!1)}}}var gu=!1;function lp(t,n,a){if(gu)return t(n,a);gu=!0;try{var o=t(n);return o}finally{if(gu=!1,(Fr!==null||Ir!==null)&&(Jl(),Fr&&(n=Fr,t=Ir,Ir=Fr=null,op(n),t)))for(n=0;n<t.length;n++)op(t[n])}}function Ys(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=!1;if(ji)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{vu=!1}var Ea=null,_u=null,dl=null;function cp(){if(dl)return dl;var t,n=_u,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return dl=u.slice(t,1<o?1-o:void 0)}function hl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function up(){return!1}function kn(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:up,this.isPropagationStopped=up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=kn(sr),Qs=g({},sr,{view:0,detail:0}),Gv=kn(Qs),Su,yu,Ks,xl=g({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Su=t.screenX-Ks.screenX,yu=t.screenY-Ks.screenY):yu=Su=0,Ks=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),fp=kn(xl),Vv=g({},xl,{dataTransfer:0}),kv=kn(Vv),Xv=g({},Qs,{relatedTarget:0}),bu=kn(Xv),Wv=g({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=kn(Wv),qv=g({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=kn(qv),Zv=g({},sr,{data:0}),dp=kn(Zv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jv[t])?!!n[t]:!1}function Mu(){return $v}var e_=g({},Qs,{key:function(t){if(t.key){var n=Qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t_=kn(e_),n_=g({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=kn(n_),i_=g({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),a_=kn(i_),r_=g({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s_=kn(r_),o_=g({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=kn(o_),c_=g({},sr,{newState:0,oldState:0}),u_=kn(c_),f_=[9,13,27,32],Eu=ji&&"CompositionEvent"in window,Js=null;ji&&"documentMode"in document&&(Js=document.documentMode);var d_=ji&&"TextEvent"in window&&!Js,pp=ji&&(!Eu||Js&&8<Js&&11>=Js),mp=" ",xp=!1;function gp(t,n){switch(t){case"keyup":return f_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function h_(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(xp=!0,mp);case"textInput":return t=n.data,t===mp&&xp?null:t;default:return null}}function p_(t,n){if(Hr)return t==="compositionend"||!Eu&&gp(t,n)?(t=cp(),dl=_u=Ea=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pp&&n.locale!=="ko"?null:n.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!m_[t.type]:n==="textarea"}function Sp(t,n,a,o){Fr?Ir?Ir.push(o):Ir=[o]:Fr=o,n=rc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var $s=null,eo=null;function x_(t){nx(t,0)}function gl(t){var n=q(t);if(At(n))return t}function yp(t,n){if(t==="change")return n}var bp=!1;if(ji){var Tu;if(ji){var Au="oninput"in document;if(!Au){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),Au=typeof Mp.oninput=="function"}Tu=Au}else Tu=!1;bp=Tu&&(!document.documentMode||9<document.documentMode)}function Ep(){$s&&($s.detachEvent("onpropertychange",Tp),eo=$s=null)}function Tp(t){if(t.propertyName==="value"&&gl(eo)){var n=[];Sp(n,eo,t,xu(t)),lp(x_,n)}}function g_(t,n,a){t==="focusin"?(Ep(),$s=n,eo=a,$s.attachEvent("onpropertychange",Tp)):t==="focusout"&&Ep()}function v_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(eo)}function __(t,n){if(t==="click")return gl(n)}function S_(t,n){if(t==="input"||t==="change")return gl(n)}function y_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Jn=typeof Object.is=="function"?Object.is:y_;function to(t,n){if(Jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ge.call(n,u)||!Jn(t[u],n[u]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=Ap(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ap(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Sn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Sn(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var b_=ji&&"documentMode"in document&&11>=document.documentMode,Gr=null,Ru=null,no=null,wu=!1;function Dp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||Gr==null||Gr!==Sn(o)||(o=Gr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=rc(Ru,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Gr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Du={},Up={};ji&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function lr(t){if(Du[t])return Du[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Up)return Du[t]=n[a];return t}var Np=lr("animationend"),Lp=lr("animationiteration"),Op=lr("animationstart"),M_=lr("transitionrun"),E_=lr("transitionstart"),T_=lr("transitioncancel"),Pp=lr("transitionend"),zp=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Ei(t,n){zp.set(t,n),Ne(n,[t])}var vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],kr=0,Nu=0;function _l(){for(var t=kr,n=Nu=kr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&Bp(a,u,f)}}function Sl(t,n,a,o){fi[kr++]=t,fi[kr++]=n,fi[kr++]=a,fi[kr++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lu(t,n,a,o){return Sl(t,n,a,o),yl(t)}function cr(t,n){return Sl(t,null,null,n),yl(t)}function Bp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-ke(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function yl(t){if(50<To)throw To=0,kf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function A_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,o){return new A_(t,n,a,o)}function Ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Ou(t)&&(_=1);else if(typeof t=="string")_=US(t,a,be.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=$n(31,a,n,u),t.elementType=w,t.lanes=f,t;case A:return ur(a.children,u,f,n);case y:_=8,u|=24;break;case v:return t=$n(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case G:return t=$n(13,a,n,u),t.elementType=G,t.lanes=f,t;case P:return t=$n(19,a,n,u),t.elementType=P,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:_=10;break e;case z:_=9;break e;case B:_=11;break e;case F:_=14;break e;case ae:_=16,o=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=$n(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ur(t,n,a,o){return t=$n(7,t,o,n),t.lanes=a,t}function Pu(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Ip(t){var n=$n(18,null,null,0);return n.stateNode=t,n}function zu(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hp=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ot(n)},Hp.set(t,n),n)}return{value:t,source:n,stack:Ot(n)}}var Wr=[],jr=0,Ml=null,io=0,hi=[],pi=0,Ta=null,Oi=1,Pi="";function Yi(t,n){Wr[jr++]=io,Wr[jr++]=Ml,Ml=t,io=n}function Gp(t,n,a){hi[pi++]=Oi,hi[pi++]=Pi,hi[pi++]=Ta,Ta=t;var o=Oi;t=Pi;var u=32-ke(o)-1;o&=~(1<<u),a+=1;var f=32-ke(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Oi=1<<32-ke(n)+u|a<<u|o,Pi=f+t}else Oi=1<<f|a<<u|o,Pi=t}function Bu(t){t.return!==null&&(Yi(t,1),Gp(t,1,0))}function Fu(t){for(;t===Ml;)Ml=Wr[--jr],Wr[jr]=null,io=Wr[--jr],Wr[jr]=null;for(;t===Ta;)Ta=hi[--pi],hi[pi]=null,Pi=hi[--pi],hi[pi]=null,Oi=hi[--pi],hi[pi]=null}function Vp(t,n){hi[pi++]=Oi,hi[pi++]=Pi,hi[pi++]=Ta,Oi=n.id,Pi=n.overflow,Ta=t}var An=null,Kt=null,Ct=!1,Aa=null,mi=!1,Iu=Error(r(519));function Ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(di(n,t)),Iu}function kp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[pn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)St(Co[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Qt(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||sx(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ca(t,!0)}function Xp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:An=An.return}}function qr(t){if(t!==An)return!1;if(!Ct)return Xp(t),Ct=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&Kt&&Ca(t),Xp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=mx(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=mx(t)}else n===27?(n=Kt,Ga(t.type)?(t=cd,cd=null,Kt=t):Kt=n):Kt=An?gi(t.stateNode.nextSibling):null;return!0}function fr(){Kt=An=null,Ct=!1}function Hu(){var t=Aa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Aa=null),t}function ao(t){Aa===null?Aa=[t]:Aa.push(t)}var Gu=L(null),dr=null,Zi=null;function Ra(t,n,a){ge(Gu,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=Gu.current,K(Gu)}function Vu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Vu(f.return,a,t),o||(_=null);break e}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Vu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Yr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=u.type;Jn(u.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(u===se.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!Jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Wp(dr,t)}function Tl(t,n){return dr===null&&hr(t),Wp(t,n)}function Wp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(t===null)throw Error(r(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return a}var C_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},R_=s.unstable_scheduleCallback,w_=s.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new C_,data:new Map,refCount:0}}function ro(t){t.refCount--,t.refCount===0&&R_(w_,function(){t.controller.abort()})}var so=null,Wu=0,Zr=0,Qr=null;function D_(t,n){if(so===null){var a=so=[];Wu=0,Zr=Zf(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(jp,jp),n}function jp(){if(--Wu===0&&so!==null){Qr!==null&&(Qr.status="fulfilled");var t=so;so=null,Zr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function U_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=D.S;D.S=function(t,n){D0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&D_(t,n),qp!==null&&qp(t,n)};var pr=L(null);function ju(){var t=pr.current;return t!==null?t:Yt.pooledCache}function Al(t,n){n===null?ge(pr,pr.current):ge(pr,n.pool)}function Yp(){var t=ju();return t===null?null:{parent:cn._currentValue,pool:t}}var Kr=Error(r(460)),qu=Error(r(474)),Cl=Error(r(542)),Rl={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Qp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t}throw xr=n,Kr}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,Kr):a}}var xr=null;function Kp(){if(xr===null)throw Error(r(459));var t=xr;return xr=null,t}function Jp(t){if(t===Kr||t===Cl)throw Error(r(483))}var Jr=null,oo=0;function wl(t){var n=oo;return oo+=1,Jr===null&&(Jr=[]),Qp(Jr,t,n)}function lo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $p(t){function n(Y,X){if(t){var $=Y.deletions;$===null?(Y.deletions=[X],Y.flags|=16):$.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function o(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=qi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<X?(Y.flags|=67108866,X):$):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,X,$,xe){return X===null||X.tag!==6?(X=Pu($,Y.mode,xe),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function I(Y,X,$,xe){var Qe=$.type;return Qe===A?he(Y,X,$.props.children,xe,$.key):X!==null&&(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ae&&mr(Qe)===X.type)?(X=u(X,$.props),lo(X,$),X.return=Y,X):(X=bl($.type,$.key,$.props,null,Y.mode,xe),lo(X,$),X.return=Y,X)}function te(Y,X,$,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=zu($,Y.mode,xe),X.return=Y,X):(X=u(X,$.children||[]),X.return=Y,X)}function he(Y,X,$,xe,Qe){return X===null||X.tag!==7?(X=ur($,Y.mode,xe,Qe),X.return=Y,X):(X=u(X,$),X.return=Y,X)}function _e(Y,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Pu(""+X,Y.mode,$),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case b:return $=bl(X.type,X.key,X.props,null,Y.mode,$),lo($,X),$.return=Y,$;case E:return X=zu(X,Y.mode,$),X.return=Y,X;case ae:return X=mr(X),_e(Y,X,$)}if(de(X)||J(X))return X=ur(X,Y.mode,$,null),X.return=Y,X;if(typeof X.then=="function")return _e(Y,wl(X),$);if(X.$$typeof===U)return _e(Y,Tl(Y,X),$);Dl(Y,X)}return null}function re(Y,X,$,xe){var Qe=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qe!==null?null:T(Y,X,""+$,xe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return $.key===Qe?I(Y,X,$,xe):null;case E:return $.key===Qe?te(Y,X,$,xe):null;case ae:return $=mr($),re(Y,X,$,xe)}if(de($)||J($))return Qe!==null?null:he(Y,X,$,xe,null);if(typeof $.then=="function")return re(Y,X,wl($),xe);if($.$$typeof===U)return re(Y,X,Tl(Y,$),xe);Dl(Y,$)}return null}function ce(Y,X,$,xe,Qe){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return Y=Y.get($)||null,T(X,Y,""+xe,Qe);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case b:return Y=Y.get(xe.key===null?$:xe.key)||null,I(X,Y,xe,Qe);case E:return Y=Y.get(xe.key===null?$:xe.key)||null,te(X,Y,xe,Qe);case ae:return xe=mr(xe),ce(Y,X,$,xe,Qe)}if(de(xe)||J(xe))return Y=Y.get($)||null,he(X,Y,xe,Qe,null);if(typeof xe.then=="function")return ce(Y,X,$,wl(xe),Qe);if(xe.$$typeof===U)return ce(Y,X,$,Tl(X,xe),Qe);Dl(X,xe)}return null}function Ve(Y,X,$,xe){for(var Qe=null,Ut=null,Xe=X,mt=X=0,bt=null;Xe!==null&&mt<$.length;mt++){Xe.index>mt?(bt=Xe,Xe=null):bt=Xe.sibling;var Nt=re(Y,Xe,$[mt],xe);if(Nt===null){Xe===null&&(Xe=bt);break}t&&Xe&&Nt.alternate===null&&n(Y,Xe),X=f(Nt,X,mt),Ut===null?Qe=Nt:Ut.sibling=Nt,Ut=Nt,Xe=bt}if(mt===$.length)return a(Y,Xe),Ct&&Yi(Y,mt),Qe;if(Xe===null){for(;mt<$.length;mt++)Xe=_e(Y,$[mt],xe),Xe!==null&&(X=f(Xe,X,mt),Ut===null?Qe=Xe:Ut.sibling=Xe,Ut=Xe);return Ct&&Yi(Y,mt),Qe}for(Xe=o(Xe);mt<$.length;mt++)bt=ce(Xe,Y,mt,$[mt],xe),bt!==null&&(t&&bt.alternate!==null&&Xe.delete(bt.key===null?mt:bt.key),X=f(bt,X,mt),Ut===null?Qe=bt:Ut.sibling=bt,Ut=bt);return t&&Xe.forEach(function(ja){return n(Y,ja)}),Ct&&Yi(Y,mt),Qe}function et(Y,X,$,xe){if($==null)throw Error(r(151));for(var Qe=null,Ut=null,Xe=X,mt=X=0,bt=null,Nt=$.next();Xe!==null&&!Nt.done;mt++,Nt=$.next()){Xe.index>mt?(bt=Xe,Xe=null):bt=Xe.sibling;var ja=re(Y,Xe,Nt.value,xe);if(ja===null){Xe===null&&(Xe=bt);break}t&&Xe&&ja.alternate===null&&n(Y,Xe),X=f(ja,X,mt),Ut===null?Qe=ja:Ut.sibling=ja,Ut=ja,Xe=bt}if(Nt.done)return a(Y,Xe),Ct&&Yi(Y,mt),Qe;if(Xe===null){for(;!Nt.done;mt++,Nt=$.next())Nt=_e(Y,Nt.value,xe),Nt!==null&&(X=f(Nt,X,mt),Ut===null?Qe=Nt:Ut.sibling=Nt,Ut=Nt);return Ct&&Yi(Y,mt),Qe}for(Xe=o(Xe);!Nt.done;mt++,Nt=$.next())Nt=ce(Xe,Y,mt,Nt.value,xe),Nt!==null&&(t&&Nt.alternate!==null&&Xe.delete(Nt.key===null?mt:Nt.key),X=f(Nt,X,mt),Ut===null?Qe=Nt:Ut.sibling=Nt,Ut=Nt);return t&&Xe.forEach(function(VS){return n(Y,VS)}),Ct&&Yi(Y,mt),Qe}function kt(Y,X,$,xe){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case b:e:{for(var Qe=$.key;X!==null;){if(X.key===Qe){if(Qe=$.type,Qe===A){if(X.tag===7){a(Y,X.sibling),xe=u(X,$.props.children),xe.return=Y,Y=xe;break e}}else if(X.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ae&&mr(Qe)===X.type){a(Y,X.sibling),xe=u(X,$.props),lo(xe,$),xe.return=Y,Y=xe;break e}a(Y,X);break}else n(Y,X);X=X.sibling}$.type===A?(xe=ur($.props.children,Y.mode,xe,$.key),xe.return=Y,Y=xe):(xe=bl($.type,$.key,$.props,null,Y.mode,xe),lo(xe,$),xe.return=Y,Y=xe)}return _(Y);case E:e:{for(Qe=$.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(Y,X.sibling),xe=u(X,$.children||[]),xe.return=Y,Y=xe;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}xe=zu($,Y.mode,xe),xe.return=Y,Y=xe}return _(Y);case ae:return $=mr($),kt(Y,X,$,xe)}if(de($))return Ve(Y,X,$,xe);if(J($)){if(Qe=J($),typeof Qe!="function")throw Error(r(150));return $=Qe.call($),et(Y,X,$,xe)}if(typeof $.then=="function")return kt(Y,X,wl($),xe);if($.$$typeof===U)return kt(Y,X,Tl(Y,$),xe);Dl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(Y,X.sibling),xe=u(X,$),xe.return=Y,Y=xe):(a(Y,X),xe=Pu($,Y.mode,xe),xe.return=Y,Y=xe),_(Y)):a(Y,X)}return function(Y,X,$,xe){try{oo=0;var Qe=kt(Y,X,$,xe);return Jr=null,Qe}catch(Xe){if(Xe===Kr||Xe===Cl)throw Xe;var Ut=$n(29,Xe,null,Y.mode);return Ut.lanes=xe,Ut.return=Y,Ut}finally{}}}var gr=$p(!0),em=$p(!1),wa=!1;function Yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(t),Bp(t,null,a),n}return Sl(t,o,n,a),yl(t)}function co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}function Qu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ku=!1;function uo(){if(Ku){var t=Qr;if(t!==null)throw t}}function fo(t,n,a,o){Ku=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,te=I.next;I.next=null,_===null?f=te:_.next=te,_=I;var he=t.alternate;he!==null&&(he=he.updateQueue,T=he.lastBaseUpdate,T!==_&&(T===null?he.firstBaseUpdate=te:T.next=te,he.lastBaseUpdate=I))}if(f!==null){var _e=u.baseState;_=0,he=te=I=null,T=f;do{var re=T.lane&-536870913,ce=re!==T.lane;if(ce?(yt&re)===re:(o&re)===re){re!==0&&re===Zr&&(Ku=!0),he!==null&&(he=he.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ve=t,et=T;re=n;var kt=a;switch(et.tag){case 1:if(Ve=et.payload,typeof Ve=="function"){_e=Ve.call(kt,_e,re);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=et.payload,re=typeof Ve=="function"?Ve.call(kt,_e,re):Ve,re==null)break e;_e=g({},_e,re);break e;case 2:wa=!0}}re=T.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:T.tag,payload:T.payload,callback:T.callback,next:null},he===null?(te=he=ce,I=_e):he=he.next=ce,_|=re;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ce=T,T=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);he===null&&(I=_e),u.baseState=I,u.firstBaseUpdate=te,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),za|=_,t.lanes=_,t.memoizedState=_e}}function tm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function nm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)tm(a[t],n)}var $r=L(null),Ul=L(0);function im(t,n){t=ra,ge(Ul,t),ge($r,n),ra=t|n.baseLanes}function Ju(){ge(Ul,ra),ge($r,$r.current)}function $u(){ra=Ul.current,K($r),K(Ul)}var ei=L(null),xi=null;function Na(t){var n=t.alternate;ge(rn,rn.current&1),ge(ei,t),xi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(xi=t)}function ef(t){ge(rn,rn.current),ge(ei,t),xi===null&&(xi=t)}function am(t){t.tag===22?(ge(rn,rn.current),ge(ei,t),xi===null&&(xi=t)):La()}function La(){ge(rn,rn.current),ge(ei,ei.current)}function ti(t){K(ei),xi===t&&(xi=null),K(rn)}var rn=L(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||od(a)||ld(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=0,ht=null,Gt=null,un=null,Ll=!1,es=!1,vr=!1,Ol=0,ho=0,ts=null,N_=0;function en(){throw Error(r(321))}function tf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Jn(t[a],n[a]))return!1;return!0}function nf(t,n,a,o,u,f){return Ki=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?Gm:vf,vr=!1,f=a(o,u),vr=!1,es&&(f=sm(n,a,o,u)),rm(t),f}function rm(t){D.H=xo;var n=Gt!==null&&Gt.next!==null;if(Ki=0,un=Gt=ht=null,Ll=!1,ho=0,ts=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&El(t)&&(fn=!0))}function sm(t,n,a,o){ht=t;var u=0;do{if(es&&(ts=null),ho=0,es=!1,25<=u)throw Error(r(301));if(u+=1,un=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=Vm,f=n(a,o)}while(es);return f}function L_(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?po(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ht.flags|=1024),n}function af(){var t=Ol!==0;return Ol=0,t}function rf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function sf(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}Ki=0,un=Gt=ht=null,es=!1,ho=Ol=0,ts=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ht.memoizedState=un=t:un=un.next=t,un}function sn(){if(Gt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=un===null?ht.memoizedState:un.next;if(n!==null)un=n,Gt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?ht.memoizedState=un=t:un=un.next=t}return un}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(t){var n=ho;return ho+=1,ts===null&&(ts=[]),t=Qp(ts,t,n),n=ht,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Gm:vf),t}function zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return po(t);if(t.$$typeof===U)return Cn(t)}throw Error(r(438,String(t)))}function of(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=sn();return lf(n,Gt,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=_=null,I=null,te=n,he=!1;do{var _e=te.lane&-536870913;if(_e!==te.lane?(yt&_e)===_e:(Ki&_e)===_e){var re=te.revertLane;if(re===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),_e===Zr&&(he=!0);else if((Ki&re)===re){te=te.next,re===Zr&&(he=!0);continue}else _e={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(T=I=_e,_=f):I=I.next=_e,ht.lanes|=re,za|=re;_e=te.action,vr&&a(f,_e),f=te.hasEagerState?te.eagerState:a(f,_e)}else re={lane:_e,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(T=I=re,_=f):I=I.next=re,ht.lanes|=_e,za|=_e;te=te.next}while(te!==null&&te!==n);if(I===null?_=f:I.next=T,!Jn(f,t.memoizedState)&&(fn=!0,he&&(a=Qr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Jn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function om(t,n,a){var o=ht,u=sn(),f=Ct;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Jn((Gt||u).memoizedState,a);if(_&&(u.memoizedState=a,fn=!0),u=u.queue,df(um.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ns(9,{destroy:void 0},cm.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));f||(Ki&127)!==0||lm(o,n,a)}return a}function lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Pl(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function cm(t,n,a,o){n.value=a,n.getSnapshot=o,fm(n)&&dm(t)}function um(t,n,a){return a(function(){fm(n)&&dm(t)})}function fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Jn(t,a)}catch{return!0}}function dm(t){var n=cr(t,2);n!==null&&Yn(n,t,2)}function uf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),vr){qe(!0);try{a()}finally{qe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function hm(t,n,a,o){return t.baseState=a,lf(t,Gt,typeof o=="function"?o:Ji)}function O_(t,n,a,o,u){if(Hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};D.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,pm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function pm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=D.T,_={};D.T=_;try{var T=a(u,o),I=D.S;I!==null&&I(_,T),mm(t,n,T)}catch(te){ff(t,n,te)}finally{f!==null&&_.types!==null&&(f.types=_.types),D.T=f}}else try{f=a(u,o),mm(t,n,f)}catch(te){ff(t,n,te)}}function mm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){xm(t,n,o)},function(o){return ff(t,n,o)}):xm(t,n,a)}function xm(t,n,a){n.status="fulfilled",n.value=a,gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,pm(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vm(t,n){return n}function _m(t,n){if(Ct){var a=Yt.formState;if(a!==null){e:{var o=ht;if(Ct){if(Kt){t:{for(var u=Kt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=gi(u.nextSibling),o=u.data==="F!";break e}}Ca(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=o,a=Fm.bind(null,ht,o),o.dispatch=a,o=uf(!1),f=gf.bind(null,ht,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=O_.bind(null,ht,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Sm(t){var n=sn();return ym(n,Gt,t)}function ym(t,n,a){if(n=lf(t,n,vm)[0],t=Bl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(_){throw _===Kr?Cl:_}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,ns(9,{destroy:void 0},P_.bind(null,u,a),null)),[o,f,t]}function P_(t,n){t.action=n}function bm(t){var n=sn(),a=Gt;if(a!==null)return ym(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ns(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Pl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Mm(){return sn().memoizedState}function Fl(t,n,a,o){var u=Bn();ht.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,o===void 0?null:o)}function Il(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&tf(o,Gt.memoizedState.deps)?u.memoizedState=ns(n,f,a,o):(ht.flags|=t,u.memoizedState=ns(1|n,f,a,o))}function Em(t,n){Fl(8390656,8,t,n)}function df(t,n){Il(2048,8,t,n)}function z_(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Pl(),ht.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Tm(t){var n=sn().memoizedState;return z_({ref:n,nextImpl:t}),function(){if((Pt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Am(t,n){return Il(4,2,t,n)}function Cm(t,n){return Il(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function wm(t,n,a){a=a!=null?a.concat([t]):null,Il(4,4,Rm.bind(null,n,t),a)}function hf(){}function Dm(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&tf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Um(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&tf(n,o[1]))return o[0];if(o=t(),vr){qe(!0);try{t()}finally{qe(!1)}}return a.memoizedState=[o,n],o}function pf(t,n,a){return a===void 0||(Ki&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=N0(),ht.lanes|=t,za|=t,a)}function Nm(t,n,a,o){return Jn(a,n)?a:$r.current!==null?(t=pf(t,a,o),Jn(t,n)||(fn=!0),t):(Ki&42)===0||(Ki&1073741824)!==0&&(yt&261930)===0?(fn=!0,t.memoizedState=a):(t=N0(),ht.lanes|=t,za|=t,n)}function Lm(t,n,a,o,u){var f=W.p;W.p=f!==0&&8>f?f:8;var _=D.T,T={};D.T=T,gf(t,!1,n,a);try{var I=u(),te=D.S;if(te!==null&&te(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var he=U_(I,o);mo(t,n,he,ai(t))}else mo(t,n,o,ai(t))}catch(_e){mo(t,n,{then:function(){},status:"rejected",reason:_e},ai())}finally{W.p=f,_!==null&&T.types!==null&&(_.types=T.types),D.T=_}}function B_(){}function mf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Om(t).queue;Lm(t,u,n,j,a===null?B_:function(){return Pm(t),a(o)})}function Om(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Pm(t){var n=Om(t);n.next===null&&(n=t.alternate.memoizedState),mo(t,n.next.queue,{},ai())}function xf(){return Cn(No)}function zm(){return sn().memoizedState}function Bm(){return sn().memoizedState}function F_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ai();t=Da(a);var o=Ua(n,t,a);o!==null&&(Yn(o,n,a),co(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function I_(t,n,a){var o=ai();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(t)?Im(n,a):(a=Lu(t,n,a,o),a!==null&&(Yn(a,t,o),Hm(a,n,o)))}function Fm(t,n,a){var o=ai();mo(t,n,a,o)}function mo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))Im(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,Jn(T,_))return Sl(t,n,u,0),Yt===null&&_l(),!1}catch{}finally{}if(a=Lu(t,n,u,o),a!==null)return Yn(a,t,o),Hm(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(r(479))}else n=Lu(t,a,o,2),n!==null&&Yn(n,t,2)}function Hl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function Im(t,n){es=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Hm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}var xo={readContext:Cn,use:zl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};xo.useEffectEvent=en;var Gm={readContext:Cn,use:zl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Fl(4194308,4,t,n)},useInsertionEffect:function(t,n){Fl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(vr){qe(!0);try{t()}finally{qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(vr){qe(!0);try{a(n)}finally{qe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=I_.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=Fm.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:hf,useDeferredValue:function(t,n){var a=Bn();return pf(a,t,n)},useTransition:function(){var t=uf(!1);return t=Lm.bind(null,ht,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,u=Bn();if(Ct){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(yt&127)!==0||lm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Em(um.bind(null,o,f,t),[t]),o.flags|=2048,ns(9,{destroy:void 0},cm.bind(null,o,f,a,n),null),a},useId:function(){var t=Bn(),n=Yt.identifierPrefix;if(Ct){var a=Pi,o=Oi;a=(o&~(1<<32-ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=N_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:xf,useFormState:_m,useActionState:_m,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Bn().memoizedState=F_.bind(null,ht)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},vf={readContext:Cn,use:zl,useCallback:Dm,useContext:Cn,useEffect:df,useImperativeHandle:wm,useInsertionEffect:Am,useLayoutEffect:Cm,useMemo:Um,useReducer:Bl,useRef:Mm,useState:function(){return Bl(Ji)},useDebugValue:hf,useDeferredValue:function(t,n){var a=sn();return Nm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Bl(Ji)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:om,useId:zm,useHostTransitionStatus:xf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=sn();return hm(a,Gt,t,n)},useMemoCache:of,useCacheRefresh:Bm};vf.useEffectEvent=Tm;var Vm={readContext:Cn,use:zl,useCallback:Dm,useContext:Cn,useEffect:df,useImperativeHandle:wm,useInsertionEffect:Am,useLayoutEffect:Cm,useMemo:Um,useReducer:cf,useRef:Mm,useState:function(){return cf(Ji)},useDebugValue:hf,useDeferredValue:function(t,n){var a=sn();return Gt===null?pf(a,t,n):Nm(a,Gt.memoizedState,t,n)},useTransition:function(){var t=cf(Ji)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:po(t),n]},useSyncExternalStore:om,useId:zm,useHostTransitionStatus:xf,useFormState:bm,useActionState:bm,useOptimistic:function(t,n){var a=sn();return Gt!==null?hm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:Bm};Vm.useEffectEvent=Tm;function _f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Sf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Da(o);u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(Yn(n,t,o),co(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ai(),u=Da(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(t,u,o),n!==null&&(Yn(n,t,o),co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ai(),o=Da(a);o.tag=2,n!=null&&(o.callback=n),n=Ua(t,o,a),n!==null&&(Yn(n,t,a),co(n,t,a))}};function km(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,f):!0}function Xm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Sf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Wm(t){vl(t)}function jm(t){console.error(t)}function qm(t){vl(t)}function Gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(t,n)},a}function Zm(t){return t=Da(t),t.tag=3,t}function Qm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Ym(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function H_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Yr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?$l():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),jf(t,o,u)),!1;case 22:return a.flags|=65536,o===Rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),jf(t,o,u)),!1}throw Error(r(435,a.tag))}return jf(t,o,u),$l(),!1}if(Ct)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(t=Error(r(422),{cause:o}),ao(di(t,a)))):(o!==Iu&&(n=Error(r(423),{cause:o}),ao(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=yf(t.stateNode,o,u),Qu(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),Eo===null?Eo=[f]:Eo.push(f),tn!==4&&(tn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=yf(a.stateNode,o,t),Qu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zm(u),Qm(u,t,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(r(461)),fn=!1;function Rn(t,n,a,o){n.child=t===null?em(n,null,a,o):gr(n,t.child,a,o)}function Km(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var T in o)T!=="ref"&&(_[T]=o[T])}else _=o;return hr(n),o=nf(t,n,a,_,f,u),T=af(),t!==null&&!fn?(rf(t,n,u),$i(t,n,u)):(Ct&&T&&Bu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function Jm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$m(t,n,f,o,u)):(t=bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Df(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(_,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function $m(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(to(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Df(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,$i(t,n,u)}return Mf(t,n,a,o,u)}function e0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return t0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,f!==null?f.cachePool:null),f!==null?im(n,f):Ju(),am(n);else return o=n.lanes=536870912,t0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Al(n,f.cachePool),im(n,f),La(),n.memoizedState=null):(t!==null&&Al(n,null),Ju(),La());return Rn(t,n,u,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function t0(t,n,a,o,u){var f=ju();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Al(n,null),Ju(),am(n),t!==null&&Yr(t,n,o,!0),n.childLanes=u,null}function Vl(t,n){return n=Xl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function n0(t,n,a){return gr(n,t.child,null,a),t=Vl(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function G_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=Vl(n,o),n.lanes=536870912,go(null,t);if(ef(n),(t=Kt)?(t=px(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Vl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=n0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Yr(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=Yt,o!==null&&(_=Xs(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,cr(t,_),Yn(o,t,_),bf;$l(),n=n0(t,n,a)}else t=f.treeContext,Kt=gi(_.nextSibling),An=n,Ct=!0,Aa=null,mi=!1,t!==null&&Vp(n,t),n=Vl(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Mf(t,n,a,o,u){return hr(n),a=nf(t,n,a,o,void 0,u),o=af(),t!==null&&!fn?(rf(t,n,u),$i(t,n,u)):(Ct&&o&&Bu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function i0(t,n,a,o,u,f){return hr(n),n.updateQueue=null,a=sm(n,o,a,u),rm(t),o=af(),t!==null&&!fn?(rf(t,n,f),$i(t,n,f)):(Ct&&o&&Bu(n),n.flags|=1,Rn(t,n,a,f),n.child)}function a0(t,n,a,o,u){if(hr(n),n.stateNode===null){var f=Xr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Yu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):Xr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(_f(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Sf.enqueueReplaceState(f,f.state,null),fo(n,o,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,I=_r(a,T);f.props=I;var te=f.context,he=a.contextType;_=Xr,typeof he=="object"&&he!==null&&(_=Cn(he));var _e=a.getDerivedStateFromProps;he=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||te!==_)&&Xm(n,f,o,_),wa=!1;var re=n.memoizedState;f.state=re,fo(n,o,f,u),uo(),te=n.memoizedState,T||re!==te||wa?(typeof _e=="function"&&(_f(n,a,_e,o),te=n.memoizedState),(I=wa||km(n,a,I,o,re,te,_))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=te),f.props=o,f.state=te,f.context=_,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Zu(t,n),_=n.memoizedProps,he=_r(a,_),f.props=he,_e=n.pendingProps,re=f.context,te=a.contextType,I=Xr,typeof te=="object"&&te!==null&&(I=Cn(te)),T=a.getDerivedStateFromProps,(te=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_e||re!==I)&&Xm(n,f,o,I),wa=!1,re=n.memoizedState,f.state=re,fo(n,o,f,u),uo();var ce=n.memoizedState;_!==_e||re!==ce||wa||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof T=="function"&&(_f(n,a,T,o),ce=n.memoizedState),(he=wa||km(n,a,he,o,re,ce,I)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=I,o=he):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,kl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=$i(t,n,u),t}function r0(t,n,a,o){return fr(),n.flags|=256,Rn(t,n,a,o),n.child}var Ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(t){return{baseLanes:t,cachePool:Yp()}}function Af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function s0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?Na(n):La(),(t=Kt)?(t=px(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ip(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw Ca(n);return ld(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(La(),u=n.mode,T=Xl({mode:"hidden",children:T},u),o=ur(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,_,a),n.memoizedState=Ef,go(null,o)):(Na(n),Cf(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=Rf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),T=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),T=ur(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,gr(n,t.child,null,a),o=n.child,o.memoizedState=Tf(a),o.childLanes=Af(t,_,a),n.memoizedState=Ef,n=go(null,o));else if(Na(n),ld(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var te=_.dgst;_=te,o=Error(r(419)),o.stack="",o.digest=_,ao({value:o,source:null,stack:null}),n=Rf(t,n,a)}else if(fn||Yr(t,n,a,!1),_=(a&t.childLanes)!==0,fn||_){if(_=Yt,_!==null&&(o=Xs(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,cr(t,o),Yn(_,t,o),bf;od(T)||$l(),n=Rf(t,n,a)}else od(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,Kt=gi(T.nextSibling),An=n,Ct=!0,Aa=null,mi=!1,t!==null&&Vp(n,t),n=Cf(n,o.children),n.flags|=4096);return n}return u?(La(),T=o.fallback,u=n.mode,I=t.child,te=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,te!==null?T=qi(te,T):(T=ur(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,go(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Tf(a):(u=T.cachePool,u!==null?(I=cn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Yp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=Af(t,_,a),n.memoizedState=Ef,go(t.child,o)):(Na(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Cf(t,n){return n=Xl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Xl(t,n){return t=$n(22,t,null,n),t.lanes=0,t}function Rf(t,n,a){return gr(n,t.child,null,a),t=Cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function o0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Vu(t.return,n,a)}function wf(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function l0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=rn.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,ge(rn,_),Rn(t,n,o,a),o=Ct?io:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,a,n);else if(t.tag===19)o0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),wf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}wf(n,!0,a,null,f,o);break;case"together":wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Yr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Df(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function V_(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ra(n,cn,t.memoizedState.cache),fr();break;case 27:case 5:Be(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?s0(t,n,a):(Na(n),t=$i(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Yr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return l0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(rn,rn.current),o)break;return null;case 22:return n.lanes=0,e0(t,n,a,n.pendingProps);case 24:Ra(n,cn,t.memoizedState.cache)}return $i(t,n,a)}function c0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Df(t,a)&&(n.flags&128)===0)return fn=!1,V_(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Ct&&(n.flags&1048576)!==0&&Gp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Ou(t)?(o=_r(t,o),n.tag=1,n=a0(null,n,t,o,a)):(n.tag=0,n=Mf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=Km(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=Jm(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return Mf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_r(o,n.pendingProps),a0(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Zu(t,n),fo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ra(n,cn,o),o!==f.cache&&ku(n,[cn],a,!0),uo(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=r0(t,n,o,a);break e}else if(o!==u){u=di(Error(r(424)),n),ao(u),n=r0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=gi(t.firstChild),An=n,Ct=!0,Aa=null,mi=!0,a=em(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),o===u){n=$i(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=Sx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ct||(a=n.type,t=n.pendingProps,o=sc(Z.current).createElement(a),o[ln]=n,o[pn]=t,wn(o,a,t),ie(o),n.stateNode=o):n.memoizedState=Sx(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Be(n),t===null&&Ct&&(o=n.stateNode=gx(n.type,n.pendingProps,Z.current),An=n,mi=!0,u=Kt,Ga(n.type)?(cd=u,Kt=gi(o.firstChild)):Kt=u),Rn(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=Kt)&&(o=vS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,An=n,Kt=gi(o.firstChild),mi=!1,u=!0):u=!1),u||Ca(n)),Be(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,ad(u,f)?o=null:_!==null&&ad(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=nf(t,n,L_,null,null,a),No._currentValue=u),kl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&Ct&&((t=a=Kt)&&(a=_S(a,n.pendingProps,mi),a!==null?(n.stateNode=a,An=n,Kt=null,t=!0):t=!1),t||Ca(n)),null;case 13:return s0(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=gr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return Km(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ra(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=Cn(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return $m(t,n,n.type,n.pendingProps,a);case 19:return l0(t,n,a);case 31:return G_(t,n,a);case 22:return e0(t,n,a,n.pendingProps);case 24:return hr(n),o=Cn(cn),t===null?(u=ju(),u===null&&(u=Yt,f=Xu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Yu(n),Ra(n,cn,u)):((t.lanes&a)!==0&&(Zu(t,n),fo(n,null,null,a),uo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,cn,o)):(o=f.cache,Ra(n,cn,o),o!==u.cache&&ku(n,[cn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(t){t.flags|=4}function Uf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(z0())t.flags|=8192;else throw xr=Rl,qu}else t.flags&=-16777217}function u0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tx(n))if(z0())t.flags|=8192;else throw xr=Rl,qu}function Wl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,ss|=n)}function vo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function k_(t,n,a){var o=n.pendingProps;switch(Fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Qi(cn),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(qr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hu())),Jt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(Jt(n),u0(n,f)):(Jt(n),Uf(n,u,null,o,a))):f?f!==t.memoizedState?(ea(n),Jt(n),u0(n,f)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(n),Jt(n),Uf(n,u,t,o,a)),null;case 27:if(rt(n),a=Z.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=be.current,qr(n)?kp(n):(t=gx(u,o,a),n.stateNode=t,ea(n))}return Jt(n),null;case 5:if(rt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(f=be.current,qr(n))kp(n);else{var _=sc(Z.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[ln]=n,f[pn]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return Jt(n),Uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Z.current,qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||sx(t.nodeValue,a)),t||Ca(n,!0)}else t=sc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=qr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Jt(n),null);case 4:return Pe(),t===null&&$f(n.stateNode.containerInfo),Jt(n),null;case 10:return Qi(n.type),Jt(n),null;case 19:if(K(rn),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Nl(t),f!==null){for(n.flags|=128,vo(o,!1),t=f.updateQueue,n.updateQueue=t,Wl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Fp(a,t),a=a.sibling;return ge(rn,rn.current&1|2),Ct&&Yi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&M()>Ql&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Nl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Wl(n,t),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ct)return Jt(n),null}else 2*M()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=M(),t.sibling=null,a=rn.current,ge(rn,u?a&1|2:a&1),Ct&&Yi(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return ti(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(cn),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function X_(t,n){switch(Fu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(cn),Pe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(rn),null;case 4:return Pe(),null;case 10:return Qi(n.type),null;case 22:case 23:return ti(n),$u(),t!==null&&K(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(cn),null;case 25:return null;default:return null}}function f0(t,n){switch(Fu(n),n.tag){case 3:Qi(cn),Pe();break;case 26:case 27:case 5:rt(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:K(rn);break;case 10:Qi(n.type);break;case 22:case 23:ti(n),$u(),t!==null&&K(pr);break;case 24:Qi(cn)}}function _o(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(T){Ft(n,n.return,T)}}function Oa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var I=a,te=T;try{te()}catch(he){Ft(u,I,he)}}}o=o.next}while(o!==f)}}catch(he){Ft(n,n.return,he)}}function d0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{nm(n,a)}catch(o){Ft(t,t.return,o)}}}function h0(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Ft(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(t,n,u)}else a.current=null}function p0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ft(t,t.return,u)}}function Nf(t,n,a){try{var o=t.stateNode;dS(o,t.type,a,n),o[pn]=n}catch(u){Ft(t,t.return,u)}}function m0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Of(t,n,a),t=t.sibling;t!==null;)Of(t,n,a),t=t.sibling}function jl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function x0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[ln]=t,n[pn]=a}catch(f){Ft(t,t.return,f)}}var ta=!1,dn=!1,Pf=!1,g0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function W_(t,n){if(t=t.containerInfo,nd=hc,t=wp(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,T=-1,I=-1,te=0,he=0,_e=t,re=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(T=_+u),_e!==f||o!==0&&_e.nodeType!==3||(I=_+o),_e.nodeType===3&&(_+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)re=_e,_e=ce;for(;;){if(_e===t)break t;if(re===a&&++te===u&&(T=_),re===f&&++he===o&&(I=_),(ce=_e.nextSibling)!==null)break;_e=re,re=_e.parentNode}_e=ce}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(id={focusedElem:t,selectionRange:a},hc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ve=_r(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){Ft(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)sd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":sd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function v0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),o&4&&_o(5,a);break;case 1:if(ia(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ft(a,a.return,_)}else{var u=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ft(a,a.return,_)}}o&64&&d0(a),o&512&&So(a,a.return);break;case 3:if(ia(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{nm(t,n)}catch(_){Ft(a,a.return,_)}}break;case 27:n===null&&o&4&&x0(a);case 26:case 5:ia(t,a),n===null&&o&4&&p0(a),o&512&&So(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),o&4&&y0(t,a);break;case 13:ia(t,a),o&4&&b0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=eS.bind(null,a),SS(t,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||dn,u=ta;var f=dn;ta=o,(dn=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ta=u,dn=f}break;case 30:break;default:ia(t,a)}}function _0(t){var n=t.alternate;n!==null&&(t.alternate=null,_0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Xn=!1;function na(t,n,a){for(a=a.child;a!==null;)S0(t,n,a),a=a.sibling}function S0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:dn||zi(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||zi(a,n);var o=$t,u=Xn;Ga(a.type)&&($t=a.stateNode,Xn=!1),na(t,n,a),wo(a.stateNode),$t=o,Xn=u;break;case 5:dn||zi(a,n);case 6:if(o=$t,u=Xn,$t=null,na(t,n,a),$t=o,Xn=u,$t!==null)if(Xn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:$t!==null&&(Xn?(t=$t,dx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):dx($t,a.stateNode));break;case 4:o=$t,u=Xn,$t=a.stateNode.containerInfo,Xn=!0,na(t,n,a),$t=o,Xn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),dn||Oa(4,a,n),na(t,n,a);break;case 1:dn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&h0(a,n,o)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,na(t,n,a),dn=o;break;default:na(t,n,a)}}function y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Ft(n,n.return,a)}}}function b0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Ft(n,n.return,a)}}function j_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new g0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new g0),n;default:throw Error(r(435,t.tag))}}function ql(t,n){var a=j_(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=tS.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Ga(T.type)){$t=T.stateNode,Xn=!1;break e}break;case 5:$t=T.stateNode,Xn=!1;break e;case 3:case 4:$t=T.stateNode.containerInfo,Xn=!0;break e}T=T.return}if($t===null)throw Error(r(160));S0(f,_,u),$t=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)M0(n,t),n=n.sibling}var Ti=null;function M0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),jn(t),o&4&&(Oa(3,t,t.return),_o(3,t),Oa(5,t,t.return));break;case 1:Wn(n,t),jn(t),o&512&&(dn||a===null||zi(a,a.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Wn(n,t),jn(t),o&512&&(dn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[rr]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[ln]=t,ie(f),o=f;break e;case"link":var _=Mx("link","href",u).get(o+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Mx("meta","content",u).get(o+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[ln]=t,ie(f),o=f}t.stateNode=o}else Ex(u,t.type,t.stateNode);else t.stateNode=bx(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ex(u,t.type,t.stateNode):bx(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),jn(t),o&512&&(dn||a===null||zi(a,a.return)),a!==null&&o&4&&Nf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),jn(t),o&512&&(dn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Li(u,"")}catch(Ve){Ft(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Nf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Pf=!0);break;case 6:if(Wn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){Ft(t,t.return,Ve)}}break;case 3:if(cc=null,u=Ti,Ti=oc(n.containerInfo),Wn(n,t),Ti=u,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(Ve){Ft(t,t.return,Ve)}Pf&&(Pf=!1,E0(t));break;case 4:o=Ti,Ti=oc(t.stateNode.containerInfo),Wn(n,t),jn(t),Ti=o;break;case 12:Wn(n,t),jn(t);break;case 31:Wn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 13:Wn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=M()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,te=ta,he=dn;if(ta=te||u,dn=he||I,Wn(n,t),dn=he,ta=te,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ta||dn||Sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var _e=I.memoizedProps.style,re=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ve){Ft(I,I.return,Ve)}}}else if(n.tag===18){if(a===null){I=n;try{var ce=I.stateNode;u?hx(ce,!0):hx(I.stateNode,!1)}catch(Ve){Ft(I,I.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(t,a))));break;case 19:Wn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(m0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Lf(t);jl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Li(_,""),a.flags&=-33);var T=Lf(t);jl(t,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,te=Lf(t);Of(t,te,I);break;default:throw Error(r(161))}}catch(he){Ft(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function E0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;E0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)v0(t,n.alternate,n),n=n.sibling}function Sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),Sr(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&h0(n,n.return,a),Sr(n);break;case 27:wo(n.stateNode);case 26:case 5:zi(n,n.return),Sr(n);break;case 22:n.memoizedState===null&&Sr(n);break;case 30:Sr(n);break;default:Sr(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),_o(4,f);break;case 1:if(aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Ft(o,o.return,te)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)tm(I[u],T)}catch(te){Ft(o,o.return,te)}}a&&_&64&&d0(f),So(f,f.return);break;case 27:x0(f);case 26:case 5:aa(u,f,a),a&&o===null&&_&4&&p0(f),So(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&_&4&&y0(u,f);break;case 13:aa(u,f,a),a&&_&4&&b0(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),So(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function zf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ro(a))}function Bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)T0(t,n,a,o),n=n.sibling}function T0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&_o(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ro(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):yo(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,is(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&zf(_,n);break;case 24:Ai(t,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ai(t,n,a,o)}}function is(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,T=a,I=o,te=_.flags;switch(_.tag){case 0:case 11:case 15:is(f,_,T,I,u),_o(8,_);break;case 23:break;case 22:var he=_.stateNode;_.memoizedState!==null?he._visibility&2?is(f,_,T,I,u):yo(f,_):(he._visibility|=2,is(f,_,T,I,u)),u&&te&2048&&zf(_.alternate,_);break;case 24:is(f,_,T,I,u),u&&te&2048&&Bf(_.alternate,_);break;default:is(f,_,T,I,u)}n=n.sibling}}function yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&zf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Bf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var bo=8192;function as(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)A0(t,n,a),t=t.sibling}function A0(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&bo&&t.memoizedState!==null&&NS(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var o=Ti;Ti=oc(t.stateNode.containerInfo),as(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,as(t,n,a),bo=o):as(t,n,a));break;default:as(t,n,a)}}function C0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,w0(o,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R0(t),t=t.sibling}function R0(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):Mo(t);break;default:Mo(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,w0(o,t)}C0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function w0(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(_0(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var q_={getCacheForType:function(t){var n=Cn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},Y_=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,_t=null,yt=0,Bt=0,ni=null,Pa=!1,rs=!1,Ff=!1,ra=0,tn=0,za=0,yr=0,If=0,ii=0,ss=0,Eo=null,qn=null,Hf=!1,Zl=0,D0=0,Ql=1/0,Kl=null,Ba=null,xn=0,Fa=null,os=null,sa=0,Gf=0,Vf=null,U0=null,To=0,kf=null;function ai(){return(Pt&2)!==0&&yt!==0?yt&-yt:D.T!==null?Zf():Ws()}function N0(){if(ii===0)if((yt&536870912)===0||Ct){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ii=t}else ii=536870912;return t=ei.current,t!==null&&(t.flags|=32),ii}function Yn(t,n,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ia(t,yt,ii,!1)),Un(t,a),((Pt&2)===0||t!==Yt)&&(t===Yt&&((Pt&2)===0&&(yr|=a),tn===4&&Ia(t,yt,ii,!1)),Bi(t))}function L0(t,n,a){if((Pt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),u=o?K_(t,n):Wf(t,n,!0),f=o;do{if(u===0){rs&&!o&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Z_(a)){u=Wf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var T=t;u=Eo;var I=T.current.memoizedState.isDehydrated;if(I&&(ls(T,_).flags|=256),_=Wf(T,_,!1),_!==2){if(Ff&&!I){T.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break e}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),Ia(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(o,n,ii,!Pa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Zl+300-M(),10<u)){if(Ia(o,n,ii,!Pa),Se(o,0,!0)!==0)break e;sa=n,o.timeoutHandle=ux(O0.bind(null,o,a,qn,Kl,Hf,n,ii,yr,ss,Pa,f,"Throttled",-0,0),u);break e}O0(o,a,qn,Kl,Hf,n,ii,yr,ss,Pa,f,null,-0,0)}}break}while(!0);Bi(t)}function O0(t,n,a,o,u,f,_,T,I,te,he,_e,re,ce){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},A0(n,f,_e);var Ve=(f&62914560)===f?Zl-M():(f&4194048)===f?D0-M():0;if(Ve=LS(_e,Ve),Ve!==null){sa=f,t.cancelPendingCommit=Ve(V0.bind(null,t,n,f,a,o,u,_,T,I,he,_e,null,re,ce)),Ia(t,f,_,!te);return}}V0(t,n,f,a,o,u,_,T,I)}function Z_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,o){n&=~If,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-ke(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&cl(t,a,n)}function Jl(){return(Pt&6)===0?(Ao(0),!1):!0}function Xf(){if(_t!==null){if(Bt===0)var t=_t.return;else t=_t,Zi=dr=null,sf(t),Jr=null,oo=0,t=_t;for(;t!==null;)f0(t.alternate,t),t=t.return;_t=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Xf(),Yt=t,_t=a=qi(t.current,null),yt=n,Bt=0,ni=null,Pa=!1,rs=Ie(t,n),Ff=!1,ss=ii=If=yr=za=tn=0,qn=Eo=null,Hf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ke(o),f=1<<u;n|=t[u],o&=~f}return ra=n,_l(),a}function P0(t,n){ht=null,D.H=xo,n===Kr||n===Cl?(n=Kp(),Bt=3):n===qu?(n=Kp(),Bt=4):Bt=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,_t===null&&(tn=1,Gl(t,di(n,t.current)))}function z0(){var t=ei.current;return t===null?!0:(yt&4194048)===yt?xi===null:(yt&62914560)===yt||(yt&536870912)!==0?t===xi:!1}function B0(){var t=D.H;return D.H=xo,t===null?xo:t}function F0(){var t=D.A;return D.A=q_,t}function $l(){tn=4,Pa||(yt&4194048)!==yt&&ei.current!==null||(rs=!0),(za&134217727)===0&&(yr&134217727)===0||Yt===null||Ia(Yt,yt,ii,!1)}function Wf(t,n,a){var o=Pt;Pt|=2;var u=B0(),f=F0();(Yt!==t||yt!==n)&&(Kl=null,ls(t,n)),n=!1;var _=tn;e:do try{if(Bt!==0&&_t!==null){var T=_t,I=ni;switch(Bt){case 8:Xf(),_=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var te=Bt;if(Bt=0,ni=null,cs(t,T,I,te),a&&rs){_=0;break e}break;default:te=Bt,Bt=0,ni=null,cs(t,T,I,te)}}Q_(),_=tn;break}catch(he){P0(t,he)}while(!0);return n&&t.shellSuspendCounter++,Zi=dr=null,Pt=o,D.H=u,D.A=f,_t===null&&(Yt=null,yt=0,_l()),_}function Q_(){for(;_t!==null;)I0(_t)}function K_(t,n){var a=Pt;Pt|=2;var o=B0(),u=F0();Yt!==t||yt!==n?(Kl=null,Ql=M()+500,ls(t,n)):rs=Ie(t,n);e:do try{if(Bt!==0&&_t!==null){n=_t;var f=ni;t:switch(Bt){case 1:Bt=0,ni=null,cs(t,n,f,1);break;case 2:case 9:if(Zp(f)){Bt=0,ni=null,H0(n);break}n=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Bi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Zp(f)?(Bt=0,ni=null,H0(n)):(Bt=0,ni=null,cs(t,n,f,7));break;case 5:var _=null;switch(_t.tag){case 26:_=_t.memoizedState;case 5:case 27:var T=_t;if(_?Tx(_):T.stateNode.complete){Bt=0,ni=null;var I=T.sibling;if(I!==null)_t=I;else{var te=T.return;te!==null?(_t=te,ec(te)):_t=null}break t}}Bt=0,ni=null,cs(t,n,f,5);break;case 6:Bt=0,ni=null,cs(t,n,f,6);break;case 8:Xf(),tn=6;break e;default:throw Error(r(462))}}J_();break}catch(he){P0(t,he)}while(!0);return Zi=dr=null,D.H=o,D.A=u,Pt=a,_t!==null?0:(Yt=null,yt=0,_l(),tn)}function J_(){for(;_t!==null&&!lt();)I0(_t)}function I0(t){var n=c0(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?ec(t):_t=n}function H0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=i0(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=i0(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:sf(n);default:f0(a,n),n=_t=Fp(n,ra),n=c0(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?ec(t):_t=n}function cs(t,n,a,o){Zi=dr=null,sf(n),Jr=null,oo=0;var u=n.return;try{if(H_(t,u,n,a,yt)){tn=1,Gl(t,di(a,t.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;tn=1,Gl(t,di(a,t.current)),_t=null;return}n.flags&32768?(Ct||o===1?t=!0:rs||(yt&536870912)!==0?t=!1:(Pa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),G0(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){G0(n,Pa);return}t=n.return;var a=k_(n.alternate,n,ra);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);tn===0&&(tn=5)}function G0(t,n){do{var a=X_(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);tn=6,_t=null}function V0(t,n,a,o,u,f,_,T,I){t.cancelPendingCommit=null;do tc();while(xn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Nu,Qn(t,a,f,_,T,I),t===Yt&&(_t=Yt=null,yt=0),os=n,Fa=t,sa=a,Gf=f,Vf=u,U0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(fe,function(){return q0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=W.p,W.p=2,_=Pt,Pt|=4;try{W_(t,n,a)}finally{Pt=_,W.p=u,D.T=o}}xn=1,k0(),X0(),W0()}}function k0(){if(xn===1){xn=0;var t=Fa,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=W.p;W.p=2;var u=Pt;Pt|=4;try{M0(n,t);var f=id,_=wp(t.containerInfo),T=f.focusedElem,I=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&Rp(T.ownerDocument.documentElement,T)){if(I!==null&&Cu(T)){var te=I.start,he=I.end;if(he===void 0&&(he=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(he,T.value.length);else{var _e=T.ownerDocument||document,re=_e&&_e.defaultView||window;if(re.getSelection){var ce=re.getSelection(),Ve=T.textContent.length,et=Math.min(I.start,Ve),kt=I.end===void 0?et:Math.min(I.end,Ve);!ce.extend&&et>kt&&(_=kt,kt=et,et=_);var Y=Cp(T,et),X=Cp(T,kt);if(Y&&X&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==X.node||ce.focusOffset!==X.offset)){var $=_e.createRange();$.setStart(Y.node,Y.offset),ce.removeAllRanges(),et>kt?(ce.addRange($),ce.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),ce.addRange($))}}}}for(_e=[],ce=T;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var xe=_e[T];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}hc=!!nd,id=nd=null}finally{Pt=u,W.p=o,D.T=a}}t.current=n,xn=2}}function X0(){if(xn===2){xn=0;var t=Fa,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=W.p;W.p=2;var u=Pt;Pt|=4;try{v0(t,n.alternate,n)}finally{Pt=u,W.p=o,D.T=a}}xn=3}}function W0(){if(xn===4||xn===3){xn=0,N();var t=Fa,n=os,a=sa,o=U0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,os=Fa=null,j0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),ar(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=W.p,W.p=2,D.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var T=o[_];f(T.value,{componentStack:T.stack})}}finally{D.T=n,W.p=u}}(sa&3)!==0&&tc(),Bi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===kf?To++:(To=0,kf=t):To=0,Ao(0)}}function j0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ro(n)))}function tc(){return k0(),X0(),W0(),q0()}function q0(){if(xn!==5)return!1;var t=Fa,n=Gf;Gf=0;var a=ar(sa),o=D.T,u=W.p;try{W.p=32>a?32:a,D.T=null,a=Vf,Vf=null;var f=Fa,_=sa;if(xn=0,os=Fa=null,sa=0,(Pt&6)!==0)throw Error(r(331));var T=Pt;if(Pt|=4,R0(f.current),T0(f,f.current,_,a),Pt=T,Ao(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{W.p=u,D.T=o,j0(t,n)}}function Y0(t,n,a){n=di(a,n),n=yf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(Un(t,2),Bi(t))}function Ft(t,n,a){if(t.tag===3)Y0(t,t,a);else for(;n!==null;){if(n.tag===3){Y0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ba===null||!Ba.has(o))){t=di(a,t),a=Zm(2),o=Ua(n,a,2),o!==null&&(Qm(a,o,n,t),Un(o,2),Bi(o));break}}n=n.return}}function jf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Y_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ff=!0,u.add(a),t=$_.bind(null,t,n,a),n.then(t,t))}function $_(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(yt&a)===a&&(tn===4||tn===3&&(yt&62914560)===yt&&300>M()-Zl?(Pt&2)===0&&ls(t,0):If|=a,ss===yt&&(ss=0)),Bi(t)}function Z0(t,n){n===0&&(n=Ht()),t=cr(t,n),t!==null&&(Un(t,n),Bi(t))}function eS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Z0(t,a)}function tS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Z0(t,a)}function nS(t,n){return jt(t,n)}var nc=null,us=null,qf=!1,ic=!1,Yf=!1,Ha=0;function Bi(t){t!==us&&t.next===null&&(us===null?nc=us=t:us=us.next=t),ic=!0,qf||(qf=!0,aS())}function Ao(t,n){if(!Yf&&ic){Yf=!0;do for(var a=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-ke(42|t)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$0(o,f))}else f=yt,f=Se(o,o===Yt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ie(o,f)||(a=!0,$0(o,f));o=o.next}while(a);Yf=!1}}function iS(){Q0()}function Q0(){ic=qf=!1;var t=0;Ha!==0&&pS()&&(t=Ha);for(var n=M(),a=null,o=nc;o!==null;){var u=o.next,f=K0(o,n);f===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(us=a)):(a=o,(t!==0||(f&3)!==0)&&(ic=!0)),o=u}xn!==0&&xn!==5||Ao(t),Ha!==0&&(Ha=0)}function K0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ke(f),T=1<<_,I=u[_];I===-1?((T&a)===0||(T&o)!==0)&&(u[_]=st(T,n)):I<=n&&(t.expiredLanes|=T),f&=~T}if(n=Yt,a=yt,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ye(o),ar(a)){case 2:case 8:a=ye;break;case 32:a=fe;break;case 268435456:a=Le;break;default:a=fe}return o=J0.bind(null,t),a=jt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),t.callbackPriority=2,t.callbackNode=null,2}function J0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var o=yt;return o=Se(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(L0(t,o,n),K0(t,M()),t.callbackNode!=null&&t.callbackNode===a?J0.bind(null,t):null)}function $0(t,n){if(tc())return null;L0(t,n,!0)}function aS(){xS(function(){(Pt&6)!==0?jt(ve,iS):Q0()})}function Zf(){if(Ha===0){var t=Zr;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ha=t}return Ha}function ex(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function tx(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function rS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=ex((u[pn]||null).action),_=o.submitter;_&&(n=(n=_[pn]||null)?ex(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new ml("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var I=_?tx(u,_):new FormData(u);mf(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(T.preventDefault(),I=_?tx(u,_):new FormData(u),mf(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Qf=0;Qf<Uu.length;Qf++){var Kf=Uu[Qf],sS=Kf.toLowerCase(),oS=Kf[0].toUpperCase()+Kf.slice(1);Ei(sS,"on"+oS)}Ei(Np,"onAnimationEnd"),Ei(Lp,"onAnimationIteration"),Ei(Op,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(M_,"onTransitionRun"),Ei(E_,"onTransitionStart"),Ei(T_,"onTransitionCancel"),Ei(Pp,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Ne("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ne("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ne("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ne("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ne("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function nx(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var T=o[_],I=T.instance,te=T.currentTarget;if(T=T.listener,I!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=te;try{f(u)}catch(he){vl(he)}u.currentTarget=null,f=I}else for(_=0;_<o.length;_++){if(T=o[_],I=T.instance,te=T.currentTarget,T=T.listener,I!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=te;try{f(u)}catch(he){vl(he)}u.currentTarget=null,f=I}}}}function St(t,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var o=t+"__bubble";a.has(o)||(ix(n,t,2,!1),a.add(o))}function Jf(t,n,a){var o=0;n&&(o|=4),ix(a,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[ac]){t[ac]=!0,Q.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||Jf(a,!1,t),Jf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,Jf("selectionchange",!1,n))}}function ix(t,n,a,o){switch(Nx(n)){case 2:var u=zS;break;case 8:u=BS;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!vu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ed(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var T=o.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=ba(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=f=_;continue e}T=T.parentNode}}o=o.return}lp(function(){var te=f,he=xu(a),_e=[];e:{var re=zp.get(t);if(re!==void 0){var ce=ml,Ve=t;switch(t){case"keypress":if(hl(a)===0)break e;case"keydown":case"keyup":ce=t_;break;case"focusin":Ve="focus",ce=bu;break;case"focusout":Ve="blur",ce=bu;break;case"beforeblur":case"afterblur":ce=bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=a_;break;case Np:case Lp:case Op:ce=jv;break;case Pp:ce=s_;break;case"scroll":case"scrollend":ce=Gv;break;case"wheel":ce=l_;break;case"copy":case"cut":case"paste":ce=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=hp;break;case"toggle":case"beforetoggle":ce=u_}var et=(n&4)!==0,kt=!et&&(t==="scroll"||t==="scrollend"),Y=et?re!==null?re+"Capture":null:re;et=[];for(var X=te,$;X!==null;){var xe=X;if($=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||$===null||Y===null||(xe=Ys(X,Y),xe!=null&&et.push(Ro(X,xe,$))),kt)break;X=X.return}0<et.length&&(re=new ce(re,Ve,null,a,he),_e.push({event:re,listeners:et}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==mu&&(Ve=a.relatedTarget||a.fromElement)&&(ba(Ve)||Ve[Vi]))break e;if((ce||re)&&(re=he.window===he?he:(re=he.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(Ve=a.relatedTarget||a.toElement,ce=te,Ve=Ve?ba(Ve):null,Ve!==null&&(kt=c(Ve),et=Ve.tag,Ve!==kt||et!==5&&et!==27&&et!==6)&&(Ve=null)):(ce=null,Ve=te),ce!==Ve)){if(et=fp,xe="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=hp,xe="onPointerLeave",Y="onPointerEnter",X="pointer"),kt=ce==null?re:q(ce),$=Ve==null?re:q(Ve),re=new et(xe,X+"leave",ce,a,he),re.target=kt,re.relatedTarget=$,xe=null,ba(he)===te&&(et=new et(Y,X+"enter",Ve,a,he),et.target=$,et.relatedTarget=kt,xe=et),kt=xe,ce&&Ve)t:{for(et=cS,Y=ce,X=Ve,$=0,xe=Y;xe;xe=et(xe))$++;xe=0;for(var Qe=X;Qe;Qe=et(Qe))xe++;for(;0<$-xe;)Y=et(Y),$--;for(;0<xe-$;)X=et(X),xe--;for(;$--;){if(Y===X||X!==null&&Y===X.alternate){et=Y;break t}Y=et(Y),X=et(X)}et=null}else et=null;ce!==null&&ax(_e,re,ce,et,!1),Ve!==null&&kt!==null&&ax(_e,kt,Ve,et,!0)}}e:{if(re=te?q(te):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Ut=yp;else if(_p(re))if(bp)Ut=S_;else{Ut=v_;var Xe=g_}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&pu(te.elementType)&&(Ut=yp):Ut=__;if(Ut&&(Ut=Ut(t,te))){Sp(_e,Ut,a,he);break e}Xe&&Xe(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&yn(re,"number",re.value)}switch(Xe=te?q(te):window,t){case"focusin":(_p(Xe)||Xe.contentEditable==="true")&&(Gr=Xe,Ru=te,no=null);break;case"focusout":no=Ru=Gr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Dp(_e,a,he);break;case"selectionchange":if(b_)break;case"keydown":case"keyup":Dp(_e,a,he)}var mt;if(Eu)e:{switch(t){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Hr?gp(t,a)&&(bt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(pp&&a.locale!=="ko"&&(Hr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Hr&&(mt=cp()):(Ea=he,_u="value"in Ea?Ea.value:Ea.textContent,Hr=!0)),Xe=rc(te,bt),0<Xe.length&&(bt=new dp(bt,t,null,a,he),_e.push({event:bt,listeners:Xe}),mt?bt.data=mt:(mt=vp(a),mt!==null&&(bt.data=mt)))),(mt=d_?h_(t,a):p_(t,a))&&(bt=rc(te,"onBeforeInput"),0<bt.length&&(Xe=new dp("onBeforeInput","beforeinput",null,a,he),_e.push({event:Xe,listeners:bt}),Xe.data=mt)),rS(_e,t,te,a,he)}nx(_e,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function rc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ys(t,a),u!=null&&o.unshift(Ro(t,u,f)),u=Ys(t,n),u!=null&&o.push(Ro(t,u,f))),t.tag===3)return o;t=t.return}return[]}function cS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ax(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var T=a,I=T.alternate,te=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||te===null||(I=te,u?(te=Ys(a,f),te!=null&&_.unshift(Ro(a,te,I))):u||(te=Ys(a,f),te!=null&&_.push(Ro(a,te,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function rx(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(fS,"")}function sx(t,n){return n=rx(n),rx(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Li(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Li(t,""+o);break;case"className":Rt(t,"class",o);break;case"tabIndex":Rt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(t,a,o);break;case"style":sp(t,o,f);break;case"data":if(n!=="object"){Rt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Wi);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),pt(t,"popover",o);break;case"xlinkActuate":Dt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Dt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Dt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Dt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Dt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Dt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Dt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":pt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iv.get(a)||a,pt(t,a,o))}}function td(t,n,a,o,u,f){switch(a){case"style":sp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Li(t,o):(typeof o=="number"||typeof o=="bigint")&&Li(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ce.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):pt(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,f,_,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var T=f=_=u=null,I=null,te=null;for(o in a)if(a.hasOwnProperty(o)){var he=a[o];if(he!=null)switch(o){case"name":u=he;break;case"type":_=he;break;case"checked":I=he;break;case"defaultChecked":te=he;break;case"value":f=he;break;case"defaultValue":T=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Vt(t,n,o,he,a,null)}}Qt(t,f,T,I,te,_,u,!1);return;case"select":St("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":o=T;default:Vt(t,n,u,T,a,null)}n=f,a=_,t.multiple=!!o,n!=null?mn(t,!!o,n,!1):a!=null&&mn(t,!!o,a,!0);return;case"textarea":St("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Vt(t,n,_,T,a,null)}Tn(t,o,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,n,I,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)St(Co[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(o=a[te],o!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,te,o,a,null)}return;default:if(pu(n)){for(he in a)a.hasOwnProperty(he)&&(o=a[he],o!==void 0&&td(t,n,he,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Vt(t,n,T,o,a,null))}function dS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,I=null,te=null,he=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":I=_e;default:o.hasOwnProperty(ce)||Vt(t,n,ce,null,o,_e)}}for(var re in o){var ce=o[re];if(_e=a[re],o.hasOwnProperty(re)&&(ce!=null||_e!=null))switch(re){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":he=ce;break;case"value":_=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==_e&&Vt(t,n,re,ce,o,_e)}}ki(t,_,T,I,te,he,f,u);return;case"select":ce=_=T=re=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ce=I;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":re=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==I&&Vt(t,n,u,f,o,I)}n=T,a=_,o=ce,re!=null?mn(t,!!a,re,!1):!!o!=!!a&&(n!=null?mn(t,!!a,n,!0):mn(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Vt(t,n,T,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Vt(t,n,_,u,o,f)}bn(t,re,ce);return;case"option":for(var Ve in a)if(re=a[Ve],a.hasOwnProperty(Ve)&&re!=null&&!o.hasOwnProperty(Ve))switch(Ve){case"selected":t.selected=!1;break;default:Vt(t,n,Ve,null,o,re)}for(I in o)if(re=o[I],ce=a[I],o.hasOwnProperty(I)&&re!==ce&&(re!=null||ce!=null))switch(I){case"selected":t.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Vt(t,n,I,re,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)re=a[et],a.hasOwnProperty(et)&&re!=null&&!o.hasOwnProperty(et)&&Vt(t,n,et,null,o,re);for(te in o)if(re=o[te],ce=a[te],o.hasOwnProperty(te)&&re!==ce&&(re!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Vt(t,n,te,re,o,ce)}return;default:if(pu(n)){for(var kt in a)re=a[kt],a.hasOwnProperty(kt)&&re!==void 0&&!o.hasOwnProperty(kt)&&td(t,n,kt,void 0,o,re);for(he in o)re=o[he],ce=a[he],!o.hasOwnProperty(he)||re===ce||re===void 0&&ce===void 0||td(t,n,he,re,o,ce);return}}for(var Y in a)re=a[Y],a.hasOwnProperty(Y)&&re!=null&&!o.hasOwnProperty(Y)&&Vt(t,n,Y,null,o,re);for(_e in o)re=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||re===ce||re==null&&ce==null||Vt(t,n,_e,re,o,ce)}function ox(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&ox(_)){for(_=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],te=I.startTime;if(te>T)break;var he=I.transferSize,_e=I.initiatorType;he&&ox(_e)&&(I=I.responseEnd,_+=he*(I<T?1:(T-te)/(I-te)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function lx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cx(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var ux=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,fx=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof fx<"u"?function(t){return fx.resolve(null).then(t).catch(gS)}:ux;function gS(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function dx(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),ps(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[rr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&wo(t.ownerDocument.body);a=u}while(a);ps(n)}function hx(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[rr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function _S(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function px(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function od(t){return t.data==="$?"||t.data==="$~"}function ld(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var cd=null;function mx(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xx(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function gx(t,n,a){switch(n=sc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qs(t)}var vi=new Map,vx=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=W.d;W.d={f:yS,r:bS,D:MS,C:ES,L:TS,m:AS,X:RS,S:CS,M:wS};function yS(){var t=oa.f(),n=Jl();return t||n}function bS(t){var n=C(t);n!==null&&n.tag===5&&n.type==="form"?Pm(n):oa.r(t)}var fs=typeof document>"u"?null:document;function _x(t,n,a){var o=fs;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),vx.has(u)||(vx.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),ie(n),o.head.appendChild(n)))}}function MS(t){oa.D(t),_x("dns-prefetch",t,null)}function ES(t,n){oa.C(t,n),_x("preconnect",t,n)}function TS(t,n,a){oa.L(t,n,a);var o=fs;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var f=u;switch(n){case"style":f=ds(t);break;case"script":f=hs(t)}vi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),wn(n,"link",t),ie(n),o.head.appendChild(n)))}}function AS(t,n){oa.m(t,n);var a=fs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hs(t)}if(!vi.has(f)&&(t=g({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),wn(o,"link",t),ie(o),a.head.appendChild(o)}}}function CS(t,n,a){oa.S(t,n,a);var o=fs;if(o&&t){var u=oe(o).hoistableStyles,f=ds(t);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=o.querySelector(Do(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&ud(t,a);var I=_=o.createElement("link");ie(I),wn(I,"link",t),I._p=new Promise(function(te,he){I.onload=te,I.onerror=he}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,lc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function RS(t,n){oa.X(t,n);var a=fs;if(a&&t){var o=oe(a).hoistableScripts,u=hs(t),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(t=g({src:t,async:!0},n),(n=vi.get(u))&&fd(t,n),f=a.createElement("script"),ie(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wS(t,n){oa.M(t,n);var a=fs;if(a&&t){var o=oe(a).hoistableScripts,u=hs(t),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&fd(t,n),f=a.createElement("script"),ie(f),wn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Sx(t,n,a,o){var u=(u=Z.current)?oc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=oe(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var f=oe(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Do(t)))&&!f._p&&(_.instance=f,_.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||DS(u,t,a,_.state))),n&&o===null)throw Error(r(528,""));return _}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=oe(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+Zt(t)+'"'}function Do(t){return'link[rel="stylesheet"]['+t+"]"}function yx(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function DS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),ie(n),t.head.appendChild(n))}function hs(t){return'[src="'+Zt(t)+'"]'}function Uo(t){return"script[async]"+t}function bx(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,ie(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ie(o),wn(o,"style",u),lc(o,a.precedence,t),n.instance=o;case"stylesheet":u=ds(a.href);var f=t.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,ie(f),f;o=yx(a),(u=vi.get(u))&&ud(o,u),f=(t.ownerDocument||t).createElement("link"),ie(f);var _=f;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),wn(f,"link",o),n.state.loading|=4,lc(f,a.precedence,t),n.instance=f;case"script":return f=hs(a.src),(u=t.querySelector(Uo(f)))?(n.instance=u,ie(u),u):(o=a,(u=vi.get(f))&&(o=g({},a),fd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ie(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,t));return n.instance}function lc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var T=o[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cc=null;function Mx(t,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[rr]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var T=o.get(_);T?T.push(f):o.set(_,[f])}}return o}function Ex(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function US(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function NS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(o.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=uc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,ie(f);return}f=n.ownerDocument||n,o=yx(o),(u=vi.get(u))&&ud(o,u),f=f.createElement("link"),ie(f);var _=f;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),wn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=uc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var dd=0;function LS(t,n){return t.stylesheets&&t.count===0&&dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&dd===0&&(dd=62500*hS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&dc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>dd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(OS,t),fc=null,uc.call(t))}function OS(t,n){if(!(n.state.loading&4)){var a=fc.get(t);if(a)var o=a.get(null);else{a=new Map,fc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var No={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function PS(t,n,a,o,u,f,_,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Ax(t,n,a,o,u,f,_,T,I,te,he,_e){return t=new PS(t,n,a,_,I,te,he,_e,T),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),t.current=f,f.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Yu(f),t}function Cx(t){return t?(t=Xr,t):Xr}function Rx(t,n,a,o,u,f){u=Cx(u),o.context===null?o.context=u:o.pendingContext=u,o=Da(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ua(t,o,n),a!==null&&(Yn(a,t,n),co(a,t,n))}function wx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function hd(t,n){wx(t,n),(t=t.alternate)&&wx(t,n)}function Dx(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&Yn(n,t,67108864),hd(t,67108864)}}function Ux(t){if(t.tag===13||t.tag===31){var n=ai();n=Mi(n);var a=cr(t,n);a!==null&&Yn(a,t,n),hd(t,n)}}var hc=!0;function zS(t,n,a,o){var u=D.T;D.T=null;var f=W.p;try{W.p=2,pd(t,n,a,o)}finally{W.p=f,D.T=u}}function BS(t,n,a,o){var u=D.T;D.T=null;var f=W.p;try{W.p=8,pd(t,n,a,o)}finally{W.p=f,D.T=u}}function pd(t,n,a,o){if(hc){var u=md(o);if(u===null)ed(t,n,o,pc,a),Lx(t,o);else if(IS(u,t,n,a,o))o.stopPropagation();else if(Lx(t,o),n&4&&-1<FS.indexOf(t)){for(;u!==null;){var f=C(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ee(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-ke(_);T.entanglements[1]|=I,_&=~I}Bi(f),(Pt&6)===0&&(Ql=M()+500,Ao(0))}}break;case 31:case 13:T=cr(f,2),T!==null&&Yn(T,f,2),Jl(),hd(f,2)}if(f=md(o),f===null&&ed(t,n,o,pc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else ed(t,n,o,null,a)}}function md(t){return t=xu(t),xd(t)}var pc=null;function xd(t){if(pc=null,t=ba(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function Nx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case ve:return 2;case ye:return 8;case fe:case je:return 32;case Le:return 268435456;default:return 32}default:return 32}}var gd=!1,Va=null,ka=null,Xa=null,Lo=new Map,Oo=new Map,Wa=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lx(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=C(n),n!==null&&Dx(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function IS(t,n,a,o,u){switch(n){case"focusin":return Va=Po(Va,t,n,a,o,u),!0;case"dragenter":return ka=Po(ka,t,n,a,o,u),!0;case"mouseover":return Xa=Po(Xa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Po(Lo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,t,n,a,o,u)),!0}return!1}function Ox(t){var n=ba(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,js(t.priority,function(){Ux(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,js(t.priority,function(){Ux(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mu=o,a.target.dispatchEvent(o),mu=null}else return n=C(a),n!==null&&Dx(n),t.blockedOn=a,!1;n.shift()}return!0}function Px(t,n,a){mc(t)&&a.delete(n)}function HS(){gd=!1,Va!==null&&mc(Va)&&(Va=null),ka!==null&&mc(ka)&&(ka=null),Xa!==null&&mc(Xa)&&(Xa=null),Lo.forEach(Px),Oo.forEach(Px)}function xc(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,HS)))}var gc=null;function zx(t){gc!==t&&(gc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===t&&(gc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(xd(o||a)===null)continue;break}var f=C(a);f!==null&&(t.splice(n,3),n-=3,mf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ps(t){function n(I){return xc(I,t)}Va!==null&&xc(Va,t),ka!==null&&xc(ka,t),Xa!==null&&xc(Xa,t),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Ox(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[pn]||null;if(typeof f=="function")_||zx(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[pn]||null)T=_.formAction;else if(xd(u)!==null)continue}else T=_.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),zx(a)}}}function Bx(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function vd(t){this._internalRoot=t}vc.prototype.render=vd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ai();Rx(a,o,t,n,null,null)},vc.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Rx(t.current,2,null,t,null,null),Jl(),n[Vi]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ws();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&Ox(t)}};var Fx=e.version;if(Fx!=="19.2.0")throw Error(r(527,Fx,"19.2.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var GS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Me=_c.inject(GS),Ae=_c}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Wm,f=jm,_=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Ax(t,1,!1,null,null,a,o,null,u,f,_,Bx),t[Vi]=n.current,$f(t),new vd(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Wm,_=jm,T=qm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Ax(t,1,!0,n,a??null,o,u,I,f,_,T,Bx),n.context=Cx(null),a=n.current,o=ai(),o=Mi(o),u=Da(o),u.callback=null,Ua(a,u,o),a=o,n.current.lanes=a,Un(n,a),Bi(n),t[Vi]=n.current,$f(t),new vc(n)},Bo.version="19.2.0",Bo}var Yx;function KS(){if(Yx)return yd.exports;Yx=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yd.exports=QS(),yd.exports}var JS=KS();const $S=Kg(JS);const qh="181",ey=0,Zx=1,ty=2,$g=1,ny=2,pa=3,ir=0,Gn=1,ma=2,Hi=0,Ls=1,$c=2,Qx=3,Kx=4,iy=5,Dr=100,ay=101,ry=102,sy=103,oy=104,ly=200,cy=201,uy=202,fy=203,nh=204,ih=205,dy=206,hy=207,py=208,my=209,xy=210,gy=211,vy=212,_y=213,Sy=214,ah=0,rh=1,sh=2,Ps=3,oh=4,lh=5,ch=6,uh=7,ev=0,yy=1,by=2,nr=0,My=1,Ey=2,Ty=3,tv=4,Ay=5,Cy=6,Ry=7,nv=300,zs=301,Bs=302,fh=303,dh=304,lu=306,hh=1e3,xa=1001,ph=1002,ci=1003,wy=1004,Sc=1005,bi=1006,Td=1007,Nr=1008,Sa=1009,iv=1010,av=1011,Ko=1012,Yh=1013,Lr=1014,ga=1015,Gi=1016,Zh=1017,Qh=1018,Jo=1020,rv=35902,sv=35899,ov=1021,lv=1022,Ui=1023,$o=1026,el=1027,cv=1028,Kh=1029,Jh=1030,$h=1031,ep=1033,qc=33776,Yc=33777,Zc=33778,Qc=33779,mh=35840,xh=35841,gh=35842,vh=35843,_h=36196,Sh=37492,yh=37496,bh=37808,Mh=37809,Eh=37810,Th=37811,Ah=37812,Ch=37813,Rh=37814,wh=37815,Dh=37816,Uh=37817,Nh=37818,Lh=37819,Oh=37820,Ph=37821,zh=36492,Bh=36494,Fh=36495,Ih=36283,Hh=36284,Gh=36285,Vh=36286,Dy=3200,Uy=3201,Ny=0,Ly=1,er="",Si="srgb",Fs="srgb-linear",eu="linear",Xt="srgb",ms=7680,Jx=519,Oy=512,Py=513,zy=514,uv=515,By=516,Fy=517,Iy=518,Hy=519,kh=35044,$x="300 es",Ii=2e3,tu=2001;function fv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gy(){const s=nu("canvas");return s.style.display="block",s}const eg={};function iu(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function nn(...s){const e="THREE."+s.shift();console.error(e,...s)}function tl(...s){const e=s.join(" ");e in eg||(eg[e]=!0,ut(...s))}function Vy(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tg=1234567;const Zo=Math.PI/180,nl=180/Math.PI;function va(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Mt(s,e,i){return Math.max(e,Math.min(i,s))}function tp(s,e){return(s%e+e)%e}function ky(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function Xy(s,e,i){return s!==e?(i-s)/(e-s):0}function Qo(s,e,i){return(1-i)*s+i*e}function Wy(s,e,i,r){return Qo(s,e,1-Math.exp(-i*r))}function jy(s,e=1){return e-Math.abs(tp(s,e*2)-e)}function qy(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function Yy(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Zy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qy(s,e){return s+Math.random()*(e-s)}function Ky(s){return s*(.5-Math.random())}function Jy(s){s!==void 0&&(tg=s);let e=tg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(s){return s*Zo}function e1(s){return s*nl}function t1(s){return(s&s-1)===0&&s!==0}function n1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function i1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function a1(s,e,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((e+r)/2),x=d((e+r)/2),g=c((e-r)/2),S=d((e-r)/2),b=c((r-e)/2),E=d((r-e)/2);switch(l){case"XYX":s.set(h*x,m*g,m*S,h*p);break;case"YZY":s.set(m*S,h*x,m*g,h*p);break;case"ZXZ":s.set(m*g,m*S,h*x,h*p);break;case"XZX":s.set(h*x,m*E,m*b,h*p);break;case"YXY":s.set(m*b,h*x,m*E,h*p);break;case"ZYZ":s.set(m*E,m*b,h*x,h*p);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dv={DEG2RAD:Zo,RAD2DEG:nl,generateUUID:va,clamp:Mt,euclideanModulo:tp,mapLinear:ky,inverseLerp:Xy,lerp:Qo,damp:Wy,pingpong:jy,smoothstep:qy,smootherstep:Yy,randInt:Zy,randFloat:Qy,randFloatSpread:Ky,seededRandom:Jy,degToRad:$y,radToDeg:e1,isPowerOfTwo:t1,ceilPowerOfTwo:n1,floorPowerOfTwo:i1,setQuaternionFromProperEuler:a1,normalize:It,denormalize:Di};class ot{constructor(e=0,i=0){ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class al{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],S=c[d+0],b=c[d+1],E=c[d+2],A=c[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=b,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==S||p!==b||x!==E){let y=m*S+p*b+x*E+g*A;y<0&&(S=-S,b=-b,E=-E,A=-A,y=-y);let v=1-h;if(y<.9995){const z=Math.acos(y),U=Math.sin(z);v=Math.sin(v*z)/U,h=Math.sin(h*z)/U,m=m*v+S*h,p=p*v+b*h,x=x*v+E*h,g=g*v+A*h}else{m=m*v+S*h,p=p*v+b*h,x=x*v+E*h,g=g*v+A*h;const z=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=z,p*=z,x*=z,g*=z}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[d],S=c[d+1],b=c[d+2],E=c[d+3];return e[i]=h*E+x*g+m*b-p*S,e[i+1]=m*E+x*S+p*g-h*b,e[i+2]=p*E+x*b+h*S-m*g,e[i+3]=x*E-h*g-m*S-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),S=m(r/2),b=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=S*x*g+p*b*E,this._y=p*b*g-S*x*E,this._z=p*x*E+S*b*g,this._w=p*x*g-S*b*E;break;case"YXZ":this._x=S*x*g+p*b*E,this._y=p*b*g-S*x*E,this._z=p*x*E-S*b*g,this._w=p*x*g+S*b*E;break;case"ZXY":this._x=S*x*g-p*b*E,this._y=p*b*g+S*x*E,this._z=p*x*E+S*b*g,this._w=p*x*g-S*b*E;break;case"ZYX":this._x=S*x*g-p*b*E,this._y=p*b*g+S*x*E,this._z=p*x*E-S*b*g,this._w=p*x*g+S*b*E;break;case"YZX":this._x=S*x*g+p*b*E,this._y=p*b*g+S*x*E,this._z=p*x*E-S*b*g,this._w=p*x*g-S*b*E;break;case"XZY":this._x=S*x*g-p*b*E,this._y=p*b*g-S*x*E,this._z=p*x*E+S*b*g,this._w=p*x*g+S*b*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=r+h+g;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-p)*b,this._z=(d-l)*b}else if(r>h&&r>g){const b=2*Math.sqrt(1+r-h-g);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-r-g);this._w=(c-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+g-r-h);this._w=(d-l)/b,this._x=(c+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-r*p,this._z=c*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,i=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(ng.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(ng.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new ne,ng=new al;class xt{constructor(e,i,r,l,c,d,h,m,p){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p)}set(e,i,r,l,c,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],S=r[2],b=r[5],E=r[8],A=l[0],y=l[3],v=l[6],z=l[1],U=l[4],B=l[7],G=l[2],P=l[5],F=l[8];return c[0]=d*A+h*z+m*G,c[3]=d*y+h*U+m*P,c[6]=d*v+h*B+m*F,c[1]=p*A+x*z+g*G,c[4]=p*y+x*U+g*P,c[7]=p*v+x*B+g*F,c[2]=S*A+b*z+E*G,c[5]=S*y+b*U+E*P,c[8]=S*v+b*B+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*c*x+r*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*d-h*p,S=h*m-x*c,b=p*c-d*m,E=i*g+r*S+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-x*r)*A,e[2]=(h*r-l*d)*A,e[3]=S*A,e[4]=(x*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=b*A,e[7]=(r*m-p*i)*A,e[8]=(d*i-r*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new xt,ig=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ag=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r1(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Xt&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:e,whitePoint:r,transfer:eu,toXYZ:ig,fromXYZ:ag,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:ig,fromXYZ:ag,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Lt=r1();function _a(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class s1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xs===void 0&&(xs=nu("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=xs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=nu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_a(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o1=0;class np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Rd(l[d].image)):c.push(Rd(l[d]))}else c=Rd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?s1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let l1=0;const wd=new ne;class zn extends Gs{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=xa,l=xa,c=bi,d=Nr,h=Ui,m=Sa,p=zn.DEFAULT_ANISOTROPY,x=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=va(),this.name="",this.source=new np(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=nv;zn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],S=m[1],b=m[5],E=m[9],A=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,B=(b+1)/2,G=(v+1)/2,P=(x+S)/4,F=(g+A)/4,ae=(E+y)/4;return U>B&&U>G?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=P/r,c=F/r):B>G?B<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),r=P/l,c=ae/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=F/c,l=ae/c),this.set(r,l,c,i),this}let z=Math.sqrt((y-E)*(y-E)+(g-A)*(g-A)+(S-x)*(S-x));return Math.abs(z)<.001&&(z=1),this.x=(y-E)/z,this.y=(g-A)/z,this.z=(S-x)/z,this.w=Math.acos((p+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c1 extends Gs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new np(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends c1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class hv extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u1 extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yc.copy(r.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),bc.subVectors(this.max,Fo),gs.subVectors(e.a,Fo),vs.subVectors(e.b,Fo),_s.subVectors(e.c,Fo),qa.subVectors(vs,gs),Ya.subVectors(_s,vs),br.subVectors(gs,_s);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-br.z,br.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,br.z,0,-br.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-br.y,br.x,0];return!Dd(i,gs,vs,_s,bc)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,gs,vs,_s,bc))?!1:(Mc.crossVectors(qa,Ya),i=[Mc.x,Mc.y,Mc.z],Dd(i,gs,vs,_s,bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Ci=new ne,yc=new rl,gs=new ne,vs=new ne,_s=new ne,qa=new ne,Ya=new ne,br=new ne,Fo=new ne,bc=new ne,Mc=new ne,Mr=new ne;function Dd(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Mr.fromArray(s,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),x=r.dot(Mr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const f1=new rl,Io=new ne,Ud=new ne;class sl{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):f1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Ud)),this.expandByPoint(Io.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new ne,Nd=new ne,Ec=new ne,Za=new ne,Ld=new ne,Tc=new ne,Od=new ne;class ip{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nd.copy(e).add(i).multiplyScalar(.5),Ec.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(Nd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Ec),h=Za.dot(this.direction),m=-Za.dot(Ec),p=Za.lengthSq(),x=Math.abs(1-d*d);let g,S,b,E;if(x>0)if(g=d*m-h,S=d*h-m,E=c*x,g>=0)if(S>=-E)if(S<=E){const A=1/x;g*=A,S*=A,b=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=c,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-d*c+h)),S=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-c,-m),c),b=S*(S+2*m)+p):(g=Math.max(0,-(d*c+h)),S=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+S*(S+2*m)+p);else S=d>0?-c:c,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Nd).addScaledVector(Ec,S),b}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(c=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,c){Ld.subVectors(i,e),Tc.subVectors(r,e),Od.crossVectors(Ld,Tc);let d=this.direction.dot(Od),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(Tc.crossVectors(Za,Tc));if(m<0)return null;const p=h*this.direction.dot(Ld.cross(Za));if(p<0||m+p>d)return null;const x=-h*Za.dot(Od);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,r,l,c,d,h,m,p,x,g,S,b,E,A,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p,x,g,S,b,E,A,y)}set(e,i,r,l,c,d,h,m,p,x,g,S,b,E,A,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=S,v[3]=b,v[7]=E,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ss.setFromMatrixColumn(e,0).length(),c=1/Ss.setFromMatrixColumn(e,1).length(),d=1/Ss.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const S=d*x,b=d*g,E=h*x,A=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=b+E*p,i[5]=S-A*p,i[9]=-h*m,i[2]=A-S*p,i[6]=E+b*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*x,b=m*g,E=p*x,A=p*g;i[0]=S+A*h,i[4]=E*h-b,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=b*h-E,i[6]=A+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*x,b=m*g,E=p*x,A=p*g;i[0]=S-A*h,i[4]=-d*g,i[8]=E+b*h,i[1]=b+E*h,i[5]=d*x,i[9]=A-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*x,b=d*g,E=h*x,A=h*g;i[0]=m*x,i[4]=E*p-b,i[8]=S*p+A,i[1]=m*g,i[5]=A*p+S,i[9]=b*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,b=d*p,E=h*m,A=h*p;i[0]=m*x,i[4]=A-S*g,i[8]=E*g+b,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=b*g+E,i[10]=S-A*g}else if(e.order==="XZY"){const S=d*m,b=d*p,E=h*m,A=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+A,i[5]=d*x,i[9]=b*g-E,i[2]=E*g-b,i[6]=h*x,i[10]=A*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d1,e,h1)}lookAt(e,i,r){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Qa.crossVectors(r,ri),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Qa.crossVectors(r,ri)),Qa.normalize(),Ac.crossVectors(ri,Qa),l[0]=Qa.x,l[4]=Ac.x,l[8]=ri.x,l[1]=Qa.y,l[5]=Ac.y,l[9]=ri.y,l[2]=Qa.z,l[6]=Ac.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],S=r[9],b=r[13],E=r[2],A=r[6],y=r[10],v=r[14],z=r[3],U=r[7],B=r[11],G=r[15],P=l[0],F=l[4],ae=l[8],w=l[12],R=l[1],k=l[5],J=l[9],le=l[13],me=l[2],de=l[6],D=l[10],W=l[14],j=l[3],ue=l[7],pe=l[11],L=l[15];return c[0]=d*P+h*R+m*me+p*j,c[4]=d*F+h*k+m*de+p*ue,c[8]=d*ae+h*J+m*D+p*pe,c[12]=d*w+h*le+m*W+p*L,c[1]=x*P+g*R+S*me+b*j,c[5]=x*F+g*k+S*de+b*ue,c[9]=x*ae+g*J+S*D+b*pe,c[13]=x*w+g*le+S*W+b*L,c[2]=E*P+A*R+y*me+v*j,c[6]=E*F+A*k+y*de+v*ue,c[10]=E*ae+A*J+y*D+v*pe,c[14]=E*w+A*le+y*W+v*L,c[3]=z*P+U*R+B*me+G*j,c[7]=z*F+U*k+B*de+G*ue,c[11]=z*ae+U*J+B*D+G*pe,c[15]=z*w+U*le+B*W+G*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],S=e[10],b=e[14],E=e[3],A=e[7],y=e[11],v=e[15];return E*(+c*m*g-l*p*g-c*h*S+r*p*S+l*h*b-r*m*b)+A*(+i*m*b-i*p*S+c*d*S-l*d*b+l*p*x-c*m*x)+y*(+i*p*g-i*h*b-c*d*g+r*d*b+c*h*x-r*p*x)+v*(-l*h*x-i*m*g+i*h*S+l*d*g-r*d*S+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],S=e[10],b=e[11],E=e[12],A=e[13],y=e[14],v=e[15],z=g*y*p-A*S*p+A*m*b-h*y*b-g*m*v+h*S*v,U=E*S*p-x*y*p-E*m*b+d*y*b+x*m*v-d*S*v,B=x*A*p-E*g*p+E*h*b-d*A*b-x*h*v+d*g*v,G=E*g*m-x*A*m-E*h*S+d*A*S+x*h*y-d*g*y,P=i*z+r*U+l*B+c*G;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/P;return e[0]=z*F,e[1]=(A*S*c-g*y*c-A*l*b+r*y*b+g*l*v-r*S*v)*F,e[2]=(h*y*c-A*m*c+A*l*p-r*y*p-h*l*v+r*m*v)*F,e[3]=(g*m*c-h*S*c-g*l*p+r*S*p+h*l*b-r*m*b)*F,e[4]=U*F,e[5]=(x*y*c-E*S*c+E*l*b-i*y*b-x*l*v+i*S*v)*F,e[6]=(E*m*c-d*y*c-E*l*p+i*y*p+d*l*v-i*m*v)*F,e[7]=(d*S*c-x*m*c+x*l*p-i*S*p-d*l*b+i*m*b)*F,e[8]=B*F,e[9]=(E*g*c-x*A*c-E*r*b+i*A*b+x*r*v-i*g*v)*F,e[10]=(d*A*c-E*h*c+E*r*p-i*A*p-d*r*v+i*h*v)*F,e[11]=(x*h*c-d*g*c-x*r*p+i*g*p+d*r*b-i*h*b)*F,e[12]=G*F,e[13]=(x*A*l-E*g*l+E*r*S-i*A*S-x*r*y+i*g*y)*F,e[14]=(E*h*l-d*A*l-E*r*m+i*A*m+d*r*y-i*h*y)*F,e[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*S+i*h*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,m=e.z,p=c*d,x=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,S=c*p,b=c*x,E=c*g,A=d*x,y=d*g,v=h*g,z=m*p,U=m*x,B=m*g,G=r.x,P=r.y,F=r.z;return l[0]=(1-(A+v))*G,l[1]=(b+B)*G,l[2]=(E-U)*G,l[3]=0,l[4]=(b-B)*P,l[5]=(1-(S+v))*P,l[6]=(y+z)*P,l[7]=0,l[8]=(E+U)*F,l[9]=(y-z)*F,l[10]=(1-(S+A))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ss.set(l[0],l[1],l[2]).length();const d=Ss.set(l[4],l[5],l[6]).length(),h=Ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ri.copy(this);const p=1/c,x=1/d,g=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,i.setFromRotationMatrix(Ri),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),b=(r+l)/(r-l);let E,A;if(m)E=c/(d-c),A=d*c/(d-c);else if(h===Ii)E=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(h===tu)E=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,x=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),b=-(r+l)/(r-l);let E,A;if(m)E=1/(d-c),A=d/(d-c);else if(h===Ii)E=-2/(d-c),A=-(d+c)/(d-c);else if(h===tu)E=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ss=new ne,Ri=new an,d1=new ne(0,0,0),h1=new ne(1,1,1),Qa=new ne,Ac=new ne,ri=new ne,rg=new an,sg=new al;class ya{constructor(e=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return rg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return sg.setFromEuler(this),this.setFromQuaternion(sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p1=0;const og=new ne,ys=new al,ua=new an,Cc=new ne,Ho=new ne,m1=new ne,x1=new al,lg=new ne(1,0,0),cg=new ne(0,1,0),ug=new ne(0,0,1),fg={type:"added"},g1={type:"removed"},bs={type:"childadded",child:null},Pd={type:"childremoved",child:null};class Dn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ne,i=new ya,r=new al,l=new ne(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new xt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(lg,e)}rotateY(e){return this.rotateOnAxis(cg,e)}rotateZ(e){return this.rotateOnAxis(ug,e)}translateOnAxis(e,i){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(lg,e)}translateY(e){return this.translateOnAxis(cg,e)}translateZ(e){return this.translateOnAxis(ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Cc.copy(e):Cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Ho,Cc,this.up):ua.lookAt(Cc,Ho,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(ua),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fg),bs.child=e,this.dispatchEvent(bs),bs.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(g1),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fg),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,m1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,x1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),g=d(e.shapes),S=d(e.skeletons),b=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new ne(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new ne,fa=new ne,zd=new ne,da=new ne,Ms=new ne,Es=new ne,dg=new ne,Bd=new ne,Fd=new ne,Id=new ne,Hd=new on,Gd=new on,Vd=new on;class yi{constructor(e=new ne,i=new ne,r=new ne){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){wi.subVectors(l,i),fa.subVectors(r,i),zd.subVectors(e,i);const d=wi.dot(wi),h=wi.dot(fa),m=wi.dot(zd),p=fa.dot(fa),x=fa.dot(zd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const S=1/g,b=(p*m-h*x)*S,E=(d*x-h*m)*S;return c.set(1-b-E,E,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,r,l,c,d,h,m){return this.getBarycoord(e,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,r),Vd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Hd,c.x),d.addScaledVector(Gd,c.y),d.addScaledVector(Vd,c.z),d}static isFrontFacing(e,i,r,l){return wi.subVectors(r,i),fa.subVectors(e,i),wi.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),wi.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;Ms.subVectors(l,r),Es.subVectors(c,r),Bd.subVectors(e,r);const m=Ms.dot(Bd),p=Es.dot(Bd);if(m<=0&&p<=0)return i.copy(r);Fd.subVectors(e,l);const x=Ms.dot(Fd),g=Es.dot(Fd);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Ms,d);Id.subVectors(e,c);const b=Ms.dot(Id),E=Es.dot(Id);if(E>=0&&b<=E)return i.copy(c);const A=b*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Es,h);const y=x*E-b*g;if(y<=0&&g-x>=0&&b-E>=0)return dg.subVectors(c,l),h=(g-x)/(g-x+(b-E)),i.copy(l).addScaledVector(dg,h);const v=1/(y+A+S);return d=A*v,h=S*v,i.copy(r).addScaledVector(Ms,d).addScaledVector(Es,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function kd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Lt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Lt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Lt.workingColorSpace){if(e=tp(e,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=kd(d,c,e+1/3),this.g=kd(d,c,e),this.b=kd(d,c,e-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=mv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Lt.workingToColorSpace(On.copy(this),e),Math.round(Mt(On.r*255,0,255))*65536+Math.round(Mt(On.g*255,0,255))*256+Math.round(Mt(On.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Lt.workingColorSpace){Lt.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Lt.workingColorSpace){return Lt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Si){Lt.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(Rc);const r=Qo(Ka.h,Rc.h,i),l=Qo(Ka.s,Rc.s,i),c=Qo(Ka.l,Rc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new nt;nt.NAMES=mv;let v1=0;class Pr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Ls,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nh&&(r.blendSrc=this.blendSrc),this.blendDst!==ih&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class il extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new ne,wc=new ot;let _1=0;class Hn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kh,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(e),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=It(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Di(i,this.array)),i}setX(e,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Di(i,this.array)),i}setY(e,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Di(i,this.array)),i}setZ(e,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Di(i,this.array)),i}setW(e,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=It(i,this.array),r=It(r,this.array),l=It(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=It(i,this.array),r=It(r,this.array),l=It(l,this.array),c=It(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),e}}class xv extends Hn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class gv extends Hn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ui extends Hn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let S1=0;const _i=new an,Xd=new Dn,Ts=new ne,si=new rl,Go=new rl,En=new ne;class Vn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fv(e)?gv:xv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,r){return _i.makeTranslation(e,i,r),this.applyMatrix4(_i),this}scale(e,i,r){return _i.makeScale(e,i,r),this.applyMatrix4(_i),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ui(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];si.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Go.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(si.min,Go.min),si.expandByPoint(En),En.addVectors(si.max,Go.max),si.expandByPoint(En)):(si.expandByPoint(Go.min),si.expandByPoint(Go.max))}si.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)En.fromBufferAttribute(h,p),m&&(Ts.fromBufferAttribute(e,p),En.add(Ts)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ae=0;ae<r.count;ae++)h[ae]=new ne,m[ae]=new ne;const p=new ne,x=new ne,g=new ne,S=new ot,b=new ot,E=new ot,A=new ne,y=new ne;function v(ae,w,R){p.fromBufferAttribute(r,ae),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),S.fromBufferAttribute(c,ae),b.fromBufferAttribute(c,w),E.fromBufferAttribute(c,R),x.sub(p),g.sub(p),b.sub(S),E.sub(S);const k=1/(b.x*E.y-E.x*b.y);isFinite(k)&&(A.copy(x).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(k),y.copy(g).multiplyScalar(b.x).addScaledVector(x,-E.x).multiplyScalar(k),h[ae].add(A),h[w].add(A),h[R].add(A),m[ae].add(y),m[w].add(y),m[R].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let ae=0,w=z.length;ae<w;++ae){const R=z[ae],k=R.start,J=R.count;for(let le=k,me=k+J;le<me;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const U=new ne,B=new ne,G=new ne,P=new ne;function F(ae){G.fromBufferAttribute(l,ae),P.copy(G);const w=h[ae];U.copy(w),U.sub(G.multiplyScalar(G.dot(w))).normalize(),B.crossVectors(P,w);const k=B.dot(m[ae])<0?-1:1;d.setXYZW(ae,U.x,U.y,U.z,k)}for(let ae=0,w=z.length;ae<w;++ae){const R=z[ae],k=R.start,J=R.count;for(let le=k,me=k+J;le<me;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new ne,c=new ne,d=new ne,h=new ne,m=new ne,p=new ne,x=new ne,g=new ne;if(e)for(let S=0,b=e.count;S<b;S+=3){const E=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,S=new p.constructor(m.length*x);let b=0,E=0;for(let A=0,y=m.length;A<y;A++){h.isInterleavedBufferAttribute?b=m[A]*h.data.stride+h.offset:b=m[A]*x;for(let v=0;v<x;v++)S[E++]=p[b++]}return new Hn(S,x,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Vn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const S=p[x],b=e(S,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const b=p[g];x.push(b.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,b=g.length;S<b;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hg=new an,Er=new ip,Dc=new sl,pg=new ne,Uc=new ne,Nc=new ne,Lc=new ne,Wd=new ne,Oc=new ne,mg=new ne,Pc=new ne;class Zn extends Dn{constructor(e=new Vn,i=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Oc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Wd.fromBufferAttribute(g,e),d?Oc.addScaledVector(Wd,x):Oc.addScaledVector(Wd.sub(i),x))}i.add(Oc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(Dc.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Dc,pg)===null||Er.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(hg.copy(c).invert(),Er.copy(e.ray).applyMatrix4(hg),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=S.length;E<A;E++){const y=S[E],v=d[y.materialIndex],z=Math.max(y.start,b.start),U=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let B=z,G=U;B<G;B+=3){const P=h.getX(B),F=h.getX(B+1),ae=h.getX(B+2);l=zc(this,v,e,r,p,x,g,P,F,ae),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),A=Math.min(h.count,b.start+b.count);for(let y=E,v=A;y<v;y+=3){const z=h.getX(y),U=h.getX(y+1),B=h.getX(y+2);l=zc(this,d,e,r,p,x,g,z,U,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=S.length;E<A;E++){const y=S[E],v=d[y.materialIndex],z=Math.max(y.start,b.start),U=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let B=z,G=U;B<G;B+=3){const P=B,F=B+1,ae=B+2;l=zc(this,v,e,r,p,x,g,P,F,ae),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),A=Math.min(m.count,b.start+b.count);for(let y=E,v=A;y<v;y+=3){const z=y,U=y+1,B=y+2;l=zc(this,d,e,r,p,x,g,z,U,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function y1(s,e,i,r,l,c,d,h){let m;if(e.side===Gn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,e.side===ir,h),m===null)return null;Pc.copy(h),Pc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Pc);return p<i.near||p>i.far?null:{distance:p,point:Pc.clone(),object:s}}function zc(s,e,i,r,l,c,d,h,m,p){s.getVertexPosition(h,Uc),s.getVertexPosition(m,Nc),s.getVertexPosition(p,Lc);const x=y1(s,e,i,r,Uc,Nc,Lc,mg);if(x){const g=new ne;yi.getBarycoord(mg,Uc,Nc,Lc,g),l&&(x.uv=yi.getInterpolatedAttribute(l,h,m,p,g,new ot)),c&&(x.uv1=yi.getInterpolatedAttribute(c,h,m,p,g,new ot)),d&&(x.normal=yi.getInterpolatedAttribute(d,h,m,p,g,new ne),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ne,materialIndex:0};yi.getNormal(Uc,Nc,Lc,S.normal),x.face=S,x.barycoord=g}return x}class ol extends Vn{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let S=0,b=0;E("z","y","x",-1,-1,r,i,e,d,c,0),E("z","y","x",1,-1,r,i,-e,d,c,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(p,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(g,2));function E(A,y,v,z,U,B,G,P,F,ae,w){const R=B/F,k=G/ae,J=B/2,le=G/2,me=P/2,de=F+1,D=ae+1;let W=0,j=0;const ue=new ne;for(let pe=0;pe<D;pe++){const L=pe*k-le;for(let K=0;K<de;K++){const ge=K*R-J;ue[A]=ge*z,ue[y]=L*U,ue[v]=me,p.push(ue.x,ue.y,ue.z),ue[A]=0,ue[y]=0,ue[v]=P>0?1:-1,x.push(ue.x,ue.y,ue.z),g.push(K/F),g.push(1-pe/ae),W+=1}}for(let pe=0;pe<ae;pe++)for(let L=0;L<F;L++){const K=S+L+de*pe,ge=S+L+de*(pe+1),be=S+(L+1)+de*(pe+1),De=S+(L+1)+de*pe;m.push(K,ge,De),m.push(ge,be,De),j+=6}h.addGroup(b,j,w),b+=j,S+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)e[l]=r[l]}return e}function b1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function vv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const au={clone:Is,merge:In};var M1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M1,this.fragmentShader=E1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=b1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class _v extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new ne,xg=new ot,gg=new ot;class li extends _v{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,xg,gg),i.subVectors(gg,xg)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Cs=1;class T1 extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(As,Cs,e,i);l.layers=this.layers,this.add(l);const c=new li(As,Cs,e,i);c.layers=this.layers,this.add(c);const d=new li(As,Cs,e,i);d.layers=this.layers,this.add(d);const h=new li(As,Cs,e,i);h.layers=this.layers,this.add(h);const m=new li(As,Cs,e,i);m.layers=this.layers,this.add(m);const p=new li(As,Cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===tu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(g,S,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Sv extends zn{constructor(e=[],i=zs,r,l,c,d,h,m,p,x){super(e,i,r,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A1 extends Ni{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ol(5,5,5),c=new gn({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Hi});c.uniforms.tEquirect.value=i;const d=new Zn(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=bi),new T1(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}class qo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C1={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),v=this._getHandJoint(p,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&S>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new qo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class ap{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=i,this.far=r}clone(){return new ap(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yv extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class R1{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=kh,this.updateRanges=[],this.version=0,this.uuid=va()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new ne;class ru{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=Di(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=It(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=It(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Di(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Di(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Di(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Di(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=It(i,this.array),r=It(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=It(i,this.array),r=It(r,this.array),l=It(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=It(i,this.array),r=It(r,this.array),l=It(l,this.array),c=It(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){iu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Hn(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){iu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bv extends Pr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rs;const Vo=new ne,ws=new ne,Ds=new ne,Us=new ot,ko=new ot,Mv=new an,Bc=new ne,Xo=new ne,Fc=new ne,vg=new ot,qd=new ot,_g=new ot;class w1 extends Dn{constructor(e=new bv){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new Vn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new R1(i,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new ru(r,3,0,!1)),Rs.setAttribute("uv",new ru(r,2,3,!1))}this.geometry=Rs,this.material=e,this.center=new ot(.5,.5),this.count=1}raycast(e,i){e.camera===null&&nn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Mv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ds.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Ic(Bc.set(-.5,-.5,0),Ds,d,ws,l,c),Ic(Xo.set(.5,-.5,0),Ds,d,ws,l,c),Ic(Fc.set(.5,.5,0),Ds,d,ws,l,c),vg.set(0,0),qd.set(1,0),_g.set(1,1);let h=e.ray.intersectTriangle(Bc,Xo,Fc,!1,Vo);if(h===null&&(Ic(Xo.set(-.5,.5,0),Ds,d,ws,l,c),qd.set(0,1),h=e.ray.intersectTriangle(Bc,Fc,Xo,!1,Vo),h===null))return;const m=e.ray.origin.distanceTo(Vo);m<e.near||m>e.far||i.push({distance:m,point:Vo.clone(),uv:yi.getInterpolation(Vo,Bc,Xo,Fc,vg,qd,_g,new ot),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ic(s,e,i,r,l,c){Us.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(ko.x=c*Us.x-l*Us.y,ko.y=l*Us.x+c*Us.y):ko.copy(Us),s.copy(e),s.x+=ko.x,s.y+=ko.y,s.applyMatrix4(Mv)}class D1 extends zn{constructor(e=null,i=1,r=1,l,c,d,h,m,p=ci,x=ci,g,S){super(null,d,h,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new ne,U1=new ne,N1=new xt;class wr{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Yd.subVectors(r,i).cross(U1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Yd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||N1.getNormalMatrix(e),l=this.coplanarPoint(Yd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new sl,L1=new ot(.5,.5),Hc=new ne;class Ev{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,d=new wr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],b=c[7],E=c[8],A=c[9],y=c[10],v=c[11],z=c[12],U=c[13],B=c[14],G=c[15];if(l[0].setComponents(p-d,b-x,v-E,G-z).normalize(),l[1].setComponents(p+d,b+x,v+E,G+z).normalize(),l[2].setComponents(p+h,b+g,v+A,G+U).normalize(),l[3].setComponents(p-h,b-g,v-A,G-U).normalize(),r)l[4].setComponents(m,S,y,B).normalize(),l[5].setComponents(p-m,b-S,v-y,G-B).normalize();else if(l[4].setComponents(p-m,b-S,v-y,G-B).normalize(),i===Ii)l[5].setComponents(p+m,b+S,v+y,G+B).normalize();else if(i===tu)l[5].setComponents(m,S,y,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=L1.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Hc.x=l.normal.x>0?e.max.x:e.min.x,Hc.y=l.normal.y>0?e.max.y:e.min.y,Hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const su=new ne,ou=new ne,Sg=new an,Wo=new ip,Gc=new sl,Zd=new ne,yg=new ne;class O1 extends Dn{constructor(e=new Vn,i=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)su.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=su.distanceTo(ou);e.setAttribute("lineDistance",new ui(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gc.copy(r.boundingSphere),Gc.applyMatrix4(l),Gc.radius+=c,e.ray.intersectsSphere(Gc)===!1)return;Sg.copy(l).invert(),Wo.copy(e.ray).applyMatrix4(Sg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const b=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let A=b,y=E-1;A<y;A+=p){const v=x.getX(A),z=x.getX(A+1),U=Vc(this,e,Wo,m,v,z,A);U&&i.push(U)}if(this.isLineLoop){const A=x.getX(E-1),y=x.getX(b),v=Vc(this,e,Wo,m,A,y,E-1);v&&i.push(v)}}else{const b=Math.max(0,d.start),E=Math.min(S.count,d.start+d.count);for(let A=b,y=E-1;A<y;A+=p){const v=Vc(this,e,Wo,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Vc(this,e,Wo,m,E-1,b,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Vc(s,e,i,r,l,c,d){const h=s.geometry.attributes.position;if(su.fromBufferAttribute(h,l),ou.fromBufferAttribute(h,c),i.distanceSqToSegment(su,ou,Zd,yg)>r)return;Zd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Zd);if(!(p<e.near||p>e.far))return{distance:p,point:yg.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}class P1 extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bg=new an,Xh=new ip,kc=new sl,Xc=new ne;class z1 extends Dn{constructor(e=new Vn,i=new P1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kc.copy(r.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,e.ray.intersectsSphere(kc)===!1)return;bg.copy(l).invert(),Xh.copy(e.ray).applyMatrix4(bg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const S=Math.max(0,d.start),b=Math.min(p.count,d.start+d.count);for(let E=S,A=b;E<A;E++){const y=p.getX(E);Xc.fromBufferAttribute(g,y),Mg(Xc,y,m,l,e,i,this)}}else{const S=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let E=S,A=b;E<A;E++)Xc.fromBufferAttribute(g,E),Mg(Xc,E,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Mg(s,e,i,r,l,c,d){const h=Xh.distanceSqToPoint(s);if(h<i){const m=new ne;Xh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class B1 extends zn{constructor(e,i,r,l,c,d,h,m,p){super(e,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Av extends zn{constructor(e,i,r=Lr,l,c,d,h=ci,m=ci,p,x=$o,g=1){if(x!==$o&&x!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,c,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Vn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=e/h,S=i/m,b=[],E=[],A=[],y=[];for(let v=0;v<x;v++){const z=v*S-d;for(let U=0;U<p;U++){const B=U*g-c;E.push(B,-z,0),A.push(0,0,1),y.push(U/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<h;z++){const U=z+p*v,B=z+p*(v+1),G=z+1+p*(v+1),P=z+1+p*v;b.push(U,B,P),b.push(B,G,P)}this.setIndex(b),this.setAttribute("position",new ui(E,3)),this.setAttribute("normal",new ui(A,3)),this.setAttribute("uv",new ui(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class cu extends Vn{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const x=[],g=new ne,S=new ne,b=[],E=[],A=[],y=[];for(let v=0;v<=r;v++){const z=[],U=v/r;let B=0;v===0&&d===0?B=.5/i:v===r&&m===Math.PI&&(B=-.5/i);for(let G=0;G<=i;G++){const P=G/i;g.x=-e*Math.cos(l+P*c)*Math.sin(d+U*h),g.y=e*Math.cos(d+U*h),g.z=e*Math.sin(l+P*c)*Math.sin(d+U*h),E.push(g.x,g.y,g.z),S.copy(g).normalize(),A.push(S.x,S.y,S.z),y.push(P+B,1-U),z.push(p++)}x.push(z)}for(let v=0;v<r;v++)for(let z=0;z<i;z++){const U=x[v][z+1],B=x[v][z],G=x[v+1][z],P=x[v+1][z+1];(v!==0||d>0)&&b.push(U,B,P),(v!==r-1||m<Math.PI)&&b.push(B,G,P)}this.setIndex(b),this.setAttribute("position",new ui(E,3)),this.setAttribute("normal",new ui(A,3)),this.setAttribute("uv",new ui(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class F1 extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class H1 extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Rv extends _v{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class G1 extends H1{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class V1 extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Eg(s,e,i,r){const l=k1(r);switch(i){case ov:return s*e;case cv:return s*e/l.components*l.byteLength;case Kh:return s*e/l.components*l.byteLength;case Jh:return s*e*2/l.components*l.byteLength;case $h:return s*e*2/l.components*l.byteLength;case lv:return s*e*3/l.components*l.byteLength;case Ui:return s*e*4/l.components*l.byteLength;case ep:return s*e*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:case vh:return Math.max(s,16)*Math.max(e,8)/4;case mh:case gh:return Math.max(s,8)*Math.max(e,8)/2;case _h:case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zh:case Bh:case Fh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ih:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gh:case Vh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function k1(s){switch(s){case Sa:case iv:return{byteLength:1,components:1};case Ko:case av:case Gi:return{byteLength:2,components:1};case Zh:case Qh:return{byteLength:2,components:4};case Lr:case Yh:case ga:return{byteLength:4,components:1};case rv:case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);function Dv(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function X1(s){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,S=s.createBuffer();s.bindBuffer(m,S),s.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,x);else{g.sort((b,E)=>b.start-E.start);let S=0;for(let b=1;b<g.length;b++){const E=g[S],A=g[b];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++S,g[S]=A)}g.length=S+1;for(let b=0,E=g.length;b<E;b++){const A=g[b];s.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var W1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ab=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$M=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:W1,alphahash_pars_fragment:j1,alphamap_fragment:q1,alphamap_pars_fragment:Y1,alphatest_fragment:Z1,alphatest_pars_fragment:Q1,aomap_fragment:K1,aomap_pars_fragment:J1,batching_pars_vertex:$1,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:ab,bumpmap_pars_fragment:rb,clipping_planes_fragment:sb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:hb,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:xb,displacementmap_pars_vertex:gb,displacementmap_vertex:vb,emissivemap_fragment:_b,emissivemap_pars_fragment:Sb,colorspace_fragment:yb,colorspace_pars_fragment:bb,envmap_fragment:Mb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Bb,envmap_vertex:Cb,fog_vertex:Rb,fog_pars_vertex:wb,fog_fragment:Db,fog_pars_fragment:Ub,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Lb,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Pb,lights_pars_begin:zb,lights_toon_fragment:Fb,lights_toon_pars_fragment:Ib,lights_phong_fragment:Hb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Vb,lights_physical_pars_fragment:kb,lights_fragment_begin:Xb,lights_fragment_maps:Wb,lights_fragment_end:jb,logdepthbuf_fragment:qb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Qb,map_fragment:Kb,map_pars_fragment:Jb,map_particle_fragment:$b,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:aM,morphnormal_vertex:rM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:fM,normal_vertex:dM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:xM,iridescence_pars_fragment:gM,opaque_fragment:vM,packing:_M,premultiplied_alpha_fragment:SM,project_vertex:yM,dithering_fragment:bM,dithering_pars_fragment:MM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:CM,shadowmap_vertex:RM,shadowmask_pars_fragment:wM,skinbase_vertex:DM,skinning_pars_vertex:UM,skinning_vertex:NM,skinnormal_vertex:LM,specularmap_fragment:OM,specularmap_pars_fragment:PM,tonemapping_fragment:zM,tonemapping_pars_fragment:BM,transmission_fragment:FM,transmission_pars_fragment:IM,uv_pars_fragment:HM,uv_pars_vertex:GM,uv_vertex:VM,worldpos_vertex:kM,background_vert:XM,background_frag:WM,backgroundCube_vert:jM,backgroundCube_frag:qM,cube_vert:YM,cube_frag:ZM,depth_vert:QM,depth_frag:KM,distanceRGBA_vert:JM,distanceRGBA_frag:$M,equirect_vert:e3,equirect_frag:t3,linedashed_vert:n3,linedashed_frag:i3,meshbasic_vert:a3,meshbasic_frag:r3,meshlambert_vert:s3,meshlambert_frag:o3,meshmatcap_vert:l3,meshmatcap_frag:c3,meshnormal_vert:u3,meshnormal_frag:f3,meshphong_vert:d3,meshphong_frag:h3,meshphysical_vert:p3,meshphysical_frag:m3,meshtoon_vert:x3,meshtoon_frag:g3,points_vert:v3,points_frag:_3,shadow_vert:S3,shadow_frag:y3,sprite_vert:b3,sprite_frag:M3},Oe={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Fi={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new nt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Fi.physical={uniforms:In([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Wc={r:0,b:0,g:0},Ar=new ya,E3=new an;function T3(s,e,i,r,l,c,d){const h=new nt(0);let m=c===!0?0:1,p,x,g=null,S=0,b=null;function E(U){let B=U.isScene===!0?U.background:null;return B&&B.isTexture&&(B=(U.backgroundBlurriness>0?i:e).get(B)),B}function A(U){let B=!1;const G=E(U);G===null?v(h,m):G&&G.isColor&&(v(G,1),B=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||B)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,B){const G=E(B);G&&(G.isCubeTexture||G.mapping===lu)?(x===void 0&&(x=new Zn(new ol(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Is(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(P,F,ae){this.matrixWorld.copyPosition(ae.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ar.copy(B.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),x.material.uniforms.envMap.value=G,x.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(E3.makeRotationFromEuler(Ar)),x.material.toneMapped=Lt.getTransfer(G.colorSpace)!==Xt,(g!==G||S!==G.version||b!==s.toneMapping)&&(x.material.needsUpdate=!0,g=G,S=G.version,b=s.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new Zn(new Or(2,2),new gn({name:"BackgroundMaterial",uniforms:Is(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(G.colorSpace)!==Xt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||S!==G.version||b!==s.toneMapping)&&(p.material.needsUpdate=!0,g=G,S=G.version,b=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,B){U.getRGB(Wc,vv(s)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,B,d)}function z(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,B=1){h.set(U),m=B,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:A,addToRenderList:y,dispose:z}}function A3(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,d=!1;function h(R,k,J,le,me){let de=!1;const D=g(le,J,k);c!==D&&(c=D,p(c.object)),de=b(R,le,J,me),de&&E(R,le,J,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,B(R,k,J,le),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function g(R,k,J){const le=J.wireframe===!0;let me=r[R.id];me===void 0&&(me={},r[R.id]=me);let de=me[k.id];de===void 0&&(de={},me[k.id]=de);let D=de[le];return D===void 0&&(D=S(m()),de[le]=D),D}function S(R){const k=[],J=[],le=[];for(let me=0;me<i;me++)k[me]=0,J[me]=0,le[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:le,object:R,attributes:{},index:null}}function b(R,k,J,le){const me=c.attributes,de=k.attributes;let D=0;const W=J.getAttributes();for(const j in W)if(W[j].location>=0){const pe=me[j];let L=de[j];if(L===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),pe===void 0||pe.attribute!==L||L&&pe.data!==L.data)return!0;D++}return c.attributesNum!==D||c.index!==le}function E(R,k,J,le){const me={},de=k.attributes;let D=0;const W=J.getAttributes();for(const j in W)if(W[j].location>=0){let pe=de[j];pe===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const L={};L.attribute=pe,pe&&pe.data&&(L.data=pe.data),me[j]=L,D++}c.attributes=me,c.attributesNum=D,c.index=le}function A(){const R=c.newAttributes;for(let k=0,J=R.length;k<J;k++)R[k]=0}function y(R){v(R,0)}function v(R,k){const J=c.newAttributes,le=c.enabledAttributes,me=c.attributeDivisors;J[R]=1,le[R]===0&&(s.enableVertexAttribArray(R),le[R]=1),me[R]!==k&&(s.vertexAttribDivisor(R,k),me[R]=k)}function z(){const R=c.newAttributes,k=c.enabledAttributes;for(let J=0,le=k.length;J<le;J++)k[J]!==R[J]&&(s.disableVertexAttribArray(J),k[J]=0)}function U(R,k,J,le,me,de,D){D===!0?s.vertexAttribIPointer(R,k,J,me,de):s.vertexAttribPointer(R,k,J,le,me,de)}function B(R,k,J,le){A();const me=le.attributes,de=J.getAttributes(),D=k.defaultAttributeValues;for(const W in de){const j=de[W];if(j.location>=0){let ue=me[W];if(ue===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const pe=ue.normalized,L=ue.itemSize,K=e.get(ue);if(K===void 0)continue;const ge=K.buffer,be=K.type,De=K.bytesPerElement,Z=be===s.INT||be===s.UNSIGNED_INT||ue.gpuType===Yh;if(ue.isInterleavedBufferAttribute){const se=ue.data,Te=se.stride,Pe=ue.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<j.locationSize;Be++)v(j.location+Be,se.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<j.locationSize;Be++)y(j.location+Be);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Be=0;Be<j.locationSize;Be++)U(j.location+Be,L/j.locationSize,be,pe,Te*De,(Pe+L/j.locationSize*Be)*De,Z)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)v(j.location+se,ue.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<j.locationSize;se++)y(j.location+se);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let se=0;se<j.locationSize;se++)U(j.location+se,L/j.locationSize,be,pe,L*De,L/j.locationSize*se*De,Z)}}else if(D!==void 0){const pe=D[W];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(j.location,pe);break;case 3:s.vertexAttrib3fv(j.location,pe);break;case 4:s.vertexAttrib4fv(j.location,pe);break;default:s.vertexAttrib1fv(j.location,pe)}}}}z()}function G(){ae();for(const R in r){const k=r[R];for(const J in k){const le=k[J];for(const me in le)x(le[me].object),delete le[me];delete k[J]}delete r[R]}}function P(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const J in k){const le=k[J];for(const me in le)x(le[me].object),delete le[me];delete k[J]}delete r[R.id]}function F(R){for(const k in r){const J=r[k];if(J[R.id]===void 0)continue;const le=J[R.id];for(const me in le)x(le[me].object),delete le[me];delete J[R.id]}}function ae(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:z}}function C3(s,e,i){let r;function l(p){r=p}function c(p,x){s.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(s.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let b=0;for(let E=0;E<g;E++)b+=x[E];i.update(b,r,1)}function m(p,x,g,S){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)d(p[E],x[E],S[E]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,g);let E=0;for(let A=0;A<g;A++)E+=x[A]*S[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function R3(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ui&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const ae=F===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Sa&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ga&&!ae)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ut("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),B=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:B,vertexTextures:G,maxSamples:P}}function w3(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new wr,h=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const b=g.length!==0||S||r!==0||l;return l=S,r=g.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,b){const E=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||E===null||E.length===0||c&&!y)c?x(null):p();else{const z=c?0:r,U=z*4;let B=v.clippingState||null;m.value=B,B=x(E,S,U,b);for(let G=0;G!==U;++G)B[G]=i[G];v.clippingState=B,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,S,b,E){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const v=b+A*4,z=S.matrixWorldInverse;h.getNormalMatrix(z),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,B=b;U!==A;++U,B+=4)d.copy(g[U]).applyMatrix4(z,h),d.normal.toArray(y,B),y[B+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function D3(s){let e=new WeakMap;function i(d,h){return h===fh?d.mapping=zs:h===dh&&(d.mapping=Bs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===fh||h===dh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new A1(m.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,Tg=[.125,.215,.35,.446,.526,.582],Ur=20,U3=256,jo=new Rv,Ag=new nt;let Qd=null,Kd=0,Jd=0,$d=!1;const N3=new ne;class Cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=N3}=c;Qd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qd,Kd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Gi,format:Ui,colorSpace:Fs,depthBuffer:!1},l=Rg(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=L3(c)),this._blurMaterial=P3(c,e,i),this._ggxMaterial=O3(c,e,i)}return l}_compileMaterial(e){const i=new Zn(new Vn,e);this._renderer.compile(i,jo)}_sceneToCubeUV(e,i,r,l,c){const m=new li(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,b=g.toneMapping;g.getClearColor(Ag),g.toneMapping=nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new ol,new il({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let v=!1;const z=e.background;z?z.isColor&&(y.color.copy(z),e.background=null,v=!0):(y.color.copy(Ag),v=!0);for(let U=0;U<6;U++){const B=U%3;B===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):B===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const G=this._cubeSize;Ns(l,B*G,U>2?G:0,G,G),g.setRenderTarget(l),v&&g.render(A,m),g.render(e,m)}g.toneMapping=b,g.autoClear=S,e.background=z}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zs||e.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Ns(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,jo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=.05+p*.95,b=g*S,{_lodMax:E}=this,A=this._sizeLods[r],y=3*A*(r>E-tr?r-E+tr:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-i,Ns(c,y,v,3*A,2*A),l.setRenderTarget(c),l.render(h,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ns(e,y,v,3*A,2*A),l.setRenderTarget(e),l.render(h,jo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,b=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ur-1),A=c/E,y=isFinite(c)?1+Math.floor(x*A):Ur;y>Ur&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ur}`);const v=[];let z=0;for(let F=0;F<Ur;++F){const ae=F/A,w=Math.exp(-ae*ae/2);v.push(w),F===0?z+=w:F<y&&(z+=2*w)}for(let F=0;F<v.length;F++)v[F]=v[F]/z;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=E,S.mipInt.value=U-r;const B=this._sizeLods[l],G=3*B*(l>U-tr?l-U+tr:0),P=4*(this._cubeSize-B);Ns(i,G,P,3*B,2*B),m.setRenderTarget(i),m.render(g,jo)}}function L3(s){const e=[],i=[],r=[];let l=s;const c=s-tr+1+Tg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>s-tr?m=Tg[d-s+tr-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],b=6,E=6,A=3,y=2,v=1,z=new Float32Array(A*E*b),U=new Float32Array(y*E*b),B=new Float32Array(v*E*b);for(let P=0;P<b;P++){const F=P%3*2/3-1,ae=P>2?0:-1,w=[F,ae,0,F+2/3,ae,0,F+2/3,ae+1,0,F,ae,0,F+2/3,ae+1,0,F,ae+1,0];z.set(w,A*E*P),U.set(S,y*E*P);const R=[P,P,P,P,P,P];B.set(R,v*E*P)}const G=new Vn;G.setAttribute("position",new Hn(z,A)),G.setAttribute("uv",new Hn(U,y)),G.setAttribute("faceIndex",new Hn(B,v)),r.push(new Zn(G,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Rg(s,e,i){const r=new Ni(s,e,i);return r.texture.mapping=lu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ns(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function O3(s,e,i){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:U3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function P3(s,e,i){const r=new Float32Array(Ur),l=new ne(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function wg(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Dg(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z3(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===fh||m===dh,x=m===zs||m===Bs;if(p||x){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Cg(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new Cg(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function B3(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&tl("WebGLRenderer: "+r+" extension not supported."),l}}}function F3(s,e,i,r){const l={},c=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",d),delete l[S.id];const b=c.get(S);b&&(e.remove(b),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const b in S)e.update(S[b],s.ARRAY_BUFFER)}function p(g){const S=[],b=g.index,E=g.attributes.position;let A=0;if(b!==null){const z=b.array;A=b.version;for(let U=0,B=z.length;U<B;U+=3){const G=z[U+0],P=z[U+1],F=z[U+2];S.push(G,P,P,F,F,G)}}else if(E!==void 0){const z=E.array;A=E.version;for(let U=0,B=z.length/3-1;U<B;U+=3){const G=U+0,P=U+1,F=U+2;S.push(G,P,P,F,F,G)}}else return;const y=new(fv(S)?gv:xv)(S,1);y.version=A;const v=c.get(g);v&&e.remove(v),c.set(g,y)}function x(g){const S=c.get(g);if(S){const b=g.index;b!==null&&S.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function I3(s,e,i){let r;function l(S){r=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,b){s.drawElements(r,b,c,S*d),i.update(b,r,1)}function p(S,b,E){E!==0&&(s.drawElementsInstanced(r,b,c,S*d,E),i.update(b,r,E))}function x(S,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,c,S,0,E);let y=0;for(let v=0;v<E;v++)y+=b[v];i.update(y,r,1)}function g(S,b,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,b[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,c,S,0,A,0,E);let v=0;for(let z=0;z<E;z++)v+=b[z]*A[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function H3(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:nn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function G3(s,e,i){const r=new WeakMap,l=new on;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let R=function(){ae.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var b=R;S!==void 0&&S.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let B=0;E===!0&&(B=1),A===!0&&(B=2),y===!0&&(B=3);let G=h.attributes.position.count*B,P=1;G>e.maxTextureSize&&(P=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*P*4*g),ae=new hv(F,G,P,g);ae.type=ga,ae.needsUpdate=!0;const w=B*4;for(let k=0;k<g;k++){const J=v[k],le=z[k],me=U[k],de=G*P*4*k;for(let D=0;D<J.count;D++){const W=D*w;E===!0&&(l.fromBufferAttribute(J,D),F[de+W+0]=l.x,F[de+W+1]=l.y,F[de+W+2]=l.z,F[de+W+3]=0),A===!0&&(l.fromBufferAttribute(le,D),F[de+W+4]=l.x,F[de+W+5]=l.y,F[de+W+6]=l.z,F[de+W+7]=0),y===!0&&(l.fromBufferAttribute(me,D),F[de+W+8]=l.x,F[de+W+9]=l.y,F[de+W+10]=l.z,F[de+W+11]=me.itemSize===4?l.w:1)}}S={count:g,texture:ae,size:new ot(G,P)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function V3(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const Uv=new zn,Ug=new Av(1,1),Nv=new hv,Lv=new u1,Ov=new Sv,Ng=[],Lg=[],Og=new Float32Array(16),Pg=new Float32Array(9),zg=new Float32Array(4);function Vs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Ng[l];if(c===void 0&&(c=new Float32Array(l),Ng[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(c,h)}return c}function vn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function _n(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function fu(s,e){let i=Lg[e];i===void 0&&(i=new Int32Array(e),Lg[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function k3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function X3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2fv(this.addr,e),_n(i,e)}}function W3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;s.uniform3fv(this.addr,e),_n(i,e)}}function j3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4fv(this.addr,e),_n(i,e)}}function q3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;zg.set(r),s.uniformMatrix2fv(this.addr,!1,zg),_n(i,r)}}function Y3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;Pg.set(r),s.uniformMatrix3fv(this.addr,!1,Pg),_n(i,r)}}function Z3(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,r))return;Og.set(r),s.uniformMatrix4fv(this.addr,!1,Og),_n(i,r)}}function Q3(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function K3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2iv(this.addr,e),_n(i,e)}}function J3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3iv(this.addr,e),_n(i,e)}}function $3(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4iv(this.addr,e),_n(i,e)}}function e2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function t2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;s.uniform2uiv(this.addr,e),_n(i,e)}}function n2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;s.uniform3uiv(this.addr,e),_n(i,e)}}function i2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;s.uniform4uiv(this.addr,e),_n(i,e)}}function a2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Ug.compareFunction=uv,c=Ug):c=Uv,i.setTexture2D(e||c,l)}function r2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Lv,l)}function s2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Ov,l)}function o2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Nv,l)}function l2(s){switch(s){case 5126:return k3;case 35664:return X3;case 35665:return W3;case 35666:return j3;case 35674:return q3;case 35675:return Y3;case 35676:return Z3;case 5124:case 35670:return Q3;case 35667:case 35671:return K3;case 35668:case 35672:return J3;case 35669:case 35673:return $3;case 5125:return e2;case 36294:return t2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return o2}}function c2(s,e){s.uniform1fv(this.addr,e)}function u2(s,e){const i=Vs(e,this.size,2);s.uniform2fv(this.addr,i)}function f2(s,e){const i=Vs(e,this.size,3);s.uniform3fv(this.addr,i)}function d2(s,e){const i=Vs(e,this.size,4);s.uniform4fv(this.addr,i)}function h2(s,e){const i=Vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function p2(s,e){const i=Vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function m2(s,e){const i=Vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function x2(s,e){s.uniform1iv(this.addr,e)}function g2(s,e){s.uniform2iv(this.addr,e)}function v2(s,e){s.uniform3iv(this.addr,e)}function _2(s,e){s.uniform4iv(this.addr,e)}function S2(s,e){s.uniform1uiv(this.addr,e)}function y2(s,e){s.uniform2uiv(this.addr,e)}function b2(s,e){s.uniform3uiv(this.addr,e)}function M2(s,e){s.uniform4uiv(this.addr,e)}function E2(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Uv,c[d])}function T2(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Lv,c[d])}function A2(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Ov,c[d])}function C2(s,e,i){const r=this.cache,l=e.length,c=fu(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Nv,c[d])}function R2(s){switch(s){case 5126:return c2;case 35664:return u2;case 35665:return f2;case 35666:return d2;case 35674:return h2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return x2;case 35667:case 35671:return g2;case 35668:case 35672:return v2;case 35669:case 35673:return _2;case 5125:return S2;case 36294:return y2;case 36295:return b2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return C2}}class w2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=l2(i.type)}}class D2{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=R2(i.type)}}class U2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function Bg(s,e){s.seq.push(e),s.map[e.id]=e}function N2(s,e,i){const r=s.name,l=r.length;for(eh.lastIndex=0;;){const c=eh.exec(r),d=eh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Bg(i,p===void 0?new w2(h,s,e):new D2(h,s,e));break}else{let g=i.map[h];g===void 0&&(g=new U2(h),Bg(i,g)),i=g}}}class Kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);N2(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Fg(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const L2=37297;let O2=0;function P2(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Ig=new xt;function z2(s){Lt._getMatrix(Ig,Lt.workingColorSpace,s);const e=`mat3( ${Ig.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(s)){case eu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hg(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+P2(s.getShaderSource(e),h)}else return c}function B2(s,e){const i=z2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function F2(s,e){let i;switch(e){case My:i="Linear";break;case Ey:i="Reinhard";break;case Ty:i="Cineon";break;case tv:i="ACESFilmic";break;case Cy:i="AgX";break;case Ry:i="Neutral";break;case Ay:i="Custom";break;default:ut("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new ne;function I2(){Lt.getLuminanceCoefficients(jc);const s=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function G2(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function V2(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function Yo(s){return s!==""}function Gg(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(s){return s.replace(k2,W2)}const X2=new Map;function W2(s,e){let i=vt[e];if(i===void 0){const r=X2.get(e);if(r!==void 0)i=vt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wh(i)}const j2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(s){return s.replace(j2,q2)}function q2(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Xg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ny?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pa&&(e="SHADOWMAP_TYPE_VSM"),e}function Z2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Bs:e="ENVMAP_TYPE_CUBE";break;case lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function K2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ev:e="ENVMAP_BLENDING_MULTIPLY";break;case yy:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function J2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $2(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Y2(i),p=Z2(i),x=Q2(i),g=K2(i),S=J2(i),b=H2(i),E=G2(c),A=l.createProgram();let y,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),v.length>0&&(v+=`
`)):(y=[Xg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),v=[Xg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==nr?"#define TONE_MAPPING":"",i.toneMapping!==nr?vt.tonemapping_pars_fragment:"",i.toneMapping!==nr?F2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,B2("linearToOutputTexel",i.outputColorSpace),I2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),d=Wh(d),d=Gg(d,i),d=Vg(d,i),h=Wh(h),h=Gg(h,i),h=Vg(h,i),d=kg(d),h=kg(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===$x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=z+y+d,B=z+v+h,G=Fg(l,l.VERTEX_SHADER,U),P=Fg(l,l.FRAGMENT_SHADER,B);l.attachShader(A,G),l.attachShader(A,P),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(k){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(A)||"",le=l.getShaderInfoLog(G)||"",me=l.getShaderInfoLog(P)||"",de=J.trim(),D=le.trim(),W=me.trim();let j=!0,ue=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,P);else{const pe=Hg(l,G,"vertex"),L=Hg(l,P,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+pe+`
`+L)}else de!==""?ut("WebGLProgram: Program Info Log:",de):(D===""||W==="")&&(ue=!1);ue&&(k.diagnostics={runnable:j,programLog:de,vertexShader:{log:D,prefix:y},fragmentShader:{log:W,prefix:v}})}l.deleteShader(G),l.deleteShader(P),ae=new Kc(l,A),w=V2(l,A)}let ae;this.getUniforms=function(){return ae===void 0&&F(this),ae};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,L2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=P,this}let eE=0;class tE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new nE(e),i.set(e,r)),r}}class nE{constructor(e){this.id=eE++,this.code=e,this.usedTimes=0}}function iE(s,e,i,r,l,c,d){const h=new pv,m=new tE,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,k,J,le){const me=J.fog,de=le.geometry,D=w.isMeshStandardMaterial?J.environment:null,W=(w.isMeshStandardMaterial?i:e).get(w.envMap||D),j=W&&W.mapping===lu?W.image.height:null,ue=E[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&ut("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const pe=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,L=pe!==void 0?pe.length:0;let K=0;de.morphAttributes.position!==void 0&&(K=1),de.morphAttributes.normal!==void 0&&(K=2),de.morphAttributes.color!==void 0&&(K=3);let ge,be,De,Z;if(ue){const wt=Fi[ue];ge=wt.vertexShader,be=wt.fragmentShader}else ge=w.vertexShader,be=w.fragmentShader,m.update(w),De=m.getVertexShaderID(w),Z=m.getFragmentShaderID(w);const se=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Pe=le.isInstancedMesh===!0,Be=le.isBatchedMesh===!0,rt=!!w.map,Wt=!!w.matcap,it=!!W,ft=!!w.aoMap,H=!!w.lightMap,dt=!!w.bumpMap,gt=!!w.normalMap,Ot=!!w.displacementMap,Ge=!!w.emissiveMap,jt=!!w.metalnessMap,Ye=!!w.roughnessMap,lt=w.anisotropy>0,N=w.clearcoat>0,M=w.dispersion>0,ee=w.iridescence>0,ve=w.sheen>0,ye=w.transmission>0,fe=lt&&!!w.anisotropyMap,je=N&&!!w.clearcoatMap,Le=N&&!!w.clearcoatNormalMap,Ke=N&&!!w.clearcoatRoughnessMap,We=ee&&!!w.iridescenceMap,Me=ee&&!!w.iridescenceThicknessMap,Ae=ve&&!!w.sheenColorMap,qe=ve&&!!w.sheenRoughnessMap,ke=!!w.specularMap,ze=!!w.specularColorMap,at=!!w.specularIntensityMap,V=ye&&!!w.transmissionMap,Ue=ye&&!!w.thicknessMap,Re=!!w.gradientMap,we=!!w.alphaMap,Ee=w.alphaTest>0,Se=!!w.alphaHash,Ie=!!w.extensions;let st=nr;w.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(st=s.toneMapping);const Ht={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:ge,fragmentShader:be,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Be,batchingColor:Be&&le._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&le.instanceColor!==null,instancingMorph:Pe&&le.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Fs,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Wt,envMap:it,envMapMode:it&&W.mapping,envMapCubeUVHeight:j,aoMap:ft,lightMap:H,bumpMap:dt,normalMap:gt,displacementMap:S&&Ot,emissiveMap:Ge,normalMapObjectSpace:gt&&w.normalMapType===Ly,normalMapTangentSpace:gt&&w.normalMapType===Ny,metalnessMap:jt,roughnessMap:Ye,anisotropy:lt,anisotropyMap:fe,clearcoat:N,clearcoatMap:je,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ke,dispersion:M,iridescence:ee,iridescenceMap:We,iridescenceThicknessMap:Me,sheen:ve,sheenColorMap:Ae,sheenRoughnessMap:qe,specularMap:ke,specularColorMap:ze,specularIntensityMap:at,transmission:ye,transmissionMap:V,thicknessMap:Ue,gradientMap:Re,opaque:w.transparent===!1&&w.blending===Ls&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:Ee,alphaHash:Se,combine:w.combine,mapUv:rt&&A(w.map.channel),aoMapUv:ft&&A(w.aoMap.channel),lightMapUv:H&&A(w.lightMap.channel),bumpMapUv:dt&&A(w.bumpMap.channel),normalMapUv:gt&&A(w.normalMap.channel),displacementMapUv:Ot&&A(w.displacementMap.channel),emissiveMapUv:Ge&&A(w.emissiveMap.channel),metalnessMapUv:jt&&A(w.metalnessMap.channel),roughnessMapUv:Ye&&A(w.roughnessMap.channel),anisotropyMapUv:fe&&A(w.anisotropyMap.channel),clearcoatMapUv:je&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&A(w.sheenRoughnessMap.channel),specularMapUv:ke&&A(w.specularMap.channel),specularColorMapUv:ze&&A(w.specularColorMap.channel),specularIntensityMapUv:at&&A(w.specularIntensityMap.channel),transmissionMapUv:V&&A(w.transmissionMap.channel),thicknessMapUv:Ue&&A(w.thicknessMap.channel),alphaMapUv:we&&A(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(gt||lt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!de.attributes.uv&&(rt||we),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Te,skinning:le.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&Lt.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ma,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||Be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)R.push(k),R.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(z(R,w),U(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function z(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const R=E[w.type];let k;if(R){const J=Fi[R];k=au.clone(J.uniforms)}else k=w.uniforms;return k}function G(w,R){let k;for(let J=0,le=x.length;J<le;J++){const me=x[J];if(me.cacheKey===R){k=me,++k.usedTimes;break}}return k===void 0&&(k=new $2(s,R,w,c),x.push(k)),k}function P(w){if(--w.usedTimes===0){const R=x.indexOf(w);x[R]=x[x.length-1],x.pop(),w.destroy()}}function F(w){m.remove(w)}function ae(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:B,acquireProgram:G,releaseProgram:P,releaseShaderCache:F,programs:x,dispose:ae}}function aE(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function rE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Wg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jg(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,b,E,A,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:S,material:b,groupOrder:E,renderOrder:g.renderOrder,z:A,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=b,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=A,v.group=y),e++,v}function h(g,S,b,E,A,y){const v=d(g,S,b,E,A,y);b.transmission>0?r.push(v):b.transparent===!0?l.push(v):i.push(v)}function m(g,S,b,E,A,y){const v=d(g,S,b,E,A,y);b.transmission>0?r.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||rE),r.length>1&&r.sort(S||Wg),l.length>1&&l.sort(S||Wg)}function x(){for(let g=e,S=s.length;g<S;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function sE(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new jg,s.set(r,[d])):l>=c.length?(d=new jg,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new nt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":i={color:new nt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return s[e.id]=i,i}}}function lE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let cE=0;function uE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fE(s){const e=new oE,i=lE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ne);const l=new ne,c=new an,d=new an;function h(p){let x=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,E=0,A=0,y=0,v=0,z=0,U=0,B=0,G=0,P=0,F=0;p.sort(uE);for(let w=0,R=p.length;w<R;w++){const k=p[w],J=k.color,le=k.intensity,me=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=J.r*le,g+=J.g*le,S+=J.b*le;else if(k.isLightProbe){for(let D=0;D<9;D++)r.probe[D].addScaledVector(k.sh.coefficients[D],le);F++}else if(k.isDirectionalLight){const D=e.get(k);if(D.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,j=i.get(k);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[b]=j,r.directionalShadowMap[b]=de,r.directionalShadowMatrix[b]=k.shadow.matrix,z++}r.directional[b]=D,b++}else if(k.isSpotLight){const D=e.get(k);D.position.setFromMatrixPosition(k.matrixWorld),D.color.copy(J).multiplyScalar(le),D.distance=me,D.coneCos=Math.cos(k.angle),D.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),D.decay=k.decay,r.spot[A]=D;const W=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,W.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[A]=W.matrix,k.castShadow){const j=i.get(k);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=de,B++}A++}else if(k.isRectAreaLight){const D=e.get(k);D.color.copy(J).multiplyScalar(le),D.halfWidth.set(k.width*.5,0,0),D.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=D,y++}else if(k.isPointLight){const D=e.get(k);if(D.color.copy(k.color).multiplyScalar(k.intensity),D.distance=k.distance,D.decay=k.decay,k.castShadow){const W=k.shadow,j=i.get(k);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=k.shadow.matrix,U++}r.point[E]=D,E++}else if(k.isHemisphereLight){const D=e.get(k);D.skyColor.copy(k.color).multiplyScalar(le),D.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[v]=D,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=S;const ae=r.hash;(ae.directionalLength!==b||ae.pointLength!==E||ae.spotLength!==A||ae.rectAreaLength!==y||ae.hemiLength!==v||ae.numDirectionalShadows!==z||ae.numPointShadows!==U||ae.numSpotShadows!==B||ae.numSpotMaps!==G||ae.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=B+G-P,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,ae.directionalLength=b,ae.pointLength=E,ae.spotLength=A,ae.rectAreaLength=y,ae.hemiLength=v,ae.numDirectionalShadows=z,ae.numPointShadows=U,ae.numSpotShadows=B,ae.numSpotMaps=G,ae.numLightProbes=F,r.version=cE++)}function m(p,x){let g=0,S=0,b=0,E=0,A=0;const y=x.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const U=p[v];if(U.isDirectionalLight){const B=r.directional[g];B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),g++}else if(U.isSpotLight){const B=r.spot[b];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(y),B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(y),b++}else if(U.isRectAreaLight){const B=r.rectArea[E];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(y),d.identity(),c.copy(U.matrixWorld),c.premultiply(y),d.extractRotation(c),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const B=r.point[S];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const B=r.hemi[A];B.direction.setFromMatrixPosition(U.matrixWorld),B.direction.transformDirection(y),A++}}}return{setup:h,setupView:m,state:r}}function qg(s){const e=new fE(s),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function dE(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new qg(s),e.set(l,[h])):c>=d.length?(h=new qg(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const hE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mE(s,e,i){let r=new Ev;const l=new ot,c=new ot,d=new on,h=new F1({depthPacking:Uy}),m=new I1,p={},x=i.maxTextureSize,g={[ir]:Gn,[Gn]:ir,[ma]:ma},S=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:hE,fragmentShader:pE}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const E=new Vn;E.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Zn(E,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let v=this.type;this.render=function(P,F,ae){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const w=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Hi),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const le=v!==pa&&this.type===pa,me=v===pa&&this.type!==pa;for(let de=0,D=P.length;de<D;de++){const W=P[de],j=W.shadow;if(j===void 0){ut("WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ue=j.getFrameExtents();if(l.multiply(ue),c.copy(j.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ue.x),l.x=c.x*ue.x,j.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ue.y),l.y=c.y*ue.y,j.mapSize.y=c.y)),j.map===null||le===!0||me===!0){const L=this.type!==pa?{minFilter:ci,magFilter:ci}:{};j.map!==null&&j.map.dispose(),j.map=new Ni(l.x,l.y,L),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const pe=j.getViewportCount();for(let L=0;L<pe;L++){const K=j.getViewport(L);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),J.viewport(d),j.updateMatrices(W,L),r=j.getFrustum(),B(F,ae,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===pa&&z(j,ae),j.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(w,R,k)};function z(P,F){const ae=e.update(A);S.defines.VSM_SAMPLES!==P.blurSamples&&(S.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ni(l.x,l.y)),S.uniforms.shadow_pass.value=P.map.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,ae,S,A,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,ae,b,A,null)}function U(P,F,ae,w){let R=null;const k=ae.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)R=k;else if(R=ae.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=R.uuid,le=F.uuid;let me=p[J];me===void 0&&(me={},p[J]=me);let de=me[le];de===void 0&&(de=R.clone(),me[le]=de,F.addEventListener("dispose",G)),R=de}if(R.visible=F.visible,R.wireframe=F.wireframe,w===pa?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,ae.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=ae}return R}function B(P,F,ae,w,R){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===pa)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,P.matrixWorld);const le=e.update(P),me=P.material;if(Array.isArray(me)){const de=le.groups;for(let D=0,W=de.length;D<W;D++){const j=de[D],ue=me[j.materialIndex];if(ue&&ue.visible){const pe=U(P,ue,w,R);P.onBeforeShadow(s,P,F,ae,le,pe,j),s.renderBufferDirect(ae,null,le,pe,P,j),P.onAfterShadow(s,P,F,ae,le,pe,j)}}}else if(me.visible){const de=U(P,me,w,R);P.onBeforeShadow(s,P,F,ae,le,de,null),s.renderBufferDirect(ae,null,le,de,P,null),P.onAfterShadow(s,P,F,ae,le,de,null)}}const J=P.children;for(let le=0,me=J.length;le<me;le++)B(J[le],F,ae,w,R)}function G(P){P.target.removeEventListener("dispose",G);for(const ae in p){const w=p[ae],R=P.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const xE={[ah]:rh,[sh]:ch,[oh]:uh,[Ps]:lh,[rh]:ah,[ch]:sh,[uh]:oh,[lh]:Ps};function gE(s,e){function i(){let V=!1;const Ue=new on;let Re=null;const we=new on(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!V&&(s.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Se,Ie,st,Ht){Ht===!0&&(Ee*=st,Se*=st,Ie*=st),Ue.set(Ee,Se,Ie,st),we.equals(Ue)===!1&&(s.clearColor(Ee,Se,Ie,st),we.copy(Ue))},reset:function(){V=!1,Re=null,we.set(-1,0,0,0)}}}function r(){let V=!1,Ue=!1,Re=null,we=null,Ee=null;return{setReversed:function(Se){if(Ue!==Se){const Ie=e.get("EXT_clip_control");Se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ue=Se;const st=Ee;Ee=null,this.setClear(st)}},getReversed:function(){return Ue},setTest:function(Se){Se?se(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Se){Re!==Se&&!V&&(s.depthMask(Se),Re=Se)},setFunc:function(Se){if(Ue&&(Se=xE[Se]),we!==Se){switch(Se){case ah:s.depthFunc(s.NEVER);break;case rh:s.depthFunc(s.ALWAYS);break;case sh:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case oh:s.depthFunc(s.EQUAL);break;case lh:s.depthFunc(s.GEQUAL);break;case ch:s.depthFunc(s.GREATER);break;case uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Se}},setLocked:function(Se){V=Se},setClear:function(Se){Ee!==Se&&(Ue&&(Se=1-Se),s.clearDepth(Se),Ee=Se)},reset:function(){V=!1,Re=null,we=null,Ee=null,Ue=!1}}}function l(){let V=!1,Ue=null,Re=null,we=null,Ee=null,Se=null,Ie=null,st=null,Ht=null;return{setTest:function(wt){V||(wt?se(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(wt){Ue!==wt&&!V&&(s.stencilMask(wt),Ue=wt)},setFunc:function(wt,Un,Qn){(Re!==wt||we!==Un||Ee!==Qn)&&(s.stencilFunc(wt,Un,Qn),Re=wt,we=Un,Ee=Qn)},setOp:function(wt,Un,Qn){(Se!==wt||Ie!==Un||st!==Qn)&&(s.stencilOp(wt,Un,Qn),Se=wt,Ie=Un,st=Qn)},setLocked:function(wt){V=wt},setClear:function(wt){Ht!==wt&&(s.clearStencil(wt),Ht=wt)},reset:function(){V=!1,Ue=null,Re=null,we=null,Ee=null,Se=null,Ie=null,st=null,Ht=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,b=[],E=null,A=!1,y=null,v=null,z=null,U=null,B=null,G=null,P=null,F=new nt(0,0,0),ae=0,w=!1,R=null,k=null,J=null,le=null,me=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,W=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=W>=2);let ue=null,pe={};const L=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ge=new on().fromArray(L),be=new on().fromArray(K);function De(V,Ue,Re,we){const Ee=new Uint8Array(4),Se=s.createTexture();s.bindTexture(V,Se),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<Re;Ie++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Ue+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Se}const Z={};Z[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),se(s.DEPTH_TEST),d.setFunc(Ps),dt(!1),gt(Zx),se(s.CULL_FACE),ft(Hi);function se(V){x[V]!==!0&&(s.enable(V),x[V]=!0)}function Te(V){x[V]!==!1&&(s.disable(V),x[V]=!1)}function Pe(V,Ue){return g[V]!==Ue?(s.bindFramebuffer(V,Ue),g[V]=Ue,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ue),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Be(V,Ue){let Re=b,we=!1;if(V){Re=S.get(Ue),Re===void 0&&(Re=[],S.set(Ue,Re));const Ee=V.textures;if(Re.length!==Ee.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Ie=Ee.length;Se<Ie;Se++)Re[Se]=s.COLOR_ATTACHMENT0+Se;Re.length=Ee.length,we=!0}}else Re[0]!==s.BACK&&(Re[0]=s.BACK,we=!0);we&&s.drawBuffers(Re)}function rt(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const Wt={[Dr]:s.FUNC_ADD,[ay]:s.FUNC_SUBTRACT,[ry]:s.FUNC_REVERSE_SUBTRACT};Wt[sy]=s.MIN,Wt[oy]=s.MAX;const it={[ly]:s.ZERO,[cy]:s.ONE,[uy]:s.SRC_COLOR,[nh]:s.SRC_ALPHA,[xy]:s.SRC_ALPHA_SATURATE,[py]:s.DST_COLOR,[dy]:s.DST_ALPHA,[fy]:s.ONE_MINUS_SRC_COLOR,[ih]:s.ONE_MINUS_SRC_ALPHA,[my]:s.ONE_MINUS_DST_COLOR,[hy]:s.ONE_MINUS_DST_ALPHA,[gy]:s.CONSTANT_COLOR,[vy]:s.ONE_MINUS_CONSTANT_COLOR,[_y]:s.CONSTANT_ALPHA,[Sy]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(V,Ue,Re,we,Ee,Se,Ie,st,Ht,wt){if(V===Hi){A===!0&&(Te(s.BLEND),A=!1);return}if(A===!1&&(se(s.BLEND),A=!0),V!==iy){if(V!==y||wt!==w){if((v!==Dr||B!==Dr)&&(s.blendEquation(s.FUNC_ADD),v=Dr,B=Dr),wt)switch(V){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case Qx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:nn("WebGLState: Invalid blending: ",V);break}else switch(V){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qx:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kx:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",V);break}z=null,U=null,G=null,P=null,F.set(0,0,0),ae=0,y=V,w=wt}return}Ee=Ee||Ue,Se=Se||Re,Ie=Ie||we,(Ue!==v||Ee!==B)&&(s.blendEquationSeparate(Wt[Ue],Wt[Ee]),v=Ue,B=Ee),(Re!==z||we!==U||Se!==G||Ie!==P)&&(s.blendFuncSeparate(it[Re],it[we],it[Se],it[Ie]),z=Re,U=we,G=Se,P=Ie),(st.equals(F)===!1||Ht!==ae)&&(s.blendColor(st.r,st.g,st.b,Ht),F.copy(st),ae=Ht),y=V,w=!1}function H(V,Ue){V.side===ma?Te(s.CULL_FACE):se(s.CULL_FACE);let Re=V.side===Gn;Ue&&(Re=!Re),dt(Re),V.blending===Ls&&V.transparent===!1?ft(Hi):ft(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const we=V.stencilWrite;h.setTest(we),we&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ge(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function gt(V){V!==ey?(se(s.CULL_FACE),V!==k&&(V===Zx?s.cullFace(s.BACK):V===ty?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),k=V}function Ot(V){V!==J&&(D&&s.lineWidth(V),J=V)}function Ge(V,Ue,Re){V?(se(s.POLYGON_OFFSET_FILL),(le!==Ue||me!==Re)&&(s.polygonOffset(Ue,Re),le=Ue,me=Re)):Te(s.POLYGON_OFFSET_FILL)}function jt(V){V?se(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=s.TEXTURE0+de-1),ue!==V&&(s.activeTexture(V),ue=V)}function lt(V,Ue,Re){Re===void 0&&(ue===null?Re=s.TEXTURE0+de-1:Re=ue);let we=pe[Re];we===void 0&&(we={type:void 0,texture:void 0},pe[Re]=we),(we.type!==V||we.texture!==Ue)&&(ue!==Re&&(s.activeTexture(Re),ue=Re),s.bindTexture(V,Ue||Z[V]),we.type=V,we.texture=Ue)}function N(){const V=pe[ue];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ee(){try{s.compressedTexImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function ve(){try{s.texSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function ye(){try{s.texSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Le(){try{s.texStorage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Ke(){try{s.texStorage3D(...arguments)}catch(V){V("WebGLState:",V)}}function We(){try{s.texImage2D(...arguments)}catch(V){V("WebGLState:",V)}}function Me(){try{s.texImage3D(...arguments)}catch(V){V("WebGLState:",V)}}function Ae(V){ge.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),ge.copy(V))}function qe(V){be.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),be.copy(V))}function ke(V,Ue){let Re=p.get(Ue);Re===void 0&&(Re=new WeakMap,p.set(Ue,Re));let we=Re.get(V);we===void 0&&(we=s.getUniformBlockIndex(Ue,V.name),Re.set(V,we))}function ze(V,Ue){const we=p.get(Ue).get(V);m.get(Ue)!==we&&(s.uniformBlockBinding(Ue,we,V.__bindingPointIndex),m.set(Ue,we))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ue=null,pe={},g={},S=new WeakMap,b=[],E=null,A=!1,y=null,v=null,z=null,U=null,B=null,G=null,P=null,F=new nt(0,0,0),ae=0,w=!1,R=null,k=null,J=null,le=null,me=null,ge.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:se,disable:Te,bindFramebuffer:Pe,drawBuffers:Be,useProgram:rt,setBlending:ft,setMaterial:H,setFlipSided:dt,setCullFace:gt,setLineWidth:Ot,setPolygonOffset:Ge,setScissorTest:jt,activeTexture:Ye,bindTexture:lt,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:ee,texImage2D:We,texImage3D:Me,updateUBOMapping:ke,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:Ke,texSubImage2D:ve,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:je,scissor:Ae,viewport:qe,reset:at}}function vE(s,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,x=new WeakMap;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,M){return b?new OffscreenCanvas(N,M):nu("canvas")}function A(N,M,ee){let ve=1;const ye=lt(N);if((ye.width>ee||ye.height>ee)&&(ve=ee/Math.max(ye.width,ye.height)),ve<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const fe=Math.floor(ve*ye.width),je=Math.floor(ve*ye.height);g===void 0&&(g=E(fe,je));const Le=M?E(fe,je):g;return Le.width=fe,Le.height=je,Le.getContext("2d").drawImage(N,0,0,fe,je),ut("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+fe+"x"+je+")."),Le}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,M,ee,ve,ye=!1){if(N!==null){if(s[N]!==void 0)return s[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=M;if(M===s.RED&&(ee===s.FLOAT&&(fe=s.R32F),ee===s.HALF_FLOAT&&(fe=s.R16F),ee===s.UNSIGNED_BYTE&&(fe=s.R8)),M===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.R8UI),ee===s.UNSIGNED_SHORT&&(fe=s.R16UI),ee===s.UNSIGNED_INT&&(fe=s.R32UI),ee===s.BYTE&&(fe=s.R8I),ee===s.SHORT&&(fe=s.R16I),ee===s.INT&&(fe=s.R32I)),M===s.RG&&(ee===s.FLOAT&&(fe=s.RG32F),ee===s.HALF_FLOAT&&(fe=s.RG16F),ee===s.UNSIGNED_BYTE&&(fe=s.RG8)),M===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RG16UI),ee===s.UNSIGNED_INT&&(fe=s.RG32UI),ee===s.BYTE&&(fe=s.RG8I),ee===s.SHORT&&(fe=s.RG16I),ee===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),ee===s.UNSIGNED_INT&&(fe=s.RGB32UI),ee===s.BYTE&&(fe=s.RGB8I),ee===s.SHORT&&(fe=s.RGB16I),ee===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),ee===s.UNSIGNED_INT&&(fe=s.RGBA32UI),ee===s.BYTE&&(fe=s.RGBA8I),ee===s.SHORT&&(fe=s.RGBA16I),ee===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&(ee===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),M===s.RGBA){const je=ye?eu:Lt.getTransfer(ve);ee===s.FLOAT&&(fe=s.RGBA32F),ee===s.HALF_FLOAT&&(fe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(fe=je===Xt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function B(N,M){let ee;return N?M===null||M===Lr||M===Jo?ee=s.DEPTH24_STENCIL8:M===ga?ee=s.DEPTH32F_STENCIL8:M===Ko&&(ee=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Lr||M===Jo?ee=s.DEPTH_COMPONENT24:M===ga?ee=s.DEPTH_COMPONENT32F:M===Ko&&(ee=s.DEPTH_COMPONENT16),ee}function G(N,M){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ci&&N.minFilter!==bi?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function P(N){const M=N.target;M.removeEventListener("dispose",P),ae(M),M.isVideoTexture&&x.delete(M)}function F(N){const M=N.target;M.removeEventListener("dispose",F),R(M)}function ae(N){const M=r.get(N);if(M.__webglInit===void 0)return;const ee=N.source,ve=S.get(ee);if(ve){const ye=ve[M.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(N),Object.keys(ve).length===0&&S.delete(ee)}r.remove(N)}function w(N){const M=r.get(N);s.deleteTexture(M.__webglTexture);const ee=N.source,ve=S.get(ee);delete ve[M.__cacheKey],d.memory.textures--}function R(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(M.__webglFramebuffer[ve]))for(let ye=0;ye<M.__webglFramebuffer[ve].length;ye++)s.deleteFramebuffer(M.__webglFramebuffer[ve][ye]);else s.deleteFramebuffer(M.__webglFramebuffer[ve]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ve])}else{if(Array.isArray(M.__webglFramebuffer))for(let ve=0;ve<M.__webglFramebuffer.length;ve++)s.deleteFramebuffer(M.__webglFramebuffer[ve]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ve=0;ve<M.__webglColorRenderbuffer.length;ve++)M.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ve]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=N.textures;for(let ve=0,ye=ee.length;ve<ye;ve++){const fe=r.get(ee[ve]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(ee[ve])}r.remove(N)}let k=0;function J(){k=0}function le(){const N=k;return N>=l.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function me(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function de(N,M){const ee=r.get(N);if(N.isVideoTexture&&jt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const ve=N.image;if(ve===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ee,N,M);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+M)}function D(N,M){const ee=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Z(ee,N,M);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+M)}function W(N,M){const ee=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Z(ee,N,M);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+M)}function j(N,M){const ee=r.get(N);if(N.version>0&&ee.__version!==N.version){se(ee,N,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+M)}const ue={[hh]:s.REPEAT,[xa]:s.CLAMP_TO_EDGE,[ph]:s.MIRRORED_REPEAT},pe={[ci]:s.NEAREST,[wy]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Td]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},L={[Oy]:s.NEVER,[Hy]:s.ALWAYS,[Py]:s.LESS,[uv]:s.LEQUAL,[zy]:s.EQUAL,[Iy]:s.GEQUAL,[By]:s.GREATER,[Fy]:s.NOTEQUAL};function K(N,M){if(M.type===ga&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===bi||M.magFilter===Td||M.magFilter===Sc||M.magFilter===Nr||M.minFilter===bi||M.minFilter===Td||M.minFilter===Sc||M.minFilter===Nr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ue[M.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ue[M.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ue[M.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,pe[M.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ci||M.minFilter!==Sc&&M.minFilter!==Nr||M.type===ga&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ge(N,M){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",P));const ve=M.source;let ye=S.get(ve);ye===void 0&&(ye={},S.set(ve,ye));const fe=me(M);if(fe!==N.__cacheKey){ye[fe]===void 0&&(ye[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),ye[fe].usedTimes++;const je=ye[N.__cacheKey];je!==void 0&&(ye[N.__cacheKey].usedTimes--,je.usedTimes===0&&w(M)),N.__cacheKey=fe,N.__webglTexture=ye[fe].texture}return ee}function be(N,M,ee){return Math.floor(Math.floor(N/ee)/M)}function De(N,M,ee,ve){const fe=N.updateRanges;if(fe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,ee,ve,M.data);else{fe.sort((Me,Ae)=>Me.start-Ae.start);let je=0;for(let Me=1;Me<fe.length;Me++){const Ae=fe[je],qe=fe[Me],ke=Ae.start+Ae.count,ze=be(qe.start,M.width,4),at=be(Ae.start,M.width,4);qe.start<=ke+1&&ze===at&&be(qe.start+qe.count-1,M.width,4)===ze?Ae.count=Math.max(Ae.count,qe.start+qe.count-Ae.start):(++je,fe[je]=qe)}fe.length=je+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Ke=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Me=0,Ae=fe.length;Me<Ae;Me++){const qe=fe[Me],ke=Math.floor(qe.start/4),ze=Math.ceil(qe.count/4),at=ke%M.width,V=Math.floor(ke/M.width),Ue=ze,Re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,at),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),i.texSubImage2D(s.TEXTURE_2D,0,at,V,Ue,Re,ee,ve,M.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function Z(N,M,ee){let ve=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ve=s.TEXTURE_3D);const ye=ge(N,M),fe=M.source;i.bindTexture(ve,N.__webglTexture,s.TEXTURE0+ee);const je=r.get(fe);if(fe.version!==je.__version||ye===!0){i.activeTexture(s.TEXTURE0+ee);const Le=Lt.getPrimaries(Lt.workingColorSpace),Ke=M.colorSpace===er?null:Lt.getPrimaries(M.colorSpace),We=M.colorSpace===er||Le===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Me=A(M.image,!1,l.maxTextureSize);Me=Ye(M,Me);const Ae=c.convert(M.format,M.colorSpace),qe=c.convert(M.type);let ke=U(M.internalFormat,Ae,qe,M.colorSpace,M.isVideoTexture);K(ve,M);let ze;const at=M.mipmaps,V=M.isVideoTexture!==!0,Ue=je.__version===void 0||ye===!0,Re=fe.dataReady,we=G(M,Me);if(M.isDepthTexture)ke=B(M.format===el,M.type),Ue&&(V?i.texStorage2D(s.TEXTURE_2D,1,ke,Me.width,Me.height):i.texImage2D(s.TEXTURE_2D,0,ke,Me.width,Me.height,0,Ae,qe,null));else if(M.isDataTexture)if(at.length>0){V&&Ue&&i.texStorage2D(s.TEXTURE_2D,we,ke,at[0].width,at[0].height);for(let Ee=0,Se=at.length;Ee<Se;Ee++)ze=at[Ee],V?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Ae,qe,ze.data):i.texImage2D(s.TEXTURE_2D,Ee,ke,ze.width,ze.height,0,Ae,qe,ze.data);M.generateMipmaps=!1}else V?(Ue&&i.texStorage2D(s.TEXTURE_2D,we,ke,Me.width,Me.height),Re&&De(M,Me,Ae,qe)):i.texImage2D(s.TEXTURE_2D,0,ke,Me.width,Me.height,0,Ae,qe,Me.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,ke,at[0].width,at[0].height,Me.depth);for(let Ee=0,Se=at.length;Ee<Se;Ee++)if(ze=at[Ee],M.format!==Ui)if(Ae!==null)if(V){if(Re)if(M.layerUpdates.size>0){const Ie=Eg(ze.width,ze.height,M.format,M.type);for(const st of M.layerUpdates){const Ht=ze.data.subarray(st*Ie/ze.data.BYTES_PER_ELEMENT,(st+1)*Ie/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,st,ze.width,ze.height,1,Ae,Ht)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,ze.width,ze.height,Me.depth,Ae,ze.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,ke,ze.width,ze.height,Me.depth,0,ze.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Re&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,ze.width,ze.height,Me.depth,Ae,qe,ze.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,ke,ze.width,ze.height,Me.depth,0,Ae,qe,ze.data)}else{V&&Ue&&i.texStorage2D(s.TEXTURE_2D,we,ke,at[0].width,at[0].height);for(let Ee=0,Se=at.length;Ee<Se;Ee++)ze=at[Ee],M.format!==Ui?Ae!==null?V?Re&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Ae,ze.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,ke,ze.width,ze.height,0,ze.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Ae,qe,ze.data):i.texImage2D(s.TEXTURE_2D,Ee,ke,ze.width,ze.height,0,Ae,qe,ze.data)}else if(M.isDataArrayTexture)if(V){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,we,ke,Me.width,Me.height,Me.depth),Re)if(M.layerUpdates.size>0){const Ee=Eg(Me.width,Me.height,M.format,M.type);for(const Se of M.layerUpdates){const Ie=Me.data.subarray(Se*Ee/Me.data.BYTES_PER_ELEMENT,(Se+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Me.width,Me.height,1,Ae,qe,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ae,qe,Me.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,Me.width,Me.height,Me.depth,0,Ae,qe,Me.data);else if(M.isData3DTexture)V?(Ue&&i.texStorage3D(s.TEXTURE_3D,we,ke,Me.width,Me.height,Me.depth),Re&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ae,qe,Me.data)):i.texImage3D(s.TEXTURE_3D,0,ke,Me.width,Me.height,Me.depth,0,Ae,qe,Me.data);else if(M.isFramebufferTexture){if(Ue)if(V)i.texStorage2D(s.TEXTURE_2D,we,ke,Me.width,Me.height);else{let Ee=Me.width,Se=Me.height;for(let Ie=0;Ie<we;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,ke,Ee,Se,0,Ae,qe,null),Ee>>=1,Se>>=1}}else if(at.length>0){if(V&&Ue){const Ee=lt(at[0]);i.texStorage2D(s.TEXTURE_2D,we,ke,Ee.width,Ee.height)}for(let Ee=0,Se=at.length;Ee<Se;Ee++)ze=at[Ee],V?Re&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Ae,qe,ze):i.texImage2D(s.TEXTURE_2D,Ee,ke,Ae,qe,ze);M.generateMipmaps=!1}else if(V){if(Ue){const Ee=lt(Me);i.texStorage2D(s.TEXTURE_2D,we,ke,Ee.width,Ee.height)}Re&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,qe,Me)}else i.texImage2D(s.TEXTURE_2D,0,ke,Ae,qe,Me);y(M)&&v(ve),je.__version=fe.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function se(N,M,ee){if(M.image.length!==6)return;const ve=ge(N,M),ye=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ee);const fe=r.get(ye);if(ye.version!==fe.__version||ve===!0){i.activeTexture(s.TEXTURE0+ee);const je=Lt.getPrimaries(Lt.workingColorSpace),Le=M.colorSpace===er?null:Lt.getPrimaries(M.colorSpace),Ke=M.colorSpace===er||je===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,Me=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!We&&!Me?Ae[Se]=A(M.image[Se],!0,l.maxCubemapSize):Ae[Se]=Me?M.image[Se].image:M.image[Se],Ae[Se]=Ye(M,Ae[Se]);const qe=Ae[0],ke=c.convert(M.format,M.colorSpace),ze=c.convert(M.type),at=U(M.internalFormat,ke,ze,M.colorSpace),V=M.isVideoTexture!==!0,Ue=fe.__version===void 0||ve===!0,Re=ye.dataReady;let we=G(M,qe);K(s.TEXTURE_CUBE_MAP,M);let Ee;if(We){V&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,qe.width,qe.height);for(let Se=0;Se<6;Se++){Ee=Ae[Se].mipmaps;for(let Ie=0;Ie<Ee.length;Ie++){const st=Ee[Ie];M.format!==Ui?ke!==null?V?Re&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,0,0,st.width,st.height,ke,st.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,at,st.width,st.height,0,st.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,0,0,st.width,st.height,ke,ze,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie,at,st.width,st.height,0,ke,ze,st.data)}}}else{if(Ee=M.mipmaps,V&&Ue){Ee.length>0&&we++;const Se=lt(Ae[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Me){V?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,ke,ze,Ae[Se].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,at,Ae[Se].width,Ae[Se].height,0,ke,ze,Ae[Se].data);for(let Ie=0;Ie<Ee.length;Ie++){const Ht=Ee[Ie].image[Se].image;V?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,0,0,Ht.width,Ht.height,ke,ze,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,at,Ht.width,Ht.height,0,ke,ze,Ht.data)}}else{V?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ke,ze,Ae[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,at,ke,ze,Ae[Se]);for(let Ie=0;Ie<Ee.length;Ie++){const st=Ee[Ie];V?Re&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,0,0,ke,ze,st.image[Se]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie+1,at,ke,ze,st.image[Se])}}}y(M)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ye.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Te(N,M,ee,ve,ye,fe){const je=c.convert(ee.format,ee.colorSpace),Le=c.convert(ee.type),Ke=U(ee.internalFormat,je,Le,ee.colorSpace),We=r.get(M),Me=r.get(ee);if(Me.__renderTarget=M,!We.__hasExternalTextures){const Ae=Math.max(1,M.width>>fe),qe=Math.max(1,M.height>>fe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,fe,Ke,Ae,qe,M.depth,0,je,Le,null):i.texImage2D(ye,fe,Ke,Ae,qe,0,je,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ge(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,ye,Me.__webglTexture,0,Ot(M)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,ye,Me.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(N,M,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,N),M.depthBuffer){const ve=M.depthTexture,ye=ve&&ve.isDepthTexture?ve.type:null,fe=B(M.stencilBuffer,ye),je=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=Ot(M);Ge(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,fe,M.width,M.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,fe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,N)}else{const ve=M.textures;for(let ye=0;ye<ve.length;ye++){const fe=ve[ye],je=c.convert(fe.format,fe.colorSpace),Le=c.convert(fe.type),Ke=U(fe.internalFormat,je,Le,fe.colorSpace),We=Ot(M);ee&&Ge(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ke,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,Ke,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Be(N,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(M.depthTexture);ve.__renderTarget=M,(!ve.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const ye=ve.__webglTexture,fe=Ot(M);if(M.depthTexture.format===$o)Ge(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(M.depthTexture.format===el)Ge(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function rt(N){const M=r.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const ve=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ve){const ye=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ve.removeEventListener("dispose",ye)};ve.addEventListener("dispose",ye),M.__depthDisposeCallback=ye}M.__boundDepthTexture=ve}if(N.depthTexture&&!M.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");const ve=N.texture.mipmaps;ve&&ve.length>0?Be(M.__webglFramebuffer[0],N):Be(M.__webglFramebuffer,N)}else if(ee){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]===void 0)M.__webglDepthbuffer[ve]=s.createRenderbuffer(),Pe(M.__webglDepthbuffer[ve],N,!1);else{const ye=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,fe)}}else{const ve=N.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Pe(M.__webglDepthbuffer,N,!1);else{const ye=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(N,M,ee){const ve=r.get(N);M!==void 0&&Te(ve.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&rt(N)}function it(N){const M=N.texture,ee=r.get(N),ve=r.get(M);N.addEventListener("dispose",F);const ye=N.textures,fe=N.isWebGLCubeRenderTarget===!0,je=ye.length>1;if(je||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=M.version,d.memory.textures++),fe){ee.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[Le]=[];for(let Ke=0;Ke<M.mipmaps.length;Ke++)ee.__webglFramebuffer[Le][Ke]=s.createFramebuffer()}else ee.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Le=0;Le<M.mipmaps.length;Le++)ee.__webglFramebuffer[Le]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(je)for(let Le=0,Ke=ye.length;Le<Ke;Le++){const We=r.get(ye[Le]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&Ge(N)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){const Ke=ye[Le];ee.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Le]);const We=c.convert(Ke.format,Ke.colorSpace),Me=c.convert(Ke.type),Ae=U(Ke.internalFormat,We,Me,Ke.colorSpace,N.isXRRenderTarget===!0),qe=Ot(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Ae,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(ee.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),K(s.TEXTURE_CUBE_MAP,M);for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)Te(ee.__webglFramebuffer[Le][Ke],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ke);else Te(ee.__webglFramebuffer[Le],N,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(M)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Le=0,Ke=ye.length;Le<Ke;Le++){const We=ye[Le],Me=r.get(We);let Ae=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Me.__webglTexture),K(Ae,We),Te(ee.__webglFramebuffer,N,We,s.COLOR_ATTACHMENT0+Le,Ae,0),y(We)&&v(Ae)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,ve.__webglTexture),K(Le,M),M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)Te(ee.__webglFramebuffer[Ke],N,M,s.COLOR_ATTACHMENT0,Le,Ke);else Te(ee.__webglFramebuffer,N,M,s.COLOR_ATTACHMENT0,Le,0);y(M)&&v(Le),i.unbindTexture()}N.depthBuffer&&rt(N)}function ft(N){const M=N.textures;for(let ee=0,ve=M.length;ee<ve;ee++){const ye=M[ee];if(y(ye)){const fe=z(N),je=r.get(ye).__webglTexture;i.bindTexture(fe,je),v(fe),i.unbindTexture()}}}const H=[],dt=[];function gt(N){if(N.samples>0){if(Ge(N)===!1){const M=N.textures,ee=N.width,ve=N.height;let ye=s.COLOR_BUFFER_BIT;const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(N),Le=M.length>1;if(Le)for(let We=0;We<M.length;We++)i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Ke=N.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let We=0;We<M.length;We++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[We]);const Me=r.get(M[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,ye,s.NEAREST),m===!0&&(H.length=0,dt.length=0,H.push(s.COLOR_ATTACHMENT0+We),N.depthBuffer&&N.resolveDepthBuffer===!1&&(H.push(fe),dt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let We=0;We<M.length;We++){i.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,je.__webglColorRenderbuffer[We]);const Me=r.get(M[We]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,Me,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ot(N){return Math.min(l.maxSamples,N.samples)}function Ge(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function jt(N){const M=d.render.frame;x.get(N)!==M&&(x.set(N,M),N.update())}function Ye(N,M){const ee=N.colorSpace,ve=N.format,ye=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Fs&&ee!==er&&(Lt.getTransfer(ee)===Xt?(ve!==Ui||ye!==Sa)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",ee)),M}function lt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=J,this.setTexture2D=de,this.setTexture2DArray=D,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Wt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ge}function _E(s,e){function i(r,l=er){let c;const d=Lt.getTransfer(l);if(r===Sa)return s.UNSIGNED_BYTE;if(r===Zh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===rv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===sv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===iv)return s.BYTE;if(r===av)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===Yh)return s.INT;if(r===Lr)return s.UNSIGNED_INT;if(r===ga)return s.FLOAT;if(r===Gi)return s.HALF_FLOAT;if(r===ov)return s.ALPHA;if(r===lv)return s.RGB;if(r===Ui)return s.RGBA;if(r===$o)return s.DEPTH_COMPONENT;if(r===el)return s.DEPTH_STENCIL;if(r===cv)return s.RED;if(r===Kh)return s.RED_INTEGER;if(r===Jh)return s.RG;if(r===$h)return s.RG_INTEGER;if(r===ep)return s.RGBA_INTEGER;if(r===qc||r===Yc||r===Zc||r===Qc)if(d===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mh||r===xh||r===gh||r===vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===mh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_h||r===Sh||r===yh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===_h||r===Sh)return d===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===yh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bh||r===Mh||r===Eh||r===Th||r===Ah||r===Ch||r===Rh||r===wh||r===Dh||r===Uh||r===Nh||r===Lh||r===Oh||r===Ph)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===bh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Th)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ah)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ch)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return d===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zh||r===Bh||r===Fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===zh)return d===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ih||r===Hh||r===Gh||r===Vh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ih)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Cv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new gn({vertexShader:SE,fragmentShader:yE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Zn(new Or(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ME extends Gs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,S=null,b=null,E=null;const A=typeof XRWebGLBinding<"u",y=new bE,v={},z=i.getContextAttributes();let U=null,B=null;const G=[],P=[],F=new ot;let ae=null;const w=new li;w.viewport=new on;const R=new li;R.viewport=new on;const k=[w,R],J=new V1;let le=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let se=G[Z];return se===void 0&&(se=new jd,G[Z]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Z){let se=G[Z];return se===void 0&&(se=new jd,G[Z]=se),se.getGripSpace()},this.getHand=function(Z){let se=G[Z];return se===void 0&&(se=new jd,G[Z]=se),se.getHandSpace()};function de(Z){const se=P.indexOf(Z.inputSource);if(se===-1)return;const Te=G[se];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,p||d),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",W);for(let Z=0;Z<G.length;Z++){const se=P[Z];se!==null&&(P[Z]=null,G[Z].disconnect(se))}le=null,me=null,y.reset();for(const Z in v)delete v[Z];e.setRenderTarget(U),b=null,S=null,g=null,l=null,B=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(ae),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",D),l.addEventListener("inputsourceschange",W),z.xrCompatible!==!0&&await i.makeXRCompatible(),ae=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Pe=null,Be=null;z.depth&&(Be=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=z.stencil?el:$o,Pe=z.stencil?Jo:Lr);const rt={colorFormat:i.RGBA8,depthFormat:Be,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(rt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Ni(S.textureWidth,S.textureHeight,{format:Ui,type:Sa,depthTexture:new Av(S.textureWidth,S.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Te={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),B=new Ni(b.framebufferWidth,b.framebufferHeight,{format:Ui,type:Sa,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),De.setContext(l),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Z){for(let se=0;se<Z.removed.length;se++){const Te=Z.removed[se],Pe=P.indexOf(Te);Pe>=0&&(P[Pe]=null,G[Pe].disconnect(Te))}for(let se=0;se<Z.added.length;se++){const Te=Z.added[se];let Pe=P.indexOf(Te);if(Pe===-1){for(let rt=0;rt<G.length;rt++)if(rt>=P.length){P.push(Te),Pe=rt;break}else if(P[rt]===null){P[rt]=Te,Pe=rt;break}if(Pe===-1)break}const Be=G[Pe];Be&&Be.connect(Te)}}const j=new ne,ue=new ne;function pe(Z,se,Te){j.setFromMatrixPosition(se.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);const Pe=j.distanceTo(ue),Be=se.projectionMatrix.elements,rt=Te.projectionMatrix.elements,Wt=Be[14]/(Be[10]-1),it=Be[14]/(Be[10]+1),ft=(Be[9]+1)/Be[5],H=(Be[9]-1)/Be[5],dt=(Be[8]-1)/Be[0],gt=(rt[8]+1)/rt[0],Ot=Wt*dt,Ge=Wt*gt,jt=Pe/(-dt+gt),Ye=jt*-dt;if(se.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ye),Z.translateZ(jt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Be[10]===-1)Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const lt=Wt+jt,N=it+jt,M=Ot-Ye,ee=Ge+(Pe-Ye),ve=ft*it/N*lt,ye=H*it/N*lt;Z.projectionMatrix.makePerspective(M,ee,ve,ye,lt,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function L(Z,se){se===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(se.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let se=Z.near,Te=Z.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),J.near=R.near=w.near=se,J.far=R.far=w.far=Te,(le!==J.near||me!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),le=J.near,me=J.far),J.layers.mask=Z.layers.mask|6,w.layers.mask=J.layers.mask&3,R.layers.mask=J.layers.mask&5;const Pe=Z.parent,Be=J.cameras;L(J,Pe);for(let rt=0;rt<Be.length;rt++)L(Be[rt],Pe);Be.length===2?pe(J,w,R):J.projectionMatrix.copy(w.projectionMatrix),K(Z,J,Pe)};function K(Z,se,Te){Te===null?Z.matrix.copy(se.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(se.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(se.projectionMatrix),Z.projectionMatrixInverse.copy(se.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=nl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(Z){m=Z,S!==null&&(S.fixedFoveation=Z),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(Z){return v[Z]};let ge=null;function be(Z,se){if(x=se.getViewerPose(p||d),E=se,x!==null){const Te=x.views;b!==null&&(e.setRenderTargetFramebuffer(B,b.framebuffer),e.setRenderTarget(B));let Pe=!1;Te.length!==J.cameras.length&&(J.cameras.length=0,Pe=!0);for(let it=0;it<Te.length;it++){const ft=Te[it];let H=null;if(b!==null)H=b.getViewport(ft);else{const gt=g.getViewSubImage(S,ft);H=gt.viewport,it===0&&(e.setRenderTargetTextures(B,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(B))}let dt=k[it];dt===void 0&&(dt=new li,dt.layers.enable(it),dt.viewport=new on,k[it]=dt),dt.matrix.fromArray(ft.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ft.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(H.x,H.y,H.width,H.height),it===0&&(J.matrix.copy(dt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Pe===!0&&J.cameras.push(dt)}const Be=l.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const it=g.getDepthInformation(Te[0]);it&&it.isValid&&it.texture&&y.init(it,l.renderState)}if(Be&&Be.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let it=0;it<Te.length;it++){const ft=Te[it].camera;if(ft){let H=v[ft];H||(H=new Cv,v[ft]=H);const dt=g.getCameraImage(ft);H.sourceTexture=dt}}}}for(let Te=0;Te<G.length;Te++){const Pe=P[Te],Be=G[Te];Pe!==null&&Be!==void 0&&Be.update(Pe,se,p||d)}ge&&ge(Z,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),E=null}const De=new Dv;De.setAnimationLoop(be),this.setAnimationLoop=function(Z){ge=Z},this.dispose=function(){}}}const Cr=new ya,EE=new an;function TE(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,vv(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,z,U,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),g(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v)):v.isMeshStandardMaterial?(c(y,v),S(y,v),v.isMeshPhysicalMaterial&&b(y,v,B)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),A(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,z,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Gn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Gn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const z=e.get(v),U=z.envMap,B=z.envMapRotation;U&&(y.envMap.value=U,Cr.copy(B),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),y.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(Cr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,z,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*z,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function b(y,v,z){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const z=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AE(s,e,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const B=U.program;r.uniformBlockBinding(z,B)}function p(z,U){let B=l[z.id];B===void 0&&(E(z),B=x(z),l[z.id]=B,z.addEventListener("dispose",y));const G=U.program;r.updateUBOMapping(z,G);const P=e.render.frame;c[z.id]!==P&&(S(z),c[z.id]=P)}function x(z){const U=g();z.__bindingPointIndex=U;const B=s.createBuffer(),G=z.__size,P=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,B),s.bufferData(s.UNIFORM_BUFFER,G,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,B),B}function g(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const U=l[z.id],B=z.uniforms,G=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let P=0,F=B.length;P<F;P++){const ae=Array.isArray(B[P])?B[P]:[B[P]];for(let w=0,R=ae.length;w<R;w++){const k=ae[w];if(b(k,P,w,G)===!0){const J=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let me=0;for(let de=0;de<le.length;de++){const D=le[de],W=A(D);typeof D=="number"||typeof D=="boolean"?(k.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,J+me,k.__data)):D.isMatrix3?(k.__data[0]=D.elements[0],k.__data[1]=D.elements[1],k.__data[2]=D.elements[2],k.__data[3]=0,k.__data[4]=D.elements[3],k.__data[5]=D.elements[4],k.__data[6]=D.elements[5],k.__data[7]=0,k.__data[8]=D.elements[6],k.__data[9]=D.elements[7],k.__data[10]=D.elements[8],k.__data[11]=0):(D.toArray(k.__data,me),me+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(z,U,B,G){const P=z.value,F=U+"_"+B;if(G[F]===void 0)return typeof P=="number"||typeof P=="boolean"?G[F]=P:G[F]=P.clone(),!0;{const ae=G[F];if(typeof P=="number"||typeof P=="boolean"){if(ae!==P)return G[F]=P,!0}else if(ae.equals(P)===!1)return ae.copy(P),!0}return!1}function E(z){const U=z.uniforms;let B=0;const G=16;for(let F=0,ae=U.length;F<ae;F++){const w=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,k=w.length;R<k;R++){const J=w[R],le=Array.isArray(J.value)?J.value:[J.value];for(let me=0,de=le.length;me<de;me++){const D=le[me],W=A(D),j=B%G,ue=j%W.boundary,pe=j+ue;B+=ue,pe!==0&&G-pe<W.storage&&(B+=G-pe),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=B,B+=W.storage}}}const P=B%G;return P>0&&(B+=G-P),z.__size=B,z.__cache={},this}function A(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",z),U}function y(z){const U=z.target;U.removeEventListener("dispose",y);const B=d.indexOf(U.__bindingPointIndex);d.splice(B,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const z in l)s.deleteBuffer(l[z]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const CE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ha=null;function RE(){return ha===null&&(ha=new D1(CE,32,32,Jh,Gi),ha.minFilter=bi,ha.magFilter=bi,ha.wrapS=xa,ha.wrapT=xa,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class Pv{constructor(e={}){const{canvas:i=Gy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const E=new Set([ep,$h,Kh]),A=new Set([Sa,Lr,Ko,Jo,Zh,Qh]),y=new Uint32Array(4),v=new Int32Array(4);let z=null,U=null;const B=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let F=!1;this._outputColorSpace=Si;let ae=0,w=0,R=null,k=-1,J=null;const le=new on,me=new on;let de=null;const D=new nt(0);let W=0,j=i.width,ue=i.height,pe=1,L=null,K=null;const ge=new on(0,0,j,ue),be=new on(0,0,j,ue);let De=!1;const Z=new Ev;let se=!1,Te=!1;const Pe=new an,Be=new ne,rt=new on,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function ft(){return R===null?pe:1}let H=r;function dt(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qh}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),H===null){const q="webgl2";if(H=dt(q,C),H===null)throw dt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let gt,Ot,Ge,jt,Ye,lt,N,M,ee,ve,ye,fe,je,Le,Ke,We,Me,Ae,qe,ke,ze,at,V,Ue;function Re(){gt=new B3(H),gt.init(),at=new _E(H,gt),Ot=new R3(H,gt,e,at),Ge=new gE(H,gt),Ot.reversedDepthBuffer&&S&&Ge.buffers.depth.setReversed(!0),jt=new H3(H),Ye=new aE,lt=new vE(H,gt,Ge,Ye,Ot,at,jt),N=new D3(P),M=new z3(P),ee=new X1(H),V=new A3(H,ee),ve=new F3(H,ee,jt,V),ye=new V3(H,ve,ee,jt),qe=new G3(H,Ot,lt),We=new w3(Ye),fe=new iE(P,N,M,gt,Ot,V,We),je=new TE(P,Ye),Le=new sE,Ke=new dE(gt),Ae=new T3(P,N,M,Ge,ye,b,m),Me=new mE(P,ye,Ot),Ue=new AE(H,jt,Ot,Ge),ke=new C3(H,gt,jt),ze=new I3(H,gt,jt),jt.programs=fe.programs,P.capabilities=Ot,P.extensions=gt,P.properties=Ye,P.renderLists=Le,P.shadowMap=Me,P.state=Ge,P.info=jt}Re();const we=new ME(P,H);this.xr=we,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(j,ue,!1))},this.getSize=function(C){return C.set(j,ue)},this.setSize=function(C,q,oe=!0){if(we.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,ue=q,i.width=Math.floor(C*pe),i.height=Math.floor(q*pe),oe===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(j*pe,ue*pe).floor()},this.setDrawingBufferSize=function(C,q,oe){j=C,ue=q,pe=oe,i.width=Math.floor(C*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(le)},this.getViewport=function(C){return C.copy(ge)},this.setViewport=function(C,q,oe,ie){C.isVector4?ge.set(C.x,C.y,C.z,C.w):ge.set(C,q,oe,ie),Ge.viewport(le.copy(ge).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(be)},this.setScissor=function(C,q,oe,ie){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,q,oe,ie),Ge.scissor(me.copy(be).multiplyScalar(pe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Ge.setScissorTest(De=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,oe=!0){let ie=0;if(C){let Q=!1;if(R!==null){const Ce=R.texture.format;Q=E.has(Ce)}if(Q){const Ce=R.texture.type,Ne=A.has(Ce),Fe=Ae.getClearColor(),He=Ae.getClearAlpha(),$e=Fe.r,tt=Fe.g,Ze=Fe.b;Ne?(y[0]=$e,y[1]=tt,y[2]=Ze,y[3]=He,H.clearBufferuiv(H.COLOR,0,y)):(v[0]=$e,v[1]=tt,v[2]=Ze,v[3]=He,H.clearBufferiv(H.COLOR,0,v))}else ie|=H.COLOR_BUFFER_BIT}q&&(ie|=H.DEPTH_BUFFER_BIT),oe&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Ae.dispose(),Le.dispose(),Ke.dispose(),Ye.dispose(),N.dispose(),M.dispose(),ye.dispose(),V.dispose(),Ue.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",ks),we.removeEventListener("sessionend",Xs),Mi.stop()};function Ee(C){C.preventDefault(),iu("WebGLRenderer: Context Lost."),F=!0}function Se(){iu("WebGLRenderer: Context Restored."),F=!1;const C=jt.autoReset,q=Me.enabled,oe=Me.autoUpdate,ie=Me.needsUpdate,Q=Me.type;Re(),jt.autoReset=C,Me.enabled=q,Me.autoUpdate=oe,Me.needsUpdate=ie,Me.type=Q}function Ie(C){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function st(C){const q=C.target;q.removeEventListener("dispose",st),Ht(q)}function Ht(C){wt(C),Ye.remove(C)}function wt(C){const q=Ye.get(C).programs;q!==void 0&&(q.forEach(function(oe){fe.releaseProgram(oe)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,oe,ie,Q,Ce){q===null&&(q=Wt);const Ne=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=du(C,q,oe,ie,Q);Ge.setMaterial(ie,Ne);let He=oe.index,$e=1;if(ie.wireframe===!0){if(He=ve.getWireframeAttribute(oe),He===void 0)return;$e=2}const tt=oe.drawRange,Ze=oe.attributes.position;let pt=tt.start*$e,Rt=(tt.start+tt.count)*$e;Ce!==null&&(pt=Math.max(pt,Ce.start*$e),Rt=Math.min(Rt,(Ce.start+Ce.count)*$e)),He!==null?(pt=Math.max(pt,0),Rt=Math.min(Rt,He.count)):Ze!=null&&(pt=Math.max(pt,0),Rt=Math.min(Rt,Ze.count));const Dt=Rt-pt;if(Dt<0||Dt===1/0)return;V.setup(Q,ie,Fe,oe,He);let Tt,zt=ke;if(He!==null&&(Tt=ee.get(He),zt=ze,zt.setIndex(Tt)),Q.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*ft()),zt.setMode(H.LINES)):zt.setMode(H.TRIANGLES);else if(Q.isLine){let Je=ie.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*ft()),Q.isLineSegments?zt.setMode(H.LINES):Q.isLineLoop?zt.setMode(H.LINE_LOOP):zt.setMode(H.LINE_STRIP)}else Q.isPoints?zt.setMode(H.POINTS):Q.isSprite&&zt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)tl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))zt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Je=Q._multiDrawStarts,qt=Q._multiDrawCounts,At=Q._multiDrawCount,Sn=He?ee.get(He).bytesPerElement:1,Ma=Ye.get(ie).currentProgram.getUniforms();for(let Zt=0;Zt<At;Zt++)Ma.setValue(H,"_gl_DrawID",Zt),zt.render(Je[Zt]/Sn,qt[Zt])}else if(Q.isInstancedMesh)zt.renderInstances(pt,Dt,Q.count);else if(oe.isInstancedBufferGeometry){const Je=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,qt=Math.min(oe.instanceCount,Je);zt.renderInstances(pt,Dt,qt)}else zt.render(pt,Dt)};function Un(C,q,oe){C.transparent===!0&&C.side===ma&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,pn(C,q,oe),C.side=ir,C.needsUpdate=!0,pn(C,q,oe),C.side=ma):pn(C,q,oe)}this.compile=function(C,q,oe=null){oe===null&&(oe=C),U=Ke.get(oe),U.init(q),G.push(U),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),C!==oe&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),U.setupLights();const ie=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){const Fe=Ce[Ne];Un(Fe,oe,Q),ie.add(Fe)}else Un(Ce,oe,Q),ie.add(Ce)}),U=G.pop(),ie},this.compileAsync=function(C,q,oe=null){const ie=this.compile(C,q,oe);return new Promise(Q=>{function Ce(){if(ie.forEach(function(Ne){Ye.get(Ne).currentProgram.isReady()&&ie.delete(Ne)}),ie.size===0){Q(C);return}setTimeout(Ce,10)}gt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Qn=null;function cl(C){Qn&&Qn(C)}function ks(){Mi.stop()}function Xs(){Mi.start()}const Mi=new Dv;Mi.setAnimationLoop(cl),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){Qn=C,we.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},we.addEventListener("sessionstart",ks),we.addEventListener("sessionend",Xs),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(q),q=we.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,q,R),U=Ke.get(C,G.length),U.init(q),G.push(U),Pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(Pe,Ii,q.reversedDepth),Te=this.localClippingEnabled,se=We.init(this.clippingPlanes,Te),z=Le.get(C,B.length),z.init(),B.push(z),we.enabled===!0&&we.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&ar(Ce,q,-1/0,P.sortObjects)}ar(C,q,0,P.sortObjects),z.finish(),P.sortObjects===!0&&z.sort(L,K),it=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,it&&Ae.addToRenderList(z,C),this.info.render.frame++,se===!0&&We.beginShadows();const oe=U.state.shadowsArray;Me.render(oe,C,q),se===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=z.opaque,Q=z.transmissive;if(U.setupLights(),q.isArrayCamera){const Ce=q.cameras;if(Q.length>0)for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const He=Ce[Ne];js(ie,Q,C,He)}it&&Ae.render(C);for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++){const He=Ce[Ne];Ws(z,C,He,He.viewport)}}else Q.length>0&&js(ie,Q,C,q),it&&Ae.render(C),Ws(z,C,q);R!==null&&w===0&&(lt.updateMultisampleRenderTarget(R),lt.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(P,C,q),V.resetDefaultState(),k=-1,J=null,G.pop(),G.length>0?(U=G[G.length-1],se===!0&&We.setGlobalState(P.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?z=B[B.length-1]:z=null};function ar(C,q,oe,ie){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)U.pushLight(C),C.castShadow&&U.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){ie&&rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pe);const Ne=ye.update(C),Fe=C.material;Fe.visible&&z.push(C,Ne,Fe,oe,rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const Ne=ye.update(C),Fe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rt.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),rt.copy(Ne.boundingSphere.center)),rt.applyMatrix4(C.matrixWorld).applyMatrix4(Pe)),Array.isArray(Fe)){const He=Ne.groups;for(let $e=0,tt=He.length;$e<tt;$e++){const Ze=He[$e],pt=Fe[Ze.materialIndex];pt&&pt.visible&&z.push(C,Ne,pt,oe,rt.z,Ze)}}else Fe.visible&&z.push(C,Ne,Fe,oe,rt.z,null)}}const Ce=C.children;for(let Ne=0,Fe=Ce.length;Ne<Fe;Ne++)ar(Ce[Ne],q,oe,ie)}function Ws(C,q,oe,ie){const{opaque:Q,transmissive:Ce,transparent:Ne}=C;U.setupLightsView(oe),se===!0&&We.setGlobalState(P.clippingPlanes,oe),ie&&Ge.viewport(le.copy(ie)),Q.length>0&&Kn(Q,q,oe),Ce.length>0&&Kn(Ce,q,oe),Ne.length>0&&Kn(Ne,q,oe),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function js(C,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[ie.id]===void 0&&(U.state.transmissionRenderTarget[ie.id]=new Ni(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Gi:Sa,minFilter:Nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ce=U.state.transmissionRenderTarget[ie.id],Ne=ie.viewport||le;Ce.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const Fe=P.getRenderTarget(),He=P.getActiveCubeFace(),$e=P.getActiveMipmapLevel();P.setRenderTarget(Ce),P.getClearColor(D),W=P.getClearAlpha(),W<1&&P.setClearColor(16777215,.5),P.clear(),it&&Ae.render(oe);const tt=P.toneMapping;P.toneMapping=nr;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),se===!0&&We.setGlobalState(P.clippingPlanes,ie),Kn(C,oe,ie),lt.updateMultisampleRenderTarget(Ce),lt.updateRenderTargetMipmap(Ce),gt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Rt=0,Dt=q.length;Rt<Dt;Rt++){const Tt=q[Rt],{object:zt,geometry:Je,material:qt,group:At}=Tt;if(qt.side===ma&&zt.layers.test(ie.layers)){const Sn=qt.side;qt.side=Gn,qt.needsUpdate=!0,ln(zt,oe,ie,Je,qt,At),qt.side=Sn,qt.needsUpdate=!0,pt=!0}}pt===!0&&(lt.updateMultisampleRenderTarget(Ce),lt.updateRenderTargetMipmap(Ce))}P.setRenderTarget(Fe,He,$e),P.setClearColor(D,W),Ze!==void 0&&(ie.viewport=Ze),P.toneMapping=tt}function Kn(C,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ce=C.length;Q<Ce;Q++){const Ne=C[Q],{object:Fe,geometry:He,group:$e}=Ne;let tt=Ne.material;tt.allowOverride===!0&&ie!==null&&(tt=ie),Fe.layers.test(oe.layers)&&ln(Fe,q,oe,He,tt,$e)}}function ln(C,q,oe,ie,Q,Ce){C.onBeforeRender(P,q,oe,ie,Q,Ce),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(P,q,oe,ie,C,Ce),Q.transparent===!0&&Q.side===ma&&Q.forceSinglePass===!1?(Q.side=Gn,Q.needsUpdate=!0,P.renderBufferDirect(oe,q,ie,Q,C,Ce),Q.side=ir,Q.needsUpdate=!0,P.renderBufferDirect(oe,q,ie,Q,C,Ce),Q.side=ma):P.renderBufferDirect(oe,q,ie,Q,C,Ce),C.onAfterRender(P,q,oe,ie,Q,Ce)}function pn(C,q,oe){q.isScene!==!0&&(q=Wt);const ie=Ye.get(C),Q=U.state.lights,Ce=U.state.shadowsArray,Ne=Q.state.version,Fe=fe.getParameters(C,Q.state,Ce,q,oe),He=fe.getProgramCacheKey(Fe);let $e=ie.programs;ie.environment=C.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(C.isMeshStandardMaterial?M:N).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",st),$e=new Map,ie.programs=$e);let tt=$e.get(He);if(tt!==void 0){if(ie.currentProgram===tt&&ie.lightsStateVersion===Ne)return Br(C,Fe),tt}else Fe.uniforms=fe.getUniforms(C),C.onBeforeCompile(Fe,P),tt=fe.acquireProgram(Fe,He),$e.set(He,tt),ie.uniforms=Fe.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Br(C,Fe),ie.needsLights=ul(C),ie.lightsStateVersion=Ne,ie.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=tt,ie.uniformsList=null,tt}function Vi(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Kc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Br(C,q){const oe=Ye.get(C);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function du(C,q,oe,ie,Q){q.isScene!==!0&&(q=Wt),lt.resetTextureUnits();const Ce=q.fog,Ne=ie.isMeshStandardMaterial?q.environment:null,Fe=R===null?P.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fs,He=(ie.isMeshStandardMaterial?M:N).get(ie.envMap||Ne),$e=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,tt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!oe.morphAttributes.position,pt=!!oe.morphAttributes.normal,Rt=!!oe.morphAttributes.color;let Dt=nr;ie.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Dt=P.toneMapping);const Tt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=Tt!==void 0?Tt.length:0,Je=Ye.get(ie),qt=U.state.lights;if(se===!0&&(Te===!0||C!==J)){const bn=C===J&&ie.id===k;We.setState(ie,C,bn)}let At=!1;ie.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qt.state.version||Je.outputColorSpace!==Fe||Q.isBatchedMesh&&Je.batching===!1||!Q.isBatchedMesh&&Je.batching===!0||Q.isBatchedMesh&&Je.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Je.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Je.instancing===!1||!Q.isInstancedMesh&&Je.instancing===!0||Q.isSkinnedMesh&&Je.skinning===!1||!Q.isSkinnedMesh&&Je.skinning===!0||Q.isInstancedMesh&&Je.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Je.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Je.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Je.instancingMorph===!1&&Q.morphTexture!==null||Je.envMap!==He||ie.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==pt||Je.morphColors!==Rt||Je.toneMapping!==Dt||Je.morphTargetsCount!==zt)&&(At=!0):(At=!0,Je.__version=ie.version);let Sn=Je.currentProgram;At===!0&&(Sn=pn(ie,q,Q));let Ma=!1,Zt=!1,ki=!1;const Qt=Sn.getUniforms(),yn=Je.uniforms;if(Ge.useProgram(Sn.program)&&(Ma=!0,Zt=!0,ki=!0),ie.id!==k&&(k=ie.id,Zt=!0),Ma||J!==C){Ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Qt.setValue(H,"projectionMatrix",C.projectionMatrix),Qt.setValue(H,"viewMatrix",C.matrixWorldInverse);const Tn=Qt.map.cameraPosition;Tn!==void 0&&Tn.setValue(H,Be.setFromMatrixPosition(C.matrixWorld)),Ot.logarithmicDepthBuffer&&Qt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Qt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,Zt=!0,ki=!0)}if(Q.isSkinnedMesh){Qt.setOptional(H,Q,"bindMatrix"),Qt.setOptional(H,Q,"bindMatrixInverse");const bn=Q.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Qt.setValue(H,"boneTexture",bn.boneTexture,lt))}Q.isBatchedMesh&&(Qt.setOptional(H,Q,"batchingTexture"),Qt.setValue(H,"batchingTexture",Q._matricesTexture,lt),Qt.setOptional(H,Q,"batchingIdTexture"),Qt.setValue(H,"batchingIdTexture",Q._indirectTexture,lt),Qt.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Qt.setValue(H,"batchingColorTexture",Q._colorsTexture,lt));const mn=oe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&qe.update(Q,oe,Sn),(Zt||Je.receiveShadow!==Q.receiveShadow)&&(Je.receiveShadow=Q.receiveShadow,Qt.setValue(H,"receiveShadow",Q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(yn.envMap.value=He,yn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=RE()),Zt&&(Qt.setValue(H,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&hu(yn,ki),Ce&&ie.fog===!0&&je.refreshFogUniforms(yn,Ce),je.refreshMaterialUniforms(yn,ie,pe,ue,U.state.transmissionRenderTarget[C.id]),Kc.upload(H,Vi(Je),yn,lt)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Kc.upload(H,Vi(Je),yn,lt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Qt.setValue(H,"center",Q.center),Qt.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Qt.setValue(H,"normalMatrix",Q.normalMatrix),Qt.setValue(H,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bn=ie.uniformsGroups;for(let Tn=0,Li=bn.length;Tn<Li;Tn++){const Xi=bn[Tn];Ue.update(Xi,Sn),Ue.bind(Xi,Sn)}}return Sn}function hu(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function ul(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,q,oe){const ie=Ye.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Ye.get(C.texture).__webglTexture=q,Ye.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const oe=Ye.get(C);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const rr=H.createFramebuffer();this.setRenderTarget=function(C,q=0,oe=0){R=C,ae=q,w=oe;let ie=!0,Q=null,Ce=!1,Ne=!1;if(C){const He=Ye.get(C);if(He.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1;else if(He.__webglFramebuffer===void 0)lt.setupRenderTarget(C);else if(He.__hasExternalTextures)lt.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(He.__boundDepthTexture!==Ze){if(Ze!==null&&Ye.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ne=!0);const tt=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?Q=tt[q][oe]:Q=tt[q],Ce=!0):C.samples>0&&lt.useMultisampledRTT(C)===!1?Q=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?Q=tt[oe]:Q=tt,le.copy(C.viewport),me.copy(C.scissor),de=C.scissorTest}else le.copy(ge).multiplyScalar(pe).floor(),me.copy(be).multiplyScalar(pe).floor(),de=De;if(oe!==0&&(Q=rr),Ge.bindFramebuffer(H.FRAMEBUFFER,Q)&&ie&&Ge.drawBuffers(C,Q),Ge.viewport(le),Ge.scissor(me),Ge.setScissorTest(de),Ce){const He=Ye.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,oe)}else if(Ne){const He=q;for(let $e=0;$e<C.textures.length;$e++){const tt=Ye.get(C.textures[$e]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$e,tt.__webglTexture,oe,He)}}else if(C!==null&&oe!==0){const He=Ye.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,He.__webglTexture,oe)}k=-1},this.readRenderTargetPixels=function(C,q,oe,ie,Q,Ce,Ne,Fe=0){if(!(C&&C.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He){Ge.bindFramebuffer(H.FRAMEBUFFER,He);try{const $e=C.textures[Fe],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ze)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ie&&oe>=0&&oe<=C.height-Q&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Fe),H.readPixels(q,oe,ie,Q,at.convert(tt),at.convert(Ze),Ce))}finally{const $e=R!==null?Ye.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,q,oe,ie,Q,Ce,Ne,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(He=He[Ne]),He)if(q>=0&&q<=C.width-ie&&oe>=0&&oe<=C.height-Q){Ge.bindFramebuffer(H.FRAMEBUFFER,He);const $e=C.textures[Fe],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Ce.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Fe),H.readPixels(q,oe,ie,Q,at.convert(tt),at.convert(Ze),0);const Rt=R!==null?Ye.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,Rt);const Dt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Vy(H,Dt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ce),H.deleteBuffer(pt),H.deleteSync(Dt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,oe=0){const ie=Math.pow(2,-oe),Q=Math.floor(C.image.width*ie),Ce=Math.floor(C.image.height*ie),Ne=q!==null?q.x:0,Fe=q!==null?q.y:0;lt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,oe,0,0,Ne,Fe,Q,Ce),Ge.unbindTexture()};const qs=H.createFramebuffer(),ba=H.createFramebuffer();this.copyTextureToTexture=function(C,q,oe=null,ie=null,Q=0,Ce=null){Ce===null&&(Q!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=Q,Q=0):Ce=0);let Ne,Fe,He,$e,tt,Ze,pt,Rt,Dt;const Tt=C.isCompressedTexture?C.mipmaps[Ce]:C.image;if(oe!==null)Ne=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,He=oe.isBox3?oe.max.z-oe.min.z:1,$e=oe.min.x,tt=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const mn=Math.pow(2,-Q);Ne=Math.floor(Tt.width*mn),Fe=Math.floor(Tt.height*mn),C.isDataArrayTexture?He=Tt.depth:C.isData3DTexture?He=Math.floor(Tt.depth*mn):He=1,$e=0,tt=0,Ze=0}ie!==null?(pt=ie.x,Rt=ie.y,Dt=ie.z):(pt=0,Rt=0,Dt=0);const zt=at.convert(q.format),Je=at.convert(q.type);let qt;q.isData3DTexture?(lt.setTexture3D(q,0),qt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(lt.setTexture2DArray(q,0),qt=H.TEXTURE_2D_ARRAY):(lt.setTexture2D(q,0),qt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const At=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ma=H.getParameter(H.UNPACK_SKIP_PIXELS),Zt=H.getParameter(H.UNPACK_SKIP_ROWS),ki=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Tt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze);const Qt=C.isDataArrayTexture||C.isData3DTexture,yn=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const mn=Ye.get(C),bn=Ye.get(q),Tn=Ye.get(mn.__renderTarget),Li=Ye.get(bn.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Xi=0;Xi<He;Xi++)Qt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,Q,Ze+Xi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,Ce,Dt+Xi)),H.blitFramebuffer($e,tt,Ne,Fe,pt,Rt,Ne,Fe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ye.has(C)){const mn=Ye.get(C),bn=Ye.get(q);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,qs),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,ba);for(let Tn=0;Tn<He;Tn++)Qt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mn.__webglTexture,Q,Ze+Tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,mn.__webglTexture,Q),yn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Ce,Dt+Tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Ce),Q!==0?H.blitFramebuffer($e,tt,Ne,Fe,pt,Rt,Ne,Fe,H.COLOR_BUFFER_BIT,H.NEAREST):yn?H.copyTexSubImage3D(qt,Ce,pt,Rt,Dt+Tn,$e,tt,Ne,Fe):H.copyTexSubImage2D(qt,Ce,pt,Rt,$e,tt,Ne,Fe);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else yn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(qt,Ce,pt,Rt,Dt,Ne,Fe,He,zt,Je,Tt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(qt,Ce,pt,Rt,Dt,Ne,Fe,He,zt,Tt.data):H.texSubImage3D(qt,Ce,pt,Rt,Dt,Ne,Fe,He,zt,Je,Tt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ce,pt,Rt,Ne,Fe,zt,Je,Tt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ce,pt,Rt,Tt.width,Tt.height,zt,Tt.data):H.texSubImage2D(H.TEXTURE_2D,Ce,pt,Rt,Ne,Fe,zt,Je,Tt);H.pixelStorei(H.UNPACK_ROW_LENGTH,At),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ma),H.pixelStorei(H.UNPACK_SKIP_ROWS,Zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ki),Ce===0&&q.generateMipmaps&&H.generateMipmap(qt),Ge.unbindTexture()},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&lt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?lt.setTextureCube(C,0):C.isData3DTexture?lt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?lt.setTexture2DArray(C,0):lt.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){ae=0,w=0,R=null,Ge.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Lt._getUnpackColorSpace()}}const{lerp:Rr}=dv,Pn=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)Pn[256+s]=Pn[s];function th(s){return s*s*s*(s*(s*6-15)+10)}function $a(s,e,i,r){const l=s&15,c=l<8?e:i,d=l<4?i:l==12||l==14?e:r;return((l&1)==0?c:-c)+((l&2)==0?d:-d)}class wE{noise(e,i,r){const l=Math.floor(e),c=Math.floor(i),d=Math.floor(r),h=l&255,m=c&255,p=d&255;e-=l,i-=c,r-=d;const x=e-1,g=i-1,S=r-1,b=th(e),E=th(i),A=th(r),y=Pn[h]+m,v=Pn[y]+p,z=Pn[y+1]+p,U=Pn[h+1]+m,B=Pn[U]+p,G=Pn[U+1]+p;return Rr(Rr(Rr($a(Pn[v],e,i,r),$a(Pn[B],x,i,r),b),Rr($a(Pn[z],e,g,r),$a(Pn[G],x,g,r),b),E),Rr(Rr($a(Pn[v+1],e,i,S),$a(Pn[B+1],x,i,S),b),Rr($a(Pn[z+1],e,g,S),$a(Pn[G+1],x,g,S),b),E),A)}}const Jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ll{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const DE=new Rv(-1,1,1,-1,0,1);class UE extends Vn{constructor(){super(),this.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ui([0,2,0,0,2,0],2))}}const NE=new UE;class zv{constructor(e){this._mesh=new Zn(NE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,DE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class LE extends ll{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=au.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zv(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Yg extends ll{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let d,h;this.inverse?(d=0,h=1):(d=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,d,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class OE extends ll{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class PE{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new ot);this._width=r.width,this._height=r.height,i=new Ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new LE(Jc),this.copyPass.material.blending=Hi,this.clock=new wv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,c=this.passes.length;l<c;l++){const d=this.passes[l];if(d.enabled!==!1){if(d.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),d.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),d.needsSwap){if(r){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Yg!==void 0&&(d instanceof Yg?r=!0:d instanceof OE&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zE extends ll{constructor(e,i,r=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new nt}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let c,d;this.overrideMaterial!==null&&(d=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=d),e.autoClear=l}}const BE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Hs extends ll{constructor(e,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new Ni(c,d,{type:Gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const g=new Ni(c,d,{type:Gi});g.texture.name="UnrealBloomPass.h"+x,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const S=new Ni(c,d,{type:Gi});S.texture.name="UnrealBloomPass.v"+x,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),c=Math.round(c/2),d=Math.round(d/2)}const h=BE;this.highPassUniforms=au.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new ot(1/c,1/d),c=Math.round(c/2),d=Math.round(d/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=au.clone(Jc.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:Jc.vertexShader,fragmentShader:Jc.fragmentShader,blending:$c,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new nt,this._oldClearAlpha=1,this._basic=new il,this._fsQuad=new zv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,l),this.renderTargetsVertical[c].setSize(r,l),this.separableBlurMaterials[c].uniforms.invSize.value=new ot(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(e,i,r,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const d=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Hs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Hs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=d}_getSeparableBlurMaterial(e){const i=[],r=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(r*r))/r);return new gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Hs.BlurDirectionX=new ot(1,0);Hs.BlurDirectionY=new ot(0,1);function FE(){const s=Et.useRef(null);return Et.useEffect(()=>{const e=s.current;if(!e)return;const i=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight,l=new Pv({antialias:!0,alpha:!0});l.setSize(i,r),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),l.outputEncoding=void 0,l.toneMapping=tv,l.toneMappingExposure=1.05,l.setClearColor(0,0),e.appendChild(l.domElement),l.domElement.style.pointerEvents="none";const c=new yv,d=new nt("#8fd8c8"),h=45,m=220;c.fog=new ap(d,h,m);const p=new li(60,i/r,.1,1800);p.position.set(0,22,55),p.lookAt(0,-6,-40);const x=new cu(1100,32,32),g=new gn({side:Gn,uniforms:{topColor:{value:new nt("#1b7e70")},midColor:{value:new nt("#55c7b8")},bottomColor:{value:new nt("#e5fff2")},fogColor:{value:d}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vWorld = (modelMatrix * vec4(position,1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        uniform vec3 fogColor;
        varying vec3 vWorld;

        void main(){
          vec3 d = normalize(vWorld);
          float h = d.y * 0.5 + 0.5;

          vec3 col = mix(bottomColor, midColor, smoothstep(0.0, 0.6, h));
          col = mix(col, topColor, smoothstep(0.6, 1.0, h));

          // fog tint near horizon
          float fogAmt = smoothstep(0.0, 0.6, 1.0 - h);
          col = mix(col, fogColor, fogAmt * 0.35);

          gl_FragColor = vec4(col, 1.0);
        }
      `});c.add(new Zn(x,g));const S=new PE(l);S.addPass(new zE(c,p)),S.addPass(new Hs(new ot(i,r),.34,.46,.88));const b=new wE,E=Math.random()*100,A=new Or(400,400,260,260);A.rotateX(-Math.PI/2);const y=A.attributes.position,v=y.array.slice(),z=13.5,U=.055,B=.11,G=.25,P=.1,F=.06,ae=.02,w=(Z,se)=>{const Te=(Z+200)/400,Pe=(se+200)/400;return .4+Te*.5+Pe*.55},R=new gn({uniforms:{lightDir:{value:new ne(.4,1,.25).normalize()},colorSand:{value:new nt("#d7c9ae")},colorGrass:{value:new nt("#4b8254")},colorTeal:{value:new nt("#5da5ae")},contrast:{value:1.18},fogColor:{value:d},fogNear:{value:h},fogFar:{value:m}},fog:!0,vertexShader:`
        varying float vHeight;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          vHeight = wp.y;
          gl_Position = projectionMatrix * modelViewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 colorSand;
        uniform vec3 colorGrass;
        uniform vec3 colorTeal;
        uniform vec3 lightDir;
        uniform float contrast;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying float vHeight;
        varying vec3 vNormal;
        varying vec3 vWorld;

        float band(float v){
          if (v < 0.35) return 0.22;
          if (v < 0.7)  return 0.65;
          return 1.0;
        }

        void main(){
          float t1 = smoothstep(-12.0,  2.0, vHeight);
          float t2 = smoothstep( 2.0, 20.0, vHeight);
          vec3 base = mix(colorSand, colorGrass, t1);
          base = mix(base, colorTeal, t2);
          float ndl = dot(normalize(vNormal), normalize(lightDir));
          float diff = band(ndl * 0.5 + 0.5);
          vec3 shaded = base * diff * contrast;
          float tx = sin(vWorld.x * 0.2 + vWorld.z * 0.15) * 0.02;
          float ty = sin(vWorld.x * 0.08 - vWorld.z * 0.22) * 0.016;
          shaded *= (1.0 + tx + ty);
          float rim = 1.0 - max(dot(normalize(vNormal), vec3(0,1,0)), 0.0);
          shaded += smoothstep(0.45, 1.0, rim) * 0.16;
          float d = length(vWorld.xz);
          float f = smoothstep(fogNear, fogFar, d);
          shaded = mix(shaded, fogColor, f * 0.45);
          gl_FragColor = vec4(shaded, 1.0);
        }
      `}),k=new Zn(A,R);c.add(k);const J=new Or(400,400);J.rotateX(-Math.PI/2);const le=new gn({uniforms:{time:{value:0},shallow:{value:new nt("#cff2ff")},deep:{value:new nt("#5caadc")},fogColor:{value:d},fogNear:{value:h},fogFar:{value:m}},transparent:!0,fog:!0,vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        void main(){
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 shallow;
        uniform vec3 deep;
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        varying vec2 vUv;
        varying vec3 vWorld;

        float hash(vec2 p){
          return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);
        }
        float noise2d(vec2 p){
          vec2 i = floor(p), f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0,0.0));
          float c = hash(i + vec2(0.0,1.0));
          float d = hash(i + vec2(1.0,1.0));
          vec2 u = f*f*(3.0 - 2.0*f);
          return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
        }

        void main(){
          float n = noise2d(vUv * 3.5 + vec2(time * 0.12, time * 0.1));
          vec3 col = mix(deep, shallow, 0.55 + n * 0.25);

          float d = length(vWorld.xz);
          float f = smoothstep(fogNear, fogFar, d);
          col = mix(col, fogColor, f * 0.55);
          gl_FragColor = vec4(col, 0.34);
        }
      `}),me=new Zn(J,le);me.position.y=-1.2,c.add(me);const de=1800,D=new Vn,W=new Float32Array(de*3),j=new Float32Array(de),ue=new Float32Array(de),pe=new Float32Array(de);for(let Z=0;Z<de;Z++){const se=Z*3;W[se]=(Math.random()-.5)*260,W[se+1]=1.3+Math.random()*6,W[se+2]=(Math.random()-.5)*260,j[Z]=W[se+1],ue[Z]=Math.random()*Math.PI*2,pe[Z]=.65+Math.random()*.9}D.setAttribute("position",new Hn(W,3)),D.setAttribute("aBaseY",new Hn(j,1)),D.setAttribute("aPhase",new Hn(ue,1)),D.setAttribute("aSize",new Hn(pe,1));const L=new gn({uniforms:{time:{value:0}},transparent:!0,depthWrite:!1,blending:$c,vertexShader:`
        attribute float aBaseY;
        attribute float aPhase;
        attribute float aSize;
        uniform float time;
        varying float vAlpha;
        varying float vPhase;
        void main(){
          vPhase = aPhase;
          vec3 pos = position;
          pos.y = aBaseY + sin(time * 0.9 + aPhase) * 0.5;
          pos.x += sin(time * 0.15 + aPhase * 1.3) * 0.5;
          pos.z += cos(time * 0.12 + aPhase * 1.5) * 0.5;
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPos;
          float dist = length(pos.xz);
          vAlpha = 1.0 - smoothstep(110.0, 240.0, dist);
          gl_PointSize = aSize * (260.0 / -mvPos.z);
        }
      `,fragmentShader:`
        uniform float time;
        varying float vAlpha;
        varying float vPhase;
        void main(){
          float flick = 0.84 + sin(time * 0.8 + vPhase * 4.0) * 0.14;
          gl_FragColor = vec4(vec3(1.0), vAlpha * flick);
        }
      `}),K=new z1(D,L);K.position.y=.3,c.add(K);const ge=new wv,be=()=>{const Z=ge.getElapsedTime();for(let se=0;se<y.count;se++){const Te=se*3,Pe=v[Te],Be=v[Te+2],rt=w(Pe,Be),Wt=b.noise(Pe*U,Be*U,E+Z*P)*z,it=b.noise(Pe*B,Be*B,E*1.7+Z*F)*z*.6,ft=b.noise((Pe+50)*G,(Be-30)*G,E*2.3+Z*ae)*z*.35;y.array[Te+1]=(Wt+it+ft)*rt}y.needsUpdate=!0,le.uniforms.time.value=Z,L.uniforms.time.value=Z,K.rotation.y=Z*.01,S.render(),requestAnimationFrame(be)};be();const De=()=>{const Z=e.clientWidth||window.innerWidth,se=e.clientHeight||window.innerHeight;l.setSize(Z,se),S.setSize(Z,se),p.aspect=Z/se,p.updateProjectionMatrix()};return window.addEventListener("resize",De),()=>{window.removeEventListener("resize",De),e.removeChild(l.domElement),S.dispose(),l.dispose()}},[]),O.jsx("div",{ref:s,className:"fixed inset-0 -z-10 pointer-events-none"})}function IE(){const[s,e]=Et.useState("initial"),[i,r]=Et.useState(!0);return Et.useEffect(()=>{const l=setTimeout(()=>{e("title")},100),c=setTimeout(()=>{e("subtitle")},2800),d=setTimeout(()=>{e("reveal")},5500),h=setTimeout(()=>{r(!1)},6e3);return()=>{clearTimeout(l),clearTimeout(c),clearTimeout(d),clearTimeout(h)}},[]),O.jsxs("div",{className:"opening-animation",children:[O.jsx("div",{className:`black-overlay ${i?"visible":"faded-out"}`}),O.jsxs("div",{className:`opening-content ${i?"":"faded-out"}`,children:[O.jsx("h1",{className:`main-title ${s!=="initial"?"fade-in":""}`,children:"helloworld.js"}),O.jsx("p",{className:`subtitle ${s==="subtitle"||s==="reveal"?"fade-in":""}`,children:"Towards computational design for interactive, web-based 3D environments using procedural algorithms and object-oriented systems for real-time authorship."})]})]})}function HE(){const[s,e]=Et.useState(!0),i=Et.useRef(null);Et.useEffect(()=>{const l=i.current;if(!l)return;l.loop=!0,l.volume=.5,(async()=>{try{await l.play(),e(!0)}catch{console.log("Autoplay blocked, user interaction required"),e(!1)}})();const d=()=>{l.loop&&l.play()};return l.addEventListener("ended",d),()=>{l.removeEventListener("ended",d)}},[]);const r=()=>{const l=i.current;l&&(s?(l.pause(),e(!1)):(l.play().catch(c=>{console.error("Error playing audio:",c)}),e(!0)))};return O.jsxs(O.Fragment,{children:[O.jsx("audio",{ref:i,src:"ambient.m4a",preload:"auto"}),O.jsx("button",{className:"sound-toggle",onClick:r,"aria-label":s?"Mute sound":"Unmute sound",children:s?O.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("path",{d:"M11 5L6 9H2v6h4l5 4V5z"}),O.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"}),O.jsx("path",{d:"M13.5 10.5a2 2 0 0 1 0 3"})]}):O.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("path",{d:"M11 5L6 9H2v6h4l5 4V5z"}),O.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),O.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]})})]})}function GE(){const[s,e]=Et.useState(!1),i=[{id:"slide-1",title:"State of the Art",number:1},{id:"slide-2",title:"Ontology Diagram",number:2},{id:"slide-3",title:"Project Question",number:3},{id:"slide-4",title:"Research Methods",number:4},{id:"slide-5",title:"Key Precedents",number:5},{id:"slide-6",title:"Technology Ecosystem",number:6},{id:"slide-7",title:"Study of Setting & Constituencies",number:7},{id:"slide-8",title:"System + UML Diagram",number:8},{id:"slide-9",title:"Computational Challenges + Barriers to Entry",number:9},{id:"slide-10",title:"Communities of Practice + Literature Review",number:10},{id:"slide-11",title:"Project Aesthetics",number:11},{id:"slide-12",title:"Radical Prototype",number:12},{id:"slide-13",title:"Storyboard + Forking Path",number:13}],r=()=>{e(!s)},l=c=>{const d=document.querySelector(".slides-container"),h=document.getElementById(c);if(d&&h){const m=d.clientHeight,p=h.offsetHeight,x=h.offsetTop-(m-p)/2;d.scrollTo({top:Math.max(0,x),behavior:"smooth"}),e(!1)}};return Et.useEffect(()=>{if(!s)return;const c=d=>{const h=document.querySelector(".hamburger-menu-overlay"),m=document.querySelector(".hamburger-toggle");h&&m&&!h.contains(d.target)&&!m.contains(d.target)&&e(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[s]),O.jsxs(O.Fragment,{children:[O.jsx("button",{className:"hamburger-toggle",onClick:r,"aria-label":s?"Close menu":"Open menu",children:s?O.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),O.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):O.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),O.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),O.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),s&&O.jsx("div",{className:"hamburger-menu-overlay",children:O.jsxs("div",{className:"hamburger-menu-content",children:[O.jsx("h2",{className:"hamburger-menu-title",children:"Navigation"}),O.jsx("nav",{className:"hamburger-menu-nav",children:i.map(c=>O.jsxs("button",{className:"hamburger-menu-item",onClick:()=>l(c.id),children:[O.jsx("span",{className:"hamburger-menu-number",children:String(c.number).padStart(2,"0")}),O.jsx("span",{className:"hamburger-menu-label",children:c.title})]},c.id))})]})})]})}function VE({children:s}){const e=Et.useRef(null),i=Et.useRef(!1);return Et.useEffect(()=>{const r=e.current;if(!r)return;let l,c=0,d=0,h=Date.now();const m=()=>{const E=Date.now(),A=r.scrollTop,y=E-h;y>0&&(d=(A-c)/y),c=A,h=E,i.current=!0,clearTimeout(l),l=setTimeout(()=>{i.current=!1,p()},200)},p=()=>{if(!r)return;const E=r.querySelector(".title-buffer"),A=r.querySelectorAll(".slide-container"),y=r.querySelector(".thank-you-buffer"),v=[];if(E&&v.push({element:E,index:0,isTitleBuffer:!0}),A.forEach((w,R)=>{v.push({element:w,index:E?R+1:R,isTitleBuffer:!1})}),y&&v.push({element:y,index:v.length,isTitleBuffer:!1}),v.length===0)return;const z=r.clientHeight,B=r.scrollTop+z/2;let G=null,P=1/0,F=0;v.forEach(w=>{const R=w.element.offsetTop,k=w.element.offsetHeight,J=R+k/2,le=Math.abs(J-B);le<P&&(P=le,G=w,F=w.index)});const ae=d>0?1:-1;if(Math.abs(d)>.5&&G){const w=F;let R=w;ae>0&&w<v.length-1?R=w+1:ae<0&&w>0&&(R=w-1),R!==w&&(G=v[R])}if(G&&P>50){const w=G.element.offsetHeight,R=G.element.offsetTop-(z-w)/2;Math.abs(r.scrollTop-R)>100&&r.scrollTo({top:Math.max(0,R),behavior:"smooth"})}};r.addEventListener("scroll",m,{passive:!0});let x=0,g=0;const S=E=>{x=E.touches[0].clientY,g=Date.now()},b=E=>{const A=E.changedTouches[0].clientY,y=Date.now(),v=x-A,z=y-g;if(z>0&&Math.abs(v)>10){const U=v/z;Math.abs(U)>.3&&setTimeout(()=>{p()},100)}};return r.addEventListener("touchstart",S,{passive:!0}),r.addEventListener("touchend",b,{passive:!0}),()=>{r.removeEventListener("scroll",m),r.removeEventListener("touchstart",S),r.removeEventListener("touchend",b),clearTimeout(l)}},[]),O.jsx("div",{ref:e,className:"slides-container",children:s})}function kE({currentPage:s,totalPages:e,onPageChange:i}){return!e||e<=1?null:O.jsx("div",{className:"slide-pagination",children:O.jsx("div",{className:"indicator-dots",children:Array.from({length:e}).map((r,l)=>O.jsx("button",{className:`indicator-dot ${s===l?"active":""}`,onClick:()=>i(l),"aria-label":`Go to page ${l+1}`},l))})})}function oi({children:s,className:e="",title:i="",slideNumber:r=null,pagination:l=null,id:c=null}){return O.jsx("div",{id:c||(r!==null?`slide-${r}`:null),className:`slide-container ${e}`,children:O.jsxs("div",{className:"slide-content",children:[O.jsx("div",{className:"slide-inner-border"}),i&&O.jsx("div",{className:"slide-title",children:i}),r!==null&&O.jsx("div",{className:"slide-number",children:String(r).padStart(2,"0")}),O.jsx("div",{className:"slide-body",children:s}),l&&O.jsx(kE,{currentPage:l.currentPage,totalPages:l.totalPages,onPageChange:l.onPageChange})]})})}function XE(){const[s,e]=Et.useState(!1),[i,r]=Et.useState("initial");return Et.useEffect(()=>{const l=setTimeout(()=>{r("title")},100),c=setTimeout(()=>{r("subtitle")},2800),d=setTimeout(()=>{r("reveal")},5500),h=setTimeout(()=>{e(!0)},7500);return()=>{clearTimeout(l),clearTimeout(c),clearTimeout(d),clearTimeout(h)}},[]),O.jsxs("div",{className:"title-buffer",children:[O.jsxs("div",{className:"title-buffer-content",children:[O.jsx("h1",{className:`main-title ${i!=="initial"?"fade-in":""}`,children:"helloworld.js"}),O.jsx("p",{className:`subtitle ${i==="subtitle"||i==="reveal"?"fade-in":""}`,children:"Towards computational design for interactive, web-based 3D environments using procedural algorithms and object-oriented systems for real-time authorship."})]}),s&&O.jsxs("div",{className:"scroll-indicator",children:[O.jsx("div",{className:"scroll-text",children:"Scroll down"}),O.jsx("div",{className:"scroll-arrow",children:O.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[O.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),O.jsx("polyline",{points:"19 12 12 19 5 12"})]})})]})]})}function WE(){return O.jsx("div",{className:"thank-you-buffer",children:O.jsx("div",{className:"thank-you-content",children:O.jsx("h1",{className:"thank-you-title",children:"thank you."})})})}function jE({title:s,subtitle:e,description:i,imageSrc:r=null,href:l="#"}){return O.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"art-card-link",children:O.jsx("div",{className:"art-card",children:O.jsxs("div",{className:"card-image-container",children:[r?O.jsx("img",{src:r,alt:s,className:"card-image"}):O.jsx("div",{className:"card-image-placeholder",children:O.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",fill:"none",children:[O.jsx("rect",{width:"200",height:"200",fill:"rgba(255, 255, 255, 0.1)"}),O.jsx("path",{d:"M60 60L140 140M140 60L60 140",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"2",strokeLinecap:"round"})]})}),O.jsx("div",{className:"card-text-overlay",children:O.jsxs("div",{className:"card-text-content",children:[O.jsxs("div",{className:"card-text-left",children:[O.jsx("h3",{className:"card-title",children:s}),O.jsx("p",{className:"card-subtitle",children:e}),i&&O.jsx("p",{className:"card-description",children:i})]}),O.jsx("div",{className:"card-text-right",children:O.jsx("svg",{className:"card-link-arrow",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:O.jsx("path",{d:"M4 12L12 4M12 4H6M12 4V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})]})})})}function qE({onPaginationChange:s}){const[e,i]=Et.useState(0),r=2,l=[{title:"Minecraft",subtitle:"Mojang, Microsoft",description:"Sandbox Builder",imageSrc:"games/minecraft.png",href:"https://www.minecraft.net/",id:1},{title:"Spore",subtitle:"Maxis, EA",description:"Evolutionary Sandbox",imageSrc:"games/spore.png",href:"https://www.ea.com/games/spore",id:2},{title:"The Sims",subtitle:"Maxis, EA",description:"Character Simulator",imageSrc:"games/sims.png",href:"https://www.ea.com/games/the-sims",id:3},{title:"No Man's Sky",subtitle:"Hello Games",description:"Procedural Universe",imageSrc:"games/sky.jpg",href:"https://www.nomanssky.com/",id:4},{title:"Dwarf Fortress",subtitle:"Bay 12 Games",description:"Procedural World Simulation",imageSrc:"games/fortress.png",href:"https://www.bay12games.com/dwarves/",id:5},{title:"SimCity",subtitle:"Maxis, EA",description:"City Builder",imageSrc:"games/simcity.png",href:"https://www.ea.com/games/simcity",id:6},{title:"Unity Engine",subtitle:"Unity Technologies",description:"Game Engine",imageSrc:"engines/unity.png",href:"https://unity.com/",id:7},{title:"Unreal Engine",subtitle:"Epic Games",description:"Game Engine",imageSrc:"engines/unreal.png",href:"https://www.unrealengine.com/",id:8},{title:"Twine",subtitle:"Interactive Narrative",description:"Branching Stories",imageSrc:"engines/twine.png",href:"https://twinery.org/",id:9},{title:"Genie 3",subtitle:"Google DeepMind",description:"AI World Generation",imageSrc:"engines/genie-3.png",href:"https://3dgen.io/",id:10},{title:"VLGE",subtitle:"VIL + IJ",description:"AI Asset Pipeline",imageSrc:"engines/vlge.png",href:"https://www.vlge.com/",id:11},{title:"RPG Maker",subtitle:"Enterbrain, Degica",description:"Game Development Tool",imageSrc:"engines/rpg.png",href:"https://www.rpgmakerweb.com/",id:12}],c=()=>{const h=e*6;return l.slice(h,h+6)},d=h=>{i(h),s&&s({currentPage:h,totalPages:r,onPageChange:d})};return Jg.useEffect(()=>{s&&s({currentPage:e,totalPages:r,onPageChange:d})},[e,r,s]),O.jsx("div",{className:"state-of-art-container",children:O.jsx("div",{className:"cards-grid",children:c().map(h=>O.jsx(jE,{title:h.title,subtitle:h.subtitle,description:h.description,imageSrc:h.imageSrc,href:h.href},h.id))})})}function YE(){const s=Et.useRef(null),e=Et.useRef(null);return Et.useEffect(()=>{let i=new ne(0,0,0);function r(D,W){const j=Math.min(D/W,1),ue=new nt(255),pe=new nt(65280);return ue.clone().lerp(pe,j)}const l=s.current;if(!l)return;const c=new yv;c.background=new nt(16777215);const d=()=>({w:l.clientWidth,h:l.clientHeight});let{w:h,h:m}=d();const p=new li(60,h/m,.1,2e3),x={radius:150,phi:Math.PI/2,theta:0},g=new Pv({antialias:!0});g.setSize(h,m),g.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.appendChild(g.domElement);const S=new qo;c.add(S);const b=new Or(600,600,20,20),E=new il({color:13421772,wireframe:!0,transparent:!0,opacity:.5}),A=new Zn(b,E);A.rotation.x=-Math.PI/2,A.position.y=-10,c.add(A),c.add(new G1(16777215,.9));let y={},v={},z=null;const U=`id,label,connections
A,helloworld.js,"B|C|D|E"

B,System Logic,"B1|B2|B3"
B1,State Engine,"B1a|B1b"
B1a,Dynamic Parameters,""
B1b,Session Persistence,""
B2,Procedural Systems,"B2a|B2b"
B2a,Noise-Based Terrain,""
B2b,Object Rules,""
B3,Simulation Loop,"B3a|B3b"
B3a,Frame Updates,""
B3b,Synchronization,""

C,Visualization,"C1|C2|C3"
C1,3D Rendering,"C1a|C1b"
C1a,Graphics Pipeline,""
C1b,Post-Processing Effects,""
C2,Shaders & Materials,"C2a|C2b"
C2a,PBR Textures,""
C2b,Custom GLSL Shaders,""
C3,Optimization,"C3a|C3b"
C3a,Frustum Culling,""
C3b,Detail (LOD),""

D,AI Mediation,"D1|D2|D3"
D1,Language Understanding,"D1a|D1b"
D1a,Prompt Parsing,""
D1b,Command Contextualization,""
D2,Generative Agents,"D2a|D2b"
D2a,Intent Recognition,""
D2b,Behavior Trees,""
D3,Procedural Narrative,"D3a|D3b"
D3a,Story Node Linking,""
D3b,Adaptive Quest Logic,""

E,Collaboration,"E1|E2|E3"
E1,Multiplayer Systems,"E1a|E1b"
E1a,P2P,""
E1b,Session Tokens,""
E2,Cloud,"E2a|E2b"
E2a,Asset Streaming,""
E2b,Data Persistence,""
E3,Collaboration Tools,"E3a|E3b"
E3a,Shared Editing,""
E3b,State Merge,""`;function B(D){const W=D.trim().split(/\r?\n/);return W.shift(),W.map(j=>{const ue=j.split(","),pe=ue[0]?.trim(),L=ue[1]?.trim(),K=ue.slice(2).join(",").replace(/"/g,"").trim(),ge=K?K.split("|").map(be=>be.trim()).filter(Boolean):[];return!pe||!L?null:{id:pe,label:L,connections:ge}}).filter(Boolean)}const G=B(U);function P(D){const pe=document.createElement("canvas").getContext("2d");pe.font="28px monospace";const L=pe.measureText(D).width,K=10,ge=document.createElement("canvas");ge.width=Math.ceil((L+40)*K),ge.height=Math.ceil(68*K);const be=ge.getContext("2d");be.scale(K,K),be.font="28px monospace",be.fillStyle="black",be.textAlign="center",be.textBaseline="middle",be.fillText(D,ge.width/(2*K),ge.height/(2*K));const De=new B1(ge);De.anisotropy=g.capabilities.getMaxAnisotropy();const Z=new bv({map:De,transparent:!0}),se=new w1(Z);return se.scale.set(Math.max(12,L*.2),28*.35,1),se}function F(D){const W=e.current;if(!W)return;W.querySelectorAll(".pill").forEach(ue=>{ue.dataset.id===D?ue.classList.add("active"):ue.classList.remove("active")})}function ae(D,W=0){const j=v[D];return!j||!j.connections?.length?W:Math.max(...j.connections.map(ue=>ae(ue,W+1)))}function w(D){S.clear(),y={},v={},D.forEach(pe=>v[pe.id]=pe);const W=D[0],j=ae(W.id);function ue(pe,L=0,K=null,ge=0,be=1,De=new ne(0,1,0)){const Z=v[pe];if(!Z)return;const se=r(L,j),Te=new Zn(new cu(1.2,24,24),new il({color:se})),Be=25*(1+L*1.2);if(K){const it=new ne(0,1,0);let ft=new ne().crossVectors(De,it);ft.length()<.001&&(ft=new ne(1,0,0)),ft.normalize();const H=new ne().crossVectors(De,ft),dt=ge/be*Math.PI*2,gt=dv.degToRad(30),Ot=De.clone().applyAxisAngle(ft,gt).normalize(),Ge=new ne().addScaledVector(ft,Math.cos(dt)*Be).addScaledVector(H,Math.sin(dt)*Be).addScaledVector(Ot,Be);Te.position.copy(K.position).add(Ge)}else Te.position.set(0,0,0);S.add(Te),y[pe]=Te;const rt=P(Z.label);if(rt.position.set(Te.position.x,Te.position.y+3,Te.position.z),S.add(rt),K){const it=new O1(new Vn().setFromPoints([K.position.clone(),Te.position.clone()]),new Tv({color:K.material.color}));S.add(it)}const Wt=Z.connections||[];if(Wt.length){const it=K?Te.position.clone().sub(K.position).normalize():new ne(0,1,0);Wt.forEach((ft,H)=>ue(ft,L+1,Te,H,Wt.length,it))}}ue(W.id),k(W.id),setTimeout(()=>R(D),0)}function R(D){const W=e.current;W&&(W.innerHTML="",D.forEach(j=>{const ue=document.createElement("button");ue.className="pill",ue.textContent=j.label,ue.dataset.id=j.id,ue.type="button",ue.addEventListener("click",()=>k(j.id)),W.appendChild(ue)}),z&&F(z))}function k(D){const W=y[D];W&&(z=D,i.copy(W.position),x.radius=80,x.phi=Math.PI/2,x.theta=0,F(D))}let J=!1,le=0,me=0;l.addEventListener("mousedown",D=>{J=!0,le=D.clientX,me=D.clientY}),window.addEventListener("mouseup",()=>J=!1),window.addEventListener("mousemove",D=>{if(!J)return;const W=D.clientX-le,j=D.clientY-me;le=D.clientX,me=D.clientY,x.theta-=W*.005,x.phi-=j*.005,x.phi=Math.max(.1,Math.min(Math.PI-.1,x.phi))}),l.addEventListener("wheel",D=>{D.preventDefault(),x.radius+=D.deltaY*.3,x.radius=Math.max(20,Math.min(400,x.radius))},{passive:!1});function de(){requestAnimationFrame(de);const D=x.radius*Math.sin(x.phi)*Math.cos(x.theta),W=x.radius*Math.cos(x.phi),j=x.radius*Math.sin(x.phi)*Math.sin(x.theta);p.position.set(i.x+D,i.y+W,i.z+j),p.lookAt(i),g.render(c,p)}return window.addEventListener("resize",()=>{const D=d();h=D.w,m=D.h,p.aspect=h/m,p.updateProjectionMatrix(),g.setSize(h,m)}),w(G),de(),()=>{l&&l.contains(g.domElement)&&l.removeChild(g.domElement),g.dispose()}},[]),O.jsxs("div",{className:"ontology-3d-container",children:[O.jsx("div",{ref:s,className:"w-full h-full"}),O.jsx("div",{ref:e,className:"pills-container"})]})}function ZE(){return O.jsx("div",{style:{width:"100%",height:"100%",position:"relative"},children:O.jsx(YE,{})})}function QE(){return O.jsx("div",{className:"project-question-container",children:O.jsxs("p",{className:"question-statement",children:["How might we design an ",O.jsx("strong",{children:"extensible procedural kernel"})," ","that empowers creators to"," ",O.jsx("strong",{children:"author, manipulate, and experience computational worlds"})," through"," ",O.jsx("strong",{children:"real-time interaction"}),", enabling applications of"," ",O.jsx("strong",{children:"world-building"}),", ",O.jsx("strong",{children:"computational design"}),", and"," ",O.jsx("strong",{children:"creative expression"})," to emerge from a"," ",O.jsx("strong",{children:"single system"}),"?"]})})}const KE=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),JE=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Zg=s=>{const e=JE(s);return e.charAt(0).toUpperCase()+e.slice(1)},Bv=(...s)=>s.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),$E=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var eT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tT=Et.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>Et.createElement("svg",{ref:m,...eT,width:e,height:e,stroke:s,strokeWidth:r?Number(i)*24/Number(e):i,className:Bv("lucide",l),...!c&&!$E(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,x])=>Et.createElement(p,x)),...Array.isArray(c)?c:[c]]));const zr=(s,e)=>{const i=Et.forwardRef(({className:r,...l},c)=>Et.createElement(tT,{ref:c,iconNode:e,className:Bv(`lucide-${KE(Zg(s))}`,`lucide-${s}`,r),...l}));return i.displayName=Zg(s),i};const nT=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],iT=zr("eye",nT);const aT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],rT=zr("gauge",aT);const sT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],oT=zr("globe",sT);const lT=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Fv=zr("network",lT);const cT=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uT=zr("search",cT);const fT=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],dT=zr("users",fT);const hT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],pT=zr("zap",hT);function mT(){const s=[{id:1,title:"Playtesting",description:"Observing player engagement and emergent behavior to assess how users explore mechanics, interact with systems, and interpret feedback.",methodType:"Qualitative Methods",Icon:iT},{id:2,title:"Choice Mapping",description:"Diagramming and visualizing branching narrative structures to identify decision density, dead ends, and systemic balance for player experience in virtual worlds.",methodType:"Mixed Methods",Icon:Fv},{id:3,title:"Computational Performance",description:"Measuring how efficiently the system allocates CPU and memory resources as simulated worlds expand—tracking scalability, load, and procedural generation cost over time.",methodType:"Quantitative Methods",Icon:rT},{id:4,title:"Contextual Inquiry",description:"Ethnographic observations and interviewing to uncover how participants interpret and navigate the designed environment in real or simulated contexts.",methodType:"Qualitative Methods",Icon:uT}];return O.jsx("div",{className:"research-methods-container",children:O.jsxs("div",{className:"research-split",children:[O.jsx("div",{className:"research-cards-section",children:O.jsx("div",{className:"cards-grid-2x2",children:s.map(e=>{const i=e.Icon;return O.jsxs("div",{className:"research-card",children:[O.jsx("div",{className:"research-card-icon",children:O.jsx(i,{size:24})}),O.jsxs("div",{className:"research-card-content",children:[O.jsx("div",{className:"research-card-title",children:e.title}),O.jsx("div",{className:"research-card-description",children:e.description}),O.jsx("div",{className:"research-card-method",children:e.methodType})]})]},e.id)})})}),O.jsx("div",{className:"research-divider"}),O.jsx("div",{className:"research-image-section",children:O.jsx("img",{src:"diagrams/researchMethods.png",alt:"Research Methods Diagram",className:"research-methods-image"})})]})})}function xT({title:s,description:e,P5Sketch:i,href:r="#"}){return O.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"precedent-card-link",children:O.jsx("div",{className:"precedent-card",children:O.jsxs("div",{className:"card-sketch-container",children:[O.jsx("div",{className:"card-sketch-wrapper",children:i&&O.jsx(i,{})}),O.jsx("div",{className:"card-text-overlay",children:O.jsxs("div",{className:"card-text-content",children:[O.jsxs("div",{className:"card-text-left",children:[O.jsx("h3",{className:"card-title",children:s}),O.jsx("p",{className:"card-subtitle",children:e})]}),O.jsx("div",{className:"card-text-right",children:O.jsx("svg",{className:"card-link-arrow",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:O.jsx("path",{d:"M4 12L12 4M12 4H6M12 4V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})]})})})}function gT(){return O.jsx("div",{className:"algorithm-gif-container",children:O.jsx("img",{src:"algorithms/noise.gif",alt:"Noise & Heightfields",className:"algorithm-gif"})})}function vT(){return O.jsx("div",{className:"algorithm-gif-container",children:O.jsx("img",{src:"algorithms/wave.gif",alt:"Simulation & Natural Systems",className:"algorithm-gif"})})}function _T(){return O.jsx("div",{className:"algorithm-gif-container",children:O.jsx("img",{src:"algorithms/lsystem.gif",alt:"Structural / Generative Grammars",className:"algorithm-gif"})})}function ST(){return O.jsx("div",{className:"algorithm-gif-container",children:O.jsx("img",{src:"algorithms/flocking.gif",alt:"Agent & Behavior Systems",className:"algorithm-gif"})})}function yT(){const s=[{id:1,title:"NOISE & HEIGHTFIELDS",description:"Perlin/Simplex noise algorithms for terrain topology, biome mask generation, and spatial continuity mapping.",P5Sketch:gT,href:"https://en.wikipedia.org/wiki/Perlin_noise"},{id:2,title:"SIMULATION & NATURAL SYSTEMS",description:"Flow field particle systems, erosion simulation algorithms, and procedural landform evolution logic.",P5Sketch:vT,href:"https://en.wikipedia.org/wiki/Particle_system"},{id:3,title:"STRUCTURAL & GENERATIVE GRAMMARS",description:"L-systems, shape grammars, and WFC tiling algorithms for procedural structure generation.",P5Sketch:_T,href:"https://en.wikipedia.org/wiki/L-system"},{id:4,title:"AGENT & BEHAVIOR SYSTEMS",description:"Flocking algorithms, GOAP/HTN planning, and utility-based AI for emergent agent behaviors.",P5Sketch:ST,href:"https://en.wikipedia.org/wiki/Boids"}];return O.jsx("div",{className:"key-precedents-container",children:O.jsx("div",{className:"precedents-grid-2x2",children:s.map(e=>O.jsx(xT,{title:e.title,description:e.description,P5Sketch:e.P5Sketch,href:e.href},e.id))})})}function bT({title:s,description:e,imageSrc:i,href:r="#"}){return O.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"tech-card-link",children:O.jsxs("div",{className:"tech-card",children:[O.jsx("div",{className:"tech-card-image-container",children:i?O.jsx("img",{src:i,alt:s,className:"tech-card-image"}):O.jsx("div",{className:"tech-card-placeholder",children:O.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",fill:"none",children:[O.jsx("rect",{width:"200",height:"200",fill:"rgba(255, 255, 255, 0.1)"}),O.jsx("path",{d:"M60 60L140 140M140 60L60 140",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"2",strokeLinecap:"round"})]})})}),O.jsxs("div",{className:"tech-card-content",children:[O.jsxs("div",{className:"tech-card-text-left",children:[O.jsx("h3",{className:"tech-card-title",children:s}),O.jsx("p",{className:"tech-card-description",children:e})]}),O.jsx("div",{className:"tech-card-text-right",children:O.jsx("svg",{className:"tech-card-link-arrow",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:O.jsx("path",{d:"M4 12L12 4M12 4H6M12 4V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})})}function MT(){const s=[{id:1,title:"React",description:"UI Framework",imageSrc:"tech/react-tailwind.png",href:"https://react.dev/"},{id:3,title:"Geotic",description:"Entity-Component System",imageSrc:"tech/geotic.gif",href:"https://github.com/ddmills/geotic"},{id:4,title:"Vite",description:"Build Tool",imageSrc:"tech/vite.png",href:"https://vitejs.dev/"},{id:6,title:"XState",description:"State Machines & System Logic",imageSrc:"tech/xstate.png",href:"https://xstate.js.org/"},{id:7,title:"Three.js",description:"3D World Rendering",imageSrc:"tech/threejs.png",href:"https://threejs.org/"},{id:9,title:"Recast/Detour",description:"NavMesh & Agent Pathfinding",imageSrc:"tech/recast.png",href:"https://github.com/recastnavigation/recastnavigation"},{id:10,title:"React Flow",description:"Node-Based Editor",imageSrc:"tech/react-flow.png",href:"https://reactflow.dev/"},{id:12,title:"JSON Rules Engine",description:"Procedural Logic Evaluation",imageSrc:"tech/json-rules-engine.png",href:"https://github.com/CacheControl/json-rules-engine"}];return O.jsx("div",{className:"technology-ecosystem-container",children:O.jsx("div",{className:"tech-grid-2x4",children:s.map(e=>O.jsx(bT,{title:e.title,description:e.description,imageSrc:e.imageSrc,href:e.href},e.id))})})}function ET(){return O.jsx("div",{className:"study-of-setting-container",children:O.jsx("img",{src:"diagrams/settingConstituencies.png",alt:"Study of Setting & Constituencies",className:"setting-diagram-image"})})}function TT({onPaginationChange:s}){const[e,i]=Et.useState(0),r=3;return Et.useEffect(()=>{s&&s({currentPage:e,totalPages:r,onPageChange:i})},[e,r,s]),O.jsx("div",{className:"system-uml-container",children:O.jsxs("div",{className:"diagram-pages",children:[e===0&&O.jsx("div",{className:"diagram-page",children:O.jsx("img",{src:"diagrams/systemDiagram.png",alt:"System Diagram",className:"diagram-image"})}),e===1&&O.jsx("div",{className:"diagram-page",children:O.jsx("img",{src:"diagrams/UMLDiagram.png",alt:"UML Diagram",className:"diagram-image"})}),e===2&&O.jsx("div",{className:"diagram-page",children:O.jsx("img",{src:"diagrams/sequencingDiagram.png",alt:"Sequencing Diagram",className:"diagram-image"})})]})})}function AT({title:s,description:e,keywords:i,Icon:r}){return O.jsxs("div",{className:"challenge-card",children:[O.jsx("div",{className:"challenge-card-icon-container",children:r&&O.jsx(r,{size:24})}),O.jsx("div",{className:"challenge-card-content",children:O.jsxs("div",{className:"challenge-card-text-left",children:[O.jsx("h3",{className:"challenge-card-title",children:s}),O.jsx("p",{className:"challenge-card-description",children:e}),i&&O.jsx("div",{className:"challenge-card-keywords",children:i})]})})]})}function CT(){const s=[{id:1,title:"Strong Network Capabilities for Real-Time Interaction",description:"The web's infrastructure provides connectivity through WebSockets and WebRTC protocols. Real-time communication happens instantly in the browser, leveraging server resources and CDN infrastructure.",keywords:"WebSockets, WebRTC, CDN, Network Infrastructure",Icon:Fv},{id:2,title:"Lightweight and Low-Friction to Use",description:"Web applications run directly in the browser, requiring no downloads or device-specific dependencies. The browser's runtime environment handles resource allocation and memory management automatically.",keywords:"Browser Runtime, Resource Allocation, Zero Installation",Icon:pT},{id:3,title:"Built-In Peer-to-Peer Collaboration",description:"Modern web technologies support P2P connections out of the box. WebRTC enables direct device-to-device communication, reducing server load and enabling fast, decentralized interactions.",keywords:"P2P, WebRTC, Decentralized, Device-to-Device",Icon:dT},{id:4,title:"Universal Accessibility Across Devices",description:"The web runs everywhere—phones, tablets, laptops, and low-spec devices. A simple URL becomes an entry point, leveraging standardized web protocols and adaptive rendering engines.",keywords:"Cross-Platform, Web Protocols, Adaptive Rendering",Icon:oT}];return O.jsx("div",{className:"computational-challenges-container",children:O.jsx("div",{className:"challenges-grid-2x2",children:s.map(e=>O.jsx(AT,{title:e.title,description:e.description,keywords:e.keywords,Icon:e.Icon},e.id))})})}function Qg({title:s,author:e,abstract:i,imageSrc:r,showLink:l=!0,href:c="#"}){const d=()=>O.jsxs("div",{className:"literature-card",children:[O.jsx("div",{className:"literature-card-image-container",children:r?O.jsx("img",{src:r,alt:s,className:"literature-card-image"}):O.jsx("div",{className:"literature-card-placeholder",children:O.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",fill:"none",children:[O.jsx("rect",{width:"200",height:"200",fill:"rgba(255, 255, 255, 0.1)"}),O.jsx("path",{d:"M60 60L140 140M140 60L60 140",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"2",strokeLinecap:"round"})]})})}),O.jsxs("div",{className:"literature-card-content",children:[O.jsxs("div",{className:"literature-card-header",children:[O.jsx("h3",{className:"literature-card-title",children:s}),e&&O.jsx("p",{className:"literature-card-author",children:e})]}),O.jsx("div",{className:`literature-card-abstract ${l?"":"full-text"}`,children:O.jsx("p",{className:"literature-card-abstract-text",children:i})}),l&&O.jsx("div",{className:"literature-card-link",children:O.jsx("svg",{className:"literature-card-link-arrow",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:O.jsx("path",{d:"M4 12L12 4M12 4H6M12 4V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]});return l?O.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"literature-card-link-wrapper",children:O.jsx(d,{})}):O.jsx(d,{})}function RT({onPaginationChange:s}){const[e,i]=Et.useState(0),r=2;Et.useEffect(()=>{s&&s({currentPage:e,totalPages:r,onPageChange:i})},[e,r,s]);const l=[{id:1,title:"Mod Communities (Skyrim)",subtitle:"Reinterpretations of procedural grammars",abstract:"Modding communities in Skyrim demonstrate how players reinterpret and extend procedural generation systems. These communities create new content generation rules, modify existing algorithms, and share procedural grammars that transform the base game's systems. The modding ecosystem showcases how procedural logic can be democratized and reimagined by user communities, creating new forms of generative expression within established frameworks.",imageSrc:"communities/skyrim.png"},{id:2,title:"Machinima (Garry's Mod)",subtitle:"Worlds used as performative stages",abstract:"Garry's Mod communities use procedural worlds as performative stages for machinima production. These creative subcultures leverage the game's physics-based systems and object placement tools to construct narrative spaces and cinematic experiences. The community transforms game engines into creative platforms, demonstrating how procedural environments can serve as both technical infrastructure and artistic medium for collaborative storytelling.",imageSrc:"communities/mod.png"},{id:3,title:"Browser-native PCG Artists (OpenProcessing)",subtitle:"Proceduralism adapted to web constraints",abstract:"Browser-native procedural content generation artists working with platforms like OpenProcessing adapt generative algorithms to web browser constraints. These communities explore real-time procedural generation within browser runtime environments, leveraging JavaScript's capabilities for computational art. The work demonstrates how procedural systems can be optimized for web infrastructure, balancing computational complexity with browser performance limitations while maintaining creative expression.",imageSrc:"communities/open.png"}],c=[{id:1,title:"Don't Hate the Player, Hate the Game: The Racialization of Labor in World of Warcraft",author:"Lisa Nakamura",abstract:"This article examines the racialization of informational labor in machinima about Chinese player workers in World of Warcraft. Such fan-produced video content extends the representational space of the game and produces overtly racist narrative space, illustrating the problematics of informationalized capitalism and the dispossession of information workers in processes of globalization.",imageSrc:"papers/wow.png",href:"https://lisanakamura.net/wp-content/uploads/2012/03/donthatetheplayer.pdf"},{id:2,title:"Constructions and Reconstructions of Self in Virtual Reality: Playing in the MUDs",author:"Sherry Turkle",abstract:"Multi-user games on the Internet provide worlds for social interaction in virtual space, where you can present yourself as a character, be anonymous, and play roles as close or far from your real self as you choose. In MUDs, the projections of self are engaged in a resolutely postmodern context where authorship is exploded and the self is multiplied without limit, offering unparalleled opportunity to play with identity.",imageSrc:"papers/mud.png",href:"https://www.tandfonline.com/doi/abs/10.1080/10749039409524667"},{id:3,title:"Virtual 'Third Places': A Case Study of Sociability in Massively Multiplayer Games",author:"Nicolas Ducheneaut, Robert J. Moore & Eric Nickell",abstract:"Massively Multiplayer Online Games are extensive, persistent online 3D environments populated by hundreds of thousands of players. Based on ethnographic observations and data collection in Star Wars Galaxies, we use Oldenburg's notion of 'third places' to evaluate whether virtual world social spaces fit existing definitions of sociable environments and discuss the role online games play in formation of social capital.",imageSrc:"papers/place.png",href:"https://link.springer.com/article/10.1007/s10606-007-9041-8"}];return O.jsxs("div",{className:"communities-of-practice-container",children:[e===0&&O.jsx("div",{className:"literature-grid-3col",children:l.map(d=>O.jsx(Qg,{title:d.title,author:d.subtitle,abstract:d.abstract,imageSrc:d.imageSrc,showLink:!1},d.id))}),e===1&&O.jsx("div",{className:"literature-grid-3col",children:c.map(d=>O.jsx(Qg,{title:d.title,author:d.author,abstract:d.abstract,imageSrc:d.imageSrc,showLink:!0,href:d.href},d.id))})]})}function wT({title:s,subtitle:e,imageSrc:i}){return O.jsxs("div",{className:"aesthetic-card",children:[O.jsx("div",{className:"aesthetic-card-image-container",children:i?O.jsx("img",{src:i,alt:s,className:"aesthetic-card-image"}):O.jsx("div",{className:"aesthetic-card-placeholder",children:O.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 200 200",fill:"none",children:[O.jsx("rect",{width:"200",height:"200",fill:"rgba(255, 255, 255, 0.1)"}),O.jsx("path",{d:"M60 60L140 140M140 60L60 140",stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"2",strokeLinecap:"round"})]})})}),O.jsx("div",{className:"aesthetic-card-text-overlay",children:O.jsx("div",{className:"aesthetic-card-text-content",children:O.jsxs("div",{className:"aesthetic-card-text-left",children:[O.jsx("h3",{className:"aesthetic-card-title",children:s}),O.jsx("p",{className:"aesthetic-card-subtitle",children:e})]})})})]})}function DT(){const s=[{id:1,title:"Frank Lloyd Wright",subtitle:"Broadacre City, Suburban Utopia",imageSrc:"styles/utopia.png"},{id:4,title:"Hieronymus Bosch",subtitle:"Garden of Earthly Delights, Painting",imageSrc:"styles/garden.png"}];return O.jsx("div",{className:"project-aesthetics-container",children:O.jsx("div",{className:"aesthetics-grid-2x1",children:s.map(e=>O.jsx(wT,{title:e.title,subtitle:e.subtitle,imageSrc:e.imageSrc},e.id))})})}function UT(){return O.jsxs("div",{style:{color:"#ffffff",textAlign:"center"},children:[O.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"1rem"},children:"Radical Prototype"}),O.jsx("p",{style:{color:"rgba(255, 255, 255, 0.8)",fontSize:"1.2rem"},children:"Content for Radical Prototype"})]})}function NT({onPaginationChange:s}){const[e,i]=Et.useState(0),r=3,l=[{id:1,imageSrc:"storyboards/goodPath.png",alt:"Good Path Storyboard"},{id:2,imageSrc:"storyboards/neutralPath.png",alt:"Neutral Path Storyboard"},{id:3,imageSrc:"storyboards/badPath.png",alt:"Bad Path Storyboard"}],c=h=>{i(h),s&&s({currentPage:h,totalPages:r,onPageChange:c})};Et.useEffect(()=>{s&&s({currentPage:e,totalPages:r,onPageChange:c})},[e,r,s]);const d=l[e];return O.jsx("div",{className:"storyboard-forking-path-container",children:O.jsx("div",{className:"storyboard-image-wrapper",children:d.imageSrc?O.jsx("img",{src:d.imageSrc,alt:d.alt,className:"storyboard-image"}):O.jsx("div",{className:"storyboard-image-placeholder",children:O.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 400 600",fill:"none",children:[O.jsx("rect",{width:"400",height:"600",fill:"rgba(0, 0, 0, 0.1)"}),O.jsx("rect",{x:"20",y:"20",width:"360",height:"560",fill:"rgba(255, 255, 255, 0.05)",stroke:"rgba(255, 255, 255, 0.2)",strokeWidth:"2",strokeDasharray:"8 8"}),O.jsx("text",{x:"200",y:"280",textAnchor:"middle",fill:"rgba(255, 255, 255, 0.4)",fontSize:"24",fontFamily:"system-ui",children:"Longform Image Placeholder"}),O.jsxs("text",{x:"200",y:"310",textAnchor:"middle",fill:"rgba(255, 255, 255, 0.3)",fontSize:"16",fontFamily:"system-ui",children:["Page ",e+1," of ",r]})]})})})})}function LT(){const[s,e]=Et.useState(null),[i,r]=Et.useState(null),[l,c]=Et.useState(null),[d,h]=Et.useState(null);return O.jsxs("div",{className:"relative w-screen h-screen",children:[O.jsx(FE,{}),O.jsx(IE,{}),O.jsx(GE,{}),O.jsx(HE,{}),O.jsxs(VE,{children:[O.jsx(XE,{}),O.jsx(oi,{title:"State of the Art",slideNumber:1,pagination:s,children:O.jsx(qE,{onPaginationChange:e})}),O.jsx(oi,{title:"Ontology Diagram",slideNumber:2,children:O.jsx(ZE,{})}),O.jsx(oi,{title:"Project Question",slideNumber:3,children:O.jsx(QE,{})}),O.jsx(oi,{title:"Research Methods",slideNumber:4,children:O.jsx(mT,{})}),O.jsx(oi,{title:"Key Precedents",slideNumber:5,children:O.jsx(yT,{})}),O.jsx(oi,{title:"Technology Ecosystem",slideNumber:6,children:O.jsx(MT,{})}),O.jsx(oi,{title:"Study of Setting & Constituencies",slideNumber:7,children:O.jsx(ET,{})}),O.jsx(oi,{title:"System + UML Diagram",slideNumber:8,pagination:i,children:O.jsx(TT,{onPaginationChange:r})}),O.jsx(oi,{title:"Computational Challenges + Barriers to Entry",slideNumber:9,children:O.jsx(CT,{})}),O.jsx(oi,{title:"Communities of Practice + Literature Review",slideNumber:10,pagination:l,children:O.jsx(RT,{onPaginationChange:c})}),O.jsx(oi,{title:"Project Aesthetics",slideNumber:11,children:O.jsx(DT,{})}),O.jsx(oi,{title:"Radical Prototype",slideNumber:12,children:O.jsx(UT,{})}),O.jsx(oi,{title:"Storyboard + Forking Path",slideNumber:13,pagination:d,children:O.jsx(NT,{onPaginationChange:h})}),O.jsx(WE,{})]})]})}$S.createRoot(document.getElementById("root")).render(O.jsx(Jg.StrictMode,{children:O.jsx(LT,{})}));
