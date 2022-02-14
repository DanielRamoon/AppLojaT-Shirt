import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

export default function buttom() {
 return (
   <View style={Styles.container} >
       <TouchableOpacity style={Styles.btncontainer} >
           <Text style={Styles.title} >COMPRAR</Text>
       </TouchableOpacity>
   </View>
  );
}

const Styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    btncontainer:{
        width:'90%',
        height:50,
        backgroundColor:'#17181a',
        borderRadius:5,
        marginVertical:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        color:'#fff'
    }
})