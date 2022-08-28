import axios from "axios";

export const getCountries = (apiKey, city) => async (dispatch) => {
  await axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`,
      { headers: { accept: "application/json" } }
    )
    .then((response) => dispatch({ type: "SET_CITY", payload: response.data }))
    .catch((error) =>
      dispatch({
        type: "SET_MESSAGE",
        payload: error.response.data.error.message,
      })
    );
};
