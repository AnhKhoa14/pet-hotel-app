import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Sliders from '../../components/Home/Sliders'

export default function Home() {
  return (
    <View style={{padding: 20, marginTop: 20, backgroundColor: '#fff'}}>

      {/* Header */}
      <Header />
      {/* Sliders */}
      <Sliders />
      {/* Category */}


    </View>
  )
}