import loadable from '@loadable/component';
import { StaticRoute } from '@zengenti/contensis-react-base';
import { HomePageProps } from '~/pages/home/home';
import { injectSearch } from '~/redux/dynamic';

const Homepage = loadable<HomePageProps>(
  () => import(/* webpackChunkName: "home-page" */ '~/pages/home/home.page')
);

const staticRoutes: StaticRoute[] = [
  {
    path: '/',
    exact: true,
    fetchNode: true,
    component: Homepage,
    injectRedux: injectSearch,
  },
];

export default staticRoutes;
