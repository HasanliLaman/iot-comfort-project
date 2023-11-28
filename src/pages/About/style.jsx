import styled from "styled-components";

const StyleAbout = styled.section`
  background: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  footer {
    flex: 1;
    display: flex;
    align-items: end;

    & > div {
      width: 100%;
    }
  }
`;

export default StyleAbout;
