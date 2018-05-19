import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './app/App';
import Welcome from './welcome/Welcome';
import Settings from './settings/Settings';
import Question from './question/Question';

import styles from './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className={styles.wrapper}>
      <Route path="/" component={App} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/settings" component={Settings} />
      <Route path="/question" component={Question} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
