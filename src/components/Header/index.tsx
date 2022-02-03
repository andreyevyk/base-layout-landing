import logo from 'assets/logo.png';
import { Button } from '@andreyevyk/traveler-design-system';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { SearchInput, Wrapper } from './styles';

export const Header = () => {
  const { pathname } = useLocation();

  const hadSearch = useMemo(() => pathname.includes('search'), [pathname]);

  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="traveller" />
      </Link>
      {hadSearch && <SearchInput />}
      <Button color="secondary">Acesso restrito</Button>
    </Wrapper>
  );
};
