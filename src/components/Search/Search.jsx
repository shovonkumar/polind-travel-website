import { useState } from "react";
import "./Search.css";
import { SearchData } from "./SearchData";
import SearchItem from "./SearchItem";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const [DisplayItem, setDisplayItem] = useState(SearchData);
  const [active, setActive] = useState(null);

  // onchange
  const handleInputChange = (e) => {
    setSearchVal(e.target.value);
    const filteredItems = SearchData.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayItem(filteredItems);
  };

  // onsubmit
  const handleSearch = (e) => {
    e.preventDefault();
    const filteredItems = SearchData.filter((item) =>
      item.title.toLowerCase().includes(searchVal.toLowerCase())
    );
    setDisplayItem(filteredItems);
  };

  // filter button
  const filterItem = (cat) => {
    if (active === cat) {
      setDisplayItem(SearchData);
      setActive(null);
    } else {
      const updatedItems = SearchData.filter((item) => {
        return item.category === cat;
      });
      setDisplayItem(updatedItems);
      setActive(cat);
    }
  };

  return (
    <section className="search">
      <div className="container">
        <h2 className="text-center">Where you want to go?</h2>
        {/* Search Bar */}
        <form className="search-bar mx-auto" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search Places..."
            aria-label="Search"
            value={searchVal}
            onChange={handleInputChange}
          />
          <button className="search-btn" type="submit" title="Search Place">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        {/* Search Filter */}
        <div className="search-filter d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 mx-auto">
          <div className="left d-flex gap-4">
            <button
              className={`search-filter-btn ${
                active === "journey" ? "active" : ""
              }`}
              onClick={() => filterItem("journey")}
            >
              Journey
            </button>
            <button
              className={`search-filter-btn ${
                active === "traveler" ? "active" : ""
              }`}
              onClick={() => filterItem("traveler")}
            >
              Travelers
            </button>
            <button
              className={`search-filter-btn ${
                active === "guide" ? "active" : ""
              }`}
              onClick={() => filterItem("guide")}
            >
              Guide
            </button>
          </div>
          <div className="right d-flex gap-4">
            <button className="search-filter-btn">Mazury</button>
            <button className="search-filter-btn">Cracow</button>
            <button className="search-filter-btn">Zakopane</button>
          </div>
        </div>
        {/* Search Item */}
        <div className="row gy-5 gx-5 mt-4">
          {DisplayItem.length > 0 ? (
            <>
              {DisplayItem.map((item) => {
                return <SearchItem key={item.id} data={item} />;
              })}
            </>
          ) : (
            <>
              <h3 className="noplace text-center">No Place Matched!</h3>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
