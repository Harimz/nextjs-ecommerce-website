import styled from "styled-components";

export const Input = styled.input`
  padding: 0.5rem 1rem 0.5rem 3rem;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid gray;
  font-size: 1.25rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.green[100]};
  }

  .error {
    border: 1px solid red;
  }
`;
