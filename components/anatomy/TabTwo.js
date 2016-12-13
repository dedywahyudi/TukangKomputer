
import React, { Component } from 'react';

import { Container, Content, List, Icon, ListItem, Text, Thumbnail, View, Badge } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

export default class TabTwo extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <List>
            {/* <ListItem itemDivider>
              <Text>2016</Text>
            </ListItem> */}
            <ListItem iconLeft iconRight>
              <Icon name="ios-desktop-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-laptop-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-bug-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-folder-open-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-construct-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-link-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-sync-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-print-outline" style={styles.sidebarIcon} />
              <Grid style={styles.dataGrid}>
                <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
                <Row><Text style={styles.statusCompleted}>&#11044; Completed: 20 November 2016</Text></Row>
              </Grid>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
