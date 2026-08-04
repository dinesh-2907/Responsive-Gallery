import "./App.css";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="app">
      <h1>🌍 Nature Image Gallery</h1>
      <p className="subtitle">
        {" "}
        Beautiful moments captured from around the world.{" "}
      </p>
      <ImageGallery />
    </div>
  );
}

export default App;
