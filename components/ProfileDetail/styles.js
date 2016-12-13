
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  // mainColumn: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  // mainRow: {
  //   // flex: 0.25,
  //   // paddingTop: 10,
  //   paddingBottom: 10,
  // },
  // innerColumn: {
  //   flex: 1,
  //   flexDirection: 'row',
  // },
  // innerRow: {
  //   flexDirection: 'row',
  //   flex: 0.3,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // itemColumn: {
  //   flex: 1,
  // },
  // itemRow: {
  //   marginTop: (Platform.OS === 'ios') ? 4 : 0,
  // },
  // buttonAlign: {
  //   alignSelf: 'center',
  //   backgroundColor: '#fff',
  //   width: 60,
  //   height: 60,
  // },
  // buttonMore: {
  //   alignSelf: 'center',
  //   backgroundColor: '#FF8D0D',
  //   width: 60,
  //   height: 60,
  // },
  // textAlign: {
  //   flex: 1,
  //   alignSelf: 'center',
  //   fontSize: 12,
  // },
  // iconAlign: {
  //   alignSelf: 'center',
  //   color: '#FF8D0D',
  //   fontSize: 30,
  //   lineHeight: 30,
  // },
  // iconMore: {
  //   alignSelf: 'center',
  //   color: '#FFF',
  // },
  // fabStyle: {
  //   backgroundColor: '#5EAC02',
  // },
  // logo: {
  //   position: 'absolute',
  //   left: (Platform.OS === 'android') ? 40 : 50,
  //   top: (Platform.OS === 'android') ? 35 : 60,
  //   width: 280,
  //   height: 100,
  // },
  // iconLogo: {
  //   backgroundColor: '#5EAC02',
  //   width: 103,
  //   height: 38,
  // },
  dataGrid: {
    paddingLeft: 10,
  },
  rowRating: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 15,
    paddingTop: 0,
    marginTop: 0,
  },
  rowNotes: {
    fontSize: 12,
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
    color: '#00A0B4',
  },
  statusCompleted: {
    fontSize: 12,
    color: '#CECDD2',
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
  },
  ratingAlign: {
    borderBottomWidth: 0,
    height: 30,
    padding: 0,
    marginTop: 20,
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
  skillIcon: {
    fontSize: 21,
    color: '#fff',
    backgroundColor: '#FF8D0D',
    width: 37,
    height: 37,
    borderRadius: 18,
    paddingLeft: 10,
    marginRight: 10,
    paddingTop: (Platform.OS === 'android') ? 8 : 5,
  },
  dataArrow: {
    color: '#CECDD2',
    marginRight: 10,
  },
  // btnFb: {
  //   backgroundColor: '#3B579D',
  // },
  // btnEmail: {
  //   backgroundColor: '#FF8D0D',
  // },
  // btnGoogle: {
  //   backgroundColor: '#DD5044',
  // },
  noBorder: {
    borderBottomWidth: 0,
  },
  loginTextOr: {
    textAlign: 'center',
    fontSize: 12,
  },
  loginListOr: {
    marginTop: 10,
    marginBottom: 10,
  },
  loginInput: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'transparent',
  },
  loginTextDaftar: {
    textAlign: 'left',
    fontSize: 12,
  },
  loginTextLupaPassword: {
    textAlign: 'right',
    fontSize: 12,
  },
  rowUser: {
    fontSize: 18,
    lineHeight: 20,
    color: '#fff',
  },
  rowUserLogin: {
    fontSize: 12,
    lineHeight: 14,
    color: '#fff',
  },
  headerLogin: {
    backgroundColor: '#474745',
    paddingTop: 0,
    paddingBottom: 10,
  },
  btnEditProfile: {
    backgroundColor: '#fff',
  },
  rowRating: {
    height: 27,
  },
});
