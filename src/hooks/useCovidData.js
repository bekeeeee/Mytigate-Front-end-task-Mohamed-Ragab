import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { covidApiUrl, vaccApiUrl } from "../config/keys";

const useCovidData = () => {
  const [covidData, setCovidData] = useState({}); // state for covid data
  const [vaccRatio, setVaccRatio] = useState(0); // state for vacc data

  const getData = async (country) => {
    try {
      const { data } = await axios.get(`${covidApiUrl}/${country}`); // get all covid details about country

      const { data: vaccData } = await axios.get(
        `${vaccApiUrl}/${country}?lastdays=1&fullData=true`
      );

      setCovidData(data); // update covid data
      setVaccRatio(vaccData.timeline[0].total); // update vacc data
    } catch (err) {
      toast.error("Can't update data"); // display err notification
    }
  };

  const renderRecommendation = () => {
    if (vaccRatio / covidData.population > 0.5) {
      return (
        <p className="recommendationPar">
          {covidData.country} has a big ratio of population fully vaccinated so
          it's recommended to visit {covidData.country}
        </p>
      );
    } else
      return (
        <p className="recommendationPar">
          {covidData.country} has a low ratio of population fully vaccinated so
          it's not recommended to visit {covidData.country}.
        </p>
      );
  };

  const renderCard = () => {
    if (Object.keys(covidData).length > 0)
      return (
        <div className="content-covid-deatails">
          <div className="card-detail">
            <img
              className="country-img"
              src={
                covidData.countryInfo.flag
                  ? covidData.countryInfo.flag
                  : process.env.PUBLIC_URL + "/not-found.png"
              }
              alt=""
            />
            <div className="detailsCases">
              <span className="todayCases">
                Today Cases: {covidData.todayCases}
              </span>

              <span className="todayDeaths">
                Today Deaths: {covidData.todayDeaths}
              </span>

              <span className="todayRecovered">
                Recovered: {covidData.todayRecovered}
              </span>

              <span className="activeCases">Active: {covidData.active}</span>
            </div>
          </div>
          <div className="recommendation">{renderRecommendation()}</div>
        </div>
      );
    else return null;
  };

  return {
    getData,
    renderCard,
    covidData,
  };
};

export default useCovidData;
