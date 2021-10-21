import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import Dashboard from "./pages/DashboardPage/Dashboard";

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
      <Route exact path="/dashboard" component={Dashboard}>
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default App;
