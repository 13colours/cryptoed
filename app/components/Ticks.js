import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { keys, forEach, map, sortBy } from 'lodash'

const ASSET_CLASSES = ['BTC/AUD', 'ETH/AUD', 'LTC/AUD', 'XRP/AUD', 'BCH/AUD']

class Ticks extends React.Component {
  componentDidMount = () => {
    forEach(ASSET_CLASSES, asset => this.props.getTicks(asset))
  }

  render() {
    const { isFetching, ticks } = this.props.ticks

    return (
      <View style={styles.container}>
        {isFetching && <Text>Loading...</Text>}
        {map(
          ASSET_CLASSES,
          (asset, i) =>
            ticks[asset] && (
              <View key={i} style={styles.tickBlock}>
                <Text style={styles.tickType}>{asset}</Text>
                <Text style={styles.tickPrice}>{ticks[asset].lastPrice}</Text>
              </View>
            )
        )}
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    alignSelf: 'stretch'
  },
  tickBlock: {
    backgroundColor: '#3498db',
    alignSelf: 'stretch',
    justifyContent: 'center',
    padding: 20
  },
  tickType: {
    fontSize: 18,
    textAlign: 'center'
  },
  tickPrice: {
    fontSize: 36,
    textAlign: 'center'
  }
})

export default Ticks
