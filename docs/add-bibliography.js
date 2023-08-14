/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;const n=t=>new class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}("string"==typeof t?t:t+"",void 0,i),o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const l=window,h=l.trustedTypes,a=h?h.emptyScript:"",d=l.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p},v="finalized";let $=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=u){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:c).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;$[v]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:$}),(null!==(r=l.reactiveElementVersions)&&void 0!==r?r:l.reactiveElementVersions=[]).push("1.6.3");const _=window,A=_.trustedTypes,m=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,y="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,b="?"+f,E=`<${b}>`,S=document,x=()=>S.createComment(""),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,P="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,L=/>/g,H=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,k=/"/g,O=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),I=new WeakMap,j=S.createTreeWalker(S,129,null,!1);function z(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==m?m.createHTML(e):e}const D=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let l,h,a=-1,d=0;for(;d<i.length&&(r.lastIndex=d,h=r.exec(i),null!==h);)d=r.lastIndex,r===T?"!--"===h[1]?r=U:void 0!==h[1]?r=L:void 0!==h[2]?(O.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=null!=n?n:T,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?H:'"'===h[3]?k:N):r===k||r===N?r=H:r===U||r===L?r=T:(r=H,n=void 0);const c=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+E:a>=0?(s.push(l),i.slice(0,a)+y+i.slice(a)+f+c):i+f+(-2===a?(s.push(void 0),e):c)}return[z(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[h,a]=D(t,e);if(this.el=V.createElement(h,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(y)||e.startsWith(f)){const i=a[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+y).split(f),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?K:"@"===e[1]?X:J})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],x()),j.nextNode(),l.push({type:2,index:++n});s.append(t[e],x())}}}else if(8===s.nodeType)if(s.data===b)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)l.push({type:7,index:n}),t+=f.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){var n,o,r,l;if(e===M)return e;let h=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const a=w(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=h:i._$Cl=h),void 0!==h&&(e=Y(t,h._$AS(t,e.values),h,s)),e}class W{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);j.currentNode=n;let o=j.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new q(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new F(o,this,t)),this._$AV.push(e),h=s[++l]}r!==(null==h?void 0:h.index)&&(o=j.nextNode(),r++)}return j.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),w(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==M&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&w(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(z(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new W(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new V(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.k(x()),this.k(x()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Y(this,t,e,0),o=!w(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const s=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=Y(this,s[i+r],e,r),l===M&&(l=this._$AH[r]),o||(o=!w(l)||l!==this._$AH[r]),l===B?t=B:t!==B&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}const G=A?A.emptyScript:"";class K extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class X extends J{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Y(this,t,e,0))&&void 0!==i?i:B)===M)return;const s=this._$AH,n=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==B&&(s===B||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const Q=_.litHtmlPolyfillSupport;null==Q||Q(V,q),(null!==(g=_.litHtmlVersions)&&void 0!==g?g:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new q(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const st=globalThis.litElementPolyfillSupport;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt;null==st||st({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3"),null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");class ot extends it{static get properties(){return{inputTitle:{type:String},inputAuthor:{type:String},inputYear:{type:String},inputPublisher:{type:String},bibliographyList:{type:Array}}}connectedCallback(){super.connectedCallback(),this.bibliographyList=[],this.inputTitle="",this.inputAuthor="",this.inputYear="",this.inputPublisher="";const t=localStorage.getItem("bibliographyList");this.bibliographyList=t?JSON.parse(t):[]}getStyles(){return R`
	<style>
	.mainContainer {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
		padding: 0 2rem;
      }

      .containerToAdd {
    	display: flex;
    	flex-direction: column;
		align-content: space-around;
    	align-items: center;
		border: solid 10px #bd998c;
    	border-radius: 20px;
    	width: 320px;
    	height: 300px;
    	margin-top: 20px;
		padding: 20px 0;
	}

      h2 {
        margin-bottom: 20px;
      }

      input {
        width: 80%;
        height: 30px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 5px;
      }

      button {
        width: 100px;
        height: 40px;
		font-size:16px;
        background: #bf6e51;
        color: #5b2424;
        border-radius: 6px;
        border-color: #5b2424;
        margin-top: 10px;
        cursor: pointer;
      }

      button:hover {
        background: #bf6e51;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin-top: 20px;
        text-align: left;
      }

      li {
        margin-bottom: 10px;
		text-align: center;
      }

      p {
        margin: 0;
      }

	  .lineBetweenBooks {
    	width: 50%;
		margin: 8px 0 12px;
    	border-bottom: 3px dotted black;
	  }

	  .bibliographyList{
		font-family: 'MedievalSharp', cursive;
		text-align: center;
		margin-top: 30px;
		display: flex;
    	flex-direction: column;
    	align-items: center;
	}

	@media all and (min-width: 768px) {
		.containerToAdd {
			width: 355px;
		}
	}

	@media all and  (min-width: 1200px){
		.mainContainer {
			display: flex;
			flex-direction: row;
    		align-content: stretch;
    		align-items: center;
			margin-bottom: 0;
		}

		.containerToAdd {
			width: 60%;
			height: 100%;
		}

		.bibliographyList {
			margin-left: 2rem;
		}
	}
	</style>
	`}render(){return R`
	${this.getStyles()}
      <article class="mainContainer">
        <section class="containerToAdd">
          <h2>Listado bibliográfico</h2>
          <input
            type="text"
            id="inputTitle"
            placeholder="Título"
            value=${this.inputTitle}
            @change=${this.handleEventTitle}
          />
          <input
            type="text"
            id="inputAuthor"
            placeholder="Autor"
            value=${this.inputAuthor}
            @change=${this.handleEventAuthor}
          />
          <input
            type="text"
            id="inputYear"
            placeholder="Año"
            value=${this.inputYear}
            @change=${this.handleEventYear}
          />
          <input
            type="text"
            id="inputPublisher"
            placeholder="Editorial"
            value=${this.inputPublisher}
            @change=${this.handleEventPublisher}
          />
          <button @click=${this.handleButtonClick}>Añadir</button>
		  <button @click=${this.handleButtonDelete}>Eliminar</button>
  		</section>
        <section class="bibliographyList">
          <h2 class="titleList">- Bibliografía de referencia -</h2>
          <h3>
            Título: La España musulmana y los inicios de los reinos cristianos
            (711-1157)
          </h3>
          <p>Autor: ÁLVAREZ PALENZUELA, V. A.</p>
          <p>Año: 1991</p>
          <p>Editorial: Gredos</p>
		  <div class="lineBetweenBooks"></div>
          <h3>
            Título:Monarquía Feudal y Organización territorial: alfoces y
            merindades en Castilla (siglos X-XV)
          </h3>
          <p>Autor: ÁLVAREZ BORGE, I.</p>
          <p>Año: 1993</p>
          <p>Editorial: C.S.I.C</p>
		  <div class="lineBetweenBooks"></div>
		  	<div class="bibliographyList">
            	<ul>
              	${this.bibliographyList.map((t=>R`
                  	<li>
                   		<h3>Título:${t.title}</h3>
                    	<p>Autor:${t.author}</p>
                    	<p>Año:${t.year}</p>
                    	<p>Editorial:${t.publisher}</p>
						<div class="lineBetweenBooks"></div>
                  	</li>
                	`))}
            	</ul>
          	</div>
		</section>
	</article>
    `}handleEventTitle(t){this.inputTitle=t.target.value}handleEventAuthor(t){this.inputAuthor=t.target.value}handleEventYear(t){this.inputYear=t.target.value}handleEventPublisher(t){this.inputPublisher=t.target.value}handleButtonClick(){const t={title:this.inputTitle,author:this.inputAuthor,year:this.inputYear,publisher:this.inputPublisher};this.bibliographyList=[...this.bibliographyList,t],localStorage.setItem("bibliographyList",JSON.stringify(this.bibliographyList))}handleButtonDelete(t){this.bibliographyList.splice(t,1),this.requestUpdate(),localStorage.setItem("bibliographyList",JSON.stringify(this.bibliographyList))}createRenderRoot(){return this}}customElements.define("add-bibliography",ot);export{ot as AddBibliography};
