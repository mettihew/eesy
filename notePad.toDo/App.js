// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
// import notePad from 'one/notePad';
// import toDo from 'one/toDo';

// const stack = createStackNavigator() 

// const one = () => {
//   return(
//     <NavigationContainer>
//       <stack.Navigator>
//         <stack.Screen name='notepad' component={notePad} />
//         <stack.Screen name='todo' component={toDo} />
//       </stack.Navigator>
//     </NavigationContainer>
//   )
// }
// export default one;



import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import notePad from 'one/notePad';
import toDo from 'one/toDo';

const stack = createStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={notePad} />
        <stack.Screen name="page1" component={toDo} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;