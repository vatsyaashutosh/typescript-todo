import styled from "styled-components";

export const AppContianer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #2f74c0;
  font-family: "Combo";
  font-weight: bold;
  align-items: center;
`;
export const AppHeading = styled.span`
  text-transform: uppercase;
  font-size: 40px;
  margin: 30px 0;
  color: white;
  z-index: 1;
  text-align: center;
  @media (max-width: 800px) {
    margin: 15px 0;
    font-size: 35px;
  }
`;
