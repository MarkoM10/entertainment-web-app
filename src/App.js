import "./styles/App.scss";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="appWrapper">
      <NavigationBar />
      <Content />
    </div>
  );
}

export default App;
