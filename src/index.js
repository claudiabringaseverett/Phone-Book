import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { contacts } from './reducers/contacts';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

const store = createStore(contacts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

