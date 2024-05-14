import React, { useState, useContext } from "react";
import { Card, Button } from "@rneui/themed";
import { View, Text, ScrollView } from "react-native";
import commonStyles from "../../../styles/commonStyles";
import Icon from "react-native-vector-icons/Ionicons";
import TicketsContext from "../components/TicketsContext";
import SmallCard from "../components/SmallCard";

export default ({ route }) => {
  //States e Context
  const [evento, setEvento] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(TicketsContext);

  //Função para excluir reserva
  const excluirReserva = (item) => {
    const novasReservas = evento.reservas.filter((i) => i !== item);
    setEvento({
      ...evento,
      reservas: novasReservas,
      qt: evento.qt + item.ings,
    });
    dispatch({
      type: "updateEvento",
      payload: {
        ...evento,
        reservas: novasReservas,
        qt: evento.qt + item.ings,
      },
    });
  };

  return (
    <SmallCard
      style={
        evento.reservas == 0
          ? commonStyles.edit_card_style
          : commonStyles.list_edit_card_styles
      }
      evento={evento}
      getActions={getActions}
    ></SmallCard>
  );

  function getActions(evento) {
    return (
      <ScrollView>
        {evento.reservas == 0 ? (
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Ainda não há reservas para esse evento.
          </Text>
        ) : (
          evento.reservas.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Card
                containerStyle={{
                  borderRadius: 20,
                  backgroundColor: "#0011A6",
                  borderWidth: 0,
                  width: 210,
                  height: 60,
                }}
                wrapperStyle={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ ...commonStyles.edit_titles, fontSize: 14 }}>
                  {item.cliente}
                </Text>

                <Icon
                  name="ticket"
                  size={15}
                  color="#fff"
                  style={{
                    borderWidth: 2,
                    borderColor: "#fff",
                    borderRadius: 10,
                    padding: 2,
                  }}
                >
                  {item.ings}
                </Icon>
              </Card>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Button
                  type="clear"
                  icon={<Icon name="trash" size={20} color="white"></Icon>}
                  style={commonStyles.tiny_round_buttons}
                  onPress={() => excluirReserva(item)}
                />
              </View>
            </View>
          ))
        )}
      </ScrollView>
    );
  }
};
