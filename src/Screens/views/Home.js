import commonStyles from "../../../styles/commonStyles";
import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "../components/TicketsContext";
import BigCard from "../components/BigCard";

export default (props) => {
  const { state, dispatch } = useContext(TicketsContext);

  const favoriteEvents = state.eventos.filter((evento) => evento.favorito);
  const otherEvents = state.eventos.filter((evento) => !evento.favorito);
  const mergedEvents = [...favoriteEvents, ...otherEvents];

  function getEventosItems({ item: evento }) {
    return <BigCard evento={evento} getActions={getActions}></BigCard>;
  }

  function getActions(evento) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
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

  return (
    <View style={commonStyles.container}>
      <FlatList
        keyExtractor={(evento) => evento.id.toString()}
        data={mergedEvents}
        renderItem={getEventosItems}
      />
    </View>
  );
};
