import { FlatList, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 1.5;

export default function ExerciseHelpScreen({ navigation }) {

    const [views, setViews] = useState([
        { number: '1.', id: '1' },
        { number: '2.', id: '2' },
        { number: '3.', id: '3' },
        { number: '4.', id: '4' },
        { number: '5.', id: '5' },
        { number: '6.', id: '6' },
        { number: '7.', id: '7' },
        { number: '8.', id: '8' },
        { number: '9.', id: '9' },
        { number: '10.', id: '10' },
    ]);

    return (
        <View style={styles.defualtContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={views}
                renderItem={({ item }) => (
                    <View>
                        {filterViews(item, { navigation })}
                    </View>
                )}
            />
        </View>
    );
}

function filterViews(item, { navigation }) {
    if (item.id === '1') {
        return view1();
    }
    else if (item.id === '2') {
        return view2();
    }
    else if (item.id === '3') {
        return view3();
    }
    else if (item.id === '4') {
        return view4();
    }
    else if (item.id === '5') {
        return view5();
    }
    else if (item.id === '6') {
        return view6();
    }
    else if (item.id === '7') {
        return view7();
    }
    else if (item.id === '8') {
        return view8();
    }
    else if (item.id === '9') {
        return view9();
    }
    else {
        return view10({ navigation });
    }
}

function view1() {
    return (
        <View style={{ height: 200, backgroundColor: 'white', justifyContent: 'center' }}>
            <Text style={styles.title}>
                Help is here!
            </Text>
            <Text style={styles.description}>
                Here's a list of categorties and activites {"\n"} to help you undestand different {"\n"} kinds of exercises
            </Text>
        </View>
    );
}

function view2() {
    return (
        <View style={styles.pictureView}>
            <View style={styles.bgImageContainer}>
                <Image source={require("../../assets/endurance.png")} style={styles.bgImage} />
            </View>
        </View>
    );
}

function view3() {
    return (
        <View style={styles.infoView}>
            <Text style={styles.categoryText}>
                Endurance exercises
            </Text>
            <Text style={styles.infoText}>
                * Running or jogging
            </Text>
            <Text style={styles.infoText}>
                * Biking
            </Text>
            <Text style={styles.infoText}>
                * Sports such as tennis, basketball or soccer
            </Text>
            <Text style={styles.infoText}>
                * Swimming
            </Text>
        </View>
    );
}

function view4() {
    return (
        <View style={styles.pictureView}>
            <View style={styles.bgImageContainer}>
                <Image source={require("../../assets/strength.png")} style={styles.bgImage} />
            </View>
        </View>
    );
}

function view5() {
    return (
        <View style={styles.infoView}>
            <Text style={styles.categoryText}>
                Strength exercises
            </Text>
            <Text style={styles.infoText}>
                Weight lifting
            </Text>
            <Text style={styles.infoText}>
                * Bicep curls, tricep exercises, squating, benching, any use of dumbells
            </Text>
            <Text style={styles.infoText}>
                Calisthenics
            </Text>
            <Text style={styles.infoText}>
                * Push ups, sit ups, crunches, dips, planks 
            </Text>
        </View>
    );
}

function view6() {
    return (
        <View style={styles.pictureView}>
            <View style={styles.bgImageContainer}>
                <Image source={require("../../assets/balance.png")} style={styles.bgImage} />
            </View>
        </View>
    );
}

function view7() {
    return (
        <View style={styles.infoView}>
            <Text style={styles.categoryText}>
                Balance exercises
            </Text>
            <Text style={styles.infoText}>
                * Tai Chi
            </Text>
            <Text style={styles.infoText}>
                * Standing on one foot
            </Text>
            <Text style={styles.infoText}>
                * Heel-to-toe walk
            </Text>
            <Text style={styles.infoText}>
                * Balance walk
            </Text>
            <Text style={styles.infoText}>
                * Single leg lift, single leg side lift
            </Text>
        </View>
    );
}

function view8() {
    return (
        <View style={styles.pictureView}>
            <View style={styles.bgImageContainer}>
                <Image source={require("../../assets/stretch.png")} style={styles.bgImage} />
            </View>
        </View>
    );
}

function view9() {
    return (
        <View style={styles.infoView}>
            <Text style={styles.categoryText}>
                Flexibility exercises
            </Text>
            <Text style={styles.infoText}>
                Static stretching 
            </Text>
            <Text style={styles.infoText}>
                * Back stretches, inner thigh stretch, ankle stretch, leg stretches
            </Text>
            <Text style={styles.infoText}>
                Dynamic stretching
            </Text>
            <Text style={styles.infoText}>
                * Knee-to-chest, jump lunges, squats, high kicks
            </Text>
        </View>
    );
}

function view10({ navigation }) {
    return (
        <View style={{ height: 100, backgroundColor: 'white', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.appButtonContainer}
                onPress={() => {
                    navigation.navigate("PhysicalActivity");
                }}>
                <Text style={styles.appButtonText}>
                    Go back
                </Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    defualtContainer: {
        flex: 1,
    },
    defaultText: {
        fontSize: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: 'center'
    },
    appButtonContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 10,
        marginVertical: 5,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH + 0.5,
        borderTopWidth: BORDER_WIDTH + 0.5,
        borderRightWidth: BORDER_WIDTH + 0.5,
        borderLeftWidth: BORDER_WIDTH + 0.5,
        borderRadius: 50
    },
    pictureView: {
        height: 250,
        flex: 1,
        backgroundColor: 'white'
    },
    infoView: {
        height: 250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    infoText: {
        color: 'darkgray',
        fontSize: 20,
        textAlign: 'center'
    },
    categoryText: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center'
    },
    title: {
        fontSize: 45,
        color: 'black',
        textAlign: 'center'
    },
    description: {
        fontSize: 21,
        color: 'darkgray',
        textAlign: 'center'
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
        width: '100%'
    },
    bgImageContainer: {
        //flex: 1,
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },

});