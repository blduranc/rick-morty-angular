
export default {
  basePath: 'https://blduranc.github.io/rick-morty-angular',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
