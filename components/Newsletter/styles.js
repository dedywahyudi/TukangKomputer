const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
  headerLogin: {
    backgroundColor: '#474745',
    paddingTop: 0,
    paddingBottom: 10,
  },
  btnFb: {
    backgroundColor: '#3B579D',
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  btnEmail: {
    backgroundColor: '#F6C819',
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  btnGoogle: {
    backgroundColor: '#DD5044',
    elevation: 0,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
  },
  noBorder: {
    borderBottomWidth: 0,
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
  btnEditProfile: {
    backgroundColor: '#fff',
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
    borderColor: '#ddd',
    borderWidth: 1,
  },
  loginTextDaftar: {
    textAlign: 'left',
    fontSize: 12,
  },
  loginTextLupaPassword: {
    textAlign: 'right',
    fontSize: 12,
  },
  dataArrow: {
    color: '#CECDD2',
    marginRight: 10,
  },
  iconMore: {
    alignSelf: 'center',
    color: '#FFF',
  },
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  textBlack: {
    color: '#333333',
    fontSize: 16,
  },
});
