import React, { useEffect, useState } from "react";
import "./App.css";
import GetApiKey from "./components/get-api-key";
import SelectCity from "./components/select-city";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const key = useSelector((state2) => state2.keyValue.key);
  const dispatch = useDispatch();
  const newKey = localStorage.getItem("apiKey");
  useEffect(() => {
    if (newKey) {
      dispatch({
        type: "SET_API_KEY",
        payload: newKey,
      });
    }
  }, [newKey]);

  function clearStorage() {
    let session = sessionStorage.getItem("register");
    if (session == null) {
      localStorage.removeItem("apiKey");
    }
    sessionStorage.setItem("register", 1);
    console.log(session);
  }
  window.addEventListener("load", clearStorage);

  return (
    <div className="bg-[#1a1f25]">
      {key !== null ? <SelectCity /> : <GetApiKey />}
    </div>
  );
}

export default App;
