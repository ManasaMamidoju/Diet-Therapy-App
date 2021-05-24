import { Alert, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.bgImageContainer}>
                <Image source={require("../assets/healthy.png")} style={styles.bgImage} />
            </View>

            <View style={{ flex: 0.4 }}>
                <View style={styles.welcomeHeaderContainer}>
                    <Text style={styles.welcomeHeaderText}>
                        Welcome to D-light!
                    </Text>
                </View>
            </View>

            <View style={{ flex: 0.3, flexDirection: 'row' }}>
                <View style={styles.sideRowPadding} />
                <View style={{ flex: 0.9 }}>
                    <TextInput
                        style={styles.input} F
                        placeholder="Email"
                        value={email}
                        onChangeText={(val) => setEmail(val)}>
                    </TextInput>

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry>
                    </TextInput>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => {
                            verify(email, password, { navigation });
                        }}>
                        <Text style={styles.buttonText}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => {
                            navigation.navigate("CreateAccount");
                        }}>
                        <Text style={styles.buttonText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sideRowPadding} />
            </View>

            <View style={{ flex: 0.3 }}>

            </View>
        </View>
    );
}

function verify(username, password, { navigation }) {
    if (username === '' || password === '') {
        Alert.alert("Login failed", "Please enter valid credentials", [{ text: "ok" }]);
        //printAnswers(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer, q7answer, q8answer, q9answer, q10answer);
    }
    else {
        navigation.navigate("TabManager");
    }
}

const styles = StyleSheet.create({
    container: {
        //padding: 20,
        flex: 1
    },
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
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
    },
    bgImageContainer: {
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    welcomeHeaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    welcomeHeaderText: {
        fontSize: 60,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center'
    },
    sideRowPadding: {
        flex: 0.05
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        marginBottom: 20,
        paddingHorizontal: 10
    },
});