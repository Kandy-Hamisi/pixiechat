import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native'

import React from 'react'
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello Index</Text>

            <Button title="Sign In" onPress={() => router.push('/sign-in')} />
            {/*<TouchableOpacity className="text-white bg-blue-500">*/}
            {/*    <Text className="text-white">Sign Up</Text>*/}
            {/*</TouchableOpacity>*/}
            <Button title="Sign Up" onPress={() => router.push('/sign-up')} />
        </View>
    )
}
export default Index


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