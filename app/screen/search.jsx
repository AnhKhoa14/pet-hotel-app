import React from 'react'
import { View } from 'react-native'
import Header from '../../components/Search/Header'
import Parts from '../../components/Search/Parts'
import { commonStyles } from '../../style'

const search = () => {
  return (
    <View style={commonStyles.container}>
        <Header />
        <Parts /> 
    </View>
  )
}

export default search
