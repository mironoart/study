import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Expo from 'expo'
import ExpoTHREE, { THREE } from 'expo-three'
import ExpoGraphics from 'expo-graphics'

export default class HomeScreen extends React.Component {
   static navigationOptions = {
      header: null
   }

   render() {
      return (
         <ExpoGraphics.View style = {{flex: 1}}
      )
   }
}

const styles = StyleSheet.create({})
