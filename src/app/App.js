import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sockette from 'sockette';

import Welcome from '../welcome/Welcome';
import Settings from '../settings/Settings';
import Question from '../question/Question';
import Result from '../result/Result';

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
    const { history } = this.props;

    console.log('Received:', e);
    console.log('Message:', e.data);

    const body = JSON.parse(e.data);

    if (body.mutation === 'QUESTION') {
      this.setState({
        question: body.question,
        partner_title: body.partner_title,
      })
      history.push('/question');
    }
    else if (body.mutation === 'WINNER_SELECTION') {
      this.setState({
        winner_access_code: body.winner_access_code,
      })
      history.push('/result');
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
          <div className={styles.contentWrapper}>
          <Switch>
            <Route path="/welcome" render={() =>
              <Welcome {...this.state} openConnection={this.openConnection} />
            } />
            <Route path="/settings" render={() => <Settings {...this.state} />} />
            <Route path="/question" render={() => <Question {...this.state} />} />
            <Route path="/result" render={() => <Result {...this.state} />} />
          </Switch>
          </div>
      </div>
    );
  }
}

export default App;
