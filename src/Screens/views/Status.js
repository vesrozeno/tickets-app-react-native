import React, { useState } from "react";
import { Card, Avatar } from "@rneui/themed";
import { View, Text } from "react-native";
import commonStyles from "../../../styles/commonStyles";
import Icon from "react-native-vector-icons/Ionicons";
import avatar from "../../avatar";
export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(route.params ? route.params : {});

  return (
    <View style={commonStyles.container}>
      <Card containerStyle={commonStyles.edit_card_style}>
        <View
          style={{
            flexDirection: "column",
          }}
        >
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
              </View>
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
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Text style={commonStyles.card_subtitles}>
              Ingressos disponíveis: {evento.qt}
            </Text>
            <Text
              style={{
                ...commonStyles.card_subtitles,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              R${evento.valor}
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};
