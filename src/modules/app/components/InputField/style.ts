import styled from "styled-components";

export const TodoForm = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  position: relative;
  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;
export const TodoInput = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;
  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;
export const TodoButton = styled.button`
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  margin: 12px;
  border-radius: 50px;
  border: none;
  font-size: 15px;
  background-color: #2f74c0;
  color: white;
  transition: 0.2s all;
  box-shadow: 0 0 10px black;
  &:hover {
    background-color: #388ae2;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;
