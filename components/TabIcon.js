import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

class TabIcon extends Component {
  render() {
    const containerStyles = {
      backgroundColor: this.props.selected ? '#F7F7F7' : '#333333',
    };

    const textStyles = {
      color: this.props.selected ? '#333333' : '#ffffff',
    };

    const iconColor = this.props.selected ? '#333333' : '#ffffff';

    return (
      <View style={[styles.container, containerStyles]}>
        <Icon name={this.props.iconName} style={styles.icon} size={16} backgroundColor="transparent" color={iconColor} />
        <Text style={[styles.text, textStyles]}>{this.props.title}</Text>
      </View>
    );
  }
}

TabIcon.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  iconName: PropTypes.string,
};


export default TabIcon;
