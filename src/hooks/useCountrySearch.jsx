import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { countriesApiUrl } from "../config/keys";

const useCountrySearch = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  /*
    useEffect(() => {
    console.log(" ")
    getCountries();
  }, []);
  */
  useEffect(() => {
    const getCountries = async () => {
      try {
        const counteries = [];

        const { data } = await axios.get(countriesApiUrl);
        data.map((country) => counteries.push(country.name));

        setOptions(counteries);
      } catch (err) {
        toast.error("Can't update countries");
      }
    };
    getCountries();
  }, []);

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

  const renderAutoCompleteDiv = () => {
    return (
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
    );
  };

  return {
    setCountry,
    toggleDisplay,
    onChangeSearch,
    renderAutoCompleteDiv,
    options,
    search,
    display,
  };
};

export default useCountrySearch;
