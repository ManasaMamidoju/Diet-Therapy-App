import { StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { Component } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 1.5;
const BORDER_RADIUS = 75;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.3 }}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/checklist.png")} style={styles.bgImage} />
                </View>
            </View>

            <View style={{ flex: 0.4, backgroundColor: 'white', justifyContent: 'center' }}>
                <Text style={styles.title}>
                    Let's get started
                </Text>
                <Text style={styles.description}>
                    complete the questionnaire below to {"\n"} start your 3 week diet session
                </Text>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => navigation.navigate("Questionnaire")}>
                    <Text style={styles.appButtonText}>
                        Take questionnaire
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.3 }}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/typing.png")} style={styles.bgImage} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: 10
    },
    text: {
        fontSize: 50
    },
    bottomButtonContainer: {
        //backgroundColor: "cyan",
        //flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: 'absolute',
        bottom: 35,
        paddingBottom: 10
    },
    appButtonContainer: {
        //elevation: 8,
        backgroundColor: "white",
        paddingVertical: 10,
        marginHorizontal: 12,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
        borderRadius: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
    },
    sideRowPadding: {
        flex: 0.05
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
        width: '100%'
    },
    bgImageContainer: {
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    welcomeHeaderText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
    },
    title: {
        fontSize: 45,
        color: 'black',
        textAlign: 'center',
    },
    description: {
        fontSize: 21,
        color: 'darkgray',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15
    },

});