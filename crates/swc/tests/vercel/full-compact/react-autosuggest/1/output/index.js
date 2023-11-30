import{_ as e}from"@swc/helpers/_/_instanceof";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var c=n?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(r,u,c):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}(require("react")),n=(t=require("prop-types"))&&t.__esModule?t:{default:t};function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(d,t);var n,o,p=function(){var e,t,r=a(d);if(function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=a(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return(e=t)&&("object"===i(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)};function d(){!function(t,r){if(!e(t,r))throw TypeError("Cannot call a class as a function")}(this,d);for(var t,r,n,o,i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return t=function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o=p.call.apply(p,[this].concat(u))),r="storeHighlightedItemReference",n=function(e){o.props.onHighlightedItemChange(null===e?null:e.item)},r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,o}return n=[{key:"shouldComponentUpdate",value:function(e){return(0,_compareObjects.default)(e,this.props,["itemProps"])}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,o=t.itemProps,i=t.renderItem,f=t.renderItemData,a=t.sectionIndex,l=t.highlightedItemIndex,p=t.getItemId,d=t.theme,y=t.keyPrefix,b=null===a?y:"".concat(y,"section-").concat(a,"-"),m="function"==typeof o;return r.default.createElement("ul",u({role:"listbox"},d("".concat(b,"items-list"),"itemsList")),n.map(function(t,n){var y=0===n,h=n===l,g="".concat(b,"item-").concat(n),O=m?o({sectionIndex:a,itemIndex:n}):o,j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({id:p(a,n),"aria-selected":h},d(g,"item",y&&"itemFirst",h&&"itemHighlighted"),{},O);return h&&(j.ref=e.storeHighlightedItemReference),r.default.createElement(_Item.default,u({},j,{sectionIndex:a,isHighlighted:h,itemIndex:n,item:t,renderItem:i,renderItemData:f}))}))}}],f(d.prototype,n),o&&f(d,o),d}(r.Component);exports.default=p,s(p,"propTypes",{items:n.default.array.isRequired,itemProps:n.default.oneOfType([n.default.object,n.default.func]),renderItem:n.default.func.isRequired,renderItemData:n.default.object.isRequired,sectionIndex:n.default.number,highlightedItemIndex:n.default.number,onHighlightedItemChange:n.default.func.isRequired,getItemId:n.default.func.isRequired,theme:n.default.func.isRequired,keyPrefix:n.default.string.isRequired}),s(p,"defaultProps",{sectionIndex:null}),new p;
