import commonStyles from "../../../styles/commonStyles";
import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ListItem, Avatar, Icon, Button, Card } from "@rneui/themed";
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
          <Avatar rounded source={{ uri: evento.avatarUrl }} />
          <ListItem.Content>
            <ListItem.Title style={commonStyles.card_titles}>
              {evento.name}
            </ListItem.Title>
            <ListItem.Subtitle style={commonStyles.card_subtitles}>
              {evento.email}
            </ListItem.Subtitle>
          </ListItem.Content>
          {getActions(evento)}
        </ListItem>
      </Card>
    );
  }

  function getActions(evento) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("Criar", evento)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange"></Icon>}
        />
        <Button
          onPress={() => confirmUserDeletion(evento)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red"></Icon>}
        />
      </>
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
    <View>
      <FlatList
        keyExtractor={(evento) => evento.id.toString()}
        data={state.eventos}
        renderItem={getUsersItems}
      />
    </View>
  );
};
