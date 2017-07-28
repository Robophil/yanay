//import liraries
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import {
    Button,
    Text,
    Content, Item, Input, Icon,
    H2, H3
} from 'native-base'

// create a component
export class LoginSimple extends Component {
    static navigationOptions = {
    }
    render() {
        const { navigate } = this.props.navigation
        
        return (
            <Image style={styles.container} source={require('../image/selfie.jpg')} resizeMode={'cover'}>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Image style={styles.logo} source={require('../image/wifi.png')} resizeMode={'cover'} />
                        <H2 style={[styles.textFree, styles.headerText]}>Register</H2>
                    </View>

                    <View style={styles.formContainer}>
                        <Item>
                            <Icon active name='mail' style={[styles.text, styles.textFree]} />
                            <Input placeholder='incorrect username' placeholderTextColor={'white'} style={[styles.text, styles.textFree, styles.input]} />
                        </Item>
                        <Item style={[styles.noBottomBorder]}>
                            <Icon active name='lock' style={[styles.text, styles.textFree]} />
                            <Input placeholder='incorrect password' placeholderTextColor={'white'} style={[styles.text, styles.textFree, styles.input]} />
                        </Item>
                        <Button info style={[styles.button]} onPress={() =>
                            navigate('Register', {})
                        }><Text style={[styles.text, styles.textFree]}> Login </Text></Button>
                    </View>

                    <Text style={[styles.textFree, styles.bottomContainer]}> Forgot password ?</Text>
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

    bottomContainer: {
        position: 'absolute',
        bottom: 20
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
    },

    textFree: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },

    input: {
        fontSize: 14,
    },

    formContainer: {
        marginTop: 45,
        marginBottom: 15,
        width: 260
    }
})
