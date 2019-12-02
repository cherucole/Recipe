import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoriesScreen;
