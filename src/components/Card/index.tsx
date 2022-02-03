import { Wrapper } from './styles';

interface CardProps {
  title: string;
  img: string;
  description: string;
}
const Card = ({ title, img, description }: CardProps) => {
  return (
    <Wrapper className="card-component">
      <img src={img} alt="place" />
      <main>
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </main>
    </Wrapper>
  );
};

Card.toString = () => '.card-component';

export { Card };
