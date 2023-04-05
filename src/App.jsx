import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss"


function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Main />
      </div>
        <Footer />
    </div>
  );
}

export default App;
