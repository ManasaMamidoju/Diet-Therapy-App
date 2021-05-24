import { Picker, Animated, StyleSheet, Image, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
//import { Picker } from '@react-native-picker/picker';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const BORDER_WIDTH = 1.5;

let rankDairy = 0;
let rankFruits = 0;
let rankCoffee = 0;
let rankMeat = 0;
let rankSweetBevs = 0;
let rankCanned = 0;
let rankSnack = 0;
let rankGrain = 0;

let currentCount = 0;

let beginClock = false;


export default function QuestionnaireScreen({ navigation }) {
    const [updateV, setUpdateV] = useState(0);

    const [q1answer, q1setAnswer] = useState('0');
    const [q2answer, q2setAnswer] = useState('0');
    const [q3answer, q3setAnswer] = useState('0');
    const [q4answer, q4setAnswer] = useState('0');
    const [q5answer, q5setAnswer] = useState('0');
    const [q6answer, q6setAnswer] = useState('0');
    const [q7answer, q7setAnswer] = useState('0');
    const [q8answer, q8setAnswer] = useState('0');
    const [q9answer, q9setAnswer] = useState('0');
    const [q10answer, q10setAnswer] = useState('0');

    const [questionNumber, setQuestionNumber] = useState([
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

    const questions = {
        question: {
            '1': "Do you spend most days of the week active?",
            '2': "How would you describe your sleeping and waking patterns?",
            '3': "Are you happy with the quality of your sleep?",
            '4': "How much time do you usually spend on digital screens daily?",
            '5': "What score would you give your stress levels?",
            '6': "Sort the following list based on your priorities when shopping:",
            '7': "How often do you consume fast or processed food?",
            '8': "How often do you regularly drink large amounts of soft drinks or sweetened beverages?",
            '9': "Are you concerned about your current weight?",
            '10': "How would you evaluate your overeall health? Would you say you are:",
        }
    }

    useInterval(() => {
        if (beginClock) {
            setUpdateV(updateV + 1);
            beginClock = false;
        }
    }, 1000);

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={questionNumber}
                renderItem={({ item }) => (
                    <View>
                        {filterQuestions(item, questions, item.id, q1answer, q1setAnswer,
                            q2answer, q2setAnswer,
                            q3answer, q3setAnswer,
                            q4answer, q4setAnswer,
                            q5answer, q5setAnswer,
                            q7answer, q7setAnswer,
                            q8answer, q8setAnswer,
                            q9answer, q9setAnswer,
                            q10answer, q10setAnswer)}
                    </View>
                )}
            />
            <View style={styles.bottomButtonArea}>
                <TouchableOpacity style={styles.appButtonContainer}
                    onPress={() => verify(q1answer, q2answer, q3answer, q4answer, q5answer, q7answer, q8answer, q9answer, q10answer, { navigation })}>
                    <Text style={styles.appButtonText}>
                        Submit answers
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


function filterQuestions(item, questions, id, q1answer, q1setAnswer,
    q2answer, q2setAnswer,
    q3answer, q3setAnswer,
    q4answer, q4setAnswer,
    q5answer, q5setAnswer,
    q6answer, q6setAnswer,
    q7answer, q7setAnswer,
    q8answer, q8setAnswer,
    q9answer, q9setAnswer,
    q10answer, q10setAnswer) {
    if (id === '6') {
        return question6(item, questions);
    }
    else {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.card}>

                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>
                            {item.number} {questions.question[item.id]}
                        </Text>
                    </View>
                    <View style={styles.pickerContainer}>
                        {pickerFilter(item.id, q1answer, q1setAnswer,
                            q2answer, q2setAnswer,
                            q3answer, q3setAnswer,
                            q4answer, q4setAnswer,
                            q5answer, q5setAnswer,
                            q6answer, q6setAnswer,
                            q7answer, q7setAnswer,
                            q8answer, q8setAnswer,
                            q9answer, q9setAnswer,
                            q10answer, q10setAnswer)}
                    </View>

                </View>
            </View>
        );
    }


}

function verify(q1answer, q2answer, q3answer, q4answer, q5answer, q7answer, q8answer, q9answer, q10answer, { navigation }) {
    if (q1answer === '0' || q2answer === '0' || q3answer === '0' || q4answer === '0' || q5answer === '0' || q7answer === '0' || q8answer === '0' || q9answer === '0' || q10answer === '0') {
        Alert.alert("Missing information", "Please fill out all questions", [{ text: "ok" }]);
        //printAnswers(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer, q7answer, q8answer, q9answer, q10answer);
    }
    else {
        Alert.alert("Questionnaire complete!", "You're all done", [{ text: "ok" }]);
        printAnswers(q1answer, q2answer, q3answer, q4answer, q5answer, q7answer, q8answer, q9answer, q10answer);
        navigation.navigate("Home");
    }
}

function printAnswers(q1answer, q2answer, q3answer, q4answer, q5answer, q7answer, q8answer, q9answer, q10answer) {
    console.log(q1answer);
    console.log(q2answer);
    console.log(q3answer);
    console.log(q4answer);
    console.log(q5answer);
    console.log(q7answer);
    console.log(q8answer);
    console.log(q9answer);
    console.log(q10answer);
}

function pickerFilter(id, q1answer, q1setAnswer,
    q2answer, q2setAnswer,
    q3answer, q3setAnswer,
    q4answer, q4setAnswer,
    q5answer, q5setAnswer,
    q7answer, q7setAnswer,
    q8answer, q8setAnswer,
    q9answer, q9setAnswer,
    q10answer, q10setAnswer) {
    if (id === '1') {
        return question1(q1answer, q1setAnswer);
    }
    else if (id === '2') {
        return question2(q2answer, q2setAnswer);
    }
    else if (id === '3') {
        return question3(q3answer, q3setAnswer);
    }
    else if (id === '4') {
        return question4(q4answer, q4setAnswer);
    }
    else if (id === '5') {
        return question5(q5answer, q5setAnswer);
    }
    else if (id === '7') {
        return question7(q7answer, q7setAnswer);
    }
    else if (id === '8') {
        return question8(q8answer, q8setAnswer);
    }
    else if (id === '9') {
        return question9(q9answer, q9setAnswer);
    }
    else if (id === '10') {
        return question10(q10answer, q10setAnswer);
    }
}

function question1(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Yes" value="1" />
            <Picker.Item label="No" value="2" />
        </Picker>
    );
}

function question2(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Very good" value="1" />
            <Picker.Item label="Good" value="2" />
            <Picker.Item label="Bad" value="3" />
            <Picker.Item label="No specific pattern" value="4" />
        </Picker>
    );
}

function question3(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Yes" value="1" />
            <Picker.Item label="No" value="2" />
        </Picker>
    );
}

function question4(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Less than 2 hours" value="1" />
            <Picker.Item label="2-5 hours" value="2" />
            <Picker.Item label="5-10 hours" value="3" />
            <Picker.Item label="More than 10" value="4" />
        </Picker>
    );
}

function question5(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Very stressful" value="1" />
            <Picker.Item label="A little stressful" value="2" />
            <Picker.Item label="Occasionally stressful " value="3" />
            <Picker.Item label="Easy going" value="4" />
        </Picker>
    );
}

function question6(item, questions) {


    return (
        <View style={styles.cardContainer6}>
            <View style={styles.card}>

                <View style={styles.questionContainer6}>
                    <Text style={styles.questionText}>
                        {item.number} {questions.question[item.id]}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankDairy}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankDairy = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Dairy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankFruits}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankFruits = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Fruits or vegetables
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankCoffee}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankCoffee = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Coffee or tea
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankMeat}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankMeat = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Meat and other protein products
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankSweetBevs}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankSweetBevs = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Sweetened beverages
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankCanned}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankCanned = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Processed and canned foods
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankSnack}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankSnack = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Snacks and junk food
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rankText}>
                                {rankGrain}
                            </Text>
                        </View>
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = currentCount + 1;
                                    rankGrain = currentCount;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Grains or bread
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.categoryContainer}>
                        <View style={styles.rankContainer2} />
                        <View style={{ flex: 0.9 }}>
                            <TouchableOpacity style={styles.appButtonContainer6}
                                onPress={() => {
                                    currentCount = 0;
                                    rankFruits = 0;
                                    rankDairy = 0;
                                    rankCoffee = 0;
                                    rankMeat = 0;
                                    rankSweetBevs = 0;
                                    rankCanned = 0;
                                    rankSnack = 0;
                                    rankGrain = 0;
                                    beginClock = true;
                                }}>
                                <Text style={styles.appButtonText6}>
                                    Reset
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
}

function question7(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Everyday" value="1" />
            <Picker.Item label="Once or twice a week" value="2" />
            <Picker.Item label="Once or twice a month" value="3" />
            <Picker.Item label="Hardly ever" value="4" />
        </Picker>
    );
}

function question8(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Everyday" value="1" />
            <Picker.Item label="Once or twice a week" value="2" />
            <Picker.Item label="Once or twice a month" value="3" />
            <Picker.Item label="Hardly ever" value="4" />
        </Picker>
    );
}

function question9(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="Yes" value="1" />
            <Picker.Item label="No" value="2" />
        </Picker>
    );
}

function question10(answer, setAnswer) {
    return (
        <Picker
            style={styles.pickerStyle}
            selectedValue={answer}
            onValueChange={(itemValue) => setAnswer(itemValue)}>
            <Picker.Item label="select answer" value="0" />
            <Picker.Item label="In good physical health" value="1" />
            <Picker.Item label="Mildy physically impaired" value="2" />
            <Picker.Item label="Moderately physically impaired" value="3" />
            <Picker.Item label="Severely physically impaired" value="4" />
            <Picker.Item label="Totally physically impaired" value="5" />
        </Picker>
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
    container: {
        //backgroundColor: "#31b5ce",
        //backgroundColor: "#d4f5f9",
        backgroundColor: '#F5F5F5',
        flex: 1,
        paddingTop: 40, // adds space at the top of the view (screen)
        paddingHorizontal: 20, // adds space to the sides of the view
    },
    cardContainer: {
        //backgroundColor: "red",
        flex: 1,
        height: 125,
        marginTop: 20, // adds space at top of card view (seperates cards my making space inbetween)
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    cardContainer6: {
        //backgroundColor: "red",
        flex: 1,
        height: 450,
        marginTop: 20, // adds space at top of card view (seperates cards my making space inbetween)
        borderBottomColor: "black",
        borderLeftColor: "black",
        borderTopColor: "black",
        borderRightColor: "black",
        borderBottomWidth: BORDER_WIDTH,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
    },
    appButtonContainer: {
        backgroundColor: 'white',
        paddingVertical: 10,
        //paddingTop: 5,
        //paddingBottom: 5,
        paddingHorizontal: 12,
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
    appButtonContainer6: {
        height: 40,
        backgroundColor: 'white',
        paddingVertical: 5,
        //paddingTop: 5,
        //paddingBottom: 5,
        marginHorizontal: 10,
        //marginVertical: 5,
        paddingHorizontal: 12,
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
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: 'center'
    },
    appButtonText6: {
        fontSize: 18,
        color: "black",
        alignSelf: "center",
        textAlign: 'center'
    },
    bottomButtonArea: {
        //backgroundColor: 'lightgreen',
        height: 65,
        paddingVertical: 10
    },
    questionText: {
        fontSize: 15,
        //fontWeight: 'bold',
        paddingLeft: 15,
        color: 'black',
        textAlign: 'center'
    },
    questionContainer6: {
        //backgroundColor: '#3fc09a',
        flex: 0.1,
        backgroundColor: '#E8E8E8',
    },
    questionContainer: {
        //backgroundColor: '#3fc09a',
        flex: 0.4,
        backgroundColor: '#E8E8E8',
    },
    pickerContainer: {
        //backgroundColor: 'lightgreen',
        flex: 0.6,
        backgroundColor: 'white',
    },
    bgImage: {
        flex: 1,
        resizeMode: "stretch",
    },
    bgImageContainer: {
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
    },
    categoryContainer: {
        flex: 0.11,
        flexDirection: 'row',
        //backgroundColor: 'lightgreen',
        marginHorizontal: 5,
        marginVertical: 5
    },
    rankContainer: {
        flex: 0.1,
        backgroundColor: '#d4f5f9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rankContainer2: {
        flex: 0.1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rankText: {
        color: 'black',
        fontSize: 20
    },
    appButtonContainerM: {
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
    appButtonTextM: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
    },

});


