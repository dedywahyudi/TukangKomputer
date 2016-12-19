import React, { Component } from 'react';
import { Container, Content, Button, Icon, List, ListItem, Text, Thumbnail, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';

import myTheme from '../themes/base-theme';
import styles from './styles';

const sankhadeep = require('../../img/contacts/sankhadeep.png');

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


  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Content>
          <List>
            <ListItem style={styles.listGreen}>
              <Text style={styles.listText}>Service Status: &#11044; In-progress</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Service Order No: #1217534</Text>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noMarginLeft]}>
              <Grid style={styles.tukangInfo}>
                <Col>
                  <Button rounded primary style={styles.buttonAlign}>
                    <Icon name="ios-call" style={styles.iconAlign} />
                  </Button>
                </Col>
                <Col>
                  <TouchableOpacity onPress={Actions.profileDetail}>
                    <Thumbnail rounded size={100} source={sankhadeep} style={styles.thumbAlign} onPress={Actions.profiledetail} />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <Button rounded primary style={styles.buttonAlign}>
                    <Icon name="ios-text" style={styles.iconAlign} />
                  </Button>
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.note]}>
              <Grid>
                <Row style={styles.rowDetail}>
                  <Text style={styles.textCenter}>Nama Tukang</Text>
                </Row>
                <Row>
                  <Text style={styles.textNotes}>Aktif Sejak: September 2016</Text>
                </Row>
              </Grid>
            </ListItem>
            {/* <ListItem style={[styles.noBorder, styles.skillList]}>
              <Grid style={styles.tukangInfo}>
              <Row>
              <Icon name="ios-desktop-outline" style={styles.skillIcon} />
              <Icon name="ios-laptop-outline" style={styles.skillIcon} />
              <Icon name="ios-print-outline" style={styles.skillIcon} />
              <Icon name="ios-bug-outline" style={styles.skillIcon} />
              </Row>
              </Grid>
            </ListItem> */}
            <ListItem itemDivider>
              <Text>Deskripsi Masalah</Text>
            </ListItem>
            <ListItem style={styles.noBorder} >
              <Text>
                <Text style={styles.rowNotes}>
                  Tanggal Selesai: 29 November 2016 {"\n"}
                </Text>
                <Text style={styles.rowTitle}>
                  Setelah dihidupkan PC tidak bereaksi apa-apa, tidak ada tampilan di monitor, tidak ada lampu indikator (led) yang menyala, kipas power supply tidak berputar, lampu indikator pada monitor tidak menyala.
                </Text>
              </Text>
            </ListItem>
            <ListItem style={styles.noBorder} >
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
                      disabled={true}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      starColor={'#F6C819'}
                      starSize={30}
                    />
                  </Row>
                </Col>
              </Grid>
            </ListItem>
            <ListItem style={styles.noBorder}>
              <Text>
                <Text style={styles.rowNotes}>
                  Martha Hidayat | 20 Agustus 2016{"\n"}
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

export default OrderDetail;
