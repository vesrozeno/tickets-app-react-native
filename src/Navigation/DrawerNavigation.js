import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CriarNavigation } from "./StackNavigation";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

export default (props) => (
  <Drawer.Navigator screenOptions={{ headerShown: false, swipeEnabled: false }}>
    <Drawer.Screen name="HomeDrawer" component={StackNavigation} />
    <Drawer.Screen name="CriarDrawer" component={CriarNavigation} />
  </Drawer.Navigator>
);
