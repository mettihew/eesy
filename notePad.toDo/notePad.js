import React from "react";
import { SafeAreaView, TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const a = props => {
  return(
    <SafeAreaView>

    <TextInput style={style.textinput} placeholder="type.." numberOfLines={100} multiline={true} />

    <View style={{justifyContent:"flex-end",alignItems:"center",flex:1}}>
    <View style={style.icons} >
    <Icon name='search' size={50} />
    <Icon name='home' size={50} onPress={() => { props.navigation.navigate('page1') }}/>
    </View>
    </View>

    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  textinput:{
    backgroundColor:'#666',  
    fontSize:30,  
  },
  icons:{
    position:"absolute",
    flexDirection: "row",
  }
})
export default a;
