import React from 'react';
import styles from './section.scss';

export default class Section extends React.Component {
  render() {
    return (
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>{this.props.title}</h2>
          <p>{this.props.text}</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
