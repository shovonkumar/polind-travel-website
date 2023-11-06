/* eslint-disable react/prop-types */
const CategoryItem = (props) => {
  const { title, subtitle, image } = props.item;
  const bgStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="category-item text-white d-flex flex-column justify-content-center align-items-center position-relative"
      style={bgStyle}
    >
      <div className="text-center z-3">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <button className="button d-none z-3">View Offers</button>
    </div>
  );
};

export default CategoryItem;
