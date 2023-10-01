// assets
import cursorIcon from './assets/icons/cursor.png'

// components
import Home from "./pages/home/Home";
import PreLoader from "./pages/pre-loader/PreLoader";

function App() {
  return (
    <div style={{ cursor: `url(${cursorIcon}) 15 15, auto`}}>
      <Home />
      {/* <PreLoader /> */}
    </div>

  );
}

export default App;
