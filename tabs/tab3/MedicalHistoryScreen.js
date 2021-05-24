import { Pressable, Modal, FlatList, StyleSheet, Image, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const BORDER_WIDTH = 2;
let marginv = 10;

let generalID = 5;
let endocrineID = 7;
let gastroID = 9;
let bonejointID = 4;
let cardioID = 5;
let kidneyID = 4;
let neuroID = 6;
let pulmonaryID = 3;
let liverID = 4;


var generalCon = [
    { condition: 'High blood sugar', id: '1' },
    { condition: 'Pregnant', id: '2' },
    { condition: 'Breast feeding', id: '3' },
    { condition: 'Hair loss', id: '4' },
];

var endocrineCon = [
    { condition: 'Hypothyroidism', id: '1' },
    { condition: 'Hyperthyroidism', id: '2' },
    { condition: 'P.C.O.S.', id: '3' },
    { condition: 'Type 1 diabetes', id: '4' },
    { condition: 'Type 2 diabetes', id: '5' },
    { condition: 'G.D.M.', id: '6' },
];

var gastroCon = [
    { condition: 'Constipation', id: '1' },
    { condition: 'Diarrhea', id: '2' },
    { condition: 'G.E.R.D', id: '3' },
    { condition: 'Duodenal ulcer', id: '4' },
    { condition: 'I.B.S.', id: '5' },
    { condition: 'Colitis', id: '6' },
    { condition: 'Gallbladder surgery', id: '7' },
    { condition: 'Gallstone', id: '8' },
];

var boneCon = [
    { condition: 'Arthritis', id: '1' },
    { condition: 'Rheumatoid arthritis', id: '2' },
    { condition: 'Osteoporosis', id: '3' },
];

var cardioCon = [
    { condition: 'High triglycerides', id: '1' },
    { condition: 'High cholesterol', id: '2' },
    { condition: 'High blood pressure', id: '3' },
    { condition: 'Heart failure', id: '4' },
];

var kidneyCon = [
    { condition: 'Kidney stones', id: '1' },
    { condition: 'Kidney failure', id: '2' },
    { condition: 'Gout', id: '3' },
];

var neuroCon = [
    { condition: 'Migraine', id: '1' },
    { condition: 'Epilepsy', id: '2' },
    { condition: 'H.I.V.', id: '3' },
    { condition: 'M.S.', id: '4' },
    { condition: 'R.A.', id: '5' },
];

var pulmonaryCon = [
    { condition: 'Asthma', id: '1' },
    { condition: 'C.O.P.D.', id: '2' },
];

var liverCon = [
    { condition: 'Fatty liver', id: '1' },
    { condition: 'Hepatic cirrhosis', id: '2' },
    { condition: 'Hepatic fibrosis', id: '3' },
];



export default function MedicalHistoryScreen({ navigation }) {

    const [generaladdmodal, setgeneraladdmodal] = useState(false);
    const [generalremovemodal, setgeneralremovemodal] = useState(false);

    const [endocrineaddmodal, setendocrineaddmodal] = useState(false);
    const [endocrineremovemodal, setendocrineremovemodal] = useState(false);

    const [gastroaddmodal, setgastroaddmodal] = useState(false);
    const [gastroremovemodal, setgastroremovemodal] = useState(false);

    const [boneaddmodal, setboneaddmodal] = useState(false);
    const [boneremovemodal, setboneremovemodal] = useState(false);

    const [cardioaddmodal, setcardioaddmodal] = useState(false);
    const [cardioremovemodal, setcardioremovemodal] = useState(false);

    const [kidneyaddmodal, setkidneyaddmodal] = useState(false);
    const [kidneyremovemodal, setkidneyremovemodal] = useState(false);

    const [neuroaddmodal, setneuroaddmodal] = useState(false);
    const [neuroremovemodal, setneuroremovemodal] = useState(false);

    const [pulmoaddmodal, setpulmoaddmodal] = useState(false);
    const [pulmoremovemodal, setpulmoremovemodal] = useState(false);

    const [liveraddmodal, setliveraddmodal] = useState(false);
    const [liverremovemodal, setliverremovemodal] = useState(false);

    const [tempInput, setTempInput] = useState('');


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
        { number: '11.', id: '11' },
    ]);

    return (
        <View style={styles.defualtContainer}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={generaladdmodal}
                onRequestClose={() => {
                    setgeneraladdmodal(!generaladdmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to general conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                generalCon.push({ condition: tempInput, id: generalID.toString() });
                                generalID++;
                                setTempInput('');
                                setgeneraladdmodal(!generaladdmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setgeneraladdmodal(!generaladdmodal);
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
                visible={generalremovemodal}
                onRequestClose={() => {
                    setgeneralremovemodal(!generalremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from general conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < generalCon.length; i++) {
                                    if (generalCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                generalCon.splice(actualIndex, 1);
                                setTempInput('');
                                setgeneralremovemodal(!generalremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setgeneralremovemodal(!generalremovemodal);
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
                visible={endocrineaddmodal}
                onRequestClose={() => {
                    setendocrineaddmodal(!endocrineaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to endocrine conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                endocrineCon.push({ condition: tempInput, id: endocrineID.toString() });
                                endocrineID++;
                                setTempInput('');
                                setendocrineaddmodal(!endocrineaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setendocrineaddmodal(!endocrineaddmodal);
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
                visible={endocrineremovemodal}
                onRequestClose={() => {
                    setendocrineremovemodal(!endocrineremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from general conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < endocrineCon.length; i++) {
                                    if (endocrineCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                endocrineCon.splice(actualIndex, 1);
                                setTempInput('');
                                setendocrineremovemodal(!endocrineremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setendocrineremovemodal(!endocrineremovemodal);
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
                visible={gastroaddmodal}
                onRequestClose={() => {
                    setgastroaddmodal(!gastroaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to gastrointestinal conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                gastroCon.push({ condition: tempInput, id: gastroID.toString() });
                                gastroID++;
                                setTempInput('');
                                setgastroaddmodal(!gastroaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setgastroaddmodal(!gastroaddmodal);
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
                visible={gastroremovemodal}
                onRequestClose={() => {
                    setgastroremovemodal(!gastroremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from gastrointestinal conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < gastroCon.length; i++) {
                                    if (gastroCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                gastroCon.splice(actualIndex, 1);
                                setTempInput('');
                                setgastroremovemodal(!gastroremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setgastroremovemodal(!gastroremovemodal);
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
                visible={boneaddmodal}
                onRequestClose={() => {
                    setboneaddmodal(!boneaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to bone and joint conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                boneCon.push({ condition: tempInput, id: bonejointID.toString() });
                                bonejointID++;
                                setTempInput('');
                                setboneaddmodal(!boneaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setboneaddmodal(!boneaddmodal);
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
                visible={boneremovemodal}
                onRequestClose={() => {
                    setboneremovemodal(!boneremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from bone and joint conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < boneCon.length; i++) {
                                    if (boneCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                boneCon.splice(actualIndex, 1);
                                setTempInput('');
                                setboneremovemodal(!boneremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setboneremovemodal(!boneremovemodal);
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
                visible={cardioaddmodal}
                onRequestClose={() => {
                    setcardioaddmodal(!cardioaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to cardiovascular conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                cardioCon.push({ condition: tempInput, id: cardioID.toString() });
                                cardioID++;
                                setTempInput('');
                                setcardioaddmodal(!cardioaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setcardioaddmodal(!cardioaddmodal);
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
                visible={cardioremovemodal}
                onRequestClose={() => {
                    setcardioremovemodal(!cardioremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from cardiovascular conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < cardioCon.length; i++) {
                                    if (cardioCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                cardioCon.splice(actualIndex, 1);
                                setTempInput('');
                                setcardioremovemodal(!cardioremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setcardioremovemodal(!cardioremovemodal);
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
                visible={kidneyaddmodal}
                onRequestClose={() => {
                    setkidneyaddmodal(!kidneyaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to kidney conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                kidneyCon.push({ condition: tempInput, id: kidneyID.toString() });
                                kidneyID++;
                                setTempInput('');
                                setkidneyaddmodal(!kidneyaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setkidneyaddmodal(!kidneyaddmodal);
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
                visible={kidneyremovemodal}
                onRequestClose={() => {
                    setkidneyremovemodal(!kidneyremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from kidney conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < kidneyCon.length; i++) {
                                    if (kidneyCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                kidneyCon.splice(actualIndex, 1);
                                setTempInput('');
                                setkidneyremovemodal(!kidneyremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setkidneyremovemodal(!kidneyremovemodal);
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
                visible={neuroaddmodal}
                onRequestClose={() => {
                    setneuroaddmodal(!neuroaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to neurological conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                neuroCon.push({ condition: tempInput, id: neuroID.toString() });
                                neuroID++;
                                setTempInput('');
                                setneuroaddmodal(!neuroaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setneuroaddmodal(!neuroaddmodal);
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
                visible={neuroremovemodal}
                onRequestClose={() => {
                    setneuroremovemodal(!neuroremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from neurological conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < neuroCon.length; i++) {
                                    if (neuroCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                neuroCon.splice(actualIndex, 1);
                                setTempInput('');
                                setneuroremovemodal(!neuroremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setneuroremovemodal(!neuroremovemodal);
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
                visible={pulmoaddmodal}
                onRequestClose={() => {
                    setpulmoaddmodal(!pulmoaddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to pulmonary conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                pulmonaryCon.push({ condition: tempInput, id: pulmonaryID.toString() });
                                pulmonaryID++;
                                setTempInput('');
                                setpulmoaddmodal(!pulmoaddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setpulmoaddmodal(!pulmoaddmodal);
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
                visible={pulmoremovemodal}
                onRequestClose={() => {
                    setpulmoremovemodal(!pulmoremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from pulmonary conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < pulmonaryCon.length; i++) {
                                    if (pulmonaryCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                pulmonaryCon.splice(actualIndex, 1);
                                setTempInput('');
                                setpulmoremovemodal(!pulmoremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setpulmoremovemodal(!pulmoremovemodal);
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
                visible={liveraddmodal}
                onRequestClose={() => {
                    setliveraddmodal(!liveraddmodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to add to liver conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                liverCon.push({ condition: tempInput, id: liverID.toString() });
                                liverID++;
                                setTempInput('');
                                setliveraddmodal(!liveraddmodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Save
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setliveraddmodal(!liveraddmodal);
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
                visible={liverremovemodal}
                onRequestClose={() => {
                    setliverremovemodal(!liverremovemodal);
                }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', color: 'black', fontSize: 23 }}>
                            What condition would you like to remove from liver conditions?
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter condition"
                            value={tempInput}
                            onChangeText={(val) => setTempInput(val)}>
                        </TextInput>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                var i;
                                var actualIndex = 0;
                                for (i = 0; i < liverCon.length; i++) {
                                    if (liverCon[i].condition.toLowerCase() === tempInput.toLowerCase()) {
                                        actualIndex = i;
                                    }
                                }
                                liverCon.splice(actualIndex, 1);
                                setTempInput('');
                                setliverremovemodal(!liverremovemodal);
                            }}>
                            <Text style={styles.appButtonText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable style={styles.appButtonContainer}
                            onPress={() => {
                                setTempInput('');
                                setliverremovemodal(!liverremovemodal);
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
                            setgeneraladdmodal,
                            setgeneralremovemodal,
                            setendocrineaddmodal,
                            setendocrineremovemodal,
                            setgastroaddmodal,
                            setgastroremovemodal,
                            setboneaddmodal,
                            setboneremovemodal,
                            setcardioaddmodal,
                            setcardioremovemodal,
                            setkidneyaddmodal,
                            setkidneyremovemodal,
                            setneuroaddmodal,
                            setneuroremovemodal,
                            setpulmoaddmodal,
                            setpulmoremovemodal,
                            setliveraddmodal,
                            setliverremovemodal,
                        )}
                    </View>
                )}
            />
        </View>
    );
}

function filterViews(item, { navigation },
    setgeneraladdmodal,
    setgeneralremovemodal,
    setendocrineaddmodal,
    setendocrineremovemodal,
    setgastroaddmodal,
    setgastroremovemodal,
    setboneaddmodal,
    setboneremovemodal,
    setcardioaddmodal,
    setcardioremovemodal,
    setkidneyaddmodal,
    setkidneyremovemodal,
    setneuroaddmodal,
    setneuroremovemodal,
    setpulmoaddmodal,
    setpulmoremovemodal,
    setliveraddmodal,
    setliverremovemodal,) {
    if (item.id === '1') {
        return view1();
    }
    else if (item.id === '2') {
        return view2(setgeneraladdmodal, setgeneralremovemodal);
    }
    else if (item.id === '3') {
        return view3(setendocrineaddmodal, setendocrineremovemodal);
    }
    else if (item.id === '4') {
        return view4(setgastroaddmodal, setgastroremovemodal);
    }
    else if (item.id === '5') {
        return view5(setboneaddmodal, setboneremovemodal);
    }
    else if (item.id === '6') {
        return view6(setcardioaddmodal, setcardioremovemodal);
    }
    else if (item.id === '7') {
        return view7(setkidneyaddmodal, setkidneyremovemodal);
    }
    else if (item.id === '8') {
        return view8(setneuroaddmodal, setneuroremovemodal);
    }
    else if (item.id === '9') {
        return view9(setpulmoaddmodal, setpulmoremovemodal);
    }
    else if (item.id === '10') {
        return view10(setliveraddmodal, setliverremovemodal);
    }
    else {
        return view11({ navigation });
    }
}

function view1() {
    return (
        <View style={styles.headerView}>
            <Text style={styles.title}>
                Medical History
            </Text>
            <Text style={styles.description}>
                Keep track and monitor your current medical conditions here
            </Text>
        </View>
    );
}

function view2(setgeneraladdmodal, setgeneralremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        General Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={generalCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setgeneralremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setgeneraladdmodal(true);
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

function view3(setendocrineaddmodal, setendocrineremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Endocrine Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={endocrineCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setendocrineremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setendocrineaddmodal(true);
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

function view4(setgastroaddmodal, setgastroremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Gastrointestinal Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={gastroCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setgastroremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setgastroaddmodal(true);
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

function view5(setboneaddmodal, setboneremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Bone and joint Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={boneCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setboneremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setboneaddmodal(true);
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

function view6(setcardioaddmodal, setcardioremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Cardiovascular Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={cardioCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setcardioremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setcardioaddmodal(true);
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

function view7(setkidneyaddmodal, setkidneyremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Kidney Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={kidneyCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setkidneyremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setkidneyaddmodal(true);
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

function view8(setneuroaddmodal, setneuroremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Neurological Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={neuroCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setneuroremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setneuroaddmodal(true);
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

function view9(setpulmoaddmodal, setpulmoremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Pulmonary Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={pulmonaryCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setpulmoremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setpulmoaddmodal(true);
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

function view10(setliveraddmodal, setliverremovemodal) {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.cardContainer}>

                <View style={styles.topCardArea}>
                    <Text style={styles.topCardText}>
                        Liver Conditions
                    </Text>
                </View>

                <View style={styles.listViewArea}>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            horizontal={true}
                            keyExtractor={(item) => item.id}
                            data={liverCon}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={styles.cardContainerh}>
                                        <View style={styles.itemTextConatiner}>
                                            <Text style={styles.itemText}>
                                                {item.condition}
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
                                setliverremovemodal(true);
                            }}>
                            <Text style={styles.removeText}>
                                remove
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.optionArea}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => {
                                setliveraddmodal(true);
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




function view11({ navigation }) {
    return (
        <View style={styles.footerView}>
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
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    cardContainerh: {
        backgroundColor: "white",
        flex: 1,
        //height: 50,
        width: 230,
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