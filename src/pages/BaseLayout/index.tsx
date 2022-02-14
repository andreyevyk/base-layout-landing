import { Header } from 'components/Header';
import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export const BaseLayout = () => {
  const { pathname } = useLocation();

  const typePaths = useMemo(
    () => ({
      '/search': 'search',
      '/city': 'city',
      '/place': 'place',
      '/': 'default',
    }),
    []
  );

  const headerType = useMemo(() => typePaths[pathname], [pathname]);
  console.log(headerType);
  return (
    <>
      <Header type={headerType} />
      <Outlet />
    </>
  );
};
