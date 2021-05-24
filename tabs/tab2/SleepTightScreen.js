import { FlatList, Pressable, Modal, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 2;


let currentId = 11;
var sleepHistory = [
    { date: '03/23/2021', id: '1', hours: '7' },
    { date: '03/24/2021', id: '2', hours: '8' },
    { date: '03/25/2021', id: '3', hours: '8' },
    { date: '03/26/2021', id: '4', hours: '7' },
    { date: '03/27/2021', id: '5', hours: '6' },
    { date: '03/28/2021', id: '6', hours: '8' },
    { date: '03/29/2021', id: '7', hours: '7' },
    { date: '03/30/2021', id: '8', hours: '8' },
    { date: '03/31/2021', id: '9', hours: '8' },
    { date: '04/01/2021', id: '10', hours: '7' },
];

let beginClock = false;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

let hourInput = 0;

export default function SleepTightScreen({ navigation }) {

    const [updateV, setUpdateV] = useState(0);

    const [inputModal, setInputModal] = useState(false);
    const [historyModal, setHistoryModal] = useState(false);

    //const [hourInput, setHourInput] = useState(null);
    const [tempInput, setTempInput] = useState(null);

    


    return (
        <View style={styles.defualtContainer}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={inputModal}
                onRequestClose={() => {
                    setInputModal(!inputModal);
                }}>
                <View style={{ height: 200, backgroundColor: '#E8E8E8', justifyContent: 'center' }}>
                    <Text style={styles.modalTitle}>
                        How many hours did you sleep?
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Hours slept"
                        value={tempInput}
                        keyboardType="numeric"
                        onChangeText={(val) => setTempInput(val)}>
                    </TextInput>
                    <Pressable style={styles.modalButtonContainer}
                        onPress={() => {
                            hourInput = tempInput.toString();
                            //setHourInput(tempInput.toString());
                            sleepHistory.push({ date: today, id: currentId.toString, hours: hourInput });
                            currentId++;
                            beginClock = true;
                            setInputModal(!inputModal);
                        }}>
                        <Text style={styles.modalButtonText}>
                            Save
                        </Text>
                    </Pressable>
                    <Pressable style={styles.modalButtonContainer}
                        onPress={() => {
                            setInputModal(!inputModal);
                        }}>
                        <Text style={styles.modalButtonText}>
                            Cancel
                        </Text>
                    </Pressable>

                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={historyModal}
                onRequestClose={() => {
                    setHistoryModal(!historyModal);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.26 }} />
                    <View style={styles.historyModal}>

                        <View style={{ flex: 0.25, backgroundColor: 'white' }}>
                            <Text style={styles.title}>
                                Sleep history
                            </Text>
                            <Text style={styles.description}>
                                Are you sleeping too little? too much? {"\n"} Let's take a look
                            </Text>
                        </View>

                        <View style={{ flex: 0.6, backgroundColor: 'white' }}>
                            <FlatList
                                keyExtractor={(item) => item.id}
                                data={sleepHistory}
                                renderItem={({ item }) => (
                                    <View>
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.date}>
                                                Date: {item.date}  Hours: {item.hours}
                                            </Text>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>

                        <View style={{ flex: 0.15, backgroundColor: 'white', justifyContent: 'center' }}>
                            <Pressable style={styles.appButtonContainer}
                                onPress={() => {
                                    setHistoryModal(!historyModal);
                                }}>
                                <Text style={styles.appButtonText}>
                                    Close
                                </Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>

            <View style={{ flex: 0.3, backgroundColor: 'white' }}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/sleeping2.png")} style={styles.bgImage} />
                </View>
            </View>

            <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                <Text style={styles.title}>
                    Sleep tight
                </Text>
                <Text style={styles.description}>
                    Keep track and monitor your daily {"\n"} sleep schedule here
                </Text>
            </View>

            <View style={{ flex: 0.5, backgroundColor: 'white', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        setInputModal(true);
                    }}>
                    <Text style={styles.appButtonText}>
                        Enter last night's sleep
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        //console.log("today: " + today);
                        setHistoryModal(true);
                    }}>
                    <Text style={styles.appButtonText}>
                        View sleep history
                    </Text>
                </TouchableOpacity>
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

function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const styles = StyleSheet.create({
    defualtContainer: {
        flex: 1,
    },
    defaultText: {
        fontSize: 50,
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
        marginHorizontal: 15,
        marginVertical: 10,
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
    modalButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: 'center'
    },
    modalButtonContainer: {
        backgroundColor: 'white',
        paddingVertical: 5,
        //paddingTop: 5,
        //paddingBottom: 5,
        marginHorizontal: 40,
        marginVertical: 5,
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
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
    },
    bgImageContainer: {
        //flex: 1,
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
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
    input: {
        textAlign: 'center',
        backgroundColor: 'white',
        height: 40,
        marginBottom: 5,
        marginHorizontal: 40,
        paddingHorizontal: 89,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    modalTitle: {
        color: 'black',
        //fontWeight: 'bold', 
        fontSize: 23,
        paddingBottom: 10,
        textAlign: 'center'
    },
    historyModal: {
        flex: 0.74,
        backgroundColor: '#E8E8E8'
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
    dateContainer: {
        height: 50,
        backgroundColor: '#F8F8F8',
        marginVertical: 10,
        justifyContent: 'center',
        elevation: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 50
    },
    date: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    }
});