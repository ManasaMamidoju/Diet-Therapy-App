import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'

import Tab1Controller from './tab1/Tab1Controller';
import Tab2Controller from './tab2/Tab2Controller';
import Tab3Controller from './tab3/Tab3Controller';


const Tabs = createBottomTabNavigator();

export default function TabsController() {
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Tab1") {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                else if (route.name === "Tab2") {
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                }
                else if (route.name === "Tab3") {
                    iconName = focused ? 'ios-person' : 'ios-person-outline';
                }
                return <Ionicons name={iconName} color={color} size={size} />
            }
        })}
        >
            <Tabs.Screen name="Tab1" component={Tab1Controller}
                options={{
                    title: 'Survey'
                }} />
            <Tabs.Screen name="Tab2" component={Tab2Controller}
                options={{
                    title: 'Home'
                }} />
            <Tabs.Screen name="Tab3" component={Tab3Controller}
                options={{
                    title: 'Profile'
                }}
            />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 50
    }
});