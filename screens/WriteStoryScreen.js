import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View styles = {styles.container}>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 30, backgroundColor: 'lightgreen'}}> StoryHub </Text>
                </View>
                <View style = {styles.inputView}>
                    <TextInput
                    style = {styles.inputBox}
                    placeholder = "Title Of Story"/>
                </View>
                <View style = {styles.inputView}>
                    <TextInput
                    style = {styles.inputBox}
                    placeholder = "Author Of Story"/>
                </View>
                <View>
                    <TextInput
                    style = {styles.StoryBox}
                    placeholder = "Write Your Story Here"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen"
    },
    displayText: {
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton: {
        backgroundColor: "#2196F3",
        padding: 10,
        margin: 10
    },
    buttonText: {
        fontSize: 15,
        textAlign: "center",
        marginTop: 10
    },
    inputView: {
        flexDirection: 'row',
        margin: 20
    },
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white'
    },
    StoryBox: {
        width: 200,
        height: 200,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor: 'white' 
    },
    scanButton: {
        backgroundColor: '#66BB6A',
        width: 50,
        borderWidth: 1.5,
        borderLeftWidth: 0
    }
});
