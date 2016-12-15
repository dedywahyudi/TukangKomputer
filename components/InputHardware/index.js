import React, { Component } from 'react';
import { Container, Button, Icon, List, ListItem, Text, Thumbnail, View } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import StarRating from 'react-native-star-rating';

import myTheme from '../themes/base-theme';
import styles from './styles';

const sankhadeep = require('../../img/contacts/sankhadeep.png');

export default class InputHardware extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container theme={myTheme} style={styles.container}>
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
            <ListItem style={styles.noBorder}>
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
