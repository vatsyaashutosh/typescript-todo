import styled from "styled-components";
import bgImage from "../../../../assets/images/bgImage.jpg";

export const TodoElementForm = styled.form`
  display: flex;
  width: 29.5%;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  transition: all 0.2s;
  background-image: url(${bgImage});
  &:hover {
    box-shadow: 0 0 5px black;
    transform: scale(1.2);
  }
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const TodoInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
export const TodoSpan = styled.span`
  flex: 1;
  padding: 5px;
  border: none;
  color: green;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`;
export const TodoSpan1 = styled(TodoSpan)`
  text-decoration: line-through;
  color: red;
`;
export const IconSpan = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;
export const IconContainer = styled.div``;
