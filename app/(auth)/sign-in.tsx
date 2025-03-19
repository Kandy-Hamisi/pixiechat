import {View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Text className="text-red-500">Hello there</Text>

        </View>
    )
}
export default SignIn


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