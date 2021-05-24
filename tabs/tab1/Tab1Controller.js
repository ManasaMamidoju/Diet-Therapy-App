import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './HomeScreen';
import QuestionnaireScreen from './QuestionnaireScreen';

const Stack = createStackNavigator();

export default function Tab1Controller() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="Questionnaire" component={QuestionnaireScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({

});