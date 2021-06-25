import  { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useCountrySearch = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const getCountries = async () => {
    try {
      const counteries = [];

      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      data.map((country) => counteries.push(country.name));

      setOptions(counteries);
    } catch (err) {
      toast.error("Can't update countries");
    }
  };

  const setCountry = (country) => {
    setSearch(country);
    setDisplay(false);
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return {
    getCountries,
    setCountry,
    toggleDisplay,
    onChangeSearch,
    options,
    search,
    display,
  };
};

export default useCountrySearch;
