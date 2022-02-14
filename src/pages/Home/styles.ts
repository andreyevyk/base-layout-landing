import { Card } from 'components/Card';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 8%;
  display: flex;
  align-items: center;
  height: calc(100% - 87px);
  justify-content: space-between;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  & h1 {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
    font-size: 80px;
    line-height: 73px;
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
  & span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 20px;
    line-height: 30px;

    margin: 45px 0;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Places = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 50%;
  height: 100%;

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 900px) {
    width: 40%;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
  @media (max-width: 600px) {
    display: none;
  }

  .card-component {
    &:nth-of-type(even) {
      position: relative;
      top: 76px;
      @media (max-width: 900px) {
        top: 0;
      }
    }
  }
`;
