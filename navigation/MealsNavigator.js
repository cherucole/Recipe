import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { Platform } from "react-native";
import Colors from "../constants/Colors";

import CategoriesScreen from "../screens/CategoriesScreen";
import CatergoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CatergoryMealScreen
    },
    MealDetail: MealDetailsScreen
  },
  {
    // mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS == "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS == "android" ? "white" : Colors.primaryColor
    }
  }
);

export default createAppContainer(MealsNavigator);
