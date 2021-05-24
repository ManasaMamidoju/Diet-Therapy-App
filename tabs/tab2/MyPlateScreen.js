import { FlatList, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons'

const CIRCLE_DIMENSIONS = 250;
const BORDER_WIDTH = 1.5;

let gender = 'male';
let weight = 60;
let calories = 0;
let calorieRange = "";

let grainsServings = 0;
let vegetablesServings = 0;
let fruitsServings = 0;
let dairyServings = 0;
let proteinServings = 0;


export default function MyPlateScreen({ navigation }) {

    if (gender === 'male') {
        calories = Math.round(weight * 24 * 1 * 1.1 * 1.3)
    }
    if (gender === 'female') {
        calories = Math.round(weight * 24 * 0.95 * 1.1 * 1.3)
    }

    if (calories >= 1200 && calories < 1500) {
        calorieRange = "1200-1499";
        grainsServings = 7;
        vegetablesServings = 4;
        fruitsServings = 3;
        dairyServings = 2;
        proteinServings = 5;
    }
    if (calories >= 1500 && calories < 1800) {
        calorieRange = "1500-1799";
        grainsServings = 8;
        vegetablesServings = 5;
        fruitsServings = 4;
        dairyServings = 2;
        proteinServings = 6;
    }
    if (calories >= 1800 && calories < 2000) {
        calorieRange = "1800-1999";
        grainsServings = 9;
        vegetablesServings = 5;
        fruitsServings = 4;
        dairyServings = 3;
        proteinServings = 6;
    }
    if (calories >= 2000 && calories < 2200) {
        calorieRange = "2000-2199";
        grainsServings = 11;
        vegetablesServings = 5;
        fruitsServings = 4;
        dairyServings = 3;
        proteinServings = 6;
    }
    if (calories >= 2200 && calories < 2600) {
        calorieRange = "2200-2599";
        grainsServings = 13;
        vegetablesServings = 6;
        fruitsServings = 5;
        dairyServings = 3;
        proteinServings = 7;
    }
    if (calories >= 2600 && calories < 3000) {
        calorieRange = "2600-2999";
        grainsServings = 15;
        vegetablesServings = 6;
        fruitsServings = 6;
        dairyServings = 3;
        proteinServings = 8;
    }
    if (calories >= 3000 && calories < 3500) {
        calorieRange = "3000-3500";
        grainsServings = 17;
        vegetablesServings = 6;
        fruitsServings = 6;
        dairyServings = 3;
        proteinServings = 8;
    }

    const servings = {
        serving: {
            '1': fruitsServings,
            '2': vegetablesServings,
            '3': grainsServings,
            '4': proteinServings,
            '5': dairyServings,
        }
    };

    const [category, setCategory] = useState([
        { name: 'Fruits', id: '1' },
        { name: 'Vegetables', id: '2' },
        { name: 'Grains', id: '3' },
        { name: 'Proteins', id: '4' },
        { name: 'Dairy', id: '5' },
    ]);
    const [containers, setContainers] = useState([
        { number: '1.', id: '1' },
        { number: '2.', id: '2' },
        { number: '3.', id: '3' },
        { number: '4.', id: '4' },
        { number: '5.', id: '5' },
        { number: '6.', id: '6' },
        { number: '7.', id: '7' },
        { number: '8.', id: '8' },
        { number: '9.', id: '9' },
    ]);

    // const [calorieGroup, setCalorieGroup] = useState([
    //     { range: '1200-1499', id: '1', grain: '7', vegetables: '4', fruits: '3', dairy: '2', protein: '5' },
    //     { range: '1500-1799', id: '2', grain: '8', vegetables: '5', fruits: '4', dairy: '2', protein: '6' },
    //     { range: '1800-1999', id: '3', grain: '9', vegetables: '5', fruits: '4', dairy: '3', protein: '6' },
    //     { range: '2000-2199', id: '4', grain: '11', vegetables: '5', fruits: '4', dairy: '3', protein: '6' },
    //     { range: '2200-2599', id: '5', grain: '13', vegetables: '6', fruits: '5', dairy: '3', protein: '7' },
    //     { range: '2600-2999', id: '6', grain: '15', vegetables: '6', fruits: '6', dairy: '3', protein: '8' },
    //     { range: '3000-3500', id: '7', grain: '17', vegetables: '6', fruits: '6', dairy: '3', protein: '8' },
    // ]);

    const [calorieGroup, setCalorieGroup] = useState([
        { range: calorieRange, id: '1', grain: grainsServings, vegetables: vegetablesServings, fruits: fruitsServings, dairy: dairyServings, protein: proteinServings },

    ]);

    return (
        <View style={styles.defualtContainer}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={containers}
                renderItem={({ item }) => (
                    <View>
                        {filterContainers(item, category, servings, calorieGroup, { navigation })}
                    </View>
                )}
            />
        </View>
    );
}

function filterContainers(item, category, servings, calorieGroup, { navigation }) {
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
        return view4(category, servings);
    }
    else if (item.id === '5') {
        return view5(calorieGroup);
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
    else {
        return view9({ navigation });
    }
}

function calorieDisplay() {
    return gender === 'male' ? `${weight}kg * 24 * 1 * 1.1 * 1.3` : `${weight}kg * 24 * 0.95 * 1.1 * 1.3`;
}

function view1() {
    return (
        <View style={styles.cardContainer1}>
            <Text style={styles.title}>
                To do list
            </Text>
            <Text style={styles.description}>
                Maintain the following daily intake of calories and servings of each category
            </Text>
        </View>
    );
}

function view2() {
    return (
        <View style={styles.cardContainer2}>
            <View style={styles.card}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/fooddisplay.png")} style={styles.bgImage} />
                </View>
            </View>
        </View>
    );
}

function view3() {
    return (
        <View style={styles.cardContainer3}>
            <View style={{ flex: 0.15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontSize: 35 }}>
                    How much should I eat?
                </Text>
            </View>
            <View style={{ flex: 0.2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingBottom: 10 }}>
                <Text style={styles.description}>
                    The amount of calories one needs {"\n"} to take each day is based partly on {"\n"} their weight and gender
                </Text>
            </View>
            <View style={{ flex: 0.45, backgroundColor: '#E8E8E8' }}>
                <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>
                        So based off of your weight and gender,
                    </Text>
                </View>
                <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>
                        Weight = {weight}kg and Gender = {gender},
                    </Text>
                </View>
                <View style={{ flex: 0.33, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>
                        You would need a daily total of:
                    </Text>
                </View>
            </View>
            <View style={{ flex: 0.20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: 'black' }}>
                    {calories} calories
                </Text>
            </View>
        </View>
    );
}

function view4(category, servings) {
    const images = {
        image: {
            '1': require("../../assets/fruits.png"),
            '2': require("../../assets/vegetables.png"),
            '3': require("../../assets/grains.png"),
            '4': require("../../assets/proteins.png"),
            '5': require("../../assets/dairy.png"),
        }
    };
    return (
        <View style={styles.cardContainer4}>
            <View style={styles.card}>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    data={category}
                    renderItem={({ item }) => (
                        <View>
                            <View style={styles.cardContainerh}>
                                <View style={styles.bgImageContainerRow}>
                                    <Image source={images.image[item.id]} style={styles.bgImage} />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'white' }}>
                                <Text style={{ paddingBottom: 25, marginHorizontal: 10, fontSize: 20, fontWeight: 'bold', color: 'darkgray' }}>
                                    Daily servings: {servings.serving[item.id]}
                                </Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

function view5(calorieGroup) {
    return (
        <View style={styles.cardContainer5}>
            <View style={styles.card}>
                <FlatList
                    horizontal={true}
                    keyExtractor={(item) => item.id}
                    data={calorieGroup}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainerh2}>
                            <View style={{ flex: 0.25, backgroundColor: '#E8E8E8', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
                                    Calorie range:
                                </Text>
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
                                    {item.range}
                                </Text>
                                {/* <Ionicons name={iconName} color={color} size={size} /> */}
                            </View>
                            <View style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>
                                    Grain servings: {item.grain}
                                </Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>
                                    Vegetable servings: {item.vegetables}
                                </Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>
                                    Fruit servings: {item.fruits}
                                </Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>
                                    Dairy servings: {item.dairy}
                                </Text>
                                <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>
                                    Protein servings: {item.protein}
                                </Text>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>
    );
}



function view6() {
    return (
        <View style={styles.cardContainer6}>
            <Text style={styles.title}>
                Not to do list
            </Text>
            <Text style={styles.description}>
                Refrain from eating too much of what {"\n"}is not necessary
            </Text>
        </View>
    );
}

function view7() {
    return (
        <View style={styles.cardContainer7}>
            <View style={styles.card}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/sugar.png")} style={styles.bgImage} />
                </View>
            </View>
        </View>
    );
}

function view8() {
    return (
        <View style={styles.cardContainer8}>
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
                * Limit sugary foods such as cookies,{"\n"} donuts, and other sweets.
            </Text>
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
                * Refrain from the use of too much salt.
            </Text>
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
                * Avoid unnecessary amounts of butter.
            </Text>
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black' }}>
                * Keep unhealthy drinks such as soft drinks to a minimum.
            </Text>
        </View>
    );
}

function view9({ navigation }) {
    return (
        <View style={styles.cardContainer9}>
            <View style={styles.bottomButtonArea}>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        navigation.navigate("FlatListDisplay");
                    }}>
                    <Text style={styles.appButtonText}>
                        go back
                    </Text>
                </TouchableOpacity>
            </View>
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
    cardContainerh: {
        //backgroundColor: "red",
        //flex: 1,
        height: 250,
        width: 260
    },
    cardContainerh2: {
        //backgroundColor: "red",
        //flex: 1,
        height: 235,
        width: 375,
        //backgroundColor: 'lightgray',
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
        borderBottomColor: 'black',
        borderTopColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
    },
    bgImageContainerRow: {
        flex: 1,
        flexDirection: 'row',
        //marginHorizontal: 10, // adds space to the left of card view (seperates cards my making space inbetween)
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    bgImageContainer: {
        //flex: 1,
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    textContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        top: 0,
        paddingLeft: 5,
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
    bottomButtonArea: {
        //backgroundColor: 'lightgreen',
        height: 65,
        paddingVertical: 10
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
        //paddingTop: 5,
        //paddingBottom: 5,
        marginHorizontal: 10,
        paddingHorizontal: 12,
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
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer1: {
        flex: 1,
        backgroundColor: 'white',
        height: 175,
        justifyContent: 'center'
    },
    cardContainer2: {
        flex: 1,
        backgroundColor: 'white',
        height: 250
    },
    cardContainer3: {
        flex: 1,
        backgroundColor: 'white',
        height: 400
    },
    cardContainer4: {
        flex: 1,
        backgroundColor: 'white',
        height: 300
    },
    cardContainer5: {
        flex: 1,
        backgroundColor: 'white',
        height: 250,
    },
    cardContainer6: {
        flex: 1,
        backgroundColor: 'white',
        height: 200,
        justifyContent: 'center'
    },
    cardContainer7: {
        flex: 1,
        backgroundColor: 'white',
        height: 200
    },
    cardContainer8: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer9: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        height: 70
    },


});