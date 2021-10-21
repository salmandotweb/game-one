import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import MarketPage from "./pages/MarketPage/MarketPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}>
        <HomePage />
      </Route>
      <Route exact path="/marketplace" component={MarketPage}>
        <MarketPage />
      </Route>
      <Route exact path="/app" component={AppPage}>
        <AppPage />
      </Route>
      <Route exact path="/blog" component={BlogPage}>
        <BlogPage />
      </Route>
    </Switch>
  );
}

export default App;
