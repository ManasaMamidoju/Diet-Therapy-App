import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableOpacity, Alert, Picker } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './login/LoginScreen';
import CreateAccountScreen from './login/CreateAccountScreen';

import TabsController from './tabs/TabsController';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="TabManager" component={TabsController}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
