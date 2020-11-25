import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Parallel = (props) => {
  const parallelVal = useRef(new Animated.Value(0)).current;
  const parallelVal2 = useRef(new Animated.Value(0)).current;

  const parallelVal3 = parallelVal2.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, 40, 0, -40, 0],
  });

  const parallel = () => {
    Animated.parallel([
      Animated.spring(parallelVal, {
        toValue: 1,
        friction: 1,
      }),
      Animated.timing(parallelVal2, {
        duration: 5000,
        toValue: 1,
        friction: 1,
        easing: Easing.bounce,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        style={{
          marginTop: "60%",
          width: 155,
          height: 130,
          transform: [{ scale: parallelVal }],
          //   opacity: sequenceVal,
          alignSelf: "center",
        }}
        source={require("../assets/logo.png")}
      />
      <Animated.Text
        style={{
          fontSize: 25,
          color: "orange",
          fontWeight: "bold",
          transform: [{ translateX: parallelVal3 }],
          //   opacity: sequenceVal,
          alignSelf: "center",
        }}
      >
        Wellcome to Faculty of IT!!
      </Animated.Text>
      <Button style={styles.button} title="Run Parallel" onPress={parallel} />
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
export default Parallel;
