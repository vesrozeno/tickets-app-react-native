import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Alert, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "./TicketsContext";
import commonStyles from "../../../styles/commonStyles";

export default ({ evento, setEvento, navigation }) => {
  const [qt, setQt] = useState(0);
  const [nome, setNome] = useState("");
  const { dispatch } = useContext(TicketsContext);

  const inc = () => {
    if (evento.qt > 0) {
      setQt(qt + 1);
      setEvento({
        ...evento,
        qt: evento.qt - 1,
      });
    }
  };
  const dec = () => {
    if (qt > 0) {
      setQt(qt - 1);
      setEvento({
        ...evento,
        qt: evento.qt + 1,
      });
    }
  };

  const handleReserva = () => {
    const novaReserva = { cliente: nome, ings: qt };
    const novasReservas = [...evento.reservas, novaReserva];
    setEvento({ ...evento, reservas: evento.reservas.push(novasReservas) });
    dispatch({
      type: "updateEvento",
      payload: evento,
    });
    console.warn(evento.reservas);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        style={commonStyles.input}
        placeholder="Informe seu nome"
        placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
        onChangeText={(nome) => setNome(nome)}
        value={nome}
      />

      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignSelf: "center",
          margin: 10,
        }}
      >
        <Button
          icon={<Icon name="remove-circle" color="#fff" size={28} />}
          onPress={dec}
          type="clear"
        />
        <Text style={{ fontSize: 35, textAlign: "center", color: "#fff" }}>
          {qt}
        </Text>

        <Button
          icon={<Icon name="add-circle" color="#fff" size={28} />}
          onPress={inc}
          type="clear"
        />
      </View>

      <Button type="solid" onPress={handleReserva} buttonColor="#fff">
        RESERVAR
      </Button>
    </View>
  );
};
