//import liraries
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import {
    Button, Text,
    Content, Item, Input, Icon, Body, Left,
    H2, H3,
    CheckBox, ListItem
} from 'native-base'

// create a component
export class Register extends Component {
    static navigationOptions = {
    }
    render() {
        const { navigate } = this.props.navigation
        
        return (
            <Image style={styles.container} source={require('../image/selfie.jpg')} resizeMode={'cover'}>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Image style={styles.logo} source={require('../image/wifi.png')} resizeMode={'cover'} />
                        <H2 style={[styles.textFree, { textAlign: 'center' }, styles.headerText]}>Register</H2>
                    </View>

                    <View style={styles.formContainer}>
                        <Item>
                            <Icon active name='mail' style={[styles.text, styles.textFree]} />
                            <Input placeholder='username' placeholderTextColor={'white'} style={[styles.text, styles.textFree, styles.input]} />
                        </Item>
                        <Item>
                            <Icon active name='lock' style={[styles.text, styles.textFree]} />
                            <Input placeholder='youremail@example.com' placeholderTextColor={'white'} style={[styles.text, styles.textFree, styles.input]} />
                        </Item>
                        <Item>
                            <Icon active name='mail' style={[styles.text, styles.textFree]} />
                            <Input placeholder='Enter password' placeholderTextColor={'white'} style={[styles.text, styles.textFree, styles.input]} />
                        </Item>
                        <Item>
                            <Icon active name='lock' style={[styles.text, styles.textFree]} />
                            <Input placeholder='Re-enter password' placeholderTextColor={'white'} style={[styles.text, styles.textFree, styles.input]} />
                        </Item>
                        <View style={[styles.rowContainer, { marginTop: 17 }]}>
                            <Left style={[{ width: 10, height: 20 }]}><CheckBox checked={true} style={[styles.checkBox]} /></Left>
                            <Text style={[styles.text, styles.textFree]}>I agree with the terms and conditions of yanay</Text>
                        </View>
                        <Item style={[styles.noBottomBorder, { marginTop: 17 }]}>
                            <Icon active name='cloud-upload' style={[styles.text, styles.textFree]} />
                            <Text style={[styles.text, styles.textFree, { paddingLeft: 3 }]}>upload picture</Text>
                        </Item>
                        <Button info style={[styles.button]}  onPress={() =>
                            navigate('Main', {})
                        }><Text style={[styles.text, styles.textFree]}> Login </Text></Button>
                    </View>

                    <Text style={[styles.textFree, styles.bottomContainer]}> Already have an account? Login here</Text>
                </View>
            </Image>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },

    topContainer: {
        position: 'absolute',
        top: 0
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    noBottomBorder: {
        borderBottomWidth: 0
    },

    bottomContainer: {
        position: 'absolute',
        bottom: 20
    },

    checkBoxContainer: {
        backgroundColor: 'green'
    },

    checkBox: {
        position: 'absolute',
        left: 0,
        top: 0
    },

    logo: {
        width: 150,
        height: 150
    },

    button: {
        width: 260,
        height: 35,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },

    text: {
        fontSize: 12,
        textAlign: 'center',
    },

    textFree: {
        color: 'white',
        textAlign: 'left',
        backgroundColor: 'transparent',
    },

    input: {
        fontSize: 14,
    },

    formContainer: {
        marginTop: 150,
        marginBottom: 15,
        width: 260
    }
})
