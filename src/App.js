import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";

function App(props) {
  return (
    <div>
      <Header />
      <Search />
      <Results results={props.results} />
    </div>
  );
}

export default App;
