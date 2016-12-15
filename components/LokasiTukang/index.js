import React, { Component } from 'react';
import styles from './styles';

const MapView = require('react-native-maps');

class LokasiTukang extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

    );
  }
}

export default LokasiTukang;
