import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Criar from "./Criar";
import commonStyles from "../../../styles/commonStyles";

export default (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.main_titles}></Text>
    </View>
  );
};
