import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation.js";

export default (props) => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);
