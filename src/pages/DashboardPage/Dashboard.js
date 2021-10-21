import React from "react";
import Analytics from "../../components/AnalyticsDiv/Analytics";
import MarketNav from "../../components/MarketNav/MarketNav";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div style={{ height: "5rem" }}>
        <MarketNav />
      </div>
      <Analytics />
    </div>
  );
}
