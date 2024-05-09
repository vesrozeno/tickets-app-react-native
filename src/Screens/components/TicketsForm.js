import React, { useContext, useState } from "react";
import { Button } from "@rneui/themed";
import { TextInput, StyleSheet, View, Text } from "react-native";
import TicketsContext from "./TicketsContext";

export default ({ route, navigation }) => {
  //console.warn(Object.keys(route.params))
  const [user, setUser] = useState(route.params ? route.params : {});
  const [name, setName] = useState("");
  const { dispatch } = useContext(TicketsContext);
  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setUser({ ...user, name })}
        placeholder="Informe o nome"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="Informe o email"
        value={user.email}
      />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? "updateEvento" : "criaEvento",
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  form: {
    padding: 15,
  },
});
