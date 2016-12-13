import React, { Component } from 'react';
import {
  Text,
  Spinner,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent',
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
  },

  loadingImage: {
    width: 60,
    height: 60,
  },
};

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
      <View>
        <Swiper
          horizontal={true}
          style={styles.wrapper}
          height={150}
          loop={true}
          autoplay={true}
          autoplayTimeout={5}
          autoplayDirection={true}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.5)',
                width: 6,
                height: 6,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 6,
                height: 6,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: 10,
          }}
        >
          {
            this.state.imgList.map((item, i) =>
              <Slide
                loadHandle={this.loadHandle}
                loaded={!!this.state.loadQueue[i]}
                uri={item}
                i={i}
                key={i}
              />)
          }
        </Swiper>
        {/* <Swiper
          style={styles.wrapper}
          height={150}
          horizontal={true}
          autoplay
          dot={
          <View
          style={{
          backgroundColor: 'rgba(0,0,0,.1)',
          width: 6,
          height: 6,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
          }}
          />
          }
          activeDot={
          <View
          style={{
          backgroundColor: '#fff',
          width: 6,
          height: 6,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3
          }}
          />
          }
          paginationStyle={{
          bottom: 5,
          }}
          >
          {
          this.state.imgList.map((item, i) =>
          <Slide
          loadHandle={this.loadHandle}
          loaded={!!this.state.loadQueue[i]}
          uri={item}
          i={i}
          key={i}
          />
          )
          }
        </Swiper> */}
      </View>
    );
  }
}
