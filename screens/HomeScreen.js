import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View className="px-10 py-12">
        <View className="flex flex-row flex-wrap ">
          <Text className="px-4 py-2 text-xl font-bold text-white rounded-full bg-sky-600 ">
            Go
          </Text>
          <Text className="self-center ml-1 text-xl font-bold">Travel.</Text>
        </View>
        <Text className="mt-10 text-6xl font-bold text-sky-600">
          Explore the world.{" "}
        </Text>
        <Text className="text-2xl font-semibold text-sky-400 ">
          With Just a few Clicks.
        </Text>

        <Text className="justify-center mt-5 text-sm font-light text-justify text-[#4b4b4b]">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet{" "}
        </Text>
      </View>
      <View className="w-[400px] h-[400px] bg-[#00bcc9] rounded-full absolute -bottom-[500px] -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#e99265] rounded-full absolute -bottom-[400px] right-36"></View>
      <View className="relative items-center flex-1 object-cover">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={require("../assets/travel_image.png")}
          style={{ width: 600, height: 700 }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          className="absolute w-32 h-32  -bottom-[300px] items-center justify-center border-l-2 border-r-2 border-t-4 border-sky-600 rounded-full"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="items-center justify-center w-24 h-24 rounded-full bg-sky-600"
          >
            <Text className="text-3xl font-bold text-white">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
