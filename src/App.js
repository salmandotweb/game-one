import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}>
        <HomePage />
      </Route>
      <Route exact path="/app" component={AppPage}>
        <AppPage />
      </Route>
    </Switch>
  );
}

export default App;
