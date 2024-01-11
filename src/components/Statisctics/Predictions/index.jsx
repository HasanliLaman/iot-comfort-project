/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getTemperaturePrediction } from "../../../server";
import StatisticsGraph from "../StatisticsGraph";
import StylePredictions from "./style";
import Container from "../../ui/Container";

library.add(faSpinner);

const Predictions = () => {
  const { data, isLoading, isRefetching } = useQuery(
    ["temperaturePredictionData"],
    getTemperaturePrediction
  );

  return (
    <StylePredictions>
      <Container>
        {isLoading || isRefetching ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon="fa-spinner"
              spin
              style={{
                margin: "5rem 0",
                color: "#ccc",
                fontSize: "5rem",
              }}
            />
          </div>
        ) : (
          <StatisticsGraph
            labels={data.data.prediction.map((el) =>
              el.timestamp.slice(11, 16)
            )}
            name="Temperature"
            dataset={data.data.prediction.map((el) => el.data)}
            color="#6b46c1"
          />
        )}
      </Container>
    </StylePredictions>
  );
};

export default Predictions;
