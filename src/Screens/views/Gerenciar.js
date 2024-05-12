import commonStyles from "../../../styles/commonStyles";
import React, { useContext, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { ListItem, Avatar, Button, Card, SearchBar } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "../components/TicketsContext";
import avatar from "../../avatar";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  function getUsersItems({ item: evento }) {
    return (
      <Card containerStyle={commonStyles.card_style}>
        <ListItem containerStyle={commonStyles.list_item_style}>
          <View style={commonStyles.card_container}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Avatar
                  style={commonStyles.avatar_image_display}
                  source={{ uri: avatar }}
                />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={commonStyles.card_titles}>{evento.name}</Text>
                  <Text
                    style={{
                      ...commonStyles.card_subtitles,
                      fontSize: 18,
                      marginLeft: 90,
                    }}
                  >
                    R${evento.valor}
                  </Text>
                </View>
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
          icon={<Icon name="star" size={25} color="white"></Icon>}
          style={commonStyles.round_buttons}
        ></Button>
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
  function confirmTotalDeletion() {
    Alert.alert("Excluir eventos", "Deseja excluir todos eventos?", [
      {
        text: "Sim",
        onPress() {
          [
            dispatch({
              type: "deleteAllEventos",
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
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar
          placeholder="Procure eventos"
          onChangeText={updateSearch}
          value={search}
          lightTheme={true}
          round={true}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0, //no effect
            borderTopWidth: 0, //works
            borderBottomWidth: 0, //works
          }}
          inputContainerStyle={{
            width: 250,
            height: 50,
          }}
        ></SearchBar>
        <Button
          onPress={() => confirmTotalDeletion()}
          type="clear"
          style={commonStyles.big_button}
        >
          <Text style={{ fontSize: 18, fontStyle: "italic", color: "white" }}>
            Apagar Todos
          </Text>
        </Button>
      </View>
      <FlatList
        keyExtractor={(evento) => evento.id.toString()}
        data={state.eventos}
        renderItem={getUsersItems}
      />
    </View>
  );
};
