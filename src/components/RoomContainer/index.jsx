/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getRooms } from "../../server";
import Container from "../ui/Container";
import RoomCard from "./RoomCard";
import StyleRoomContainer from "./style";
import { getDataWithScores } from "../../utils/rankalgorithm";

library.add(faSpinner);

const RoomContainer = ({ filterValues, searchValue, sortValue }) => {
  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["roomsData"],
    () => getRooms({ filter: filterValues, search: searchValue })
  );

  useEffect(() => {
    refetch();
  }, [
    filterValues.temperature,
    filterValues.sound,
    filterValues.light,
    filterValues.humidity,
    searchValue,
    refetch,
  ]);

  return (
    <StyleRoomContainer>
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
      ) : data.data.length ? (
        <Container>
          {getDataWithScores(data.data, sortValue).map((room) => (
            <RoomCard room={room} key={room._id} />
          ))}
        </Container>
      ) : (
        <p className="no-result">Nothing to show</p>
      )}
    </StyleRoomContainer>
  );
};

export default RoomContainer;
