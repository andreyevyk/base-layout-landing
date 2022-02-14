import { Button } from '@andreyevyk/traveler-design-system';
import { Card } from 'components/Card';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getCities } from 'services/citiesServices';
import { Header } from 'components/Header';
import { Wrapper, Main, Places } from './styles';

interface City {
  id: string;
  description: string;
  name: string;
  places: [];
  thumbnail_url: string;
}

export const Home = () => {
  const { data: cities } = useQuery<City[]>('places', getCities, {
    initialData: [],
  });
  const navigate = useNavigate();
  function navigateToSearch() {
    navigate('/search');
  }

  return (
    <Wrapper>
      <Main>
        <h1>Viver uma grande aventura</h1>
        <span>
          Descrubra locais incríveis para se visitar em cidades maravilhoas de
          Santa Catarina
        </span>
        <Button onClick={navigateToSearch}>Descrobrir todos os lugares</Button>
      </Main>
      <Places>
        {cities.map((city) => (
          <Card
            key={city.id}
            img={city.thumbnail_url}
            title={city.name}
            description={`${city.places.length} locais`}
          />
        ))}
      </Places>
    </Wrapper>
  );
};
