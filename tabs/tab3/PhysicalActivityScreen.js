import { Pressable, Modal, FlatList, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const BORDER_WIDTH = 2;
let marginv = 10;

let enduranceId = 5;
let strengthId = 3;
let balanceId = 3;
let flexibilityId = 3;


var enduranceEx = [
    { exercise: 'Running', id: '1' },
    { exercise: 'Jogging', id: '2' },
    { exercise: 'Biking', id: '3' },
    { exercise: 'Swimming', id: '4' },
];

var strengthEx = [
    { exercise: 'Benching', id: '1' },
    { exercise: 'Curls', id: '2' },
];

var balanceEx = [
    { exercise: 'Tai Chi', id: '1' },
    { exercise: 'Leg lift', id: '2' },
];

var flexibilityEx = [
    { exercise: 'Jump lunge', id: '1' },
    { exercise: 'Back stretch', id: '2' },
];



export default function PhysicalActivityScreen({ navigation }) {

    const [enduranceAddModal, setenduranceAddModal] = useState(false);
    const [enduranceRemoveModal, setenduranceRemoveModal] = useState(false);
    const [strengthAddModal, setstrengthAddModal] = useState(false);
    const [stengthRemoveModal, setstengthRemoveModal] = useState(false);
    const [balanceAddModal, setbalanceAddModal] = useState(false);
    const [balanceRemoveModal, setbalanceRemoveModal] = useState(false);
    const [flexibilityAddModal, setflexibilityAddModal] = useState(false);
    const [flexibilityRemovemodal, setflexibilityRemovemodal] = useState(false);

    const [tempInput, setTempInput] = useState('');


    const [views, setViews] = useState([
        { number: '1.', id: '1' },
        { number: '2.', id: '2' },
        { number: '3.', id: '3' },
        { number: '4.', id: '4' },
        { number: '5.', id: '5' },
        { number: '6.', id: '6' },
    ]);

    return (
        <View style={styles.defualtContainer}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={enduranceAddModal}
                onRequestClose={() => {
                    setenduranceAddModal(!enduranceAddModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to add to endurance activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                enduranceEx.push({ exercise: tempInput, id: enduranceId.toString() });
                                enduranceId++;
                                setTempInput('');
                                setenduranceAddModal(!enduranceAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setenduranceAddModal(!enduranceAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={enduranceRemoveModal}
                onRequestClose={() => {
                    setenduranceRemoveModal(!enduranceRemoveModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to remove from endurance activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < enduranceEx.length; i++) {
                                    if (enduranceEx[i].exercise.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                // console.log("---");
                                // console.log("before removal");
                                // console.log("targetId: " + targetId);
                                // console.log("acualIndex: " + actualIndex);
                                // console.log("enduranceId: " + enduranceId);
                                // for (i = 0; i < enduranceEx.length; i++) {
                                //     console.log("index: " + i + " exercise: " + enduranceEx[i].exercise + " id: " + enduranceEx[i].id);
                                // }
                                enduranceEx.splice(actualIndex, 1);
                                // enduranceId--;
                                // console.log("---");
                                // console.log("after removal");
                                // console.log("targetId: " + targetId);
                                // console.log("acualIndex: " + actualIndex);
                                // console.log("enduranceId: " + enduranceId);
                                // for (i = 0; i < enduranceEx.length; i++) {
                                //     console.log("index: " + i + " exercise: " + enduranceEx[i].exercise + " id: " + enduranceEx[i].id);
                                // }
                                setTempInput('');
                                setenduranceRemoveModal(!enduranceRemoveModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setenduranceRemoveModal(!enduranceRemoveModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={strengthAddModal}
                onRequestClose={() => {
                    setstrengthAddModal(!strengthAddModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to add to strength activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                strengthEx.push({ exercise: tempInput, id: strengthId.toString() });
                                strengthId++;
                                setTempInput('');
                                setstrengthAddModal(!strengthAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setstrengthAddModal(!strengthAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={stengthRemoveModal}
                onRequestClose={() => {
                    setstengthRemoveModal(!stengthRemoveModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to remove from strength activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < strengthEx.length; i++) {
                                    if (strengthEx[i].exercise.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                strengthEx.splice(actualIndex, 1);
                                setTempInput('');
                                setstengthRemoveModal(!stengthRemoveModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setstengthRemoveModal(!stengthRemoveModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={balanceAddModal}
                onRequestClose={() => {
                    setbalanceAddModal(!balanceAddModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to add to balance activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                balanceEx.push({ exercise: tempInput, id: balanceId.toString() });
                                balanceId++;
                                setTempInput('');
                                setbalanceAddModal(!balanceAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setbalanceAddModal(!balanceAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={balanceRemoveModal}
                onRequestClose={() => {
                    setbalanceRemoveModal(!balanceRemoveModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to remove from balance activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < balanceEx.length; i++) {
                                    if (balanceEx[i].exercise.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                balanceEx.splice(actualIndex, 1);
                                setTempInput('');
                                setbalanceRemoveModal(!balanceRemoveModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setbalanceRemoveModal(!balanceRemoveModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={flexibilityAddModal}
                onRequestClose={() => {
                    setflexibilityAddModal(!flexibilityAddModal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to add to flexibility activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                flexibilityEx.push({ exercise: tempInput, id: flexibilityId.toString() });
                                flexibilityId++;
                                setTempInput('');
                                setflexibilityAddModal(!flexibilityAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setflexibilityAddModal(!flexibilityAddModal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={flexibilityRemovemodal}
                onRequestClose={() => {
                    setflexibilityRemovemodal(!flexibilityRemovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What exercise would you like to remove from flexibility activities?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter activity"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < flexibilityEx.length; i++) {
                                    if (flexibilityEx[i].exercise.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                flexibilityEx.splice(actualIndex, 1);
                                setTempInput('');
                                setflexibilityRemovemodal(!flexibilityRemovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setflexibilityRemovemodal(!flexibilityRemovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Cancel
                            </Text>
                        </Pressable>

                    </View>
                </View>
            </Modal>



            <FlatList
                keyExtractor={(item) => item.id}
                data={views}
                renderItem={({ item }) => (
                    <View>
                        {filterViews(item, { navigation },
                            setenduranceAddModal,
                            setenduranceRemoveModal,
                            setstrengthAddModal,
                            setstengthRemoveModal,
                            setbalanceAddModal,
                            setbalanceRemoveModal,
                            setflexibilityAddModal,
                            setflexibilityRemovemodal
                        )}
                    </View>
                )}
            />
        </View>
    );
}

function filterViews(item, { navigation },
    setenduranceAddModal,
    setenduranceRemoveModal,
    setstrengthAddModal,
    setstengthRemoveModal,
    setbalanceAddModal,
    setbalanceRemoveModal,
    setflexibilityAddModal,
    setflexibilityRemovemodal) {
    if (item.id === '1') {
        return view1();
    }
    else if (item.id === '2') {
        return view2(setenduranceAddModal, setenduranceRemoveModal);
    }
    else if (item.id === '3') {
        return view3(setstrengthAddModal, setstengthRemoveModal);
    }
    else if (item.id === '4') {
        return view4(setbalanceAddModal, setbalanceRemoveModal);
    }
    else if (item.id === '5') {
        return view5(setflexibilityAddModal, setflexibilityRemovemodal);
    }
    else {
        return view6({ navigation });
    }
}

function view1() {
    return (
        <View style={styles.headerView}>
            <Text style={styles.title}>
                Physical Activity
            </Text>
            <Text style={styles.description}>
                Keep track and monitor your current physical activites here
            </Text>
        </View>
    );
}

function view2(setenduranceAddModal, setenduranceRemoveModal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Endurance
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={enduranceEx}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.exercise}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setenduranceRemoveModal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setenduranceAddModal(true);
                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view3(setstrengthAddModal, setstengthRemoveModal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Strength
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={strengthEx}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.exercise}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setstengthRemoveModal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setstrengthAddModal(true);
                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view4(setbalanceAddModal, setbalanceRemoveModal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Balance
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={balanceEx}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.exercise}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setbalanceRemoveModal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setbalanceAddModal(true);
                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view5(setflexibilityAddModal, setflexibilityRemovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Flexibility
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={flexibilityEx}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.exercise}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
                <View style={styles.buttonTabArea}>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setflexibilityRemovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setflexibilityAddModal(true);
                            }}>
                            <Text style={styles.addText}>
                                add
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

function view6({ navigation }) {
    return (
        <View style={styles.footerView}>
            <TouchableOpacity style={styles.appButtonContainer}
                onPress={() => {
                    navigation.navigate("Exercise");
                }}>
                <Text style={styles.appButtonText}>
                    Need help with types of exercises?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainer}
                onPress={() => {
                    navigation.navigate("Profile");
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
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
        borderRadius: 50
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
    headerView: {
        flex: 1,
        backgroundColor: 'white',
        height: 200,
        justifyContent: 'center'
    },
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        height: 250,
    },
    footerView: {
        flex: 1,
        backgroundColor: 'white',
        height: 150,
        justifyContent: 'center'
    },
    cardContainer: {
        flex: 1,
        height: 230,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: marginv,
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    topCardArea: {
        flex: 0.25,
        //height: 60,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    bottomCardArea: {
        height: 165,
        backgroundColor: 'white'
    },
    topCardText: {
        color: "#1ecbe1",
        fontSize: 30,
        textAlign: 'center'
    },
    listViewArea: {
        flex: 0.65,
        //flexDirection: 'row',
        //height: 141,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTabArea: {
        flex: 0.1,
        flexDirection: 'row',
        //height: 25,
        backgroundColor: '#F5F5F5'
    },
    addText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    removeText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    optionArea: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemView: {
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'lightgray',
        marginHorizontal: 20,
        marginVertical: 10
    },
    itemText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    cardContainerh: {
        backgroundColor: "white",
        flex: 1,
        //height: 50,
        width: 200,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTextConatiner: {
        backgroundColor: 'white',
        borderRadius: 50,
        elevation: 10
    },
    modalView: {
        justifyContent: 'center',
        height: 250,
        width: 350,
        backgroundColor: '#F5F5F5',
        borderTopColor: 'black',
        borderBottomColor: 'black',
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
        borderRadius: 25
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        marginVertical: 5,
        marginHorizontal: 15,
        paddingHorizontal: 14,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
});