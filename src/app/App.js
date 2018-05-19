import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sockette from 'sockette';

import Welcome from '../welcome/Welcome';
import Settings from '../settings/Settings';
import Question from '../question/Question';

import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: null,
    }
  }

  openConnection = () => {
    const ws = new Sockette(process.env.REACT_APP_WS_URL, {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: this.onOpen,
      onmessage: this.onMessage,
      onreconnect: e => console.log('Reconnecting...', e),
      onmaximum: e => console.log('Stop Attempting!', e),
      onclose: e => console.log('Closed!', e),
      onerror: e => console.log('Error:', e)
    });

    this.setState({ ws });
  }

  closeConnection() {
    const { ws } = this.state;
    if (ws) {
      ws.close();
    }
  }

  onMessage = (e) => {
    console.log('Received:', e);
    console.log('Message:', e.data);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.logo} />
        <BrowserRouter>
          <div className={styles.contentWrapper}>
            <Route path="/welcome" render={() => <Welcome {...this.state} />} />
            <Route path="/settings" render={() => <Settings {...this.state} />} />
            <Route path="/question" render={() => <Question {...this.state} />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
