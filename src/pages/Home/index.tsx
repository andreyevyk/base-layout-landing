import { Button } from '@andreyevyk/traveler-design-system';
import { Card } from 'components/Card';
import { useNavigate } from 'react-router-dom';
import thumbnail from 'assets/florianopolis.png';
import { Wrapper, Main, Places, PlaceCard } from './styles';

export const Home = () => {
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
        <PlaceCard
          img={thumbnail}
          title="Florianópolis"
          description="98 locais"
        />
        <PlaceCard
          img={thumbnail}
          title="Florianópolis"
          description="98 locais"
        />
        <PlaceCard
          img={thumbnail}
          title="Florianópolis"
          description="98 locais"
        />
        <PlaceCard
          img={thumbnail}
          title="Florianópolis"
          description="98 locais"
        />
        <PlaceCard
          img={thumbnail}
          title="Florianópolis"
          description="98 locais"
        />
      </Places>
    </Wrapper>
  );
};
