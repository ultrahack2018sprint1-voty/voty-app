import React, { Component } from 'react';
import classnames from 'classnames';
import { map } from 'lodash/fp';

import styles from './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stands: [
        { id: 1, name: "Brgrs", selected: true },
        { id: 2, name: "Sausages", selected: true },
        { id: 3, name: "Fries", selected: true },
      ],
    }
  }

  handleChange = (standId) => {
    const newStands = this.state.stands.map(stand => {
      if (stand.id === standId) {
        return { ...stand, selected: !stand.selected }
      }
      return stand;
    });
    this.setState({ stands: newStands });
  }

  renderStand = (stand) => (
    <div className={classnames('pretty p-switch p-fill', styles.stand)} key={stand.id}>
      <input
        name={`stand-stand.id`}
        type="checkbox"
        checked={stand.selected}
        onChange={() => this.handleChange(stand.id)}
        />
      <div className="state p-success">
        <label>{stand.name}</label>
      </div>
    </div>
  )

  render() {
    const { stands } = this.state;

    return (
      <div className={styles.section}>
        <div className={styles.stands}>
          <h3>Get notifications from...</h3>
          { map(this.renderStand, stands) }
        </div>
        <button>Send</button>
      </div>
    )
  }
}

export default Settings;