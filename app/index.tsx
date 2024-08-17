import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Welcome Page</Text>
      <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
