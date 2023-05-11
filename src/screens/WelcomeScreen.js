import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import GLOBALS from "../Global";

const WelcomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LearnIt</Text>
      <Image
        source={require("../assets/images/splash.png")}
        style={{
          width: 256,
          height: 256,
        }}
      ></Image>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onNavigateLogin(navigation)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const onNavigateLogin = (onNavigate) =>
  onNavigate.replace(GLOBALS.SCREEN.LOGIN);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "#4169E1",
    fontSize: 36,
  },
  buttonView: {
    alignSelf: "stretch",
  },
  button: {
    backgroundColor: "#4169E1",
    alignItems: "center",
    margin: 12,
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FCBF49",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WelcomeScreen;
