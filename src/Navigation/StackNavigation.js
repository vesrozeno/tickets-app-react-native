import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigationTabs from "./BottomTabs";
import Home from "../Screens/views/Home";
import Gerenciar from "../Screens/views/Gerenciar";
import commonStyles from "../../styles/commonStyles";
import TicketsContext from "../Screens/components/TicketsContext";
import Criar from "../Screens/views/Criar";

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
              color={"#000"}
              onPress={() => navigation.goBack()}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="CriarStack"
        component={Criar}
        options={({ navigation }) => {
          const { state, dispatch } = useContext(TicketsContext);
          return {
            title: "CRIAR EVENTO",
            headerRight: () => (
              <>
                <Button
                  onPress={() => navigation.navigate("Criar")}
                  type="clear" // pode ser solid ou outline, nesse caso é sem fundo
                  icon={<Icon name="add" size={25} color="black" />}
                />
                <Button
                  onPress={() =>
                    dispatch({
                      type: "deleteAllEventos",
                    })
                  }
                  type="clear" // pode ser solid ou outline, nesse caso é sem fundo
                  icon={<Icon name="delete" size={25} color="black" />}
                />
              </>
            ),
          };
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
