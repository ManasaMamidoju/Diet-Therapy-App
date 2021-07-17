import { Picker, Animated, StyleSheet, Image, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
//import { Picker } from '@react-native-picker/picker';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 1.5;


let WHR = 0;




//=======================================================

export default function CreateAccountScreen({ navigation }) {
    //MidArmCircumference
    const [MidArmCircumference, setMidArmCircumference] = useState('0');
    //WaistCircumferece
    const [WaistCircumferece, setWaistCircumferece] = useState('0');
    //HipCircumference
    const [HipCircumference, setHipCircumference] = useState('0');
    //Waist/HipRatio WHR
    const [WHR, setWHR] = useState('0');


    return (
        <View style={styles.container}>
            <Text>What is your Mid-arm circumference (MAC)?</Text>
            <TextInput
                style={styles.input}
                placeholder="Mid-arm circumference (MAC)?"
                keyboardType="numeric"
                value={MidArmCircumference}
                onChangeText={(val) => setMidArmCircumference(val)}>
            </TextInput>

            <Text>What is your waist circumference?</Text>
            <TextInput
                style={styles.input}
                placeholder="waist circumference"
                keyboardType="numeric"
                value={WaistCircumferece}
                onChangeText={(val) => setWaistCircumferece(val)}>
            </TextInput>

            <Text>What is your hip circumference?</Text>
            <TextInput
                style={styles.input}
                placeholder="hip circumference"
                keyboardType="numeric"
                value={HipCircumference}
                onChangeText={(val) => setHipCircumference(val)}>
            </TextInput>

            <Text>Your Waist/Hip Ratio (WHR) is: </Text> 
            <TextInput
                style={styles.input}
                placeholder="WHR"
                value={WHR}
                keyboardType="numeric"
                onChangeText={(val) => setWHR(val)}>
            </TextInput>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    verify(MidArmCircumference, HipCircumference, WaistCircumferece, WHR, { navigation });
                }}>
                <Text style={styles.buttonText}>
                    Create account
                </Text>
            </TouchableOpacity>

        </View>
    );
}



function verify(age, gender, metric, email, weight, height, firstName, lastName, password, occupation, { navigation }) {
    if (MidArmCircumference === '' || HipCircumference === '' || WaistCircumferece === '' || WHR === '' ) {
        Alert.alert("Missing information", "Please fill out all components", [{ text: "ok" }])
    }
    else {
        Alert.alert("Measurements updated!", "You're all done", [{ text: "ok" }]);
        navigation.navigate("Profile");
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "black",
        textAlign: "center",
        paddingVertical: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        marginVertical: 5,
        paddingHorizontal: 10,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,

    },
    pickerContainer: {
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 5,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    }
});


