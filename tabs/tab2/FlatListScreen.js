import { StyleSheet, Image, Text, View, Button, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function FlatListScreen({ navigation }) {
    const [people, setPeople] = useState([
        { name: 'Let\'s move!', id: '1' },
        { name: 'My plate', id: '2' },
        { name: 'Sleep tight', id: '3' },
        { name: 'Let\'s relax!', id: '4' },
    ]);
    const images = {
        image: {
            '1': require("../../assets/running.png"),
            '2': require("../../assets/center_bowl.png"),
            '3': require("../../assets/sleeping.png"),
            '4': require("../../assets/relax.png"),
        }
    }
    const screens = {
        screen: {
            '1': "LetsMove",
            '2': "MyPlate",
            '3': "SleepTight",
            '4': "LetsRelax",
        }
    }
    const pressHandler = (id) => {
        console.log(id);
    }
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(screens.screen[item.id])}>
                        <View style={styles.cardContainer}>
                            <View style={styles.bgImageContainer}>
                                <Image source={images.image[item.id]} style={styles.bgImage} /*resizeMethod={'scale'}*/ />
                                <View style={styles.textContainer}>
                                    <Text style={styles.text}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20, // adds space at the top of the view (screen)
        //paddingHorizontal: 20, // adds space to the sides of the view
        backgroundColor: "white"
    },
    cardContainer: {
        //backgroundColor: "red",
        flex: 1,
        height: 250,
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
    },
    bgImageContainer: {
        flex: 1,
        paddingTop: 20, // adds space at top of card view (seperates cards my making space inbetween)
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    textContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        bottom: 0,
        paddingLeft: 5
    },
});