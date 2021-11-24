// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const apiKey = "64c90b1a33264c7b90f74a36dd046d19";
  const country = "in";
  const pageSize = 20;
  // const category = "sports";

  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/">
          <News
            key="general"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="general"
          />
        </Route>
        <Route exact path="/business">
          <News
            key="business"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="business"
          />
        </Route>
        <Route exact path="/entertainment">
          <News
            key="entertainment"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="entertainment"
          />
        </Route>
        <Route exact path="/health">
          <News
            key="health"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="health"
          />
        </Route>
        <Route exact path="/science">
          <News
            key="science"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="science"
          />
        </Route>
        <Route exact path="/sports">
          <News
            key="sports"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="sports"
          />
        </Route>
        <Route exact path="/technology">
          <News
            key="technology"
            apiKey={apiKey}
            country={country}
            pageSize={pageSize}
            category="technology"
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
