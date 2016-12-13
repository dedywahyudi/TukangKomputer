
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, List, Icon, ListItem, Text, View, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

const {
  replaceAt,
} = actions;

class EmptyService extends Component { // eslint-disable-line
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
      <Container style={styles.container}>
        <Content padder>
          {/* <ListItem itemDivider>
            <Text>2016</Text>
          </ListItem> */}
          <View style={styles.viewEmpty}>
            <Icon name="ios-warning" style={styles.sidebarIcon} />
            <Text style={styles.textEmpty}>Anda belum memiliki History Service.</Text>
            <Button block style={styles.btnEmail}>
              <Text style={{ color: '#ffffff' }}>CARI TUKANG SERVICE</Text>
            </Button>
          </View>
        </Content>
      </Container>
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

export default connect(mapStateToProps, bindAction)(EmptyService);
