import React, { useState } from "react";
import { Text, Image, View, SafeAreaView} from 'react-native';
import {FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import foods from "./foods";
import categories from './categories';

const App = () => {
  const [god, setGod] = useState(0);
  
  const ListCategories = () => {
    return(
      <ScrollView horizontal>
        {categories.map((category,index) => (
      <TouchableOpacity key={index} onPress={() => setGod(index)}>
          <View style={{backgroundColor: god == index ? '#F9813A' : '#fedac5', borderRadius:50}}>
            <Image source={category.image} />
          </View>
      </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }

  const Card = ({food}) => {
    return(
      <TouchableHighlight>
        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Image source={food.image} style={{height:244,width:244,marginVertical:44}}/>
        <Text> {food.name}  </Text>
        </View>
      </TouchableHighlight>
    )
  }
  return(
    <SafeAreaView style={{backgroundColor:'gray',flex:1}}>
      <ListCategories />
    <FlatList
      numColumns={2}
      data={foods}
      renderItem={({item}) => <Card food={item}/>} />
      </SafeAreaView>
  )
}
export default App;