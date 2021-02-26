import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import React, { useState } from "react";

function App(props) { 
  const [searchBar, setSearchResult] = useState("")

  function Change(event) {
    setSearchResult(event.target.value)
  }

  return (
    <div>
      <Header />
      <Search onChange={Change}/>
      <Results results={props.results} search={searchBar}/>
    </div>
  );
}

export default App;
