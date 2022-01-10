import React, { useState } from "react";
import {SafeAreaView, Button, Text, FlatList, TextInput, View, StyleSheet } from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';

const todo = props => {
  const [enter, setEnter] = useState('')
  const [goals, setGoals] = useState([])

  const goal = keyy => {
    setEnter(keyy)
  }
  const add = () => {
    setGoals(goals => [
      ...goals,
      {id: Math.random().toString(), value:enter}
    ])
  }
  return(
    <SafeAreaView style={{flex:1, justifyContent:"flex-end",alignItems:"center"}}>

    <Button title='add some' onPress={add}/>
    <TextInput style={{backgroundColor:'red',width:333,height:44}} onChangeText={goal} value={enter}/>

    <FlatList
      data={goals}
      renderItem={itemData => (<Text style={{fontSize:29,backgroundColor:'pink'}}> {itemData.item.value} </Text>)}
      keyExtractor={(item) => item.id} />

    <View style={{flexDirection:"row"}}>
      <Icon name='search' size={50} onPress={() => { props.navigation.goBack() }}/>
      <Icon name='home' size={50} />
    </View>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  ico:{
    flexDirection: "row",
    
  }
})
export default todo;