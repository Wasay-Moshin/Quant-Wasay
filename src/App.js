import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./Component/Layouts/Header";
import Footer from "./Component/Layouts/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  return (
    <div>
      <Header/>
      <Home />
      <Footer/>
    </div>
  );
}
export default App;
