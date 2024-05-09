import React from "react";
import { StyleSheet } from "react-native";
import commonStyles from "./styles/commonStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Navigation from "./src/Navigation";
import { EventosProvider } from "./src/Screens/components/TicketsContext";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <EventosProvider>
      <Navigation></Navigation>
    </EventosProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
