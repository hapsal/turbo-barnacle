import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <main>
        <Navigation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
