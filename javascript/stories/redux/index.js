import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../../store';

export const redux = (stories, initialStates = {}) => {
  const store = createStore(initialStates);

  stories.addDecorator(story => {
    return <ReduxProvider store={store}>{story()}</ReduxProvider>;
  });

  return store;
};
