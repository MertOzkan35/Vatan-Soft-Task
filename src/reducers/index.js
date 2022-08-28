const INITIAL_STATE = {
  isLoading: true,
  weatherData: [],
  message: "",
};

const INITIAL_STATE2 = {
  key: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, weatherData: action.payload, isLoading: false };
    case "SET_MESSAGE":
      return {
        message: action.payload,
        isLoading: false,
        weatherData: [],
      };
    default:
      return state;
  }
};

export const keyValue = (state2 = INITIAL_STATE2, action) => {
  switch (action.type) {
    case "SET_API_KEY":
      return { key: action.payload };
    default:
      return state2;
  }
};
