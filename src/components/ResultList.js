import React from "react";
import ResultCard from "./ResultCard";

const styleList = {
  marginTop: "60px"
};

const ResultList = props => {
  const resultCards = props.items.map(item => {
    return <ResultCard key={item.pageid} item={item} />;
  });

  return (
    <div className="ui grid" style={styleList}>
      {resultCards}
    </div>
  );
};

export default ResultList;
