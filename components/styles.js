const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#333333',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#333333',
  },
  navigationBarStyle: {
    backgroundColor: '#333333',
    borderBottomWidth: 0,
  },
  leftMenuStyle: {
    alignSelf: 'flex-start',
    height: 20,
  },
  rightMenuStyle: {
    alignSelf: 'flex-end',
    height: 20,
  },
  colorWhite: {
    color: 'white',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
  },
  icon: {
    marginBottom: 0,
  },
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 18,
  },
  textWhite: {
    color: '#ffffff',
  },
  dataArrow: {
    color: '#5A5A5A',
    marginRight: 10,
  },
});
