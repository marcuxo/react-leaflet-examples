(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[37],{106:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r=n(9),c=n(83),u=n(94),a=n(90),o=n(91),i=n(88),f=n(80),l=n(84),s=n(0),b=n.n(s),O=Object(a.a)((function(t,e){t.children;var n=Object(u.a)(t,["children"]),r=new l.Control.Layers(void 0,void 0,n);return{instance:r,context:Object(c.a)(Object(c.a)({},e),{},{layersControl:r})}}),(function(t,e,n){e.collapsed!==n.collapsed&&(!0===e.collapsed?t.collapse():t.expand())})),d=Object(o.a)(O),j=Object(i.a)(d);function p(t){return function(e){var n=Object(f.d)(),u=Object(s.useRef)(e),a=Object(s.useState)(null),o=Object(r.a)(a,2),i=o[0],l=o[1],O=n.layersControl,d=n.map,j=Object(s.useCallback)((function(e){null!=O&&(u.current.checked&&d.addLayer(e),t(O,e,u.current.name),l(e))}),[O,d]),p=Object(s.useCallback)((function(t){null==O||O.removeLayer(t),l(null)}),[O]),v=Object(s.useMemo)((function(){return Object(c.a)(Object(c.a)({},n),{},{layerContainer:{addLayer:j,removeLayer:p}})}),[n,j,p]);return Object(s.useEffect)((function(){null!==i&&u.current!==e&&(!0!==e.checked||null!=u.current.checked&&!1!==u.current.checked?!0!==u.current.checked||null!=e.checked&&!1!==e.checked||d.removeLayer(i):d.addLayer(i),u.current=e)})),e.children?b.a.createElement(f.c,{value:v},e.children):null}}j.BaseLayer=p((function(t,e,n){t.addBaseLayer(e,n)})),j.Overlay=p((function(t,e,n){t.addOverlay(e,n)}))},65:function(t,e,n){"use strict";n.r(e);var r=n(133),c=n(106),u=n(98),a=n(1),o=[52.22977,21.01178],i=[{name:"Osm Mapnik",attribution:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a>OpenStreetMap</a> contributors',url:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"CartoDB",attribution:'&copy; <a href="http://cartodb.com/attributions">CartoDB</a> contributors',url:"https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}];e.default=function(){return Object(a.jsx)(r.a,{center:o,zoom:13,scrollWheelZoom:!1,children:Object(a.jsx)(c.a,{position:"topright",children:i.map((function(t,e){return Object(a.jsx)(c.a.BaseLayer,{checked:0===e,name:t.name,children:Object(a.jsx)(u.a,{attribution:t.attribution,url:t.url})},e)}))})})}},81:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(83);function c(t,e){var n,c=null!==(n=t.pane)&&void 0!==n?n:e.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},82:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0);function c(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){return null!=e&&t.instance.on(e),n.current=e,function(){null!=n.current&&t.instance.off(n.current),n.current=null}}),[t,e])}},83:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return u}))},85:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return f}));var r=n(0),c=n(86),u=n(80),a=n(82),o=n(81);function i(t,e){Object(r.useEffect)((function(){var n;return(null!==(n=e.layerContainer)&&void 0!==n?n:e.map).addLayer(t.instance),function(){var n;null==(n=e.layersControl)||n.removeLayer(t.instance),e.map.removeLayer(t.instance)}}),[e,t])}function f(t){return function(e){var n=Object(u.d)(),r=t(Object(o.a)(e,n),n);return Object(c.a)(n.map,e.attribution),Object(a.a)(r.current,e.eventHandlers),i(r.current,n),r}}},86:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0);function c(t,e){var n=Object(r.useRef)(e);Object(r.useEffect)((function(){e!==n.current&&null!=t.attributionControl&&(null!=n.current&&t.attributionControl.removeAttribution(n.current),null!=e&&t.attributionControl.addAttribution(e)),n.current=e}),[t,e])}},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return l}));var r=n(9),c=n(0),u=n.n(c),a=n(17),o=n(80);function i(t){function e(e,n){var r=t(e).current,a=r.instance,i=r.context;return Object(c.useImperativeHandle)(n,(function(){return a})),null==e.children?null:u.a.createElement(o.c,{value:i},e.children)}return Object(c.forwardRef)(e)}function f(t){function e(e,n){var u=Object(c.useState)(!1),o=Object(r.a)(u,2),i=o[0],f=o[1],l=t(e,f).current.instance;Object(c.useImperativeHandle)(n,(function(){return l})),Object(c.useEffect)((function(){i&&l.update()}),[l,i,e.children]);var s=l._contentNode;return s?Object(a.createPortal)(e.children,s):null}return Object(c.forwardRef)(e)}function l(t){function e(e,n){var r=t(e).current.instance;return Object(c.useImperativeHandle)(n,(function(){return r})),null}return Object(c.forwardRef)(e)}},89:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return f}));var r=n(0),c=n(80),u=n(82),a=n(85),o=n(81);function i(t,e){var n=Object(r.useRef)();Object(r.useEffect)((function(){if(e.pathOptions!==n.current){var r,c=null!==(r=e.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),n.current=c}}),[t,e])}function f(t){return function(e){var n=Object(c.d)(),r=t(Object(o.a)(e,n),n);return Object(u.a)(r.current,e.eventHandlers),Object(a.b)(r.current,n),i(r.current,e),r}}},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(0);function c(t,e){return null==e?function(e,n){return Object(r.useRef)(t(e,n))}:function(n,c){var u=Object(r.useRef)(t(n,c)),a=Object(r.useRef)(n),o=u.current.instance;return Object(r.useEffect)((function(){a.current!==n&&(e(o,n,a.current),a.current=n)}),[o,n,c]),u}}},91:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),c=n(80);function u(t){return function(e){var n=Object(c.d)(),u=t(e,n),a=u.current.instance,o=Object(r.useRef)(e.position),i=e.position;return Object(r.useEffect)((function(){return a.addTo(n.map),function(){a.remove()}}),[n.map,a]),Object(r.useEffect)((function(){null!=i&&i!==o.current&&(a.setPosition(i),o.current=i)}),[a,i]),u}}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(86),c=n(80),u=n(82),a=n(81);function o(t,e){return function(n,o){var i=Object(c.d)(),f=t(Object(a.a)(n,i),i);return Object(r.a)(i.map,n.attribution),Object(u.a)(f.current,n.eventHandlers),e(f.current,i,n,o),f}}},95:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return O}));var r=n(88),c=n(91),u=n(90),a=n(85),o=n(92),i=n(89);function f(t){var e=Object(u.a)((function(e,n){return{instance:t(e),context:n}})),n=Object(c.a)(e);return Object(r.c)(n)}function l(t,e){var n=Object(u.a)(t,e),c=Object(a.a)(n);return Object(r.a)(c)}function s(t,e){var n=Object(u.a)(t),c=Object(o.a)(n,e);return Object(r.b)(c)}function b(t,e){var n=Object(u.a)(t,e),c=Object(i.a)(n);return Object(r.a)(c)}function O(t,e){var n=Object(u.a)(t,e),c=Object(a.a)(n);return Object(r.c)(c)}},97:function(t,e,n){"use strict";function r(t,e,n){var r=e.opacity,c=e.zIndex;null!=r&&r!==n.opacity&&t.setOpacity(r),null!=c&&c!==n.zIndex&&t.setZIndex(c)}n.d(e,"a",(function(){return r}))},98:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(94),c=n(95),u=n(81),a=n(97),o=n(84),i=Object(c.e)((function(t,e){var n=t.url,c=Object(r.a)(t,["url"]);return{instance:new o.TileLayer(n,Object(u.a)(c,e)),context:e}}),a.a)}}]);
//# sourceMappingURL=pages-multiple-tile-layers-js.4eada7eb.chunk.js.map