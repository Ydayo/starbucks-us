import "./App.css";
import BucksFooter from "./components/BucksFooter";
import BucksHeader from "./components/BucksHeader";
import BucksMain from "./components/BucksMain";

function App() {
  return (
    <>
      <div className="App">
        <BucksHeader />
        <BucksMain />
        <BucksFooter />
      </div>
    </>
  );
}

export default App;
