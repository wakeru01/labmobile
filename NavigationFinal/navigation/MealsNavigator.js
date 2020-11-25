// import คอมโพเนนต์ที่จำเป็น
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

const MealsNavigator = createStackNavigator(
  {
    // กำหนด RouteConfigs (Slide 14)
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: { screen: FavoritesScreen },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons  name="ios-restaurant" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons  name="ios-star" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    // MealsNav: MealsNavigator,
  },

  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: { fontSize: 18 },
      style: { backgroundColor: "lightblue" },
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: { screen: FiltersScreen },
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c" },
      headerTintColor: "white",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: { screen: FiltersNavigator },
  },
  {
    contentOptions: {
      activeTintColor: "red",
    },
  }
);

export default createAppContainer(MainNavigator);
