
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';

import myTheme from '../../themes/base-theme';
import styles from './styles';

const {
  replaceAt,
} = actions;

const sankhadeep = require('../../../img/contacts/sankhadeep.png');

class ProfileDetail extends Component {

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
    this.props.replaceAt('profiledetail', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('anatomy')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Profile Detail</Title>
        </Header>

        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Data Detail:</Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Thumbnail rounded size={60} source={sankhadeep} />
              <Text>Nama Tukang</Text>
              <Text note>Aktif Sejak: September 2016</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Keahlian:</Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('profiledetail')}>
              <View style={styles.skillList}>
                <Icon name="ios-desktop-outline" style={styles.skillIcon} />
                <Icon name="ios-laptop-outline" style={styles.skillIcon} />
                <Icon name="ios-print-outline" style={styles.skillIcon} />
                <Icon name="ios-bug-outline" style={styles.skillIcon} />
              </View>
            </ListItem>
            <ListItem itemDivider>
              <Text>Total Rating:</Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <View style={styles.skillList}>
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
              </View>
            </ListItem>
            <ListItem itemDivider>
              <Text>Daftar Service Terakhir:</Text>
            </ListItem>
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

export default connect(mapStateToProps, bindAction)(ProfileDetail);
