
import React, { Component } from 'react';
import { Container, Button, Content, Icon, Text, List, ListItem, Input, InputGroup } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import theme from '../themes/base-theme';

export default class LupaPassword extends Component { // eslint-disable-line
  render (){
    return (
      <Container theme={theme} style={styles.container}>
        <Content>
          <List>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <Text>Masukkan alamat email anda untuk melakukan perubahan password</Text>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <InputGroup style={styles.loginInput}>
                <Icon name="ios-person" style={{ color: '#ddd', marginLeft: 5 }} />
                <Input placeholder="Email" />
              </InputGroup>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <Button block style={styles.btnEmail} onPress={Actions.tabProfileNotLogin}>
                <Text style={styles.textBlack} >Kirim</Text>
              </Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
