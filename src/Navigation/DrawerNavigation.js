import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CriarNavigation } from "./StackNavigation";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

export default (props) => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      swipeEnabled: false,
      drawerStyle: {
        backgroundColor: "#0011A6",
      },
      drawerLabelStyle: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
      },
      drawerActiveBackgroundColor: "#1E1E1E",
    }}
  >
    <Drawer.Screen name="Ir para o início" component={StackNavigation} />
    <Drawer.Screen
      name="Criar novo evento"
      component={CriarNavigation}
      options={{ unmountOnBlur: true }}
    />
  </Drawer.Navigator>
);
