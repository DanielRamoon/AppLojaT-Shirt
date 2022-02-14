import React from 'react';
import { View,Text,TouchableOpacity , Image, StyleSheet} from 'react-native';

export default function Shirt(props) {
    // fuunção para o tamanho do testo da desc do produto
    function filter(desc){
        if(desc.length <27){
            return desc;
        }
        return `${desc.substring(0,23)}...`
    }
 return (
    <TouchableOpacity style={Styles.container} onPress={props.onclick } > 
        <Image
            source={props.Img}
            style={Styles.ImgShirt}
        />
        <Text style={Styles.Shirttxt} >{filter(props.children)} </Text>
        <View opacity={0.4} >
        <Text style={Styles.Shirttxt} >{props.cost} </Text>
        </View>
    </TouchableOpacity>
 );
}
const Styles = StyleSheet.create({
    container:{
        paddingVertical:'2%',
        alignItems:'center',
        justifyContent:'center'
    },
    ImgShirt:{
        width:175,
        height:175,
    },
    Shirttxt:{
        fontSize: 16
    }
})