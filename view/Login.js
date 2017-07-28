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
    H2
} from 'native-base'

// create a component
export class Login extends Component {
    static navigationOptions = {
    }
    render() {
        const { navigate } = this.props.navigation
        
        return (
            <Image style={styles.container} source={require('../image/selfie.jpg')} resizeMode={'cover'}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../image/wifi.png')} resizeMode={'cover'} />
                    <H2 style={[styles.text, styles.headerText]}>Login</H2>

                    <View style={styles.formContainer}>
                        <Item>
                            <Icon active name='mail' style={[styles.text]} />
                            <Input placeholder='youremail@example.com' placeholderTextColor={'white'} style={[styles.text, styles.input]} />
                        </Item>
                        <Item style={[styles.noBottomBorder]}>
                            <Icon active name='lock' style={[styles.text]} />
                            <Input placeholder='password' placeholderTextColor={'white'} style={[styles.text, styles.input]} />
                        </Item>
                        <Button info style={[styles.button]} onPress={() =>
                            navigate('LoginSimple', {})
                        }><Text style={[styles.text]}> Login </Text></Button>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={[styles.rowContainer]}>
                            <View style={[styles.flexRow, styles.line]} />
                            <Text style={[styles.text]}>or</Text>
                            <View style={[styles.flexRow, styles.line]} />
                        </View>
                        <Button primary style={[styles.button]} onPress={() =>
                            navigate('LoginSimple', {})
                        }><Text style={[styles.text]}> Login via Facebook </Text></Button>
                        <Button danger style={[styles.button]} onPress={() =>
                            navigate('LoginSimple', {})
                        }><Text style={[styles.text]}> Login via Google+ </Text></Button>
                    </View>
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

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    line: {
        height: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },

    flexRow: {
        flex: 1
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

    noBottomBorder: {
        borderBottomWidth: 0
    },

    text: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 12,
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
