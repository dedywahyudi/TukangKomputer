
import React, { Component } from 'react';
import { Button, Content, Icon, Text, List, ListItem, Input, InputGroup} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';

export default class TabProfileLogin extends Component { // eslint-disable-line
  render (){
    return (
      <Content padder>
        <List>
          <ListItem style={styles.noBorder}>
            <Button block style={styles.btnFb}>
              <Icon name="logo-facebook" style={{ color: '#ffffff' }} />
              <Text>Masuk melalui Facebook</Text>
            </Button>
          </ListItem>
          <ListItem style={styles.noBorder}>
            <Button block style={styles.btnGoogle}>
              <Icon name="logo-googleplus" style={{ color: '#ffffff' }} />
              <Text>Masuk melalui Google+</Text>
            </Button>
          </ListItem>
          <ListItem style={styles.loginListOr}>
            <Text style={styles.loginTextOr}>Atau Masuk melalui Email dan Password:</Text>
          </ListItem>
          <ListItem style={styles.noBorder}>
            <InputGroup style={styles.loginInput}>
              <Icon name="ios-person" style={{ color: '#ddd', marginLeft: 5 }} />
              <Input placeholder="Email" />
            </InputGroup>
          </ListItem>
          <ListItem style={styles.noBorder}>
            <InputGroup style={styles.loginInput}>
              <Icon name="ios-unlock" style={{ color: '#ddd', marginLeft: 5 }} />
              <Input placeholder="Password" secureTextEntry />
            </InputGroup>
          </ListItem>
          <ListItem style={styles.noBorder}>
            <Button block style={styles.btnEmail}>
              <Text style={{ color: '#ffffff' }} >MASUK</Text>
            </Button>
          </ListItem>
          <ListItem iconLeft iconRight style={styles.noBorder}>
            <Grid>
              <Col>
                <Text style={styles.loginTextDaftar}>Daftar Disini!</Text>
              </Col>
              <Col>
                <Text style={styles.loginTextLupaPassword}>Lupa Password</Text>
              </Col>
            </Grid>
          </ListItem>
        </List>

      </Content>
    );
  }
}
