import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../Tabs.module.css';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let classes = [styles.tabListItem];

    if (activeTab === label) {
      classes.push(styles.tabListActive);
    }

    return (
      <li
        className={classes.join(' ')}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

  
export default Tab;