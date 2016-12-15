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
import TabMyAccount from './TabMyAccount';
import OrderDetail from './OrderDetail';
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
    backgroundColor: '#F7F7F7',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 54;
    style.marginBottom = computedProps.hideTabBar ? 0 : 54;
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
                />
                <Scene
                  key="lokasiTukang"
                  component={LokasiTukang}
                  title="Map"
                  renderBackButton={this.customBackButton}
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
                  duration={1}
                  panHandlers={null}
                  hideTabBar
                />
              </Scene>
              <Scene
                key="tabMyProfile"
                component={TabMyAccount}
                navigationBarStyle={styles.navigationBarStyle}
                title="My Account"
                titleStyle={styles.colorWhite}
                iconName="ios-person"
                icon={TabIcon}
                renderLeftButton={this.renderMenuButton}
                renderRightButton={this.renderRightButton}
              />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default Routers;
