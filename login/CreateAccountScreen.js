import { StyleSheet, Image, Text, View, Button, TextInput, Alert, Picker } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 2;

export default function CreateAccountScreen({ navigation }) {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [metric, setMetric] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [email, setEmail] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={(val) => setFirstName(val)}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(val) => setLastName(val)}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder="Age"
                keyboardType="numeric"
                value={age}
                onChangeText={(val) => setAge(val)}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                keyboardType="email-address"
                onChangeText={(val) => setEmail(val)}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(val) => setPassword(val)}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder="Occupation"
                value={occupation}
                onChangeText={(val) => setOccupation(val)}>
            </TextInput>

            <View style={styles.pickerContainer}>
                <Text style={{ color: 'black' }}>Gender</Text>
                <Picker
                    style={{ width: '100%', color: 'black' }}
                    selectedValue={gender}
                    onValueChange={(itemValue) => setGender(itemValue)}>
                    <Picker.Item label=" " value="none"></Picker.Item>
                    <Picker.Item label="Male" value="male"></Picker.Item>
                    <Picker.Item label="Female" value="female"></Picker.Item>
                </Picker>
            </View>

            <View style={styles.pickerContainer}>
                <Text style={{ color: 'black' }}>Unit System To Use</Text>
                <Picker
                    style={{ width: '100%', color: 'black' }}
                    selectedValue={metric}
                    onValueChange={(itemValue) => setMetric(itemValue)}>
                    <Picker.Item label=" " value="none"></Picker.Item>
                    <Picker.Item label="U.S. Customatry Unit System" value="customatry"></Picker.Item>
                    <Picker.Item label="Metric Unit System" value="metric"></Picker.Item>
                </Picker>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Height (inches/centimeters)"
                value={height}
                onChangeText={(val) => setHeight(val)}
                keyboardType="numeric">
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder="Weight (pounds/kilograms)"
                value={weight}
                onChangeText={(val) => setWeight(val)}
                keyboardType="numeric">
            </TextInput>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    verify(age, gender, metric, email, weight, height, firstName, lastName, password, occupation, { navigation });
                }}>
                <Text style={styles.buttonText}>
                    Create account
                </Text>
            </TouchableOpacity>

        </View>
    );
}

function verify(age, gender, metric, email, weight, height, firstName, lastName, password, occupation, { navigation }) {
    if (age === '' || gender === '' || metric === '' || email === '' || weight === '' || height === '' || firstName === '' || lastName === '' || password === '' || occupation === '') {
        Alert.alert("Missing information", "Please fill out all components", [{ text: "ok" }])
    }
    else {
        Alert.alert("Registration complete!", "You're all done", [{ text: "ok" }]);
        navigation.navigate("Login");
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