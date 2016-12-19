
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;
// const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  multiline: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  btnDark: {
    backgroundColor: '#FFCE00',
    elevation: 0,
    height: 50,
  },
  noLeftMargin: {
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
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
  noBorder: {
    borderBottomWidth: 0,
  },
  textBlack: {
    color: '#333333'
  },
});
