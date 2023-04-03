import styled from "styled-components";

const ButtonSubmit = styled.button`
  padding: 10px;
  border-radius: 4px;
  font-size: 1.025rem;
  font-weight: 500;
  background-color: var(--blue-2);
  color: var(--white);
  border: none;

  :hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 5px 1px var(--blue-transparent);
  }
`;

export default ButtonSubmit;
