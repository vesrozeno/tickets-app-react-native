import React, { useContext, useState } from "react";
import { Button, Card, Avatar } from "@rneui/themed";
import { TextInput, View, Text, FlatList } from "react-native";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";
import Icon from "react-native-vector-icons/Ionicons";
import avatar from "../../avatar";
import AddReserva from "../components/AddReserva";
export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(
    route.params ? route.params : { ...evento, reservas: [] }
  );
  const { dispatch } = useContext(TicketsContext);
  const excluirReserva = (index) => {
    const novasReservas = [...evento.reservas];
    const retornados = novasReservas.splice(index, 1);
    //console.warn(retornados)
    console.warn(novasReservas.splice(index, 1));
    //console.warn(retornados)
    setEvento({
      ...evento,
      reservas: novasReservas,
    });
    //console.warn(evento.reservas)
    dispatch({
      type: "updateEvento",
      payload: evento,
    });
  };
  return (
    <View style={commonStyles.container}>
      <Card containerStyle={commonStyles.edit_card_style}>
        <View style={{ marginTop: 20 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              {/* <Avatar rounded source={{ uri: evento.avatar }} /> */}
              <Avatar
                style={commonStyles.avatar_image_display}
                source={{ uri: avatar }}
              />
              <View>
                <Text style={commonStyles.card_titles}>{evento.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="location" size="10" color={"white"}></Icon>
                  <Text style={commonStyles.card_subtitles}>
                    {evento.local}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="calendar" size="10" color={"white"}></Icon>
                  <Text style={commonStyles.card_subtitles}>{evento.data}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Icon name="time" size="10" color={"white"}></Icon>
                  <Text style={commonStyles.card_subtitles}>{evento.hora}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 25,
                marginBottom: 25,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={commonStyles.card_subtitles}>
                Ingressos disponíveis: {evento.qt}
              </Text>
              <Text style={commonStyles.card_subtitles}>R$ {evento.valor}</Text>
            </View>
          </View>
        </View>
        <AddReserva
          evento={evento}
          setEvento={setEvento}
          navigation={navigation}
        />
        {evento.reservas != undefined && (
          <FlatList
            data={evento.reservas.reduce((acc, item) => acc.concat(item), [])}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: "row", margin: 10 }}>
                <View style={{ flex: 5 }}>
                  <Text>Nome: {item.cliente}</Text>
                  <Text>Quantidade de ingressos: {item.ings}</Text>
                </View>
                <IconButton
                  style={{ flex: 1 }}
                  icon="delete"
                  iconColor="red"
                  onPress={() => excluirReserva(index)}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </Card>
    </View>
  );
};
