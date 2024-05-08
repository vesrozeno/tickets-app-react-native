import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigationTabs from "./BottomTabs";

import Home from "../Screens/views/Home";
import Gerenciar from "../Screens/views/Gerenciar";
import Criar from "../Screens/views/Criar";
import commonStyles from "../../styles/commonStyles";

const Stack = createNativeStackNavigator();

export default (props) => (
  <Stack.Navigator
    initialRouteName="Home" // Controle de rota inicial
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={HomeNavigationTabs} />
  </Stack.Navigator>
);

export function HomeNavigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "HOME",
        headerLeft: () => (
          <View>
            <Ionicons
              name="menu"
              size={35}
              color={"#000"}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export function CriarNavigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "CRIAR EVENTO",
        headerLeft: () => (
          <View>
            <Ionicons
              name="arrow-back"
              size={35}
              color={"#000"}
              onPress={() => navigation.goBack()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Criar" component={Criar} />
    </Stack.Navigator>
  );
}

export function GerenciarNavigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "GERENCIAR",
        headerLeft: () => (
          <View>
            <Ionicons
              name="menu"
              size={35}
              color={"#000"}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Gerenciar" component={Gerenciar} />
    </Stack.Navigator>
  );
}
