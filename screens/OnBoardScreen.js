import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

export default function OnBoardScreen() {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate("Home");
    setItem('onboarded', '1');
  };
  const handleSkip = () => {
    navigation.navigate("Home");
  };
  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity
      {...props}
        style={{
          padding: 20,
          borderTopLeftRadius: "100%",
          borderBottomLeftRadius: "100%",
          fontSize: 16,
          fontWeight: "bold",
          backgroundColor: "#fff",
        }}
      >
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#ffb",
            image: (
              <View>
                <LottieView
                  onDone={handleDone}
                  style={{ width: width * 0.9, height: width }}
                  source={require("../assets/animations/first.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Find Your Dream Job",
            subtitle: "Search and find your dream job easily and quickly",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  style={{ width: width * 0.9, height: width }}
                  source={require("../assets/animations/second.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Get Your Dream Job",
            subtitle: "Get your new job and start working in your new company",
          },
          {
            backgroundColor: "#FEF1F0",
            image: (
              <View>
                <LottieView
                  style={{ width: width * 0.9, height: width }}
                  source={require("../assets/animations/achieve.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Join and Start Your Work",
            subtitle: "Start working in your new workplace",
          },
        ]}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
