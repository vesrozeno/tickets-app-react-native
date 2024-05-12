import React, { useContext, useState } from "react";
import { Button, Card, Avatar } from "@rneui/themed";
import { TextInput, View, Text } from "react-native";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";
import Icon from "react-native-vector-icons/Ionicons";
import avatar from "../../avatar";
export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(TicketsContext);

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
        <View style={{}}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            {/* <Text style={commonStyles.edit_titles}>Nome</Text> */}
            <TextInput
              style={commonStyles.input}
              onChangeText={(name) => setEvento({ ...evento, name })}
              placeholder="Informe o nome"
              placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
              value={evento.name}
            />
            {/* <Text style={commonStyles.edit_titles}>Local</Text> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={commonStyles.big_button}
              type="clear"
              onPress={() => {
                dispatch({
                  type: evento.id ? "updateEvento" : "criaEvento",
                  payload: evento,
                });
                navigation.goBack();
              }}
            >
              <Text style={commonStyles.button_titles}>Confirmar</Text>
            </Button>
            <Button
              style={commonStyles.big_button}
              type="clear"
              title="Cancelar"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={commonStyles.button_titles}>Cancelar</Text>
            </Button>
          </View>
        </View>
      </Card>
    </View>
  );
};
