import logo from 'assets/logo.png';
import { Button } from '@andreyevyk/traveler-design-system';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { Routes } from 'routes';
import { SearchInput, Wrapper } from './styles';

interface IHeader {
  type: 'default' | 'search' | 'city' | 'place';
}

export const Header = ({ type }: IHeader) => {
  return (
    <Wrapper type={type}>
      <Link to="/">
        <img src={logo} alt="traveller" />
      </Link>
      {type === 'search' && <SearchInput />}
      <Button color="secondary">Acesso restrito</Button>
    </Wrapper>
  );
};
