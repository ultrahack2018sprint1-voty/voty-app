import React, { Component } from 'react';
import { map } from 'lodash/fp';

import styles from './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stands: [
        { id: 1, name: "Brgrs" },
        { id: 2, name: "Sausages" },
        { id: 3, name: "Fries" },
      ],
    }
  }

  renderStand = (stand) => (
    <div key={stand.id}>
      <img src="http://placekitten.com/280/85" alt="" />
    </div>
  )

  render() {
    const { stands } = this.state;

    return (
      <div className={styles.section}>
        <h3>Main event</h3>
        <div className={styles.logo}>
          <img src="http://placekitten.com/280/160" alt="" />
        </div>
        <div className={styles.stands}>
          <h3>Stands</h3>
          { map(this.renderStand, stands) }
        </div>
      </div>
    )
  }
}

export default Settings;