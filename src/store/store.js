import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  userLoginInfo: {}
};

const customReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_EVENT":
      return {
        ...state,
        userLoginInfo: { isLogined: true, userData: action.payload }
      };
    case "USER_LOGOUT_EVENT":
      return { ...state, userLoginInfo: { isLogined: false } };

    default:
      console.log("Reducer default state");
      return state;
  }
};

const store = configureStore({ reducer: customReducer });

export default store;
