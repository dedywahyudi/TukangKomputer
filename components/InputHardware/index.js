import React, { Component } from 'react';
import { Container, Button, Icon, List, ListItem, Text, InputGroup, Input, View } from 'native-base';
import { TextInput } from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';

import myTheme from '../themes/base-theme';
import styles from './styles';

export default class InputHardware extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container theme={myTheme} style={styles.container}>
        <View>
          <List>
            <ListItem itemDivider>
              <Text>Merk/Type Hardware:</Text>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <InputGroup style={styles.textInput}>
                <Input placeholder="Masukkan Merk/Type Desktop Anda: " />
              </InputGroup>
            </ListItem>
            <ListItem itemDivider>
              <Text>Deskripsi Permasalahan:</Text>
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <TextInput
                placeholder="Jelaskan secara detail apa yang bisa kami bantu…"
                multiline={true}
                numberOfLines={6}
                style={styles.multiline}
              />
            </ListItem>
            <ListItem style={[styles.noBorder, styles.noLeftMargin]}>
              <Button block style={styles.btnDark} onPress={Actions.lokasiTukang}>
                <Text style={styles.textBlack} >PILIH LOKASI ANDA</Text>
              </Button>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}
