import AboutEdit from "../AboutEdit";
import StyleAboutTable from "./style";
import "react-medium-image-zoom/dist/styles.css";

const AboutTable = () => {
  return (
    <StyleAboutTable>
      <header>
        <h2>About Building</h2>
        <AboutEdit />
      </header>
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
                <td>
                  The AIP-PRIMECA Lorraine cluster is one of the 10 regional
                  members of GIS S-mart. It is a joint service of the University
                  of Lorraine. The center is a regional center of educational
                  resources of an industrial nature, used by regional training
                  courses (initial or continuing) around the theme of the
                  industry of the future. This resource center is used as
                  experimental support for initial and continuing training in
                  the field of manufacturing and integrated design. The center
                  aims to promote the implementation of industrial manipulations
                  for in-depth teaching by discipline or interdisciplinary, from
                  BAC+2 to BAC+5.
                </td>
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
                <td>
                  AIP-PRIMECA Lorraine is French academic community for the
                  industry of the future which creates a fertile environment by
                  placing engineering at the service of society. It brings
                  together an open academic community to build scientific,
                  technological and societal change on a local and national
                  scale. The center provides educational resources (platforms
                  and software), of an industrial nature, shared for teaching.
                  These resources are accessible in person or remotely. It also
                  manages the sharing of business software through the Lorraine
                  Network of Digital Mechanics Resources which brings together
                  21 components or laboratories.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyleAboutTable>
  );
};

export default AboutTable;
