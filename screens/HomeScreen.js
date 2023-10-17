import {
  View,
  Dimensions,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { removeItem } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = () => {
    removeItem("onboarded");
    navigation.navigate("Onboarding");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LottieView
          style={{ width: width * 0.9, height: width }}
          source={require("../assets/animations/home.json")}
          autoPlay
          loop
        />
      </View>
        <Text style={{fontSize:33, }}>Welcome To home Page!</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text>Reset and Back to Onboard Screen</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
