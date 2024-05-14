import React, { useState, useContext } from "react";
import { Text, View, TextInput } from "react-native";
import { Button, Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "./TicketsContext";
import commonStyles from "../../../styles/commonStyles";

export default ({ evento, setEvento, navigation }) => {
  //States e Context
  const [qt, setQt] = useState(0);
  const [nome, setNome] = useState("");
  const { dispatch } = useContext(TicketsContext);

  //Função para validar dados
  const validaDados = () => {
    let valida = 0;

    if (nome == "" || qt == 0) {
      alert("Preencha todos os campos!");
    } else {
      valida = 1;
    }
    return valida;
  };

  //Funções iteradoras
  const mais = () => {
    if (evento.qt > 0) {
      setQt(qt + 1);
      setEvento({
        ...evento,
        qt: evento.qt - 1,
      });
    }
  };
  const menos = () => {
    if (qt > 0) {
      setQt(qt - 1);
      setEvento({
        ...evento,
        qt: evento.qt + 1,
      });
    }
  };

  //Função que realiza a reserva
  const handleReserva = () => {
    const reserva = { cliente: nome, ings: qt };
    setEvento({ ...evento, reservas: evento.reservas.push(reserva) });
    dispatch({
      type: "updateEvento",
      payload: evento,
    });
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
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Quantidade de ingressos
        </Text>
      </View>
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
          onPress={menos}
          type="clear"
        />
        <Text style={{ fontSize: 35, textAlign: "center", color: "#fff" }}>
          {qt}
        </Text>

        <Button
          icon={<Icon name="add-circle" color="#fff" size={28} />}
          onPress={mais}
          type="clear"
        />
      </View>
      <Card.Divider></Card.Divider>
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={commonStyles.big_button}
          type="clear"
          onPress={() => {
            {
              validaDados() && handleReserva();
            }
          }}
        >
          <Text style={commonStyles.button_titles}>Confirmar</Text>
        </Button>
        <Button
          style={commonStyles.big_button}
          type="clear"
          title="Cancelar"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={commonStyles.button_titles}>Cancelar</Text>
        </Button>
      </View>
    </View>
  );
};
