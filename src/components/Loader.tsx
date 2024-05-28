import React from 'react'
import { ActivityIndicator } from 'react-native'
import { colors } from '../constants/colors'

const Loader = () => {
  return (
    <ActivityIndicator size="large" color={colors.app} />
  )
}

export default Loader;