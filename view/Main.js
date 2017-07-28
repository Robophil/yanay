//import liraries
import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { Button } from 'native-base'

// create a component
export class Main extends Component {
    render() {
        return (
            <Image style={styles.container} source={require('../image/selfie.jpg')} resizeMode={'cover'}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={require('../image/wifi.png')} resizeMode={'cover'} />
                    <View>
                        <Button bordered style={styles.button}>
                             <Text style={styles.text}>Login</Text>
                        </Button>
                        <Button bordered style= {styles.button}>
                            <Text style={styles.text}>Sign up</Text>
                        </Button>
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

    logo: {
        width: 240,
        height: 240
    },

    button: {
        width: 280,
        height: 45,
        margin: 10,
        borderColor: 'white',
        justifyContent: 'center'
    },

    text: {
        color: 'white',
        textAlign: 'center'
    }
})
