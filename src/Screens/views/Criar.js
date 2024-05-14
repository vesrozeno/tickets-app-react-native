import React, { useContext, useState } from "react";
import { Button, Card, Switch } from "@rneui/themed";
import { TextInput, View, Text } from "react-native";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";

export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(TicketsContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  //Valida os dados
  const validaDados = () => {
    let valida = 0;

    if (
      evento.name == "" ||
      evento.local == "" ||
      evento.data == null ||
      evento.hora == null ||
      evento.qt == 0
    ) {
      alert("Preencha todos os campos!");
    } else {
      valida = 1;
    }
    return valida;
  };
  //DateTime Picker
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
    <View style={commonStyles.container}>
      <Card containerStyle={commonStyles.edit_card_style}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <TextInput
            style={commonStyles.input}
            onChangeText={(name) => setEvento({ ...evento, name })}
            placeholder="Informe o nome"
            placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
            value={evento.name}
          />
          <TextInput
            style={commonStyles.input}
            onChangeText={(local) => setEvento({ ...evento, local })}
            placeholder="Informe o local"
            placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
            value={evento.local}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="clear"
            icon={
              <Icon
                name="calendar"
                size={25}
                style={commonStyles.picker_icons}
              ></Icon>
            }
            style={commonStyles.button_pick}
            onPress={showDatePicker}
          >
            <Text style={commonStyles.create_titles}>
              {evento.data == null ? "Data" : evento.data}
            </Text>
          </Button>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            locale="pt_BR"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            containerStyle={commonStyles.button_pick}
          />

          <Button
            icon={
              <Icon
                name="time"
                size={25}
                style={commonStyles.picker_icons}
              ></Icon>
            }
            type="clear"
            style={commonStyles.tiny_button_pick}
            onPress={showTimePicker}
          >
            <Text style={commonStyles.create_titles}>
              {evento.hora == null ? "Horário" : evento.hora}
            </Text>
          </Button>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <TextInput
              style={commonStyles.tiny_input}
              onChangeText={(qt) => setEvento({ ...evento, qt })}
              placeholder="nº Ingressos"
              placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
              inputMode="numeric"
              value={evento.qt}
            />
            <Text style={{ ...commonStyles.edit_titles, marginRight: 15 }}>
              Ing. disponíveis:
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={commonStyles.big_button}
            type="clear"
            onPress={() => {
              {
                validaDados() &&
                  (dispatch({
                    type: evento.id ? "updateEvento" : "criaEvento",
                    payload: evento,
                  }),
                  navigation.goBack());
              }
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
      </Card>
    </View>
  );
};
