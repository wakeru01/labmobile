import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Sequece = (props) => {
  const sequenceVal = useRef(new Animated.Value(1)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const sequence = () => {
    Animated.sequence([
      Animated.timing(sequenceVal, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(sequenceVal, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(spinAnim, {
        delay: 1000,
        toValue: 1,
        duration: 5000,
        // easing: Easing.bounce,
      }),
      // .start( ()=>{spinAnim.setValue(0)
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          marginTop: "60%",
          width: 155,
          height: 130,
          transform: [{ rotate: spin }],
          opacity: sequenceVal,
          alignSelf: "center",
        }}
        source={require("../assets/logo.png")}
      />
      <Button style={styles.button} title="Run Sequence" onPress={sequence} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  button: {
    flex: 1,
  },
});
export default Sequece;
