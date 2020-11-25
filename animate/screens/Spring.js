import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";

const Spring = (props) => {
  const springVal = useRef(new Animated.Value(0.3)).current;
  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };

  return (
    <View style={styles.container}>
      {/* <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim }]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <Button title="Fade In" onPress={spring} />
       */}
      <Animated.Image
        style={{
          marginTop: "60%",
          width: 155,
          height: 130,
          transform: [{ scale: springVal }],
          alignSelf: "center",
        }}
        source={require("../assets/logo.png")}
      />
      <Button style={styles.button} title="Spring" onPress={spring} />
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
export default Spring;
