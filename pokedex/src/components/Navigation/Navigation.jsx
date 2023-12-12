import React from "react";
import "./Navigation.css";
function Navigation({ page, numberOfPages, onPreviousClick, onNextClick }) {
  return (
    <div className="navegacao">
      <button
        type="button"
        className="botaoNavegacao"
        onClick={onPreviousClick}
      >
        ⬅️
      </button>
      <div>
        {page} de {numberOfPages}
      </div>
      <button type="button" className="botaoNavegacao" onClick={onNextClick}>
        ➡️
      </button>
    </div>
  );
}

export default Navigation;
