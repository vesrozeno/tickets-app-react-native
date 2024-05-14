import commonStyles from "../../../styles/commonStyles";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

export default (props) => {
  return (
    <Card
      containerStyle={
        props.evento.favorito
          ? commonStyles.fav_card_style
          : commonStyles.card_style
      }
    >
      <View style={commonStyles.card_container}>
        <Card.Image
          source={{ uri: props.evento.avatar }}
          containerStyle={commonStyles.avatar_image}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={commonStyles.card_titles}>
                  {props.evento.name}
                </Text>
                {props.evento.favorito && (
                  <Icon name="star" color="yellow" size={20}></Icon>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon name="location" size="10" color={"white"}></Icon>
                <Text style={commonStyles.card_subtitles}>
                  {props.evento.local}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon name="calendar" size="10" color={"white"}></Icon>
                <Text style={commonStyles.card_subtitles}>
                  {props.evento.data}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Icon name="time" size="10" color={"white"}></Icon>
                <Text style={commonStyles.card_subtitles}>
                  {props.evento.hora}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginBottom: 5,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={commonStyles.card_subtitles}>
              Ingressos disponíveis: {props.evento.qt}
            </Text>
          </View>
          <Card.Divider></Card.Divider>
          <View>{props.getActions(props.evento)}</View>
        </View>
      </View>
    </Card>
  );
};
