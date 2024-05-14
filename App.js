import React from "react";
import Navigation from "./src/Navigation";
import { EventosProvider } from "./src/Screens/components/TicketsContext";

export default function App() {
  return (
    <EventosProvider>
      <Navigation></Navigation>
    </EventosProvider>
  );
}
