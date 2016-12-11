import React, {
  PropTypes,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button, Icon } from 'native-base';
import styles from './styles';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => (
  <View>
    <Icon style={styles.iconAlign} name={props.iconName} />
    <Text style={styles.textAlign}>
      {props.title}
    </Text>
  </View>
  );

TabIcon.propTypes = propTypes;

export default TabIcon;
