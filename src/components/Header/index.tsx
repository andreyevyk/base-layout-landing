import logo from 'assets/logo.png';
import { Button } from '@andreyevyk/traveler-design-system';
import { Wrapper } from './styles';

export const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="traveller" />

      <Button color="secondary">Acesso restrito</Button>
    </Wrapper>
  );
};
