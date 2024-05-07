import React from "react";
import { StyleSheet, Text, View } from "react-native";
import commonStyles from "./styles/commonStyles";
import Home from "./src/views/Home";
import Gerenciar from "./src/views/Gerenciar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HOME") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "GERENCIAR") {
              iconName = focused ? "pencil" : "pencil-outline";
            }
            size = 35;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#0011a6",
            height: 61,
            borderTopWidth: 0,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="GERENCIAR" component={Gerenciar} />
      </Tab.Navigator>
    </NavigationContainer>
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
