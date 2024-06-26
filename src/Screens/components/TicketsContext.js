import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import covers from "../../covers";

const TicketsContext = createContext({});
const initialState = { eventos: [] };

const actions = {
  carregaEventos(state, action) {
    const loadedEventos = action.payload.eventos;
    return {
      ...state,
      eventos: loadedEventos,
    };
  },

  deletaEvento(state, action) {
    const user = action.payload;
    const updatedEventos = state.eventos.filter((u) => u.id !== user.id);
    saveEventos(updatedEventos);
    return {
      ...state,
      eventos: updatedEventos,
    };
  },

  favoritaEvento(state, action) {
    const user = action.payload;

    user.favorito = !user.favorito;

    const updatedEventos = state.eventos.map((u) =>
      u.id === user.id ? user : u
    );
    saveEventos(updatedEventos);
    return {
      ...state,
      eventos: updatedEventos,
    };
  },

  criaEvento(state, action) {
    const user = action.payload;
    user.id = Math.random();
    user.reservas = [];
    user.favorito = false;
    user.avatar = covers[Math.floor(Math.random() * covers.length)];
    const updatedEventos = [...state.eventos, user];
    saveEventos(updatedEventos);
    return {
      ...state,
      eventos: updatedEventos,
    };
  },

  updateEvento(state, action) {
    const updated = action.payload;
    const updatedEventos = state.eventos.map((u) =>
      u.id === updated.id ? updated : u
    );
    saveEventos(updatedEventos);
    return {
      ...state,
      eventos: updatedEventos,
    };
  },

  deleteAllEventos(state, action) {
    deleteEventos();
    return {
      ...state,
      eventos: [],
    };
  },
};
async function saveEventos(eventos) {
  try {
    await AsyncStorage.setItem("eventos", JSON.stringify(eventos));
  } catch (error) {
    console.error("Erro ao salvar os eventos no AsyncStorage", error);
  }
}
async function loadEventos() {
  try {
    const eventos = await AsyncStorage.getItem("eventos");
    return { eventos: eventos ? JSON.parse(eventos) : [] };
  } catch (error) {
    console.error("Erro ao carregar os eventos do AsyncStorage", error);
    return { eventos: [] };
  }
}

export async function deleteEventos() {
  try {
    await AsyncStorage.removeItem("eventos");
    console.log("Eventos removidos com sucesso");
  } catch (error) {
    console.error("Erro ao remover os eventos do AsyncStorage");
  }
}
export const EventosProvider = (props) => {
  useEffect(() => {
    async function fetchData() {
      const loadedEventos = await loadEventos();
      if (loadedEventos.eventos.length !== 0) {
        dispatch({ type: "carregaEventos", payload: loadedEventos });
      }
    }
    fetchData();
  }, []);
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TicketsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContext;
