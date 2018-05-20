import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { map } from 'lodash/fp';
import styles from './Question.css';

class Question extends Component {
  handleAnswerClick = () => {
    const { history } = this.props;
    history.push('/question?waiting');
  }

  renderAnswer = answer =>
    <button key={answer} onClick={this.handleAnswerClick.bind(this)}>{answer}</button>

  render() {
    const {
      location: { search },
      question,
      partner_title,
    } = this.props;

    return (
      <div className={styles.section}>
        <div className={styles.logo} />
        { search !== '?waiting' && question && (
          <div className={styles.question}>
            <h3>Question from: {partner_title}</h3>
            <p>{question.title}</p>
            <div className={styles.answers}>
              { map(this.renderAnswer, question.options) }
            </div>
          </div>
        )}
        { search === '?waiting' && (
          <div className={styles.sectionClock}>
            <div className={styles.clock} />
            <p>Waiting for results...</p>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(Question);