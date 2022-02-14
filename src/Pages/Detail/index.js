import React from 'react';
import { View, Text,Image,ScrollView,TouchableOpacity,StyleSheet } from 'react-native';

import Dot from '../../component/Dot'
import SizaButtom from '../../component/SizaButtom';
import Buttom from '../../component/Buttom';
import Footer from '../../component/Footer';

export default function Detail({navigation}) {

  navigation.setOptions({
    headerTitle:'Camisa Social Azul'
  })
 return (
   // Imagem do produto 
   <ScrollView style={styles.costainer} >
       <Image
          source={require('../../assets/images/camisa3.jpeg')}
          style={styles.Inage}
          resizeMode='cover'
       /> 
       <View>
         <View>
           <Text style={[styles.title,{fontSize:24}]} >R$159,90</Text>
         </View>
         <View opacity={0.4} >
           <Text style={[styles.title,{fontSize:30}]} >Camisa Social Azul</Text>
         </View> 
         
         

         <View style={styles.dotcontainer} >
              <Dot color='#2379f4'/>
              <Dot color='#fb6e53'/>
              <Dot color='#ddd'/>
              <Dot color='#000'/>
         </View>
         <View style={{flexDirection:'row',width:'100%'}} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false } >
           
            <SizaButtom bgcolor='#17181a' cor='#fff'>P</SizaButtom>
            <SizaButtom>M</SizaButtom>
            <SizaButtom>G</SizaButtom>
            <SizaButtom>GG</SizaButtom>

            </ScrollView>
         </View>

         <View style={styles.txtcontent} > 
         <Text  style={styles.txttitle}>
         Camisa Social Azul
         </Text>
         <Text  >
         Essa camisa faz parte da linha Collection, com design e modelagem exclusiva. Produto desenvolvido pensando no homem moderno e no momento de uso especial. Essa camisa oferece qualidade diferenciada no tecido Cetim de algodão com elastano, oferecendo brilho e conforto. Ideal para ser usada com jeans Black, tênis ou sapato de couro preto. Para dar mais requinte ao produto utilizamos aviamentos Exclusivos.
         </Text>
         <Text style={styles.txtlist} >
           - Categoria: Camisa Social 
         </Text>
         <Text style={styles.txtlist} >
           - material: Jeans
         </Text>

         </View>

         <Buttom/> 
         <View style={styles.line} />
         

       </View>
   </ScrollView>
  );
}

const styles=StyleSheet.create({
  costainer:{
    flex:1,
    width:'100%',
    backgroundColor:"#fff"
  },
  Inage:{
    width:'60%',
    marginTop:100,
    marginLeft:80
  },
  title:{
    fontFamily:'fantasy',
    fontWeight:'bold',
    paddingHorizontal:'2%',
    paddingVertical:'2%'
  },
  dotcontainer:{
     flexDirection:'row',
     marginVertical:'7%'

  },
  txtcontent:{
    fontSize:16,
    lineHeight:25,
    marginVertical:'2%',
    paddingHorizontal:'2%'
  },
  txttitle:{
    fontSize:22,
    marginVertical:'2%'
  },
  txtlist:{
    fontSize:16,
    lineHeight:25
  },
  line:{
    borderWidth:1,
    borderBottomColor:'#eee',
    marginVertical:'2%'
  }

})