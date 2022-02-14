import { Input } from '@andreyevyk/traveler-design-system';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 160px 15px;
`;

export const SearchInput = styled(Input)`
  width: 416px;
`;
