import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { covidApiUrl ,vaccApiUrl} from "../config/keys";
const useCovidData = () => {
  const [covidData, setCovidData] = useState({});
  const [vaccRatio, setVaccRatio] = useState(0);

  const getData = async (country) => {
    try {
      const { data } = await axios.get(`${covidApiUrl}/${country}`);

      const { data: vaccData } = await axios.get(
        `${vaccApiUrl}/${country}?lastdays=1&fullData=true`
      );

      setCovidData(data);
      setVaccRatio(vaccData.timeline[0].total);
    } catch (err) {
      toast.error("Can't update data");
    }
  };

  const renderRecommendation = () => {
    if (vaccRatio / covidData.population > 0.5) {
      return (
        <p style={{ fontSize: "24px", color: "#082C25", fontWeight: "bold" }}> 
          {covidData.country} has a big ratio of population fully vaccinated so
          it's recommended to visit {covidData.country}
        </p>
      );
    } else
      return (
        // <p style="font-size:14px; color:#538b01; font-weight:bold; font-style:italic">
        <p style={{ fontSize: "24px", color: "#082C25", fontWeight: "bold" }}>
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
              <a className="todayCases">todayCases:{covidData.todayCases}</a>

              <span className="todayDeaths">
                todayDeaths:{covidData.todayDeaths}{" "}
              </span>

              <span className="todayRecovered">
                todayRecovered:{covidData.todayRecovered}
              </span>

              <span className="activeCases">active:{covidData.active}</span>
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
