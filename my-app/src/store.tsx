import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: 0,
    avatar_url: "",
    name: "",
    email: "",
    bio: "",
    followers: 0,
    following: 0,
  },
  repository: [],
  searchUser: {
    id: 0,
    avatar_url: "",
    name: "",
    email: "",
    bio: "",
  },
  searchRepository: [],
  // Index para usar o Objeto que é o Repositório.
  detailsRepository: {},
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_REPOSITORY":
      return {
        ...state,
        repository: action.payload,
      };
    case "SET_SEARCHUSER":
      return {
        ...state,
        searchUser: action.payload,
      };
    case "SET_SEARCHREPOSITORY":
      return {
        ...state,
        searchRepository: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: initialState.user,
        repository: initialState.repository,
        searchUser: initialState.searchUser,
        searchRepository: initialState.searchRepository,
        detailsRepository: initialState.detailsRepository,
      };
    case "SET_DETAILSREPOSITORY":
      return {
        ...state,
        detailsRepository: action.payload,
      };
    default:
      return state;
  }
}


const store = configureStore({
  reducer: reducer,
});

export default store;