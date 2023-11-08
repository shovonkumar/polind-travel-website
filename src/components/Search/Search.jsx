import { useState } from "react";
import "./Search.css";
import { SearchData } from "./SearchData";
import SearchItem from "./SearchItem";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search">
      <div className="container">
        <h2 className="text-center">Where you want to go?</h2>
        {/* Search Bar */}
        <form className="search-bar mx-auto">
          <input
            type="text"
            placeholder="Search Places..."
            aria-label="Search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className="search-btn"
            type="submit"
            title="Search Place"
            onSubmit={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        {/* Search Filter */}
        <div className="search-filter d-flex justify-content-between mx-auto">
          <div className="left d-flex gap-4">
            <button className="search-filter-btn">Journey</button>
            <button className="search-filter-btn">Travelers</button>
            <button className="search-filter-btn">Guide</button>
          </div>
          <div className="right d-flex gap-4">
            <button className="search-filter-btn">Mazury</button>
            <button className="search-filter-btn">Cracow</button>
            <button className="search-filter-btn">Zakopane</button>
          </div>
        </div>
        {/* Search Item */}
        <div className="row gy-5 gx-5 mt-4">
          {SearchData.map((item) => {
            return <SearchItem key={item.id} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Search;
