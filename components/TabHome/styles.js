const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  mainRow: {
    // flex: 0.25,
    // paddingTop: 10,
    paddingBottom: 10,
  },
  innerColumn: {
    flex: 1,
    flexDirection: 'row',
  },
  innerRow: {
    flexDirection: 'row',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemColumn: {
    flex: 1,
  },
  itemRow: {
    marginTop: (Platform.OS === 'ios') ? 4 : 0,
  },
  buttonAlign: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 60,
    height: 60,
  },
  buttonMore: {
    alignSelf: 'center',
    backgroundColor: '#FF8D0D',
    width: 60,
    height: 60,
  },
  textAlign: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 12,
  },
  iconAlign: {
    alignSelf: 'center',
    color: '#FF8D0D',
    fontSize: 30,
    lineHeight: 30,
  },
  iconMore: {
    alignSelf: 'center',
    color: '#FFF',
  },
});
