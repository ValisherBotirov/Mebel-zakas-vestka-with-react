import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./components/main.scss";
import Product from "./components/Product/Product";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Product />
      <About />
      <Footer />
    </>
  );
}

export default App;
