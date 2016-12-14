const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  mainColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  sidebarIcon: {
    flex: 0,
    fontSize: 21,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#FFCE00',
    width: 37,
    height: 37,
    lineHeight: 30,
    borderRadius: 18,
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
    color: '#FFCE00',
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
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 18,
  },
});
