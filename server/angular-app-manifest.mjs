
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://blduranc.github.io/rick-morty-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rick-morty-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 675, hash: 'aab61a5e8834232d8517f4d5bb6c246c2d32cda1d6758dd775af642772abf2c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: 'fc22616255dc2fdfffaf0e21590ebf26d9098b8919989f65555be78e5a516db2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3375, hash: 'e5b790263e21d7f005bf063d25d09cd2a59a90e5f9e6632ea91994984e619e6a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-537OEUWR.css': {size: 54, hash: 'nHiEfM00/EE', text: () => import('./assets-chunks/styles-537OEUWR_css.mjs').then(m => m.default)}
  },
};
