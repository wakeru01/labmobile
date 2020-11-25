import React, { useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/mealAction";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";


const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const dispatch = useDispatch();
  const selectedMeal = useSelector(state => state.meals.meals);

  const catId = props.navigation.getParam("deeId");
  const MealTwo = selectedMeal.find((cat) => cat.id === catId);
  const currentMealIsFav = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === catId)
  );
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(catId));
  }, [dispatch, catId]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFav });
  }, [currentMealIsFav]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);
  // console.log(props);
  return (
    <View style={styles.screen}>
      <View style={styles.mealItem}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: MealTwo.imageUrl }}
              style={styles.bgImage}
            ></ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{MealTwo.duration}m</Text>
            <Text>{MealTwo.complexity.toUpperCase()}</Text>
            <Text>{MealTwo.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.a}>Ingredients</Text>
      {MealTwo.ingredients.map((chu) => {
        return <Text key={chu}>{chu}</Text>;
      })}
      <Text></Text>
      <Text></Text>
      <Text style={styles.a}>Steps</Text>
      {MealTwo.steps.map((chu) => {
        return <Text key={chu}>{chu}</Text>;
      })}
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // เขียนโค้ดเพิ่มเพื่อแสดงชื่อเมนูอาหารที่เลือกให้เป็นเฮดเดอร์
  // const catId = navigationData.navigation.getParam("deeId");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  console.log(isFavorite)
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  // const MealTwo = MEALS.find((cat) => cat.id === catId);
  return {
    
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  a: {
    fontSize: 20,
  },
  screen: {
    flex: 1,
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },

  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default MealDetailScreen;
