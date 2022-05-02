import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '@store';
import App from '@components/App';
import Theme from '@components/style/Theme';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Theme>
        <App />
      </Theme>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
