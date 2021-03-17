import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SearchResults from "./pages/SearchResults";



// changed the switch rout from books to search posts
{/* <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id"></Route> */}
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <Route exact path="/">
            <Home /> */
          /* </Route> */}
          <Route exact path="/">
            <SearchResults />
          </Route>
          <Route exact path="/posts/:id">
            <Detail />
          </Route>
          <Route exact path="/addToPosts">
            <Posts />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
