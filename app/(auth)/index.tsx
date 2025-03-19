import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";

import React from "react";
import { useRouter } from "expo-router";
import reactLogo from "@/assets/images/react-logo.png";

const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 gap-12 justify-center items-center">
      {/*  we should be carefull about naming files*/}
      <Image source={reactLogo} className="" />

      <Pressable
        className="bg-primary w-[120px] rounded-md text-center"
        onPress={() => router.push("/sign-in")}
      >
        <Text className="text-white px-6 py-4 text-center">Sign In</Text>
      </Pressable>
      <Pressable
        className="bg-white w-[120px] rounded-md"
        onPress={() => router.push("/sign-up")}
      >
        <Text className="px-6 py-4 text-red-500 text-center">Sign Up</Text>
      </Pressable>
    </View>
  );
};
export default Index;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         color: "white",
//         fontSize: 32,
//         fontWeight: "bold",
//     }
// })
