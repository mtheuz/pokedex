import React from "react";
import "./NotFound.css";
function NotFound({ searchResult, loading }) {
  return (
    <div>
      {!searchResult && !loading ? (
        <div className="wrapper-notfound">
          <p>Pokemon não encontrado!</p>
          <img src="src\assets\img\pikachu-detetive.png" alt="" />
        </div>
      ) : (
        true
      )}
    </div>
  );
}

export default NotFound;
