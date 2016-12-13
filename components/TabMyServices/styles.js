const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  sidebarIcon: {
    fontSize: 21,
    alignSelf: 'center',
    color: '#fff',
    backgroundColor: '#FF8D0D',
    width: 37,
    height: 37,
    borderRadius: 18,
    paddingLeft: 10,
    paddingTop: (Platform.OS === 'android') ? 8 : 5,
  },
  dataGrid: {
    paddingLeft: 10,
  },
  rowTitle: {
    fontSize: 15,
    lineHeight: 20,
  },
  rowNotes: {
    fontSize: 12,
    lineHeight: 18,
    color: '#CECDD2',
  },
  statusYellow: {
    fontSize: 12,
    lineHeight: 18,
    color: '#FF8D0D',
  },
  statusRed: {
    fontSize: 12,
    lineHeight: 18,
    color: '#DE2339',
  },
  statusGreen: {
    fontSize: 12,
    lineHeight: 18,
    color: '#5EAC02',
  },
  statusBlue: {
    fontSize: 12,
    lineHeight: 18,
    color: '#00A0B4',
  },
  statusCompleted: {
    fontSize: 12,
    lineHeight: 18,
    color: '#CECDD2',
  },
  dataArrow: {
    color: '#CECDD2',
    marginRight: 10,
  },
});
