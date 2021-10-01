import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './component/HomeScreen.js';
// import DetailScreen from './component/DetailScreen.js';
// import CustomNavigationBar from './component/CustomNavigationBar.js';
import LinksScreen from './component/LinksScreen.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="LinksScreen" component={LinksScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
export default App

