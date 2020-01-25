import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import wikipedia from "../api/wikipedia";

const App = () => {
  const [result, setResult] = useState([]);

  const submitHandler = async term => {
    const response = await wikipedia.get("/w/api.php", {
      params: {
        action: "query",
        origin: "*",
        format: "json",
        list: "search",
        srsearch: term
      }
    });
    setResult(response.data.query.search);
  };

  return (
    <div className="ui container" style={{ marginTop: "100px" }}>
      <SearchBar submitHandler={submitHandler} />
      <ResultList items={result} />
    </div>
  );
};

export default App;
