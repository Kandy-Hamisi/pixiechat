import {View, Text} from 'react-native'
import React from 'react'
import Stack from "@/components/ui/Stack";

const _Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false,
            }} />
            <Stack.Screen name="sign-in" options={{
                headerShown: false,
                presentation: "card",
                title:"Sign In"
            }} />
            <Stack.Screen name="sign-up" options={{
                headerShown: false,
            }} />
        </Stack>
    )
}
export default _Layout
