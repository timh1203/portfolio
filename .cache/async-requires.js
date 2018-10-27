// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/timh1203/portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/timh1203/portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/timh1203/portfolio/src/pages/Index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/timh1203/portfolio/.cache/data.json")

