import React from "react";
import Stacks from "./StackNavigation.js";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation.js";

export default (props) => (
  <NavigationContainer>
    <DrawerNavigation />
  </NavigationContainer>
);
