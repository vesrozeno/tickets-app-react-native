import React, { Component } from "react";
import {
  Platform,
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import commonStylesteste from "./commonStylesteste";

const initialState = { desc: "", date: new Date(), showDatePicker: false };

export default class AddTask extends Component {
  state = {
    ...initialState,
  };

  // Método 'save' da classe 'AddTask'
  save = () => {
    const task = {
      id: Math.random(),
      desc: this.state.desc,
      estimateAt: this.state.date,
      doneAt: null,
    };
    this.props.onSave(task);
  };

  getDatePicker = () => {
    let datePicker = (
      <DateTimePicker
        value={this.state.date}
        onChange={(_, date) => this.setState({ date, showDatePicker: false })}
        mode="date"
      />
    );

    if (Platform.OS === "android") {
      datePicker = (
        <View>
          <TouchableOpacity
            onPress={() => this.setState({ showDatePicker: true })}
          >
            <Text style={styles.date}>{}</Text>
          </TouchableOpacity>
          {this.state.showDatePicker && datePicker}
        </View>
      );
    }

    return datePicker;
  };

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a Descrição..."
            onChangeText={(desc) => this.setState({ desc })}
            value={this.state.desc}
          />
          {this.getDatePicker()}
          <View style={styles.buttons}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save()}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  container: {
    backgroundColor: "#FFF",
  },
  header: {
    fontFamily: commonStylesteste.fontFamily,
    backgroundColor: commonStylesteste.colors.today,
    color: commonStylesteste.colors.secondary,
    textAlign: "center",
    padding: 15,
    fontSize: 18,
  },
  input: {
    fontFamily: commonStylesteste.fontFamily,
    height: 40,
    margin: 15,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 6,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStylesteste.colors.today,
  },
  date: {
    fontFamily: commonStylesteste.fontFamily,
    fontSize: 20,
    marginLeft: 15,
  },
});
