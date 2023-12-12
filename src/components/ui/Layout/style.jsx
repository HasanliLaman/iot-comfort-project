import styled from "styled-components";

const StyleAdminLayout = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;

  @media (min-width: 768px) {
    margin-left: 280px;
  }
`;

export default StyleAdminLayout;
