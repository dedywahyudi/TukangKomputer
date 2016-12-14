
import React, { Component } from 'react';
import { Container, Button, Content, Icon, Text, List, ListItem, Input, InputGroup} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from './styles';
import theme from '../themes/base-theme';

export default class TabProfileLogin extends Component { // eslint-disable-line
  render (){
    return (
      <Container theme={theme} style={styles.container}>
        <Content padder>
          <List>
            <ListItem style={styles.noLeftMargin} style={styles.noBorder}>
              <Button block style={styles.btnFb}>
                <Icon name="logo-facebook" style={{ color: '#ffffff' }} />
                <Text>Masuk melalui Facebook</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.noLeftMargin} style={styles.noBorder}>
              <Button block style={styles.btnGoogle}>
                <Icon name="logo-googleplus" style={{ color: '#ffffff' }} />
                <Text>Masuk melalui Google+</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.noLeftMargin} style={styles.loginListOr}>
              <Text style={styles.loginTextOr}>Atau Masuk melalui Email dan Password:</Text>
            </ListItem>
            <ListItem style={styles.noLeftMargin} style={styles.noBorder}>
              <InputGroup style={styles.loginInput}>
                <Icon name="ios-person" style={{ color: '#ddd', marginLeft: 5 }} />
                <Input placeholder="Email" />
              </InputGroup>
            </ListItem>
            <ListItem style={styles.noLeftMargin} style={styles.noBorder}>
              <InputGroup style={styles.loginInput}>
                <Icon name="ios-unlock" style={{ color: '#ddd', marginLeft: 5 }} />
                <Input placeholder="Password" secureTextEntry />
              </InputGroup>
            </ListItem>
            <ListItem style={styles.noLeftMargin} style={styles.noBorder}>
              <Button block style={styles.btnEmail}>
                <Text style={{ color: '#ffffff' }} >Login</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.noLeftMargin} iconLeft iconRight style={styles.noBorder}>
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
      </Container>
    );
  }
}
