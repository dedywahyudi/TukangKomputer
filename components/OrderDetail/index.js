
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

class OrderDetail extends Component {

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
    this.props.replaceAt('orderdetail', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('anatomy')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Order Detail</Title>
        </Header>

        <Content>
          <List>
            <ListItem style={styles.listGreen}>
              <Text style={styles.listText}>Service Status: &#11044; In-progress</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Service Order No: #1217534</Text>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Thumbnail rounded size={60} source={sankhadeep} />
              <Text>Nama Tukang</Text>
              <Text note>Aktif Sejak: September 2016</Text>
              <View style={styles.skillList}>
                <Icon name="ios-desktop-outline" style={styles.skillIcon} />
                <Icon name="ios-laptop-outline" style={styles.skillIcon} />
                <Icon name="ios-print-outline" style={styles.skillIcon} />
                <Icon name="ios-bug-outline" style={styles.skillIcon} />
              </View>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Button block rounded primary>
                <Icon name="ios-call" style={{ color: '#ffffff' }} />
                <Text>Telephone</Text>
              </Button>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Button block rounded primary>
                <Icon name="ios-text" style={{ color: '#ffffff' }} />
                <Text>SMS</Text>
              </Button>
            </ListItem>
            <ListItem itemDivider>
              <Text>Deskripsi Masalah</Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('orderdetail')}>
              <Text>
                <Text style={styles.rowNotes}>
                  Tanggal Selesai: 29 November 2016 {"\n"}
                </Text>
                <Text style={styles.rowTitle}>
                  Setelah dihidupkan PC tidak bereaksi apa-apa, tidak ada tampilan di monitor, tidak ada lampu indikator (led) yang menyala, kipas power supply tidak berputar, lampu indikator pada monitor tidak menyala.
                </Text>
              </Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('orderdetail')}>
              <Text>
                <Text style={styles.rowNotes}>
                  Tanggal Selesai: 29 November 2016 {"\n"}
                </Text>
                <Text style={styles.rowTitle}>
                  Setelah dihidupkan PC tidak bereaksi apa-apa, tidak ada tampilan di monitor, tidak ada lampu indikator (led) yang menyala, kipas power supply tidak berputar, lampu indikator pada monitor tidak menyala.
                </Text>
              </Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('orderdetail')}>
              <Text>
                <Text style={styles.rowNotes}>
                  Tanggal Selesai: 29 November 2016 {"\n"}
                </Text>
                <Text style={styles.rowTitle}>
                  Setelah dihidupkan PC tidak bereaksi apa-apa, tidak ada tampilan di monitor, tidak ada lampu indikator (led) yang menyala, kipas power supply tidak berputar, lampu indikator pada monitor tidak menyala.
                </Text>
              </Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('orderdetail')}>
              <Text>
                <Text style={styles.rowNotes}>
                  Tanggal Selesai: 29 November 2016 {"\n"}
                </Text>
                <Text style={styles.rowTitle}>
                  Setelah dihidupkan PC tidak bereaksi apa-apa, tidak ada tampilan di monitor, tidak ada lampu indikator (led) yang menyala, kipas power supply tidak berputar, lampu indikator pada monitor tidak menyala.
                </Text>
              </Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Rating Pengguna</Text>
            </ListItem>
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('orderdetail')}>
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
            <ListItem style={styles.noBorder} onPress={() => this.replaceAt('orderdetail')}>
              <Text>
                <Text style={styles.rowNotes}>
                  Martha Hidayat {"\n"}
                </Text>
                <Text style={styles.rowTitle}>
                  “Service Bintang 5. Hasil kerjanya rapi,
                  bakalan order lagi. Thanks!”
                </Text>
              </Text>
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

export default connect(mapStateToProps, bindAction)(OrderDetail);
