import React, { useContext, useState } from "react";
import { Card, Image } from "@rneui/themed";
import { View, Text } from "react-native";
import commonStyles from "../../../styles/commonStyles";
import Icon from "react-native-vector-icons/Ionicons";

export default (props) => {
  return (
    <View style={commonStyles.container}>
      <Card containerStyle={props.style}>
        <View style={{ marginTop: 10 }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <Image
                containerStyle={commonStyles.avatar_image_display}
                source={{ uri: props.evento.avatar }}
              />
              <View>
                <Text style={commonStyles.card_titles}>
                  {props.evento.name}
                </Text>
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
                marginTop: 10,
                marginBottom: 20,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={commonStyles.card_subtitles}>
                Ingressos disponíveis: {props.evento.qt}
              </Text>
            </View>
          </View>
        </View>
        <Card.Divider></Card.Divider>
        <View>{props.getActions(props.evento)}</View>
      </Card>
    </View>
  );
};
