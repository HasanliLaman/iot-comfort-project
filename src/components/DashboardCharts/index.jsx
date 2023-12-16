import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  BarElement,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import StyleDashboardCharts from "./style";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Filler
);

const dataDoughnut = {
  labels: ["Mobile", "Desktop", "Tablet"],
  datasets: [
    {
      label: "Percentage (%)",
      data: [25, 65, 10],
      backgroundColor: ["#3e8ce67c", "#2a78d7c1", "#68aaf139"],
      borderColor: ["rgb(255,255,255)", "rgb(255,255,255)", "rgb(255,255,255)"],
      borderWidth: 2,
    },
  ],
};

const dataLine = {
  labels: ["27 Nov", "30 Nov", "3 Dec", "7 Dec", "10 Dec"],
  datasets: [
    {
      fill: true,
      data: [...Array(5).keys()].map(() =>
        Math.floor(Math.random() * (2000 - 500 + 1) + 500)
      ),
      borderColor: "#1b83f3d4",
      backgroundColor: "#1b83f339",
    },
  ],
};

const dataBar = {
  labels: ["Social", "Display", "Search", "Paid search", "Other"],
  datasets: [
    {
      label: "Dataset 2",
      data: [...Array(5).keys()].map(() =>
        Math.floor(Math.random() * (1500 - 1 + 1) + 1)
      ),
      backgroundColor: "#1674d886",
    },
  ],
};

const dataBarHorizontal = {
  labels: [
    "Laxou",
    "Vandoeuvre",
    "Ludres",
    "Nancy",
    "Maxeville",
    "Fleville",
    "Jarville",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [...Array(7).keys()].map(() =>
        Math.floor(Math.random() * (500 - 1 + 1) + 1)
      ),
      backgroundColor: "#1674d8bb",
      borderColor: "#1674d8bb",
      borderWidth: 1,
    },
  ],
};

const dataLineArea = {
  labels: ["27 Nov", "30 Nov", "3 Dec", "7 Dec", "10 Dec"],
  datasets: [
    {
      data: [...Array(5).keys()].map(() =>
        Math.floor(Math.random() * (500 - 100 + 1) + 100)
      ),
      borderWidth: 1,
      borderColor: "#004894ba",
      backgroundColor: "#1674d836",
    },
  ],
};

const DashboardCharts = () => {
  return (
    <StyleDashboardCharts>
      <header>
        <h2>Main Dashboard</h2>
      </header>
      <div className="card-container">
        <div>
          <div className="card">
            <h3>Sessions</h3>
            <Line
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                  },
                },
              }}
              data={dataLine}
            />
          </div>
          <div className="card">
            <h3>
              Traffic channel
              <Bar
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: false,
                    },
                  },
                }}
                data={dataBar}
              />
            </h3>
          </div>
        </div>
        <div>
          <div className="card">
            <h3>Avg. visit duration</h3>
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                  },
                },
              }}
              data={dataLineArea}
            />
          </div>
          <div className="card">
            <h3> Sessions by regions</h3>
            <Bar
              options={{
                indexAxis: "y",
                elements: {
                  bar: {
                    borderWidth: 2,
                  },
                },
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: false,
                  },
                },
              }}
              data={dataBarHorizontal}
            />
          </div>
          <div className="card doughnut">
            <h3>Sessions by device</h3>
            <Doughnut options={{ cutout: "65%" }} data={dataDoughnut} />
          </div>
        </div>
      </div>
    </StyleDashboardCharts>
  );
};

export default DashboardCharts;
