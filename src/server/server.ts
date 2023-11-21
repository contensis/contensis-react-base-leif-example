import { path as appRootPath } from 'app-root-path';
import ZengentiAppServer from '@zengenti/contensis-react-base';
import ReactApp from '../app/App';

import withReducers from '../app/redux/reducers';
import withSagas from '../app/redux/sagas';
import withEvents from '../app/redux/withEvents';

import routes from '../app/routes';
import packagejson from '../../package.json';

import ServerFeatures from '../server/features/configure';

ZengentiAppServer.start(
  ReactApp,
  {
    appRootPath,
    routes,
    stateType: 'js',
    withReducers,
    withSagas,
    withEvents,
    disableSsrRedux: false,
    reverseProxyPaths: [],
    // Some information about the project and the build to pass to the start config
    packagejson,
    scripts: { startup: `startup-${packagejson.version}.js` },
    staticFolderPath: '/static',
    staticRoutePath: '/static',
    // The HTML templates we will render the app into
    templates: {
      html: 'dist/index.html',
      static: 'dist/index_static.html',
      fragment: 'dist/index_fragment.html',
    },
  },
  // Configure any server-side features such as sitemap or REST api's
  ServerFeatures
);

const app = ZengentiAppServer.app;

app.emit('ready');

export { app };
