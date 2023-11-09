/* eslint-disable react/prop-types */
const SearchItem = (props) => {
  const { title, place, img } = props.data;
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="search-item mx-auto text-center">
        <img src={img} alt="Search Item Image" />
        <div className="text-center">
          <h3>{title}</h3>
          <span>{place}</span>
        </div>
        <button className="button">View Offers</button>
      </div>
    </div>
  );
};

export default SearchItem;
