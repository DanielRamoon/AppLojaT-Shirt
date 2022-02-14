import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function SizaButtom(props) {
 return (
   <View style={[styles.container, {backgroundColor:props.bgcolor || '#fff'}]} >
      <Text style={[styles.txt, {color:props.cor || '#c9c'}]} >{props.children}</Text>
   </View>
  );
}

const styles=StyleSheet.create({
    container:{
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        borderColor:'#e6e6e6',
        borderWidth:3,
        marginHorizontal:10
    
    },
    txt:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        textAlignVertical:'center'
    }
})