import { Wrapper } from './styles';

interface CardProps {
  title: string;
  img: string;
  description: string;
  className?: string;
}
export const Card = ({
  title,
  img,
  description,
  className = '',
}: CardProps) => {
  return (
    <Wrapper className={`card-component ${className}`}>
      <img src={img} alt="place" />
      <div />
      <main>
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </main>
    </Wrapper>
  );
};
