import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Ticks from './app/containers/TicksContainer'

import configureStore from './app/store/configureStore'
const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Ticks />
        </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignContent: 'stretch',
    paddingTop: 20
  }
})
