import exploreImg from "../../assets/images/explore.jpg";
import "./Explore.css";

const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <h2>Explore city</h2>
        <div className="row gx-5 gy-5">
          <div className="col-md-6">
            <div className="text">
              <h3>Sandomierz</h3>
              <p className="mb-4 mb-lg-5">
                Sandomierz is one of the oldest and historically most
                significant cities in Poland. Archeological finds around the
                city indicate that humans have inhabited the area since
                neolithic times. The city came into existence in the early
                Middle Ages, taking advantage of an excellent location at the
                junction of Vistula and San rivers, and on the path of important
                trade routes.
              </p>
              <p>
                Sandomierz is one of the oldest and historically most
                significant cities in Poland. Archeological finds around the
                city indicate that humans have inhabited the area since
                neolithic times. The city came into existence in the early
                Middle Ages, taking advantage of an excellent loc=ation at the
                junction of Vistula and San rivers, and on the path of important
                trade routes.
              </p>
              <button className="button mt-4">Check Offers</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-container mx-auto">
              <img src={exploreImg} alt="Explore Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
