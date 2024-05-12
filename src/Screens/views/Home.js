import commonStyles from "../../../styles/commonStyles";
import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ListItem, Avatar, Button, Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "../components/TicketsContext";
import avatar from "../../avatar";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);

  function getUsersItems({ item: evento }) {
    return (
      <Card containerStyle={commonStyles.card_style}>
        <ListItem
          onPress={() => props.navigation.navigate("Criar", evento)}
          containerStyle={commonStyles.list_item_style}
        >
          <View style={commonStyles.card_container}>
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
                    <Text style={commonStyles.card_subtitles}>
                      {evento.data}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="time" size="10" color={"white"}></Icon>
                    <Text style={commonStyles.card_subtitles}>
                      {evento.hora}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginBottom: 5,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={commonStyles.card_subtitles}>
                  Ingressos disponíveis: {evento.qt}
                </Text>
              </View>
              <View>{getActions(evento)}</View>
            </View>
          </View>
        </ListItem>
      </Card>
    );
  }

  function getActions(evento) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Button
          onPress={() => props.navigation.navigate("Reservar", evento)}
          type="clear"
          icon={<Icon name="cart" size={25} color="white"></Icon>}
          style={commonStyles.reserva_button}
        >
          <Text style={commonStyles.button_text}>RESERVAR</Text>
        </Button>

        <Button
          onPress={() => props.navigation.navigate("Status", evento)}
          type="clear"
          icon={<Icon name="information-circle" size={30} color="white"></Icon>}
          style={commonStyles.round_buttons}
        />
      </View>
    );
  }

  function confirmUserDeletion(evento) {
    Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          [
            dispatch({
              type: "deletaEvento",
              payload: evento,
            }),
          ];
        },
      },
      {
        text: "Não",
      },
    ]);
  }

  return (
    <View style={commonStyles.container}>
      <FlatList
        keyExtractor={(evento) => evento.id.toString()}
        data={state.eventos}
        renderItem={getUsersItems}
      />
    </View>
  );
};
