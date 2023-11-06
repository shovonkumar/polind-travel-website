import bannerBg from "../../assets/images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="banner" style={bannerStyle}>
      <div className="container text-white text-center d-flex flex-column justify-content-center align-items-center h-100">
        <h1>
          Fall in love <br /> <span>with Polind</span>
        </h1>
        <p>Best way to find your perfect place in Poland</p>
        <button type="button" className="button">
          Search your place
        </button>
      </div>
    </section>
  );
};

export default Banner;
