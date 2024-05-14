import commonStyles from "../../../styles/commonStyles";
import React, { useContext, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Button, SearchBar } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "../components/TicketsContext";
import BigCard from "../components/BigCard";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredEvents = state.eventos.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function getEventosItems({ item: evento }) {
    return <BigCard evento={evento} getActions={getActions}></BigCard>;
  }

  function getActions(evento) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          onPress={() => {
            [
              dispatch({
                type: "favoritaEvento",
                payload: evento,
              }),
            ];
          }}
          type="clear"
          icon={
            <Icon
              name="star"
              size={25}
              color={evento.favorito ? "yellow" : "white"}
            ></Icon>
          }
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
    Alert.alert("Excluir evento", "Deseja excluir o evento?", [
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
          onChangeText={onChangeSearch}
          value={searchQuery}
          lightTheme={true}
          round={true}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
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
        data={filteredEvents}
        renderItem={getEventosItems}
      />
    </View>
  );
};
