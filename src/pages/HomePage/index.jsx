import { useEffect, useState } from "react";
import FilterFeatures from "../../components/FilterFeatures";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RoomContainer from "../../components/RoomContainer";
import StyleHomePage from "./style";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ComfortPie";
  }, []);

  const [filterValues, setFilterValues] = useState({
    temperature: [0, 50],
    humidity: [0, 100],
    light: [0, 100],
    sound: [0, 100],
  });

  const [searchValue, setSearchValue] = useState("");

  const [sortValue, setSortValue] = useState([9, 9, 9, 9]);
  console.log(sortValue);
  return (
    <StyleHomePage>
      <Navbar />
      <FilterFeatures
        filterValues={filterValues}
        setFilterValues={setFilterValues}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSortValue={setSortValue}
        sortValue={sortValue}
      />
      <RoomContainer
        sortValue={sortValue}
        searchValue={searchValue}
        filterValues={filterValues}
      />
      <Footer />
    </StyleHomePage>
  );
};

export default HomePage;
