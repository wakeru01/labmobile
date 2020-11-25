import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
// import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  // const favMeals = favoriteMeals.filter(
  //   (meal) => meal.id === "m1" || meal.id === "m2"
  // );
  return (
    // <View style={styles.screen}>
    //   <Text>The Favorites Screen!</Text>
    // </View>
    <MealList listdata={favoriteMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = () => {
  return {
    headerTitle: "Your Favorites",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
