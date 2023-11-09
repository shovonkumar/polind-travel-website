import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Search />
      <Explore />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
