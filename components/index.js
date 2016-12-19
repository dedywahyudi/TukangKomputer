import React, { Component } from 'react';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import { Button, Icon } from 'native-base';
import TabHome from './TabHome';
import InputHardware from './InputHardware';
import LokasiTukang from './LokasiTukang';
import TabMyServices from './TabMyServices';
// import TabMyAccount from './TabMyAccount';
import Daftar from './Daftar';
import LupaPassword from './LupaPassword';
import TabProfileLogin from './TabMyAccount/TabProfileLogin';
import TabProfileNotLogin from './TabMyAccount/TabProfileNotLogin';
import PushNotification from './PushNotification';
import Newsletter from './Newsletter';
import OrderDetail from './OrderDetail';
import ProfileDetail from './ProfileDetail';
import EditProfile from './EditProfile';
import TabIcon from './TabIcon';
import NavigationDrawer from './NavigationDrawer';
import styles from './styles';

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#333333',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 54;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class Routers extends Component {
  renderMenuButton() {
    return (
      <Button
        transparent
        style={styles.leftMenuStyle}
        onPress={() => { Actions.refresh({ key: 'tabbar', open: true })}}
      >
        <Icon name="ios-menu" style={styles.colorWhite} />
      </Button>
    );
  }

  renderRightButton() {
    return (
      <Button
        transparent
        style={styles.rightMenuStyle}
      >
        <Icon name="ios-more" style={styles.colorWhite} />
      </Button>
    );
  }

  customBackButton() {
    return (
      <Button
        transparent
        style={styles.leftMenuStyle}
        onPress={() => { Actions.pop(); } }
      >
        <Icon name="ios-arrow-back" style={styles.colorWhite} />
      </Button>
    );
  }

  render() {
    return (
      <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
        <Scene key="root">
          <Scene
            key="tabbar"
            component={NavigationDrawer}
            open={false}
            initial
          >
            <Scene
              key="main"
              tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
            >
              <Scene
                key="tabHome"
                navigationBarStyle={styles.navigationBarStyle}
                title="Home"
                titleStyle={styles.colorWhite}
                iconName="ios-home"
                icon={TabIcon}
                initial
              >
                <Scene
                  key="tabHomeStart"
                  component={TabHome}
                  title="Home"
                  renderLeftButton={this.renderMenuButton}
                  renderRightButton={this.renderRightButton}
                />
                <Scene
                  key="inputHardware"
                  component={InputHardware}
                  title="Input Hardware"
                  renderBackButton={this.customBackButton}
                  hideTabBar
                />
                <Scene
                  key="lokasiTukang"
                  component={LokasiTukang}
                  title="Lokasi User"
                  renderBackButton={this.customBackButton}
                  hideTabBar
                />
              </Scene>
              <Scene
                key="tabMyServices"
                navigationBarStyle={styles.navigationBarStyle}
                title="My Services"
                titleStyle={styles.colorWhite}
                iconName="ios-time"
                icon={TabIcon}
              >
                <Scene
                  key="tabMyServicesStart"
                  component={TabMyServices}
                  title="My Services"
                  titleStyle={styles.colorWhite}
                  renderLeftButton={this.renderMenuButton}
                  renderRightButton={this.renderRightButton}
                />
                <Scene
                  key="orderDetail"
                  component={OrderDetail}
                  title="Order Detail"
                  titleStyle={styles.colorWhite}
                  renderBackButton={this.customBackButton}
                  hideTabBar
                />
                <Scene
                  key="profileDetail"
                  component={ProfileDetail}
                  title="Profile Detail"
                  titleStyle={styles.colorWhite}
                  renderBackButton={this.customBackButton}
                  hideTabBar
                />
              </Scene>
              <Scene
                key="tabMyProfile"
                navigationBarStyle={styles.navigationBarStyle}
                title="My Account"
                titleStyle={styles.colorWhite}
                iconName="ios-person"
                icon={TabIcon}
              >
                <Scene
                  key="tabProfileLogin"
                  component={TabProfileLogin}
                  title="My Account"
                  titleStyle={styles.colorWhite}
                  renderLeftButton={this.renderMenuButton}
                  renderRightButton={this.renderRightButton}
                />
                <Scene
                  key="tabProfileNotLogin"
                  component={TabProfileNotLogin}
                  title="Logged In"
                  titleStyle={styles.colorWhite}
                  renderBackButton={this.customBackButton}
                  renderRightButton={this.renderRightButton}
                />
                <Scene
                  key="editProfile"
                  component={EditProfile}
                  title="Edit Profile"
                  titleStyle={styles.colorWhite}
                  renderBackButton={this.customBackButton}
                  renderRightButton={this.renderRightButton}
                />
                <Scene
                  key="newsletter"
                  component={Newsletter}
                  title="Newsletter"
                  titleStyle={styles.colorWhite}
                  renderBackButton={this.customBackButton}
                  renderRightButton={this.renderRightButton}
                />
                <Scene
                  key="pushNotification"
                  component={PushNotification}
                  title="Push Notification"
                  titleStyle={styles.colorWhite}
                  renderBackButton={this.customBackButton}
                  renderRightButton={this.renderRightButton}
                />
              </Scene>
            </Scene>
          </Scene>
          <Scene key="daftar" direction="vertical" >
            <Scene
              key="daftarModal"
              navigationBarStyle={styles.navigationBarStyle}
              component={Daftar}
              title="Daftar"
              titleStyle={styles.colorWhite}
              renderBackButton={this.customBackButton}
              renderRightButton={this.renderRightButton}
              direction="vertical"
              panHandlers={null}
              duration={1}
            />
          </Scene>
          <Scene key="lupaPassword" direction="vertical" >
            <Scene
              key="lupaPasswordModal"
              navigationBarStyle={styles.navigationBarStyle}
              component={LupaPassword}
              title="Lupa Password"
              titleStyle={styles.colorWhite}
              renderBackButton={this.customBackButton}
              renderRightButton={this.renderRightButton}
              direction="vertical"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default Routers;
