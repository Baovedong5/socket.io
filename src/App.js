import "./App.scss";
import useRouteElement from "./router";

function App() {
  const route = useRouteElement();

  return <div className="App">{route}</div>;
}

export default App;
