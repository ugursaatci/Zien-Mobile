import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import Index from './Index';
import Home from './Home';
import Cameras from './Cameras';
import Notifications from './Notifications';








const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions=
      {{
      headerShown: false
      }}>
      
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Index" component={Index}/>
      <Stack.Screen name="Home" component={Home}/>
      
      <Stack.Screen name="Cameras" component={Cameras}/>
      <Stack.Screen name="Notifications" component={Notifications}/>  
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
