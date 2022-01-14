import React from "react";
import {Button, SafeAreaView, Text, ImageBackground, View, StyleSheet} from 'react-native';

const a = props => {
  return(
    <SafeAreaView>
    <ImageBackground style={{width:'100%',height:'100%'}} source={require('two/pizza1.jpg')} />
    <View style={style.tex}>
      <Text style={{fontSize:77,color:'orange'}}> FOoDs </Text>
    </View>
    <View style={style.but}>
    <Button title="sign up" color='#d15029'/>
    <Button title="click" color='#e75420'onPress={() => {
      props.navigation.navigate('Restaurant')
    }}/>
    </View>
    <Text> hello </Text>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  but:{
    marginTop: 666,
    marginLeft: 180,
    position: "absolute",
    flexDirection: "row",
    
  },
  tex:{
    position: "absolute",
    marginLeft: 99,
    marginTop: 22
  }
})
export default a;
