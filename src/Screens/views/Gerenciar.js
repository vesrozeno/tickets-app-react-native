import commonStyles from "../../../styles/commonStyles";
import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ListItem, Avatar, Icon, Button } from "@rneui/themed";
import TicketsContext from "../components/TicketsContext";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);

  function getUsersItems({ item: evento }) {
    return (
      <ListItem
        onPress={() => props.navigation.navigate("Criar", evento)}
        bottomDivider
      >
        <Avatar rounded source={{ uri: evento.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{evento.name}</ListItem.Title>
          <ListItem.Subtitle>{evento.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(evento)}
      </ListItem>
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
