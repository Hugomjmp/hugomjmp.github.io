import './assets/styles/App.css';
import Header from './components/header/header.component';
import Footer from "./components/footer/footer.components";
import Body from "./components/body/body.components";

function App() {
  return (
    <div className="container">
        <div className="row">
            <Header></Header>
        </div>
        <div className="row">
            <Body></Body>
        </div>
        <div className="row">
            <Footer></Footer>
        </div>
    </div>


  );
}

export default App;
