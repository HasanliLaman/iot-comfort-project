import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getAbout } from "../../../server";
import AboutEdit from "../AboutEdit";
import StyleAboutTable from "./style";
import "react-medium-image-zoom/dist/styles.css";

library.add(faSpinner);

const AboutTable = () => {
  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["aboutData"],
    getAbout
  );

  return (
    <StyleAboutTable>
      <header>
        <h2>About Building</h2>
        {data && <AboutEdit refetch={refetch} data={data.data} />}
      </header>
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
        <div className="tables">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Who are we?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.data.whoAreWe}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Our mission</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.data.ourMision}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </StyleAboutTable>
  );
};

export default AboutTable;
