import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Icon, Text, List, ListItem } from 'native-base';
// import { Actions } from 'react-native-router-flux';
import styles from './styles';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View>
      <List>
        <ListItem style={styles.noLeftMargin} iconLeft iconRight>
          <Icon name="ios-cash" style={{ color: '#4b4b4b', width: 30 }} />
          <Text>Payment</Text>
          <Icon name="ios-arrow-forward" />
        </ListItem>
        <ListItem style={styles.noLeftMargin} iconLeft iconRight>
          <Icon name="ios-megaphone" style={{ color: '#4b4b4b', width: 30 }} />
          <Text>Newsletter & Promo Info</Text>
          <Icon name="ios-arrow-forward" />
        </ListItem>
        <ListItem style={styles.noLeftMargin} iconLeft iconRight>
          <Icon name="ios-switch" style={{ color: '#4b4b4b', width: 30 }} />
          <Text>Application Settings</Text>
          <Icon name="ios-arrow-forward" />
        </ListItem>
        <ListItem style={styles.noLeftMargin} iconLeft iconRight>
          <Icon name="ios-power" style={{ color: '#4b4b4b', width: 30 }} />
          <Text>Logout</Text>
          <Icon name="ios-arrow-forward" />
        </ListItem>
      </List>
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;
