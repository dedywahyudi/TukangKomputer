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
import TabMyServices from './TabMyServices';
import TabMyAccount from './TabMyAccount';
import TabView from './TabView';
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
                component={TabHome}
                navigationBarStyle={styles.navigationBarStyle}
                title="Home"
                titleStyle={styles.colorWhite}
                iconName="ios-home"
                icon={TabIcon}
                renderLeftButton={this.renderMenuButton}
                renderRightButton={this.renderRightButton}
                initial
              />
              <Scene
                key="tabMyServices"
                component={TabMyServices}
                navigationBarStyle={styles.navigationBarStyle}
                title="My Services"
                titleStyle={styles.colorWhite}
                iconName="ios-time"
                icon={TabIcon}
                renderLeftButton={this.renderMenuButton}
                renderRightButton={this.renderRightButton}
              />
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
