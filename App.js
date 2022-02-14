//import 'react-native-gesture-handler'
import {StatusBar} from 'react-native'
import React from 'react';
import {View,Text, StyleSheet} from 'react-native'

import Routes from './src/routes'

export default function App(){
  return(
    < >
      <StatusBar style='light' backgroundColor='#000' translucent={true} />
      <Routes/>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
    
    
  }
})