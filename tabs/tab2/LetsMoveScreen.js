import { Picker, Pressable, Modal, Animated, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';

//import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const BORDER_WIDTH = 2;
const mBORDER_WIDTH = 2;

let hasSetGoals = false;

let proceed1 = false;
let proceed2 = false;

export default function LetsMoveScreen({ navigation }) {
    const [goalModalVisible, setGoalModalVisible] = useState(false);

    const [optionsModalVisible, setOptionsModalVisible] = useState(false);

    const [addprogress1modal, setaddprogress1modal] = useState(false);
    const [addprogress2modal, setaddprogress2modal] = useState(false);

    const [resetprogress1modal, setresetprogress1modal] = useState(false);
    const [resetprogress2modal, setresetprogress2modal] = useState(false);

    const [goal1countprogress, setGoal1countprogress] = useState(0);
    const [goal2countprogress, setGoal2countprogress] = useState(0);

    const [goal1, setGoal1] = useState("");
    const [goal2, setGoal2] = useState("");

    // eg 50
    const [goal1Target, setGoal1Target] = useState('0');
    // eg 25
    const [goal2Target, setGoal2Target] = useState('0');

    const [tempInput, setTempInput] = useState(null);

    let animation1 = useRef(new Animated.Value(0));
    let animation2 = useRef(new Animated.Value(0));

    // percentage done so far by user
    const [progress1percentage, setProgress1percentage] = useState(0);
    const [progress2percentage, setProgress2percentage] = useState(0);

    const width1 = animation1.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    });

    const width2 = animation2.current.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    });

    useInterval(() => {
        if (proceed1) {
            if (progress1percentage < 100) {
                let t = Math.round((goal1countprogress / goal1Target) * 100);
                setProgress1percentage(t);
            }
            proceed1 = false;
        }
        if (proceed2) {
            if (progress2percentage < 100) {
                let t = Math.round((goal2countprogress / goal2Target) * 100);
                setProgress2percentage(t);
            }
            proceed2 = false;
        }
    }, 1000);

    useEffect(() => {
        Animated.timing(animation1.current, {
            toValue: progress1percentage,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }, [progress1percentage]);

    useEffect(() => {
        Animated.timing(animation2.current, {
            toValue: progress2percentage,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }, [progress2percentage]);

    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={false}
                visible={goalModalVisible}
                onRequestClose={() => {
                    setGoalModalVisible(!goalModalVisible);
                }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={styles.infoTitle}>
                        <Text style={styles.defaultText}>
                            Let's set some goals
                        </Text>
                        <Text style={styles.infoText}>
                            Select 2 goals and your desired target {"\n\t    "} for them over the next 3 weeks
                        </Text>
                    </View>

                    <View style={styles.middle}>
                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerTitle}>Activity for goal 1</Text>
                            <Picker
                                selectedValue={goal1}
                                onValueChange={(itemValue) => setGoal1(itemValue)}>
                                <Picker.Item label="" value="0"></Picker.Item>
                                <Picker.Item label="Running (mi)" value="Running (mi)"></Picker.Item>
                                <Picker.Item label="Running (km)" value="Running (km)"></Picker.Item>
                                <Picker.Item label="Push-ups" value="Push-ups"></Picker.Item>
                                <Picker.Item label="Sit-ups" value="Sit-ups"></Picker.Item>
                                <Picker.Item label="Squats" value="Squats"></Picker.Item>
                                <Picker.Item label="Crunches" value="Crunches"></Picker.Item>
                                <Picker.Item label="Curls" value="Curls"></Picker.Item>
                            </Picker>
                        </View>


                        <TextInput
                            style={styles.input}
                            placeholder="Choose target for goal 1"
                            value={goal1Target}
                            keyboardType="numeric"
                            onChangeText={(val) => setGoal1Target(val)}>
                        </TextInput>


                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerTitle}>Activity for goal 2</Text>
                            <Picker
                                selectedValue={goal2}
                                onValueChange={(itemValue) => setGoal2(itemValue)}>
                                <Picker.Item label="" value="0"></Picker.Item>
                                <Picker.Item label="Running (mi)" value="Running (mi)"></Picker.Item>
                                <Picker.Item label="Running (km)" value="Running (km)"></Picker.Item>
                                <Picker.Item label="Push-ups" value="Push-ups"></Picker.Item>
                                <Picker.Item label="Sit-ups" value="Sit-ups"></Picker.Item>
                                <Picker.Item label="Squats" value="Squats"></Picker.Item>
                                <Picker.Item label="Crunches" value="Crunches"></Picker.Item>
                                <Picker.Item label="Curls" value="Curls"></Picker.Item>
                            </Picker>
                        </View>


                        <TextInput
                            style={styles.input}
                            placeholder="Choose target for goal 2"
                            value={goal2Target}
                            keyboardType="numeric"
                            onChangeText={(val) => setGoal2Target(val)}>
                        </TextInput>

                        <Pressable style={styles.mappButtonContainer}
                            onPress={() => {
                                setGoalModalVisible(!goalModalVisible);
                                printResults(goal1, goal2, goal1Target, goal2Target);
                            }}>
                            <Text style={styles.mappButtonText}>
                                done
                            </Text>
                        </Pressable>
                    </View>

                    <View style={{ flex: 0.3, backgroundColor: 'lightblue' }}>
                        <View style={styles.bgImageContainer}>
                            <Image source={require("../../assets/exercising.png")} style={styles.bgImage} />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={addprogress1modal}
                onRequestClose={() => {
                    setaddprogress1modal(!addprogress1modal);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.33, flexDirection: 'row' }}>
                        <View style={{ flex: 0.1 }} />
                        <View style={styles.modalContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.modalTitle}>
                                    Add progress to goal 1
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter amount to add to progress"
                                    value={tempInput}
                                    keyboardType="numeric"
                                    onChangeText={(val) => setTempInput(val)}>
                                </TextInput>

                                <Pressable style={styles.save}
                                    onPress={() => {
                                        let v = parseInt(goal1countprogress) + parseInt(tempInput);
                                        setTempInput(null);
                                        setGoal1countprogress(v);
                                        proceed1 = true;
                                        setaddprogress1modal(!addprogress1modal);
                                    }}>
                                    <Text style={styles.mappButtonText2}>
                                        Save
                                    </Text>
                                </Pressable>

                                <Pressable style={styles.cancel}
                                    onPress={() => {
                                        setaddprogress1modal(!addprogress1modal);
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
                animationType="slide"
                transparent={true}
                visible={addprogress2modal}
                onRequestClose={() => {
                    setaddprogress2modal(!addprogress2modal);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.33, flexDirection: 'row' }}>
                        <View style={{ flex: 0.1 }} />
                        <View style={styles.modalContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.modalTitle}>
                                    Add progress to goal 2
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter amount to add to progress"
                                    value={tempInput}
                                    keyboardType="numeric"
                                    onChangeText={(val) => setTempInput(val)}>
                                </TextInput>

                                <Pressable style={styles.save}
                                    onPress={() => {
                                        let v = parseInt(goal2countprogress) + parseInt(tempInput);
                                        setTempInput(null);
                                        setGoal2countprogress(v);
                                        proceed2 = true;
                                        setaddprogress2modal(!addprogress2modal);
                                    }}>
                                    <Text style={styles.mappButtonText2}>
                                        Save
                                    </Text>
                                </Pressable>

                                <Pressable style={styles.cancel}
                                    onPress={() => {
                                        setaddprogress2modal(!addprogress2modal);
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
                animationType="slide"
                transparent={true}
                visible={resetprogress1modal}
                onRequestClose={() => {
                    setresetprogress1modal(!resetprogress1modal);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.33, flexDirection: 'row' }}>
                        <View style={{ flex: 0.1 }} />
                        <View style={styles.modalContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.modalTitle}>
                                    Are you sure you want to reset goal 1?
                                </Text>

                                <Pressable style={styles.reset}
                                    onPress={() => {
                                        setProgress1percentage(0);
                                        setGoal1countprogress(0);
                                        setGoal1Target('0');
                                        setGoal1("Goal 1");
                                        setresetprogress1modal(!resetprogress1modal);
                                    }}>
                                    <Text style={styles.resetText}>
                                        Reset
                                    </Text>
                                </Pressable>

                                <Pressable style={styles.cancel}
                                    onPress={() => {
                                        setresetprogress1modal(!resetprogress1modal);
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
                animationType="slide"
                transparent={true}
                visible={resetprogress2modal}
                onRequestClose={() => {
                    setresetprogress2modal(!resetprogress2modal);
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.33, flexDirection: 'row' }}>
                        <View style={{ flex: 0.1 }} />
                        <View style={styles.modalContainer}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.modalTitle}>
                                    Are you sure you want to reset goal 2?
                                </Text>

                                <Pressable style={styles.reset}
                                    onPress={() => {
                                        setProgress2percentage(0);
                                        setGoal2countprogress(0);
                                        setGoal2Target('0');
                                        setGoal2("Goal 2");
                                        setresetprogress2modal(!resetprogress2modal);
                                    }}>
                                    <Text style={styles.resetText}>
                                        Reset
                                    </Text>
                                </Pressable>

                                <Pressable style={styles.cancel}
                                    onPress={() => {
                                        setresetprogress2modal(!resetprogress2modal);
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
                visible={optionsModalVisible}
                onRequestClose={() => {
                    setOptionsModalVisible(!optionsModalVisible);
                }}>
                <View style={{ flex: 1, marginBottom: 22 }}>
                    <View style={{ flex: 0.3 }} />
                    <View style={{ flex: 0.4, justifyContent: 'center', backgroundColor: 'lightblue', marginBottom: 22 }}>
                        
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setaddprogress1modal(true);
                            }}>
                            <Text style={styles.appButtonText}>
                                Add progress to goal 1
                            </Text>
                        </Pressable>

                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setaddprogress2modal(true);
                            }}>
                            <Text style={styles.appButtonText}>
                                Add progress to goal 2
                            </Text>
                        </Pressable>

                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setresetprogress1modal(true);
                            }}>
                            <Text style={styles.appButtonText}>
                                Reset goal 1
                            </Text>
                        </Pressable>

                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setresetprogress2modal(true);
                            }}>
                            <Text style={styles.appButtonText}>
                                Reset goal 2
                            </Text>
                        </Pressable>

                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setOptionsModalVisible(!optionsModalVisible);
                            }}>
                            <Text style={styles.appButtonText}>
                                close
                            </Text>
                        </Pressable>

                    </View>
                    <View style={{ flex: 0.3 }} />


                </View>
            </Modal>


            <View style={{ flex: 0.3 }}>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{displayGoal1(goal1)}</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: 'lightblue', width: width1 }} />
                    </View>
                    <View style={styles.percentageContainer}>
                        <Text style={styles.percentageText}>{`${progress1percentage}% (${goal1countprogress}/${goal1Target})`}</Text>
                    </View>
                </View>

                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{displayGoal2(goal2)}</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <Animated.View style={[StyleSheet.absoluteFill], { backgroundColor: 'lightblue', width: width2 }} />
                    </View>
                    <View style={styles.percentageContainer}>
                        <Text style={styles.percentageText}>{`${progress2percentage}% (${goal2countprogress}/${goal2Target})`}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 0.4, justifyContent: 'center' }}>

                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        setGoalModalVisible(true);
                        hasSetGoals = true;
                    }}>
                    <Text style={styles.appButtonText}>
                        Set goals
                    </Text>
                </TouchableOpacity>

                <View style={{ flex: 0.15 }}/>

                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        setOptionsModalVisible(true);
                    }}>
                    <Text style={styles.appButtonText}>
                        Update goals
                    </Text>
                </TouchableOpacity>

                <View style={{ flex: 0.15 }}/>

                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => {
                        navigation.navigate("FlatListDisplay");
                    }}>
                    <Text style={styles.appButtonText}>
                        go back
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{ flex: 0.3 }}>
                <View style={styles.bgImageContainer}>
                    <Image source={require("../../assets/letsmove3.png")} style={styles.bgImage} />
                </View>
            </View>


        </View>
    );
}

function displayGoal1(goal) {
    if (hasSetGoals) {
        return goal;
    }
    else {
        return "Goal 1"
    }
}

function displayGoal2(goal) {
    if (hasSetGoals) {
        return goal;
    }
    else {
        return "Goal 2"
    }
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

function printResults(goal1, goal2, goal1target, goal2target) {
    console.log(goal1);
    console.log(goal1target);
    console.log(goal2);
    console.log(goal2target);
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'pink',
        flex: 1,
        marginTop: 22,
        //paddingTop: 20
    },
    appButtonContainer: {
        //elevation: 8, // adds shadow under button
        backgroundColor: "white",
        //borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 30,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
        marginBottom: 5,
        borderRadius: 50
    },
    appButtonText: {
        fontSize: 18,
        color: "black",
        //fontWeight: "bold",
        alignSelf: "center",
        //padding: 10
    },
    progressBar: {
        flexDirection: 'row',
        height: 20,
        width: '85%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        marginHorizontal: 30
        //justifyContent: 'center'
    },
    bgImage: {
        flex: 1,
        resizeMode: 'stretch'
    },
    bgImageContainer: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0,
    },
    text: {
        fontSize: 35,
        //fontWeight: "bold",
        color: "black",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    percentageContainer: {
        //position: 'absolute',
        justifyContent: 'center',
        //left: 50
        //paddingLeft: '48%'
    },
    percentageText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: 'center'
    },
    defaultText: {
        fontSize: 35
    },
    mappButtonContainer: {
        //backgroundColor: "#1ecbe1",
        backgroundColor: 'white',
        elevation: 8,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
        marginTop: 15
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
    mappButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
    },
    mappButtonText2: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    resetText: {
        fontSize: 18,
        color: "red",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        marginBottom: 5,
        paddingHorizontal: 14,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
    },
    infoText: {
        color: 'darkgray',
        fontSize: 15,
        fontWeight: 'bold'
    },
    infoTitle: {
        backgroundColor: 'white',
        flex: 0.2,
        alignItems: 'center',
        top: 50
    },
    middle: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        flex: 0.5,
        justifyContent: 'center'
    },
    pickerTitle: {
        color: 'black',
        fontWeight: 'bold'
    },
    pickerContainer: {
        backgroundColor: 'white',
        paddingTop: 4,
        paddingLeft: 10,
        marginBottom: 5,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
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
    modalTitle: {
        color: 'black',
        //fontWeight: 'bold', 
        fontSize: 25,
        paddingBottom: 10,
        textAlign: 'center'
    }
});