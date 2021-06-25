import React from "react";
import UseCountrySearch from "../hooks/useCountrySearch.jsx";
import useCovidData from "../hooks/useCovidData.js";
import renderSearchInput from "./common/alphabetSearch";
function Dashboard() {
  const { renderAutoCompleteDiv, toggleDisplay, onChangeSearch, search } =
    UseCountrySearch();

  const { getData, renderCard } = useCovidData();

  return (
    <React.Fragment>
      {renderSearchInput(
        () => getData(search),
        onChangeSearch,
        search,
        toggleDisplay
      )}
      {renderAutoCompleteDiv()} 
      {renderCard()} 
    </React.Fragment>
  );
  
}

export default Dashboard;
