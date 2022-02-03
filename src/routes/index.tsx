import { BaseLayout } from 'pages/BaseLayout';
import { Home } from 'pages/Home';
import { useRoutes } from 'react-router-dom';

export const Routes = () => {
  const element = useRoutes([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/search',
          element: <div>Teste4324</div>,
        },
      ],
    },
  ]);

  return element;
};
