import React, { Component } from 'react';
import { Container, Button, Icon, List, ListItem, Text, Thumbnail, View } from 'native-base';

import myTheme from '../themes/base-theme';
import styles from './styles';

const Slide = props => {
  return (<View style={styles.slide}>
    <Image
      onLoad={props.loadHandle.bind(null, props.i)}
      style={styles.image} source={{ uri: props.uri }}
    />
    {!props.loaded && <View style={styles.loadingView}>
      <Text>Loading</Text>
    </View>}
  </View>);
};

// const cardOne = require('../../../img/swiper-1.png');
// const cardTwo = require('../../../img/swiper-2.png');
// const cardThree = require('../../../img/swiper-3.png');
// const cardFour = require('../../../img/swiper-4.png');

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
        'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
        'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
        'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg',
      ],
      loadQueue: [0, 0, 0, 0],
    };
    this.loadHandle = this.loadHandle.bind(this);
  }
  loadHandle(i) {
    const loadQueue = this.state.loadQueue;
    loadQueue[i] = 1;
    this.setState({
      loadQueue,
    });
  }

  render() {
    return (
      <Container>
        <View>
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
              {/* <Grid>
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
              </Grid> */}
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
        </View>
      </Container>
    );
  }
}
