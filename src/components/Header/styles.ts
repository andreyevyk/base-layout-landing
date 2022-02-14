import { Input } from '@andreyevyk/traveler-design-system';
import styled, { css } from 'styled-components';

interface WrapperProps {
  type: 'default' | 'search' | 'city' | 'place';
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 8% 15px;

  ${({ type, theme }) =>
    type !== 'default' &&
    css`
      background-color: ${theme.colors.shape};
      border-bottom: 1px solid ${theme.colors.shape02};
    `}
`;

export const SearchInput = styled(Input)`
  width: 416px;
`;
