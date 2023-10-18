import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
