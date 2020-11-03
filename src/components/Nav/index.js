import React, { useContext } from "react"; 
import DataAreaContext from "../../utils/DataAreaContext";


function Nav() {
  const context = useContext(DataAreaContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">Search</span>
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">
        <div className="search-area col-4">
        <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
          </div>
          <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;