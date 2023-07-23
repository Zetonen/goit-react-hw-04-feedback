import styled from 'styled-components';

export const TitleFeedback = styled.h2`
  font-size: 32px;
  text-align: center;
`;

export const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const Button = styled.button`
  padding: 10px 40px;

  color: #ffffff;
  background-color: #000000;
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  transition: color 300ms, background-color 300ms, box-shadow 300ms;
  &:hover {
    color: #000000;
    background-color: #e6e6e6;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;
