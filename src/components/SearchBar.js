import React, { useState } from "react";

const SearchBar = props => {
  const [term, setTerm] = useState("");

  const onChangeHandler = event => {
    setTerm(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log("searchBar-submitHandler");
    props.submitHandler(term);
  };
  return (
    <form onSubmit={submitHandler} className="ui form">
      <div className="field">
        <label>Search Wikipedia</label>
        <input
          type="text"
          value={term}
          onChange={onChangeHandler}
          placeholder="Search Wikipedia
        "
        />
      </div>
    </form>
  );
};

export default SearchBar;
