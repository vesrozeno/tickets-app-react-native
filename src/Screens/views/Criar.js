import React, { useContext, useState } from "react";
import { Button, Card, Switch } from "@rneui/themed";
import { TextInput, View, Text, Image } from "react-native";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import avatarteste from "../../avatarteste";

export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(
    route.params ? route.params : { ...evento, favorito: false }
  );
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

  const toggleSwitch = () => {
    setEvento({ ...evento, favorito: !evento.favorito });
  };

  return (
    <View style={commonStyles.container}>
      <Card containerStyle={commonStyles.edit_card_style}>
        <Text style={commonStyles.edit_titles}>Avatar:</Text>
        <View style={commonStyles.image_container}>
          {avatarteste.map((avatar, index) => (
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
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            {/* <Text style={commonStyles.edit_titles}>Preço</Text> */}
            <TextInput
              style={commonStyles.tiny_input}
              onChangeText={(valor) => setEvento({ ...evento, valor })}
              placeholder="R$ Preço"
              placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
              value={evento.valor}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <TextInput
              style={commonStyles.tiny_input}
              onChangeText={(qt) => setEvento({ ...evento, qt })}
              placeholder="nº Ingressos"
              placeholderTextColor={"rgba(52, 52, 52, 0.8)"}
              value={evento.qt}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ ...commonStyles.edit_titles, marginRight: 15 }}>
            Favorito:
          </Text>
          <Switch
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={evento.favorito}
          ></Switch>
        </View>
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
      </Card>
    </View>
  );
};
