import {View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'

const SignUp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>


        </View>
    )
}
export default SignUp


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
    }
})