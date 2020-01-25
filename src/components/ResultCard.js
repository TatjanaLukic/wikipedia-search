import React from "react";

const ResultCard = props => {
  return (
    <div className="eight wide column">
      <div className="column">
        <div className="ui raised segment">
          <h2>{props.item.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.item.snippet
            }}
          ></p>

          <a href={"http://en.wikipedia.org/?curid=" + props.item.pageid}>
            read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
