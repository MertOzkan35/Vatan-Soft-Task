import React, { useState } from "react";
import { useDispatch } from "react-redux";
const GetApiKey = () => {
  const [apiKey, setApiKey] = useState("");
  const dispatch = useDispatch();
  const setKeytoLocalStorage = () => {
    localStorage.setItem("apiKey", apiKey);
    dispatch({
      type: "SET_API_KEY",
      payload: apiKey,
    });
  };
  return (
    <div className=" w-full h-[1080px]">
      <div className="flex  flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row justify-center items-center gap-4 w-full h-[12rem] bg-[#14181c]">
        <input
          className="w-[16rem] h-9 pl-3 rounded-2xl border-2 "
          placeholder="Enter Your Api Key Below"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <button
          className=" flex justify-center items-center w-[6rem] h-9 pb-1 rounded-2xl font-bold 
          border text-white hover:border-2 "
          onClick={() => setKeytoLocalStorage()}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default GetApiKey;
