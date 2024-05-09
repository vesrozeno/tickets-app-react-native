import React, { useContext, useState } from "react";
import { Button, Card, Input } from "@rneui/themed";
import { TextInput, StyleSheet, View, Text } from "react-native";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";
import Icon from "react-native-vector-icons/FontAwesome";

export default ({ route, navigation }) => {
  //console.warn(Object.keys(route.params))
  const [evento, setEvento] = useState(route.params ? route.params : {});
  const [name, setName] = useState("");
  const { dispatch } = useContext(TicketsContext);
  return (
    <Card containerStyle={commonStyles.edit_card_style}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setEvento({ ...evento, name })}
        placeholder="Informe o nome"
        value={evento.name}
      />
      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={(email) => setEvento({ ...evento, email })}
        placeholder="Informe o email"
        value={evento.email}
      />
      <Input
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="user" size={24} color="black" />}
        inputContainerStyle={{
          borderColor: "gray",
          borderRadius: 10,
        }}
      />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: evento.id ? "updateEvento" : "criaEvento",
            payload: evento,
          });
          navigation.goBack();
        }}
      />
    </Card>
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
