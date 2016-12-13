import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Text, Button, Icon } from 'native-base';

import styles from './styles';

import HomeSwiper from './HomeSwiper';

const {
  replaceAt,
} = actions;

class TabHome extends Component { // eslint-disable-line

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('anatomy', { key: route }, this.props.navigation.key);
  }

  render() { // eslint-disable-line
    return (
      <View style={styles.mainColumn}>
        <View style={styles.mainRow}>
          <HomeSwiper />
        </View>
        <View style={styles.mainRow}>
          <View style={styles.innerColumn}>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign} onPress={() => this.replaceAt('cardList')}>
                    <Icon style={styles.iconAlign} name="ios-desktop-outline" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Desktop</Text>
                </View>
              </View>

            </View>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-laptop" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Laptop</Text>
                </View>
              </View>

            </View>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-print-outline" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Printer</Text>
                </View>
              </View>

            </View>
          </View>
        </View>
        <View style={styles.mainRow}>
          <View style={styles.innerColumn}>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-folder-open-outline" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Software</Text>
                </View>
              </View>

            </View>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-construct-outline" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Hardware</Text>
                </View>
              </View>

            </View>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-link-outline" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Jaringan</Text>
                </View>
              </View>

            </View>
          </View>
        </View>
        <View style={styles.mainRow}>
          <View style={styles.innerColumn}>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-sync" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Recovery</Text>
                </View>
              </View>

            </View>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>
                  <Button rounded style={styles.buttonAlign}>
                    <Icon style={styles.iconAlign} name="ios-bug-outline" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Virus</Text>
                </View>
              </View>

            </View>
            <View style={styles.innerRow}>

              <View style={styles.itemColumn}>
                <View style={styles.itemRow}>

                  {/* <Fab
                    large
                    active={this.state.active}
                    direction="up"
                    style={styles.fabStyle}
                    containerStyle={{ marginTop: 10 }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}
                    >
                    <Icon large style={styles.iconAlign} large name="ios-more" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="ios-mail" />
                    </Button>
                  </Fab> */}

                  <Button rounded style={styles.buttonMore}>
                    <Icon style={styles.iconMore} large name="ios-more" />
                  </Button>
                </View>
                <View style={styles.itemRow}>
                  <Text style={styles.textAlign}>Lainnya</Text>
                </View>
              </View>

            </View>
          </View>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(TabHome);
