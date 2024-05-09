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
    height: 150,
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
  },
};
