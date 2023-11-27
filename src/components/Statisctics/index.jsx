import StatisticsGraph from "./StatisticsGraph";
import StyleStatistics from "./style";
import Container from "../ui/Container";

const Statistics = () => {
  return (
    <StyleStatistics>
      <Container>
        <StatisticsGraph
          name="Temperature"
          dataset={[...Array(48).keys()].map(() => Math.random() * 6)}
          color="#F5BA41"
        />
        <StatisticsGraph
          name="Humidity"
          dataset={[...Array(48).keys()].map(() => Math.random() * 6)}
          color="#1B85F3"
        />
        <StatisticsGraph
          name="Light Intensity"
          dataset={[...Array(48).keys()].map(() => Math.random() * 6)}
          color="#FC5A5A"
        />
        <StatisticsGraph
          name="Sound"
          dataset={[...Array(48).keys()].map(() => Math.random() * 6)}
          color="#82C43C"
        />
      </Container>
    </StyleStatistics>
  );
};

export default Statistics;
