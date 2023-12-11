import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <nav>
        <img
          className="pokeapi-img"
          alt="PokéAPI"
          src="src\assets\img\logo.png"
        ></img>
        <div className="container-info">
          <a href="/">Home</a>
          <a target="_blank" href="https://github.com/mtheuz">
            <img
              className="avatar"
              alt=""
              src="https://avatars.githubusercontent.com/u/77650601?v=4"
            ></img>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
