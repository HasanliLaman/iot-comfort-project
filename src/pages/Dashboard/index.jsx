import { useEffect } from "react";
import DashboardCharts from "../../components/DashboardCharts";
import StyleDashboard from "./style";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie | Dashboard";
  }, []);

  return (
    <StyleDashboard>
      <DashboardCharts />
    </StyleDashboard>
  );
};

export default Dashboard;
