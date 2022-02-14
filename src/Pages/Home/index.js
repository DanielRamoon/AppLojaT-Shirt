import React from 'react';
import { View, Text,StyleSheet,ScrollView ,Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Shirt from '../../component/shirt';
import {useNavigation } from '@react-navigation/native'



export default function Homi() {
  const navigation = useNavigation()
 return ( 
   <View style={styles.container} >
     <View style={styles.header} >
        <Image
          source={require('../../assets/images/header.jpg')}
          style={styles.Img}
        />
        </View>

        <View style={styles.txtContainer} >
          <Text style={styles.txt} >CAMISAS</Text>
          <Text style={[styles.txt, {color:'#cecece'}]} >- </Text>
          <Text style={[styles.txt, {color:'#cecece'}]}>- Masculino</Text>
          <TouchableOpacity style={{position:'absolute', right:0, alignSelf:'center'}} >
            <Icon
              name="search"
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </View>
      <View style={styles.line} />

        <ScrollView >
          <Text style={styles.txt} >LANÇAMENTO:</Text>

          <View style={{flexDirection:'row', justifyContent:'space-around'}} >
           <Shirt Img={require('../../assets/images/camisa1.jpeg')}  cost='R$149,90' onclick={()=> navigation.navigate('Detail')} >Camisa Social Azul Marinho</Shirt>
           <Shirt Img={require('../../assets/images/camisa3.jpeg')}  cost='R$149,90' onclick={()=> navigation.navigate('Detail')} >Camisa Social Azul Claro</Shirt>
           </View>

           <View style={{flexDirection:'row', justifyContent:'space-around'}} >
           <Shirt Img={require('../../assets/images/camisa4.jpeg')}  cost='R$149,90'onclick={()=> alert('clicou')} >Camisa Social Azul Mar</Shirt>
           <Shirt Img={require('../../assets/images/camisa5.jpeg')}  cost='R$149,90' onclick={()=> alert('clicou')} >Camisa Social Preta</Shirt>
           </View>

           <View style={{flexDirection:'row', justifyContent:'space-around'}} >
           <Shirt Img={require('../../assets/images/camisa7.jpeg')}  cost='R$149,90' onclick={()=> alert('clicou')} >Camisa Social cinza</Shirt>
           <Shirt Img={require('../../assets/images/camisa8.jpeg')}  cost='R$149,90' onclick={()=> alert('clicou')}  >Camisa Social Manga Curta</Shirt>
           </View>

           
           
        </ScrollView>

     </View> 
  );
}

  const styles = StyleSheet.create({
    container:{
      flex:1,
      width:'100%',
      height:'100%',
      backgroundColor:'#fff'
    },
    header:{
      marginBottom:8
    },
    Img:{
      width:'100%',
      height:'50%',
      
    },
    txtContainer:{
      flexDirection:'row',
      marginVertical:'5%',
      marginHorizontal:'5%',
      marginTop:-150
    },
    txt:{
      fontFamily:'fantasy',
      color:'#000',
      fontWeight:'bold',
      fontSize:24,
      marginHorizontal:'1%',

    },
    line:{
      borderBottomColor:'#d0d0d0',
      borderBottomWidth:2
    }
  })