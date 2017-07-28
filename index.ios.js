/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {
  StackNavigator,
} from 'react-navigation'

import { Main, Login, LoginSimple, Register } from './view'

const App = StackNavigator({
  Main: { screen: Main },
  Login: { screen: Login },
  LoginSimple: { screen: LoginSimple },
  Register: { screen: Register }
}, {
    headerMode: 'none',
  })

export default class yanay extends Component {

  static navigationOptions = {
    header: {
      visible: false,
    }
  }

  render() {
    return (
      <Main></Main>
    )
  }
}

AppRegistry.registerComponent('yanay', () => App)
