import React from "react";
import Analytics from "../../components/AnalyticsDiv/Analytics";
import MarketNav from "../../components/MarketNav/MarketNav";
import RecentlyListed from "../../sections/RecentlyListed/RecentlyListed";
import RecentlySold from "../../sections/RecentlySold/RecentlySold";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div style={{ height: "5rem" }}>
        <MarketNav />
      </div>
      <Analytics />
      <div className="listed-sections">
        <RecentlyListed />
        <RecentlySold />
      </div>
    </div>
  );
}
