import React, { useContext, useState } from "react";
import TicketsContext from "../components/TicketsContext";
import commonStyles from "../../../styles/commonStyles";

import AddReserva from "../components/AddReserva";
import SmallCard from "../components/SmallCard";
export default ({ route, navigation }) => {
  const [evento, setEvento] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(TicketsContext);

  return (
    <SmallCard
      style={commonStyles.edit_card_style}
      evento={evento}
      getActions={getActions}
    ></SmallCard>
  );

  function getActions(evento) {
    return (
      <AddReserva
        evento={evento}
        setEvento={setEvento}
        navigation={navigation}
      />
    );
  }
};
