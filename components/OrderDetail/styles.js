const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
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
    lineHeight: 18,
    color: '#00A0B4',
  },
  listYellow: {
    paddingLeft: 0,
    backgroundColor: '#FF8D0D',
  },
  listRed: {
    paddingLeft: 0,
    backgroundColor: '#DE2339',
  },
  listGreen: {
    paddingLeft: 0,
    marginLeft: 0,
    backgroundColor: '#5EAC02',
  },
  listBlue: {
    paddingLeft: 0,
    backgroundColor: '#00A0B4',
  },
  listText: {
    paddingLeft: 10,
    fontSize: 14,
    lineHeight: 16,
    color: '#ffffff',
  },
  statusCompleted: {
    fontSize: 12,
    color: '#CECDD2',
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
  thumbAlign: {
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: '#F6C819',
  },
  buttonAlign: {
    alignSelf: 'center',
    backgroundColor: '#F6C819',
    width: 60,
    height: 60,
    shadowRadius: 0,
    elevation: 0,
  },
  iconAlign: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 40,
    lineHeight: 40,
  },
  textCenter: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  rowDetail: {
  },
  textNotes: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontSize: 12,
    color: '#CECDD2',
  },
  skillIcon: {
    alignSelf: 'center',
    fontSize: 21,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#FFCE00',
    width: 37,
    height: 37,
    lineHeight: 30,
    borderRadius: 18,
    marginRight: 10,
  },
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
  tukangInfo: {
    marginTop: 10,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  skillList: {
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
    marginLeft: 0,
  },
  noMarginLeft: {
    marginLeft: 0,
  },
});
