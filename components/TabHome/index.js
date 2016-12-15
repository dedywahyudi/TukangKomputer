import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HomeSwiper from './HomeSwiper';
import styles from './styles';
import theme from '../themes/base-theme';

class TabHome extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container theme={theme}>
        <View style={styles.mainColumn}>
          <View style={styles.mainRow}>
            <HomeSwiper />
          </View>
          <View style={styles.mainRow}>
            <View style={styles.innerColumn}>
              <View style={styles.innerRow}>

                <View style={styles.itemColumn}>
                  <View style={styles.itemRow}>
                    <Button rounded style={styles.buttonAlign} onPress={Actions.inputHardware}>
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

                    <Button rounded style={styles.buttonAlign}>
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
      </Container>
    );
  }
}

export default TabHome;
