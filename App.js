import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import Dashboard from './src/screens/Dashboard';
import Questions from './src/screens/Questions';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Sign Up" }}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }}></Stack.Screen>
        <Stack.Screen name="Questions" component={Questions}></Stack.Screen>
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
