import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeNavigation } from "./StackNavigation";
import { GerenciarNavigation } from "./StackNavigation";

const Tab = createBottomTabNavigator();
export default function HomeNavigationTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0011a6",
          height: 61,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={35}
                name={focused ? "home" : "home-outline"}
                color={focused ? "white" : "gray"}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="GerenciarTab"
        component={GerenciarNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons
                size={35}
                name={focused ? "pencil" : "pencil-outline"}
                color={focused ? "white" : "gray"}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
