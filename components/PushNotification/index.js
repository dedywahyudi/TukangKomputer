
import React, { Component } from 'react';
import { Switch } from 'react-native';
import { Container, Content, Icon, Text, List, ListItem, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import theme from '../themes/base-theme';

export default class PushNotification extends Component { // eslint-disable-line

  constructor(props){
    super(props);

    this.state = {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
      swith3: false,
    };
  }

  render (){
    return (
      <Container theme={theme} style={styles.container}>
        <Content>
          <List>
            <ListItem style={[styles.noMarginLeft, styles.noBorder]}>
              <Grid>
                <Col>
                  <Text>
                    Services Activities
                  </Text>
                </Col>
                <Col>
                  <Switch
                    onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                    value={this.state.falseSwitchIsOn} />
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={[styles.noMarginLeft, styles.noBorder]} >
              <Grid>
                <Col>
                  <Text>
                    Tukang Service Promo
                  </Text>
                </Col>
                <Col>
                  <Switch
                    onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn} />
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={[styles.noMarginLeft, styles.noBorder]} >
              <Grid>
                <Col>
                  <Text>
                    Special Product Promo
                  </Text>
                </Col>
                <Col>
                  <Switch
                    onValueChange={(value) => this.setState({swith3: value})}
                    value={this.state.swith3} />
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Button block style={styles.btnEmail}>
                <Text style={styles.textBlack} >Save</Text>
              </Button>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
