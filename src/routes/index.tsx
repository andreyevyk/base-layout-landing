import { BaseLayout } from 'pages/BaseLayout';
import { useRoutes } from 'react-router-dom';

export const Routes = () => {
  const element = useRoutes([
    {
      element: <BaseLayout />,
      children: [
        {
          path: '/',
          element: <div>Teste</div>,
        },
        {
          path: '/teste',
          element: <div>Teste4324</div>,
        },
      ],
    },
  ]);

  return element;
};
