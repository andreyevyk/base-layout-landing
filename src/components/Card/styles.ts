import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.shape};
  border: 1px solid ${({ theme }) => theme.colors.shape02};
  border-radius: 25px;

  img {
    border-radius: 25px 25px 0 0;
    height: 210px;
    object-fit: cover;
    max-width: 100%;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;
  }

  .title {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    font-size: 23px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.title};

    margin-bottom: 7px;
  }

  .description {
    font-size: 15px;
    line-height: 25px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
