import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default {
  // colors: {
  //     today: '#B13B44',
  //     tomorrow: '#C9742E',
  //     week: '#15721E',
  //     month: '#1631BE',
  //     secondary: '#FFF',
  //     mainText: '#222',
  //     subText: '#555',
  // }
  container: {
    backgroundColor: "#1E1E1E",
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  main_titles: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 55,
  },
  header_style: {
    backgroundColor: "#1E1E1E",
    height: 150,
    borderBottomLeftRadius: 50,
  },
  card_style: {
    borderRadius: 20,
    // height: 175,
    padding: 10,
    backgroundColor: "#4D4848",
    borderWidth: 0,
  },
  list_item_style: {
    backgroundColor: "#696767",
    borderRadius: 15,
    height: 180,
    padding: 0,
  },
  edit_card_style: {
    borderRadius: 20,
    height: 413,
    padding: 10,
  },
  card_titles: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  card_subtitles: {
    color: "white",
    fontSize: 12,
    fontStyle: "italic",
    padding: 2,
  },
  round_buttons: {
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0011A6",
    margin: 2,
  },
  reserva_button: {
    margin: 2,
    borderRadius: 20,
    width: 125,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0011A6",
  },
  button_text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  card_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  image_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  avatar_image: {
    width: 70,
    height: 70,
  },
  edit_titles: {
    fontStyle: "italic",
    fontSize: 18,
    marginLeft: 10,
  },
};
