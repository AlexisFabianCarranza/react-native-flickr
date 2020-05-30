import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AlbumScreen from './src/Home/screens/AlbumScreen';
import PhotoScreen from './src/Photo/screens/PhotoScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="albumScreen"
          component={AlbumScreen}
          options={{title: 'Albums'}}
        />
        <Stack.Screen
          name="photoScreen"
          component={PhotoScreen}
          options={{title: 'Photos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
