import commonStyles from "../../../styles/commonStyles";
import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ListItem, Avatar, Button, Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "../components/TicketsContext";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);

  function getUsersItems({ item: evento }) {
    return (
      <Card containerStyle={commonStyles.card_style}>
        <ListItem
          onPress={() => props.navigation.navigate("Criar", evento)}
          containerStyle={commonStyles.list_item_style}
        >
          <Avatar rounded source={{ uri: evento.avatar }} />
          <View style={commonStyles.card_container}>
            <View>
              <Text style={commonStyles.card_titles}>{evento.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon name="location" size="10" color={"white"}></Icon>
                <Text style={commonStyles.card_subtitles}>{evento.local}</Text>
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
        </ListItem>
      </Card>
    );
  }

  function getActions(evento) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Button
          onPress={() => props.navigation.navigate("Criar", evento)}
          type="clear"
          icon={<Icon name="pencil" size={25} color="white"></Icon>}
          style={commonStyles.round_buttons}
        ></Button>

        <Button
          onPress={() => confirmUserDeletion(evento)}
          type="clear"
          icon={<Icon name="trash" size={30} color="white"></Icon>}
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
