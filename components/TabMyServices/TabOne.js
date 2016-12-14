import React, { PropTypes } from 'react';
import { Container, Content, List, Icon, ListItem, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import EmptyService from './EmptyService';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const TabOne = (props, context) => {
  const drawer = context.drawer;
  return (
    <Container>
      <Content>
        <List>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight onPress={Actions.tabHome}>
            <Icon name="ios-desktop-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-laptop-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusRed}>&#11044; Telat dari Estimasi Selesai: 16 july 2016</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-bug-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusYellow}>&#11044; 1 Hari dari Estimasi Selesai: 16 july 2016</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-folder-open-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusYellow}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-construct-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-link-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-sync-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-print-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-link-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-sync-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-print-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusRed}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-link-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusBlue}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
            <Icon name="ios-sync-outline" style={styles.sidebarIcon} />
            <Grid style={styles.dataGrid}>
              <Row><Text style={styles.rowTitle}>Order Service #1132123</Text></Row>
              <Row><Text style={styles.statusGreen}>&#11044; In-progress</Text></Row>
            </Grid>
            <Icon name="ios-arrow-forward" style={styles.dataArrow} />
          </ListItem>
          <ListItem style={styles.noLeftMargin} iconLeft iconRight>
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
};

TabOne.contextTypes = contextTypes;
TabOne.PropTypes = PropTypes;

export default TabOne;
