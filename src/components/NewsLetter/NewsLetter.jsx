import newsBg from "../../assets/images/news.jpg";
import "./NewsLetter.css";

const NewsLetter = () => {
  const bgStyle = {
    backgroundImage: `url(${newsBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="news" style={bgStyle}>
      <div className="container text-center text-white">
        <h2>Enjoy your journey</h2>
        <button className="button">Sign Up</button>
        <p>
          You can also sign up on our <a href="#">newsletter</a>
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
