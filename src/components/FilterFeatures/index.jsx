import Container from "../ui/Container";
import StyleFilterFeatures from "./style";
import iconSort from "../../assets/images/icon-sort.svg";
import iconFilter from "../../assets/images/icon-filter.svg";
import iconSearch from "../../assets/images/icon-search.svg";
import FilterSidebar from "./FilterSidebar";
import { useState } from "react";
import Overlay from "../ui/Overlay";
import SortingSidebar from "./SortingSidebar";

const FilterFeatures = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openSorting, setOpenSorting] = useState(false);

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
      />
      <SortingSidebar
        isOpen={openSorting}
        closeSorting={() => setOpenSorting(false)}
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
            <input placeholder="Search" />
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
