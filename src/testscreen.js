// @flow
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


class testscreen extends React.Component {
  componentDidMount(){
    console.log('adding FAB')
    this.props.navigator.setButtons({
      fab: {
        collapsedId: 'share',
        expendedId: 'clear',
        backgroundColor: '#ff505c',
        actions: [
          {
            id: 'mail',
            backgroundColor: '#03A9F4'
          },
          {
            id: 'delete',
            backgroundColor: '#4CAF50'
          }
        ]
      },
      animated: true,
    })
  }

  render(){
    return (
      <View>
        <Text>lol</Text>
      </View>
    )
  }
}

export default testscreen