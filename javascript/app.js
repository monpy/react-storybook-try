import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';

import AuthorizedAvatar from './components/authorized_avatar';
import { actions as authActions } from './modules/auth';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');
  const store = createStore();
  store.dispatch(
    authActions.setUser({
      id: 1,
      role: null,
      name: 'example'
    })
  );

  render(
    <Provider store={store}>
      <div>
        <AuthorizedAvatar />
      </div>
    </Provider>,
    root
  );
});
