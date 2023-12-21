import GoldCalculator from "./components/calculator/GoldCalculator";
import "./App.css";
import "./scss/styles.scss";

function App() {
  return (
    <>
      <div
        className="container-md d-flex flex-column"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1 className="p-3 text-center" style={{ width: "600px" }}>
          World of Warcraft
        </h1>
        <h2 style={{ color: "white" }}>Gold Calculator</h2>
        <GoldCalculator />
      </div>
    </>
  );
}

export default App;
