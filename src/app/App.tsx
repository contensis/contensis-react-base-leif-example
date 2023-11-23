import React from 'react';
import { hot } from 'react-hot-loader';
import { RouteLoader } from '@zengenti/contensis-react-base/routing';
import { AppRootProps } from '@zengenti/contensis-react-base';
import GlobalStyle from './theme/global';

const AppRoot = (props: AppRootProps) => {
  return (
    <div id="app-root">
      <GlobalStyle />
      <RouteLoader {...props} />
    </div>
  );
};

export default hot(module)(AppRoot);
