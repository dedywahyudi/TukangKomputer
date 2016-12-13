
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Tabs } from 'native-base';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import styles from './styles';
import theme from '../themes/base-theme';

class TabMyServices extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container theme={theme}>
        <View style={styles.mainColumn}>
          <Tabs locked style={{ borderBottomWidth: 0 }}>
            <TabOne tabLabel="Active Services" />
            <TabTwo tabLabel="Service History" />
          </Tabs>
        </View>
      </Container>
    );
  }
}

export default TabMyServices;
