
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/dci/Dropbox/web-dev-other/Courses/Frontend Masters/Jason Lengstorf/jamstack-intro-exercises/dashboard/.cache/dev-404-page.js")),
  "component---src-pages-dashboard-js": preferDefault(require("/home/dci/Dropbox/web-dev-other/Courses/Frontend Masters/Jason Lengstorf/jamstack-intro-exercises/dashboard/src/pages/dashboard.js")),
  "component---src-pages-index-js": preferDefault(require("/home/dci/Dropbox/web-dev-other/Courses/Frontend Masters/Jason Lengstorf/jamstack-intro-exercises/dashboard/src/pages/index.js"))
}

