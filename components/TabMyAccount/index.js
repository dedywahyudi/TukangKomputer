
import React, { Component } from 'react';

import TabProfileLogin from './TabProfileLogin';
import TabProfileNotLogin from './TabProfileNotLogin';

import styles from './styles';

export default class TabProfile extends Component { // eslint-disable-line
  render(){
    return (
      <TabProfileLogin />
    );
  }
}
