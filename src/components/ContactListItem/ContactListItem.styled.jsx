import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.itemBorder};
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.buttonBackgroundDefault};
  color: ${({ theme }) => theme.colors.buttonText};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHover};
  }
`;
