import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import MedicalHistoryScreen from './MedicalHistoryScreen';
import PhysicalActivityScreen from './PhysicalActivityScreen';
import ProfileScreen from './ProfileScreen';
import ExerciseHelpScreen from './ExerciseHelpScreen';

const Stack = createStackNavigator();

export default function Tab3Controller() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="PhysicalActivity" component={PhysicalActivityScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="MedicalHistory" component={MedicalHistoryScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="Measurements" component={MeasurementsScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name="Exercise" component={ExerciseHelpScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({

});