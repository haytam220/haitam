import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Program from "./component/Program";
import Membership from "./component/Membership";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";


function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Program />
          <Membership />
          <Newsletter />
        </main>
        <Footer />
      </div>
  );
}

export default App;
