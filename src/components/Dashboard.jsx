import React, { useEffect } from "react";
import useCountrySearch from "../hooks/useCountrySearch.js";
import useCovidData from "../hooks/useCovidData.js";
import renderSearchInput from "./common/alphabetSearch";
function Dashboard() {
  const {
    getCountries,
    setCountry,
    toggleDisplay,
    onChangeSearch,
    options,
    search,
    display,
  } = useCountrySearch();

  const { getData, renderCard } = useCovidData();

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <React.Fragment>
      <div className="content-search">
        {renderSearchInput(
          () => getData(search),
          onChangeSearch,
          search,
          toggleDisplay
        )}
      </div>

      <div className="content-auto-complete ">
        {display && (
          <div>
            {options
              .filter(
                (name) => name.toLowerCase().indexOf(search.toLowerCase()) > -1
              )
              .map((name, i) => {
                return (
                  <div key={i} onClick={() => setCountry(name)}>
                    <span>{name}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {renderCard()}
    </React.Fragment>
  );
}

export default Dashboard;
