import React from 'react';
import { View,Text, StyleSheet, ScrollView } from 'react-native';

import Shirt from '../shirt'

export default function Footer() {
 return (
   <View>
       <Text style={Styles.title} >VOCÊ TAMBÉM PODE GOSTAR </Text>
       <View style={{flexDirection:'row'}} >
            <ScrollView horital showsHorizontalScrollIndicator={false} >
                <View style={{marginHorizontal:10}} >
                    <Shirt></Shirt>
                </View>

            </ScrollView>
       </View>
   </View>
  );
}

const Styles = StyleSheet.create({
    container:{

    }
})