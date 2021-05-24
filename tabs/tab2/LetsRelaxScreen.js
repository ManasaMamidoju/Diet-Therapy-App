import { Pressable, Modal, Animated, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 1.5;
const mBORDER_WIDTH = 1.5;

let beginClock = false;

let minutesSet = false;
let secondsSet = false;

export default function LetsRelaxScreen({ navigation }) {

    const [timerSetup, setTimerSetup] = useState(false);
    const [timerMinutes, setTimerMinutes] = useState(false);
    const [timerSeconds, setTimerSeconds] = useState(false);

    const [tempInput, setTempInput] = useState(null);

    const [minutes, setMinutes] = useState("1");
    const [seconds, setSeconds] = useState("1");

    const [secondsProgress, setSecondsProgress] = useState("00:00");

    let totalSeconds = 1;

    if (minutesSet && secondsSet) {
        totalSeconds = Math.round((minutes * 60) + seconds);
    }

    let secondsLeft = totalSeconds;

    useInterval(() => {
        if (beginClock) {
            if (secondsLeft >= 0) {
                secondsLeft--;
                let t1 = Math.floor(secondsLeft / 60);
                let t2 = Math.floor(secondsLeft % 60);
                setMinutes(t1);
                setSeconds(t2);
                let m = (minutes >= 10) ? minutes.toString() : "0" + minutes.toString();
                let s = (seconds >= 10) ? seconds.toString() : "0" + seconds.toString();

                let v = m + ":" + s;
                setSecondsProgress(v);
            }
            if (secondsLeft < 0) {
                console.log("seconds = 0");
                setSecondsProgress("00:00");
                beginClock = false;
                minutesSet = false;
                secondsSet = false;
            }
        }
    }, 1000);

    return (
        <View style={styles.defualtContainer}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={timerSetup}
                onRequestClose={() => {
                    setTimerSetup(!timerSetup);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.74 }} />

                    <View style={{ flex: 0.26, backgroundColor: 'lightblue', justifyContent: 'center', marginBottom: 50 }}>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTimerMinutes(true);
                            }}>
                            <Text style={styles.appButtonText}>
                                Setup minutes
                            </Text>
                        </Pressable>

                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTimerSeconds(true);
                            }}>
                            <Text style={styles.appButtonText}>
                                Setup seconds
                            </Text>
                        </Pressable>

                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                beginClock = true;
                                setTimerSetup(!timerSetup);
                            }}>
                            <Text style={styles.appButtonText}>
                                Start timer
                            </Text>
                        </Pressable>
                    </View>

                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={timerMinutes}
                onRequestClose={() => {
                    setTimerMinutes(!timerMinutes);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.33, flexDirection: 'row' }}>
                        <View style={{ flex: 0.1 }} />
                        <View style={styles.modalContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.modalTitle}>
                                    Enter the minutes {"\n"} component for the timer
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Minutes"
                                    value={tempInput}
                                    keyboardType="numeric"
                                    onChangeText={(val) => setTempInput(val)}>
                                </TextInput>

                                <Pressable style={styles.save}
                                    onPress={() => {
                                        minutesSet = true;
                                        let t = parseInt(tempInput);
                                        setMinutes(t);
                                        setTempInput(null);
                                        setTimerMinutes(!timerMinutes);
                                        //console.log("minutes: " + minutes);
                                    }}>
                                    <Text style={styles.mappButtonText2}>
                                        Save
                                    </Text>
                                </Pressable>

                                <Pressable style={styles.cancel}
                                    onPress={() => {
                                        setTempInput(null);
                                        setTimerMinutes(!timerMinutes);
                                    }}>
                                    <Text style={styles.mappButtonText2}>
                                        Cancel
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ flex: 0.1 }} />
                    </View>
                    <View style={{ flex: 0.32 }} />
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={timerSeconds}
                onRequestClose={() => {
                    setTimerSeconds(!timerSeconds);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.33, flexDirection: 'row' }}>
                        <View style={{ flex: 0.1 }} />
                        <View style={styles.modalContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.modalTitle}>
                                    Enter the seconds {"\n"} component for the timer
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Seconds"
                                    value={tempInput}
                                    keyboardType="numeric"
                                    onChangeText={(val) => setTempInput(val)}>
                                </TextInput>

                                <Pressable style={styles.save}
                                    onPress={() => {
                                        secondsSet = true;
                                        let t = parseInt(tempInput);
                                        setSeconds(t);
                                        setTempInput(null);
                                        setTimerSeconds(!timerSeconds);
                                        //console.log("seconds: " + seconds);
                                    }}>
                                    <Text style={styles.mappButtonText2}>
                                        Save
                                    </Text>
                                </Pressable>

                                <Pressable style={styles.cancel}
                                    onPress={() => {
                                        setTempInput(null);
                                        setTimerSeconds(!timerSeconds);
                                    }}>
                                    <Text style={styles.mappButtonText2}>
                                        Cancel
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ flex: 0.1 }} />
                    </View>
                    <View style={{ flex: 0.32 }} />
                </View>
            </Modal>



            <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>
                    Let's relax!
                </Text>
                <Text style={styles.description}>
                    Take a moment to relax and meditate {"\n"} for a couple of minutes
                </Text>
            </View>

            <View style={{ flex: 0.3, backgroundColor: 'lightblue' }}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/meditating.png")} style={styles.bgImage} />
                </View>
            </View>

            <View style={{ flex: 0.25 }}>
                <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 75, color: 'black' }}>
                        {`${secondsProgress}`}
                    </Text>
                </View>
            </View>

            <View style={{ flex: 0.25, backgroundColor: '#E8E8E8', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        setTimerSetup(true);
                    }}>
                    <Text style={styles.appButtonText}>
                        Setup timer
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        setMinutes(0);
                        setSeconds(0);
                        minutesSet = false;
                        secondsSet = false;
                        beginClock = false;
                        setSecondsProgress("00:00");
                    }}>
                    <Text style={styles.appButtonText}>
                        Reset timer
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
        fontSize: 50
    },
    appButtonContainer: {
        //elevation: 8,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 5,
        marginHorizontal: 10,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
        //borderRadius: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
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
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    progressBar: {
        height: 20,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: "row"
    },
    modalTitle: {
        color: 'black',
        //fontWeight: 'bold', 
        fontSize: 25,
        paddingBottom: 10,
        textAlign: 'center'
    },
    input: {
        textAlign: 'center',
        backgroundColor: 'white',
        height: 40,
        marginBottom: 5,
        paddingHorizontal: 89,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
    },
    save: {
        backgroundColor: "#a7fac7",
        //backgroundColor: 'white',
        elevation: 8,
        //borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 6,
        marginTop: 5,
        width: '70%',
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
    },
    reset: {
        backgroundColor: "white",
        //backgroundColor: 'white',
        elevation: 8,
        //borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 6,
        marginTop: 5,
        width: '70%',
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
    },
    cancel: {
        //backgroundColor: "lightgray",
        backgroundColor: 'white',
        elevation: 8,
        //borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 6,
        marginTop: 5,
        width: '70%',
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
    },
    mappButtonText2: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 0.8,
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
    },

});