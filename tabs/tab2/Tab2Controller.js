import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import FlatListScreen from './FlatListScreen';
import LetsMoveScreen from './LetsMoveScreen';
import LetsRelaxScreen from './LetsRelaxScreen';
import MyPlateScreen from './MyPlateScreen';
import SleepTightScreen from './SleepTightScreen';

const Stack = createStackNavigator();

export default function Tab2Controller() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FlatListDisplay" component={FlatListScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="LetsMove" component={LetsMoveScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="MyPlate" component={MyPlateScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="SleepTight" component={SleepTightScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="LetsRelax" component={LetsRelaxScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({

});