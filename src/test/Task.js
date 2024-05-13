import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import commonStylesteste from "./commonStylesteste";
import Icon from "react-native-vector-icons/FontAwesome";

export default (props) => {
  const doneOrNotStyle =
    props.doneAt != null ? { textDecorationLine: "line-through" } : {};
  const date = props.doneAt ? props.doneAt : props.estimateAt;
  const formattedDate = 0;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.onToggleTask(props.id)}>
        <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
      </TouchableWithoutFeedback>
      <View>
        <Text stye={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

function getCheckView(doneAt) {
  if (doneAt != null) {
    return (
      <View style={styles.done}>
        <Icon name="check" size={20} color="#FFF" />
      </View>
    );
  } else {
    return <View style={styles.pending} />;
  }
}

// Styles de Task.js
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#AAA",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#FFF",
  },
  checkContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#555",
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: "#4D7031",
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    fontFamily: commonStylesteste.fontFamily,
    color: commonStylesteste.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: commonStylesteste.fontFamily,
    color: commonStylesteste.colors.subText,
    fontSize: 12,
  },
  right: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
  left: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
  },
  excludeIcon: {
    marginLeft: 10,
  },
  excludeText: {
    fontFamily: commonStylesteste.fontFamily,
    color: "#FFF",
    fontSize: 20,
    margin: 10,
  },
});
