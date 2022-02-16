import React from "react";

const Navbar = ({ setQuery }) => {
  const changeQuery = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value);
  };

  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" onSubmit={changeQuery}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
