import React from "react";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigationTabs from "./BottomTabs";
import Home from "../Screens/views/Home";
import Gerenciar from "../Screens/views/Gerenciar";
import Criar from "../Screens/views/Criar";
import Reservar from "../Screens/views/Reservar";
import Status from "../Screens/views/Status";

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
              color={"#FFF"}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "HOME",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Criar"
        component={Criar}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "EDITAR EVENTO",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Reservar"
        component={Reservar}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "RESERVAR",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Status"
        component={Status}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "STATUS",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function CriarNavigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: "CRIAR",
        headerLeft: () => (
          <View>
            <Ionicons
              name="arrow-back"
              size={35}
              color={"#FFF"}
              onPress={() => navigation.goBack()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="CriarStack"
        component={Criar}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          unmountOnBlur: true,
          title: "CRIAR",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function GerenciarNavigation({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <View>
            <Ionicons
              name="menu"
              size={35}
              color={"white"}
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="GerenciarStack"
        component={Gerenciar}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "GERENCIAR",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="Criar"
        component={Criar}
        options={{
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          title: "EDITAR EVENTO",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTitleStyle: {
            fontSize: 26,
            color: "white",
          },
        }}
      />
    </Stack.Navigator>
  );
}
