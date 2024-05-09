import React, { useContext } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ListItem, Avatar, Icon, Button } from "@rneui/themed";
import TicketsContext from "./TicketsContext";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);

  function getUsersItems({ item: user }) {
    return (
      <ListItem
        onPress={() => props.navigation.navigate("TicketsForm", user)}
        bottomDivider
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        {getActions(user)}
      </ListItem>
    );
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate("TicketsForm", user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange"></Icon>}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red"></Icon>}
        />
      </>
    );
  }

  function confirmUserDeletion(user) {
    Alert.alert("Excluir usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          [
            dispatch({
              type: "deleteEvento",
              payload: user,
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
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUsersItems}
      />
    </View>
  );
};
