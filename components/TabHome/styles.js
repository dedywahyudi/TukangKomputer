const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
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
    marginTop: 10,
    marginBottom: 10,
  },
  itemColumn: {
    flex: 1,
  },
  itemRow: {
    marginTop: (Platform.OS === 'ios') ? 4 : 0,
  },
  buttonAlign: {
    alignSelf: 'center',
    backgroundColor: '#F6C819',
    width: 60,
    height: 60,
    shadowRadius: 0,
    elevation: 0,
  },
  textAlign: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 12,
    color: '#FFFFFF',
  },
  iconAlign: {
    alignSelf: 'center',
    color: '#333333',
    fontSize: 30,
    lineHeight: 30,
  },
  alignButtonCenter: {
    alignItems: 'center',
  },
  iconMore: {
    alignSelf: 'center',
    color: '#333333',
  },
});
