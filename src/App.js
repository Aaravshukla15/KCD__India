import Navbar from "./components/Navbar/Navbar";
import Head from "./components/Head/Head.jsx";
import Details from "./components/Details/Details";
import NearU from "./components/Near You/NearU";
import Explore from "./components/Explore/Explore";
import Attract from "./components/Attraction/Attract";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Details />
      <NearU />
      <Attract />
      <Explore />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
