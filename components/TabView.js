import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Icon, Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import theme from './themes/base-theme';

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
    <View theme={theme}>
      <List>
        <ListItem
          style={styles.noLeftMargin} iconRight
          onPress={() => { drawer.close(); Actions.apiTestingScreen(); }}
        >
          <Text style={styles.textWhite}>API Service</Text>
          <Icon name="ios-arrow-forward" style={styles.dataArrow} />
        </ListItem>
        <ListItem style={styles.noLeftMargin} iconRight
          onPress={() => { drawer.close(); Actions.mapTestingScreen(); }}
        >
          <Text style={styles.textWhite}>Map Testing</Text>
          <Icon name="ios-arrow-forward" style={styles.dataArrow} />
        </ListItem>
        <ListItem style={styles.noLeftMargin} iconRight
          onPress={() => { drawer.close(); Actions.deviceInfoScreen(); }}
        >
          <Text style={styles.textWhite}>Device Info</Text>
          <Icon name="ios-arrow-forward" style={styles.dataArrow} />
        </ListItem>
      </List>
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;
