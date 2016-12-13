
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { View } from 'react-native';
import { Tabs } from 'native-base';

import TabOne from './TabOne';
import TabTwo from './TabTwo';

import styles from './styles';

const {
  replaceAt,
} = actions;

class TabHistory extends Component { // eslint-disable-line

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('anatomy', { key: route }, this.props.navigation.key);
  }

  render() { // eslint-disable-line
    return (
      <View style={styles.mainColumn}>
        <Tabs locked style={{ borderBottomWidth: 0 }}>
          <TabOne tabLabel="Active Services" />
          <TabTwo tabLabel="Service History" />
        </Tabs>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(TabHistory);
