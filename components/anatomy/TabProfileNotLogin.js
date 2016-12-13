
import React, { Component } from 'react';
import { Button, Content, Icon, Text, List, ListItem, Badge, View} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

export default class TabProfileNotLogin extends Component { // eslint-disable-line
  render (){
    return (
      <Content>
        <List style={styles.headerLogin}>
          <ListItem style={styles.noBorder}>
            <Text style={styles.rowUser}>Welcome, Dedy Wahyudi</Text>
          </ListItem>
          <ListItem style={styles.noBorder}>
            <Text style={styles.rowUserLogin}>Logged in with Facebook</Text>
          </ListItem>
          <ListItem style={styles.noBorder}>
            <Button block style={styles.btnEditProfile}>
              <Text style={{ color: '#474745' }} >EDIT PROFILE</Text>
            </Button>
          </ListItem>
        </List>

        <List>
          <List>
            <ListItem iconLeft iconRight>
              <Icon name="ios-cash" style={{ color: '#4b4b4b', width: 30 }} />
              <Text>Payment</Text>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-megaphone" style={{ color: '#4b4b4b', width: 30 }} />
              <Text>Newsletter & Promo Info</Text>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-switch" style={{ color: '#4b4b4b', width: 30 }} />
              <Text>Application Settings</Text>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
            <ListItem iconLeft iconRight>
              <Icon name="ios-power" style={{ color: '#4b4b4b', width: 30 }} />
              <Text>Logout</Text>
              <Icon name="ios-arrow-forward" style={styles.dataArrow} />
            </ListItem>
          </List>
        </List>

      </Content>
    );
  }
}
