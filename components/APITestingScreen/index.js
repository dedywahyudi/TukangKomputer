// An All Components Screen is a great way to dev and quick-test components
import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';

// For API
import FJSON from 'format-json';
import API from '../services/Api';

// Styles
import styles from './styles';

// API buttons here:
const endpoints = [
  { label: 'Get City (Boise)', endpoint: 'getCity', args: ['Boise'] },
  { label: 'Get City (Toronto)', endpoint: 'getCity', args: ['Toronto'] },
];

export default class APITestingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // visibleHeight: Window.screenHeight
    };

    this.api = API.create();
  }

  showResult(response, title = 'Response') {
    this.refs.container.scrollTo({x: 0, y: 0, animated: true})
    if (response.ok) {
      this.refs.result.setState({message: FJSON.plain(response.data), title: title})
    } else {
      this.refs.result.setState({message: `${response.problem} - ${response.status}`, title: title})
    }
  }

  tryEndpoint(apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    this.api[endpoint].apply(this, args).then((result) => {
      this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  renderButton(apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    return (
      <Button onPress={this.tryEndpoint(this, apiEndpoint)} styles={{ marginTop: 10 }} key={`${endpoint}-${args.join('-')}`}>
        {label || `${endpoint}(${args.join(', ')})`}
      </Button>
    )
  }

  renderButtons() {
    return endpoints.map((endpoint) => this.renderButton(endpoint))
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container} ref='container'>

          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Testing API with Postman or APIary.io verifies the server works.
              The API Test screen is the next step; a simple in-app way to verify and debug your in-app API functions.
            </Text>
            <Text style={styles.sectionText}>
              Create new endpoints in Services/Api.js then add example uses to endpoints array in Containers/APITestingScreen.js
            </Text>
          </View>
          {this.renderButtons()}
          <APIResult ref='result' />
        </ScrollView>
      </View>
    )
  }
}

class APIResult extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      message: false,
      title: false
    }
  }

  onApiPress (){
    this.setState({message: false});
  }

  renderView () {
    return (
      <ScrollView style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} overflow='hidden'>
        <TouchableOpacity
          onPress={this.onApiPress}
        >
          <Text>{this.state.title} Response:</Text>
          <Text allowFontScaling={false} style={{fontFamily: 'CourierNewPS-BoldMT', fontSize: 10}}>
            {this.state.message}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  render () {
    let messageView = null
    if (this.state.message) {
      return this.renderView()
    }

    return messageView
  }
}
