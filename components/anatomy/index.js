import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Container, Header, Title, Thumbnail, Button, Icon, Footer, FooterTab } from 'native-base';
// import SvgUri from 'react-native-svg-uri';
// import Reactotron from 'reactotron-react-native';

import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';

import TabHome from './TabHome';
import TabProfile from './TabProfile';
import TabHistory from './TabHistory';

const logoTukang = require('../../../img/logo-kitchen-sink.png');
const launchscreenBg = require('../../../img/launchscreen-bg.png');

class Anatomy extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      active: false,
      // tab4: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      // tab4: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      // tab4: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      // tab4: false,
    });
  }

  // toggleTab4() {
  //   this.setState({
  //     tab1: false,
  //     tab2: false,
  //     tab3: false,
  //     tab4: true,
  //   });
  // }

  render() {
    let tabContent;
    if (this.state.tab1 === true) {
      tabContent = (
        <View style={styles.mainColumn}>
          <TabHome locked />
        </View>
  );
    } else if (this.state.tab2 === true) {
      tabContent = (
        <View style={styles.mainColumn}>
          <TabHistory locked />
        </View>
      );
    } else {
      tabContent = (
        <View style={styles.mainColumn}>
          <TabProfile locked />
        </View>
      );
    }
    // Reactotron.log('hello rendering world');
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>

          <Title transparent>
            TukangKomputer
          </Title>

          {/* <Button transparent>
            <Icon name="ios-arrow-forward" />
          </Button> */}

          {/* <Icon style={styles.iconLogo} /> */}
          {/* <Thumbnail source={logoTukang} size={80} /> */}
        </Header>

        {tabContent}

        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
              Home
              <Icon style={styles.iconAlign} name="ios-home" />
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
              My Services
              <Icon style={styles.iconAlign} name="ios-time" />
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()} >
              My Account
              <Icon style={styles.iconAlign} name="ios-person" />
            </Button>
            {/* <Button active={this.state.tab4} onPress={() => this.toggleTab4()} >
              Profile
              <Icon style={styles.iconAlign} name="ios-person-outline" />
            </Button> */}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Anatomy);
