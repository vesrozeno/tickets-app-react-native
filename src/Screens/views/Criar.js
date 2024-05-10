import React, { useContext, useState } from "react";
import { Button, Card, Input } from "@rneui/themed";
import { TextInput, StyleSheet, View, Text, Image } from "react-native";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import avatar from "../../avatar";
export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(TicketsContext);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    data =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    setEvento({ ...evento, data });
    hideDatePicker();
  };
  const handleConfirmTime = (time) => {
    hora = time.getHours() + ":" + time.getMinutes();
    setEvento({ ...evento, hora });
    hideTimePicker();
  };

  return (
    <Card containerStyle={commonStyles.edit_card_style}>
      <Text style={commonStyles.edit_titles}>Avatar:</Text>
      <View style={commonStyles.image_container}>
        {avatar.map((avatar, index) => (
          <Image
            style={commonStyles.avatar_image}
            key={index}
            source={{ uri: avatar }}
          ></Image>
        ))}
        {/* <Image
          style={commonStyles.avatar_image}
          source={{ uri: avatar }}
        ></Image> */}
      </View>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setEvento({ ...evento, name })}
        placeholder="Informe o nome"
        value={evento.name}
      />
      <Text>Local</Text>
      <TextInput
        style={style.input}
        onChangeText={(local) => setEvento({ ...evento, local })}
        placeholder="Informe o local"
        value={evento.local}
      />

      <Button
        title={evento.data == null ? "Data do evento" : evento.data}
        onPress={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        locale="pt_BR"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />

      <Button
        title={evento.hora == null ? "Horário" : evento.hora}
        onPress={showTimePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />

      <Text>Preço</Text>
      <TextInput
        style={style.input}
        onChangeText={(valor) => setEvento({ ...evento, valor })}
        placeholder="Informe o valor"
        value={evento.valor}
      />

      <Text>Qt. disponível de ingressos</Text>
      <TextInput
        style={style.input}
        onChangeText={(qt) => setEvento({ ...evento, qt })}
        placeholder="Qt. disponível de ingressos"
        value={evento.qt}
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: evento.id ? "updateEvento" : "criaEvento",
            payload: evento,
          });
          navigation.goBack();
        }}
      />
      <Button
        title="Cancelar"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Card>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    width: 310,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20,
    textAlign: "center",
    fontSize: 18,
  },
  form: {
    padding: 15,
  },
});
