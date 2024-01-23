import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function MainScreen({ navigation }) {
  return (
    <View className="px-8 py-12">
      <View className="flex flex-row justify-between">
        <View>
          <Text className="text-4xl font-bold text-sky-600">Discover</Text>
          <Text className="text-3xl font-semibold text-sky-400">
            The beauty today.
          </Text>
        </View>
        <View className="items-center self-center justify-center align">
          <MaterialIcons
            name="account-circle"
            className="items-center self-center justify-center align"
            size={40}
            color="#38bdf8"
          />
        </View>
      </View>
    </View>
  );
}
