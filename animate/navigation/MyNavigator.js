import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import SpringScreen from "../screens/Spring";
import SequenceScreen from "../screens/Sequence";
import ParallelScreen from "../screens/Parallel";
import { AntDesign } from "@expo/vector-icons";
import React, { tabBarIcon } from "react";

const MyTabNavigator = createBottomTabNavigator(
  {
    Spring: {
      screen: SpringScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <AntDesign name="meho" size={20} color={tabInfo.tintColor} />;
        },
      },
    },
    Sequence: {
      screen: SequenceScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="smileo" size={20} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Parallel: {
      screen: ParallelScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <AntDesign name="frowno" size={20} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: { fontSize: 15 },
      style: { backgroundColor: "lightblue" },
    },
  }
);

export default createAppContainer(MyTabNavigator);
