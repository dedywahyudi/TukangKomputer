
import React, { Component } from 'react';

import { Container, Content, List, Icon, ListItem, Text, View, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

class EmptyService extends Component { // eslint-disable-line
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

export default EmptyService;
