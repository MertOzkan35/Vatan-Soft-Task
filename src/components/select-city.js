import React, { useState } from "react";
import { getCountries } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const SelectCity = () => {
  const [city, setCity] = useState("istanbul");
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.reducer.weatherData);
  const errorMessage = useSelector((state) => state.reducer.message);
  const apiKey = useSelector((state) => state.keyValue.key);
  const searchWeather = () => {
    dispatch(getCountries(apiKey, city));
  };
  //console.log(weatherData);
  return (
    <div className=" flex flex-col   h-[1080px]  ">
      <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row 2xl:flex-row 	  justify-center items-center gap-4 w-full h-[12rem] bg-[#14181c]">
        <input
          onChange={(e) => setCity(e.target.value)}
          className="w-[16rem] h-9 pl-3 rounded-2xl border-2 "
          placeholder="Enter City Name"
        ></input>
        <button
          className=" flex justify-center items-center w-[12rem]  h-9 pb-1 rounded-2xl font-bold 
        border hover:border-2 text-white bg-[#2c3440] "
          onClick={() => searchWeather()}
        >
          Search City
        </button>
      </div>
      <div className="w-full h-[35rem] flex justify-center items-start mt-24 ">
        {weatherData !== [] && Object.keys(weatherData).length > 0 ? (
          <div>
            <div>
              <p className=" text-[40px] text-center text-white font-semibold">
                {weatherData.location.name}
              </p>

              <p className=" text-[90px] text-white font-semibold">
                {weatherData.current.temp_c}°C
              </p>
            </div>
            <div className=" flex flex-row justify-center items-center w-full h-24 mt-11 bg-slate-200 bg-opacity-20 rounded-2xl text-white font-semibold gap-8 text-center">
              <div className="flex flex-col ">
                <p>{weatherData.current.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div>
                <p>{weatherData.current.wind_kph} kph</p>
                <p>Winds</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-red-500 font-bold text-2xl">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default SelectCity;
