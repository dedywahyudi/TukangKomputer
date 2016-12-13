
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, List, Icon, ListItem, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';
import EmptyService from './EmptyService';

const {
  replaceAt,
} = actions;

class TabOne extends Component { // eslint-disable-line
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
      // <EmptyService />
      <Container style={styles.container}>
        <Content padder>

          <List>
            <ListItem iconLeft iconRight onPress={() => this.replaceAt('orderdetail')}>
              <Icon name="ios-desktop-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-laptop-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; Telat dari Estimasi Selesai: 16 july 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-bug-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusYellow}>&#11044; 1 Hari dari Estimasi Selesai: 16 july 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-folder-open-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusYellow}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-construct-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-link-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-sync-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-print-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
          </List>
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

export default connect(mapStateToProps, bindAction)(TabOne);
