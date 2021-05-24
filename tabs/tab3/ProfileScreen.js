import { Pressable, Modal, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const mBORDER_WIDTH = 1.5;
const BORDER_WIDTH = 2;
const BORDER_RADIUS = 75;


export default function ProfileScreen({ navigation }) {

    const [settingsModal, setSettingsModal] = useState(false);

    // these need to be set from database
    const [firstName, setFirstName] = useState("Your Name");
    const [lastName, setLastName] = useState("Here");
    const [name, setName] = useState(firstName + " " + lastName);
    const [email, setEmail] = useState("youremailhere@gmail.com");
    const [occupation, setOccupation] = useState("your occupation here");
    const [age, setAge] = useState("22");
    const [gender, setGender] = useState("male");
    const [height, setHeight] = useState("6'3\"");
    const [weight, setWeight] = useState("170");

    const [ifirstName, isetFirstName] = useState(firstName);
    const [ilastName, isetLastName] = useState(lastName);
    const [iname, isetName] = useState(name);
    const [iemail, isetEmail] = useState(email);
    const [ioccupation, isetOccupation] = useState(occupation);
    const [iage, isetAge] = useState(age);
    const [igender, isetGender] = useState(gender);
    const [iheight, isetHeight] = useState(height);
    const [iweight, isetWeight] = useState(weight);



    return (
        <View style={styles.container}>

            <Modal
                animationType="slide"
                transparent={false}
                visible={settingsModal}
                onRequestClose={() => {
                    setSettingsModal(!settingsModal);
                }}>
                <View style={[StyleSheet.absoluteFill], { flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flex: 0.2, justifyContent: 'center', backgroundColor: '#E8E8E8' }}>
                        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', borderBottomRightRadius: 50 }}>
                            <Text style={styles.title}>
                                Settings
                            </Text>
                            <Text style={styles.description}>
                                edit and save your information here
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.6, justifyContent: 'center', backgroundColor: '#E8E8E8', borderBottomRightRadius: 50, borderTopLeftRadius: 50 }}>
                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    First name
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="First name"
                                    value={ifirstName}
                                    onChangeText={(val) => isetFirstName(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    Last name
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Last name"
                                    value={ilastName}
                                    onChangeText={(val) => isetLastName(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    E-mail
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-mail"
                                    value={iemail}
                                    onChangeText={(val) => isetEmail(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    Occupation
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Occupation"
                                    value={ioccupation}
                                    onChangeText={(val) => isetOccupation(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    Age
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Age"
                                    value={iage}
                                    onChangeText={(val) => isetAge(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    Gender
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Gender"
                                    value={igender}
                                    onChangeText={(val) => isetGender(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    Height
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Height"
                                    value={iheight}
                                    onChangeText={(val) => isetHeight(val)}>
                                </TextInput>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoLabelView}>
                                <Text style={styles.infoText}>
                                    Weight
                                </Text>
                            </View>
                            <View style={styles.userInputView}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Weight"
                                    value={iweight}
                                    onChangeText={(val) => isetWeight(val)}>
                                </TextInput>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 0.2, backgroundColor: '#E8E8E8', justifyContent: 'center' }}>
                        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', borderTopLeftRadius: 50 }}>
                            <Pressable style={styles.sButtonContainer}
                                onPress={() => {
                                    setFirstName(ifirstName);
                                    setLastName(ilastName);
                                    setName(ifirstName + " " + ilastName);
                                    setEmail(iemail);
                                    setOccupation(ioccupation);
                                    setGender(igender);
                                    setAge(iage);
                                    setHeight(iheight);
                                    setWeight(iweight);

                                    setSettingsModal(!settingsModal);
                                }}>
                                <Text style={styles.appButtonText}>
                                    Save
                            </Text>
                            </Pressable>

                            <Pressable style={styles.sButtonContainer}
                                onPress={() => {
                                    isetFirstName(firstName);
                                    isetLastName(lastName);
                                    isetName(name);
                                    isetEmail(email);
                                    isetOccupation(occupation);
                                    isetGender(gender);
                                    isetAge(age);
                                    isetHeight(height);
                                    isetWeight(weight);

                                    setSettingsModal(!settingsModal);
                                }}>
                                <Text style={styles.appButtonText}>
                                    Cancel
                            </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>



            <View style={styles.slider}>
                <View style={styles.bgImageWrapper}>
                    <Image source={require("../../assets/welcome.png")} style={styles.bgImage} />
                </View>
            </View>

            <View style={styles.footer}>
                <View style={{ ...StyleSheet.absoluteFillObject }} />
                <View style={styles.profileBackgroundContainer}>
                    <View style={styles.middle}>

                        <View style={styles.userNameViewContainer}>
                            <Text style={styles.userNameText}>
                                {name}
                            </Text>
                        </View>

                        <View style={styles.userEmailViewContainer}>
                            <Text style={styles.userEmailText}>
                                {email}
                            </Text>
                        </View>

                        <View style={styles.userOccupationViewContainer}>
                            <Text style={styles.userEmailText}>
                                {occupation}
                            </Text>
                        </View>

                        <View style={{ flex: 0.05, /*backgroundColor: "cyan",*/ flexDirection: "row" }}>
                            <View style={styles.sideRowPadding} />
                            <View style={{ flex: 0.9, /*backgroundColor: "skyblue",*/ borderBottomColor: "black", borderBottomWidth: BORDER_WIDTH }}>

                            </View>
                            <View style={styles.sideRowPadding} />
                        </View>

                        <View style={styles.middleAttributeViewContainer1}>
                            <View style={styles.sideRowPadding} />
                            <View style={styles.attributeColumnViewContainer}>
                                <View style={{ flex: 0.7, /*backgroundColor: "yellow",*/ alignItems: "center" }}>
                                    <Text style={styles.attributeValueText}>
                                        {age}
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3, /*backgroundColor: "cyan",*/ alignItems: "center" }}>
                                    <Text style={styles.attributeLabelText}>
                                        Age
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.attributeColumnViewContainer}>
                                <View style={{ flex: 0.7, /*backgroundColor: "orange"*/ alignItems: "center" }}>
                                    <Text style={styles.attributeValueText}>
                                        {gender}
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3, /*backgroundColor: "red",*/ alignItems: "center" }}>
                                    <Text style={styles.attributeLabelText}>
                                        Gender
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.sideRowPadding} />
                        </View>

                        <View style={styles.middleAttributeViewContainer2}>
                            <View style={styles.sideRowPadding} />
                            <View style={styles.attributeColumnViewContainer}>
                                <View style={{ flex: 0.7, /*backgroundColor: "yellow",*/  alignItems: "center" }}>
                                    <Text style={styles.attributeValueText}>
                                        {height}
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3, /*backgroundColor: "cyan",*/  alignItems: "center" }}>
                                    <Text style={styles.attributeLabelText}>
                                        Height
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.attributeColumnViewContainer}>
                                <View style={{ flex: 0.7, /*backgroundColor: "orange",*/  alignItems: "center" }}>
                                    <Text style={styles.attributeValueText}>
                                        {weight}
                                    </Text>
                                </View>
                                <View style={{ flex: 0.3, /*backgroundColor: "red",*/  alignItems: "center" }}>
                                    <Text style={styles.attributeLabelText}>
                                        Weight
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.sideRowPadding} />
                        </View>

                        <View style={{ flex: 0.03 }}></View>

                        <View style={styles.physicalActivityViewContainer}>
                            <View style={styles.sideRowPadding} />
                            <View style={{ flex: 0.9 }}>
                                <TouchableOpacity style={styles.appButtonContainer}
                                    onPress={() => navigation.navigate("PhysicalActivity")}>
                                    <Text style={styles.appButtonText}>
                                        Physical Activity
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sideRowPadding} />
                        </View>

                        <View style={styles.medicalHistoryViewContainer}>
                            <View style={styles.sideRowPadding} />
                            <View style={{ flex: 0.9 }}>
                                <TouchableOpacity style={styles.appButtonContainer}
                                    onPress={() => navigation.navigate("MedicalHistory")}>
                                    <Text style={styles.appButtonText}>
                                        Medical History
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sideRowPadding} />
                        </View>

                        <View style={styles.settingsViewContainer}>
                            <View style={styles.sideRowPadding} />
                            <View style={{ flex: 0.9 }}>
                                <TouchableOpacity style={styles.appButtonContainer}
                                    onPress={() => { setSettingsModal(true) }}>
                                    <Text style={styles.appButtonText}>
                                        Settings
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sideRowPadding} />
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        //backgroundColor: "pink",
        flex: 0.61,
        alignItems: "center", // centers content along x axis  
        justifyContent: "center", // centers content along y axis 
    },
    footer: {
        flex: 1
    },
    middle: {
        flex: 1
    },
    userNameText: {
        fontSize: 30,
        fontWeight: "bold",
        position: "absolute",
        bottom: 0
    },
    userEmailText: {
        fontSize: 20
    },
    attributeLabelText: {
        fontSize: 20,
        color: "black",
        alignSelf: 'center'
    },
    attributeValueText: {
        fontSize: 40,
        fontWeight: "bold",
        position: "absolute",
        bottom: 0,
        color: "black",
        alignSelf: 'center'
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        backgroundColor: "white",
    },
    bgImage: {
        flex: 1,
        resizeMode: 'stretch'
    },
    bgImageWrapper: {
        position: 'absolute',
        top: 0, bottom: 0, left: 0, right: 0
    },
    appButtonContainer: {
        //backgroundColor: "lightgreen",
        paddingVertical: 10,
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
    appButtonText: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        fontWeight: "bold",
    },
    profileBackgroundContainer: {
        flex: 1,
        backgroundColor: "white",
        // borderTopLeftRadius: BORDER_RADIUS,
        // borderTopRightRadius: BORDER_RADIUS
    },
    userNameViewContainer: {
        flex: 0.1,
        alignItems: "center"
    },
    userEmailViewContainer: {
        flex: 0.05,
        alignItems: "center"
    },
    userOccupationViewContainer: {
        flex: 0.05,
        alignItems: "center"
    },
    sideRowPadding: {
        flex: 0.05
    },
    physicalActivityViewContainer: {
        //backgroundColor: "yellow",
        flex: 0.12,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    medicalHistoryViewContainer: {
        //backgroundColor: "green",
        flex: 0.12,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    settingsViewContainer: {
        //backgroundColor: "cyan",
        flex: 0.12,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    middleAttributeViewContainer1: {
        //backgroundColor: "purple",
        flex: 0.19,
        flexDirection: "row"
    },
    middleAttributeViewContainer2: {
        //backgroundColor: "pink",
        flex: 0.19,
        flexDirection: "row"
    },
    attributeColumnViewContainer: {
        flex: 0.45
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 14,
    },
    infoBox: {
        //flex: 1,
        backgroundColor: 'white',
        height: 40,
        marginVertical: 5,
        //paddingHorizontal: 14,
        marginHorizontal: 20,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: mBORDER_WIDTH,
        borderTopWidth: mBORDER_WIDTH,
        borderRightWidth: mBORDER_WIDTH,
        borderLeftWidth: mBORDER_WIDTH,
        flexDirection: 'row'
    },
    infoLabelView: {
        //backgroundColor: 'lightblue',
        flex: 0.3,
        borderRightColor: 'black',
        borderRightWidth: mBORDER_WIDTH,
        justifyContent: 'center',
    },
    infoText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
        color: 'gray'
    },
    sButtonContainer: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginHorizontal: 20,
        marginVertical: 5,
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
        borderRadius: 50,
    },
    userInputView: {
        flex: 0.7,
        justifyContent: 'center'
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
});