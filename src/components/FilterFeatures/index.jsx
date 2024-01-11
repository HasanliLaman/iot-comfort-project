/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Container from "../ui/Container";
import StyleFilterFeatures from "./style";
import iconSort from "../../assets/images/icon-sort.svg";
import iconFilter from "../../assets/images/icon-filter.svg";
import iconSearch from "../../assets/images/icon-search.svg";
import FilterSidebar from "./FilterSidebar";
import { useState } from "react";
import Overlay from "../ui/Overlay";
import SortingSidebar from "./SortingSidebar";

const FilterFeatures = ({
  setFilterValues,
  filterValues,
  setSearchValue,
  setSortValue,
  sortValue,
}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSorting, setOpenSorting] = useState(false);
  const [timerId, setTimerId] = useState();
  const [inputValue, setInputValue] = useState("");

  const onChangeSearch = (e) => {
    clearTimeout(timerId);
    setInputValue(e.target.value);
    const timer = setTimeout(function () {
      setSearchValue(e.target.value);
    }, 700);
    setTimerId(timer);
  };

  return (
    <>
      {(openFilter || openSorting) && (
        <Overlay
          onClick={() => {
            setOpenFilter(false);
            setOpenSorting(false);
          }}
        />
      )}
      <FilterSidebar
        isOpen={openFilter}
        closeFilter={() => setOpenFilter(false)}
        setFilterValues={setFilterValues}
        filterValues={filterValues}
      />
      <SortingSidebar
        isOpen={openSorting}
        closeSorting={() => setOpenSorting(false)}
        setSortValue={setSortValue}
        sortValue={sortValue}
      />
      <StyleFilterFeatures>
        <Container>
          <div className="buttons">
            <button onClick={() => setOpenFilter(true)}>
              <img alt="filter" src={iconFilter} />
            </button>
            <button onClick={() => setOpenSorting(true)}>
              <img alt="sort" src={iconSort} />
            </button>
          </div>
          <div className="search">
            <input
              value={inputValue}
              onChange={(e) => onChangeSearch(e)}
              placeholder="Room number"
            />
            <button>
              <img alt="search" src={iconSearch} />
            </button>
          </div>
        </Container>
      </StyleFilterFeatures>
    </>
  );
};

export default FilterFeatures;
