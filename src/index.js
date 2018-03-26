import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import ToDo from './modules/ToDo';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const MountPoint = () => (
  <Provider store={configureStore()}>
    <ToDo />
  </Provider>
);

ReactDOM.render(<MountPoint />, document.getElementById('root'));
registerServiceWorker();
