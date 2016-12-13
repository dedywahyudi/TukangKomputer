
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, View, Input, InputGroup } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';

import myTheme from '../../themes/base-theme';
import styles from './styles';

const {
  replaceAt,
} = actions;

const sankhadeep = require('../../../img/contacts/sankhadeep.png');

class ReviewScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  replaceAt(route) {
    this.props.replaceAt('reviewscreen', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('anatomy')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Review Screen</Title>
        </Header>

        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Berikan Review Anda untuk Service ini:</Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Thumbnail rounded size={60} source={sankhadeep} />
              <Text>Nama Tukang</Text>
              <Text note>Aktif Sejak: September 2016</Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('reviewscreen')}>
              <Grid>
                <Col>
                  <Row>
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      starColor={'#FF8D0D'}
                      starSize={30}
                    />
                  </Row>
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Input
                multiline = {true}
                numberOfLines = {5}
                style={styles.textReview}
                placeholder="Komentar dan Saran"
              />
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Button block  warning>
                <Icon name="ios-send" style={{ color: '#ffffff' }} />
                <Text>Kirim Ulasan Anda</Text>
              </Button>
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

export default connect(mapStateToProps, bindAction)(ReviewScreen);
