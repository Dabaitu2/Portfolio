webpackHotUpdate("styles",{

/***/ "./pages/projects/dual-layer-solution.less":
/*!*************************************************!*\
  !*** ./pages/projects/dual-layer-solution.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main-color":"main-color___2AbCi","split-line-color":"split-line-color___2wupk","layout":"layout___l-LZX","solution-layout":"solution-layout___FSfQa"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1579887772213");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.44ac63b9c6a8a9ed101c.hot-update.js.map