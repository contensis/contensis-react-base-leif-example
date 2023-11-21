// the entry point for the rest of the app
import ClientApp from '@zengenti/contensis-react-base/client';
import ReactApp from '../app/App';

import routes from '../app/routes';
import withReducers from '../app/redux/reducers';
import withSagas from '../app/redux/sagas';
import withEvents from '../app/redux/withEvents';

import { AppConfig } from '@zengenti/contensis-react-base';

const config: AppConfig = {
  routes,
  stateType: 'js',
  withReducers,
  withSagas,
  withEvents,
};

new ClientApp(ReactApp, config);
